# 🚀 Security Quick Start

## 1. Setup (5 minutes)

### Create `.env.local`
```bash
# Copy and fill with your values
cat > .env.local << 'EOF'
# Required - Get from respective services
NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB=your_web3forms_key
NEXT_PUBLIC_GTM_ID_JMWEB=GTM-XXXXXX
NEXT_PUBLIC_GA4_ID_JMWEB=G-XXXXXXXXXX
URL_DOMAIN_JMWEB=https://yourdomain.com

# Optional - For Meta Pixel and Security Logging
NEXT_PUBLIC_META_PIXEL_ID_JMWEB=your_pixel_id
NEXT_PUBLIC_LOG_ENDPOINT=https://your-logging-service.com/log
EOF
```

### Install Dependencies
```bash
npm install
```

### Verify Security
```bash
npm run security-check
```

Expected: `✅ 15/15 measures implemented (100%)`

---

## 2. Using Validation & Sanitization

### In Forms

```typescript
import { validateFormData, sanitizeFormData } from '@/lib/validation';

// In your form onSubmit:
const validation = validateFormData({
  nombre,
  email,
  telefono,
  informacion
});

if (!validation.valid) {
  setErrors(validation.errors);  // Show errors to user
  return;
}

// Sanitize before sending
const sanitized = sanitizeFormData({ nombre, email, telefono });

// Send to API
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(sanitized)
});
```

### Individual Validators

```typescript
import {
  validateEmail,
  validatePhone,
  validateText,
  sanitizeEmail,
  sanitizePhone
} from '@/lib/validation';

// Email
if (!validateEmail(email)) {
  setError('Email inválido');
}

// Phone
if (!validatePhone(telefono)) {
  setError('Teléfono inválido');
}

// Text (names, company, etc)
if (!validateText(nombre, 2, 100)) {
  setError('Nombre inválido');
}
```

---

## 3. Monitoring

### Development

```bash
npm run dev
```

Security events print to console:
```
[SECURITY] {
  "type": "rate_limit_exceeded",
  "ip": "203.0.113.1",
  ...
}
```

### Testing Rate Limiting

```bash
# Send 31 requests in 60 seconds
for i in {1..31}; do
  curl -X POST http://localhost:3000/api/form \
    -d '{"nombre":"test"}'
done

# 31st request should return 429
```

### Test Input Validation

Try submitting form with:
- `<script>alert('xss')</script>` → Rejected
- `admin' OR '1'='1` → Rejected
- `../../../etc/passwd` → Rejected

---

## 4. Deployment

### Pre-Deploy Checklist

```bash
# Check security measures
npm run security-check

# Audit dependencies
npm audit

# Fix any vulnerabilities
npm audit fix

# Build
npm run build

# Test build
npm run start
```

### Required for Production

1. ✅ `.env.local` with all required variables
2. ✅ `npm run security-check` = 100%
3. ✅ `npm audit` = 0 vulnerabilities
4. ✅ GitHub Dependabot enabled
5. ✅ All forms using validation + sanitization

---

## 5. Understanding Each Security Measure

| Measure | What It Does | Test Method |
|---------|-------------|------------|
| **HTTPS/HSTS** | Forces HTTPS only | `curl -I https://...` (no redirects) |
| **CORS** | Restricts API access | `curl -H "Origin: evil.com" ...` (should 403) |
| **Rate Limiting** | 30 requests/min/IP | Send 31 requests (31st = 429) |
| **Input Validation** | Rejects bad data | `<script>` in form (should error) |
| **Sanitization** | Cleans user input | `javascript:` in email (removed) |
| **Env Vars Check** | Catches misconfig | Missing env var (app fails to start) |
| **Security Logging** | Tracks events | Check console/endpoint for logs |
| **SRI** | Prevents CDN compromise | CSP enforces script integrity |
| **Dependabot** | Auto security updates | GitHub PRs for dependency updates |

---

## 6. Adding Security to New Forms

Template for new form component:

```typescript
'use client';

import { useState, FormEvent } from 'react';
import { validateFormData, sanitizeFormData } from '@/lib/validation';

interface FormError {
  field: string;
  message: string;
}

export function MyForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormError[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    // 1. Validate
    const validation = validateFormData(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    // 2. Sanitize
    const sanitized = sanitizeFormData(formData);

    // 3. Submit
    try {
      const res = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      });

      if (res.ok) {
        setEnviado(true);
        setFormData({ nombre: '', email: '' });
      } else {
        setErrors([{
          field: 'general',
          message: 'Error al enviar. Intenta de nuevo.'
        }]);
      }
    } catch (error) {
      setErrors([{
        field: 'general',
        message: 'Error de conexión'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="error-container">
          {errors.map(err => (
            <p key={err.field} className="error-message">
              {err.message}
            </p>
          ))}
        </div>
      )}

      <input
        type="text"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={(e) => {
          setFormData({ ...formData, nombre: e.target.value });
          // Clear field-specific errors on change
          setErrors(errors.filter(err => err.field !== 'nombre'));
        }}
        disabled={isLoading}
        required
      />

      <input
        type="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          setErrors(errors.filter(err => err.field !== 'email'));
        }}
        disabled={isLoading}
        required
      />

      <button type="submit" disabled={isLoading || enviado}>
        {isLoading ? 'Enviando...' : enviado ? '✓ Enviado' : 'Enviar'}
      </button>
    </form>
  );
}
```

---

## 7. Troubleshooting

### App Won't Start
**Issue:** Missing environment variable
```
Error: Missing required environment variable: NEXT_PUBLIC_GTM_ID_JMWEB
```
**Fix:** Add to `.env.local` and restart dev server

### Form Submission Getting 429
**Issue:** Rate limiting engaged
```
HTTP 429: Too Many Requests
```
**Fix:** Wait 60 seconds, then retry (per IP)

### "Suspicious pattern detected"
**Issue:** Input contains injection attempt
```
HTTP 403: Forbidden
```
**Fix:** User input contains `../`, `'`, `;`, etc. Invalid form data.

### Email Validation Fails
**Issue:** Invalid email format
```
Email inválido
```
**Fix:** Must be valid format: `user@domain.com`

---

## 8. Environment Variables Explained

```env
# Web3Forms contact form API key
# Get from: https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Google Tag Manager ID
# Format: GTM-XXXXXX (GTM followed by 6+ chars)
NEXT_PUBLIC_GTM_ID_JMWEB=GTM-ABC1234

# Google Analytics 4 Measurement ID
# Format: G-XXXXXXXXXX (G followed by 10+ chars)
NEXT_PUBLIC_GA4_ID_JMWEB=G-ABCDEFGHIJ

# Your domain for CORS
# Must be valid HTTPS URL
URL_DOMAIN_JMWEB=https://yourdomain.com

# Meta Pixel ID (optional)
# Format: numeric pixel ID (15+ digits)
NEXT_PUBLIC_META_PIXEL_ID_JMWEB=123456789012345

# External security logging endpoint (optional)
# Send security events here for monitoring
NEXT_PUBLIC_LOG_ENDPOINT=https://logs.yourdomain.com/security
```

---

## 9. Commands Cheat Sheet

```bash
# Development
npm run dev              # Start dev server with security checks

# Security
npm run security-check  # Verify all 15 measures are active
npm audit               # Check for dependency vulnerabilities
npm audit fix           # Auto-fix vulnerable dependencies

# Building
npm run build           # Build for production (includes security checks)
npm run start           # Start production server

# Linting
npm run lint            # Check code quality
```

---

## Support

See full documentation in [SECURITY.md](./SECURITY.md)

For issues:
1. Run `npm run security-check`
2. Check `.env.local` for all required variables
3. Review browser console for client-side errors
4. Check terminal for server-side errors
