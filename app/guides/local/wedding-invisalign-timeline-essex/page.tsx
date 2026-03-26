import type { Metadata } from 'next';
import WeddingTimelineClient from './WeddingTimelineClient';

export const metadata: Metadata = {
  title: 'Getting Married in Essex? Your Pre-Wedding Invisalign Timeline',
  description: 'How much time you need for Invisalign before your Essex wedding — 18 months for Comprehensive, 9 months for Lite, 3 months for Express. Plus what to do if treatment isn\'t finished by the big day.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/local/wedding-invisalign-timeline-essex/' },
  openGraph: {
    title: 'Getting Married in Essex? Your Pre-Wedding Invisalign Timeline',
    description: 'A structured month-by-month guide to getting your smile wedding-ready — from Invisalign Comprehensive down to Express for last-minute corrections.',
    url: 'https://www.invisaligndentistsessex.uk/guides/local/wedding-invisalign-timeline-essex/',
  },
};

export default function Page() {
  return <WeddingTimelineClient />;
}
