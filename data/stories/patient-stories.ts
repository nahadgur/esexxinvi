// data/stories/patient-stories.ts
//
// Patient Success Story data schema and records.
//
// ── E-E-A-T STRATEGY OVERVIEW ──────────────────────────────────────────────
//
// Google's Quality Rater Guidelines define "Experience" as:
//   "First-hand life experience with the main topic of the page."
//   (QRG Section 2.5.1, October 2023 update)
//
// For a YMYL dental aggregator, experience signals must come from:
//   1. Real patients describing a real treatment journey (not testimonials)
//   2. Specific, verifiable details (treatment type, duration, clinic, town)
//   3. Balanced, honest framing — including challenges, not just outcomes
//   4. Clear disclosure of how stories were collected and verified
//
// ── ETHICAL AGGREGATION RULES ─────────────────────────────────────────────
//
// What this system does:
//   - Structures patient stories with required fields that force specificity
//   - Requires consent declaration before publication
//   - Requires minimum treatment completion (no in-treatment stories)
//   - Tags stories to town, treatment, and clinic for SEO placement
//   - Displays verification status and collection method transparently
//
// What this system does NOT do:
//   - Fabricate, composite, or AI-generate patient stories
//   - Publish anonymous stories without a minimum verification step
//   - Display stories that have not been explicitly consented for publication
//   - Claim outcome guarantees based on featured stories
//   - Offer incentives that create a conflict of interest in the review
//     (GDC advertising guidance prohibits incentivised testimonials)
//
// ── COLLECTION METHODS ────────────────────────────────────────────────────
//
// Stories are collected via one of three methods — displayed on each story:
//
//   FORM_SUBMISSION    → Patient submits via /share-your-story/ form
//                        after treatment completion. We contact the clinic
//                        to confirm the patient was treated there.
//   GOOGLE_ATTRIBUTION → Patient consented for us to attribute their
//                        published Google review. We contact them via
//                        Google Business Profile message to request consent.
//   CLINIC_REFERRED    → Clinic referred a patient willing to share their
//                        story. Patient contacted directly by us — clinic
//                        has NO editorial input into the final story.
//                        Disclosed on the story card.
//
// ── VERIFICATION STEPS ───────────────────────────────────────────────────
//
//   VERIFIED_TREATMENT → We confirmed with the clinic that this patient
//                        completed treatment there. Patient identity is
//                        known to us but first name + town + treatment only
//                        are displayed (no surname, no address).
//   CONSENT_CONFIRMED  → Written consent for publication received and stored.
//   COMPLETION_CONFIRMED → Patient confirmed treatment was complete at time
//                          of submission (no in-treatment stories).

export type TreatmentSlug = 'crowded' | 'gaps' | 'overbite' | 'underbite' | 'crossbite' | 'adults';

export type CollectionMethod =
  | 'FORM_SUBMISSION'
  | 'GOOGLE_ATTRIBUTION'
  | 'CLINIC_REFERRED';

export type VerificationStep =
  | 'VERIFIED_TREATMENT'
  | 'CONSENT_CONFIRMED'
  | 'COMPLETION_CONFIRMED';

export interface PatientStory {
  // Unique slug for URL: /success-stories/[slug]/
  slug: string;

  // Publication metadata
  publishedDate: string;       // ISO date
  lastUpdated?: string;        // ISO date — if story was updated post-publication
  collectionMethod: CollectionMethod;
  verificationSteps: VerificationStep[];

  // Patient details — first name only, no surname
  // Town is shown; full address is never published
  patientFirstName: string;
  patientTown: string;         // Must match a town slug in data/locations.ts
  patientTownSlug: string;

  // Treatment details
  treatmentSlug: TreatmentSlug;
  treatmentLabel: string;      // e.g. "Invisalign for Overbite"
  clinicSlug: string;          // Must match a clinic in data/clinics.ts
  clinicName: string;
  clinicTier: 'Platinum' | 'Diamond';

  // Treatment journey data — the specific details that establish authenticity
  treatmentDuration: string;   // e.g. "14 months"
  treatmentCompleted: string;  // ISO date (month + year level — not exact day)
  alignerCount?: number;       // Total aligners in the series, if known
  refinementsReceived?: number;// Number of refinement rounds, if applicable

  // The story — structured in 4 required parts + 1 optional
  // Each part is a separate field so the component can render them
  // with appropriate heading and styling.

  // Part 1: Why they sought treatment — the patient's starting point
  // What bothered them, how long they had lived with it, what prompted them to act
  // Target: 60–100 words. First person. No outcome yet.
  backgroundText: string;

  // Part 2: How they chose this clinic — the research and selection process
  // What criteria mattered to them, why they used this directory or found the clinic,
  // what the consultation was like. Specific details are essential here.
  // Target: 60–100 words. First person. No outcome yet.
  choiceText: string;

  // Part 3: The treatment experience — the process, not the outcome
  // How wearing aligners fitted into their life, any challenges they faced,
  // what they found harder or easier than expected. Honest framing required.
  // Target: 80–120 words. First person. Can include mild negatives.
  journeyText: string;

  // Part 4: The result — specific, not superlative
  // What changed concretely. If measurable (overbite reduced, gap closed),
  // that detail is more credible than "amazing transformation".
  // Target: 60–100 words. First person.
  resultText: string;

  // Part 5: Optional — what they would tell someone considering treatment
  // A single direct recommendation. Feels natural when present but not required.
  // Target: 30–50 words.
  adviceText?: string;

  // Disclosure flags — must both be true before a story can be published
  patientConsentedToPublication: boolean;
  patientConsentedToFirstNameDisplay: boolean;

  // Whether the story is currently active (show on site)
  active: boolean;

  // Optional: whether the patient provided a photo
  // Photos significantly increase E-E-A-T credibility but require separate consent
  hasPhoto: boolean;
  photoUrl?: string;
  photoAlt?: string;
  photoConsented?: boolean;

  // SEO / schema fields
  // headline — used as the story title in listings and schema
  headline: string;

  // ratingValue — patient's self-reported satisfaction score (1–5)
  // This feeds the Review schema on the story page
  ratingValue: number;
}

// ── Patient stories array ──
// Empty until real patient stories are collected via /share-your-story/.
// Sample/demo entries removed per UK DMCCA 2024 / CMA fake-review guidance.
// The previous slugs (sarah-chelmsford-overbite, james-harlow-crowded,
// priya-southend-adult) are 410 Gone via middleware — see middleware.ts.

export const patientStories: PatientStory[] = [];

// ── Lookup helpers ──────────────────────────────────────────────────────────
export function getActiveStories(): PatientStory[] {
  return patientStories.filter(s => s.active && s.patientConsentedToPublication);
}

export function getStoriesByTreatment(treatmentSlug: TreatmentSlug): PatientStory[] {
  return getActiveStories().filter(s => s.treatmentSlug === treatmentSlug);
}

export function getStoriesByTown(townSlug: string): PatientStory[] {
  return getActiveStories().filter(s => s.patientTownSlug === townSlug);
}

export function getStoriesByClinic(clinicSlug: string): PatientStory[] {
  return getActiveStories().filter(s => s.clinicSlug === clinicSlug);
}

export function getStoryBySlug(slug: string): PatientStory | undefined {
  return getActiveStories().find(s => s.slug === slug);
}

export function getRelatedStories(story: PatientStory, limit = 2): PatientStory[] {
  return getActiveStories()
    .filter(s => s.slug !== story.slug)
    .sort((a, b) => {
      // Prioritise same treatment, then same town
      const aScore = (a.treatmentSlug === story.treatmentSlug ? 2 : 0)
                   + (a.patientTownSlug === story.patientTownSlug ? 1 : 0);
      const bScore = (b.treatmentSlug === story.treatmentSlug ? 2 : 0)
                   + (b.patientTownSlug === story.patientTownSlug ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}
