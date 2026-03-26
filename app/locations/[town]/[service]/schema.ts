// app/locations/[town]/[service]/schema.ts
// Generates the full @graph JSON-LD for a Matrix page (/locations/[town]/[service]/).
//
// This is a HEALTH INFORMATION page (treatment advice + provider matching),
// so MedicalWebPage is the correct primary type — unlike the hub's CollectionPage.
//
// Entity separation rules:
//   - MedicalWebPage describes the PAGE on the directory, not the clinic.
//   - Dentist nodes (with AggregateRating) describe the FEATURED CLINICS.
//   - The directory Organization is referenced by @id only — never embedded inline.
//   - AggregateRating is attached to the Dentist, never to the MedicalWebPage.
//   - FAQPage schema is included when FAQ variables are available (built by
//     faq-templates.ts — no API call, pure string interpolation at build time).

import { siteConfig } from '@/data/site';
import type { TownContent } from '@/data/content/types';
import { buildFaqPageSchema } from '@/data/content/faq-templates';
import type { FaqVariables } from '@/data/content/faq-templates';

interface MatrixPageSchemaInput {
  townName: string;
  townSlug: string;
  serviceTitle: string;  // e.g. "Invisalign for Overbite"
  serviceSlug: string;   // e.g. "overbite"
  townData: TownContent | undefined;
  priceVarianceNote: string;
  waitTimeDays: number;
  financeMinMonthly: number;
}

export function buildMatrixPageSchema(input: MatrixPageSchemaInput): object[] {
  const {
    townName, townSlug, serviceTitle, serviceSlug,
    townData, priceVarianceNote, waitTimeDays, financeMinMonthly,
  } = input;

  const base      = siteConfig.url;
  const pageUrl   = `${base}/locations/${townSlug}/${serviceSlug}/`;
  const pageId    = `${pageUrl}#webpage`;
  const crumbId   = `${pageUrl}#breadcrumb`;
  const siteId    = `${base}/#website`;
  const orgId     = `${base}/#organization`;
  const hubUrl    = `${base}/locations/${townSlug}/`;

  // ── BreadcrumbList ─────────────────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': crumbId,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',      'item': `${base}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Locations', 'item': `${base}/locations/` },
      { '@type': 'ListItem', 'position': 3, 'name': townName,    'item': hubUrl },
      { '@type': 'ListItem', 'position': 4, 'name': serviceTitle },
      // Note: position 4 intentionally has no 'item' — final breadcrumb per spec
    ],
  };

  // ── MedicalWebPage — primary type for treatment information pages ──────────
  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': pageId,
    'name': `${serviceTitle} in ${townName}`,
    'description':
      `Find Platinum and Diamond Invisalign providers for ${serviceTitle.toLowerCase()} ` +
      `in ${townName}, Essex. Free consultation, free 3D scan, fixed costs — no obligation.`,
    'url': pageUrl,
    'inLanguage': 'en-GB',
    'isPartOf': { '@id': siteId },
    'breadcrumb': { '@id': crumbId },
    'publisher': { '@id': orgId },
    // MedicalAudience signals this is health content reviewed for patient relevance
    'audience': {
      '@type': 'MedicalAudience',
      'audienceType': 'Patient',
    },
    // about: the TREATMENT, not the clinic — further separates aggregator from provider
    'about': {
      '@type': 'MedicalProcedure',
      'name': serviceTitle,
      'procedureType': 'https://schema.org/TherapeuticProcedure',
      'status': 'https://schema.org/ActiveActionStatus',
      'bodyLocation': 'Teeth',
      'description': buildTreatmentDescription(serviceSlug, townName),
    },
    // Specialist tag — YMYL quality signal for medical aggregators
    'specialty': 'Dentistry',
    // lastReviewed: set to site launch / last content update
    'lastReviewed': new Date().toISOString().split('T')[0],
  };

  // ── Dentist + AggregateRating — the FEATURED CLINIC on this page ──────────
  // Attached to the clinic entity, NOT to the MedicalWebPage.
  const dentistSchemas: object[] = [];
  const clinic = townData?.clinic1;

  if (clinic) {
    const clinicSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      '@id': `${base}/clinics/${clinic.slug}/#dentist`,
      'name': clinic.name,
      'url': `${base}/clinics/${clinic.slug}/`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': townName,
        'addressRegion': townData?.essexRegion ?? 'Essex',
        'addressCountry': 'GB',
      },
      // priceRange uses local band from matrix — belongs to the clinic, not the page
      'priceRange': townData
        ? `£${townData.priceRangeLow.toLocaleString()} – £${townData.priceRangeHigh.toLocaleString()}`
        : undefined,
      'currenciesAccepted': 'GBP',
      'paymentAccepted': 'Cash, Credit Card, Finance',
    };

    if (clinic.googleRating && clinic.reviewCount) {
      clinicSchema['aggregateRating'] = {
        '@type': 'AggregateRating',
        'ratingValue': String(clinic.googleRating),
        'reviewCount': String(clinic.reviewCount),
        'bestRating': '5',
        'worstRating': '1',
      };
    }

    if (clinic.tier) {
      clinicSchema['additionalProperty'] = {
        '@type': 'PropertyValue',
        'name': 'Invisalign Provider Tier',
        'value': clinic.tier,
      };
    }

    dentistSchemas.push(clinicSchema);
  }

  // ── FAQPage — 3 programmatic FAQs, built at build time ───────────────────
  // No API call. Pure TypeScript string interpolation via faq-templates.ts.
  const faqVars: FaqVariables = {
    townName,
    essexRegion:         townData?.essexRegion         ?? 'Essex',
    nearestMajorHub:     townData?.nearestMajorHub     ?? 'Chelmsford',
    commuteTimeMin:      townData?.commuteTimeMin       ?? 20,
    commuteMode:         townData?.commuteMode          ?? 'Car',
    waitTimeDays,
    financeMinMonthly,
    clinic1Name:         clinic?.name,
    clinic1Tier:         clinic?.tier,
    clinic1GoogleRating: clinic?.googleRating,
    clinic1ReviewCount:  clinic?.reviewCount,
    clinic1CaseVolume:   clinic?.caseVolume,
    priceRangeLow:       townData?.priceRangeLow        ?? 2800,
    priceRangeHigh:      townData?.priceRangeHigh       ?? 5200,
    treatmentFullName:   serviceTitle,
    treatmentShortName:  serviceTitle
      .toLowerCase()
      .replace('invisalign for ', '')
      .replace('invisalign ', ''),
    priceVarianceNote,
    siteBaseUrl: base,
  };

  const faqPageSchema = buildFaqPageSchema(faqVars);

  // Return as array — each block is injected as a separate <script> tag
  return [
    breadcrumbSchema,
    medicalWebPageSchema,
    ...dentistSchemas,
    faqPageSchema,
  ];
}

// ── Treatment description helper ───────────────────────────────────────────
// Provides MedicalProcedure.description for each of the 6 service types.
// These are factual clinical descriptions — not marketing copy.
function buildTreatmentDescription(serviceSlug: string, townName: string): string {
  const descriptions: Record<string, string> = {
    crowded:
      `Invisalign treatment for dental crowding in ${townName}, using sequential clear ` +
      `aligners combined with SmartForce attachments and interproximal reduction to create ` +
      `arch space and move crowded teeth into correct alignment without extraction.`,
    gaps:
      `Invisalign treatment for diastema and tooth spacing in ${townName}, using ` +
      `controlled mesial force applied through sequential clear aligners to close gaps ` +
      `between teeth, with bonded lingual retention following closure to prevent relapse.`,
    overbite:
      `Invisalign treatment for deep overbite in ${townName}, using Precision Wing ` +
      `technology and staged incisor intrusion mechanics to reduce excessive vertical ` +
      `overlap of the upper incisors and correct the anteroposterior jaw relationship.`,
    underbite:
      `Invisalign treatment for Class III dental underbite in ${townName}, using ` +
      `Class III elastic attachments and coordinated arch movement to advance the upper ` +
      `arch and retract the lower arch, correcting the anterior tooth relationship.`,
    crossbite:
      `Invisalign treatment for dental crossbite in ${townName}, using optimised ` +
      `SmartForce attachments to apply buccal or palatal force vectors to crossbiting ` +
      `teeth, restoring correct buccal overjet and eliminating associated mandibular shift.`,
    adults:
      `Invisalign clear aligner orthodontic treatment for adult patients in ${townName}, ` +
      `addressing a range of malocclusion types including crowding, spacing, bite issues, ` +
      `and relapse following previous orthodontic treatment, using removable aligners ` +
      `changed every 1–2 weeks.`,
  };
  return descriptions[serviceSlug] ?? descriptions['adults'];
}
