// app/how-we-vet-providers/page.tsx
import type { Metadata } from 'next';
import HowWeVetProvidersClient from './HowWeVetClient';

export const metadata: Metadata = {
  title: 'How We Vet Invisalign Providers | Our 5-Point Selection Criteria',
  description: 'Invisalign Dentists Essex is an independent consumer directory. Learn the strict 5-point criteria every provider must meet before we list them — GDC registration, tier, ratings, and more.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/how-we-vet-providers/' },
};

export default function HowWeVetProvidersPage() {
  return <HowWeVetProvidersClient />;
}
