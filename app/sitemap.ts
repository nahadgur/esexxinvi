import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { getActiveClinics } from '@/data/clinics';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date(siteConfig.editorial.lastReviewedAt);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/treatments/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/locations/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/clinics/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/guides/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/about-us/`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/advisory-board/`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/editorial-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/how-we-vet-providers/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contact/`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/success-stories/`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/share-your-story/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/cookie-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const treatmentPages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/treatments/${s.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map(l => ({
    url: `${base}/locations/${l.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const clinicPages: MetadataRoute.Sitemap = getActiveClinics().map(c => ({
    url: `${base}/clinics/${c.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...treatmentPages, ...locationPages, ...clinicPages];
}
