import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/treatments/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/locations/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];

  const treatmentPages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/treatments/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/locations/${toSlug(city)}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Location-first programmatic matrix: /locations/[town]/[service]/
  const locationServicePages: MetadataRoute.Sitemap = [];
  for (const city of allCities) {
    for (const service of services) {
      locationServicePages.push({
        url: `${base}/locations/${toSlug(city)}/${service.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...treatmentPages, ...locationPages, ...locationServicePages];
}
