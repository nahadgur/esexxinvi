// app/sitemap.xml/route.ts
// Replaces app/sitemap.ts entirely.
// Returns a sitemapindex XML document pointing to 5 sub-sitemaps.
// Each sub-sitemap is scoped to a single content type for crawl efficiency.
//
// Sub-sitemap URL plan:
//   /sitemap-static.xml   → homepage, hubs, treatment pages       (~10 URLs)
//   /sitemap-locations.xml → 111 town hub pages                   (111 URLs)
//   /sitemap-matrix.xml    → 666 location×treatment pages         (666 URLs)
//   /sitemap-clinics.xml   → clinic profile pages                 (6+ URLs)
//   /sitemap-blog.xml      → blog articles                        (50 URLs)
//
// Note: delete app/sitemap.ts after deploying this file. Both cannot coexist —
// Next.js will throw a build error if both resolve to /sitemap.xml.

import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const sitemaps = [
    `${base}/sitemap-static.xml`,
    `${base}/sitemap-locations.xml`,
    `${base}/sitemap-matrix.xml`,
    `${base}/sitemap-clinics.xml`,
    `${base}/sitemap-blog.xml`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    loc => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
