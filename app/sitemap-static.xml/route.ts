// app/sitemap-static.xml/route.ts
// Covers: homepage, section hubs, 6 treatment pages.
// These pages receive the most frequent crawl; separating them ensures
// Googlebot can reindex them independently of the 666-page matrix file.

import { siteConfig } from '@/data/site';
import { services } from '@/data/services';

export const dynamic = 'force-static';

function urlEntry(loc: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const base = siteConfig.url;

  const staticUrls = [
    urlEntry(`${base}/`, '1.0', 'weekly'),
    urlEntry(`${base}/treatments/`, '0.9', 'weekly'),
    urlEntry(`${base}/locations/`, '0.9', 'weekly'),
    urlEntry(`${base}/clinics/`, '0.8', 'weekly'),
    urlEntry(`${base}/blog/`, '0.8', 'daily'),
  ];

  const treatmentUrls = services.map(s =>
    urlEntry(`${base}/treatments/${s.slug}/`, '0.8', 'weekly')
  );

  const all = [...staticUrls, ...treatmentUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
