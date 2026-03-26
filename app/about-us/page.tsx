// app/about-us/page.tsx
// Server component — exports metadata, renders the client component.
// Metadata cannot be exported from 'use client' files in Next.js 14.

import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: 'About Us | Invisalign Dentists Essex — Independent Consumer Directory',
  description: 'Learn about Invisalign Dentists Essex — an independent consumer directory helping Essex residents find and compare verified Platinum and Diamond Invisalign providers across all 111 Essex towns.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/about-us/' },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
