import type { Metadata } from 'next';
import InsuranceClient from './InsuranceClient';

export const metadata: Metadata = {
  title: 'Does UK Private Health Insurance Cover Invisalign? (2026 Guide)',
  description: 'Bupa, AXA, and Aviva classify Invisalign as cosmetic — so standard policies won\'t cover it. This guide explains the exceptions, what Denplan actually offers, and the most cost-effective alternative.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/costs/private-health-insurance-cover/' },
  openGraph: {
    title: 'Does UK Private Health Insurance Cover Invisalign?',
    description: 'The honest answer — plus what premium dental add-ons actually pay, and what actually works instead.',
    url: 'https://www.invisaligndentistsessex.uk/guides/costs/private-health-insurance-cover/',
  },
};

export default function Page() {
  return <InsuranceClient />;
}
