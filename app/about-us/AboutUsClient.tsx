'use client';

// app/about-us/AboutUsClient.tsx
// All interactive / JSX rendering for the About Us page.
// Kept as client component so Link, icons, and state work correctly.

import Link from 'next/link';
import {
  MapPin, ShieldCheck, BarChart3,
  Mail, Phone, Building2, FileText, CheckCircle2,
} from 'lucide-react';

const regionalHubs = [
  { name: 'Chelmsford',        slug: 'chelmsford',      towns: 14, note: 'County city — Diamond provider access' },
  { name: 'Colchester',        slug: 'colchester',      towns: 18, note: "Britain's oldest town — large patient base" },
  { name: 'Southend-on-Sea',   slug: 'southend-on-sea', towns: 16, note: 'South Essex coastal hub' },
  { name: 'Basildon',          slug: 'basildon',        towns: 22, note: 'South Essex new town corridor' },
  { name: 'Harlow',            slug: 'harlow',          towns: 12, note: 'West Essex — Platinum provider' },
  { name: 'Brentwood',         slug: 'brentwood',       towns: 8,  note: 'M25 corridor — commuter premium market' },
];

const stats = [
  { value: '111', label: 'Essex towns covered',    sub: 'From Canvey Island to Castle Hedingham' },
  { value: '666', label: 'Treatment pages',         sub: '6 treatments × 111 towns' },
  { value: '2',   label: 'Featured clinic tiers',   sub: 'Platinum and Diamond only' },
  { value: '5',   label: 'Vetting criteria',         sub: 'Every provider must pass all five' },
];

export default function AboutUsClient() {
  return (
    <main className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-width max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
            <ShieldCheck className="w-4 h-4" /> Independent Consumer Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
            About Invisalign Dentists Essex
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our mission is to demystify the cost and process of clear aligner treatment for Essex residents — helping people find genuinely qualified, local Invisalign providers without having to wade through sponsored search results, inflated manufacturer directories, or comparison sites ranked by advertising spend.
          </p>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-600 text-white py-10">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-display font-bold mb-1">{s.value}</p>
                <p className="text-brand-100 font-medium text-sm">{s.label}</p>
                <p className="text-brand-200 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="container-width max-w-4xl py-16 space-y-16">

        {/* Who we are */}
        <section>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                Invisalign Dentists Essex was founded to solve a problem that affects thousands of Essex residents every year: finding a genuinely qualified Invisalign provider is far harder than it should be. The first page of search results for most Essex town + Invisalign queries is dominated by clinic websites with professional photography and persuasive copy — but very little verifiable information about the clinical experience of the team behind them.
              </p>
              <p>
                Align Technology, the manufacturer of Invisalign, awards provider tiers based on independently verified case volume. A Diamond provider completing 400 cases per year has encountered and resolved a categorically different range of clinical challenges than a general dentist completing 15 cases. This information is almost never surfaced clearly in clinic marketing. We built this directory to surface it.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We are not a dental practice. We do not provide treatment. We have no clinical staff. We are a consumer advocacy platform — funded by referral fees from listed providers, but editorially independent of all of them. Our listing decisions are made on the basis of five verifiable criteria. Providers who do not meet every criterion are not listed, regardless of willingness to pay.
              </p>
              <p>
                Our full commercial disclosure, vetting methodology, and conflict of interest policy are published openly on this site. We believe that a directory asking patients to trust its recommendations must itself be fully transparent about how those recommendations are made.
              </p>
            </div>
          </div>
        </section>

        {/* Geographic focus */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-7 h-7 text-brand-600 flex-shrink-0" />
            <h2 className="text-3xl font-display font-bold text-gray-900">Our Geographic Focus</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            We cover all 111 towns in the county of Essex — from the Thames Estuary coast in the south to the Suffolk border in the north, and from the London fringe in the west to the Tendring peninsula in the east. Our 111-town database means that whether you live in central Chelmsford or in a remote parish like Point Clear or Bulphan, we have researched the nearest verified providers and the local price ranges that apply to your area.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {regionalHubs.map((hub, i) => (
              <Link
                key={i}
                href={`/locations/${hub.slug}/`}
                className="border border-gray-200 rounded-xl p-4 hover:border-brand-300 hover:bg-brand-50 transition-all group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-brand-700">{hub.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{hub.towns} surrounding towns covered</p>
                <p className="text-xs text-gray-400 mt-1">{hub.note}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-4">
            Our coverage does not end at the major towns. We maintain treatment pages and local pricing data for every town in the county — including small market towns, coastal villages, and rural parishes where finding a nearby provider requires knowing which hub clinic to travel to and how far that journey is.
          </p>
        </section>

        {/* Data accuracy */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-7 h-7 text-brand-600 flex-shrink-0" />
            <h2 className="text-3xl font-display font-bold text-gray-900">Our Data Accuracy Commitment</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Local Price Ranges</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every town and treatment combination carries a local price range — not a national average. We research local Invisalign pricing for each Essex market by treatment type and position each town&apos;s range relative to its nearest hub city. Price data is updated annually.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Verification Standards</h3>
              <div className="space-y-3">
                {[
                  { label: 'GDC registration', detail: 'Verified against the public GDC register annually.' },
                  { label: 'Invisalign tier',  detail: 'Confirmed via Align Technology\'s provider database each January.' },
                  { label: 'Google ratings',   detail: 'Checked at listing and monitored quarterly.' },
                  { label: 'Pricing data',     detail: 'Researched locally per treatment. Updated annually.' },
                  { label: 'Wait time data',   detail: 'Based on availability data from listed practices. Updated quarterly.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-900">{item.label}:</span>{' '}
                      <span className="text-gray-600">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial transparency */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Commercial Transparency</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Invisalign Dentists Essex is a commercial business. We receive a referral fee from listed practices when a patient we refer books a consultation. This is how the site is funded.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This arrangement does not influence which practices are listed, the order in which they appear, the ratings we display, or any editorial content on this site. We disclose this arrangement here and on every clinic profile page.
          </p>
        </section>

        {/* Contact & company details */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-7 h-7 text-brand-600 flex-shrink-0" />
            <h2 className="text-3xl font-display font-bold text-gray-900">Contact &amp; Company Details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <a href="mailto:hello@invisaligndentistsessex.uk" className="text-brand-700 hover:underline">
                    hello@invisaligndentistsessex.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <a href="tel:+441234000000" className="text-brand-700 hover:underline">[+44 XXXX XXXXXX]</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Registered Address</p>
                  <address className="not-italic text-gray-700 text-sm">
                    [Registered Office Address]<br />
                    [Street], [Town]<br />
                    [County], [Postcode]<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company Information</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3 text-sm">
                {[
                  { label: 'Registered name',   value: '[Company Name Ltd]' },
                  { label: 'Company number',     value: '[XXXXXXXX]' },
                  { label: 'Registered in',      value: 'England and Wales' },
                  { label: 'VAT number',          value: 'GB [XXX XXXX XX]' },
                  { label: 'ICO registration',    value: '[ZXXXXXXX]' },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-start gap-4 ${i > 0 ? 'border-t border-gray-200 pt-3' : ''}`}>
                    <span className="text-gray-500 flex-shrink-0">{row.label}</span>
                    <span className="text-gray-900 font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/privacy-policy/" className="text-brand-700 hover:underline">Privacy Policy</Link>
                <Link href="/terms/" className="text-brand-700 hover:underline">Terms of Use</Link>
                <Link href="/cookie-policy/" className="text-brand-700 hover:underline">Cookie Policy</Link>
                <Link href="/editorial-policy/" className="text-brand-700 hover:underline">Editorial Policy</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Launch checklist */}
        <section className="border-2 border-dashed border-amber-300 rounded-xl p-6 bg-amber-50">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-amber-900">LAUNCH CHECKLIST — remove this block before go-live</h3>
          </div>
          <div className="space-y-2 text-sm text-amber-800">
            {[
              'Registered company name confirmed and matches Companies House record',
              'Company registration number verified and links to live Companies House entry',
              'Registered office address is a real physical address (not PO Box or virtual office)',
              'Contact email address is live and monitored',
              'Contact telephone number is live and answered during stated hours',
              'VAT number added (or row removed if not VAT registered)',
              'ICO registration number confirmed — required for lead capture forms',
              'Privacy Policy live and linked',
              'Terms of Use live and linked',
              'Cookie Policy live and linked',
              'Editorial Policy live and linked',
              'Advisory Board page live with at least one active member',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded border-2 border-amber-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
