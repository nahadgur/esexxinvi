// app/global-schema.ts
// Sitewide Organization + WebSite JSON-LD — injected once in the root layout
// (app/layout.tsx) so Google can establish the directory's entity identity
// independently of any individual page schema.
//
// Critical YMYL aggregator rules applied here:
//   1. The Organization type includes ProfessionalService (NOT Dentist,
//      NOT MedicalOrganization) — we are a directory, not a practice.
//   2. The description explicitly states we are NOT a dental practice.
//      This is Google's recommended approach for aggregator E-E-A-T.
//   3. No telephone or geo coordinates on the Organization node —
//      those belong to the individual clinic Dentist entities.
//   4. WebSite node includes SearchAction for sitelinks search box eligibility.

import { siteConfig } from '@/data/site';

export function buildGlobalSchema(): object {
  const base  = siteConfig.url;
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [

      // ── Organization — the directory operator ────────────────────────────
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        'name': 'Invisalign Dentists Essex',
        'alternateName': 'Essex Invisalign Directory',
        'url': `${base}/`,
        'logo': {
          '@type': 'ImageObject',
          'url': `${base}/logo.png`,
          'width': 200,
          'height': 60,
        },
        'description':
          'Independent third-party directory connecting Essex patients with ' +
          'verified Platinum and Diamond Invisalign providers. ' +
          'We are not a dental practice and do not provide clinical treatment.',
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Essex',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'United Kingdom',
          },
        },
        // knowsAbout signals topical authority to Google without claiming
        // to BE a medical provider
        'knowsAbout': [
          'Invisalign orthodontic treatment',
          'Clear aligner therapy',
          'Dental crowding correction',
          'Overbite treatment',
          'Underbite treatment',
          'Crossbite correction',
          'Dental gap closure',
        ],
        // foundingDate supports E-E-A-T experience signals
        'foundingDate': '2024',
        'sameAs': [
          // Add verified social profiles here when live
          // "https://www.facebook.com/invisaligndentistsessex",
          // "https://twitter.com/invisalignessex"
        ],
      },

      // ── WebSite — enables Sitelinks SearchBox schema ─────────────────────
      {
        '@type': 'WebSite',
        '@id': siteId,
        'name': 'Invisalign Dentists Essex',
        'url': `${base}/`,
        'inLanguage': 'en-GB',
        'publisher': { '@id': orgId },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': `${base}/locations/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },

    ],
  };
}
