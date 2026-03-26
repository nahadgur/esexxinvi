// app/locations/[town]/[service]/page.tsx
// Next.js 14 server wrapper — params accessed directly (no use())

import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getAllCitySlugs, getAllServiceSlugs, getTownContent, getServiceContent } from "@/data/content";
import { buildFaqPageSchema, type FaqVariables } from "@/data/content/faq-templates";
import BreadcrumbJsonLd from "@/components/schema/BreadcrumbJsonLd";
import LocationServicePageClient from "@/components/LocationServicePageClient";

// ---------------------------------------------------------------------------
// Static params — 111 towns × 6 services = 666 pages
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const towns = getAllCitySlugs();
  const services = getAllServiceSlugs();

  return towns.flatMap((town) =>
    services.map((service) => ({ town, service }))
  );
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: { town: string; service: string };
}): Promise<Metadata> {
  const townData = getTownContent(params.town);
  const svcContent = getServiceContent(params.service);

  if (!townData || !svcContent) return {};

  const canonicalUrl = `https://invisaligndentistsessex.uk/locations/${params.town}/${params.service}/`;

  return {
    title: `${svcContent.title} in ${townData.cityName}, Essex | Invisalign Dentists Essex`,
    description: `Find qualified Invisalign providers for ${svcContent.title.toLowerCase()} near ${townData.cityName}. Free consultations, 0% finance from £${townData.financeMinMonthly ?? 49}/mo.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${svcContent.title} in ${townData.cityName}, Essex`,
      description: `Verified Invisalign providers near ${townData.cityName}. Compare costs, read reviews, book a free consultation.`,
      url: canonicalUrl,
    },
  };
}

// ---------------------------------------------------------------------------
// Schema helpers
// ---------------------------------------------------------------------------

function buildMedicalWebPageSchema(
  townData: ReturnType<typeof getTownContent>,
  svcContent: ReturnType<typeof getServiceContent>,
  params: { town: string; service: string }
): object {
  const cityName = townData!.cityName;
  const pageUrl = `https://invisaligndentistsessex.uk/locations/${params.town}/${params.service}/`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    name: `${svcContent!.title} in ${cityName}, Essex`,
    url: pageUrl,
    description: `Find Invisalign-certified dentists for ${svcContent!.title.toLowerCase()} near ${cityName}, Essex.`,
    about: {
      "@type": "MedicalCondition",
      name: svcContent!.conditionName ?? svcContent!.title,
    },
    audience: {
      "@type": "Patient",
    },
    inLanguage: "en-GB",
  };
}

function buildAggregateRatingSchema(
  clinic1: NonNullable<ReturnType<typeof getTownContent>>["clinics"][0],
  townData: ReturnType<typeof getTownContent>,
  params: { town: string; service: string }
): object {
  const pageUrl = `https://invisaligndentistsessex.uk/locations/${params.town}/${params.service}/`;

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${pageUrl}#clinic-${encodeURIComponent(clinic1.name.toLowerCase().replace(/\s+/g, "-"))}`,
    name: clinic1.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: townData!.cityName,
      addressRegion: "Essex",
      addressCountry: "GB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic1.googleRating!.toFixed(1),
      reviewCount: clinic1.reviewCount!,
      bestRating: "5",
      worstRating: "1",
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
  const townData = getTownContent(params.town);
  const svcContent = getServiceContent(params.service);

  if (!townData || !svcContent) notFound();

  const cityName = townData.cityName;
  const clinic1 = townData.clinics?.[0];

  // Price range — fall back to service defaults then hard floor
  const priceRangeLow: number =
    townData.priceRangeLow ?? svcContent.priceRangeLow ?? 1500;
  const priceRangeHigh: number =
    townData.priceRangeHigh ?? svcContent.priceRangeHigh ?? 5500;

  const priceVarianceNote: string =
    townData.priceVarianceNote ??
    svcContent.priceVarianceNote ??
    `${svcContent.title} in ${cityName} is typically quoted between £${priceRangeLow} and £${priceRangeHigh} depending on case complexity. Your provider will confirm a fixed cost at the free initial consultation.`;

  // Assemble FaqVariables
  const faqVars: FaqVariables = {
    // Location
    townName: cityName,
    essexRegion: townData.essexRegion ?? "Essex",
    nearestMajorHub: townData.nearestMajorHub ?? "Chelmsford",
    commuteTimeMin: townData.commuteTimeMin ?? 20,
    commuteMode: townData.commuteMode ?? "train",

    // Logistics
    waitTimeDays: townData.waitTimeDays ?? 7,

    // Finance
    financeMinMonthly: townData.financeMinMonthly ?? 49,
    priceRangeLow,
    priceRangeHigh,
    priceVarianceNote,

    // Clinic (optional — Branch A)
    ...(clinic1?.name && { clinic1Name: clinic1.name }),
    ...(clinic1?.tier && { clinic1Tier: clinic1.tier }),
    ...(clinic1?.googleRating !== undefined && { clinic1GoogleRating: clinic1.googleRating }),
    ...(clinic1?.reviewCount !== undefined && { clinic1ReviewCount: clinic1.reviewCount }),
    ...(clinic1?.caseVolume !== undefined && { clinic1CaseVolume: clinic1.caseVolume }),

    // Treatment
    treatmentFullName: svcContent.fullName ?? svcContent.title,
    treatmentShortName: svcContent.shortName ?? svcContent.title,
    siteBaseUrl: "https://invisaligndentistsessex.uk",
  };

  // Schema objects
  const medicalWebPageSchema = buildMedicalWebPageSchema(townData, svcContent, params);
  const faqPageSchema = buildFaqPageSchema(faqVars);

  const hasAggregateRating =
    clinic1 !== undefined &&
    clinic1.googleRating !== undefined &&
    clinic1.reviewCount !== undefined;

  const aggregateRatingSchema = hasAggregateRating
    ? buildAggregateRatingSchema(clinic1!, townData, params)
    : null;

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", item: "https://invisaligndentistsessex.uk/" },
    { name: "Locations", item: "https://invisaligndentistsessex.uk/locations/" },
    {
      name: cityName,
      item: `https://invisaligndentistsessex.uk/locations/${params.town}/`,
    },
    {
      name: svcContent.title,
      item: `https://invisaligndentistsessex.uk/locations/${params.town}/${params.service}/`,
    },
  ];

  return (
    <>
      {/* ── Schema block 1: BreadcrumbList ── */}
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* ── Schema block 2: MedicalWebPage ── */}
      <Script
        id={`schema-medicalwebpage-${params.town}-${params.service}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        strategy="beforeInteractive"
      />

      {/* ── Schema block 3: AggregateRating — conditional ── */}
      {aggregateRatingSchema && (
        <Script
          id={`schema-aggregaterating-${params.town}-${params.service}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
          strategy="beforeInteractive"
        />
      )}

      {/* ── Schema block 4: FAQPage ── */}
      <Script
        id={`schema-faqpage-${params.town}-${params.service}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        strategy="beforeInteractive"
      />

      {/* ── Client component ── */}
      <LocationServicePageClient params={params} />
    </>
  );
}
