import type { Metadata } from 'next';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: 'Invisalign Guides | Costs, Treatment Process & Comparisons',
  description: 'Comprehensive Invisalign guides for Essex patients. Covers costs, financing, NHS eligibility, treatment process, comparisons with braces, and more.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/' },
  openGraph: {
    title: 'Invisalign Guides | Costs, Treatment Process & Comparisons',
    description: 'Comprehensive Invisalign guides for Essex patients.',
    url: 'https://www.invisaligndentistsessex.uk/guides/',
  },
};

export default function Page() {
  return <GuidesClient />;
}
