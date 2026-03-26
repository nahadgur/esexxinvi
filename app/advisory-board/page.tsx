// app/advisory-board/page.tsx — server component with metadata
import type { Metadata } from 'next';
import AdvisoryBoardClient from './AdvisoryBoardClient';

export const metadata: Metadata = {
  title: 'Medical Advisory Board | Invisalign Dentists Essex',
  description: 'Meet the GDC-registered dentists who review all clinical content on Invisalign Dentists Essex. Full credentials, GDC numbers, and practice details for independent verification.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/advisory-board/' },
};

export default function AdvisoryBoardPage() {
  return <AdvisoryBoardClient />;
}
