import type { Metadata } from 'next';
import ClinicsClient from './ClinicsClient';

export const metadata: Metadata = {
  title: 'Invisalign Clinics in Essex | Verified Diamond & Platinum Providers',
  description: 'Browse verified Diamond and Platinum Invisalign clinics across Essex. Every provider independently checked against Align Technology records before listing.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/clinics/' },
  openGraph: {
    title: 'Invisalign Clinics in Essex | Verified Diamond & Platinum Providers',
    description: 'Browse verified Diamond and Platinum Invisalign clinics across Essex.',
    url: 'https://www.invisaligndentistsessex.uk/clinics/',
  },
};

export default function Page() {
  return <ClinicsClient />;
}
