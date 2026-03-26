import type { Metadata } from 'next';
import BrandComparisonClient from './BrandComparisonClient';

export const metadata: Metadata = {
  title: 'Invisalign vs. Spark vs. ClearCorrect: Which Aligner Brand Is Best?',
  description: 'Honest brand-by-brand comparison of the three main dentist-led clear aligner systems — Invisalign, Spark, and ClearCorrect. Why the dentist\'s experience matters more than the brand.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/' },
  openGraph: {
    title: 'Invisalign vs. Spark vs. ClearCorrect: Which Is Best?',
    description: 'The material, the data, the clinical range — and why the plastic brand matters less than the dentist using it.',
    url: 'https://www.invisaligndentistsessex.uk/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/',
  },
};

export default function Page() {
  return <BrandComparisonClient />;
}
