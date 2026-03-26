'use client';

// components/trust/PatientStoryCard.tsx
//
// Inline story card — embedded on:
//   - /locations/[town]/[service]/ pages (1 card, matched by town + treatment)
//   - /treatments/[service]/ pages (2–3 cards, matched by treatment)
//   - /clinics/[slug]/ pages (1–2 cards, matched by clinic)
//
// E-E-A-T FUNCTION:
//   Injects Experience signals directly onto pages that are otherwise
//   entirely informational or commercial. Google's Helpful Content
//   guidance explicitly rewards pages that demonstrate first-hand
//   experience with the topic — not just expertise about it.
//
// VISUAL DESIGN PRINCIPLES:
//   - Reads as editorial (article-style text blocks) not testimonial
//     (star ratings + one-line quotes). The distinction matters to
//     Quality Raters who are trained to spot thin testimonials.
//   - Verification badge and collection method are always visible.
//     Transparency increases credibility; hiding the sourcing method
//     would make stories look fabricated.
//   - Clinic name and tier are linked — drives internal linking to
//     clinic profile pages.
//   - Town name links to the town hub — drives internal linking
//     to the location pages.

import Link from 'next/link';
import { Star, ShieldCheck, MapPin, Clock, BadgeCheck, Award, ExternalLink } from 'lucide-react';
import type { PatientStory } from '@/data/stories/patient-stories';

interface PatientStoryCardProps {
  story: PatientStory;
  variant?: 'full' | 'compact';  // full = all 4 text blocks; compact = background + result only
}

const collectionMethodLabel: Record<string, string> = {
  FORM_SUBMISSION:    'Submitted via our patient story form',
  GOOGLE_ATTRIBUTION: 'Google review, republished with consent',
  CLINIC_REFERRED:    'Clinic-referred — story written independently by patient',
};

const tierIcon = {
  Diamond: <Award className="w-3.5 h-3.5" />,
  Platinum: <BadgeCheck className="w-3.5 h-3.5" />,
};

const tierColour = {
  Diamond: 'bg-blue-100 text-blue-800 border-blue-200',
  Platinum: 'bg-purple-100 text-purple-800 border-purple-200',
};

function formatMonth(isoYearMonth: string): string {
  const [year, month] = isoYearMonth.split('-');
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-GB', {
    month: 'long', year: 'numeric',
  });
}

export function PatientStoryCard({ story, variant = 'full' }: PatientStoryCardProps) {
  const isCompact = variant === 'compact';

  return (
    <article
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
      aria-label={`Patient story: ${story.headline}`}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-brand-50 border-b border-brand-100 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">

          {/* Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: story.ratingValue }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* Tier badge */}
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${tierColour[story.clinicTier]}`}>
            {tierIcon[story.clinicTier]}
            Invisalign {story.clinicTier}
          </span>

          {/* Verification badge */}
          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3 h-3" />
            Verified patient
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-3">
          <Link href={`/success-stories/${story.slug}/`} className="hover:text-brand-700 transition-colors">
            "{story.headline}"
          </Link>
        </h3>

        {/* Patient + treatment meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-medium">{story.patientFirstName}</span> from{' '}
            <Link href={`/locations/${story.patientTownSlug}/`} className="text-brand-700 hover:underline">
              {story.patientTown}
            </Link>
          </span>
          <span>·</span>
          <span>
            <Link href={`/treatments/${story.treatmentSlug}/`} className="text-brand-700 hover:underline">
              {story.treatmentLabel}
            </Link>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            {story.treatmentDuration}
          </span>
        </div>
      </div>

      {/* ── Body — story text blocks ─────────────────────────────────────── */}
      <div className="px-6 py-5 space-y-4 text-sm text-gray-700 leading-relaxed">

        {/* Background — always shown */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
            Why they sought treatment
          </p>
          <p>{story.backgroundText}</p>
        </div>

        {/* Choice — always shown */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
            How they chose their clinic
          </p>
          <p>{story.choiceText}</p>
        </div>

        {/* Journey — full variant only */}
        {!isCompact && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
              The treatment experience
            </p>
            <p>{story.journeyText}</p>
          </div>
        )}

        {/* Result — always shown */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1.5">
            The result
          </p>
          <p className="text-green-900">{story.resultText}</p>
        </div>

        {/* Advice — full variant only */}
        {!isCompact && story.adviceText && (
          <blockquote className="border-l-4 border-brand-400 pl-4 italic text-gray-600">
            "{story.adviceText}"
          </blockquote>
        )}
      </div>

      {/* ── Footer — clinic + verification disclosure ────────────────────── */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex flex-wrap items-start justify-between gap-4">

          {/* Clinic credit */}
          <div className="text-sm">
            <p className="text-gray-500 text-xs mb-1">Treated at</p>
            <Link
              href={`/clinics/${story.clinicSlug}/`}
              className="font-semibold text-gray-900 hover:text-brand-700 flex items-center gap-1"
            >
              {story.clinicName}
              <ExternalLink className="w-3 h-3 opacity-50" />
            </Link>
            <p className="text-xs text-gray-500">
              Treatment completed {formatMonth(story.treatmentCompleted)}
            </p>
          </div>

          {/* Verification disclosure */}
          <div className="text-xs text-gray-500 text-right max-w-xs">
            <p className="font-medium text-gray-600 mb-0.5">How this story was collected</p>
            <p>{collectionMethodLabel[story.collectionMethod]}</p>
            <Link href="/how-we-vet-providers/#story-verification" className="text-brand-700 hover:underline mt-1 inline-block">
              Our verification process
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
