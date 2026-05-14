import { LOCATIONS } from './locations';
import { services } from './services';

export interface InternalLink {
  href: string;
  label: string;
}

const treatmentLinks: InternalLink[] = services.map(s => ({
  href: `/treatments/${s.slug}/`,
  label: s.title,
}));

const locationLinks: InternalLink[] = LOCATIONS.map(l => ({
  href: `/locations/${l.slug}/`,
  label: `Invisalign in ${l.name}`,
}));

const policyLinks: InternalLink[] = [
  { href: '/how-we-vet-providers/', label: 'How we vet providers' },
  { href: '/editorial-policy/', label: 'Editorial policy' },
  { href: '/about-us/', label: 'About us' },
  { href: '/advisory-board/', label: 'Advisory board' },
];

const guideLinks: InternalLink[] = [
  { href: '/guides/costs/true-cost-invisalign-uk/', label: 'True cost of Invisalign in the UK' },
  { href: '/guides/costs/invisalign-nhs-essex/', label: 'Invisalign on the NHS in Essex' },
  { href: '/guides/costs/financing-payment-plans/', label: 'Financing and payment plans' },
  { href: '/guides/comparisons/invisalign-vs-traditional-braces/', label: 'Invisalign vs fixed braces' },
  { href: '/guides/comparisons/dangers-of-at-home-mail-order-aligners/', label: 'Why mail-order aligners are risky' },
];

export const internalLinkMap = {
  treatments: treatmentLinks,
  locations: locationLinks,
  policies: policyLinks,
  guides: guideLinks,
};

export function relatedTreatments(currentSlug: string): InternalLink[] {
  return treatmentLinks.filter(l => !l.href.includes(`/${currentSlug}/`)).slice(0, 5);
}

export function relatedLocations(currentSlug: string, limit = 6): InternalLink[] {
  return locationLinks.filter(l => !l.href.includes(`/${currentSlug}/`)).slice(0, limit);
}
