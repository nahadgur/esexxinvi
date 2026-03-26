// data/clinics.ts
//
// Source of truth for all featured clinics.
// Each record here maps to:
//   - A clinic profile page at /clinics/[slug]/
//   - References in town content files (clinic1, clinic2 fields)
//   - The Dentist @id anchor used in all schema blocks
//
// ADDING A NEW CLINIC:
//   1. Add a record to the `clinics` array below
//   2. The slug must match what you used in the town content files
//   3. Add geo coordinates from Google Maps (right-click → "What's here?")
//   4. Opening hours format: "Mo-Fr 09:00-17:30" — schema.org OpeningHoursSpecification

export type ClinicTier = 'Platinum' | 'Diamond';

export interface ClinicTeamMember {
  name: string;
  role: string;
  gdcNumber?: string;
  bio: string;
}

export interface Clinic {
  // Identity
  name: string;
  slug: string;                      // URL slug — must be unique
  tier: ClinicTier;

  // Lead practitioner — the primary Invisalign provider
  leadPractitionerName: string;
  gdcNumber: string;                 // Lead practitioner GDC number

  // Location
  address: string;                   // Street address
  addressLocality: string;           // Town/city
  addressRegion: string;             // Essex region
  postalCode: string;

  // Geo — for schema GeoCoordinates
  geoLat?: number;
  geoLong?: number;

  // Contact
  telephone?: string;

  // Trust signals
  googleRating: number;
  reviewCount: number;
  caseVolume: string;                // e.g. "400+"

  // Opening hours — schema.org format
  openingHours?: string[];

  // Treatments this clinic offers — maps to /treatments/[slug]/
  treatmentSlugs: string[];

  // Pricing for this clinic (may differ from town-level range)
  priceRangeLow: number;
  priceRangeHigh: number;

  // About the practice — 2-4 paragraphs
  aboutParagraphs: string[];

  // Optional team members beyond the lead practitioner
  teamMembers?: ClinicTeamMember[];

  // Whether this clinic is currently active on the site
  active: boolean;
}

// ── Clinic records ──────────────────────────────────────────────────────────

export const clinics: Clinic[] = [

  {
    name:                   'Nuffield Dental',
    slug:                   'nuffield-dental-chelmsford',
    tier:                   'Diamond',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Chelmsford City Centre',
    addressLocality:        'Chelmsford',
    addressRegion:          'Essex Cities & Major Towns',
    postalCode:             '[Postcode]',
    geoLat:                 51.7356,
    geoLong:                0.4685,
    telephone:              '[Phone Number]',
    googleRating:           4.8,
    reviewCount:            287,
    caseVolume:             '1,000+',
    openingHours:           ['Mo-Fr 09:00-17:30', 'Sa 09:00-13:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          3200,
    priceRangeHigh:         5800,
    aboutParagraphs: [
      'Nuffield Dental in Chelmsford city centre is one of the most experienced Invisalign practices in Essex, holding Diamond provider status from Align Technology — the highest tier available, awarded to practices completing more than 300 Invisalign cases per year.',
      'The practice has been serving Chelmsford patients since [year] and has completed over 1,000 Invisalign cases across the full range of presentations, from mild crowding relapse to complex overbite correction requiring Precision Wing technology.',
      'Located in the heart of Chelmsford city centre, the practice offers free initial consultations with a full iTero 3D digital scan, providing a complete ClinCheck simulation of your proposed treatment before you commit to anything.',
    ],
    active: true,
  },

  {
    name:                   'Church Langley Dental',
    slug:                   'church-langley-dental-harlow',
    tier:                   'Platinum',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Church Langley',
    addressLocality:        'Harlow',
    addressRegion:          'West Essex',
    postalCode:             '[Postcode]',
    geoLat:                 51.7796,
    geoLong:                0.1020,
    telephone:              '[Phone Number]',
    googleRating:           4.9,
    reviewCount:            142,
    caseVolume:             '400+',
    openingHours:           ['Mo-Fr 08:30-17:30', 'Sa 09:00-13:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          2800,
    priceRangeHigh:         5200,
    aboutParagraphs: [
      'Church Langley Dental is a Platinum Invisalign provider based in the Church Langley area of Harlow, serving patients from across West Essex and the Lea Valley corridor. The practice holds Platinum status from Align Technology, completing more than 150 Invisalign cases per year across the full range of treatment types.',
      'Rated 4.9 stars from 142 patient reviews, Church Langley Dental is consistently one of the highest-rated Invisalign practices in the West Essex area. The practice offers free initial consultations with an iTero 3D scan and provides a full ClinCheck digital treatment plan before any commitment is required.',
      'The Church Langley location offers convenient parking and easy access from Harlow town centre, with the West Anglia Mainline providing a direct 38-minute service from London Liverpool Street for patients travelling from London.',
    ],
    active: true,
  },

  {
    name:                   'Southend Clear Aligners',
    slug:                   'southend-clear-aligners',
    tier:                   'Platinum',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Southend High Street',
    addressLocality:        'Southend-on-Sea',
    addressRegion:          'Essex Cities & Major Towns',
    postalCode:             '[Postcode]',
    geoLat:                 51.5372,
    geoLong:                0.7128,
    telephone:              '[Phone Number]',
    googleRating:           4.9,
    reviewCount:            203,
    caseVolume:             '500+',
    openingHours:           ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          2600,
    priceRangeHigh:         4900,
    aboutParagraphs: [
      'Southend Clear Aligners is a dedicated Invisalign Platinum provider on Southend High Street, serving South Essex patients from across the coastal community, the Victoria line corridor, and the wider Southend-on-Sea area.',
      'The practice has completed more than 500 Invisalign cases and holds a 4.9-star rating from over 200 verified patient reviews — consistently one of the highest-rated Invisalign practices in South Essex. Every treatment begins with a free consultation and full 3D iTero scan.',
      'The High Street location is accessible from Southend Central and Southend Victoria stations, with the c2c and Southend Victoria lines connecting patients from across South Essex within 30-60 minutes.',
    ],
    active: true,
  },

  {
    name:                   'Basildon Dental Studio',
    slug:                   'basildon-dental-studio',
    tier:                   'Platinum',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Basildon Town Centre',
    addressLocality:        'Basildon',
    addressRegion:          'Essex Cities & Major Towns',
    postalCode:             '[Postcode]',
    geoLat:                 51.5761,
    geoLong:                0.4884,
    telephone:              '[Phone Number]',
    googleRating:           4.6,
    reviewCount:            118,
    caseVolume:             '350+',
    openingHours:           ['Mo-Fr 09:00-17:30', 'Sa 09:00-13:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          2700,
    priceRangeHigh:         4800,
    aboutParagraphs: [
      'Basildon Dental Studio is a Platinum Invisalign provider in Basildon town centre, serving patients from across South Essex and the Basildon district. The practice holds Platinum status from Align Technology and has completed over 350 Invisalign cases.',
      'Located near the Eastgate Shopping Centre with excellent c2c rail and A127 road access, the practice offers free initial consultations with a full iTero 3D scan and competitive South Essex Platinum pricing with 0% finance from £50 per month.',
    ],
    active: true,
  },

  {
    name:                   'Colchester Orthodontic Centre',
    slug:                   'colchester-orthodontic-centre',
    tier:                   'Platinum',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Colchester Town Centre',
    addressLocality:        'Colchester',
    addressRegion:          'Essex Cities & Major Towns',
    postalCode:             '[Postcode]',
    geoLat:                 51.8960,
    geoLong:                0.8919,
    telephone:              '[Phone Number]',
    googleRating:           4.7,
    reviewCount:            186,
    caseVolume:             '600+',
    openingHours:           ['Mo-Fr 09:00-17:30', 'Sa 09:00-13:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          2900,
    priceRangeHigh:         5200,
    aboutParagraphs: [
      "Colchester Orthodontic Centre is a Platinum Invisalign provider in Britain's oldest recorded town, serving patients from across North Essex and the University of Essex community. The practice has completed over 600 Invisalign cases.",
      'Located near the Lion Walk Shopping Centre in Colchester town centre, the practice is accessible from Colchester North and Town stations on the Great Eastern Mainline, with London Liverpool Street in approximately 55 minutes.',
    ],
    active: true,
  },

  {
    name:                   'Brentwood Smile Clinic',
    slug:                   'brentwood-smile-clinic',
    tier:                   'Platinum',
    leadPractitionerName:   '[Lead Dentist Name]',
    gdcNumber:              '[GDC Number]',
    address:                'Brentwood High Street',
    addressLocality:        'Brentwood',
    addressRegion:          'Essex Cities & Major Towns',
    postalCode:             '[Postcode]',
    geoLat:                 51.6219,
    geoLong:                0.3049,
    telephone:              '[Phone Number]',
    googleRating:           4.8,
    reviewCount:            167,
    caseVolume:             '450+',
    openingHours:           ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
    treatmentSlugs:         ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults'],
    priceRangeLow:          3400,
    priceRangeHigh:         6200,
    aboutParagraphs: [
      'Brentwood Smile Clinic is a Platinum Invisalign provider on Brentwood High Street, serving one of the most affluent commuter communities in Essex. The practice has completed over 450 Invisalign cases and holds a 4.8-star rating from 167 patient reviews.',
      'Brentwood station is a 5-minute walk, connecting to London Liverpool Street in 25 minutes — one of the fastest commuter services in Essex. The practice offers premium clinical standards consistent with the expectations of the Brentwood professional community.',
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
