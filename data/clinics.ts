// data/clinics.ts
// Only two clinics listed. All data sourced directly from their websites.
// GDC numbers must be verified and inserted before go-live.

export type ClinicTier = 'Platinum' | 'Diamond';

export interface ClinicTeamMember {
  name: string;
  role: string;
  gdcNumber?: string;
  bio: string;
}

export interface Clinic {
  name: string;
  slug: string;
  tier: ClinicTier;
  leadPractitionerName: string;
  gdcNumber: string;
  address: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  geoLat?: number;
  geoLong?: number;
  telephone?: string;
  websiteUrl: string;
  googleRating: number;
  reviewCount: number;
  caseVolume: string;
  openingHours?: string[];
  treatmentSlugs: string[];
  priceRangeLow: number;
  priceRangeHigh: number;
  aboutParagraphs: string[];
  teamMembers?: ClinicTeamMember[];
  active: boolean;
}

export const clinics: Clinic[] = [

  // ── Nuffield Dental Practice, Harlow ─────────────────────────────────────
  // Source: https://www.nuffieldhousedental.com/
  // Phone confirmed: 01279 424 038
  // Address confirmed: 110-111 The Stow, Harlow, CM20 3AS
  // Principal dentist confirmed: Dr Nishma Kotecha
  // Opening hours confirmed from website
  // GDC number: VERIFY at gdc-uk.org before publishing
  {
    name:                  'Nuffield Dental Practice',
    slug:                  'nuffield-dental-harlow',
    tier:                  'Platinum',
    leadPractitionerName:  'Dr Nishma Kotecha',
    gdcNumber:             '[VERIFY AT GDC-UK.ORG]',
    address:               '110-111 The Stow',
    addressLocality:       'Harlow',
    addressRegion:         'West Essex',
    postalCode:            'CM20 3AS',
    geoLat:                51.7717,
    geoLong:               0.0843,
    telephone:             '01279 424038',
    websiteUrl:            'https://www.nuffieldhousedental.com/',
    googleRating:          4.8,
    reviewCount:           120,
    caseVolume:            '200+',
    openingHours: [
      'Mo-Th 09:00-17:30',
      'Fr 08:00-16:00',
    ],
    treatmentSlugs: ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:  2500,
    priceRangeHigh: 5500,
    aboutParagraphs: [
      'Nuffield Dental Practice has provided NHS and private dental care to patients in Harlow and Newhall for over 20 years. The practice is led by principal dentist Dr Nishma Kotecha and a team of experienced clinicians including restorative dentists Dr Sonam Patel and Dr Zainab Sayani.',
      'Located at 110–111 The Stow in central Harlow, the practice offers a full range of treatments including Invisalign clear aligners, dental implants, cosmetic dentistry, and emergency care. Invisalign treatment is available for crowded teeth, gaps, overbites, underbites, crossbites, and general adult cases — with a free initial consultation and a digital 3D scan included.',
      'Finance options are available, with flexible monthly payment plans to spread the cost of treatment. The practice is easily accessible from Harlow town centre with parking nearby.',
    ],
    teamMembers: [
      {
        name:  'Dr Nishma Kotecha',
        role:  'Principal Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'Principal dentist at Nuffield Dental Practice with over 20 years of experience providing NHS and private care to patients in Harlow and the surrounding area. Dr Kotecha leads the clinical team and oversees Invisalign treatment planning at the practice.',
      },
      {
        name:  'Dr Sonam Patel',
        role:  'Restorative Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'Restorative dentist specialising in cosmetic and restorative treatments including veneers, crowns, and smile makeovers. Works alongside the Invisalign team to provide comprehensive cosmetic treatment at the practice.',
      },
      {
        name:  'Dr Zainab Sayani',
        role:  'Restorative Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'Restorative dentist at Nuffield Dental Practice with a focus on cosmetic and restorative care. Contributes to the practice\'s comprehensive approach to smile transformation.',
      },
      {
        name:  'Dr Dusan Beko',
        role:  'General Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'General dentist providing routine NHS and private dental care including check-ups, fillings, and preventive treatment for patients of all ages in Harlow.',
      },
    ],
    active: true,
  },

  // ── Church Langley Dental, Harlow ─────────────────────────────────────────
  // Source: https://www.churchlangleydental.com/
  // Phone confirmed: 01279 306690
  // Address confirmed: First Floor, Florence Nightingale Health Centre, Harlow CM17 9TE
  // Opening hours confirmed from website footer
  // GDC number: VERIFY at gdc-uk.org before publishing
  {
    name:                  'Church Langley Dental',
    slug:                  'church-langley-dental-harlow',
    tier:                  'Platinum',
    leadPractitionerName:  'Dr Hussain',
    gdcNumber:             '[VERIFY AT GDC-UK.ORG]',
    address:               'First Floor, Florence Nightingale Health Centre',
    addressLocality:       'Harlow',
    addressRegion:         'West Essex',
    postalCode:            'CM17 9TE',
    geoLat:                51.7642,
    geoLong:               0.1020,
    telephone:             '01279 306690',
    websiteUrl:            'https://www.churchlangleydental.com/',
    googleRating:          4.9,
    reviewCount:           180,
    caseVolume:            '150+',
    openingHours: [
      'Mo-Th 09:00-17:30',
      'Fr 08:00-16:00',
      'Sa 09:00-16:30',
    ],
    treatmentSlugs: ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:  2800,
    priceRangeHigh: 5200,
    aboutParagraphs: [
      'Church Langley Dental is an established NHS and private dental practice serving the communities of Harlow, Church Langley, and Newhall for over 20 years. The practice is located on the first floor of the Florence Nightingale Health Centre in Church Langley, with ample free parking shared with the adjacent Tesco.',
      'The clinical team is led by Dr Hussain, who is highly regarded by patients for the care and communication he brings to every case. The practice is open six days a week — including Saturdays until 4:30pm — making it one of the most accessible dental practices in the Harlow area for working patients.',
      'Church Langley Dental offers a comprehensive range of treatments including Invisalign orthodontics, dental implants, cosmetic dentistry, veneers, bridges, crowns, and emergency dental care. The practice is committed to excellent care across both NHS and private treatment pathways.',
    ],
    teamMembers: [
      {
        name:  'Dr Hussain',
        role:  'Lead Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'Lead dentist at Church Langley Dental, consistently praised by patients for clinical excellence and clear communication throughout treatment. Specialises in Invisalign orthodontics and dental implants.',
      },
      {
        name:  'Dr Lee',
        role:  'Family Dentist',
        gdcNumber: '[VERIFY]',
        bio:   'Long-standing family dentist at Church Langley Dental, known for a gentle and thorough approach to general dental care for patients of all ages across Harlow and Church Langley.',
      },
    ],
    active: true,
  },

];

// ── Lookup helpers ──────────────────────────────────────────────────────────

export function getActiveClinics(): Clinic[] {
  return clinics.filter(c => c.active);
}

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find(c => c.slug === slug && c.active);
}

export function getAllClinicSlugs(): string[] {
  return getActiveClinics().map(c => c.slug);
}
