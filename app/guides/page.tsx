import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { GUIDE_HUBS } from '@/data/guides';
import { buildOrganization, buildBreadcrumbList } from '@/lib/schema';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: 'Invisalign Guides for Essex | Cost, Process, Comparisons & More',
  description:
    'Ten in-depth Invisalign guides for Essex patients: cost, the treatment process, vs braces, living with aligners, comfort, teens, adults, suitability, the local picture, and choosing a provider.',
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: {
    title: 'Invisalign Guides for Essex',
    description: 'In-depth Invisalign guides for Essex patients.',
    url: `${siteConfig.url}/guides/`,
  },
};

export default function Page() {
  const schemas = [
    buildOrganization(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Guides' },
    ]),
  ];
  const hubs = GUIDE_HUBS.map(h => ({
    slug: h.slug,
    title: h.title,
    heroBadge: h.heroBadge,
    heroDirectAnswer: h.heroDirectAnswer,
  }));
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <GuidesClient hubs={hubs} />
    </>
  );
}
