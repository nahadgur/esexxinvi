// app/sitemap-clinics.xml/route.ts
// Covers: all clinic profile pages at /clinics/[slug]/
// plus the /clinics/ hub.
//
// Isolated in its own file because the clinic directory will grow
// independently of the programmatic matrix. New clinics are added
// to data/clinics.ts — this file picks them up automatically.

import { siteConfig } from '@/data/site';
import { clinics } from '@/data/clinics';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const hubUrl = `  <url>
    <loc>${base}/clinics/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

  const profileUrls = clinics.map(c => `  <url>
    <loc>${base}/clinics/${c.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[hubUrl, ...profileUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
