// lib/seo/metadata-rules.ts
//
// Deliverable 4: Programmatic Metadata Ruleset
//
// Generates Next.js Metadata objects for every page type on the site.
// Rules enforce:
//   - Title templates that hit commercial + local intent keywords
//   - Description templates at 145–160 chars (avoids truncation in SERP)
//   - Canonical URLs on every page — critical for 666 programmatic pages
//   - noindex rules for pages that must not be indexed
//   - OG tags on all indexable pages
//   - hreflang not required (UK-only site, en-GB throughout)
//
// Variable legend:
//   [town_name]       → e.g. "Harlow"
//   [town_slug]       → e.g. "harlow"
//   [service_title]   → e.g. "Invisalign for Overbite"
//   [service_slug]    → e.g. "overbite"
//   [clinic_name]     → e.g. "Church Langley Dental"
//   [clinic_slug]     → e.g. "church-langley-dental-harlow"
//   [clinic_tier]     → "Platinum" | "Diamond"
//   [price_range_low] → e.g. 2800
//   [wait_time_days]  → e.g. 5
//   [blog_title]      → e.g. "How Long Does Invisalign Take?"
//   [blog_slug]       → e.g. "how-long-does-invisalign-take"
//   [blog_date]       → ISO date e.g. "2025-03-01"

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

const BASE = siteConfig.url;

// ─────────────────────────────────────────────────────────────────────────────
// TITLE FORMULA
// Format:  Primary Keyword | Secondary Keyword — Site Name
// Target:  50–60 chars including pipes and dashes
// Rule:    Town name BEFORE treatment name when both present (local intent first)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// 1. HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────
export function homepageMetadata(): Metadata {
  const title       = 'Invisalign Essex | Find Platinum & Diamond Providers Near You';
  const description = 'Compare verified Platinum and Diamond Invisalign providers across all 111 Essex towns. Free consultation, free 3D scan. No referral needed. Find your nearest clinic today.';
  const canonical   = `${BASE}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. LOCATIONS INDEX (/locations/)
// ─────────────────────────────────────────────────────────────────────────────
export function locationsIndexMetadata(): Metadata {
  const title       = 'Invisalign Providers Across Essex | All 111 Towns';
  const description = 'Browse verified Platinum and Diamond Invisalign providers across all 111 Essex towns — from Chelmsford and Colchester to Harlow, Southend, and the Tendring coast.';
  const canonical   = `${BASE}/locations/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. TOWN HUB (/locations/[town]/)
//
// Title formula:  "Invisalign in [Town] | Platinum & Diamond Providers, Essex"
// Description:    Lead with town, mention tier, mention 6 treatments, CTA
// Char targets:   Title ≤ 60 | Description 145–160
// ─────────────────────────────────────────────────────────────────────────────
export function townHubMetadata(
  townName: string,    // [town_name]
  townSlug: string,    // [town_slug]
  waitDays: number,    // [wait_time_days]
): Metadata {
  const title =
    `Invisalign in ${townName} | Platinum & Diamond Providers, Essex`;

  // Description: 145–160 chars, hits local + tier + treatment intent
  const description =
    `Find verified Platinum and Diamond Invisalign providers in ${townName}, Essex. ` +
    `Crowded teeth, gaps, overbite, underbite, crossbite and adult Invisalign. ` +
    `Free consultation within ${waitDays} days.`;

  const canonical = `${BASE}/locations/${townSlug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. MATRIX PAGE (/locations/[town]/[service]/)
//
// Title formula:  "[Town] [Treatment] | Invisalign from £[price_low], Essex"
// Rule:           Town slug first — local intent outweighs treatment intent
//                 at this URL depth. Price anchor in title triggers commercial
//                 intent signals.
// Description:    Lead with treatment + town, price range, wait time, free CTA
// Char targets:   Title ≤ 60 | Description 145–160
// ─────────────────────────────────────────────────────────────────────────────
export function matrixPageMetadata(
  townName: string,       // [town_name]
  townSlug: string,       // [town_slug]
  serviceTitle: string,   // [service_title]  e.g. "Invisalign for Overbite"
  serviceSlug: string,    // [service_slug]
  priceRangeLow: number,  // [price_range_low]
  priceRangeHigh: number, // [price_range_high]  (used in description)
  waitDays: number,       // [wait_time_days]
): Metadata {
  // Short treatment label for tight title space e.g. "Overbite Correction"
  const treatmentLabel = serviceTitle
    .replace('Invisalign for ', '')
    .replace('Invisalign', 'Adult Invisalign');

  const title =
    `${townName} ${treatmentLabel} | Invisalign from £${priceRangeLow.toLocaleString()}`;

  const description =
    `${serviceTitle} in ${townName}, Essex — Platinum and Diamond verified providers. ` +
    `Prices from £${priceRangeLow.toLocaleString()}–£${priceRangeHigh.toLocaleString()}, ` +
    `0% finance available. Free consultation within ${waitDays} days, no referral needed.`;

  const canonical = `${BASE}/locations/${townSlug}/${serviceSlug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. TREATMENTS INDEX (/treatments/)
// ─────────────────────────────────────────────────────────────────────────────
export function treatmentsIndexMetadata(): Metadata {
  const title       = 'Invisalign Treatments in Essex | 6 Conditions Treated';
  const description = 'Explore all Invisalign treatment types available across Essex — crowded teeth, gaps, overbite, underbite, crossbite, and adult Invisalign. Compare providers and prices.';
  const canonical   = `${BASE}/treatments/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. TREATMENT HUB (/treatments/[service]/)
//
// Title formula:  "[Service Title] in Essex | Platinum Invisalign Providers"
// ─────────────────────────────────────────────────────────────────────────────
export function treatmentHubMetadata(
  serviceTitle: string,  // [service_title]
  serviceSlug: string,   // [service_slug]
): Metadata {
  const title =
    `${serviceTitle} in Essex | Platinum & Diamond Invisalign Providers`;

  const description =
    `Find verified Platinum and Diamond Invisalign providers for ` +
    `${serviceTitle.toLowerCase()} across all Essex towns. ` +
    `Free consultation, fixed pricing — compare clinics and book online.`;

  const canonical = `${BASE}/treatments/${serviceSlug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. CLINIC PROFILE (/clinics/[slug]/)
//
// Title formula:  "[Clinic Name] | Invisalign [Tier] Provider, [Locality]"
// ─────────────────────────────────────────────────────────────────────────────
export function clinicProfileMetadata(
  clinicName: string,      // [clinic_name]
  clinicSlug: string,      // [clinic_slug]
  tier: string,            // [clinic_tier]
  addressLocality: string, // [clinic_locality]
  reviewCount?: number,    // [clinic_1_reviews]
  googleRating?: number,   // [clinic_1_rating]
): Metadata {
  const title =
    `${clinicName} | Invisalign ${tier} Provider, ${addressLocality}, Essex`;

  const ratingSnippet =
    googleRating && reviewCount
      ? ` Rated ${googleRating}/5 from ${reviewCount} patient reviews.`
      : '';

  const description =
    `${clinicName} is a verified Invisalign ${tier} provider in ${addressLocality}, Essex.${ratingSnippet} ` +
    `Book a free consultation on the Invisalign Dentists Essex directory.`;

  const canonical = `${BASE}/clinics/${clinicSlug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. BLOG POST (/blog/[slug]/)
//
// Title formula:  "[Blog Title] | Invisalign Essex Guide"
// ─────────────────────────────────────────────────────────────────────────────
export function blogPostMetadata(
  blogTitle: string,  // [blog_title]
  blogSlug: string,   // [blog_slug]
  excerpt: string,    // First 145–160 chars of post intro
  publishDate: string,// [blog_date] ISO format
): Metadata {
  const title       = `${blogTitle} | Invisalign Essex Guide`;
  const description = excerpt.slice(0, 158).trimEnd() + (excerpt.length > 158 ? '…' : '');
  const canonical   = `${BASE}/blog/${blogSlug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      ...ogBase(title, description, canonical),
      type:            'article',
      publishedTime:   publishDate,
      modifiedTime:    publishDate,
      authors:         [siteConfig.name],
      section:         'Invisalign Guides',
    },
    twitter: twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CLINICS INDEX (/clinics/)
// ─────────────────────────────────────────────────────────────────────────────
export function clinicsIndexMetadata(): Metadata {
  const title       = 'Invisalign Clinics in Essex | Platinum & Diamond Directory';
  const description = 'Browse all verified Platinum and Diamond Invisalign clinics across Essex. Every provider independently verified by Align Technology. Compare ratings, tiers, and treatments.';
  const canonical   = `${BASE}/clinics/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: ogBase(title, description, canonical),
    twitter:   twitterBase(title, description),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// NOINDEX RULES
// Apply these to pages that must not be indexed.
// Return this from generateMetadata() for excluded pages.
// ─────────────────────────────────────────────────────────────────────────────
export const noindexMetadata: Metadata = {
  robots: {
    index:  false,
    follow: false,
  },
};

// Pages that MUST receive noindex:
//   - /thank-you/ (form confirmation)
//   - /privacy-policy/ (legal, no search value)
//   - /terms/ (legal)
//   - Any paginated duplicate: /locations/?page=2 etc.
//   - Any filtered/sorted URL variant that duplicates a canonical

// ─────────────────────────────────────────────────────────────────────────────
// TITLE LENGTH VALIDATION UTILITY
// Run in CI or a build script to catch titles that will be truncated in SERP.
// Google truncates at ~580px — approximately 60 chars for most fonts.
// ─────────────────────────────────────────────────────────────────────────────
export function validateTitleLength(title: string, pageId: string): void {
  if (title.length > 60) {
    console.warn(
      `[SEO] Title too long (${title.length} chars) on ${pageId}: "${title}"`
    );
  }
  if (title.length < 30) {
    console.warn(
      `[SEO] Title too short (${title.length} chars) on ${pageId}: "${title}"`
    );
  }
}

export function validateDescriptionLength(desc: string, pageId: string): void {
  if (desc.length > 160) {
    console.warn(
      `[SEO] Description too long (${desc.length} chars) on ${pageId}`
    );
  }
  if (desc.length < 120) {
    console.warn(
      `[SEO] Description too short (${desc.length} chars) on ${pageId}`
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED OG + TWITTER HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function ogBase(title: string, description: string, url: string) {
  return {
    title,
    description,
    url,
    siteName:  siteConfig.name,
    type:      'website' as const,
    locale:    'en_GB',
    images: [
      {
        url:    `${BASE}/og-default.jpg`,
        width:  1200,
        height: 630,
        alt:    title,
      },
    ],
  };
}

function twitterBase(title: string, description: string) {
  return {
    card:        'summary_large_image' as const,
    title,
    description,
    images:      [`${BASE}/og-default.jpg`],
    creator:     '@invisalignessex',
    site:        '@invisalignessex',
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA RULESET QUICK REFERENCE
// ─────────────────────────────────────────────────────────────────────────────
//
// Page type            | Title formula                                      | noindex?
// ---------------------|---------------------------------------------------|--------
// Homepage             | Invisalign Essex | Find Platinum & Diamond...      | NO
// Locations index      | Invisalign Providers Across Essex | All 111 Towns  | NO
// Town hub             | Invisalign in [Town] | Platinum & Diamond...       | NO
// Matrix page          | [Town] [Treatment] | Invisalign from £[price_low]  | NO
// Treatments index     | Invisalign Treatments in Essex | 6 Conditions...   | NO
// Treatment hub        | [Service Title] in Essex | Platinum...             | NO
// Clinic profile       | [Clinic Name] | Invisalign [Tier] Provider...      | NO
// Blog post            | [Blog Title] | Invisalign Essex Guide              | NO
// Clinics index        | Invisalign Clinics in Essex | Platinum & Diamond.. | NO
// Thank you page       | (any)                                             | YES
// Privacy/Terms        | (any)                                             | YES
// Paginated duplicates | (any)                                             | YES
//
// Canonical rule: EVERY indexable page must have alternates.canonical set.
// The 666 matrix pages are the highest risk for canonical drift — each
// page.tsx generateMetadata() call must construct the canonical from
// params.town and params.service, never from the request URL.
