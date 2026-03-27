import type { Metadata } from 'next';
import CeramicBracesClient from './CeramicBracesClient';

export const metadata: Metadata = {
  title: 'Ceramic Braces vs. Invisalign: Choosing the Best Discreet Orthodontics',
  description: 'Ceramic braces vs Invisalign compared — aesthetics, staining, effectiveness for complex rotations, cost, comfort, and which Essex patients should consider each option.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/comparisons/ceramic-braces-vs-invisalign/' },
  openGraph: {
    title: 'Ceramic Braces vs. Invisalign: Which Discreet Option Is Right for You?',
    description: 'For patients who want discretion but need fixed appliances — the honest comparison of ceramic braces and clear aligners.',
    url: 'https://www.invisaligndentistsessex.uk/guides/comparisons/ceramic-braces-vs-invisalign/',
  },
};

export default function Page() {
  return <CeramicBracesClient />;
}
