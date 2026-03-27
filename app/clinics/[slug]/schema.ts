// app/clinics/[slug]/schema.ts
//
// Deliverable 3: Clinic Profile Schema
// Generates Dentist + MedicalClinic JSON-LD for /clinics/[slug]/ pages.
//
// This is the ONLY page type on the site where Dentist or MedicalClinic
// is the PRIMARY schema type. Every other page references clinic entities
// by @id — this is where those entities are fully defined.
//
// Variable legend (sourced from clinics.ts data + matrix):
//   [clinic_name]        → e.g. "Church Langley Dental"
//   [clinic_slug]        → e.g. "church-langley-dental-harlow"
//   [clinic_tier]        → "Platinum" | "Diamond"
//   [clinic_address]     → e.g. "Church Langley, Harlow"
//   [clinic_locality]    → e.g. "Harlow"
//   [clinic_region]      → e.g. "West Essex"
//   [clinic_postcode]    → e.g. "CM17 9TH"
//   [schema_geo_lat]     → e.g. 51.7642
//   [schema_geo_long]    → e.g. 0.1020
//   [clinic_telephone]   → e.g. "+441279123456"
//   [clinic_1_rating]    → e.g. 4.9
//   [clinic_1_reviews]   → e.g. 142
//   [clinic_1_cases]     → e.g. "400+"
//   [opening_hours]      → string[] e.g. ["Mo-Fr 09:00-17:30", "Sa 09:00-13:00"]
//   [price_range_low]    → e.g. 2800
//   [price_range_high]   → e.g. 5200
//   [treatment_slugs]    → string[] of offered treatment slugs

import { siteConfig } from '@/data/site';

interface ClinicSchemaInput {
  clinicName: string;       // [clinic_name]
  clinicSlug: string;       // [clinic_slug]
  tier: 'Platinum' | 'Diamond'; // [clinic_tier]
  streetAddress: string;    // [clinic_address]
  addressLocality: string;  // [clinic_locality]
  addressRegion: string;    // [clinic_region]
  postalCode?: string;      // [clinic_postcode]
  geoLat?: number;          // [schema_geo_lat]
  geoLong?: number;         // [schema_geo_long]
  telephone?: string;       // [clinic_telephone]
  googleRating?: number;    // [clinic_1_rating]
  reviewCount?: number;     // [clinic_1_reviews]
  caseVolume?: string;      // [clinic_1_cases]
  openingHours?: string[];  // [opening_hours]  format: "Mo-Fr 09:00-17:30"
  priceRangeLow?: number;   // [price_range_low]
  priceRangeHigh?: number;  // [price_range_high]
  treatmentSlugs: string[]; // [treatment_slugs]
}

const treatmentNameMap: Record<string, string> = {
  crowded:   'Invisalign for Crowded Teeth',
  gaps:      'Invisalign for Gaps',
  overbite:  'Invisalign for Overbite',
  underbite: 'Invisalign for Underbite',
  crossbite: 'Invisalign for Crossbite',
  adults:    'Adult Invisalign',
};

export function buildClinicProfileSchema(input: ClinicSchemaInput): object {
  const {
    clinicName, clinicSlug, tier,
    streetAddress, addressLocality, addressRegion, postalCode,
    geoLat, geoLong, telephone,
    googleRating, reviewCount, caseVolume,
    openingHours, priceRangeLow, priceRangeHigh, treatmentSlugs,
  } = input;

  const base     = siteConfig.url;
  const pageUrl  = `${base}/clinics/${clinicSlug}/`;
  const pageId   = `${pageUrl}#webpage`;

  // Stable @id for this clinic — used as reference target across all pages
  // that feature this clinic (111 town hubs, up to 6 matrix pages, etc.)
  const clinicId = `${pageUrl}#dentist`;  // [clinic_slug] → #dentist anchor
  const crumbId  = `${pageUrl}#breadcrumb`;
  const orgId    = `${base}/#organization`;
  const siteId   = `${base}/#website`;

  // ── BreadcrumbList ────────────────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': crumbId,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',
        'item': `${base}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Clinics',
        'item': `${base}/clinics/` },
      // No 'item' on final crumb
      { '@type': 'ListItem', 'position': 3, 'name': clinicName },
    ],
  };

  // ── ProfilePage — the directory listing page for this clinic ──────────────
  // ProfilePage wraps the Dentist entity — it is NOT the clinic itself
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': pageId,
    'name': `${clinicName} | Invisalign ${tier} Provider, ${addressLocality}`,
    'description':
      `${clinicName} is a verified Invisalign ${tier} provider in ` +
      `${addressLocality}, ${addressRegion}. Listed on Invisalign Dentists Essex — ` +
      `an independent directory of high-tier Invisalign clinics across Essex.`,
    'url': pageUrl,
    'inLanguage': 'en-GB',
    'isPartOf': { '@id': siteId },
    'breadcrumb': { '@id': crumbId },
    // mainEntity points to the Dentist — establishes the page IS about this clinic
    'mainEntity': { '@id': clinicId },
    // Publisher = the directory, not the clinic
    'publisher': { '@id': orgId },
  };

  // ── Dentist + MedicalClinic — the clinic entity ───────────────────────────
  // Types: Dentist covers the specific clinical practice
  //        MedicalClinic provides the healthcare facility classification
  // Both types apply here — Google accepts @type arrays

  const dentistSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic'],
    '@id': clinicId,
    'name': clinicName,           // [clinic_name]
    'url': pageUrl,

    // ── Address ──────────────────────────────────────────────────────────
    'address': {
      '@type': 'PostalAddress',
      'streetAddress':   streetAddress,   // [clinic_address]
      'addressLocality': addressLocality, // [clinic_locality]
      'addressRegion':   addressRegion,   // [clinic_region]
      'postalCode':      postalCode ?? '', // [clinic_postcode]
      'addressCountry':  'GB',
    },

    // ── Geo coordinates ───────────────────────────────────────────────────
    // [schema_geo_lat] and [schema_geo_long] from matrix
    // Conditionally emitted — never fabricated when data is missing
    ...(geoLat !== undefined && geoLong !== undefined ? {
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude':  geoLat,   // [schema_geo_lat]
        'longitude': geoLong,  // [schema_geo_long]
      },
    } : {}),

    // ── Telephone ─────────────────────────────────────────────────────────
    // [clinic_telephone] — belongs to the clinic entity, never to the directory
    ...(telephone ? { 'telephone': telephone } : {}),  // [clinic_telephone]

    // ── AggregateRating ───────────────────────────────────────────────────
    // [clinic_1_rating] and [clinic_1_reviews] from matrix
    // Only emitted when BOTH values are present — never fabricated
    ...(googleRating && reviewCount ? {
      'aggregateRating': {
        '@type':       'AggregateRating',
        'ratingValue': String(googleRating),  // [clinic_1_rating]
        'reviewCount': String(reviewCount),   // [clinic_1_reviews]
        'bestRating':  '5',
        'worstRating': '1',
      },
    } : {}),

    // ── Opening hours ─────────────────────────────────────────────────────
    // [opening_hours] — parsed from "Mo-Fr 09:00-17:30" format
    ...(openingHours && openingHours.length > 0 ? {
      'openingHoursSpecification': openingHours.map(spec => {
        const [days, times] = spec.split(' ');
        const [opens, closes] = times.split('-');
        return {
          '@type':      'OpeningHoursSpecification',
          'dayOfWeek':  parseDays(days),
          'opens':      opens,
          'closes':     closes,
        };
      }),
    } : {}),

    // ── Price range ───────────────────────────────────────────────────────
    // [price_range_low] and [price_range_high]
    ...(priceRangeLow && priceRangeHigh ? {
      'priceRange': `£${priceRangeLow.toLocaleString()} – £${priceRangeHigh.toLocaleString()}`,
    } : {}),

    'currenciesAccepted': 'GBP',
    'paymentAccepted': 'Cash, Credit Card, 0% Finance',

    // ── Medical specialties ───────────────────────────────────────────────
    'medicalSpecialty': [
      'Dentistry',
      'Orthodontics',
    ],

    // ── Invisalign tier — machine-readable credential ─────────────────────
    // [clinic_tier] and [clinic_1_cases] from matrix
    'additionalProperty': [
      {
        '@type': 'PropertyValue',
        'name': 'Invisalign Provider Tier',
        'value': tier,  // [clinic_tier]
        'description':
          tier === 'Diamond'
            ? 'Diamond status awarded by Align Technology for completing 300+ Invisalign cases per year.'
            : 'Platinum status awarded by Align Technology for completing 150+ Invisalign cases per year.',
      },
      ...(caseVolume ? [{
        '@type': 'PropertyValue',
        'name':  'Invisalign Cases Completed',
        'value': caseVolume,  // [clinic_1_cases]
      }] : []),
    ],

    // ── hasOfferCatalog — treatments offered ──────────────────────────────
    // [treatment_slugs] — maps to MedicalProcedure nodes
    ...(treatmentSlugs.length > 0 ? {
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Invisalign Treatments',
        'itemListElement': treatmentSlugs.map((slug, i) => ({
          '@type': 'Offer',
          'position': i + 1,
          'itemOffered': {
            '@type': 'MedicalProcedure',
            'name':  treatmentNameMap[slug] ?? slug,
            'procedureType': 'https://schema.org/TherapeuticProcedure',
          },
        })),
      },
    } : {}),

    // ── knowsAbout — signals topical expertise ─────────────────────────────
    'knowsAbout': [
      'Invisalign',
      'Clear aligner orthodontics',
      'ClinCheck digital treatment planning',
      'iTero digital scanning',
    ],

    // ── potentialAction — signals this is a transactional lead gen page ───
    // ReserveAction tells Google the page drives appointment bookings,
    // distinguishing it from a purely informational article.
    // EntryPoint url is the directory contact/match form — the clinic
    // does not need its own booking URL for this to be valid.
    'potentialAction': {
      '@type': 'ReserveAction',
      'name': `Book a free Invisalign consultation at ${clinicName}`,
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `https://www.invisaligndentistsessex.uk/contact/?clinic=${clinicSlug}`,
        'actionPlatform': [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      'result': {
        '@type': 'Reservation',
        'name': 'Free Invisalign consultation',
      },
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      profilePageSchema,
      dentistSchema,
    ],
  };
}

// ── Day parser ────────────────────────────────────────────────────────────────
function parseDays(spec: string): string[] {
  const dayMap: Record<string, string> = {
    Mo: 'https://schema.org/Monday',
    Tu: 'https://schema.org/Tuesday',
    We: 'https://schema.org/Wednesday',
    Th: 'https://schema.org/Thursday',
    Fr: 'https://schema.org/Friday',
    Sa: 'https://schema.org/Saturday',
    Su: 'https://schema.org/Sunday',
  };
  if (spec.includes('-')) {
    const order = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const [start, end] = spec.split('-');
    return order
      .slice(order.indexOf(start), order.indexOf(end) + 1)
      .map(d => dayMap[d]);
  }
  return [dayMap[spec]].filter(Boolean);
}
