// app/clinics/[slug]/page.tsx
// Server component — generates metadata, schema, and renders PageClient.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { getClinicBySlug, getAllClinicSlugs } from '@/data/clinics';
import { getTownContent } from '@/data/content';
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

  // Get pricing and wait time from the matching town content
  const townSlug   = clinic.addressLocality.toLowerCase().replace(/\s+/g, '-');
  const townData   = getTownContent(townSlug);
  const waitDays   = townData?.waitTimeDays ?? 7;

  // ── Dentist + AggregateRating schema ────────────────────────────────────
  const base      = siteConfig.url;
  const clinicId  = `${base}/clinics/${params.slug}/#dentist`;
  const orgId     = `${base}/#organization`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',    'item': `${base}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Clinics', 'item': `${base}/clinics/` },
      { '@type': 'ListItem', 'position': 3, 'name': clinic.name },
    ],
  };

  const dentistSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic'],
    '@id': clinicId,
    'name': clinic.name,
    'url': `${base}/clinics/${params.slug}/`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress':   clinic.address,
      'addressLocality': clinic.addressLocality,
      'addressRegion':   clinic.addressRegion,
      'postalCode':      clinic.postalCode,
      'addressCountry':  'GB',
    },
    'priceRange': `£${clinic.priceRangeLow.toLocaleString()} – £${clinic.priceRangeHigh.toLocaleString()}`,
    'medicalSpecialty': ['Dentistry', 'Orthodontics'],
    'additionalProperty': {
      '@type': 'PropertyValue',
      'name': 'Invisalign Provider Tier',
      'value': clinic.tier,
    },
    'publisher': { '@id': orgId },
  };

  if (clinic.geoLat !== undefined && clinic.geoLong !== undefined) {
    dentistSchema['geo'] = {
      '@type': 'GeoCoordinates',
      'latitude': clinic.geoLat,
      'longitude': clinic.geoLong,
    };
  }

  if (clinic.telephone) {
    dentistSchema['telephone'] = clinic.telephone;
  }

  if (clinic.googleRating && clinic.reviewCount) {
    dentistSchema['aggregateRating'] = {
      '@type': 'AggregateRating',
      'ratingValue': String(clinic.googleRating),
      'reviewCount': String(clinic.reviewCount),
      'bestRating': '5',
      'worstRating': '1',
    };
  }

  if (clinic.openingHours && clinic.openingHours.length > 0) {
    dentistSchema['openingHoursSpecification'] = clinic.openingHours.map(spec => {
      const [days, times] = spec.split(' ');
      const [opens, closes] = times.split('-');
      const dayMap: Record<string, string> = {
        Mo: 'https://schema.org/Monday',    Tu: 'https://schema.org/Tuesday',
        We: 'https://schema.org/Wednesday', Th: 'https://schema.org/Thursday',
        Fr: 'https://schema.org/Friday',    Sa: 'https://schema.org/Saturday',
        Su: 'https://schema.org/Sunday',
      };
      const order = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      const parsedDays = days.includes('-')
        ? order.slice(order.indexOf(days.split('-')[0]), order.indexOf(days.split('-')[1]) + 1).map(d => dayMap[d])
        : [dayMap[days]].filter(Boolean);
      return { '@type': 'OpeningHoursSpecification', 'dayOfWeek': parsedDays, opens, closes };
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema, null, 2) }}
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
