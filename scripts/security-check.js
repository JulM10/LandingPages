#!/usr/bin/env node

/**
 * Security Check Script
 * Validates all security implementations
 * Run: npm run security-check
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// Color output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath, name) {
  const fullPath = path.join(projectRoot, filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${name}`, 'green');
    return true;
  } else {
    log(`❌ ${name} (${filePath})`, 'red');
    return false;
  }
}

function checkEnvVars() {
  const envLocal = path.join(projectRoot, '.env.local');
  const envExample = path.join(projectRoot, '.env.example');

  log('\n📋 Environment Variables:', 'blue');

  const required = [
    'NEXT_PUBLIC_WEB3FORMS_KEY_JMWEB',
    'NEXT_PUBLIC_GTM_ID_JMWEB',
    'NEXT_PUBLIC_GA4_ID_JMWEB',
    'URL_DOMAIN_JMWEB',
  ];

  const optional = [
    'NEXT_PUBLIC_META_PIXEL_ID_JMWEB',
    'NEXT_PUBLIC_LOG_ENDPOINT',
  ];

  if (!fs.existsSync(envLocal)) {
    log('⚠️  .env.local not found', 'yellow');
    log('   Create .env.local with required variables', 'yellow');
  } else {
    const content = fs.readFileSync(envLocal, 'utf8');

    required.forEach((varName) => {
      if (content.includes(varName)) {
        log(`✅ ${varName}`, 'green');
      } else {
        log(`❌ ${varName} not set`, 'red');
      }
    });

    optional.forEach((varName) => {
      if (content.includes(varName)) {
        log(`✅ ${varName} (optional)`, 'green');
      } else {
        log(`⚠️  ${varName} not set (optional)`, 'yellow');
      }
    });
  }
}

function checkSecurity() {
  log('\n🔒 Security Implementation Checklist:', 'blue');

  const checks = [
    // Headers & Config
    ['next.config.ts', 'Strict-Transport-Security (HSTS)'],
    ['next.config.ts', 'Content-Security-Policy (CSP)'],
    ['next.config.ts', 'Access-Control (CORS)'],
    ['next.config.ts', 'X-Frame-Options'],

    // Security Modules
    ['lib/validation.ts', 'Input Validation & Sanitization'],
    ['lib/env-check.ts', 'Environment Variables Validation'],
    ['lib/sri-hashes.ts', 'Subresource Integrity Framework'],

    // Middleware
    ['middleware.ts', 'Rate Limiting'],
    ['middleware.ts', 'Security Logging'],
    ['middleware.ts', 'Suspicious Pattern Detection'],

    // Layout
    ['app/layout.tsx', 'Security Initialization'],

    // Documentation
    ['SECURITY.md', 'Security Documentation'],

    // Config files
    ['.github/dependabot.yml', 'Dependabot Configuration'],
  ];

  let count = 0;
  checks.forEach(([file, desc]) => {
    const fullPath = path.join(projectRoot, file);
    if (fs.existsSync(fullPath)) {
      log(`✅ ${desc}`, 'green');
      count++;
    } else {
      log(`❌ ${desc} (${file} not found)`, 'red');
    }
  });

  return { total: checks.length, implemented: count };
}

function main() {
  log('\n╔════════════════════════════════════════════════╗', 'blue');
  log('║        SECURITY IMPLEMENTATION AUDIT          ║', 'blue');
  log('╚════════════════════════════════════════════════╝', 'blue');

  checkEnvVars();
  const { total, implemented } = checkSecurity();

  // Summary
  log('\n📊 Summary:', 'blue');
  const percentage = Math.round((implemented / total) * 100);
  const status = percentage === 100 ? 'green' : percentage >= 80 ? 'yellow' : 'red';

  log(`   ${implemented}/${total} measures implemented (${percentage}%)`, status);

  if (percentage === 100) {
    log('\n✅ All security measures are in place!', 'green');
    process.exit(0);
  } else if (percentage >= 80) {
    log('\n⚠️  Most security measures are in place. Review missing items.', 'yellow');
    process.exit(0);
  } else {
    log('\n❌ Critical security measures are missing. Review checklist.', 'red');
    process.exit(1);
  }
}

main();
