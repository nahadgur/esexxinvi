import type { Metadata } from 'next';
import TimelineClient from './TimelineClient';

export const metadata: Metadata = {
  title: 'How Long Does Invisalign Actually Take? (Real Timelines for 2026)',
  description: 'Realistic Invisalign timelines by treatment tier — Express 3–6 months, Lite 6–9 months, Comprehensive 12–24 months. What delays progress and how to find out your exact timeline.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/how-long-does-invisalign-take/' },
  openGraph: {
    title: 'How Long Does Invisalign Take? Real Timelines Explained',
    description: 'Timeline breakdown by case complexity, factors that delay progress, and how to get your exact treatment duration in Essex.',
    url: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/how-long-does-invisalign-take/',
  },
};

export default function Page() {
  return <TimelineClient />;
}
