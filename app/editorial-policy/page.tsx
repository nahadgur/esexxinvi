'use client';

// app/editorial-policy/page.tsx
//
// EDITORIAL POLICY — /editorial-policy/
//
// E-E-A-T function: Satisfies QRG scrutiny on:
//   "Who created this content and are they qualified to do so?"
//   "Is there a process for keeping medical information accurate and current?"
//
// This page is the written SOP for how treatment content is produced,
// reviewed, and maintained. It is linked from:
//   - Every /treatments/[service]/ page (via MedicallyReviewedBy component)
//   - The site footer
//   - The /how-we-vet-providers/ page
//   - The About page

import Link from 'next/link';
import type { Metadata } from 'next';
import { FileText, RefreshCw, UserCheck, AlertTriangle, BookOpen, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial Policy | How We Create and Review Medical Content',
  description: 'Our editorial policy for treatment information pages. All clinical content on Invisalign Dentists Essex is written by dental-trained writers and reviewed by a registered GDC dentist.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/editorial-policy/' },
};

export default function EditorialPolicyPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-width max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
            <FileText className="w-4 h-4" /> Last updated: January 2025
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">
            Editorial Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            How we produce, review, and maintain the clinical information on this site — and who is responsible for its accuracy.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="container-width max-w-3xl py-16 space-y-14 text-gray-700 leading-relaxed">

        {/* 1. Scope */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">1. Scope of This Policy</h2>
          </div>
          <p className="mb-4">
            This policy applies to all content on <strong>treatment information pages</strong> — specifically every page at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/treatments/[service]/</code> and the condition description sections of location pages at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/locations/[town]/[service]/</code>.
          </p>
          <p className="mb-4">
            This includes: descriptions of dental conditions (crowding, overbite, underbite, crossbite, gaps), explanations of Invisalign treatment mechanics, duration information, clinical process descriptions, and any statement about what a patient can or cannot expect from clear aligner treatment.
          </p>
          <p>
            This policy does <strong>not</strong> apply to commercial copy (pricing sections, provider listings, call-to-action text), which is produced by our commercial editorial team and does not require clinical review.
          </p>
        </section>

        {/* 2. Content Creation Process */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">2. Content Creation Process</h2>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">2.1 Research Standards</h3>
          <p className="mb-4">
            All clinical treatment descriptions are researched using primary sources: peer-reviewed publications in the British Dental Journal (BDJ), the Journal of Orthodontics, and the American Journal of Orthodontics and Dentofacial Orthopedics. Align Technology's published clinical documentation is used as the primary source for Invisalign-specific product information (ClinCheck, SmartForce attachments, Precision Wings).
          </p>
          <p className="mb-6">
            We do not cite or reproduce content from other dental aggregator sites, SEO-optimised dental blog posts, or AI-generated content as primary sources.
          </p>

          <h3 className="font-semibold text-gray-900 mb-2">2.2 Author Qualifications</h3>
          <p className="mb-6">
            Clinical content is written by writers with verifiable dental education backgrounds — either a BDS (Bachelor of Dental Surgery) or a postgraduate dental qualification, or a dental sciences degree with demonstrated clinical writing experience. Author credentials are verified before commission and are available on request.
          </p>

          <h3 className="font-semibold text-gray-900 mb-2">2.3 Medical Review Stage</h3>
          <p className="mb-4">
            All clinical content is reviewed by a member of our Medical Advisory Board before publication. The reviewing dentist is a currently GDC-registered general dental practitioner with Invisalign clinical experience.
          </p>
          <p className="mb-4">
            The review process covers:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
            <li>Clinical accuracy of condition descriptions and treatment mechanism explanations</li>
            <li>Accuracy of treatment duration ranges (these must align with published clinical literature)</li>
            <li>Accuracy of statements about Invisalign technology (attachments, Precision Wings, ClinCheck)</li>
            <li>Absence of absolute claims that cannot be substantiated (e.g., "guaranteed results", "painless")</li>
            <li>Compliance with GDC advertising guidance and the Committee of Advertising Practice (CAP) codes for dental marketing</li>
          </ul>
          <p>
            Content that fails review is returned to the writer with specific annotations. It is not published until a revised version has been approved.
          </p>
        </section>

        {/* 3. Update and Review Cycle */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">3. Update and Review Cycle</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Routine Review — Every 12 Months</h3>
              <p className="text-sm">All treatment information pages are scheduled for full review annually. The reviewing dentist re-reads the complete page, checks against any developments in Invisalign clinical literature published since the last review, and either approves the content as current or flags sections for revision.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Triggered Review — Immediately</h3>
              <p className="text-sm">A triggered review is initiated when: Align Technology publishes a new product (new attachment type, new aligner formulation, new treatment category), a relevant systematic review or meta-analysis is published in a peer-reviewed journal, or a patient or practitioner contacts us to dispute a clinical claim.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Last Reviewed Date</h3>
              <p className="text-sm">Every treatment page displays a "Medically reviewed" date stamp showing the most recent review date and the name and GDC number of the reviewing dentist. This is updated each time the page passes clinical review, whether or not substantive changes were made.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Version Control</h3>
              <p className="text-sm">All treatment content is stored in a version-controlled content management system. Every edit is timestamped and attributed. Previous versions are retained and can be surfaced for audit purposes.</p>
            </div>
          </div>
        </section>

        {/* 4. Medical Advisory Board */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">4. Medical Advisory Board</h2>
          </div>
          <p className="mb-4">
            Our Medical Advisory Board consists of currently practising, GDC-registered dentists who review clinical content on a paid advisory basis. Advisory Board members have no financial interest in any clinic listed on this directory — they are engaged exclusively to assess content accuracy.
          </p>
          <p className="mb-4">
            Advisory Board members must:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
            <li>Hold current, active GDC registration with no fitness to practise conditions</li>
            <li>Have a minimum of 3 years' post-qualification experience in general dental practice</li>
            <li>Hold or have held Invisalign provider status (any tier)</li>
            <li>Complete our conflict of interest declaration annually, confirming no financial relationship with any listed practice</li>
          </ul>
          <p>
            Board members are publicly identified on the <Link href="/advisory-board/" className="text-brand-700 underline hover:no-underline">Advisory Board page</Link> with their GDC number, qualification, and area of practice. Readers can verify GDC registration independently at <a href="https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline hover:no-underline">gdc-uk.org</a>.
          </p>
        </section>

        {/* 5. What We Do Not Do */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">5. What This Site Does Not Do</h2>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-amber-900">
              <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">✕</span> We do not provide individual dental advice or respond to clinical questions about specific patients' cases.</li>
              <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">✕</span> We do not recommend one clinic over another for any individual patient's specific clinical situation — we provide directory information only.</li>
              <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">✕</span> We do not publish before/after treatment photographs of patients from listed clinics.</li>
              <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">✕</span> We do not make claims about guaranteed treatment outcomes.</li>
              <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">✕</span> We do not republish or summarise individual clinic marketing materials as editorial content.</li>
            </ul>
          </div>
        </section>

        {/* 6. Corrections */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">6. Corrections Policy</h2>
          </div>
          <p className="mb-4">
            We welcome corrections from any reader, dental professional, or patient who identifies a clinical inaccuracy on this site. Corrections should be submitted via our <Link href="/contact/" className="text-brand-700 underline hover:no-underline">contact page</Link> with the specific page URL, the passage in question, and the basis for the correction (ideally with a reference to a published source).
          </p>
          <p>
            We will acknowledge corrections within 2 working days and respond with our assessment within 10 working days. Where a correction is upheld, the page is updated immediately and a correction notice is appended to the page until the next scheduled full review.
          </p>
        </section>

      </div>
    </main>
  );
}
