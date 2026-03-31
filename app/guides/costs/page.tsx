import type { Metadata } from 'next';
import GuideCostsClient from './GuideCostsClient';

export const metadata: Metadata = {
  title: 'Invisalign Costs & Financing Guides | Invisalign Dentists Essex',
  description: 'Everything Essex patients need to know about Invisalign pricing, 0% finance, NHS eligibility, and private insurance. Honest, up-to-date cost guides.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/costs/' },
  openGraph: {
    title: 'Invisalign Costs & Financing Guides',
    description: 'Everything Essex patients need to know about Invisalign pricing, finance, and insurance.',
    url: 'https://www.invisaligndentistsessex.uk/guides/costs/',
  },
};

export default function Page() {
  return <GuideCostsClient />;
}
