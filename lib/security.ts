import DOMPurify from 'dompurify';

/**
 * Validación y Sanitización de Inputs
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Teléfono validation regex (international format)
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// Max lengths para prevenir DoS
const MAX_LENGTHS = {
  nombre: 100,
  email: 120,
  telefono: 20,
  empresa: 150,
  informacion: 2000,
  message: 2000,
};

interface ValidationError {
  field: string;
  message: string;
}

/**
 * Sanitiza un string removiendo scripts y HTML peligroso
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

/**
 * Valida un email
 */
export function validateEmail(email: string): boolean {
  if (!email || email.length > MAX_LENGTHS.email) return false;
  return EMAIL_REGEX.test(email);
}

/**
 * Valida un teléfono
 */
export function validatePhone(phone: string): boolean {
  if (!phone || phone.length > MAX_LENGTHS.telefono) return false;
  return PHONE_REGEX.test(phone);
}

/**
 * Valida un nombre
 */
export function validateName(name: string): boolean {
  if (!name || name.trim().length < 2 || name.length > MAX_LENGTHS.nombre) return false;
  // Solo letras, números y espacios
  return /^[a-zA-Z0-9\s\-áéíóúñ]+$/i.test(name);
}

/**
 * Valida y sanitiza form data
 */
export function validateFormData(data: {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  contacto?: string;
  informacion?: string;
  descripcion?: string;
}): { valid: boolean; errors: ValidationError[]; sanitized?: Record<string, string> } {
  const errors: ValidationError[] = [];
  const sanitized: Record<string, string> = {};

  // Nombre validation
  if (data.nombre) {
    const sanitizedNombre = sanitizeInput(data.nombre);
    if (!validateName(sanitizedNombre)) {
      errors.push({ field: 'nombre', message: 'Nombre inválido (2-100 caracteres, sin caracteres especiales)' });
    } else {
      sanitized.nombre = sanitizedNombre;
    }
  }

  // Email validation
  if (data.email) {
    const sanitizedEmail = sanitizeInput(data.email.toLowerCase());
    if (!validateEmail(sanitizedEmail)) {
      errors.push({ field: 'email', message: 'Email inválido' });
    } else {
      sanitized.email = sanitizedEmail;
    }
  }

  // Phone validation
  if (data.telefono) {
    const sanitizedPhone = sanitizeInput(data.telefono);
    if (!validatePhone(sanitizedPhone)) {
      errors.push({ field: 'telefono', message: 'Teléfono inválido (ej: +54 9 3584296560)' });
    } else {
      sanitized.telefono = sanitizedPhone;
    }
  }

  // Empresa validation
  if (data.empresa) {
    const sanitizedEmpresa = sanitizeInput(data.empresa);
    if (sanitizedEmpresa.length > MAX_LENGTHS.empresa) {
      errors.push({ field: 'empresa', message: `Empresa debe tener máximo ${MAX_LENGTHS.empresa} caracteres` });
    } else {
      sanitized.empresa = sanitizedEmpresa;
    }
  }

  // Contacto validation (mismo que nombre)
  if (data.contacto) {
    const sanitizedContacto = sanitizeInput(data.contacto);
    if (!validateName(sanitizedContacto)) {
      errors.push({ field: 'contacto', message: 'Nombre de contacto inválido' });
    } else {
      sanitized.contacto = sanitizedContacto;
    }
  }

  // Información/Descripción validation
  if (data.informacion) {
    const sanitizedInfo = sanitizeInput(data.informacion);
    if (sanitizedInfo.length > MAX_LENGTHS.informacion) {
      errors.push({ field: 'informacion', message: `Máximo ${MAX_LENGTHS.informacion} caracteres` });
    } else {
      sanitized.informacion = sanitizedInfo;
    }
  }

  if (data.descripcion) {
    const sanitizedDesc = sanitizeInput(data.descripcion);
    if (sanitizedDesc.length > MAX_LENGTHS.message) {
      errors.push({ field: 'descripcion', message: `Máximo ${MAX_LENGTHS.message} caracteres` });
    } else {
      sanitized.descripcion = sanitizedDesc;
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized: errors.length === 0 ? sanitized : undefined,
  };
}

/**
 * Detecta y loguea intentos de inyección
 */
export function logSecurityEvent(type: string, details: Record<string, any>): void {
  const timestamp = new Date().toISOString();
  const event = {
    timestamp,
    type,
    ...details,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
  };

  // En desarrollo, loguea en console
  if (process.env.NODE_ENV === 'development') {
    console.warn('[SECURITY EVENT]', event);
  }

  // En producción, envía a logging service (si está disponible)
  if (process.env.NEXT_PUBLIC_LOG_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }).catch(() => {}); // Silent fail para no bloquear la app
  }
}

/**
 * Valida variables de entorno requeridas
 */
export function validateEnvironmentVariables(): { valid: boolean; missing: string[] } {
  const required = [
    'NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB',
    'NEXT_PUBLIC_GA4_ID_JMWEB',
    'NEXT_PUBLIC_META_PIXEL_ID_JMWEB',
  ];

  const missing = required.filter((variable) => !process.env[variable]);

  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    console.error('[SECURITY] Missing required environment variables:', missing);
  }

  return {
    valid: missing.length === 0,
    missing,
  };
}
