// app/locations/[town]/[service]/page.tsx
// Next.js 14 server wrapper — params accessed directly (no use())

import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';

// FIXED: getAllCitySlugs lives in @/data/locations, not @/data/content
// FIXED: getAllServiceSlugs lives in @/data/services, not @/data/content
import { getAllCitySlugs, getCityBySlug } from '@/data/locations';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { getTownContent, getServiceContent } from '@/data/content';
import { buildFaqPageSchema, type FaqVariables } from '@/data/content/faq-templates';

// FIXED: correct path — @/components/BreadcrumbJsonLd (no /schema/ subdirectory)
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

// FIXED: client component is in the same directory — not a shared component
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
// Schema helpers
// ---------------------------------------------------------------------------

function buildMedicalWebPageSchema(
  cityName: string,
  serviceTitle: string,
  townSlug: string,
  serviceSlug: string,
): object {
  const pageUrl = `${SITE}/locations/${townSlug}/${serviceSlug}/`;
  return {
    '@context': 'https://schema.org',
    '@type':    'MedicalWebPage',
    '@id':      `${pageUrl}#webpage`,
    name:        `${serviceTitle} in ${cityName}, Essex`,
    url:          pageUrl,
    description:  `Find Invisalign-certified dentists for ${serviceTitle.toLowerCase()} near ${cityName}, Essex.`,
    about:    { '@type': 'MedicalCondition', name: serviceTitle },
    audience: { '@type': 'Patient' },
    inLanguage: 'en-GB',
  };
}

function buildAggregateRatingSchema(
  clinicName: string,
  googleRating: number,
  reviewCount: number,
  cityName: string,
  townSlug: string,
  serviceSlug: string,
): object {
  const pageUrl = `${SITE}/locations/${townSlug}/${serviceSlug}/`;
  return {
    '@context': 'https://schema.org',
    '@type':    'Dentist',
    '@id':      `${pageUrl}#clinic-${clinicName.toLowerCase().replace(/\s+/g, '-')}`,
    name:        clinicName,
    address: {
      '@type':         'PostalAddress',
      addressLocality: cityName,
      addressRegion:   'Essex',
      addressCountry:  'GB',
    },
    aggregateRating: {
      '@type':      'AggregateRating',
      ratingValue:   googleRating.toFixed(1),
      reviewCount,
      bestRating:   '5',
      worstRating:  '1',
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

  // FIXED: getServiceContent takes 2 args (townSlug, serviceSlug)
  const svcContent = getServiceContent(params.town, params.service);

  // FIXED: TownContent uses clinic1 (object), not clinics[] (array)
  const clinic1 = townData?.clinic1;

  const priceRangeLow:  number = townData?.priceRangeLow  ?? 1500;
  const priceRangeHigh: number = townData?.priceRangeHigh ?? 5500;

  const priceVarianceNote: string =
    svcContent?.priceVarianceNote ??
    `${service.title} in ${cityName} is typically quoted between £${priceRangeLow.toLocaleString()} and £${priceRangeHigh.toLocaleString()} depending on case complexity. Your provider will confirm a fixed cost at the free initial consultation.`;

  const faqVars: FaqVariables = {
    townName:          cityName,
    essexRegion:       townData?.essexRegion       ?? 'Essex',
    nearestMajorHub:   townData?.nearestMajorHub   ?? 'Chelmsford',
    commuteTimeMin:    townData?.commuteTimeMin     ?? 20,
    commuteMode:       townData?.commuteMode        ?? 'Car',
    waitTimeDays:      townData?.waitTimeDays        ?? 7,
    financeMinMonthly: townData?.financeMinMonthly  ?? 49,
    priceRangeLow,
    priceRangeHigh,
    priceVarianceNote,
    ...(clinic1?.name         && { clinic1Name:         clinic1.name }),
    ...(clinic1?.tier         && { clinic1Tier:         clinic1.tier }),
    ...(clinic1?.googleRating !== undefined && { clinic1GoogleRating: clinic1.googleRating }),
    ...(clinic1?.reviewCount  !== undefined && { clinic1ReviewCount:  clinic1.reviewCount }),
    ...(clinic1?.caseVolume   !== undefined && { clinic1CaseVolume:   clinic1.caseVolume }),
    treatmentFullName:  service.title,
    treatmentShortName: service.title
      .toLowerCase()
      .replace('invisalign for ', '')
      .replace('invisalign ', ''),
    siteBaseUrl: SITE,
  };

  const medicalWebPageSchema   = buildMedicalWebPageSchema(cityName, service.title, params.town, params.service);
  const faqPageSchema          = buildFaqPageSchema(faqVars);

  const hasRating = clinic1?.googleRating !== undefined && clinic1?.reviewCount !== undefined;
  const aggregateRatingSchema  = hasRating
    ? buildAggregateRatingSchema(clinic1!.name, clinic1!.googleRating!, clinic1!.reviewCount!, cityName, params.town, params.service)
    : null;

  // FIXED: BreadcrumbJsonLd uses `url` not `item`
  const breadcrumbItems = [
    { name: 'Home',        url: `${SITE}/` },
    { name: 'Locations',   url: `${SITE}/locations/` },
    { name: cityName,      url: `${SITE}/locations/${params.town}/` },
    { name: service.title },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <Script
        id={`schema-mwp-${params.town}-${params.service}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        strategy="beforeInteractive"
      />

      {aggregateRatingSchema && (
        <Script
          id={`schema-ar-${params.town}-${params.service}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
          strategy="beforeInteractive"
        />
      )}

      <Script
        id={`schema-faq-${params.town}-${params.service}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        strategy="beforeInteractive"
      />

      <LocationServicePageClient params={params} />
    </>
  );
}
