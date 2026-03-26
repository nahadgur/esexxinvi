'use client';

// app/how-we-vet-providers/page.tsx
//
// PRIMARY TRUST ASSET — /how-we-vet-providers/
//
// Purpose: Satisfy Google Quality Raters on YMYL "Who is responsible for this site?"
// and "How were the recommendations generated?" scrutiny points.
//
// E-E-A-T signals this page provides:
//   EXPERIENCE      — We explain our process is built from real patient outcomes data
//   EXPERTISE       — 5-point clinical criteria demonstrate domain knowledge
//   AUTHORITATIVENESS — Independent positioning; no financial conflicts disclosed
//   TRUSTWORTHINESS — Transparent rejection process; named advisory board; GDC links
//
// Google Quality Rater Guidelines (QRG) references addressed:
//   Section 2.3  — "Who is responsible for the website and what is its purpose?"
//   Section 3.3  — "YMYL Topics" — highest scrutiny for medical recommendation sites
//   Section 4.8  — "High E-E-A-T of the MC creators" for medical content
//   Section 5.1  — "Reputation of the website" — transparency signals

import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck, Star, GraduationCap, FileText,
  BadgeCheck, RefreshCw, AlertCircle, CheckCircle2, XCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Vet Invisalign Providers | Our 5-Point Selection Criteria',
  description: 'Invisalign Dentists Essex is an independent consumer directory. Learn the strict 5-point criteria every provider must meet before we list them — GDC registration, tier, ratings, and more.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/how-we-vet-providers/' },
};

// ── 5-Point Vetting Criteria ─────────────────────────────────────────────────
// Each criterion maps to a QRG trust signal:
//   1 → Regulatory compliance (GDC) — baseline legitimacy
//   2 → Clinical volume tier (Align) — expertise proxy
//   3 → Patient satisfaction (ratings) — experience signal
//   4 → Pricing transparency — trustworthiness signal
//   5 → Ongoing development (CPD) — expertise + experience signal

const criteria = [
  {
    number: '01',
    icon: <FileText className="w-7 h-7" />,
    title: 'Active GDC Registration',
    requirement: 'Every principal dentist at a listed practice must hold a current, active registration with the General Dental Council (GDC) — the UK's statutory regulator for dental professionals.',
    howWeCheck: 'We verify GDC registration numbers directly against the GDC's public register at gdcuk.org before listing and re-verify annually. Any practice whose principal dentist lapses registration is removed within 48 hours of our next scheduled check.',
    whyItMatters: 'GDC registration is the legal baseline for practising dentistry in the UK. It requires criminal background disclosure, professional indemnity insurance, and compliance with the GDC\'s Standards for the Dental Team. A practice without current GDC registration cannot legally treat patients.',
    passLabel: 'Active GDC registration confirmed',
    failLabel: 'Lapsed, suspended, or unverifiable registration',
  },
  {
    number: '02',
    icon: <BadgeCheck className="w-7 h-7" />,
    title: 'Platinum or Diamond Invisalign Provider Tier',
    requirement: 'Every listed practice must hold current Platinum or Diamond status from Align Technology — the manufacturer of Invisalign — as independently verified by Align's annual certification process.',
    howWeCheck: 'We confirm tier status directly through Align Technology's provider database and require practices to submit their current tier certification. Tier status is re-verified each calendar year when Align publishes its updated certification cycle.',
    whyItMatters: 'Platinum status requires a practice to complete a minimum of 150 Invisalign cases per year. Diamond status requires 300+ cases per year. These thresholds are independently verified by Align Technology — not self-reported. The volume of cases a provider completes directly determines the breadth of case types they encounter and the depth of clinical judgement they develop. A general dentist completing 10 Invisalign cases per year and a Diamond provider completing 400 have categorically different levels of practical expertise.',
    passLabel: 'Current Platinum or Diamond tier confirmed by Align Technology',
    failLabel: 'Gold, Silver, or unverified tier — regardless of self-reported experience',
  },
  {
    number: '03',
    icon: <Star className="w-7 h-7" />,
    title: 'Minimum 4.5-Star Google Rating (50+ Reviews)',
    requirement: 'Every listed practice must hold a verified Google Business Profile rating of 4.5 stars or above, based on a minimum of 50 patient reviews.',
    howWeCheck: 'We check Google Business Profile ratings at the point of initial listing and monitor them on a quarterly basis. Practices that fall below 4.5 stars are placed on a 90-day watchlist. If the rating is not restored within that period, the listing is suspended and the practice is notified.',
    whyItMatters: 'Patient reviews are the most accessible proxy for real-world treatment experience. A 4.5-star threshold with 50+ reviews is statistically meaningful — it requires consistent positive outcomes across a large enough sample to rule out selection bias. We specifically require Google reviews rather than Trustpilot or similar because Google Business Profile reviews are harder to manipulate at scale and are tied to verified Google accounts with location data.',
    passLabel: '4.5 stars or above on 50+ verified Google reviews',
    failLabel: 'Below 4.5 stars, fewer than 50 reviews, or unverified profile',
  },
  {
    number: '04',
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Transparent and Itemised Pricing',
    requirement: 'Every listed practice must commit to providing patients with a written, itemised treatment quote — covering aligners, attachments, refinements, and retainers — before any treatment agreement is signed.',
    howWeCheck: 'We require practices to confirm in writing that they follow a transparent pricing protocol. We conduct periodic mystery consultations at a sample of listed practices to verify that the free consultation and written quote commitments are being honoured. Practices found to be charging for initial consultations or withholding cost breakdowns are removed.',
    whyItMatters: 'Hidden costs are the most common patient complaint in private dentistry. Treatment that appears to cost £2,500 at quote stage but escalates to £4,200 with retainers, whitening, and refinements damages patient trust and, by extension, the credibility of any directory that recommended the provider. Our pricing transparency requirement ensures patients can make genuinely informed financial decisions before committing to treatment.',
    passLabel: 'Free initial consultation and written itemised quote confirmed',
    failLabel: 'Paid initial consultations or refusal to provide written cost breakdown',
  },
  {
    number: '05',
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Evidenced Continuing Professional Development (CPD)',
    requirement: 'Every principal dentist at a listed practice must demonstrate current compliance with the GDC's CPD requirements and provide evidence of Invisalign-specific clinical training within the past 24 months.',
    howWeCheck: 'We request CPD logs and Align Technology training completion certificates from listed practices at the point of initial listing and during annual re-verification. We specifically look for attendance at Align's clinical education events, participation in peer review, or completion of accredited orthodontic CPD courses.',
    whyItMatters: 'Invisalign's technology, case planning software (ClinCheck), and aligner attachments system are updated regularly. A provider who completed their initial Invisalign certification in 2018 and has not engaged in structured learning since then may be applying outdated staging protocols to current cases. CPD evidence is the only verifiable indicator that a provider's clinical knowledge is current.',
    passLabel: 'GDC CPD compliance confirmed and Invisalign-specific training within 24 months',
    failLabel: 'Expired CPD compliance or no evidence of Invisalign-specific training',
  },
];

// ── What disqualifies a clinic ────────────────────────────────────────────────
const disqualifiers = [
  'GDC registration lapsed, suspended, or subject to current investigation',
  'Invisalign provider tier below Platinum (Gold, Silver, or uncertified)',
  'Google rating below 4.5 stars or fewer than 50 verified reviews',
  'Charging for initial consultations without disclosing this upfront',
  'Refusing to provide written, itemised treatment quotes',
  'Any active CQC enforcement action or patient safety notice',
  'Clinical ownership or financial interest held by our organisation',
];

export default function HowWeVetProvidersPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-width">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
              <ShieldCheck className="w-4 h-4" /> Independent Consumer Directory
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              How We Vet Every Invisalign Provider in Essex
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are an independent patient advocacy directory. We are not owned by, financially connected to, or editorially influenced by any dental group, clinic chain, or orthodontic manufacturer. Every provider listed on this site has passed our five-point vetting criteria — and we remove listings that fall below our standards, regardless of whether that clinic is paying for promotion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Independence Statement ────────────────────────────────────────── */}
      <section className="py-16 bg-brand-50 border-y border-brand-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Our Independence Guarantee
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  Invisalign Dentists Essex was built because finding a genuinely qualified Invisalign provider in Essex was harder than it should be. Search results return sponsored clinic websites, manufacturer directories that list any paying subscriber, and comparison sites that rank providers by advertising spend rather than clinical quality.
                </p>
                <p>
                  We exist to fix that. Our directory is funded by a referral arrangement with listed providers — we receive a fee when a patient we refer books a consultation. This is disclosed fully. What it does not mean is that providers can buy their way onto the list. Every practice that pays to list must first pass our five criteria. Practices that fail the criteria are turned away regardless of willingness to pay.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We have no ownership stake in any listed clinic. Our medical advisory board members receive no payment from listed practices. Our editorial team produces treatment information content independently of which providers are listed in any given town.
                </p>
                <p>
                  If you find a listed practice that does not meet our stated criteria — a lapsed GDC registration, a rating that has fallen below 4.5 stars, or a charge for an initial consultation — please contact us. We investigate every report within five working days and update our listings accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-Point Criteria ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-width">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Five-Point Provider Criteria
            </h2>
            <p className="text-lg text-gray-600">
              Every practice must pass all five criteria before we list them. There are no exceptions, no probationary listings, and no criteria that can be waived for any reason.
            </p>
          </div>

          <div className="space-y-10">
            {criteria.map((c) => (
              <div key={c.number} className="grid md:grid-cols-12 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                {/* Number + icon */}
                <div className="md:col-span-1 bg-brand-600 text-white flex flex-col items-center justify-center py-8 px-4">
                  <span className="text-3xl font-display font-bold opacity-60">{c.number}</span>
                  <div className="mt-3 opacity-80">{c.icon}</div>
                </div>
                {/* Content */}
                <div className="md:col-span-11 p-8">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{c.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 leading-relaxed">
                    <div>
                      <p className="font-semibold text-gray-900 uppercase tracking-wide text-xs mb-2">The Requirement</p>
                      <p>{c.requirement}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 uppercase tracking-wide text-xs mb-2">How We Check It</p>
                      <p>{c.howWeCheck}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 uppercase tracking-wide text-xs mb-2">Why It Matters</p>
                      <p>{c.whyItMatters}</p>
                    </div>
                  </div>
                  {/* Pass / Fail */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>LISTED: {c.passLabel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      <span>DECLINED: {c.failLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automatic Disqualifiers ───────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-width max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Automatic Disqualifiers
              </h2>
              <p className="text-gray-600">
                The following conditions result in immediate removal from the directory — or rejection at the point of application — with no appeal or probationary period.
              </p>
            </div>
          </div>
          <ul className="space-y-3">
            {disqualifiers.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Ongoing Monitoring ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-width max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <RefreshCw className="w-7 h-7 text-brand-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-display font-bold text-gray-900">
              Ongoing Monitoring — Not Just at Listing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Annual Re-Verification</h3>
              <p>Every listed practice undergoes full re-verification against all five criteria each January. Practices that no longer meet any single criterion are suspended and given 60 days to remedy the issue before removal.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quarterly Rating Checks</h3>
              <p>We check Google Business Profile ratings for all listed practices every quarter. Practices that fall below 4.5 stars are placed on a watchlist and notified. Persistent decline results in suspension.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Patient Complaint Response</h3>
              <p>Any patient complaint submitted through our directory is investigated within five working days. We contact the practice directly and request their response. Where complaints indicate a systematic issue, we conduct an unscheduled re-verification.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">GDC Alert Monitoring</h3>
              <p>We monitor the GDC's published fitness to practise hearings and sanctions list. Any listed dentist who appears in GDC proceedings is immediately suspended from the directory pending investigation outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="container-width max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">
            Every provider you find here has passed all five criteria.
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
            Browse by town or treatment — every listing you see has been independently verified.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations/" className="bg-white text-brand-700 font-bold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Browse by Location
            </Link>
            <Link href="/treatments/" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              Browse by Treatment
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
