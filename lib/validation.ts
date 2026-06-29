/**
 * Validation & Sanitization Library
 * Comprehensive input validation and data sanitization
 */

// Validation Regex Patterns
const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  url: /^https?:\/\/.+/,
  gtmId: /^GTM-[A-Z0-9]+$/,
  ga4Id: /^G-[A-Z0-9]+$/,
  pixelId: /^[0-9]+$/,
};

// Max lengths to prevent DoS
const MAX_LENGTHS = {
  nombre: 100,
  empresa: 150,
  email: 120,
  telefono: 20,
  contacto: 100,
  informacion: 2000,
  descripcion: 2000,
  message: 2000,
};

// Dangerous patterns to detect injection attempts
const DANGEROUS_PATTERNS = {
  pathTraversal: /\.\.\//,
  sqlInjection: /('|(;)|(--|\/\*))/,
  commandInjection: /[|;&$()]/,
  scriptTag: /<script|javascript:/i,
};

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const sanitized = sanitizeEmail(email);
  return PATTERNS.email.test(sanitized) && sanitized.length <= MAX_LENGTHS.email;
}

/**
 * Validates phone number format
 */
export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const sanitized = sanitizePhone(phone);
  return PATTERNS.phone.test(sanitized) && sanitized.length <= MAX_LENGTHS.telefono;
}

/**
 * Validates text input (names, company, etc)
 */
export function validateText(text: string, minLength = 2, maxLength = 100): boolean {
  if (!text || typeof text !== 'string') return false;
  const trimmed = text.trim();
  return (
    trimmed.length >= minLength &&
    trimmed.length <= maxLength &&
    /^[a-zA-Z0-9\s\-áéíóúñ]+$/i.test(trimmed)
  );
}

/**
 * Validates dropdown selection (investment amount, etc)
 */
export function validateSelection(value: string, validOptions: string[]): boolean {
  return typeof value === 'string' && validOptions.includes(value);
}

/**
 * Sanitizes email: trim + lowercase
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

/**
 * Sanitizes phone: remove special chars except +
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') return '';
  return phone.replace(/[^\d+\-.\s()]/g, '').trim();
}

/**
 * Sanitizes text: trim + remove scripts
 */
export function sanitizeText(text: string): string {
  if (typeof text !== 'string') return '';
  return text
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .substring(0, MAX_LENGTHS.message);
}

/**
 * Detects suspicious patterns (injection attempts)
 */
export function detectSuspiciousPatterns(input: string): { suspicious: boolean; type?: string } {
  if (typeof input !== 'string') return { suspicious: false };

  for (const [type, pattern] of Object.entries(DANGEROUS_PATTERNS)) {
    if (pattern.test(input)) {
      return { suspicious: true, type };
    }
  }

  return { suspicious: false };
}

/**
 * Comprehensive form validation
 */
export function validateFormData(data: {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  contacto?: string;
  informacion?: string;
  descripcion?: string;
  inversion?: string;
  investmentOptions?: string[];
}): { valid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  // Nombre validation
  if (data.nombre) {
    if (!validateText(data.nombre, 2, MAX_LENGTHS.nombre)) {
      errors.push({
        field: 'nombre',
        message: 'Nombre inválido (2-100 caracteres, sin caracteres especiales)',
      });
    }
    const suspicious = detectSuspiciousPatterns(data.nombre);
    if (suspicious.suspicious) {
      errors.push({
        field: 'nombre',
        message: 'Nombre contiene caracteres no permitidos',
      });
    }
  }

  // Email validation
  if (data.email) {
    if (!validateEmail(data.email)) {
      errors.push({
        field: 'email',
        message: 'Email inválido',
      });
    }
  }

  // Phone validation
  if (data.telefono) {
    if (!validatePhone(data.telefono)) {
      errors.push({
        field: 'telefono',
        message: 'Teléfono inválido (ej: +54 9 3584296560)',
      });
    }
  }

  // Empresa validation
  if (data.empresa) {
    if (!validateText(data.empresa, 2, MAX_LENGTHS.empresa)) {
      errors.push({
        field: 'empresa',
        message: `Empresa inválida (2-${MAX_LENGTHS.empresa} caracteres)`,
      });
    }
  }

  // Contacto validation
  if (data.contacto) {
    if (!validateText(data.contacto, 2, MAX_LENGTHS.contacto)) {
      errors.push({
        field: 'contacto',
        message: 'Contacto inválido',
      });
    }
  }

  // Information/Description validation
  if (data.informacion) {
    const sanitized = sanitizeText(data.informacion);
    if (sanitized.length > MAX_LENGTHS.informacion) {
      errors.push({
        field: 'informacion',
        message: `Máximo ${MAX_LENGTHS.informacion} caracteres`,
      });
    }
    const suspicious = detectSuspiciousPatterns(data.informacion);
    if (suspicious.suspicious) {
      errors.push({
        field: 'informacion',
        message: 'Contiene caracteres no permitidos',
      });
    }
  }

  if (data.descripcion) {
    const sanitized = sanitizeText(data.descripcion);
    if (sanitized.length > MAX_LENGTHS.descripcion) {
      errors.push({
        field: 'descripcion',
        message: `Máximo ${MAX_LENGTHS.descripcion} caracteres`,
      });
    }
  }

  // Investment validation
  if (data.inversion && data.investmentOptions) {
    if (!validateSelection(data.inversion, data.investmentOptions)) {
      errors.push({
        field: 'inversion',
        message: 'Selección de inversión inválida',
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitizes entire form data batch
 */
export function sanitizeFormData(data: Record<string, any>): Record<string, string> {
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value !== 'string') continue;

    switch (key) {
      case 'email':
        sanitized[key] = sanitizeEmail(value);
        break;
      case 'telefono':
      case 'phone':
        sanitized[key] = sanitizePhone(value);
        break;
      case 'nombre':
      case 'empresa':
      case 'contacto':
      case 'name':
        sanitized[key] = sanitizeText(value);
        break;
      default:
        sanitized[key] = sanitizeText(value);
    }
  }

  return sanitized;
}
