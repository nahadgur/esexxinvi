// app/locations/[town]/[service]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllCitySlugs, getCityBySlug } from '@/data/locations';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { getTownContent, getServiceContent } from '@/data/content';
import { buildMatrixPageSchema } from './schema';

import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import LocationServicePageClient from './PageClient';

const SITE = 'https://www.invisaligndentistsessex.uk';

// ---------------------------------------------------------------------------
// Static params — 111 towns × 6 services = 666 pages
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const towns    = getAllCitySlugs();
  const services = getAllServiceSlugs();
  return towns.flatMap(town => services.map(service => ({ town, service })));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export function generateMetadata({
  params,
}: {
  params: { town: string; service: string };
}): Metadata {
  const cityName = getCityBySlug(params.town);
  const service  = getServiceBySlug(params.service);
  const townData = getTownContent(params.town);

  if (!cityName || !service) return {};

  const canonical = `${SITE}/locations/${params.town}/${params.service}/`;
  const priceFrom = townData?.priceRangeLow    ?? 1500;
  const finance   = townData?.financeMinMonthly ?? 49;

  return {
    title: `${service.title} in ${cityName}, Essex | Invisalign Dentists Essex`,
    description: `Find qualified Invisalign providers for ${service.title.toLowerCase()} near ${cityName}. Free consultations, 0% finance from £${finance}/mo. Prices from £${priceFrom.toLocaleString()}.`,
    alternates: { canonical },
    openGraph: {
      title:       `${service.title} in ${cityName}, Essex`,
      description: `Verified Invisalign providers near ${cityName}. Compare costs, read reviews, book a free consultation.`,
      url:          canonical,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function LocationServicePage({
  params,
}: {
  params: { town: string; service: string };
}) {
  const cityName = getCityBySlug(params.town);
  const service  = getServiceBySlug(params.service);
  const townData = getTownContent(params.town);

  if (!cityName || !service) notFound();

  const svcContent = getServiceContent(params.town, params.service);

  const priceRangeLow:  number = townData?.priceRangeLow  ?? 1500;
  const priceRangeHigh: number = townData?.priceRangeHigh ?? 5500;

  const priceVarianceNote: string =
    svcContent?.priceVarianceNote ??
    `${service.title} in ${cityName} is typically quoted between £${priceRangeLow.toLocaleString()} and £${priceRangeHigh.toLocaleString()} depending on case complexity. Your provider will confirm a fixed cost at the free initial consultation.`;

  // buildMatrixPageSchema returns schema blocks in correct injection order:
  // [BreadcrumbList, MedicalWebPage, Dentist (if data), FAQPage]
  // Dentist @id is correctly anchored to /clinics/[slug]/#dentist
  const schemas = buildMatrixPageSchema(
    townData,
    service,
    cityName,
    params.town,
    priceVarianceNote,
  );

  const breadcrumbItems = [
    { name: 'Home',        url: `${SITE}/` },
    { name: 'Locations',   url: `${SITE}/locations/` },
    { name: cityName,      url: `${SITE}/locations/${params.town}/` },
    { name: service.title },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <LocationServicePageClient params={params} />
    </>
  );
}
