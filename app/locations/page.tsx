import type { Metadata } from 'next';
import LocationsClient from './LocationsClient';

export const metadata: Metadata = {
  title: 'Invisalign Locations Across Essex | Find a Provider Near You',
  description: 'Find Invisalign providers in your Essex town. We cover Chelmsford, Southend, Colchester, Basildon, Brentwood, Harlow, Braintree and 50+ Essex locations.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/locations/' },
  openGraph: {
    title: 'Invisalign Locations Across Essex | Find a Provider Near You',
    description: 'Find Invisalign providers in your Essex town. We cover 50+ Essex locations.',
    url: 'https://www.invisaligndentistsessex.uk/locations/',
  },
};

export default function Page() {
  return <LocationsClient />;
}
