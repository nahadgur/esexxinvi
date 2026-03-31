import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Invisalign Essex | Find Top Invisalign Providers Across Essex',
  description: 'Find the top-rated Invisalign providers across Essex. Compare Platinum and Diamond tier dentists in Chelmsford, Southend, Colchester, Basildon, Brentwood and more.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/' },
  openGraph: {
    title: 'Invisalign Essex | Find Top Invisalign Providers Across Essex',
    description: 'Find the top-rated Invisalign providers across Essex. Compare Platinum and Diamond tier dentists in Chelmsford, Southend, Colchester, Basildon, Brentwood and more.',
    url: 'https://www.invisaligndentistsessex.uk/',
  },
};

export default function Page() {
  return <HomeClient />;
}
