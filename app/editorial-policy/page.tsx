// app/editorial-policy/page.tsx — server component with metadata
import type { Metadata } from 'next';
import EditorialPolicyClient from './EditorialPolicyClient';

export const metadata: Metadata = {
  title: 'Editorial Policy | How We Create and Review Medical Content',
  description: 'Our editorial policy for treatment information pages. All clinical content on Invisalign Dentists Essex is written by dental-trained writers and reviewed by a registered GDC dentist.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/editorial-policy/' },
};

export default function EditorialPolicyPage() {
  return <EditorialPolicyClient />;
}
