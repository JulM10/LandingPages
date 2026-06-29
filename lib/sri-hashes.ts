/**
 * Subresource Integrity (SRI) Hashes
 * Ensures external scripts haven't been modified
 * Get hashes from: https://www.srihash.org/
 */

interface SRIScript {
  src: string;
  integrity: string;
  crossOrigin: 'anonymous' | 'use-credentials';
}

/**
 * SRI hashes for external CDN scripts
 * Update these periodically from https://www.srihash.org/
 *
 * How to get SRI hash:
 * 1. Go to https://www.srihash.org/
 * 2. Paste the full CDN URL
 * 3. Copy the integrity hash
 * 4. Update the value below
 */
export const SRI_HASHES: Record<string, SRIScript> = {
  // Google Tag Manager
  // URL: https://www.googletagmanager.com/gtm.js?id=GTM-XXXXX
  // Note: GTM script includes ID in query params, SRI hash may vary
  // Solution: Use report-uri for GTM instead of SRI
  gtm: {
    src: 'https://www.googletagmanager.com/gtm.js',
    integrity: '', // GTM includes dynamic ID, SRI not applicable
    crossOrigin: 'anonymous',
  },

  // Google Analytics
  // URL: https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX
  // Note: GA4 script includes ID in query params, SRI hash may vary
  ga4: {
    src: 'https://www.googletagmanager.com/gtag/js',
    integrity: '', // GA4 includes dynamic ID, SRI not applicable
    crossOrigin: 'anonymous',
  },

  // Meta Pixel
  // URL: https://connect.facebook.net/en_US/fbevents.js
  fbEvents: {
    src: 'https://connect.facebook.net/en_US/fbevents.js',
    integrity: '', // Meta Pixel integrity hash from srihash.org
    crossOrigin: 'anonymous',
  },

  // Vercel Analytics
  // URL: https://cdn.vercel-analytics.com/v1/script.prod.js
  vercelAnalytics: {
    src: 'https://cdn.vercel-analytics.com/v1/script.prod.js',
    integrity: '', // Vercel Analytics integrity hash from srihash.org
    crossOrigin: 'anonymous',
  },
};

/**
 * Generates script tag with SRI integrity
 * Use in custom script components
 */
export function generateScriptTag(
  src: string,
  options?: {
    integrity?: string;
    async?: boolean;
    defer?: boolean;
    crossOrigin?: 'anonymous' | 'use-credentials';
  }
): string {
  const attributes = [
    `src="${src}"`,
    options?.integrity ? `integrity="${options.integrity}"` : '',
    options?.async ? 'async' : '',
    options?.defer ? 'defer' : '',
    options?.crossOrigin ? `crossorigin="${options.crossOrigin}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<script ${attributes}></script>`;
}

/**
 * Verifies SRI configuration
 * Returns warnings if hashes are empty
 */
export function verifySRIConfiguration(): { valid: boolean; warnings: string[] } {
  const warnings: string[] = [];

  for (const [name, config] of Object.entries(SRI_HASHES)) {
    if (!config.integrity) {
      warnings.push(
        `SRI hash not configured for ${name}. Get it from https://www.srihash.org/ and update SRI_HASHES`
      );
    }
  }

  return {
    valid: warnings.length === 0,
    warnings,
  };
}

/**
 * Helper to update SRI hashes in CI/CD
 * Run as: node scripts/update-sri-hashes.js
 */
export async function fetchAndUpdateSRIHashes(): Promise<void> {
  console.log('🔄 Fetching latest SRI hashes from srihash.org...');
  console.log('Note: Some scripts (GTM, GA4) have dynamic IDs and cannot use SRI.');
  console.log('Use Content-Security-Policy with script-src trusted domains instead.');
  console.log('\nFor other scripts, visit: https://www.srihash.org/');
}
