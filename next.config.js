/** @type {import('next').NextConfig} */

const SERVICE_SLUGS = ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'];

const KEPT_LOCATION_SLUGS = [
  'chelmsford',
  'southend-on-sea',
  'colchester',
  'basildon',
  'brentwood',
  'harlow',
  'billericay',
  'witham',
  'clacton-on-sea',
  'rayleigh',
  'maldon',
  'leigh-on-sea',
];

// Locations removed in the 2026-05-14 cull. Combo URLs for these get 410 via
// middleware; legacy single-town URLs get 308 to /locations/.
const RETIRED_LOCATION_SLUGS = [
  'braintree', 'grays', 'wickford', 'loughton', 'epping', 'saffron-walden',
  'canvey-island', 'benfleet', 'hadleigh', 'thundersley', 'westcliff-on-sea',
  'shoeburyness', 'rochford', 'hockley', 'rawreth', 'pitsea', 'laindon',
  'langdon-hills', 'stanford-le-hope', 'corringham', 'tilbury', 'purfleet',
  'south-ockendon', 'aveley', 'horndon-on-the-hill', 'buckhurst-hill',
  'chigwell', 'woodford', 'waltham-abbey', 'cheshunt', 'nazeing', 'roydon',
  'ongar', 'north-weald-bassett', 'theydon-bois', 'abridge', 'stapleford-abbotts',
  'debden', 'coopersale', 'burnham-on-crouch', 'danbury', 'hatfield-peverel',
  'tiptree', 'kelvedon', 'coggeshall', 'silver-end', 'rivenhall', 'great-baddow',
  'galleywood', 'writtle', 'margaretting', 'stock', 'ingatestone', 'mountnessing',
  'halstead', 'earls-colne', 'wivenhoe', 'brightlingsea', 'manningtree', 'mistley',
  'lawford', 'dedham', 'great-dunmow', 'stansted-mountfitchet', 'thaxted',
  'finchingfield', 'great-bardfield', 'castle-hedingham', 'frinton-on-sea',
  'walton-on-the-naze', 'harwich', 'dovercourt', 'jaywick', 'holland-on-sea',
  'little-clacton', 'great-clacton', 'thorpe-le-soken', 'kirby-cross', 'weeley',
  'tendring', 'st-osyth', 'point-clear', 'thurrock', 'lakeside', 'chafford-hundred',
  'ockendon', 'bulphan', 'orsett', 'chadwell-st-mary', 'east-tilbury',
  'west-thurrock', 'upminster', 'hornchurch', 'romford', 'harold-wood', 'rainham',
  'dagenham',
];

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.invisaligndentistsessex.uk' },
    ],
  },

  async redirects() {
    const out = [];

    // ── Guides reorganisation (2026-06-09): nested /guides/<category>/<article>
    //    migrated to the data-driven /guides/[hub] + /blog/[spoke] silo. ──
    const GUIDE_REDIRECTS = [
      ['/guides/costs/true-cost-invisalign-uk', '/guides/invisalign-cost-essex/'],
      ['/guides/costs/financing-payment-plans', '/blog/financing-payment-plans/'],
      ['/guides/costs/invisalign-nhs-essex', '/blog/invisalign-nhs-essex/'],
      ['/guides/costs/private-health-insurance-cover', '/blog/private-health-insurance-cover/'],
      ['/guides/costs', '/guides/invisalign-cost-essex/'],
      ['/guides/treatment-process/invisalign-journey-step-by-step', '/guides/invisalign-treatment-process/'],
      ['/guides/treatment-process/how-long-does-invisalign-take', '/blog/how-long-does-invisalign-take/'],
      ['/guides/treatment-process/invisalign-attachments-buttons', '/blog/invisalign-attachments-buttons/'],
      ['/guides/treatment-process/invisalign-diet-food-rules', '/blog/invisalign-diet-food-rules/'],
      ['/guides/treatment-process/does-invisalign-hurt', '/blog/does-invisalign-hurt/'],
      ['/guides/comparisons/invisalign-vs-traditional-braces', '/guides/invisalign-vs-braces/'],
      ['/guides/comparisons/ceramic-braces-vs-invisalign', '/blog/ceramic-braces-vs-invisalign/'],
      ['/guides/comparisons/invisalign-vs-spark-vs-clearcorrect', '/blog/invisalign-vs-spark-vs-clearcorrect/'],
      ['/guides/comparisons/dangers-of-at-home-mail-order-aligners', '/blog/dangers-of-at-home-mail-order-aligners/'],
      ['/guides/local/parents-guide-invisalign-teen', '/blog/parents-guide-invisalign-teen/'],
      ['/guides/local/essex-commuter-guide-invisalign', '/blog/essex-commuter-guide-invisalign/'],
      ['/guides/local/wedding-invisalign-timeline-essex', '/blog/wedding-invisalign-timeline-essex/'],
      ['/guides/local/top-questions-invisalign-consultation', '/blog/top-questions-invisalign-consultation/'],
    ];
    for (const [source, destination] of GUIDE_REDIRECTS) {
      out.push({ source, destination, permanent: true });
    }

    // ── Legacy URL families ──
    out.push({ source: '/location/:town', destination: '/locations/:town', permanent: true });
    out.push({ source: '/services/:service', destination: '/treatments/:service', permanent: true });

    // ── Culled combo URLs ──
    // KEPT town × any service → /locations/[town]/  (308; consolidates ranking signals)
    for (const town of KEPT_LOCATION_SLUGS) {
      for (const service of SERVICE_SLUGS) {
        out.push({
          source: `/locations/${town}/${service}`,
          destination: `/locations/${town}/`,
          permanent: true,
        });
        out.push({
          source: `/services/${service}/${town}`,
          destination: `/locations/${town}/`,
          permanent: true,
        });
      }
    }

    // RETIRED town single page → /locations/  (308; user-friendly fallback)
    for (const town of RETIRED_LOCATION_SLUGS) {
      out.push({ source: `/locations/${town}`, destination: '/locations/', permanent: true });
      out.push({ source: `/location/${town}`, destination: '/locations/', permanent: true });
    }

    return out;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
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
      {
        source: '/.well-known/:path*',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
