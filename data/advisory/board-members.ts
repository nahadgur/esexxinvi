// data/advisory/board-members.ts
//
// Advisory Board Member type definition and template bio structure.
//
// HOW TO USE
// ──────────────────────────────────────────────────────────────────────────
// 1. When you partner with a GDC-registered dentist for content review,
//    add their record to the `advisoryBoardMembers` array below.
// 2. Their data populates:
//      - The MedicallyReviewedBy component on /treatments/ pages
//      - The /advisory-board/ public listing page
//      - The MedicalWebPage JSON-LD schema (author field)
//      - The editorial policy page reviewer attribution
//
// MINIMUM DATA REQUIRED TO GO LIVE
// ──────────────────────────────────────────────────────────────────────────
// - name (full name as it appears on GDC register)
// - gdcNumber (verify at gdc-uk.org before publishing)
// - qualifications (e.g. "BDS (Hons), MFDS RCS")
// - practiceName + practiceLocality
// - reviewedTreatments (which treatment pages they are credited on)
// - bioShort (shown in MedicallyReviewedBy component)
// - bioFull (shown on /advisory-board/ page)
// - conflictDeclarationYear (must be current calendar year)
//
// OPTIONAL BUT RECOMMENDED
// ──────────────────────────────────────────────────────────────────────────
// - avatarUrl (professional headshot — significantly increases trust signal)
// - linkedInUrl (allows QRG raters to verify identity independently)
// - invisalignTier (confirms direct Invisalign clinical experience)

export type InvisalignTier = 'Diamond' | 'Platinum' | 'Gold' | 'None';

export interface AdvisoryBoardMember {
  // Unique identifier used in /advisory-board/#[slug] anchor links
  slug: string;

  // Full name exactly as registered with GDC
  name: string;

  // GDC registration number — displayed publicly and linked to GDC check tool
  gdcNumber: string;

  // Qualifications string — abbreviated e.g. "BDS, MFDS RCS (Eng)"
  qualifications: string;

  // Current or most recent practice details
  practiceName: string;
  practiceLocality: string;  // Town/city
  practiceRegion: string;    // e.g. "Essex"

  // Invisalign provider experience (if applicable)
  invisalignTier?: InvisalignTier;
  yearsInvisalignExperience?: number;

  // Short bio — 2 sentences max — shown in MedicallyReviewedBy component
  bioShort: string;

  // Full bio — 3–5 paragraphs — shown on /advisory-board/ page
  bioFull: string;

  // Public profile URLs — optional but strengthen E-E-A-T verification
  avatarUrl?: string;
  linkedInUrl?: string;
  practiceWebsiteUrl?: string;

  // Which treatment slugs this member is credited as reviewer on
  // Must match slugs in data/services.ts
  reviewedTreatments: string[];

  // Conflict of interest declaration — must be the current year
  conflictDeclarationYear: number;

  // Whether this member is currently active (shows on public pages)
  active: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// ADVISORY BOARD MEMBER TEMPLATE BIO
// ─────────────────────────────────────────────────────────────────────────────
// Fill this template when onboarding a new advisory board member.
// The bioFull field should read naturally and hit the following beats:
//
//   Paragraph 1 — Who they are professionally (qualifications, years qualified,
//                 type of practice). First sentence should open with their role
//                 not their name — Google QRG values expertise over identity.
//
//   Paragraph 2 — Their specific Invisalign experience. Case volume context,
//                 types of cases they have treated, any specialist areas.
//                 This is the most important paragraph for YMYL credibility.
//
//   Paragraph 3 — Their CPD and educational engagement. Courses attended,
//                 peer review involvement, journals read. Signals that their
//                 knowledge is current — critical for YMYL freshness.
//
//   Paragraph 4 — Their role on this advisory board specifically. What they
//                 review, what they check for, and their independence from
//                 any listed clinic.
//
//   Paragraph 5 — Optional. Personal practice philosophy or patient-care
//                 approach. Humanises the bio without undermining clinical tone.
//
// TEMPLATE (replace all [BRACKETS]):
// ─────────────────────────────────────────────────────────────────────────────
export const advisoryBioTemplate = `
[TITLE, e.g. "A general dental practitioner with over [X] years of clinical 
experience, [FIRST NAME] [LAST NAME] qualified from [DENTAL SCHOOL] in [YEAR] 
with a [QUALIFICATION, e.g. BDS with Honours]. [He/She/They] has practised at 
[PRACTICE NAME] in [LOCALITY], Essex since [YEAR], building a clinical 
caseload focused on [AREAS OF PRACTICE, e.g. restorative dentistry and 
orthodontics]."]

["[FIRST NAME] has been an Invisalign provider since [YEAR] and currently 
holds [TIER] status with Align Technology. Over [X] years of clear aligner 
practice, [he/she/they] has completed more than [CASE VOLUME, e.g. 200] 
Invisalign cases across the full range of presentations — including 
[CASE TYPES, e.g. complex crowding, overbite correction using Precision 
Wings, and adult cases involving existing restorations]. [He/She/They] brings 
particular experience in [SPECIALTY AREA, e.g. treating adult relapse patients 
who previously had fixed braces as teenagers]."]

["[FIRST NAME] maintains an active CPD programme that includes attendance at 
[EVENTS/COURSES, e.g. Align Technology's annual clinical education summit, 
the British Orthodontic Society conference], and peer review participation 
through [GROUP/NETWORK, e.g. a local study club of six GPs meeting quarterly]. 
[He/She/They] reads the [JOURNALS, e.g. British Dental Journal and Journal of 
Orthodontics] regularly and incorporates published clinical evidence into 
[his/her/their] practice review protocol."]

["In [his/her/their] role as a Medical Advisory Board member for Invisalign 
Dentists Essex, [FIRST NAME] reviews the clinical accuracy of all treatment 
information pages before publication. This includes verifying treatment 
duration statements against current clinical literature, checking that 
descriptions of Invisalign mechanics (including attachment protocols, 
Precision Wing technology, and ClinCheck staging) are accurate and current, 
and ensuring all content complies with GDC advertising guidance. [He/She/They] 
has no financial interest in any clinic listed on this directory and receives 
a fixed advisory fee from Invisalign Dentists Essex for [his/her/their] review 
work — which is independent of any individual listing decision."]
`;

// ─────────────────────────────────────────────────────────────────────────────
// ADVISORY BOARD MEMBERS ARRAY
// ─────────────────────────────────────────────────────────────────────────────
// Replace the placeholder below with real member data when onboarded.
// At least one active member is required before treatment pages can go live
// with the MedicallyReviewedBy component.

export const advisoryBoardMembers: AdvisoryBoardMember[] = [

  // ── PLACEHOLDER — replace with real member data ───────────────────────────
  // Delete this placeholder entry once a real board member is onboarded.
  {
    slug:                    'placeholder-reviewer',
    name:                    'Dr. [Full Name]',
    gdcNumber:               '[GDC Number]',
    qualifications:          'BDS, [Additional Qualifications]',
    practiceName:            '[Practice Name]',
    practiceLocality:        '[Town]',
    practiceRegion:          'Essex',
    invisalignTier:          'Platinum',
    yearsInvisalignExperience: 5,
    bioShort:
      'A GDC-registered general dental practitioner with [X] years of Invisalign ' +
      'experience and current Platinum provider status. Based in [Town], Essex.',
    bioFull:
      'Replace this with the full bio using the advisoryBioTemplate above. ' +
      'Minimum 3 paragraphs covering qualifications, Invisalign experience, ' +
      'CPD engagement, and their specific role as an advisory board member.',
    avatarUrl:               undefined,
    linkedInUrl:             undefined,
    practiceWebsiteUrl:      undefined,
    reviewedTreatments:      ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    conflictDeclarationYear: new Date().getFullYear(),
    active:                  false, // Set to true once a real member is onboarded
  },

];

// ── Lookup helpers ─────────────────────────────────────────────────────────
export function getActiveBoardMembers(): AdvisoryBoardMember[] {
  return advisoryBoardMembers.filter(m => m.active);
}

export function getBoardMemberBySlug(slug: string): AdvisoryBoardMember | undefined {
  return advisoryBoardMembers.find(m => m.slug === slug);
}

export function getReviewerForTreatment(treatmentSlug: string): AdvisoryBoardMember | undefined {
  return advisoryBoardMembers.find(
    m => m.active && m.reviewedTreatments.includes(treatmentSlug)
  );
}
