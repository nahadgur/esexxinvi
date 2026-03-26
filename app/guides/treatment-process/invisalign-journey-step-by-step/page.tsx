import type { Metadata } from 'next';
import JourneyClient from './JourneyClient';

export const metadata: Metadata = {
  title: 'The Invisalign Journey: Step-by-Step from Scan to Smile',
  description: 'A clear, step-by-step guide to the Invisalign process — iTero scan, ClinCheck preview, aligner fitting, the 22-hour rule, check-ups, refinements, and retention. What Essex patients actually experience.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-journey-step-by-step/' },
  openGraph: {
    title: 'The Invisalign Journey: Step-by-Step from Scan to Smile',
    description: 'Five clear steps — from your first 3D scan to your final retainer. No jargon.',
    url: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-journey-step-by-step/',
  },
};

export default function Page() {
  return <JourneyClient />;
}
