import type { Metadata } from 'next';
import CommuterGuideClient from './CommuterGuideClient';

export const metadata: Metadata = {
  title: 'The Essex Commuter\'s Guide to Invisalign: Fitting a New Smile Into Your Schedule',
  description: 'How Essex commuters on Greater Anglia and c2c lines can fit Invisalign around a London working week — evening clinics, Saturday appointments, the 22-hour rule vs the morning coffee problem.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/local/essex-commuter-guide-invisalign/' },
  openGraph: {
    title: 'The Essex Commuter\'s Guide to Invisalign',
    description: 'Six-to-eight-week check-ups, evening clinics in Chelmsford and Harlow, and how to manage the aligner rules on the 07:14 to Liverpool Street.',
    url: 'https://www.invisaligndentistsessex.uk/guides/local/essex-commuter-guide-invisalign/',
  },
};

export default function Page() {
  return <CommuterGuideClient />;
}
