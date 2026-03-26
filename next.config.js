/** @type {import('next').NextConfig} */

const nextConfig = {

  // trailingSlash: true handles ALL non-slash → slash redirects automatically.
  // DO NOT add explicit redirects for /locations/:town → /locations/:town/
  // or any other path that trailingSlash already covers — that creates a loop.
  trailingSlash: true,

  async redirects() {
    return [
      // ── Legacy URL redirects ONLY ───────────────────────────────────────
      // These redirect old URL patterns to the current structure.
      // Safe because they redirect to DIFFERENT paths (not same path + slash).
      // trailingSlash: true will then handle the trailing slash on the destination.

      // Old /location/ → /locations/
      {
        source:      '/location/:town',
        destination: '/locations/:town',
        permanent:   true,
      },

      // Old /services/[service] → /treatments/[service]
      {
        source:      '/services/:service',
        destination: '/treatments/:service',
        permanent:   true,
      },

      // Old /services/[service]/[town] → /locations/[town]/[service]
      {
        source:      '/services/:service/:town',
        destination: '/locations/:town/:service',
        permanent:   true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/thank-you/',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/(privacy-policy|terms|cookie-policy)/',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.invisaligndentistsessex.uk' },
    ],
  },

};

module.exports = nextConfig;
