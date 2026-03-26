// app/clinics/[slug]/schema.ts
// Generates JSON-LD for individual clinic profile pages (/clinics/[slug]/).
//
// This is the ONE place on the site where a Dentist entity is the PRIMARY
// page type — because the page IS about the clinic, not the directory.
//
// Entity separation rules:
//   - Dentist is the primary type here ONLY.
//   - The directory Organization is referenced by @id as 'publisher' — never
//     conflated with the clinic.
//   - The clinic's address, geo, telephone, and opening hours all belong
//     to the Dentist node, NOT to the directory Organization.
//   - AggregateRating reflects the clinic's own Google rating, sourced from
//     the matrix. If no data, the node is omitted entirely — never fabricated.
//   - medicalSpecialty and hasOfferCatalog signal the range of treatments
//     the clinic offers.

import { siteConfig } from '@/data/site';

interface ClinicSchemaInput {
  clinicName: string;
  clinicSlug: string;
  tier: 'Platinum' | 'Diamond';
  address: string;
  addressLocality: string;
  addressRegion: string;
  postCode?: string;
  geoLat?: number;
  geoLong?: number;
  telephone?: string;
  googleRating?: number;
  reviewCount?: number;
  caseVolume?: string;
  openingHours?: string[];  // schema.org format e.g. ["Mo-Fr 09:00-17:30", "Sa 09:00-13:00"]
  // Treatment slugs this clinic offers — drives hasOfferCatalog
  treatmentSlugs: string[];
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
    clinicName, clinicSlug, tier, address, addressLocality,
    addressRegion, postCode, geoLat, geoLong, telephone,
    googleRating, reviewCount, caseVolume, openingHours, treatmentSlugs,
  } = input;

  const base      = siteConfig.url;
  const pageUrl   = `${base}/clinics/${clinicSlug}/`;
  const pageId    = `${pageUrl}#webpage`;
  const clinicId  = `${pageUrl}#dentist`;
  const crumbId   = `${pageUrl}#breadcrumb`;
  const siteId    = `${base}/#website`;
  const orgId     = `${base}/#organization`;

  // ── BreadcrumbList ─────────────────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': crumbId,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',     'item': `${base}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Clinics',  'item': `${base}/clinics/` },
      { '@type': 'ListItem', 'position': 3, 'name': clinicName },
    ],
  };

  // ── ProfilePage — wrapper for the clinic's directory listing page ──────────
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': pageId,
    'name': `${clinicName} | Invisalign Dentists Essex`,
    'description':
      `${clinicName} is a verified ${tier} Invisalign provider in ${addressLocality}, ` +
      `Essex, listed on Invisalign Dentists Essex — an independent directory of ` +
      `high-tier Invisalign clinics across the county.`,
    'url': pageUrl,
    'inLanguage': 'en-GB',
    'isPartOf': { '@id': siteId },
    'breadcrumb': { '@id': crumbId },
    'mainEntity': { '@id': clinicId },
    // Publisher is the DIRECTORY, not the clinic
    'publisher': { '@id': orgId },
  };

  // ── Dentist — the clinic itself ────────────────────────────────────────────
  const dentistSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': clinicId,
    'name': clinicName,
    'url': pageUrl,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address,
      'addressLocality': addressLocality,
      'addressRegion': addressRegion,
      'postalCode': postCode ?? '',
      'addressCountry': 'GB',
    },
    'medicalSpecialty': 'Dentistry',
    'currenciesAccepted': 'GBP',
    'paymentAccepted': 'Cash, Credit Card, Finance',
    // additionalProperty: Align Technology tier — machine-readable credential
    'additionalProperty': {
      '@type': 'PropertyValue',
      'name': 'Invisalign Provider Tier',
      'value': tier,
      'description':
        `${tier} status is awarded by Align Technology based on independently ` +
        `verified annual case volume. ${tier === 'Diamond' ? 'Diamond providers complete 300+ cases per year.' : 'Platinum providers complete 150+ cases per year.'}`,
    },
  };

  // Geo coordinates — only when both lat/long are available
  if (geoLat !== undefined && geoLong !== undefined) {
    dentistSchema['geo'] = {
      '@type': 'GeoCoordinates',
      'latitude': geoLat,
      'longitude': geoLong,
    };
  }

  // Telephone — belongs to the clinic entity, never to the directory
  if (telephone) {
    dentistSchema['telephone'] = telephone;
  }

  // Opening hours
  if (openingHours && openingHours.length > 0) {
    dentistSchema['openingHoursSpecification'] = openingHours.map(spec => {
      // Parse "Mo-Fr 09:00-17:30" into schema.org OpeningHoursSpecification
      const [days, times] = spec.split(' ');
      const [opens, closes] = times.split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': parseDays(days),
        'opens': opens,
        'closes': closes,
      };
    });
  }

  // AggregateRating — only when we have real data; never fabricated
  if (googleRating && reviewCount) {
    dentistSchema['aggregateRating'] = {
      '@type': 'AggregateRating',
      'ratingValue': String(googleRating),
      'reviewCount': String(reviewCount),
      'bestRating': '5',
      'worstRating': '1',
    };
  }

  // caseVolume as a PropertyValue — not a schema.org field, but valid extension
  if (caseVolume) {
    const existing = dentistSchema['additionalProperty'] as object;
    dentistSchema['additionalProperty'] = [
      existing,
      {
        '@type': 'PropertyValue',
        'name': 'Invisalign Cases Completed',
        'value': caseVolume,
      },
    ];
  }

  // hasOfferCatalog — list of treatments offered by this clinic
  if (treatmentSlugs.length > 0) {
    dentistSchema['hasOfferCatalog'] = {
      '@type': 'OfferCatalog',
      'name': 'Invisalign Treatments',
      'itemListElement': treatmentSlugs.map((slug, i) => ({
        '@type': 'Offer',
        'position': i + 1,
        'itemOffered': {
          '@type': 'MedicalProcedure',
          'name': treatmentNameMap[slug] ?? slug,
        },
      })),
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, profilePageSchema, dentistSchema],
  };
}

// ── Day parser helper ──────────────────────────────────────────────────────
// Converts "Mo-Fr" or "Sa" to schema.org DayOfWeek array
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
    const [start, end] = spec.split('-');
    const order = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const startIdx = order.indexOf(start);
    const endIdx   = order.indexOf(end);
    return order.slice(startIdx, endIdx + 1).map(d => dayMap[d]);
  }
  return [dayMap[spec]].filter(Boolean);
}
