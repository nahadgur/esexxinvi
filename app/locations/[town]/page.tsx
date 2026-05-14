import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { buildLocationSchemaGraph } from '@/lib/schema';
import TownPageClient from './PageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ town: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { town: string };
}): Metadata {
  const loc = getCityBySlug(params.town);
  if (!loc) return {};

  const canonical = `${siteConfig.url}/locations/${loc.slug}/`;
  const title = `Invisalign in ${loc.name}, Essex | Verified ${loc.region} providers`;
  const description = `Match with verified Invisalign providers covering ${loc.name} (${loc.postcodeAreas.join(', ')}). Free initial consultation, transparent pricing, no inbound calls.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const loc = getCityBySlug(params.town);
  if (!loc) notFound();

  const schemas = buildLocationSchemaGraph(loc);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TownPageClient slug={loc.slug} />
    </>
  );
}
