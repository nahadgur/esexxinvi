import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Invisalign Dentists Essex',
  description: 'Get in touch with Invisalign Dentists Essex. Questions about our provider matching service, clinic listings, or your Invisalign journey — we are here to help.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/contact/' },
  openGraph: {
    title: 'Contact Us | Invisalign Dentists Essex',
    description: 'Get in touch with Invisalign Dentists Essex.',
    url: 'https://www.invisaligndentistsessex.uk/contact/',
  },
};

export default function Page() {
  return <ContactClient />;
}
