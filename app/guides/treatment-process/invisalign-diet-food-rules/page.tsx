import type { Metadata } from 'next';
import DietClient from './DietClient';

export const metadata: Metadata = {
  title: 'The Invisalign Diet: What You Can (and Can\'t) Eat or Drink',
  description: 'The rules for eating and drinking with Invisalign — the water-only rule, foods that damage attachments, managing 22-hour wear around meals, and the accidental weight loss effect.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-diet-food-rules/' },
  openGraph: {
    title: 'The Invisalign Diet: What You Can (and Can\'t) Eat or Drink',
    description: 'The complete practical guide to eating, drinking, and snacking during Invisalign treatment.',
    url: 'https://www.invisaligndentistsessex.uk/guides/treatment-process/invisalign-diet-food-rules/',
  },
};

export default function Page() {
  return <DietClient />;
}
