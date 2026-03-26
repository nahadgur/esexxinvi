// app/how-we-vet-providers/page.tsx
// Server component — no 'use client', so metadata export works correctly.
// All apostrophes in JSX text content use &apos; or {`'`} — never raw ' in attributes.

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck, Star, GraduationCap, FileText,
  BadgeCheck, RefreshCw, AlertCircle, CheckCircle2, XCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Vet Invisalign Providers | Our 5-Point Selection Criteria',
  description: 'Invisalign Dentists Essex is an independent consumer directory. Learn the strict 5-point criteria every provider must meet before we list them — GDC registration, tier, ratings, and more.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/how-we-vet-providers/' },
};

const criteria = [
  {
    number: '01',
    icon: <FileText className="w-7 h-7" />,
    title: 'Active GDC Registration',
    requirement: 'Every principal dentist at a listed practice must hold a current, active registration with the General Dental Council (GDC) — the UK statutory regulator for dental professionals.',
    howWeCheck: 'We verify GDC registration numbers directly against the GDC public register at gdcuk.org before listing and re-verify annually. Any practice whose principal dentist lapses registration is removed within 48 hours of our next scheduled check.',
    whyItMatters: 'GDC registration is the legal baseline for practising dentistry in the UK. It requires criminal background disclosure, professional indemnity insurance, and compliance with the Standards for the Dental Team. A practice without current GDC registration cannot legally treat patients.',
    passLabel: 'Active GDC registration confirmed',
    failLabel: 'Lapsed, suspended, or unverifiable registration',
  },
  {
    number: '02',
    icon: <BadgeCheck className="w-7 h-7" />,
    title: 'Platinum or Diamond Invisalign Provider Tier',
    requirement: 'Every listed practice must hold current Platinum or Diamond status from Align Technology — the manufacturer of Invisalign — as independently verified by Align\'s annual certification process.',
    howWeCheck: 'We confirm tier status directly through Align Technology\'s provider database and require practices to submit their current tier certification. Tier status is re-verified each calendar year.',
    whyItMatters: 'Platinum status requires a practice to complete a minimum of 150 Invisalign cases per year. Diamond status requires 300+ cases per year. These thresholds are independently verified by Align Technology — not self-reported. The volume of cases directly determines the depth of clinical judgement developed.',
    passLabel: 'Current Platinum or Diamond tier confirmed by Align Technology',
    failLabel: 'Gold, Silver, or unverified tier — regardless of self-reported experience',
  },
  {
    number: '03',
    icon: <Star className="w-7 h-7" />,
    title: 'Minimum 4.5-Star Google Rating (50+ Reviews)',
    requirement: 'Every listed practice must hold a verified Google Business Profile rating of 4.5 stars or above, based on a minimum of 50 patient reviews.',
    howWeCheck: 'We check Google Business Profile ratings at the point of initial listing and monitor them on a quarterly basis. Practices that fall below 4.5 stars are placed on a 90-day watchlist before suspension.',
    whyItMatters: 'A 4.5-star threshold with 50+ reviews is statistically meaningful — it requires consistent positive outcomes across a large enough sample to rule out selection bias. We specifically require Google reviews because they are tied to verified Google accounts with location data.',
    passLabel: '4.5 stars or above on 50+ verified Google reviews',
    failLabel: 'Below 4.5 stars, fewer than 50 reviews, or unverified profile',
  },
  {
    number: '04',
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Transparent and Itemised Pricing',
    requirement: 'Every listed practice must commit to providing patients with a written, itemised treatment quote — covering aligners, attachments, refinements, and retainers — before any treatment agreement is signed.',
    howWeCheck: 'We require practices to confirm in writing that they follow a transparent pricing protocol. We conduct periodic mystery consultations at a sample of listed practices to verify commitments are being honoured.',
    whyItMatters: 'Hidden costs are the most common patient complaint in private dentistry. Our pricing transparency requirement ensures patients can make genuinely informed financial decisions before committing to treatment.',
    passLabel: 'Free initial consultation and written itemised quote confirmed',
    failLabel: 'Paid initial consultations or refusal to provide written cost breakdown',
  },
  {
    number: '05',
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Evidenced Continuing Professional Development (CPD)',
    requirement: 'Every principal dentist at a listed practice must demonstrate current compliance with GDC CPD requirements and provide evidence of Invisalign-specific clinical training within the past 24 months.',
    howWeCheck: 'We request CPD logs and Align Technology training completion certificates from listed practices at the point of initial listing and during annual re-verification.',
    whyItMatters: 'Invisalign\'s technology, case planning software, and aligner attachment system are updated regularly. A provider who completed their initial certification years ago without subsequent structured learning may be applying outdated staging protocols.',
    passLabel: 'GDC CPD compliance confirmed and Invisalign-specific training within 24 months',
    failLabel: 'Expired CPD compliance or no evidence of Invisalign-specific training',
  },
];

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
              We are an independent patient advocacy directory. We are not owned by, financially connected to, or editorially influenced by any dental group, clinic chain, or orthodontic manufacturer. Every provider listed on this site has passed our five-point vetting criteria — and we remove listings that fall below our standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-50 border-y border-brand-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Independence Guarantee</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  Invisalign Dentists Essex was built because finding a genuinely qualified Invisalign provider in Essex was harder than it should be. Search results return sponsored clinic websites, manufacturer directories that list any paying subscriber, and comparison sites that rank providers by advertising spend rather than clinical quality.
                </p>
                <p>
                  We exist to fix that. Our directory is funded by a referral arrangement with listed providers — we receive a fee when a patient we refer books a consultation. This is disclosed fully. What it does not mean is that providers can buy their way onto the list.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We have no ownership stake in any listed clinic. Our medical advisory board members receive no payment from listed practices. Our editorial team produces treatment information content independently of which providers are listed in any given town.
                </p>
                <p>
                  If you find a listed practice that does not meet our stated criteria, please contact us. We investigate every report within five working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-width">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Five-Point Provider Criteria</h2>
            <p className="text-lg text-gray-600">
              Every practice must pass all five criteria before we list them. There are no exceptions and no criteria that can be waived.
            </p>
          </div>

          <div className="space-y-10">
            {criteria.map((c) => (
              <div key={c.number} className="grid md:grid-cols-12 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
                <div className="md:col-span-1 bg-brand-600 text-white flex flex-col items-center justify-center py-8 px-4">
                  <span className="text-3xl font-display font-bold opacity-60">{c.number}</span>
                  <div className="mt-3 opacity-80">{c.icon}</div>
                </div>
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

      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-width max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Automatic Disqualifiers</h2>
              <p className="text-gray-600">
                The following conditions result in immediate removal — or rejection at the point of application — with no appeal or probationary period.
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

      <section className="py-16">
        <div className="container-width max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <RefreshCw className="w-7 h-7 text-brand-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-display font-bold text-gray-900">Ongoing Monitoring — Not Just at Listing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            {[
              { title: 'Annual Re-Verification', body: 'Every listed practice undergoes full re-verification against all five criteria each January. Practices that no longer meet any single criterion are suspended and given 60 days to remedy the issue before removal.' },
              { title: 'Quarterly Rating Checks', body: 'We check Google Business Profile ratings for all listed practices every quarter. Practices that fall below 4.5 stars are placed on a watchlist and notified.' },
              { title: 'Patient Complaint Response', body: 'Any patient complaint submitted through our directory is investigated within five working days. We contact the practice directly and request their response.' },
              { title: 'GDC Alert Monitoring', body: "We monitor the GDC's published fitness to practise hearings and sanctions list. Any listed dentist who appears in GDC proceedings is immediately suspended pending investigation outcome." },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
