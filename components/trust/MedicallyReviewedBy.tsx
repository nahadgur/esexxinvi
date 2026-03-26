'use client';

// components/trust/MedicallyReviewedBy.tsx
//
// "Medically Reviewed By" banner component.
//
// PLACEMENT: Top of every /treatments/[service]/ page, immediately
// below the page H1 and above the first body paragraph.
//
// E-E-A-T FUNCTION:
//   - Signals to Google Quality Raters that the page has medical oversight
//   - Provides a verifiable GDC number that raters can check at gdc-uk.org
//   - The "Updated" date shows freshness — a key YMYL quality signal
//   - Links to /editorial-policy/ and /advisory-board/ for full transparency
//   - The schema for this data is handled in the MedicalWebPage.author field
//     in the page's JSON-LD (see app/treatments/[service]/schema.ts)
//
// DATA SOURCE: data/advisory/board-members.ts — see that file for
// the typed interface and member records.

import Link from 'next/link';
import { ShieldCheck, ExternalLink, Clock } from 'lucide-react';
import type { AdvisoryBoardMember } from '@/data/advisory/board-members';

interface MedicallyReviewedByProps {
  reviewer: AdvisoryBoardMember;
  reviewedDate: string;   // ISO date string e.g. "2025-01-15"
  updatedDate?: string;   // ISO date string — if content was updated after review
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function MedicallyReviewedBy({
  reviewer,
  reviewedDate,
  updatedDate,
}: MedicallyReviewedByProps) {
  const displayDate = updatedDate ?? reviewedDate;
  const gdcUrl = `https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration`;

  return (
    <div className="flex items-start gap-4 p-4 bg-brand-50 border border-brand-100 rounded-xl mb-8">

      {/* Reviewer avatar */}
      <div className="flex-shrink-0">
        {reviewer.avatarUrl ? (
          <img
            src={reviewer.avatarUrl}
            alt={reviewer.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-brand-200"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
            {reviewer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
            Medically Reviewed
          </span>
        </div>

        <p className="text-sm text-gray-700 mb-1">
          Reviewed by{' '}
          <Link
            href={`/advisory-board/#${reviewer.slug}`}
            className="font-semibold text-gray-900 hover:text-brand-700 underline underline-offset-2"
          >
            {reviewer.name}
          </Link>
          {' '}<span className="text-gray-500">{reviewer.qualifications}</span>
          {' '}·{' '}
          <a
            href={`${gdcUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-brand-700 inline-flex items-center gap-1"
            title={`Verify GDC registration for ${reviewer.name}`}
          >
            GDC {reviewer.gdcNumber}
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {updatedDate ? (
              <>Updated {formatDate(displayDate)} · Originally reviewed {formatDate(reviewedDate)}</>
            ) : (
              <>Reviewed {formatDate(reviewedDate)}</>
            )}
          </span>
          <Link
            href="/editorial-policy/"
            className="hover:text-brand-700 underline underline-offset-2"
          >
            Editorial policy
          </Link>
        </div>
      </div>
    </div>
  );
}
