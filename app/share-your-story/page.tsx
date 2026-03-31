import type { Metadata } from 'next';
import ShareStoryClient from './ShareStoryClient';

export const metadata: Metadata = {
  title: 'Share Your Invisalign Story | Invisalign Dentists Essex',
  description: 'Had Invisalign treatment through an Essex provider? Share your experience and help other patients make an informed decision about their smile journey.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/share-your-story/' },
  openGraph: {
    title: 'Share Your Invisalign Story | Invisalign Dentists Essex',
    description: 'Share your Invisalign experience and help other Essex patients.',
    url: 'https://www.invisaligndentistsessex.uk/share-your-story/',
  },
};

export default function Page() {
  return <ShareStoryClient />;
}
