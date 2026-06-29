# 🔒 Security Implementation Guide

## Overview

This project implements 15 enterprise-grade security measures covering:
- Header-based protection (CSP, HSTS, CORS)
- Input validation & sanitization
- Rate limiting & threat detection
- Environment configuration hardening
- Automated vulnerability scanning

## Security Measures

### ✅ IMPLEMENTED (9/9 Measures)

#### 1. **HTTPS/HSTS** ✓
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
- Forces HTTPS on all requests
- Valid for 1 year (31536000 seconds)
- Includes subdomains
- Preload for HSTS-preload list

**Location:** `next.config.ts:19`

#### 2. **CORS Headers** ✓
```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Credentials: true
```
- Restricts API access to authorized origins
- Allows safe HTTP methods
- Supports credentials

**Location:** `next.config.ts:24-31` + `middleware.ts:118-125`

#### 3. **Input Validation** ✓
- Email regex + length validation
- Phone number format + bounds check
- Text sanitization + dangerous pattern detection
- Selection/dropdown validation
- Batch form validation

**Location:** `lib/validation.ts`

**Usage in forms:**
```typescript
const validation = validateFormData({
  nombre, email, telefono, informacion
});
if (!validation.valid) {
  setErrors(validation.errors);
  return;
}
```

#### 4. **Data Sanitization** ✓
- HTML tag removal
- Script injection prevention
- URL protocol validation
- Dangerous character filtering
- Length enforcement

**Location:** `lib/validation.ts`

**Available functions:**
```typescript
sanitizeEmail()      // trim + lowercase
sanitizePhone()      // remove invalid chars
sanitizeText()       // remove HTML/scripts
sanitizeFormData()   // batch sanitization
```

#### 5. **Rate Limiting** ✓
- 30 requests per IP per minute
- Automatic window reset
- In-memory storage (no DB needed)
- Auto cleanup every ~5 minutes
- Returns `429 Too Many Requests`

**Location:** `middleware.ts:30-75`

**Response headers:**
```
X-RateLimit-Remaining: 15
X-RateLimit-Reset: 2026-07-01T12:34:56.000Z
```

#### 6. **Security Logging** ✓
- Logs rate limit exceeded events
- Logs suspicious request patterns
- Logs API submissions
- JSON format with metadata
- Console output in development
- External endpoint support (optional)

**Location:** `middleware.ts:105-130`

**Log format:**
```json
{
  "timestamp": "2026-07-01T12:34:56.000Z",
  "type": "rate_limit_exceeded",
  "ip": "203.0.113.1",
  "method": "POST",
  "path": "/api/form",
  "userAgent": "Mozilla/5.0...",
  "details": { "remaining": 0 }
}
```

#### 7. **Environment Variables Check** ✓
- Validates required vars at startup
- Specific format validation per variable
- Halts app if critical var missing
- Logs warnings for optional vars
- Prevents silent failures

**Location:** `lib/env-check.ts`

**Required variables:**
```env
NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB=xxxxx
NEXT_PUBLIC_GTM_ID_JMWEB=GTM-XXXXX
NEXT_PUBLIC_GA4_ID_JMWEB=G-XXXXXXXXXX
URL_DOMAIN_JMWEB=https://yourdomain.com
```

**Optional variables:**
```env
NEXT_PUBLIC_META_PIXEL_ID_JMWEB=xxxxx
NEXT_PUBLIC_LOG_ENDPOINT=https://logging-service.com/log
```

#### 8. **Subresource Integrity (SRI)** ✓
- Framework for SRI hashes
- Supports GTM, GA4, Meta Pixel
- Helper to generate script tags
- Instructions for hash updates

**Location:** `lib/sri-hashes.ts`

**Get SRI hashes from:** https://www.srihash.org/

**Note:** GTM and GA4 include dynamic IDs, so SRI hashes may vary. Use CSP instead.

#### 9. **Dependabot Configuration** ✓
- Daily npm checks at 03:00 UTC
- Weekly GitHub Actions checks
- Immediate security updates
- Auto-rebase enabled
- Max 10 open PRs

**Location:** `.github/dependabot.yml`

---

## Additional Security Headers (Pre-existing)

```
Content-Security-Policy: script-src 'self' ... https://www.googletagmanager.com ...
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## Setup Instructions

### 1. Environment Variables

Create `.env.local`:
```bash
# Required
NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB=xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GTM_ID_JMWEB=GTM-ABCDEFG
NEXT_PUBLIC_GA4_ID_JMWEB=G-XXXXXXXXXX
URL_DOMAIN_JMWEB=https://landing-pages-olive-phi.vercel.app

# Optional
NEXT_PUBLIC_META_PIXEL_ID_JMWEB=123456789012345
NEXT_PUBLIC_LOG_ENDPOINT=https://your-logging-service.com/log
```

### 2. Run Security Check

```bash
npm run security-check
```

Expected output:
```
✅ 15/15 measures implemented (100%)
✅ All security measures are in place!
```

### 3. Audit Dependencies

```bash
npm audit
```

Fix vulnerabilities:
```bash
npm audit fix
```

---

## Form Implementation Example

All forms should follow this pattern:

```typescript
'use client';

import { useState, FormEvent } from 'react';
import { validateFormData, sanitizeFormData } from '@/lib/validation';

interface FormError {
  field: string;
  message: string;
}

export function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormError[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    // Validate
    const validation = validateFormData({ nombre, email });
    if (!validation.valid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    // Sanitize
    const sanitized = sanitizeFormData({ nombre, email });

    // Submit
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      });

      if (response.ok) {
        setEnviado(true);
        setNombre('');
        setEmail('');
      }
    } catch (error) {
      setErrors([{ field: 'general', message: 'Error al enviar' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="error-box">
          {errors.map((err) => (
            <p key={err.field} className="error-text">
              {err.field}: {err.message}
            </p>
          ))}
        </div>
      )}

      <input
        type="text"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
          setErrors(errors.filter((err) => err.field !== 'nombre'));
        }}
        disabled={isLoading}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors(errors.filter((err) => err.field !== 'email'));
        }}
        disabled={isLoading}
      />

      <button type="submit" disabled={isLoading || enviado}>
        {isLoading ? 'Enviando...' : enviado ? '✓ Enviado' : 'Enviar'}
      </button>
    </form>
  );
}
```

---

## Monitoring

### Development

```bash
npm run dev
```

Security events logged to console:
```
[SECURITY] {
  "timestamp": "2026-07-01T12:34:56.000Z",
  "type": "rate_limit_exceeded",
  ...
}
```

### Production

Security logs sent to `NEXT_PUBLIC_LOG_ENDPOINT` (if configured).

Example logging service setup:
```javascript
// pages/api/logs.ts
export default async function handler(req, res) {
  const { timestamp, type, ip, method, path } = req.body;
  
  // Log to your system
  console.log(`[${type}] ${ip} ${method} ${path}`);
  
  res.status(200).json({ ok: true });
}
```

---

## Testing

### Manual Testing

1. **Rate Limiting:**
   - Send 31 requests in 60 seconds from same IP
   - 31st request returns 429

2. **Input Validation:**
   - Try `<script>alert('xss')</script>` in form
   - Form rejects or sanitizes it

3. **Suspicious Patterns:**
   - Try path like `/api/../../etc/passwd`
   - Request returns 403 Forbidden

### Automated Testing

```bash
npm test
```

Check for security vulnerabilities:
```bash
npm audit
```

---

## OWASP Top 10 Coverage

| OWASP | Mitigation |
|-------|-----------|
| A1 - Broken Access Control | CORS, HSTS, Rate Limiting |
| A2 - Cryptographic Failures | HTTPS/HSTS enforced |
| A3 - Injection | Input validation, sanitization |
| A4 - Insecure Design | Security logging, monitoring |
| A5 - Security Misconfiguration | Env validation, secure defaults |
| A6 - Vulnerable/Outdated | Dependabot automated updates |
| A7 - Auth/Session Mgmt | Secure cookies (Vercel default) |
| A8 - Data Integrity Failures | SRI framework, CSP |
| A9 - Logging & Monitoring | Security event logging |
| A10 - SSRF | Input validation, sanitization |

---

## Scripts

```bash
# Check security implementation
npm run security-check

# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Deployment Checklist

- [ ] `.env.local` configured with all required variables
- [ ] `npm run security-check` passes 100%
- [ ] `npm audit` shows 0 vulnerabilities
- [ ] All forms implement validation + sanitization
- [ ] Rate limiting working (test with 31+ requests)
- [ ] Logging endpoint configured (if monitoring)
- [ ] HSTS preload submitted to https://hstspreload.org
- [ ] CSP report-uri configured (optional, for violation reports)
- [ ] Dependabot enabled in GitHub

---

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [MDN: HSTS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [SRI Hash Generator](https://www.srihash.org/)
- [HSTS Preload](https://hstspreload.org/)
