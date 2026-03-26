import type { Metadata } from 'next';
import FinancingClient from './FinancingClient';

export const metadata: Metadata = {
  title: 'How to Finance Your Smile: A Guide to Invisalign Payment Plans',
  description: 'How 0% dental finance works in the UK, what a credit check involves, monthly cost breakdowns, and how to find Essex clinics offering flexible Invisalign payment plans.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/costs/financing-payment-plans/' },
  openGraph: {
    title: 'Invisalign Payment Plans: A Complete Guide to Dental Finance',
    description: 'Over 60% of private dental patients use monthly finance. Here is exactly how it works.',
    url: 'https://www.invisaligndentistsessex.uk/guides/costs/financing-payment-plans/',
  },
};

export default function Page() {
  return <FinancingClient />;
}
