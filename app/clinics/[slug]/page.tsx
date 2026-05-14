import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { getClinicBySlug, getAllClinicSlugs } from '@/data/clinics';
import { buildClinicSchemaGraph } from '@/lib/schema';
import ClinicProfilePageClient from './PageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllClinicSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const clinic = getClinicBySlug(params.slug);
  if (!clinic) return {};

  const title = `${clinic.name} | Verified Invisalign ${clinic.tier} provider, ${clinic.addressLocality}`;
  const description =
    `${clinic.name} is a verified Invisalign ${clinic.tier}-tier provider in ${clinic.addressLocality}, ${clinic.addressRegion}. ` +
    `Book a free initial consultation through the Invisalign Dentists Essex matching service.`;
  const canonical = `${siteConfig.url}/clinics/${params.slug}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_GB',
    },
  };
}

export default function ClinicProfilePage({ params }: { params: { slug: string } }) {
  const clinic = getClinicBySlug(params.slug);
  if (!clinic) notFound();

  const schemas = buildClinicSchemaGraph(clinic);
  const waitDays = 7;

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ClinicProfilePageClient
        clinic={clinic}
        priceRangeLow={clinic.priceRangeLow}
        priceRangeHigh={clinic.priceRangeHigh}
        waitTimeDays={waitDays}
      />
    </>
  );
}
