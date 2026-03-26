// app/sitemap-blog.xml/route.ts
// Covers: all blog article pages at /blog/[slug]/
//
// Reads slugs from public/articles.csv at build time.
// CSV structure: "Article Title","Article Content","wp_category","Slug",...
// Only articles with Status !== "draft" are included.
// If you add a CMS later, swap the CSV read for your CMS API call here.

import { readFileSync } from 'fs';
import { join } from 'path';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

interface CsvRow {
  Slug: string;
  Status: string;
}

function parseCsv(raw: string): CsvRow[] {
  const lines = raw.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  // Parse header — handle quoted fields
  const parseFields = (line: string): string[] => {
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        fields.push(current); current = '';
      } else {
        current += ch;
      }
    }
    fields.push(current);
    return fields;
  };

  const headers = parseFields(lines[0]);
  const slugIdx = headers.findIndex(h => h.replace(/"/g, '').trim() === 'Slug');
  const statusIdx = headers.findIndex(h => h.replace(/"/g, '').trim() === 'Status');

  if (slugIdx === -1) return [];

  return lines.slice(1).map(line => {
    const fields = parseFields(line);
    return {
      Slug: (fields[slugIdx] || '').trim(),
      Status: (statusIdx !== -1 ? fields[statusIdx] || '' : 'published').trim(),
    };
  });
}

export function GET() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  let rows: CsvRow[] = [];
  try {
    const csvPath = join(process.cwd(), 'public', 'articles.csv');
    const raw = readFileSync(csvPath, 'utf-8');
    rows = parseCsv(raw).filter(r => r.Slug && r.Status !== 'draft');
  } catch {
    // If CSV is missing at build time, return an empty sitemap rather than throwing.
    rows = [];
  }

  const urls = rows.map(r => `  <url>
    <loc>${base}/blog/${r.Slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
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
