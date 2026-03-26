// lib/seo/canonical.ts
//
// Deliverable 5a: Canonicalization Logic
//
// PROBLEM BEING SOLVED
// ───────────────────────────────────────────────────────────────────────────
// Without explicit canonical rules, Next.js generates multiple accessible
// URLs for the same content:
//
//   /locations/harlow          ← no trailing slash (404 or redirect)
//   /locations/harlow/         ← canonical target
//   /locations/harlow?ref=abc  ← parameterized — same content, different URL
//   /locations/harlow/?page=1  ← paginated duplicate
//
// Across 666 matrix pages + 111 town hubs + 6 treatment hubs = 783 pages,
// even a 10% canonical drift rate creates ~78 duplicate URLs that dilute
// crawl budget and split PageRank signals.
//
// SOLUTION
// ───────────────────────────────────────────────────────────────────────────
// 1. All canonical URLs are constructed from route params — never from the
//    request URL — so query strings never pollute the canonical tag.
// 2. Trailing slashes are enforced in next.config.js (trailingSlash: true)
//    so Next.js never generates the non-slash variant as a valid URL.
// 3. The canonical builder here is the single source of truth — all
//    generateMetadata() functions call it, never construct URLs manually.

import { siteConfig } from '@/data/site';

const BASE = siteConfig.url;

// ── Canonical URL builders — one per page type ────────────────────────────
// All return URLs with trailing slashes, constructed from typed params.
// Never accepts a raw request URL — only structured data from route params.

export const canonical = {

  home: () =>
    `${BASE}/`,

  locationsIndex: () =>
    `${BASE}/locations/`,

  townHub: (townSlug: string) =>
    `${BASE}/locations/${townSlug}/`,

  matrixPage: (townSlug: string, serviceSlug: string) =>
    `${BASE}/locations/${townSlug}/${serviceSlug}/`,

  treatmentsIndex: () =>
    `${BASE}/treatments/`,

  treatmentHub: (serviceSlug: string) =>
    `${BASE}/treatments/${serviceSlug}/`,

  clinicsIndex: () =>
    `${BASE}/clinics/`,

  clinicProfile: (clinicSlug: string) =>
    `${BASE}/clinics/${clinicSlug}/`,

  blogIndex: () =>
    `${BASE}/blog/`,

  blogPost: (postSlug: string) =>
    `${BASE}/blog/${postSlug}/`,

};

// ── Next.js Metadata alternates helper ───────────────────────────────────
// Use in every generateMetadata() call:
//   return { alternates: canonicalMeta(canonical.matrixPage(town, service)), ... }
export function canonicalMeta(url: string) {
  return { canonical: url };
}

// ── Self-referencing canonical validation ─────────────────────────────────
// Asserts that the canonical URL for a page matches the page's own URL.
// A canonical that points to a DIFFERENT page is only valid for explicit
// pagination (rel=prev/next) — for all other pages it should be self-referencing.
//
// Run in development to catch accidental cross-page canonical leaks.
export function assertSelfCanonical(
  pageUrl: string,
  canonicalUrl: string,
  pageId: string,
): void {
  if (process.env.NODE_ENV !== 'development') return;
  // Normalise: strip protocol + host, ensure trailing slash
  const normalise = (u: string) =>
    u.replace(/^https?:\/\/[^/]+/, '').replace(/\/?$/, '/');
  if (normalise(pageUrl) !== normalise(canonicalUrl)) {
    console.warn(
      `[Canonical] Non-self-referencing canonical on ${pageId}\n` +
      `  Page:      ${pageUrl}\n` +
      `  Canonical: ${canonicalUrl}`
    );
  }
}

// ── next.config.js settings required ─────────────────────────────────────
// Add these to next.config.js to enforce trailing slashes at the routing level.
// This means /locations/harlow ALWAYS redirects (308) to /locations/harlow/
// so Google never sees the non-slash version as a crawlable page.
//
// module.exports = {
//   trailingSlash: true,
//
//   // Prevent query string variants from being indexed:
//   // All ?param=value URLs return the same canonical via the meta tag,
//   // and the robots.txt blocks Googlebot from following filtered URLs.
//   // No additional redirects needed for query params — the canonical
//   // tag and robots.txt combination is sufficient.
// }

// ── Redirect rules for next.config.js ────────────────────────────────────
// These catch any legacy or non-slash URLs that might arrive from
// external links or old sitemaps, returning permanent 308 redirects.
//
// Add to the `redirects` array in next.config.js:
//
// async redirects() {
//   return [
//     // Legacy URL patterns — before Phase 1 URL restructure
//     { source: '/location/:town',          destination: '/locations/:town/',           permanent: true },
//     { source: '/services/:service/:town', destination: '/locations/:town/:service/',  permanent: true },
//     { source: '/services/:service',       destination: '/treatments/:service/',        permanent: true },
//
//     // Non-trailing-slash safety nets (belt-and-suspenders alongside trailingSlash:true)
//     { source: '/locations/:town',          destination: '/locations/:town/',           permanent: true },
//     { source: '/locations/:town/:service', destination: '/locations/:town/:service/',  permanent: true },
//     { source: '/treatments/:service',      destination: '/treatments/:service/',        permanent: true },
//     { source: '/clinics/:slug',            destination: '/clinics/:slug/',             permanent: true },
//   ];
// }
