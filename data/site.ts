export const siteConfig = {
  name: 'Invisalign Dentists Essex',
  shortName: 'Invisalign Essex',
  domain: 'invisaligndentistsessex.uk',
  url: 'https://www.invisaligndentistsessex.uk',
  description:
    'Independent matching service connecting Essex residents with verified Platinum-tier Invisalign providers. Free consultations, transparent pricing, no inbound calls.',
  tagline: 'Match with verified Essex Invisalign providers',
  locale: 'en-GB',
  countryCode: 'GB',
  serviceArea: 'Essex, England',
  ga4Id: 'G-HLB4W9H9DZ',
  indexNowKey: 'b6e2a39f8c1d4a1e9b7a2c4d5e6f7a89',
  contact: {
    privacyEmail: 'privacy@invisaligndentistsessex.uk',
    securityEmail: 'security@invisaligndentistsessex.uk',
    editorialEmail: 'editorial@invisaligndentistsessex.uk',
    leadDestinationEnvVar: 'LEAD_WEBHOOK_URL',
  },
  editorial: {
    lastReviewedAt: '2026-05-14',
    // Brand byline acronym (Invisalign Dentists Essex), used as the author on
    // articles and in schema. No invented individual, no credentials.
    authorName: 'IDE',
    authorUrl: '/about-us/',
    reviewerLine:
      'Reviewed by the Invisalign Dentists Essex editorial team. Sources: Align Technology UK clinical guidance, GDC published standards, NHS BSA orthodontic policy.',
  },
  matching: {
    networkScope:
      'We route enquiries only to UK-registered dentists who hold current Platinum or higher Invisalign provider status with Align Technology and who consent to receiving referrals from this site.',
    feeModel:
      'This site is free for patients. Listed dental practices pay a fixed monthly listing fee independent of treatment outcome, we are not paid per lead, per referral, or as a percentage of treatment.',
  },
};

export const FAQS_HOME = [
  {
    question: 'Is this service really free for patients?',
    answer:
      'Yes. There is no charge for matching, no charge for the introduction, and no obligation to proceed with treatment after the free consultation. Listed practices pay a fixed listing fee to be in the network, we are not paid per lead or per outcome, which keeps the matching honest.',
  },
  {
    question: 'How do you verify the dentists in your network?',
    answer:
      'Every listed practice provides their Align Technology provider tier confirmation, the lead clinician\'s GDC registration number, current professional indemnity, and CQC registration. We re-confirm provider tier annually because Invisalign tiers can move up or down based on rolling case volume.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'Within two working hours during business hours we email you a shortlist of one to three matching providers near your postcode, with each clinic\'s tier, address, lead clinician, telephone and treatment range. You contact the clinic directly to book a free consultation, we do not sit between you and the clinic.',
  },
  {
    question: 'Can I see the clinic\'s information before I commit?',
    answer:
      'Yes. Every clinic in the network has a full profile page on this site with address, opening hours, lead clinician, GDC number, telephone, treatment range, finance options and pricing band. The match email links you to those profile pages so you can review before contacting.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'How long does Invisalign treatment take?',
    answer:
      'Treatment ranges from 3 months (Invisalign Express, minor relapse) to 24 months (Comprehensive plans for complex bite work). Most adult cases sit between 6 and 18 months. Your provider confirms the exact timeline using ClinCheck after the initial 3D scan.',
  },
  {
    question: 'Will Invisalign affect my speech?',
    answer:
      'Most patients notice a slight lisp for the first three to seven days as the tongue adapts to the aligners. This typically resolves within a week of consistent wear. Reading aloud during the first week speeds the adjustment.',
  },
  {
    question: 'Can I see the predicted result before I commit?',
    answer:
      'Yes. ClinCheck is the digital treatment-planning software Align Technology supplies to every Invisalign provider. After your iTero scan, your dentist runs a 3D animation showing your teeth moving from the current position to the projected outcome. You see this before authorising aligner manufacture.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'How do you decide which provider to match me with?',
    answer:
      "Matching uses three inputs in order: distance from your postcode (we shortlist providers within a sensible drive time), case-type fit (Lite, Moderate or Comprehensive based on what you describe in the form), and current consultation availability (we only suggest providers who can see you within 14 working days).",
  },
  {
    question: 'What if there isn\'t a provider in my exact town?',
    answer:
      "We cover Essex with a 12-town anchor list and route patients to the nearest practice in the network. Most Essex postcodes are within a 25-minute drive of at least one Platinum provider. If your postcode is genuinely unserved, we tell you and recommend the nearest non-network provider on Align Technology\'s public directory.",
  },
  {
    question: 'Can I switch providers mid-treatment?',
    answer:
      'In principle yes, but in practice it adds cost (a second initial scan, possible re-modelling fee) and most clinics will require you to settle the original treatment plan. The cleaner solution is to choose carefully at the consultation stage. Bring written quotes from two clinics if you are torn, both will run a comparative ClinCheck for free.',
  },
];

export const TOP_CITIES = [
  'Chelmsford',
  'Southend-on-Sea',
  'Colchester',
  'Basildon',
  'Brentwood',
  'Harlow',
  'Billericay',
  'Witham',
  'Clacton-on-Sea',
  'Rayleigh',
  'Maldon',
  'Leigh-on-Sea',
];
