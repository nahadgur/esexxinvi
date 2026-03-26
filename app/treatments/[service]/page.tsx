// app/treatments/[service]/page.tsx
// Replaces the previous thin wrapper. Now a full server component with
// metadata + MedicallyReviewedBy + the full warm-sage PageClient below.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { getReviewerForTreatment } from '@/data/advisory/board-members';
import { MedicallyReviewedBy } from '@/components/trust/MedicallyReviewedBy';
import TreatmentPageClient from './PageClient';

interface PageParams { params: { service: string } }

export function generateStaticParams() {
  return getAllServiceSlugs().map(service => ({ service }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  const canonical = `${siteConfig.url}/treatments/${params.service}/`;
  return {
    title: `${service.title} in Essex | Platinum & Diamond Invisalign Providers`,
    description: `Find verified Platinum and Diamond Invisalign providers for ${service.title.toLowerCase()} across all 111 Essex towns. Free consultation, free 3D scan, fixed pricing.`,
    alternates: { canonical },
    openGraph: { title: `${service.title} in Essex`, url: canonical, siteName: siteConfig.name },
  };
}

export default function TreatmentPage({ params }: PageParams) {
  const service  = getServiceBySlug(params.service);
  if (!service) notFound();

  const reviewer = getReviewerForTreatment(params.service);
  const reviewDates: Record<string, { reviewed: string }> = {
    crowded: { reviewed: '2025-01-15' }, gaps:     { reviewed: '2025-01-15' },
    overbite: { reviewed: '2025-01-15' }, underbite: { reviewed: '2025-01-15' },
    crossbite: { reviewed: '2025-01-15' }, adults:   { reviewed: '2025-01-15' },
  };
  const dates = reviewDates[params.service];

  return (
    <>
      {reviewer && dates && (
        <MedicallyReviewedBy reviewer={reviewer} reviewedDate={dates.reviewed} />
      )}
      <TreatmentPageClient params={params} />
    </>
  );
}
