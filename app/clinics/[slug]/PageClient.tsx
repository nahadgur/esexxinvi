'use client';

// app/clinics/[slug]/PageClient.tsx
// FIX: line 111 — clinic.town does not exist on the Clinic type.
//      Correct field is clinic.addressLocality.
//
// This is a drop-in replacement for the existing PageClient.tsx.
// The only change from the original is on the LeadFormModal line:
//   WAS:  city={clinic.town}
//   NOW:  city={clinic.addressLocality}
//
// The full file is reproduced below so you can replace it entirely.

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Star, ExternalLink, Phone, MapPin,
  Clock, BadgeCheck, Award, CheckCircle2, AlertCircle,
  Users, Calendar,
} from 'lucide-react';
import { LeadFormModal } from '@/components/LeadFormModal';
import type { Clinic } from '@/data/clinics';

interface ClinicProfileProps {
  clinic: Clinic;
  priceRangeLow: number;
  priceRangeHigh: number;
  waitTimeDays: number;
}

const tierConfig = {
  Diamond: {
    label: 'Diamond Provider',
    description: '300+ Invisalign cases per year, verified by Align Technology',
    bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800',
    badge: 'bg-blue-600',
    icon: <Award className="w-5 h-5" />,
  },
  Platinum: {
    label: 'Platinum Provider',
    description: '150+ Invisalign cases per year, verified by Align Technology',
    bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800',
    badge: 'bg-purple-600',
    icon: <BadgeCheck className="w-5 h-5" />,
  },
};

const gdcVerifyUrl = 'https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration';

const treatmentNames: Record<string, string> = {
  crowded: 'Crowded Teeth', gaps: 'Gaps & Spacing', overbite: 'Overbite',
  underbite: 'Underbite', crossbite: 'Crossbite', adults: 'Adult Invisalign',
};

export default function ClinicProfilePageClient({
  clinic, priceRangeLow, priceRangeHigh, waitTimeDays,
}: ClinicProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tier = tierConfig[clinic.tier];

  const fullStars = Math.floor(clinic.googleRating);
  const halfStar  = clinic.googleRating % 1 >= 0.5;

  return (
    <>
      {/* FIX: was clinic.town — correct field is clinic.addressLocality */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        city={clinic.addressLocality}
      />

      <main>

        {/* ── Above fold ─────────────────────────────────────────────────── */}
        <section className="bg-gray-900 text-white py-12 md:py-16">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              <div>
                {/* Tier badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 ${tier.badge} text-white`}>
                  {tier.icon} Invisalign {tier.label}
                </div>

                {/* Name + address */}
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 tracking-tight">
                  {clinic.name}
                </h1>
                <p className="text-gray-400 mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {clinic.address}, {clinic.addressLocality}, {clinic.postalCode}
                </p>

                {/* Lead practitioner + GDC */}
                <div className="bg-white/10 rounded-xl p-4 mb-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">
                    Lead Invisalign Practitioner
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-semibold text-white text-lg">{clinic.leadPractitionerName}</span>
                    <a href={gdcVerifyUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm bg-green-600/20 border border-green-500/30 text-green-300 rounded-full px-3 py-1 hover:bg-green-600/30 transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      GDC No. {clinic.gdcNumber}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Click the GDC number to verify this practitioner&apos;s registration status independently at gdc-uk.org
                  </p>
                </div>

                {/* Trust metrics */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-1 mb-0.5">
                        {Array.from({ length: fullStars }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {halfStar && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400/50" />}
                      </div>
                      <p className="text-xl font-bold text-white leading-none">
                        {clinic.googleRating}<span className="text-gray-400 text-sm font-normal">/5</span>
                      </p>
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

                {/* Independence notice */}
                <p className="text-xs text-gray-500 mb-4 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-500" />
                  Listed independently. We have no ownership stake in {clinic.name}. You book directly with the clinic.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setIsModalOpen(true)}
                    className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg">
                    Book Free Consultation
                  </button>
                  {clinic.telephone && (
                    <a href={`tel:${clinic.telephone}`}
                      className="flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                      <Phone className="w-4 h-4" />
                      {clinic.telephone}
                    </a>
                  )}
                </div>
              </div>

              {/* Tier card */}
              <div className={`rounded-2xl border-2 p-6 ${tier.bg} ${tier.border}`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-2.5 rounded-xl ${tier.badge} text-white flex-shrink-0`}>{tier.icon}</div>
                  <div>
                    <h2 className={`font-display font-bold text-lg mb-1 ${tier.text}`}>Invisalign {tier.label}</h2>
                    <p className={`text-sm ${tier.text} opacity-80`}>{tier.description}</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${tier.text} opacity-90`}>
                  {clinic.tier === 'Diamond'
                    ? `Diamond status is the highest tier awarded by Align Technology. It requires the practice to complete more than 300 Invisalign cases per year, independently verified by Align's certification process. This case volume means the clinical team at ${clinic.name} has encountered and resolved a wide range of presentations, from mild crowding to complex overbite cases.`
                    : `Platinum status is awarded by Align Technology to practices completing more than 150 Invisalign cases per year. This independently verified case volume places ${clinic.name} among the most active Invisalign providers in Essex.`
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

        {/* ── Below fold ─────────────────────────────────────────────────── */}
        <div className="container-width py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">About {clinic.name}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {clinic.aboutParagraphs.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </section>

              {/* Team */}
              {clinic.teamMembers && clinic.teamMembers.length > 0 && (
                <section>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">The Invisalign Team</h2>
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
                              <a href={gdcVerifyUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-green-700 hover:underline mt-0.5">
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

              {/* Treatments */}
              <section>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Invisalign Treatments at {clinic.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {clinic.treatmentSlugs.map(slug => (
                    <Link key={slug}
                      href={`/locations/${clinic.addressLocality.toLowerCase().replace(/\s+/g, '-')}/${slug}/`}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-all group">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      <span className="font-medium text-gray-800 group-hover:text-brand-700">
                        {treatmentNames[slug] ?? slug}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Pricing */}
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
                  <div className="h-2 bg-gray-200 rounded-full mb-4">
                    <div className="h-2 bg-brand-500 rounded-full w-3/5" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {clinic.name} provides a written, itemised quote at the free initial consultation — no commitment required.
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
                          {clinic.openingHours.map((h, i) => <p key={i} className="text-gray-700">{h}</p>)}
                        </div>
                      </div>
                    )}
                  </div>
                  <button onClick={() => setIsModalOpen(true)}
                    className="w-full mt-6 bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors">
                    Book Free Consultation
                  </button>
                </div>

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

        {/* ── Independent Directory Disclaimer ───────────────────────────── */}
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
                  {clinic.name} is an independently owned and operated dental practice regulated by the General Dental Council (GDC). When you book a consultation through this directory, you are booking directly with {clinic.name} — not with us. Your treatment agreement, clinical care, and any financial arrangement for treatment are entirely between you and {clinic.name}.
                </p>
                <p>
                  We receive a referral fee from listed practices when a patient we refer books a consultation. This arrangement is the same for every listed clinic and does not influence listing decisions, displayed ratings, or editorial content. You can read our full vetting criteria at{' '}
                  <Link href="/how-we-vet-providers/" className="text-brand-700 hover:underline">/how-we-vet-providers/</Link>.
                </p>
                <p>
                  We recommend verifying GDC registration status independently at{' '}
                  <a href={gdcVerifyUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">gdc-uk.org</a>{' '}
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
