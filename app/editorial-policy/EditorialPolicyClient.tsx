'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

// app/editorial-policy/EditorialPolicyClient.tsx
import Link from 'next/link';
import { FileText, RefreshCw, UserCheck, AlertTriangle, BookOpen, Scale } from 'lucide-react';

export default function EditorialPolicyClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="bg-white">

      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/editorial-policy/hero-writing-notebook.webp" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
        <div className="container-width max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
            <FileText className="w-4 h-4" /> Last updated: January 2025
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">Editorial Policy</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            How we produce, review, and maintain the clinical information on this site — and who is responsible for its accuracy.
          </p>
        </div>
      </section>

      <div className="container-width max-w-3xl py-16 space-y-14 text-gray-700 leading-relaxed">

        <section>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">1. Scope of This Policy</h2>
          </div>
          <p className="mb-4">
            This policy applies to all content on <strong>treatment information pages</strong> — specifically every page at{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/treatments/[service]/</code> and the condition description sections of location pages at{' '}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">/locations/[town]/[service]/</code>.
          </p>
          <p className="mb-4">
            This policy does <strong>not</strong> apply to commercial copy (pricing sections, provider listings, call-to-action text), which is produced by our commercial editorial team and does not require clinical review.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">2. Content Creation Process</h2>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">2.1 Research Standards</h3>
          <p className="mb-6">
            All clinical treatment descriptions are researched using primary sources: peer-reviewed publications in the British Dental Journal, the Journal of Orthodontics, and the American Journal of Orthodontics and Dentofacial Orthopedics. We do not cite or reproduce content from other dental aggregator sites or AI-generated content as primary sources.
          </p>

          <h3 className="font-semibold text-gray-900 mb-2">2.2 Author Qualifications</h3>
          <p className="mb-6">
            Clinical content is written by writers with verifiable dental education backgrounds — either a BDS or postgraduate dental qualification, or a dental sciences degree with demonstrated clinical writing experience.
          </p>

          <h3 className="font-semibold text-gray-900 mb-2">2.3 Medical Review Stage</h3>
          <p className="mb-4">
            All clinical content is reviewed by a member of our Medical Advisory Board before publication. The reviewing dentist is a currently GDC-registered general dental practitioner with Invisalign clinical experience.
          </p>
          <p className="mb-4">The review process covers:</p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
            <li>Clinical accuracy of condition descriptions and treatment mechanism explanations</li>
            <li>Accuracy of treatment duration ranges against published clinical literature</li>
            <li>Accuracy of statements about Invisalign technology</li>
            <li>Absence of absolute claims that cannot be substantiated</li>
            <li>Compliance with GDC advertising guidance and CAP codes</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">3. Update and Review Cycle</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Routine Review — Every 12 Months', body: 'All treatment information pages are scheduled for full review annually. The reviewing dentist re-reads the complete page and either approves the content as current or flags sections for revision.' },
              { title: 'Triggered Review — Immediately', body: 'A triggered review is initiated when Align Technology publishes a new product, a relevant systematic review is published, or a patient or practitioner contacts us to dispute a clinical claim.' },
              { title: 'Last Reviewed Date', body: 'Every treatment page displays a "Medically reviewed" date stamp showing the most recent review date and the GDC number of the reviewing dentist.' },
              { title: 'Version Control', body: 'All treatment content is stored in a version-controlled system. Every edit is timestamped and attributed. Previous versions are retained for audit purposes.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">4. Medical Advisory Board</h2>
          </div>
          <p className="mb-4">
            Our Medical Advisory Board consists of currently practising, GDC-registered dentists who review clinical content on a paid advisory basis. Advisory Board members have no financial interest in any clinic listed on this directory.
          </p>
          <p>
            Board members are publicly identified on the{' '}
            <Link href="/advisory-board/" className="text-brand-700 underline hover:no-underline">Advisory Board page</Link>{' '}
            with their GDC number and qualifications. Readers can verify GDC registration independently at{' '}
            <a href="https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline hover:no-underline">gdc-uk.org</a>.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">5. What This Site Does Not Do</h2>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-amber-900">
              {[
                'We do not provide individual dental advice or respond to clinical questions about specific patients.',
                'We do not recommend one clinic over another for any individual patient\'s specific clinical situation.',
                'We do not publish before/after treatment photographs of patients from listed clinics.',
                'We do not make claims about guaranteed treatment outcomes.',
                'We do not republish clinic marketing materials as editorial content.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-brand-600 flex-shrink-0" />
            <h2 className="text-2xl font-display font-bold text-gray-900">6. Corrections Policy</h2>
          </div>
          <p className="mb-4">
            We welcome corrections from any reader, dental professional, or patient who identifies a clinical inaccuracy. Submit corrections via our{' '}
            <Link href="/contact/" className="text-brand-700 underline hover:no-underline">contact page</Link>{' '}
            with the specific page URL and the basis for the correction.
          </p>
          <p>We acknowledge corrections within 2 working days and respond with our assessment within 10 working days.</p>
        </section>

      </div>
    </main>
      <Footer />
    </>
  );
}
