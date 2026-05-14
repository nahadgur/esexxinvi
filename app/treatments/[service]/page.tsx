import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceBySlug, services } from '@/data/services';
import { siteConfig, FAQS_SERVICES } from '@/data/site';
import { getReviewerForTreatment } from '@/data/advisory/board-members';
import { MedicallyReviewedBy } from '@/components/trust/MedicallyReviewedBy';
import { buildServiceSchemaGraph } from '@/lib/schema';
import TreatmentPageClient from './PageClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map(service => ({ service }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  const canonical = `${siteConfig.url}/treatments/${params.service}/`;
  return {
    title: `${service.title} in Essex | Verified Platinum providers`,
    description: `Find verified Platinum-tier Invisalign providers for ${service.title.toLowerCase()} across Essex. Free consultation, free 3D scan, fixed pricing.`,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} in Essex`,
      description: service.description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_GB',
    },
  };
}

export default function TreatmentPage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const reviewer = getReviewerForTreatment(params.service);
  const reviewedAt = siteConfig.editorial.lastReviewedAt;

  const schemas = buildServiceSchemaGraph(service, [...service.faqs, ...FAQS_SERVICES]);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {reviewer && (
        <MedicallyReviewedBy reviewer={reviewer} reviewedDate={reviewedAt} />
      )}
      <TreatmentPageClient params={params} />
    </>
  );
}
