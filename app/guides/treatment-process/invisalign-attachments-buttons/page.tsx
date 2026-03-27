import type { Metadata } from 'next';
import AttachmentsClient from './AttachmentsClient';

export const metadata: Metadata = {
  title: 'What Are Invisalign Attachments (Buttons)? And Do You Need Them?',
  description: 'Invisalign attachments explained — what they are made of, why they\'re needed, whether you can avoid them, and how they\'re removed at the end of treatment without damaging enamel.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-attachments-buttons/' },
  openGraph: {
    title: 'What Are Invisalign Attachments? Everything Patients Need to Know',
    description: 'Small composite bumps that make complex tooth movements possible — and why most patients need at least a few.',
    url: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-attachments-buttons/',
  },
};

export default function Page() {
  return <AttachmentsClient />;
}
