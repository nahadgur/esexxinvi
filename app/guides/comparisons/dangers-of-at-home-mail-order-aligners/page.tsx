import type { Metadata } from 'next';
import MailOrderWarningClient from './MailOrderWarningClient';

export const metadata: Metadata = {
  title: 'The Hidden Dangers of At-Home and Mail-Order Clear Aligners',
  description: 'Why mail-order aligners like SmileDirectClub are dangerous — missing dental checks, DIY impressions vs 3D scans, no attachments, root damage risks, and what to do if you were left stranded.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/guides/comparisons/dangers-of-at-home-mail-order-aligners/' },
  openGraph: {
    title: 'The Hidden Dangers of Mail-Order Clear Aligners',
    description: 'Moving teeth without X-rays, gum health checks, or a dentist present is not a cost saving — it is a risk to your long-term dental health.',
    url: 'https://www.invisaligndentistsessex.uk/guides/comparisons/dangers-of-at-home-mail-order-aligners/',
  },
};

export default function Page() {
  return <MailOrderWarningClient />;
}
