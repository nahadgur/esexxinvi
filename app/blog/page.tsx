import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Invisalign Blog | Expert Advice for Essex Patients',
  description: 'Invisalign guides, treatment tips, cost breakdowns, and patient stories from the Invisalign Dentists Essex editorial team.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/blog/' },
  openGraph: {
    title: 'Invisalign Blog | Expert Advice for Essex Patients',
    description: 'Invisalign guides, treatment tips, cost breakdowns, and patient stories.',
    url: 'https://www.invisaligndentistsessex.uk/blog/',
  },
};

export default function Page() {
  return <BlogClient />;
}
