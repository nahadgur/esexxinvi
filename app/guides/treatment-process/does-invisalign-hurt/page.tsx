import type { Metadata } from 'next';
import HurtClient from './HurtClient';

export const metadata: Metadata = {
  title: 'Does Invisalign Hurt? What to Expect and How to Manage Discomfort',
  description: 'Honest guide to Invisalign discomfort — the first 48 hours, common sensations during treatment, and 5 practical tips to manage pressure. No sugarcoating.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/does-invisalign-hurt/' },
  openGraph: {
    title: 'Does Invisalign Hurt? What to Expect and How to Manage Discomfort',
    description: 'The honest answer — what the pressure feels like, when it peaks, and how to get through the first 48 hours of a new tray.',
    url: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/does-invisalign-hurt/',
  },
};

export default function Page() {
  return <HurtClient />;
}
