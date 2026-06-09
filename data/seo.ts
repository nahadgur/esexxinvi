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
  { href: '/guides/invisalign-cost-essex/', label: 'Invisalign cost in Essex' },
  { href: '/blog/invisalign-nhs-essex/', label: 'Invisalign on the NHS in Essex' },
  { href: '/blog/financing-payment-plans/', label: 'Finance and payment plans' },
  { href: '/guides/invisalign-vs-braces/', label: 'Invisalign vs braces' },
  { href: '/blog/dangers-of-at-home-mail-order-aligners/', label: 'Why mail-order aligners are risky' },
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
