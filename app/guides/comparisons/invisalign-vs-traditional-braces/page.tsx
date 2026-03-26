import type { Metadata } from 'next';
import BracesComparisonClient from './BracesComparisonClient';

export const metadata: Metadata = {
  title: 'Invisalign vs. Traditional Braces: Which is Right for You in 2026?',
  description: 'Objective comparison of Invisalign clear aligners vs metal braces for UK adults — aesthetics, treatment speed, diet restrictions, cost, and which cases still need fixed braces.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/comparisons/invisalign-vs-traditional-braces/' },
  openGraph: {
    title: 'Invisalign vs. Traditional Braces: Which Is Right for You?',
    description: 'The honest, clinically grounded comparison — aesthetics, cost, hygiene, speed, and which cases each system handles best.',
    url: 'https://www.invisaligndentistsessex.uk/guides/comparisons/invisalign-vs-traditional-braces/',
  },
};

export default function Page() {
  return <BracesComparisonClient />;
}
