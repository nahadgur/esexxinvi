// app/success-stories/[slug]/page.tsx
// Individual story page — /success-stories/[slug]/
// Full story + Review JSON-LD schema for rich result eligibility.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { getActiveStories, getStoryBySlug, getRelatedStories } from '@/data/stories/patient-stories';
import { PatientStoryCard } from '@/components/trust/PatientStoryCard';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface PageParams { params: { slug: string } }

export function generateStaticParams() {
  return getActiveStories().map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const story = getStoryBySlug(params.slug);
  if (!story) return {};
  const title       = `${story.headline} — ${story.treatmentLabel} in ${story.patientTown}`;
  const description =
    `${story.patientFirstName} from ${story.patientTown} shares their ${story.treatmentDuration} ` +
    `${story.treatmentLabel} journey at ${story.clinicName}. Verified patient experience.`;
  const canonical   = `${siteConfig.url}/success-stories/${story.slug}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: story.publishedDate,
    },
  };
}

export default function StoryPage({ params }: PageParams) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  const related = getRelatedStories(story, 2);
  const base    = siteConfig.url;

  // ── Review JSON-LD schema ─────────────────────────────────────────────────
  // Review schema for the clinic entity.
  // This makes individual story pages eligible for Review rich results.
  // The reviewed item is the CLINIC, not the directory or the treatment.
  const reviewSchema = {
    '@context':    'https://schema.org',
    '@type':       'Review',
    'name':        story.headline,
    'datePublished': story.publishedDate,
    'reviewRating': {
      '@type':       'Rating',
      'ratingValue': String(story.ratingValue),
      'bestRating':  '5',
      'worstRating': '1',
    },
    'author': {
      '@type': 'Person',
      'name':  story.patientFirstName,  // First name only — consent to display confirmed
    },
    'reviewBody':
      `${story.backgroundText} ${story.journeyText} ${story.resultText}`,
    'itemReviewed': {
      '@type': 'Dentist',
      '@id':   `${base}/clinics/${story.clinicSlug}/#dentist`,
      'name':  story.clinicName,
    },
    'publisher': {
      '@type': 'Organization',
      '@id':   `${base}/#organization`,
      'name':  'Invisalign Dentists Essex',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema, null, 2) }}
      />

      <main className="bg-white">

        {/* Back nav */}
        <div className="container-width pt-8 pb-4">
          <Link
            href="/success-stories/"
            className="inline-flex items-center gap-2 text-sm text-brand-700 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            All patient stories
          </Link>
        </div>

        {/* Story */}
        <section className="container-width max-w-2xl pb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            <Link href={`/treatments/${story.treatmentSlug}/`}
              className="text-xs bg-brand-50 border border-brand-100 text-brand-700 rounded-full px-3 py-1 hover:bg-brand-100 transition-colors">
              {story.treatmentLabel}
            </Link>
            <Link href={`/locations/${story.patientTownSlug}/`}
              className="text-xs bg-gray-100 border border-gray-200 text-gray-700 rounded-full px-3 py-1 hover:bg-gray-200 transition-colors">
              {story.patientTown}
            </Link>
          </div>

          <PatientStoryCard story={story} variant="full" />

          {/* Verification note */}
          <div className="mt-6 flex items-start gap-3 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <ShieldCheck className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <p>
              This story was collected by Invisalign Dentists Essex via{' '}
              {story.collectionMethod === 'FORM_SUBMISSION' && 'our patient story submission form'}
              {story.collectionMethod === 'GOOGLE_ATTRIBUTION' && 'a Google review, republished with the patient\'s written consent'}
              {story.collectionMethod === 'CLINIC_REFERRED' && 'a clinic referral — the story was written independently by the patient'}.{' '}
              Treatment completion at {story.clinicName} was verified directly with the clinic.
              Patient identity is known to us; first name and town only are displayed with the patient's explicit consent.{' '}
              <Link href="/editorial-policy/" className="text-brand-700 hover:underline">
                Read our editorial policy
              </Link>.
            </p>
          </div>
        </section>

        {/* Related stories */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50 py-12">
            <div className="container-width max-w-4xl">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-6">
                More patient stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map(s => (
                  <PatientStoryCard key={s.slug} story={s} variant="compact" />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  );
}
