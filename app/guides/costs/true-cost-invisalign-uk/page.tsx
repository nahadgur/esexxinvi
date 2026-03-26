import type { Metadata } from 'next';
import TrueCostClient from './TrueCostClient';

export const metadata: Metadata = {
  title: 'The True Cost of Invisalign in the UK: 2026 Pricing Guide',
  description: 'Exact Invisalign prices in Essex broken down by treatment tier — Express from £1,500, Lite from £2,800, Comprehensive up to £5,800. What affects your final quote and hidden costs to watch.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/costs/true-cost-invisalign-uk/' },
  openGraph: {
    title: 'The True Cost of Invisalign in the UK: 2026 Pricing Guide',
    description: 'Essex price breakdown by tier, hidden costs explained, and why mail-order aligners are not worth it.',
    url: 'https://www.invisaligndentistsessex.uk/guides/costs/true-cost-invisalign-uk/',
  },
};

export default function Page() {
  return <TrueCostClient />;
}
