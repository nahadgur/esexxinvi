// Factual UK Invisalign pricing data (2024-2025 market rates)

export interface PricingTier {
  treatment: string;
  slug: string;
  priceFrom: number;
  priceTo: number;
  typicalDuration: string;
  alignerSets: string;
  description: string;
}

export const pricingTiers: PricingTier[] = [
  {
    treatment: 'Invisalign Comprehensive (Full)',
    slug: 'full',
    priceFrom: 3500,
    priceTo: 5500,
    typicalDuration: '12–18 months',
    alignerSets: 'Unlimited',
    description: 'Full treatment for complex cases including crowding, gaps, overbite, underbite, and crossbite correction. Includes unlimited refinement aligners.',
  },
  {
    treatment: 'Invisalign Lite',
    slug: 'lite',
    priceFrom: 2500,
    priceTo: 3800,
    typicalDuration: '6–12 months',
    alignerSets: 'Up to 14',
    description: 'Designed for mild to moderate alignment issues. Ideal for adults with minor crowding, small gaps, or orthodontic relapse after childhood braces.',
  },
  {
    treatment: 'Invisalign Express',
    slug: 'express',
    priceFrom: 1500,
    priceTo: 2500,
    typicalDuration: '3–6 months',
    alignerSets: 'Up to 7',
    description: 'For very minor corrections and cosmetic adjustments. Suitable for slight crowding or spacing in the front teeth only.',
  },
  {
    treatment: 'Invisalign Teen',
    slug: 'teen',
    priceFrom: 3000,
    priceTo: 5000,
    typicalDuration: '12–18 months',
    alignerSets: 'Unlimited',
    description: 'Full treatment designed for teenagers with compliance indicators and eruption tabs for growing teeth. Includes 6 free replacement aligners.',
  },
  {
    treatment: 'Invisalign First (Children)',
    slug: 'first',
    priceFrom: 2500,
    priceTo: 3500,
    typicalDuration: '6–18 months',
    alignerSets: 'Up to 26',
    description: 'Phase 1 interceptive treatment for children aged 6-10 with developing teeth. Addresses early alignment and jaw growth issues.',
  },
];

// Service-specific pricing mapping (which pricing tiers apply to each service)
export const servicePricingMap: Record<string, string[]> = {
  crowded: ['full', 'lite'],
  gaps: ['full', 'lite', 'express'],
  overbite: ['full'],
  underbite: ['full'],
  crossbite: ['full'],
  adults: ['full', 'lite', 'express'],
};

export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['full'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}

// What's included in treatment (universal)
export const treatmentIncludes = [
  'Initial consultation and 3D iTero scan',
  'ClinCheck digital treatment plan',
  'All aligner sets for your treatment',
  'Attachments and elastics if required',
  'Regular progress check-ups (every 6-8 weeks)',
  'Vivera retainers after treatment (first set)',
];

// Finance options
export const financeInfo = {
  available: true,
  interestFree: true,
  monthlyFrom: 50,
  spreadOver: '12–60 months',
  description: 'Most of our Platinum partners offer 0% interest finance, letting you spread the cost from as little as £50/month. Subject to status.',
};
