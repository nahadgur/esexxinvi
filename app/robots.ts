import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    // Points to the sitemap index. Googlebot will discover all 5 sub-sitemaps from here.
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
