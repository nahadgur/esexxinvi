// app/clinics/[slug]/page.tsx
// Server component — generates metadata, schema, and renders PageClient.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { getClinicBySlug, getAllClinicSlugs } from '@/data/clinics';
import { getTownContent } from '@/data/content';
import { buildClinicProfileSchema } from './schema';
import ClinicProfilePageClient from './PageClient';

interface PageParams {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllClinicSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const clinic = getClinicBySlug(params.slug);
  if (!clinic) return {};

  const title =
    `${clinic.name} | Invisalign ${clinic.tier} Provider, ${clinic.addressLocality}, Essex`;

  const ratingSnippet =
    clinic.googleRating && clinic.reviewCount
      ? ` Rated ${clinic.googleRating}/5 from ${clinic.reviewCount} patient reviews.`
      : '';

  const description =
    `${clinic.name} is a verified Invisalign ${clinic.tier} provider in ` +
    `${clinic.addressLocality}, Essex.${ratingSnippet} ` +
    `Book a free consultation on the Invisalign Dentists Essex directory.`;

  const canonical = `${siteConfig.url}/clinics/${params.slug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

export default function ClinicProfilePage({ params }: PageParams) {
  const clinic = getClinicBySlug(params.slug);
  if (!clinic) notFound();

  const townSlug = clinic.addressLocality.toLowerCase().replace(/\s+/g, '-');
  const townData = getTownContent(townSlug);
  const waitDays = townData?.waitTimeDays ?? 7;

  // buildClinicProfileSchema produces:
  //   BreadcrumbList (with @id)
  //   ProfilePage    (mainEntity → Dentist @id)
  //   Dentist + MedicalClinic (with aggregateRating, geo, openingHours, hasOfferCatalog)
  // — all wrapped in a single @graph
  const clinicSchema = buildClinicProfileSchema({
    clinicName:       clinic.name,
    clinicSlug:       params.slug,
    tier:             clinic.tier,
    streetAddress:    clinic.address,
    addressLocality:  clinic.addressLocality,
    addressRegion:    clinic.addressRegion,
    postalCode:       clinic.postalCode,
    geoLat:           clinic.geoLat,
    geoLong:          clinic.geoLong,
    telephone:        clinic.telephone,
    googleRating:     clinic.googleRating,
    reviewCount:      clinic.reviewCount,
    caseVolume:       clinic.caseVolume,
    openingHours:     clinic.openingHours,
    priceRangeLow:    clinic.priceRangeLow,
    priceRangeHigh:   clinic.priceRangeHigh,
    treatmentSlugs:   clinic.treatmentSlugs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <ClinicProfilePageClient
        clinic={clinic}
        priceRangeLow={clinic.priceRangeLow}
        priceRangeHigh={clinic.priceRangeHigh}
        waitTimeDays={waitDays}
      />
    </>
  );
}
