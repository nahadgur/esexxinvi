'use client';

// app/about-us/page.tsx
//
// Deliverable 4: About Us — Entity Establishment
//
// E-E-A-T FUNCTION:
//   This is the most important single trust page on a YMYL aggregator.
//   Google Quality Raters are explicitly trained to look for:
//     - Who runs this site? (named individuals or registered company)
//     - What is their purpose? (mission must be patient-centric, not commercial)
//     - Do they have the knowledge to make these recommendations?
//     - Is their contact information real and verifiable?
//     - Is ownership information transparent?
//
//   A missing or thin About Us page on a YMYL site is a direct quality signal
//   failure. This page must read as a consumer advocacy publication — not a
//   marketing brochure for a lead generation business.
//
// MANDATORY CONTACT ELEMENTS CHECKLIST (see ContactChecklist component below):
//   ✓ Registered company name
//   ✓ Company registration number (Companies House)
//   ✓ Registered office address (real physical address)
//   ✓ Contact email address
//   ✓ Contact telephone number
//   ✓ VAT number (if registered)
//
// COPY STRATEGY:
//   Mission statement — patient-first framing, not provider-first
//   Geographic focus — 111 towns signals depth, not breadth
//   Data accuracy commitment — price tracking, vetting process
//   Transparency — commercial model disclosed upfront
//   Human voice — avoids corporate press release tone

import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MapPin, ShieldCheck, BarChart3, Users,
  Mail, Phone, Building2, FileText, CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Invisalign Dentists Essex — Independent Consumer Directory',
  description: 'Learn about Invisalign Dentists Essex — an independent consumer directory helping Essex residents find and compare verified Platinum and Diamond Invisalign providers across all 111 Essex towns.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/about-us/' },
};

// ── Essex regional hub data ───────────────────────────────────────────────
const regionalHubs = [
  { name: 'Chelmsford',        towns: 14, note: 'County city — Diamond provider access' },
  { name: 'Colchester',        towns: 18, note: "Britain's oldest town — large patient base" },
  { name: 'Southend-on-Sea',   towns: 16, note: 'South Essex coastal hub' },
  { name: 'Basildon',          towns: 22, note: 'South Essex new town corridor' },
  { name: 'Harlow',            towns: 12, note: 'West Essex — Platinum provider' },
  { name: 'Brentwood',         towns: 8,  note: 'M25 corridor — commuter premium market' },
];

// ── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { value: '111', label: 'Essex towns covered', sub: 'From Canvey Island to Castle Hedingham' },
  { value: '666', label: 'Treatment pages', sub: '6 treatments × 111 towns' },
  { value: '2', label: 'Featured clinic tiers', sub: 'Platinum and Diamond only' },
  { value: '5', label: 'Vetting criteria', sub: 'Every provider must pass all five' },
];

export default function AboutUsPage() {
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
          {/* ── MISSION STATEMENT ──────────────────────────────────────────
              Patient-first framing. The mission is NOT "to connect patients
              with providers" (too commercial). It is to demystify a confusing
              and expensive healthcare decision for a specific community.
              Specific geography + specific problem + specific solution. */}
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

          {/* Regional hubs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {regionalHubs.map((hub, i) => (
              <Link
                key={i}
                href={`/locations/${hub.name.toLowerCase().replace(/\s+/g, '-')}/`}
                className="border border-gray-200 rounded-xl p-4 hover:border-brand-300 hover:bg-brand-50 transition-all group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-brand-700">{hub.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{hub.towns} surrounding towns covered</p>
                <p className="text-xs text-gray-400 mt-1">{hub.note}</p>
              </Link>
            ))}
          </div>

          <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-4">
            Our coverage does not end at the major towns. We maintain treatment pages and local pricing data for every town in the county — including small market towns, coastal villages, and rural parishes where finding a nearby provider requires knowing which hub clinic to travel to and how far that journey is. This depth of coverage is what separates a genuine local resource from a generic national directory with an Essex filter applied.
          </p>
        </section>

        {/* Data accuracy commitment */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-7 h-7 text-brand-600 flex-shrink-0" />
            <h2 className="text-3xl font-display font-bold text-gray-900">Our Data Accuracy Commitment</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Local Price Ranges</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every town and treatment combination on this site carries a local price range — not a national average. We research local Invisalign pricing for each Essex market by treatment type (crowded teeth, overbite, gaps, underbite, crossbite, and adult cases) and position each town's range relative to its nearest hub city.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Price data is updated annually. We present ranges rather than specific quotes because Invisalign costs are legitimately case-dependent — a mild relapse treated with Invisalign Lite and a severe crowding case requiring Comprehensive with full IPR protocols should not carry the same price. Our ranges reflect the real spread across a typical caseload at each provider tier.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Verification Standards</h3>
              <div className="space-y-3">
                {[
                  { label: 'GDC registration', detail: 'Verified against the public GDC register. Re-verified annually and on any patient report.' },
                  { label: 'Invisalign tier', detail: 'Confirmed via Align Technology\'s provider database. Re-verified each January certification cycle.' },
                  { label: 'Google ratings', detail: 'Checked at listing and monitored quarterly. 90-day watchlist for practices falling below 4.5 stars.' },
                  { label: 'Pricing data', detail: 'Researched locally per treatment type. Updated annually. We do not use national average data.' },
                  { label: 'Wait time data', detail: 'Based on availability data from listed practices. Updated quarterly.' },
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
          <p className="text-gray-700 leading-relaxed mb-4">
            This arrangement does not influence which practices are listed (all must meet our five criteria), the order in which practices appear (ordered by tier and rating, not by advertising spend), the ratings we display (sourced from Google, not reported by the clinic), or any editorial content on this site (produced independently of the clinics we list).
          </p>
          <p className="text-gray-700 leading-relaxed">
            We disclose this arrangement here and on every clinic profile page. If you have questions about our commercial model, contact us directly using the details below.
          </p>
        </section>

        {/* ── MANDATORY CONTACT ELEMENTS ──────────────────────────────────
            CHECKLIST FOR LAUNCH — all fields below must be populated
            with real, verifiable information before the site goes live.
            A YMYL site with incomplete contact information is a direct
            quality rater flag. "Contact us" forms alone are insufficient.

            Required:
              ✓ Registered company name
              ✓ Company registration number (Companies House)
              ✓ Registered office address (physical address, not PO Box)
              ✓ Contact email (not a form — a real address)
              ✓ Contact telephone number
              ✓ VAT number (if VAT registered)

            The address must be a genuine physical address associated with
            the registered company. A residential address is acceptable
            for a small company and is preferable to a virtual office
            address, which QRG raters recognise as a low-trust signal.
            ─────────────────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-7 h-7 text-brand-600 flex-shrink-0" />
            <h2 className="text-3xl font-display font-bold text-gray-900">Contact & Company Details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact methods */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  {/* REPLACE WITH REAL EMAIL */}
                  <a href="mailto:hello@invisaligndentistsessex.uk" className="text-brand-700 hover:underline">
                    hello@invisaligndentistsessex.uk
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">We respond within 2 working days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  {/* REPLACE WITH REAL TELEPHONE */}
                  <a href="tel:+441234000000" className="text-brand-700 hover:underline">
                    [+44 XXXX XXXXXX]
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Monday–Friday 9am–5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Correspondence Address</p>
                  {/* REPLACE WITH REAL PHYSICAL ADDRESS */}
                  <address className="not-italic text-gray-700 text-sm">
                    [Registered Office Address]<br />
                    [Street]<br />
                    [Town], [County]<br />
                    [Postcode]<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>

            {/* Company details */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company Information</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3 text-sm">

                <div className="flex justify-between items-start gap-4">
                  <span className="text-gray-500 flex-shrink-0">Registered name</span>
                  {/* REPLACE WITH REAL COMPANY NAME */}
                  <span className="text-gray-900 font-medium text-right">[Company Name Ltd]</span>
                </div>

                <div className="flex justify-between items-start gap-4 border-t border-gray-200 pt-3">
                  <span className="text-gray-500 flex-shrink-0">Company number</span>
                  {/* REPLACE WITH REAL COMPANIES HOUSE NUMBER */}
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline font-medium text-right"
                  >
                    [XXXXXXXX]
                  </a>
                </div>

                <div className="flex justify-between items-start gap-4 border-t border-gray-200 pt-3">
                  <span className="text-gray-500 flex-shrink-0">Registered in</span>
                  <span className="text-gray-900 font-medium text-right">England and Wales</span>
                </div>

                <div className="flex justify-between items-start gap-4 border-t border-gray-200 pt-3">
                  <span className="text-gray-500 flex-shrink-0">VAT number</span>
                  {/* REPLACE WITH REAL VAT NUMBER — or remove row if not VAT registered */}
                  <span className="text-gray-900 font-medium text-right">GB [XXX XXXX XX]</span>
                </div>

                <div className="flex justify-between items-start gap-4 border-t border-gray-200 pt-3">
                  <span className="text-gray-500 flex-shrink-0">ICO registration</span>
                  {/* REPLACE WITH REAL ICO NUMBER — required for any site collecting personal data */}
                  <a
                    href="https://ico.org.uk/about-the-ico/what-we-do/register-of-fee-payers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline font-medium text-right"
                  >
                    [ZXXXXXXX]
                  </a>
                </div>

              </div>

              {/* Legal links */}
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/privacy-policy/" className="text-brand-700 hover:underline">Privacy Policy</Link>
                <Link href="/terms/" className="text-brand-700 hover:underline">Terms of Use</Link>
                <Link href="/cookie-policy/" className="text-brand-700 hover:underline">Cookie Policy</Link>
                <Link href="/editorial-policy/" className="text-brand-700 hover:underline">Editorial Policy</Link>
              </div>
            </div>

          </div>
        </section>

        {/* Mandatory contact elements launch checklist
            ─────────────────────────────────────────────────────────────────
            INTERNAL REFERENCE — remove before publishing or move to
            a private admin document. Lists every contact element that
            must be real and complete before the About Us page can be
            considered a trust-passing asset by Quality Raters.
            ─────────────────────────────────────────────────────────────── */}
        <section className="border-2 border-dashed border-amber-300 rounded-xl p-6 bg-amber-50">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-amber-900">LAUNCH CHECKLIST — Contact Elements (remove this block before go-live)</h3>
          </div>
          <div className="space-y-2 text-sm text-amber-800">
            {[
              { done: false, item: 'Registered company name confirmed and matches Companies House record' },
              { done: false, item: 'Company registration number verified and links to live Companies House entry' },
              { done: false, item: 'Registered office address is a real physical address (not PO Box or virtual office)' },
              { done: false, item: 'Contact email address is live, monitored, and responds within 2 working days' },
              { done: false, item: 'Contact telephone number is live and answered during stated hours' },
              { done: false, item: 'VAT number added (or row removed if not VAT registered)' },
              { done: false, item: 'ICO registration number confirmed — required for lead capture forms' },
              { done: false, item: 'Privacy Policy live and linked (required by UK GDPR for lead capture)' },
              { done: false, item: 'Terms of Use live and linked' },
              { done: false, item: 'Cookie Policy live and linked (required by PECR)' },
              { done: false, item: 'About Us page reviewed by a human — not obviously AI-generated' },
              { done: false, item: 'Editorial Policy live and linked from About Us' },
              { done: false, item: 'Advisory Board page live with at least one active member' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-2 ${item.done ? 'line-through opacity-50' : ''}`}>
                <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded border-2 ${item.done ? 'bg-green-500 border-green-500' : 'border-amber-400'}`} />
                <span>{item.item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
