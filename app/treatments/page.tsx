import type { Metadata } from 'next';
import TreatmentsClient from './TreatmentsClient';

export const metadata: Metadata = {
  title: 'Invisalign Treatments in Essex | Full, Lite, Teen & More',
  description: 'Compare all Invisalign treatment types available from Essex providers — Full, Lite, Teen, Express, and Invisalign with whitening. Find the right option for your case.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/treatments/' },
  openGraph: {
    title: 'Invisalign Treatments in Essex | Full, Lite, Teen & More',
    description: 'Compare all Invisalign treatment types available from Essex providers.',
    url: 'https://www.invisaligndentistsessex.uk/treatments/',
  },
};

export default function Page() {
  return <TreatmentsClient />;
}
