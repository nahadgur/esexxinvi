import type { Metadata } from 'next';
import ConsultationChecklistClient from './ConsultationChecklistClient';

export const metadata: Metadata = {
  title: 'The Top 7 Questions to Ask During Your Essex Invisalign Consultation',
  description: 'The exact questions to ask at your free Invisalign consultation — provider tier, attachments, retainer costs, refinement policy, and how to spot a clinic that won\'t surprise you with hidden fees.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/local/top-questions-invisalign-consultation/' },
  openGraph: {
    title: 'The Top 7 Questions to Ask at Your Invisalign Consultation',
    description: 'A patient advocate\'s checklist — what to ask before you commit to any Essex Invisalign provider.',
    url: 'https://www.invisaligndentistsessex.uk/guides/local/top-questions-invisalign-consultation/',
  },
};

export default function Page() {
  return <ConsultationChecklistClient />;
}
