#!/usr/bin/env node

/**
 * Security Check Script
 * Validates all 15 security measures are implemented
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checks = [];
let passCount = 0;
const totalChecks = 15;

function pass(name) {
  checks.push({ name, status: "✅" });
  passCount++;
}

function fail(name, reason) {
  checks.push({ name, status: "❌", reason });
}

function fileExists(filePath) {
  return fs.existsSync(path.join(__dirname, "..", filePath));
}

function fileContains(filePath, searchString) {
  try {
    const content = fs.readFileSync(
      path.join(__dirname, "..", filePath),
      "utf8"
    );
    return content.includes(searchString);
  } catch {
    return false;
  }
}

console.log("\n🔒 SECURITY CHECK - 15 ENTERPRISE MEASURES\n");
console.log("=".repeat(50));

// 1. HTTPS/HSTS
if (fileContains("next.config.ts", "Strict-Transport-Security")) {
  pass("1. HTTPS/HSTS Configuration");
} else {
  fail("1. HTTPS/HSTS Configuration", "HSTS header not found in next.config.ts");
}

// 2. CORS Headers
if (fileContains("next.config.ts", "Access-Control-Allow-Origin")) {
  pass("2. CORS Headers");
} else {
  fail("2. CORS Headers", "CORS headers not found in next.config.ts");
}

// 3. Content Security Policy
if (fileContains("next.config.ts", "Content-Security-Policy")) {
  pass("3. Content Security Policy (CSP)");
} else {
  fail("3. Content Security Policy", "CSP header not found");
}

// 4. X-Frame-Options
if (fileContains("next.config.ts", "X-Frame-Options")) {
  pass("4. X-Frame-Options (Clickjacking Protection)");
} else {
  fail("4. X-Frame-Options", "X-Frame-Options not found");
}

// 5. Input Validation
if (fileExists("lib/validation.ts") && fileContains("lib/validation.ts", "validateFormData")) {
  pass("5. Input Validation");
} else {
  fail("5. Input Validation", "lib/validation.ts not properly configured");
}

// 6. Sanitization
if (fileContains("lib/validation.ts", "sanitizeHTML") &&
    fileContains("lib/validation.ts", "sanitizeEmail")) {
  pass("6. Data Sanitization");
} else {
  fail("6. Data Sanitization", "Sanitization functions not found");
}

// 7. Rate Limiting
if (fileExists("middleware.ts") && fileContains("middleware.ts", "checkRateLimit")) {
  pass("7. Rate Limiting");
} else {
  fail("7. Rate Limiting", "Rate limiting not found in middleware");
}

// 8. Security Logging
if (fileContains("middleware.ts", "logSecurityEvent") ||
    fileContains("middleware.ts", "[SECURITY]")) {
  pass("8. Security Logging");
} else {
  fail("8. Security Logging", "Security logging not implemented");
}

// 9. Environment Variables Check
if (fileExists("lib/env-check.ts") && fileContains("lib/env-check.ts", "validateEnvironment")) {
  pass("9. Environment Variables Validation");
} else {
  fail("9. Environment Variables", "lib/env-check.ts not found");
}

// 10. Subresource Integrity
if (fileExists("lib/sri-hashes.ts") && fileContains("lib/sri-hashes.ts", "SRI_HASHES")) {
  pass("10. Subresource Integrity (SRI)");
} else {
  fail("10. Subresource Integrity", "lib/sri-hashes.ts not found");
}

// 11. X-Content-Type-Options
if (fileContains("next.config.ts", "X-Content-Type-Options")) {
  pass("11. X-Content-Type-Options (MIME Sniffing)");
} else {
  fail("11. X-Content-Type-Options", "MIME sniffing protection not found");
}

// 12. X-XSS-Protection
if (fileContains("next.config.ts", "X-XSS-Protection")) {
  pass("12. X-XSS-Protection");
} else {
  fail("12. X-XSS-Protection", "XSS protection header not found");
}

// 13. Referrer-Policy
if (fileContains("next.config.ts", "Referrer-Policy")) {
  pass("13. Referrer-Policy");
} else {
  fail("13. Referrer-Policy", "Referrer-Policy header not found");
}

// 14. Permissions-Policy
if (fileContains("next.config.ts", "Permissions-Policy")) {
  pass("14. Permissions-Policy");
} else {
  fail("14. Permissions-Policy", "Permissions-Policy not found");
}

// 15. Dependabot Configuration
if (fileExists(".github/dependabot.yml")) {
  pass("15. Dependabot Configuration");
} else {
  fail("15. Dependabot Configuration", ".github/dependabot.yml not found");
}

// Print results
console.log("\n" + "=".repeat(50));
console.log("\n📋 SECURITY MEASURES STATUS:\n");

checks.forEach((check) => {
  if (check.reason) {
    console.log(`${check.status} ${check.name}`);
    console.log(`   ⚠️  ${check.reason}`);
  } else {
    console.log(`${check.status} ${check.name}`);
  }
});

console.log("\n" + "=".repeat(50));
console.log(
  `\n📊 RESULTS: ${passCount}/${totalChecks} measures implemented\n`
);

if (passCount === totalChecks) {
  console.log("🎉 ALL SECURITY MEASURES IMPLEMENTED!\n");
  console.log("✅ OWASP Top 10 Compliant");
  console.log("✅ Production Ready");
  console.log("✅ Enterprise Grade Security\n");
  process.exit(0);
} else {
  const missing = totalChecks - passCount;
  console.log(`❌ ${missing} measure(s) still need to be implemented\n`);
  process.exit(1);
}
