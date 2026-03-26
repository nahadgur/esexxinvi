// app/sitemap-matrix.xml/route.ts
// Covers: 666 programmatic pages at /locations/[town]/[service]/
// (111 towns × 6 services)
//
// Priority 0.6 — these are the deepest programmatic pages.
// They sit below town hubs in hierarchy and above nothing.
// A dedicated file keeps them quarantined from hub pages so that
// if Googlebot deprioritises this file, hub authority is unaffected.
//
// Pagination note: 666 URLs is well within Google's 50,000 URL /
// 50MB per sitemap limit. If the clinic directory and blog grow
// significantly, consider splitting matrix into one file per service
// (e.g. sitemap-matrix-crowded.xml through sitemap-matrix-adults.xml,
// 111 URLs each) and updating the sitemap index accordingly.

import { siteConfig } from '@/data/site';
import { LOCATIONS, toSlug } from '@/data/locations';
import { services } from '@/data/services';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const now = new Date().toISOString();

  const urls: string[] = [];

  // Iterate towns first, then services.
  // This groups all 6 treatments for each town consecutively,
  // which makes the file easier to audit manually.
  for (const city of allCities) {
    const townSlug = toSlug(city);
    for (const service of services) {
      urls.push(`  <url>
    <loc>${base}/locations/${townSlug}/${service.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }
  }

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
