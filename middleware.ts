import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security Middleware
 * - Rate limiting (30 req/min per IP)
 * - CORS headers
 * - Security logging
 * - Suspicious request detection
 */

// Rate limiting map: IP -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Security logging
interface SecurityLog {
  timestamp: string;
  type: 'rate_limit_exceeded' | 'suspicious_pattern' | 'api_submission';
  ip: string;
  method: string;
  path: string;
  userAgent?: string;
  details?: Record<string, any>;
}

const securityLogs: SecurityLog[] = [];

// Config
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 30; // máximo de requests por ventana
const LOG_RETENTION = 24 * 60 * 60 * 1000; // 24 horas

/**
 * Extrae la IP del cliente (soporta proxies)
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    request.headers.get('cf-connecting-ip')?.trim() ||
    'unknown'
  );
}

/**
 * Detecta patrones sospechosos en la ruta
 */
function detectSuspiciousPatterns(path: string): boolean {
  const suspiciousPatterns = [
    /\.\.\//,              // Path traversal
    /(;|\||&|`|\$\()/,    // Command injection
    /('|(--|\/\*))/,       // SQL injection
    /<script|javascript:/i, // Script injection
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(path));
}

/**
 * Valida rate limiting
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Nueva ventana o IP no existe
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  record.count++;
  const allowed = record.count <= RATE_LIMIT_MAX_REQUESTS;
  const remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - record.count);

  return { allowed, remaining };
}

/**
 * Registra evento de seguridad
 */
function logSecurityEvent(
  type: SecurityLog['type'],
  ip: string,
  method: string,
  path: string,
  userAgent?: string,
  details?: Record<string, any>
): void {
  const log: SecurityLog = {
    timestamp: new Date().toISOString(),
    type,
    ip,
    method,
    path,
    userAgent,
    details,
  };

  securityLogs.push(log);

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.warn('[SECURITY]', JSON.stringify(log, null, 2));
  }

  // Send to logging endpoint if configured
  if (process.env.NEXT_PUBLIC_LOG_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log),
    }).catch(() => {}); // Silent fail
  }
}

/**
 * Limpia registros expirados
 */
function cleanupLogs(): void {
  const now = Date.now();
  const initialCount = securityLogs.length;

  // Rate limit map cleanup
  if (Math.random() > 0.95) {
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }

  // Security logs cleanup
  const filtered = securityLogs.filter((log) => {
    const logTime = new Date(log.timestamp).getTime();
    return now - logTime < LOG_RETENTION;
  });

  if (filtered.length !== initialCount) {
    securityLogs.length = 0;
    securityLogs.push(...filtered);
  }
}

export function middleware(request: NextRequest) {
  const ip = getClientIp(request);
  const method = request.method;
  const path = request.nextUrl.pathname;
  const userAgent = request.headers.get('user-agent') || undefined;

  cleanupLogs();

  // Detect suspicious patterns
  if (detectSuspiciousPatterns(path)) {
    logSecurityEvent('suspicious_pattern', ip, method, path, userAgent, {
      reason: 'Suspicious pattern detected in path',
    });

    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Rate limiting
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    logSecurityEvent('rate_limit_exceeded', ip, method, path, userAgent, {
      remaining: 0,
    });

    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Add rate limit headers to response
  const response = NextResponse.next();

  // CORS headers
  const origin = request.headers.get('origin');
  const corsOrigin = origin && origin.includes(process.env.URL_DOMAIN_JMWEB || '') ? origin : '*';

  response.headers.set('Access-Control-Allow-Origin', corsOrigin);
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Max-Age', '86400');

  // Rate limit info headers
  response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString());
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + RATE_LIMIT_WINDOW).toISOString());

  return response;
}

export const config = {
  matcher: [
    '/api/:path*',      // All API routes
    '/form/:path*',     // Form submissions
  ],
};
