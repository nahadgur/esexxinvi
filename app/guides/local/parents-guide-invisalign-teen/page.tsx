import type { Metadata } from 'next';
import TeenGuideClient from './TeenGuideClient';

export const metadata: Metadata = {
  title: 'The Essex Parent\'s Guide to Invisalign Teen vs. NHS Braces',
  description: 'NHS orthodontic waiting lists of 18–24 months, IOTN criteria that exclude many teens, and how Invisalign Teen works differently from adult aligners — including compliance indicators and free replacements.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/local/parents-guide-invisalign-teen/' },
  openGraph: {
    title: 'The Essex Parent\'s Guide to Invisalign Teen vs. NHS Braces',
    description: 'Everything Essex parents need to know before deciding between NHS braces and private Invisalign Teen.',
    url: 'https://www.invisaligndentistsessex.uk/guides/local/parents-guide-invisalign-teen/',
  },
};

export default function Page() {
  return <TeenGuideClient />;
}
