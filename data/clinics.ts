// data/clinics.ts
// Clinic directory data for Essex Invisalign Dentists.
// Each entry powers a /clinics/[slug]/ profile page.
// Add clinics here — sitemap-clinics.xml picks them up automatically.

export interface Clinic {
  slug: string;
  name: string;
  town: string;
  address: string;
  postcode: string;
  phone?: string;
  website?: string;
  tier: 'Platinum' | 'Diamond';
  specialisms?: string[];
}

export const clinics: Clinic[] = [];
