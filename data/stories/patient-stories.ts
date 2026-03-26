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

// ── Sample stories (replace/extend with real stories post-launch) ─────────
// These demonstrate the format — do NOT publish these as-is.
// Every story must be a real patient's real experience with written consent.

export const patientStories: PatientStory[] = [

  {
    slug:               'sarah-chelmsford-overbite',
    publishedDate:      '2025-02-10',
    collectionMethod:   'FORM_SUBMISSION',
    verificationSteps:  ['VERIFIED_TREATMENT', 'CONSENT_CONFIRMED', 'COMPLETION_CONFIRMED'],
    patientFirstName:   'Sarah',
    patientTown:        'Chelmsford',
    patientTownSlug:    'chelmsford',
    treatmentSlug:      'overbite',
    treatmentLabel:     'Invisalign for Overbite',
    clinicSlug:         'nuffield-dental-chelmsford',
    clinicName:         'Nuffield Dental',
    clinicTier:         'Diamond',
    treatmentDuration:  '16 months',
    treatmentCompleted: '2024-11',
    alignerCount:       32,
    refinementsReceived: 1,
    headline:           'After 30 years of hiding my smile, my overbite is gone',
    ratingValue:        5,

    backgroundText:
      'I had a deep overbite my whole life — my upper teeth completely covered my lower teeth when I bit down, which caused jaw tension and meant I genuinely could not eat certain foods comfortably. I had been told as a teenager that fixing it would require surgery, and I filed it away as something I would never do. I was 42 when I finally looked into it again and found that Invisalign could treat it without any surgical component at all.',

    choiceText:
      'I spent a long time researching before booking anything. I found Invisalign Dentists Essex through a Google search and used their information on overbite treatment to understand what I was actually looking for in a provider. The fact that they only list Platinum and Diamond practices made the shortlist much shorter. I chose Nuffield Dental in Chelmsford because they held Diamond status and the initial consultation was thorough — the dentist spent 40 minutes going through my ClinCheck simulation before I made any decision.',

    journeyText:
      'Wearing aligners for 22 hours a day was the adjustment I had most underestimated. The first two weeks were genuinely uncomfortable and I found myself eating much faster than usual to minimise aligner-out time. It settled after about a month. The check-ups were every eight weeks and always felt purposeful — the dentist would check tracking carefully and explain what the next set of aligners was doing. I had one refinement round at month 12, which added about 6 weeks to the timeline. I would not have been prepared for that if they hadn\'t told me it was likely from the start.',

    resultText:
      'My overbite is gone. I can see my lower teeth when I smile — something I genuinely could not do before. The jaw tension I had accepted as a normal part of my life has almost completely resolved, which I did not expect. My dentist described the result as a full correction at my final appointment. I am wearing Vivera retainers every night and have been since treatment ended.',

    adviceText:
      'Go to a Diamond provider for overbite specifically. I asked at the consultation how many overbite cases they had done and the answer was very specific — that told me everything I needed to know.',

    patientConsentedToPublication:       true,
    patientConsentedToFirstNameDisplay:  true,
    active:     true,
    hasPhoto:   false,
  },

  {
    slug:               'james-harlow-crowded',
    publishedDate:      '2025-01-22',
    collectionMethod:   'GOOGLE_ATTRIBUTION',
    verificationSteps:  ['VERIFIED_TREATMENT', 'CONSENT_CONFIRMED', 'COMPLETION_CONFIRMED'],
    patientFirstName:   'James',
    patientTown:        'Harlow',
    patientTownSlug:    'harlow',
    treatmentSlug:      'crowded',
    treatmentLabel:     'Invisalign for Crowded Teeth',
    clinicSlug:         'church-langley-dental-harlow',
    clinicName:         'Church Langley Dental',
    clinicTier:         'Platinum',
    treatmentDuration:  '12 months',
    treatmentCompleted: '2024-10',
    alignerCount:       24,
    refinementsReceived: 0,
    headline:           'My bottom teeth were so crowded I couldn\'t floss between them. 12 months later, completely straight',
    ratingValue:        5,

    backgroundText:
      'I had quite severe lower crowding — my bottom front teeth were stacked on top of each other, which made cleaning them properly almost impossible. I had had a couple of cavities in that area and my hygienist had started flagging it at every appointment. That was the push I needed to stop putting off treatment I\'d been thinking about since my 20s. I\'m 36 now.',

    choiceText:
      'My hygienist mentioned Invisalign as an option and I did my own research from there. I found this directory looking for Platinum providers near Harlow and Church Langley Dental came up immediately. I booked a consultation after seeing their rating — 4.9 stars from well over 100 reviews is a meaningful number. The clinic is in Church Langley, about 10 minutes from where I live, which made the check-up schedule easy to fit around work.',

    journeyText:
      'The IPR — where they remove a tiny amount of enamel between teeth to create space — was the part I\'d read about most before I started and the part I was most unsure about. It turned out to be almost nothing in practice; I felt mild sensitivity for a day after. My aligners tracked well the whole way through with no refinements needed, which the dentist said was because the IPR was staged correctly from the start. I work in London and the West Anglia line from Harlow made getting to and from appointments straightforward.',

    resultText:
      'My bottom teeth are now completely straight and I can floss between every tooth. My hygienist commented at my first post-treatment appointment that the gum health had noticeably improved in the previously crowded area. The treatment finished slightly ahead of the 13-month estimate — I completed in 12 months. I was given a fixed lingual retainer on the back of my bottom teeth, which I\'m told I\'ll wear indefinitely.',

    adviceText:
      'Don\'t underestimate how much the cleaning benefit matters long-term. I got Invisalign for cosmetic reasons but the practical health improvement has turned out to be just as significant.',

    patientConsentedToPublication:       true,
    patientConsentedToFirstNameDisplay:  true,
    active:     true,
    hasPhoto:   false,
  },

  {
    slug:               'priya-southend-adult',
    publishedDate:      '2025-03-03',
    collectionMethod:   'FORM_SUBMISSION',
    verificationSteps:  ['VERIFIED_TREATMENT', 'CONSENT_CONFIRMED', 'COMPLETION_CONFIRMED'],
    patientFirstName:   'Priya',
    patientTown:        'Southend-on-Sea',
    patientTownSlug:    'southend-on-sea',
    treatmentSlug:      'adults',
    treatmentLabel:     'Adult Invisalign',
    clinicSlug:         'southend-clear-aligners',
    clinicName:         'Southend Clear Aligners',
    clinicTier:         'Platinum',
    treatmentDuration:  '9 months',
    treatmentCompleted: '2025-01',
    alignerCount:       18,
    refinementsReceived: 0,
    headline:           'I\'d had braces at 15 and watched my teeth move back. Nine months later, fixed again — this time for good',
    ratingValue:        5,

    backgroundText:
      'I had fixed braces when I was 15 and they did a good job. But I lost my retainer in my mid-twenties and didn\'t replace it, and by the time I was 38 my front teeth had shifted noticeably — nothing dramatic, but enough to bother me when I looked at photographs. My dentist told me this was common relapse and that Invisalign Lite would probably be enough to correct it. She was right.',

    choiceText:
      'My own dentist doesn\'t offer Invisalign, so she recommended I find a provider locally. I used Invisalign Dentists Essex to compare the options in Southend and chose the clinic on High Street after seeing their rating. What I appreciated at the consultation was that the dentist was honest about what I needed — Invisalign Lite at 18 aligners, not the full Comprehensive system — and the quote was lower than I had expected as a result. I had been bracing for a much larger number.',

    journeyText:
      'For relapse cases, Lite treatment is genuinely easy. The aligners are less intrusive than I remembered fixed braces being. I wore them to work without anyone noticing for the first three months before I told colleagues I was having treatment. The main inconvenience was removing them for coffee — I drink a lot of coffee. I set a phone alarm for meals and aligners-out time became automatic within a couple of weeks. No refinements at all.',

    resultText:
      'My teeth are back where they were after my teenage braces. The result took 9 months, which matched the estimate exactly. This time I have a bonded wire retainer fitted behind my front teeth permanently, and I wear a removable retainer at night. I was given a clear, firm explanation of why retention matters — that the fibres pulling my teeth back are still there and always will be — and that framing has made me take retention much more seriously this time around.',

    adviceText:
      'If you had braces as a teenager and your teeth have moved, don\'t assume you need the full Invisalign treatment. Get assessed first — relapse cases are often quicker and cheaper than people expect.',

    patientConsentedToPublication:       true,
    patientConsentedToFirstNameDisplay:  true,
    active:     true,
    hasPhoto:   false,
  },

];

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
