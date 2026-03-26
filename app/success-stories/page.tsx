// app/success-stories/page.tsx
import type { Metadata } from 'next';
import SuccessStoriesClient from './SuccessStoriesClient';

export const metadata: Metadata = {
  title: 'Patient Success Stories | Real Invisalign Journeys in Essex',
  description: 'Real patient experiences from across Essex. Every story is verified, consented, and collected directly from patients who completed Invisalign treatment at a listed clinic.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/success-stories/' },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}
