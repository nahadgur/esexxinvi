import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCitySlugs, getCityBySlug } from '@/data/locations';
import { getTownContent } from '@/data/content';
import { services } from '@/data/services';
import { buildTownHubSchema } from './schema';
import TownPageClient from './PageClient';

export function generateStaticParams() {
  return getAllCitySlugs().map(town => ({ town }));
}

export function generateMetadata({
  params,
}: {
  params: { town: string };
}): Metadata {
  const cityName = getCityBySlug(params.town);
  if (!cityName) return {};

  const canonical = `https://www.invisaligndentistsessex.uk/locations/${params.town}/`;

  return {
    title: `Invisalign Providers in ${cityName}, Essex | Invisalign Dentists Essex`,
    description: `Find verified Platinum and Diamond Invisalign providers in ${cityName}, Essex. Compare clinics, view ratings, and book a free consultation — no referral needed.`,
    alternates: { canonical },
    openGraph: {
      title: `Invisalign in ${cityName}, Essex`,
      description: `Verified Invisalign providers near ${cityName}. Compare costs, read reviews, book a free consultation.`,
      url: canonical,
    },
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const cityName = getCityBySlug(params.town);
  if (!cityName) notFound();

  const townData = getTownContent(params.town);

  const townHubSchema = buildTownHubSchema({
    townName: cityName,
    townSlug: params.town,
    townData,
    services: services.map(s => ({ slug: s.slug, title: s.title })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(townHubSchema) }}
      />
      <TownPageClient params={params} />
    </>
  );
}
