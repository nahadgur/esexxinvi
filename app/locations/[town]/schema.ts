// app/locations/[town]/schema.ts
// Generates the full @graph JSON-LD for a Town Hub page (/locations/[town]/).
//
// Entity separation rules enforced throughout:
//   - The DIRECTORY (invisaligndentistsessex.uk) is an Organization + WebSite.
//   - The CLINICS (Nuffield Dental, Church Langley Dental etc.) are Dentist
//     entities referenced via ListItem — they are NEVER conflated with the
//     directory's own identity.
//   - CollectionPage is the primary page type. MedicalWebPage is intentionally
//     NOT used here because the hub page is a list/index, not a health advice page.
//     MedicalWebPage is reserved for the matrix pages (/locations/[town]/[service]/).
//   - LocalBusiness is NOT used as the primary type for this page.
//   - AggregateRating nodes are attached to each Dentist entity, not to the
//     CollectionPage — ratings belong to the clinic, not the directory page.

import { siteConfig } from '@/data/site';
import type { TownContent } from '@/data/content/types';

interface TownHubSchemaInput {
  townName: string;
  townSlug: string;
  townData: TownContent | undefined;
  // All 6 service slugs and titles — used to build the ItemList of treatments
  services: Array<{ slug: string; title: string }>;
}

export function buildTownHubSchema(input: TownHubSchemaInput): object {
  const { townName, townSlug, townData, services } = input;
  const base     = siteConfig.url;
  const pageUrl  = `${base}/locations/${townSlug}/`;
  const pageId   = `${pageUrl}#webpage`;
  const listId   = `${pageUrl}#itemlist`;
  const crumbId  = `${pageUrl}#breadcrumb`;
  const siteId   = `${base}/#website`;
  const orgId    = `${base}/#organization`;

  // ── Clinic entities ────────────────────────────────────────────────────────
  // Each featured clinic becomes a standalone Dentist node in the @graph.
  // The ListItem references the clinic's @id — clean separation.
  const clinicNodes: object[] = [];
  const listItems: object[]   = [];

  const clinics = [townData?.clinic1, townData?.clinic2].filter(Boolean);

  clinics.forEach((clinic, i) => {
    if (!clinic) return;
    const clinicId = `${base}/clinics/${clinic.slug}/#dentist`;

    // Dentist entity — independent clinic, NOT the directory
    const clinicNode: Record<string, unknown> = {
      '@type': 'Dentist',
      '@id': clinicId,
      'name': clinic.name,
      'url': `${base}/clinics/${clinic.slug}/`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': townName,
        'addressRegion': townData?.essexRegion ?? 'Essex',
        'addressCountry': 'GB',
      },
    };

    if (clinic.googleRating && clinic.reviewCount) {
      clinicNode['aggregateRating'] = {
        '@type': 'AggregateRating',
        'ratingValue': String(clinic.googleRating),
        'reviewCount': String(clinic.reviewCount),
        'bestRating': '5',
      };
    }

    if (clinic.tier) {
      clinicNode['additionalProperty'] = {
        '@type': 'PropertyValue',
        'name': 'Invisalign Provider Tier',
        'value': clinic.tier,
      };
    }

    clinicNodes.push(clinicNode);

    // ListItem references the clinic by @id — NOT by embedding the full object
    listItems.push({
      '@type': 'ListItem',
      'position': i + 1,
      'item': { '@id': clinicId },
    });
  });

  // No fallback entity — if no real clinic data exists for this town,
  // the ItemList simply has zero items. A fabricated Dentist entity
  // is a misrepresentation and draws scrutiny from Google on YMYL pages.

  // ── BreadcrumbList ─────────────────────────────────────────────────────────
  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': crumbId,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': `${base}/`,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Locations',
        'item': `${base}/locations/`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `Invisalign in ${townName}`,
        'item': pageUrl,
      },
    ],
  };

  // ── ItemList — featured clinics for this town ──────────────────────────────
  const itemListNode = {
    '@type': 'ItemList',
    '@id': listId,
    'name': `Invisalign Providers in ${townName}`,
    'description': `Verified Platinum and Diamond Invisalign providers serving ${townName}, Essex.`,
    'numberOfItems': listItems.length,
    'itemListOrder': 'https://schema.org/ItemListOrderAscending',
    'itemListElement': listItems,
  };

  // ── CollectionPage — the directory hub page ────────────────────────────────
  const collectionPageNode = {
    '@type': 'CollectionPage',
    '@id': pageId,
    'name': `Invisalign Providers in ${townName} | Essex Directory`,
    'description':
      `Independent directory of Platinum and Diamond Invisalign providers in ` +
      `${townName}, Essex. Compare verified clinics, view ratings, and book a ` +
      `free consultation — no referral needed.`,
    'url': pageUrl,
    'inLanguage': 'en-GB',
    'isPartOf': { '@id': siteId },
    'about': { '@type': 'Thing', 'name': `Invisalign in ${townName}` },
    'breadcrumb': { '@id': crumbId },
    'mainEntity': { '@id': listId },
    'publisher': { '@id': orgId },
  };

  // ── WebSite — the directory itself ─────────────────────────────────────────
  const websiteNode = {
    '@type': 'WebSite',
    '@id': siteId,
    'name': 'Invisalign Dentists Essex',
    'url': `${base}/`,
    'inLanguage': 'en-GB',
    'publisher': { '@id': orgId },
  };

  // ── Organization — the directory operator ─────────────────────────────────
  // Explicitly NOT a Dentist, NOT a LocalBusiness in the dental sense.
  // ProfessionalService is the correct type for a healthcare aggregator.
  const organizationNode = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    'name': 'Invisalign Dentists Essex',
    'url': `${base}/`,
    'description':
      'Independent directory connecting Essex patients with verified Platinum ' +
      'and Diamond Invisalign providers. We are not a dental practice.',
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Essex',
      'containedInPlace': {
        '@type': 'Country',
        'name': 'United Kingdom',
      },
    },
    'knowsAbout': 'Invisalign orthodontic treatment',
    'sameAs': [],
  };

  // ── Assemble @graph ────────────────────────────────────────────────────────
  return {
    '@context': 'https://schema.org',
    '@graph': [
      collectionPageNode,
      itemListNode,
      breadcrumbNode,
      websiteNode,
      organizationNode,
      ...clinicNodes,
    ],
  };
}
