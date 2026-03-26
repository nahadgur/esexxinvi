/** @type {import('next').NextConfig} */

// next.config.js
// ─────────────────────────────────────────────────────────────────────────────
// Deliverable 5 supplement: Next.js configuration for canonical enforcement.
//
// Key canonical and crawl budget settings:
//   trailingSlash: true   → /locations/harlow always redirects to /locations/harlow/
//                           Eliminates the most common source of GSC duplicate errors.
//
//   redirects()           → 308 permanent redirects for:
//                           - Legacy URLs from pre-Phase-1 structure
//                           - Non-trailing-slash safety nets
//                           - Old /services/ and /location/ paths
//
//   headers()             → X-Robots-Tag for non-indexable paths as a server-level
//                           belt-and-suspenders alongside the noindex meta tag.
// ─────────────────────────────────────────────────────────────────────────────

const nextConfig = {

  // ── Trailing slash enforcement ──────────────────────────────────────────
  // All URLs without a trailing slash return a 308 redirect to the slash version.
  // This is the single most effective canonical control for a Next.js SSG site.
  // Effect: /locations/harlow → 308 → /locations/harlow/
  //         /locations/harlow/overbite → 308 → /locations/harlow/overbite/
  trailingSlash: true,

  // ── Redirects ──────────────────────────────────────────────────────────
  async redirects() {
    return [

      // ── Phase 1 URL restructure legacy redirects ────────────────────────
      // Pre-Phase-1 URLs from the original site structure.
      // permanent: true = 308 (preserves PageRank).
      {
        source:      '/location/:town',
        destination: '/locations/:town/',
        permanent:   true,
      },
      {
        source:      '/location/:town/',
        destination: '/locations/:town/',
        permanent:   true,
      },
      {
        source:      '/services/:service/:town',
        destination: '/locations/:town/:service/',
        permanent:   true,
      },
      {
        source:      '/services/:service/:town/',
        destination: '/locations/:town/:service/',
        permanent:   true,
      },
      {
        source:      '/services/:service',
        destination: '/treatments/:service/',
        permanent:   true,
      },
      {
        source:      '/services/:service/',
        destination: '/treatments/:service/',
        permanent:   true,
      },

      // ── Non-trailing-slash safety nets ────────────────────────────────
      // Belt-and-suspenders alongside trailingSlash: true.
      // Next.js handles most of these automatically, but explicit rules
      // ensure legacy inbound links from external sites are handled correctly.
      {
        source:      '/locations/:town',
        destination: '/locations/:town/',
        permanent:   true,
      },
      {
        source:      '/locations/:town/:service',
        destination: '/locations/:town/:service/',
        permanent:   true,
      },
      {
        source:      '/treatments/:service',
        destination: '/treatments/:service/',
        permanent:   true,
      },
      {
        source:      '/clinics/:slug',
        destination: '/clinics/:slug/',
        permanent:   true,
      },
      {
        source:      '/blog/:slug',
        destination: '/blog/:slug/',
        permanent:   true,
      },

    ];
  },

  // ── Server-side noindex headers ─────────────────────────────────────────
  // X-Robots-Tag is the server-level equivalent of the meta robots tag.
  // Applied to paths that must never be indexed, as a belt-and-suspenders
  // layer alongside the noindex Metadata object in generateMetadata().
  //
  // This catches any edge case where the meta tag might not render
  // (e.g., a 200-status error page that bypasses generateMetadata).
  async headers() {
    return [
      {
        // Thank-you page — form confirmation, no index value
        source: '/thank-you/',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        // Legal pages — privacy policy, terms, cookies
        source: '/(privacy-policy|terms|cookie-policy)/',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        // API routes — should never appear in SERP
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        // Canonical enforcement header — signals intended URL to crawlers
        // that parse HTTP headers before HTML (e.g., Bingbot)
        source: '/locations/:town/:service/',
        headers: [
          {
            key:   'Link',
            // Note: the actual canonical URL is injected dynamically by the
            // generateMetadata() function. This header is a static fallback
            // and should only be used if dynamic injection is unavailable.
            value: '</locations/:town/:service/>; rel="canonical"',
          },
        ],
      },
    ];
  },

  // ── Image optimisation ──────────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.invisaligndentistsessex.uk',
      },
    ],
  },

};

module.exports = nextConfig;
