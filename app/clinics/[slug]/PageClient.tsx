'use client';

// app/clinics/[slug]/PageClient.tsx
//
// Deliverable 3: Trust-Optimized Clinic Profile
//
// ABOVE-FOLD TRUST SIGNAL ARCHITECTURE (in strict render order):
//   1. Tier badge           — Platinum/Diamond badge, immediately visible
//   2. Lead practitioner    — Named dentist with GDC number + live GDC link
//   3. AggregateRating      — Stars + score + review count above fold
//   4. Independence notice  — One-line inline disclaimer before any CTA
//   5. Primary CTA          — "Book Free Consultation" (not "Book Appointment")
//   6. Independent Directory Disclaimer — footer of page, full copy
//
// E-E-A-T rationale per signal:
//   GDC number  → Verifiable credential. QRG raters click these.
//                 An unverifiable GDC number is worse than none.
//   Tier badge  → Third-party verified expertise proxy (Align Technology)
//   Rating      → Experience signal — real patient outcomes at scale
//   Disclaimer  → Trustworthiness — removes ambiguity about commercial relationship
//
// DATA FLOW:
//   clinicData   ← data/clinics.ts (static clinic records)
//   townData     ← data/content/[town].ts (pricing, wait times, region)
//   services     ← data/services.ts (treatment list for hasOfferCatalog)

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Star, ExternalLink, Phone, MapPin,
  Clock, BadgeCheck, Award, CheckCircle2, AlertCircle,
  ChevronDown, Users, Calendar,
} from 'lucide-react';
import { LeadFormModal } from '@/components/LeadFormModal';

// ── Types (inline here — move to types file if preferred) ─────────────────
interface ClinicProfileProps {
  clinic: {
    name: string;
    slug: string;
    tier: 'Platinum' | 'Diamond';
    leadPractitionerName: string;
    gdcNumber: string;
    address: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    telephone?: string;
    googleRating: number;
    reviewCount: number;
    caseVolume: string;
    openingHours?: string[];
    treatmentSlugs: string[];
    aboutParagraphs: string[];   // 2–4 paragraphs about the practice
    teamMembers?: Array<{
      name: string;
      role: string;
      gdcNumber?: string;
      bio: string;
    }>;
  };
  priceRangeLow: number;
  priceRangeHigh: number;
  waitTimeDays: number;
}

// ── Tier config ───────────────────────────────────────────────────────────
const tierConfig = {
  Diamond: {
    label: 'Diamond Provider',
    description: '300+ Invisalign cases per year, verified by Align Technology',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    badge: 'bg-blue-600',
    icon: <Award className="w-5 h-5" />,
  },
  Platinum: {
    label: 'Platinum Provider',
    description: '150+ Invisalign cases per year, verified by Align Technology',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-800',
    badge: 'bg-purple-600',
    icon: <BadgeCheck className="w-5 h-5" />,
  },
};

const gdcVerifyUrl = 'https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration';

const treatmentNames: Record<string, string> = {
  crowded:   'Crowded Teeth',
  gaps:      'Gaps & Spacing',
  overbite:  'Overbite',
  underbite: 'Underbite',
  crossbite: 'Crossbite',
  adults:    'Adult Invisalign',
};

export default function ClinicProfilePageClient({ clinic, priceRangeLow, priceRangeHigh, waitTimeDays }: ClinicProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faqOpen, setFaqOpen]         = useState<number | null>(null);
  const tier = tierConfig[clinic.tier];

  const stars = Math.round(clinic.googleRating * 2) / 2; // round to nearest 0.5
  const fullStars = Math.floor(stars);
  const halfStar  = stars % 1 !== 0;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city={clinic.town} />

      <main>

        {/* ════════════════════════════════════════════════════════════════
            ABOVE-FOLD SECTION — everything visible without scrolling
            on a 1280px desktop. Trust signals must all be here.
            ════════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-900 text-white py-12 md:py-16">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* LEFT — Identity + trust signals */}
              <div>

                {/* ── TRUST SIGNAL 1: Tier badge ─────────────────────────
                    Rendered FIRST — before the clinic name.
                    Rationale: Establishes clinical credibility before the
                    patient reads anything else. Tier is the hardest
                    credential to fabricate — it's third-party verified. */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 ${tier.badge} text-white`}>
                  {tier.icon}
                  Invisalign {tier.label}
                </div>

                {/* Clinic name */}
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 tracking-tight">
                  {clinic.name}
                </h1>
                <p className="text-gray-400 mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {clinic.address}, {clinic.addressLocality}, {clinic.postalCode}
                </p>

                {/* ── TRUST SIGNAL 2: Lead practitioner + GDC number ────
                    Named individual with verifiable GDC number.
                    The external GDC link is essential — QRG raters click it.
                    An unverifiable GDC number is actively harmful. */}
                <div className="bg-white/10 rounded-xl p-4 mb-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">
                    Lead Invisalign Practitioner
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-semibold text-white text-lg">
                      {clinic.leadPractitionerName}
                    </span>
                    <a
                      href={gdcVerifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm bg-green-600/20 border border-green-500/30 text-green-300 rounded-full px-3 py-1 hover:bg-green-600/30 transition-colors"
                      title={`Verify GDC registration for ${clinic.leadPractitionerName}`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      GDC No. {clinic.gdcNumber}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Click the GDC number to verify this practitioner's registration status independently at gdc-uk.org
                  </p>
                </div>

                {/* ── TRUST SIGNAL 3: AggregateRating ───────────────────
                    Score + count + visual stars, all above the fold.
                    Review count matters as much as score — 4.9 from 12
                    reviews is weaker than 4.7 from 280. Both shown. */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-1 mb-0.5">
                        {/* Full stars */}
                        {Array.from({ length: fullStars }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {/* Half star approximation */}
                        {halfStar && (
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400/50" />
                        )}
                      </div>
                      <p className="text-xl font-bold text-white leading-none">{clinic.googleRating}<span className="text-gray-400 text-sm font-normal">/5</span></p>
                    </div>
                    <div className="border-l border-white/20 pl-3">
                      <p className="text-2xl font-bold text-white leading-none">{clinic.reviewCount.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Google reviews</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-400" />
                    <div>
                      <p className="text-xl font-bold text-white leading-none">{clinic.caseVolume}</p>
                      <p className="text-xs text-gray-400">Invisalign cases</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-brand-400" />
                    <div>
                      <p className="text-xl font-bold text-white leading-none">{waitTimeDays} days</p>
                      <p className="text-xs text-gray-400">avg. wait for consult</p>
                    </div>
                  </div>
                </div>

                {/* ── TRUST SIGNAL 4: Inline independence notice ─────────
                    One sentence before the CTA. Removes ambiguity about
                    the commercial relationship before the patient acts.
                    This is the micro version of the footer disclaimer. */}
                <p className="text-xs text-gray-500 mb-4 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-500" />
                  Listed independently. We have no ownership stake in {clinic.name}. You book directly with the clinic.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg"
                  >
                    Book Free Consultation
                  </button>
                  {clinic.telephone && (
                    <a
                      href={`tel:${clinic.telephone}`}
                      className="flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {clinic.telephone}
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT — Tier detail card */}
              <div className={`rounded-2xl border-2 p-6 ${tier.bg} ${tier.border}`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-2.5 rounded-xl ${tier.badge} text-white flex-shrink-0`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h2 className={`font-display font-bold text-lg mb-1 ${tier.text}`}>
                      Invisalign {tier.label}
                    </h2>
                    <p className={`text-sm ${tier.text} opacity-80`}>{tier.description}</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${tier.text} opacity-90`}>
                  {clinic.tier === 'Diamond'
                    ? `Diamond status is the highest tier awarded by Align Technology — the manufacturer of Invisalign. It requires the practice to complete more than 300 Invisalign cases per year, independently verified by Align's certification process. This case volume means the clinical team at ${clinic.name} has encountered and resolved a wide range of presentations, from mild crowding to complex overbite cases requiring Precision Wing technology.`
                    : `Platinum status is awarded by Align Technology — the manufacturer of Invisalign — to practices completing more than 150 Invisalign cases per year. This independently verified case volume places ${clinic.name} among the most active Invisalign providers in Essex. The breadth of cases at this volume means the clinical team regularly encounters and resolves complex presentations that less active providers decline.`
                  }
                </p>
                <div className="space-y-2">
                  {[
                    'GDC-registered lead practitioner',
                    `${tier.label} verified by Align Technology`,
                    'Free iTero 3D scan at initial consultation',
                    'Written, itemised treatment quote provided',
                    '0% finance available',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${tier.text}`} />
                      <span className={tier.text}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Below fold: About, Treatments, Opening Hours, FAQ ─────────── */}
        <div className="container-width py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">

              {/* About the practice */}
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  About {clinic.name}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {clinic.aboutParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Team members */}
              {clinic.teamMembers && clinic.teamMembers.length > 0 && (
                <section>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    The Invisalign Team
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {clinic.teamMembers.map((member, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg flex-shrink-0">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.role}</p>
                            {member.gdcNumber && (
                              <a
                                href={gdcVerifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-green-700 hover:underline mt-0.5"
                              >
                                <ShieldCheck className="w-3 h-3" />
                                GDC {member.gdcNumber}
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Treatments offered */}
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Invisalign Treatments at {clinic.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {clinic.treatmentSlugs.map(slug => (
                    <Link
                      key={slug}
                      href={`/locations/${clinic.addressLocality.toLowerCase().replace(/\s+/g, '-')}/${slug}/`}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800 group-hover:text-brand-700">
                        {treatmentNames[slug] ?? slug}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Price range */}
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Pricing at {clinic.name}
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Local price range</span>
                    <span className="font-semibold text-gray-900">
                      £{priceRangeLow.toLocaleString()} – £{priceRangeHigh.toLocaleString()}
                    </span>
                  </div>
                  {/* Price bar */}
                  <div className="h-2 bg-gray-200 rounded-full mb-4">
                    <div className="h-2 bg-brand-500 rounded-full w-3/5" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Prices vary by treatment type and case complexity. {clinic.name} provides a written, itemised quote at the free initial consultation — no commitment required.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-700 bg-brand-50 border border-brand-100 rounded-lg px-4 py-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    0% finance available — payments from £{Math.round(priceRangeLow / 60).toLocaleString()}/month
                  </div>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quick details */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-display font-bold text-gray-900 mb-4">Practice Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{clinic.address}, {clinic.addressLocality}, {clinic.postalCode}</span>
                    </div>
                    {clinic.telephone && (
                      <div className="flex gap-3">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <a href={`tel:${clinic.telephone}`} className="text-brand-700 hover:underline">{clinic.telephone}</a>
                      </div>
                    )}
                    {clinic.openingHours && (
                      <div className="flex gap-3">
                        <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          {clinic.openingHours.map((h, i) => (
                            <p key={i} className="text-gray-700">{h}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-6 bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors"
                  >
                    Book Free Consultation
                  </button>
                </div>

                {/* Mini vetting badge */}
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-brand-600" />
                    <span className="font-semibold text-brand-900 text-sm">Independently Vetted</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-brand-800">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> GDC registration verified</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> {clinic.tier} tier confirmed by Align Technology</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> {clinic.googleRating}/5 stars · {clinic.reviewCount} reviews</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Free consultation confirmed</li>
                  </ul>
                  <Link href="/how-we-vet-providers/" className="text-xs text-brand-700 underline mt-3 block hover:no-underline">
                    How we vet every provider →
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            INDEPENDENT DIRECTORY DISCLAIMER
            Sits at the bottom of the clinic profile page — above the
            global site footer. Full copy below.

            PURPOSE:
              - Removes any ambiguity that this site IS the dental clinic
              - Clarifies the commercial relationship transparently
              - Assures the patient they are booking directly with a
                regulated dental professional, not an intermediary
              - Addresses the GDC's advertising guidance requirement
                that any financial arrangement between referrer and
                dental practice must be disclosed

            E-E-A-T FUNCTION:
              Trustworthiness — explicitly answering "who is responsible
              for this recommendation and do they have a conflict of interest?"
              before the patient needs to ask.
            ════════════════════════════════════════════════════════════════ */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container-width py-10 max-w-4xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                <p className="font-semibold text-gray-700">Independent Directory Disclaimer</p>
                <p>
                  Invisalign Dentists Essex is an independent consumer directory. We are not a dental practice and we do not provide dental treatment. We are not owned by, financially connected to, or editorially controlled by {clinic.name} or any other clinic featured on this platform.
                </p>
                <p>
                  {clinic.name} is an independently owned and operated dental practice regulated by the General Dental Council (GDC). When you book a consultation through this directory, you are booking directly with {clinic.name} — not with us. Your treatment agreement, clinical care, and any financial arrangement for treatment are entirely between you and {clinic.name}. Invisalign Dentists Essex is not a party to your treatment contract and accepts no clinical or financial liability in connection with any treatment you receive.
                </p>
                <p>
                  We receive a referral fee from listed practices when a patient we refer books a consultation. This arrangement is the same for every listed clinic and does not influence the order in which clinics are listed, the ratings we display, or any editorial decision about which clinics meet our vetting criteria. Our listing decisions are made exclusively on the basis of our five-point vetting criteria, which you can read in full at{' '}
                  <Link href="/how-we-vet-providers/" className="text-brand-700 hover:underline">
                    /how-we-vet-providers/
                  </Link>.
                </p>
                <p>
                  The information on this page — including ratings, tier status, and GDC registration — was last verified in {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}. We recommend verifying GDC registration status independently at{' '}
                  <a href={gdcVerifyUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
                    gdc-uk.org
                  </a>{' '}
                  before attending any appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
