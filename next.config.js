/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      // Rule A: /location/ hub → /locations/
      {
        source: '/location',
        destination: '/locations',
        permanent: true,
      },
      // Rule B: /location/[town]/ → /locations/[town]/
      {
        source: '/location/:town',
        destination: '/locations/:town',
        permanent: true,
      },
      // Rule D: /services/[service]/ → /treatments/[service]/
      // Single-segment match only — evaluated before Rule C.
      // Next.js stops at the first matching rule and respects
      // segment depth, so /services/overbite/harlow/ will NOT
      // match this rule (it has two segments).
      {
        source: '/services/:service',
        destination: '/treatments/:service',
        permanent: true,
      },
      // Rule C: /services/[service]/[location]/ → /locations/[location]/[service]/
      // The programmatic flip — inverts the hierarchy from
      // service-first to location-first.
      {
        source: '/services/:service/:location',
        destination: '/locations/:location/:service',
        permanent: true,
      },
      // /services/ index → /treatments/
      {
        source: '/services',
        destination: '/treatments',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
