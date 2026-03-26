// app/locations/[town]/[service]/page.tsx
// Server wrapper — handles generateStaticParams, metadata, and JSON-LD injection.
// The client component (PageClient.tsx) handles all interactive UI.
//
// Schema strategy for this page type:
//   1. BreadcrumbList  — navigation path for Google's breadcrumb rich result
//   2. MedicalWebPage  — signals medical/health content to Google's quality systems
//
// Both schemas are injected here in the server component so they are present
// in the initial HTML response, not deferred by client-side JS.

import type { Metadata } from 'next';
import { getAllCitySlugs, getCityBySlug } from '@/data/locations';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import LocationServicePageClient from './PageClient';

interface PageParams {
  params: { town: string; service: string };
}

export function generateStaticParams() {
  const towns = getAllCitySlugs();
  const services = getAllServiceSlugs();
  return towns.flatMap(town =>
    services.map(service => ({ town, service }))
  );
}

export function generateMetadata({ params }: PageParams): Metadata {
  const service = getServiceBySlug(params.service);
  const cityName = getCityBySlug(params.town);
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName} | Platinum Invisalign Providers`;
  const description = `Find Platinum and Diamond Invisalign providers for ${service.title.toLowerCase()} in ${cityName}, Essex. Free consultation, free 3D scan, up to 3 quotes. No obligation.`;
  const canonicalUrl = `${siteConfig.url}/locations/${params.town}/${params.service}/`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

export default function LocationServicePage({ params }: PageParams) {
  const service = getServiceBySlug(params.service);
  const cityName = getCityBySlug(params.town);

  // Graceful: if somehow params are invalid, PageClient handles the notFound()
  const base = siteConfig.url;

  // BreadcrumbList schema — reflects visual path:
  // Home > Locations > [Town] > [Treatment]
  const breadcrumbItems = [
    { name: 'Home',      url: `${base}/` },
    { name: 'Locations', url: `${base}/locations/` },
    { name: cityName ?? params.town, url: `${base}/locations/${params.town}/` },
    { name: service?.title ?? params.service }, // Current page — no URL
  ];

  // MedicalWebPage schema — provides topical authority signal
  const medicalWebPageSchema = service && cityName ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${service.title} in ${cityName}`,
    description: `Information about ${service.title.toLowerCase()} treatment provided by Platinum and Diamond Invisalign dentists in ${cityName}, Essex.`,
    url: `${base}/locations/${params.town}/${params.service}/`,
    about: {
      '@type': 'MedicalCondition',
      name: service.title,
    },
    audience: {
      '@type': 'Patient',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: base,
    },
  } : null;

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* MedicalWebPage JSON-LD */}
      {medicalWebPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema, null, 2) }}
        />
      )}

      <LocationServicePageClient params={params} />
    </>
  );
}
