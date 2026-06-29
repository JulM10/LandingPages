/**
 * Environment Variables Validation
 * Server-side only - validates required env vars at startup
 */

interface EnvValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates GTM ID format
 */
function isValidGTMId(id: string): boolean {
  return /^GTM-[A-Z0-9]{6,}$/.test(id);
}

/**
 * Validates GA4 ID format
 */
function isValidGA4Id(id: string): boolean {
  return /^G-[A-Z0-9]{10,}$/.test(id);
}

/**
 * Validates Meta Pixel ID format
 */
function isValidPixelId(id: string): boolean {
  return /^[0-9]{15,}$/.test(id);
}

/**
 * Validates URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Comprehensive environment variables validation
 * Runs at server startup
 */
export function validateEnvironmentVariables(): EnvValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required variables
  const requiredVars = {
    NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB: { type: 'string', minLength: 20 },
    NEXT_PUBLIC_GTM_ID_JMWEB: { type: 'gtmId' },
    NEXT_PUBLIC_GA4_ID_JMWEB: { type: 'ga4Id' },
    URL_DOMAIN_JMWEB: { type: 'url' },
  };

  // Optional variables
  const optionalVars = {
    NEXT_PUBLIC_META_PIXEL_ID_JMWEB: { type: 'pixelId' },
    NEXT_PUBLIC_LOG_ENDPOINT: { type: 'url' },
  };

  // Check required variables
  for (const [varName, config] of Object.entries(requiredVars)) {
    const value = process.env[varName];

    if (!value) {
      errors.push(`Missing required environment variable: ${varName}`);
      continue;
    }

    // Type-specific validation
    switch (config.type) {
      case 'string':
        if (value.length < (config.minLength || 1)) {
          errors.push(`${varName} is too short (minimum: ${config.minLength} characters)`);
        }
        break;

      case 'gtmId':
        if (!isValidGTMId(value)) {
          errors.push(`${varName} has invalid format. Expected: GTM-XXXXXX`);
        }
        break;

      case 'ga4Id':
        if (!isValidGA4Id(value)) {
          errors.push(`${varName} has invalid format. Expected: G-XXXXXXXXXX`);
        }
        break;

      case 'url':
        if (!isValidUrl(value)) {
          errors.push(`${varName} is not a valid URL`);
        }
        break;
    }
  }

  // Check optional variables
  for (const [varName, config] of Object.entries(optionalVars)) {
    const value = process.env[varName];

    if (!value) {
      warnings.push(`Optional environment variable not set: ${varName}`);
      continue;
    }

    // Type-specific validation
    switch (config.type) {
      case 'pixelId':
        if (!isValidPixelId(value)) {
          warnings.push(
            `${varName} might have invalid format. Expected: numeric pixel ID (15+ digits)`
          );
        }
        break;

      case 'url':
        if (!isValidUrl(value)) {
          warnings.push(`${varName} is not a valid URL`);
        }
        break;
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Initialize security checks at app startup
 * Call from layout.tsx
 */
export function initializeSecurityChecks(): void {
  if (typeof window !== 'undefined') {
    // This is client-side, don't run
    return;
  }

  const validation = validateEnvironmentVariables();

  if (!validation.valid) {
    console.error('🔴 SECURITY: Environment validation failed:');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  if (validation.warnings.length > 0) {
    console.warn('🟡 SECURITY: Environment warnings:');
    validation.warnings.forEach((warning) => console.warn(`  - ${warning}`));
  }

  console.log('✅ SECURITY: Environment variables validated successfully');
}
