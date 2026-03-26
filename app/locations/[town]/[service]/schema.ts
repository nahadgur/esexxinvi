// app/locations/[town]/[service]/schema.ts
//
// Deliverable 2: Programmatic Page Schema
// Generates MedicalWebPage + FAQPage JSON-LD for every treatment×location page.
//
// Variable legend (sourced from matrix data files):
//   [town_name]          → e.g. "Harlow"
//   [town_slug]          → e.g. "harlow"
//   [service_title]      → e.g. "Invisalign for Overbite"
//   [service_slug]       → e.g. "overbite"
//   [condition_name]     → e.g. "Overbite" (bare condition, no "Invisalign")
//   [price_range_low]    → e.g. 4200
//   [price_range_high]   → e.g. 5200
//   [finance_min_monthly]→ e.g. 52
//   [price_variance_note]→ verbatim from Treatment Price Variance tab
//   [wait_time_days]     → e.g. 5
//   [clinic_1_name]      → e.g. "Church Langley Dental"
//   [clinic_1_slug]      → e.g. "church-langley-dental-harlow"
//   [clinic_1_tier]      → "Platinum" | "Diamond"
//   [clinic_1_rating]    → e.g. 4.9
//   [clinic_1_reviews]   → e.g. 142
//   [clinic_1_cases]     → e.g. "400+"
//   [last_reviewed]      → ISO date e.g. "2025-01-15"

import { siteConfig } from '@/data/site';
import type { TownContent } from '@/data/content/types';
import type { Service } from '@/data/services';
import { buildFaqPageSchema } from '@/data/content/faq-templates';
import type { FaqVariables } from '@/data/content/faq-templates';

// ── Condition metadata per service slug ───────────────────────────────────
// Maps service slugs to their MedicalCondition representation.
// This feeds the MedicalWebPage.about property.
const conditionMeta: Record<string, {
  conditionName: string;
  conditionDescription: string;
  treatmentDescription: string;
  duration: string;
}> = {
  crowded: {
    conditionName: 'Dental Crowding',
    conditionDescription:
      'A malocclusion in which the available arch space is insufficient for the full complement of teeth, causing rotation, overlap, or labial displacement of individual teeth.',
    treatmentDescription:
      'Invisalign treatment for crowded teeth uses a sequence of custom clear aligners, SmartForce attachments for rotational control, and interproximal reduction (IPR) to create arch space — achieving extraction-free alignment across mild to severe crowding cases.',
    duration: 'between 6 and 18 months depending on severity',
  },
  gaps: {
    conditionName: 'Dental Spacing / Diastema',
    conditionDescription:
      'Excess space between teeth, including diastema (central gap) and generalised spacing, caused by tooth-to-jaw size discrepancy, missing teeth, or an enlarged labial frenum.',
    treatmentDescription:
      'Invisalign treatment for gaps applies controlled mesial force through sequential aligners to close spaces between teeth. Bonded lingual retention is fitted after closure to prevent relapse from residual periodontal fibre tension.',
    duration: 'between 3 and 12 months depending on the number and size of gaps',
  },
  overbite: {
    conditionName: 'Deep Overbite',
    conditionDescription:
      'A vertical malocclusion in which the upper incisors overlap the lower incisors excessively — typically defined as greater than 3mm vertical overlap or contact with the palatal mucosa.',
    treatmentDescription:
      'Invisalign Precision Wing technology applies a mandibular advancement effect while staged incisor intrusion mechanics reduce the curve of Spee, correcting deep overbite from both dental and skeletal directions without headgear.',
    duration: 'between 12 and 20 months',
  },
  underbite: {
    conditionName: 'Dental Underbite / Class III Malocclusion',
    conditionDescription:
      'A malocclusion in which the lower anterior teeth sit anterior to the upper anterior teeth in occlusion, classified as either dental (tooth position) or skeletal (jaw discrepancy) in aetiology.',
    treatmentDescription:
      'Invisalign treats dental underbites using Class III elastic attachments — precision-cut hooks in the aligner margins — combined with diagonal elastic bands to simultaneously advance the upper arch and retract the lower arch.',
    duration: 'between 12 and 18 months for dental underbites',
  },
  crossbite: {
    conditionName: 'Dental Crossbite',
    conditionDescription:
      'A malocclusion in which one or more upper teeth occlude lingual to the opposing lower teeth, occurring anteriorly (incisors/canines) or posteriorly (premolars/molars), often causing a mandibular shift.',
    treatmentDescription:
      'Invisalign corrects crossbites using optimised SmartForce attachments engineered for buccal and palatal force vectors, eliminating the crossbite contact and the associated mandibular shift without fixed appliances.',
    duration: 'between 12 and 18 months',
  },
  adults: {
    conditionName: 'Adult Malocclusion',
    conditionDescription:
      'Orthodontic misalignment in adult patients, encompassing crowding, spacing, bite discrepancies, and post-orthodontic relapse — requiring treatment planning that accounts for bone density, existing restorations, and periodontal health.',
    treatmentDescription:
      'Adult Invisalign uses removable clear aligners to treat the full range of malocclusion types in patients of any age, including cases with existing crowns, veneers, bridges, and implants, with treatment adapted to adult bone remodelling rates.',
    duration: 'between 6 and 18 months',
  },
};

// ── Main schema builder ───────────────────────────────────────────────────
export function buildMatrixPageSchema(
  townData: TownContent | undefined,
  service: Service,
  townName: string,
  townSlug: string,
  priceVarianceNote: string,
): object[] {
  const base     = siteConfig.url;
  const pageUrl  = `${base}/locations/${townSlug}/${service.slug}/`;
  const pageId   = `${pageUrl}#webpage`;
  const crumbId  = `${pageUrl}#breadcrumb`;
  const orgId    = `${base}/#organization`;
  const siteId   = `${base}/#website`;
  const clinic   = townData?.clinic1;
  const meta     = conditionMeta[service.slug] ?? conditionMeta.adults;

  const priceRangeLow    = townData?.priceRangeLow    ?? 2800;
  const priceRangeHigh   = townData?.priceRangeHigh   ?? 5200;
  const financeMin       = townData?.financeMinMonthly ?? 50;
  const waitDays         = townData?.waitTimeDays       ?? 7;

  // ── 1. BreadcrumbList ────────────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': crumbId,
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',
        'item': `${base}/` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Locations',
        'item': `${base}/locations/` },
      { '@type': 'ListItem', 'position': 3, 'name': townName,
        'item': `${base}/locations/${townSlug}/` },
      // Position 4 has no 'item' — final crumb per BreadcrumbList spec
      { '@type': 'ListItem', 'position': 4, 'name': service.title },
    ],
  };

  // ── 2. MedicalWebPage ────────────────────────────────────────────────────
  //
  // about.MedicalCondition  → the condition being treated     [condition_name]
  // about.MedicalProcedure  → the Invisalign treatment itself [service_title]
  //
  // Both are nested under a single 'about' array — Google reads both and
  // uses them to establish topical relevance for the page's medical context.
  //
  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': pageId,
    'name': `${service.title} in ${townName}, Essex`,
    'description':
      `Find verified Platinum and Diamond Invisalign providers for ` +
      `${service.title.toLowerCase()} in ${townName}, Essex. Free consultation, ` +
      `free iTero 3D scan. Prices from £${priceRangeLow.toLocaleString()} — ` +
      `fixed quote before you commit.`,
    'url': pageUrl,
    'inLanguage': 'en-GB',
    'isPartOf': { '@id': siteId },
    'breadcrumb': { '@id': crumbId },
    'publisher': { '@id': orgId },
    // MedicalAudience — signals patient-facing health content
    'audience': {
      '@type': 'MedicalAudience',
      'audienceType': 'Patient',
    },
    // specialty — YMYL relevance signal
    'specialty': 'Dentistry',
    // lastReviewed — E-E-A-T freshness signal; update on each content revision
    'lastReviewed': new Date().toISOString().split('T')[0],
    // about — the condition AND the treatment, both referenced
    'about': [
      {
        // The medical condition this page helps patients understand
        '@type': 'MedicalCondition',
        'name': meta.conditionName,
        'description': meta.conditionDescription,
        'relevantSpecialty': {
          '@type': 'MedicalSpecialty',
          'name': 'Dentistry',
        },
      },
      {
        // The treatment (Invisalign) being offered for this condition
        '@type': 'MedicalTherapy',
        'name': service.title,
        'description': meta.treatmentDescription,
        'procedureType': 'https://schema.org/TherapeuticProcedure',
        'bodyLocation': 'Teeth',
        'status': 'https://schema.org/ActiveActionStatus',
        'study': {
          // Links the treatment to Align Technology as the medical entity
          '@type': 'MedicalOrganization',
          'name': 'Align Technology, Inc.',
          'url': 'https://www.aligntech.com',
        },
      },
    ],
    // priceRange reflects the local market band from the matrix
    // This is on the PAGE describing the service, distinct from
    // the Dentist entity's priceRange (which reflects the specific clinic)
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'GBP',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'minPrice': priceRangeLow,       // [price_range_low]
        'maxPrice': priceRangeHigh,      // [price_range_high]
        'priceCurrency': 'GBP',
      },
      'description':
        `${service.title} in ${townName} from £${priceRangeLow.toLocaleString()} ` +
        `to £${priceRangeHigh.toLocaleString()}. 0% finance from ` +
        `£${financeMin}/month. Free initial consultation.`,
      'eligibleRegion': {
        '@type': 'Place',
        'name': townName,
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Essex',
        },
      },
    },
  };

  // ── 3. Dentist + AggregateRating ─────────────────────────────────────────
  // Attached to the CLINIC entity, not the page.
  // Only emitted when real rating data exists — never fabricated.
  const dentistSchemas: object[] = [];

  if (clinic) {
    const clinicId = `${base}/clinics/${clinic.slug}/#dentist`;

    const clinicSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      '@id': clinicId,                  // [clinic_1_slug]
      'name': clinic.name,              // [clinic_1_name]
      'url': `${base}/clinics/${clinic.slug}/`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': townName,    // [town_name]
        'addressRegion': townData?.essexRegion ?? 'Essex',
        'addressCountry': 'GB',
      },
      'priceRange':
        `£${priceRangeLow.toLocaleString()} – £${priceRangeHigh.toLocaleString()}`,
      'additionalProperty': {
        '@type': 'PropertyValue',
        'name': 'Invisalign Provider Tier',
        'value': clinic.tier,           // [clinic_1_tier]
      },
    };

    // AggregateRating — conditional on real data          [clinic_1_rating] [clinic_1_reviews]
    if (clinic.googleRating && clinic.reviewCount) {
      clinicSchema['aggregateRating'] = {
        '@type': 'AggregateRating',
        'ratingValue': String(clinic.googleRating),   // [clinic_1_rating]
        'reviewCount': String(clinic.reviewCount),    // [clinic_1_reviews]
        'bestRating': '5',
        'worstRating': '1',
      };
    }

    dentistSchemas.push(clinicSchema);
  }

  // ── 4. FAQPage ───────────────────────────────────────────────────────────
  // 3 programmatic FAQs built at next build — zero API cost.
  // Variables injected:
  //   FAQ 1 → [price_variance_note], [finance_min_monthly]
  //   FAQ 2 → [clinic_1_name], [clinic_1_tier], [clinic_1_rating], [clinic_1_reviews], [clinic_1_cases]
  //        OR [nearest_major_hub], [commute_time_min], [commute_mode]
  //   FAQ 3 → [service_title], [town_name], [wait_time_days]
  //
  // The FAQ questions themselves:
  //   Q1: "How much does [service_title] cost in [town_name]?"
  //   Q2: "How do I know the Invisalign providers listed for [town_name] are qualified?"
  //   Q3: "How long does [service_title] take, and what does the process look like in [town_name]?"

  const faqVars: FaqVariables = {
    townName,
    essexRegion:         townData?.essexRegion         ?? 'Essex',
    nearestMajorHub:     townData?.nearestMajorHub     ?? 'Chelmsford',
    commuteTimeMin:      townData?.commuteTimeMin       ?? 20,
    commuteMode:         townData?.commuteMode          ?? 'Car',
    waitTimeDays:        waitDays,                         // [wait_time_days]
    financeMinMonthly:   financeMin,                       // [finance_min_monthly]
    clinic1Name:         clinic?.name,                     // [clinic_1_name]
    clinic1Tier:         clinic?.tier,                     // [clinic_1_tier]
    clinic1GoogleRating: clinic?.googleRating,             // [clinic_1_rating]
    clinic1ReviewCount:  clinic?.reviewCount,              // [clinic_1_reviews]
    clinic1CaseVolume:   clinic?.caseVolume,               // [clinic_1_cases]
    priceRangeLow,                                         // [price_range_low]
    priceRangeHigh,                                        // [price_range_high]
    treatmentFullName:   service.title,                    // [service_title]
    treatmentShortName:  service.title
      .toLowerCase()
      .replace('invisalign for ', '')
      .replace('invisalign ', ''),
    priceVarianceNote,                                     // [price_variance_note]
    siteBaseUrl: base,
  };

  const faqPageSchema = buildFaqPageSchema(faqVars);

  // Return order matters — inject as separate <script> tags in this sequence
  return [
    breadcrumbSchema,      // 1. Navigation context
    medicalWebPageSchema,  // 2. Primary page type (MedicalWebPage)
    ...dentistSchemas,     // 3. Featured clinic + AggregateRating
    faqPageSchema,         // 4. FAQPage — FAQ rich result eligibility
  ];
}
