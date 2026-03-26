// app/treatments/[service]/page.tsx
// Shows exactly how MedicallyReviewedBy integrates into the treatment hub pages.
// This is the reference implementation — adapt for your existing treatment page structure.

import type { Metadata } from 'next';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { getReviewerForTreatment } from '@/data/advisory/board-members';
import { MedicallyReviewedBy } from '@/components/trust/MedicallyReviewedBy';
import TreatmentPageClient from './PageClient';

interface PageParams {
  params: { service: string };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map(service => ({ service }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const service = getServiceBySlug(params.service);
  if (!service) return {};
  const title       = `${service.title} in Essex | Platinum & Diamond Invisalign Providers`;
  const description = `Find verified Platinum and Diamond Invisalign providers for ${service.title.toLowerCase()} across all Essex towns. Free consultation, fixed pricing — compare clinics and book online.`;
  const canonical   = `${siteConfig.url}/treatments/${params.service}/`;
  return {
    title,
    description,
    alternates: { canonical },
  };
}

export default function TreatmentPage({ params }: PageParams) {
  const service  = getServiceBySlug(params.service);
  const reviewer = getReviewerForTreatment(params.service);

  // Review dates are stored per-treatment in a config file.
  // Replace these with real dates from your content management.
  const reviewDates: Record<string, { reviewed: string; updated?: string }> = {
    crowded:   { reviewed: '2025-01-15' },
    gaps:      { reviewed: '2025-01-15' },
    overbite:  { reviewed: '2025-01-15' },
    underbite: { reviewed: '2025-01-15' },
    crossbite: { reviewed: '2025-01-15' },
    adults:    { reviewed: '2025-01-15' },
  };
  const dates = reviewDates[params.service];

  return (
    <>
      {/* MedicallyReviewedBy sits immediately below the H1, above body copy.
          Only renders when an active reviewer is assigned to this treatment.
          Falls back gracefully (renders nothing) if no reviewer is onboarded yet. */}
      {reviewer && dates && (
        <MedicallyReviewedBy
          reviewer={reviewer}
          reviewedDate={dates.reviewed}
          updatedDate={dates.updated}
        />
      )}

      <TreatmentPageClient params={params} />
    </>
  );
}
