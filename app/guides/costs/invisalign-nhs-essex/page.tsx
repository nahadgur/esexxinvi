// app/guides/costs/invisalign-nhs-essex/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import GuidePageClient from './GuidePageClient';

export const metadata: Metadata = {
  title: 'Can You Get Invisalign on the NHS in the UK? (2026 Guide)',
  description: 'Invisalign is almost never available on the NHS. This guide explains why, how NHS orthodontic funding actually works, and how Essex adults can access affordable private Invisalign from £50/month.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/costs/invisalign-nhs-essex/' },
  openGraph: {
    title: 'Can You Get Invisalign on the NHS? (2026 Essex Guide)',
    description: 'The honest answer — and how to access affordable private Invisalign across Essex.',
    url: 'https://www.invisaligndentistsessex.uk/guides/costs/invisalign-nhs-essex/',
  },
};

export default function Page() {
  return <GuidePageClient />;
}
