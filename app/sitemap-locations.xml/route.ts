// app/sitemap-locations.xml/route.ts
// Covers: 111 town hub pages at /locations/[town]/
// Priority 0.7 — one tier below treatment pages.
// Town hubs are the authority nodes for local clusters; keeping them in
// a dedicated file lets GSC report on their indexation separately.

import { siteConfig } from '@/data/site';
import { LOCATIONS, toSlug } from '@/data/locations';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const now = new Date().toISOString();

  const urls = allCities.map(city => `  <url>
    <loc>${base}/locations/${toSlug(city)}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
