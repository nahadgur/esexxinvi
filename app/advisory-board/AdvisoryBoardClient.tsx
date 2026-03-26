'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

// app/advisory-board/AdvisoryBoardClient.tsx
import Link from 'next/link';
import { ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { getActiveBoardMembers } from '@/data/advisory/board-members';

const gdcCheckUrl = 'https://www.gdc-uk.org/registration/your-registration/check-a-dental-professionals-registration';

export default function AdvisoryBoardClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const members = getActiveBoardMembers();

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="bg-white">

      <section className="bg-gray-900 text-white py-16">
        <div className="container-width max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
            <ShieldCheck className="w-4 h-4" /> Independent Medical Oversight
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">
            Medical Advisory Board
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            All clinical content on this site is reviewed by a GDC-registered dentist before publication. Our Advisory Board members are independent of every clinic listed in our directory.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-50 border-b border-brand-100">
        <div className="container-width max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">What they review</p>
                <p>All treatment condition descriptions and Invisalign mechanism explanations on <code className="bg-white px-1 rounded">/treatments/</code> pages — checking clinical accuracy against peer-reviewed sources.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BookOpen className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Their independence</p>
                <p>Advisory Board members declare annually that they hold no financial interest in any clinic listed on this directory. Their fee is fixed and not linked to any listing decision.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ExternalLink className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Independent verification</p>
                <p>Every member&apos;s GDC registration number is listed below. You can verify at{' '}
                  <a href={gdcCheckUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">gdc-uk.org</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-width max-w-4xl">
          {members.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p>Advisory board member profiles will appear here once onboarding is complete.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {members.map(member => (
                <div key={member.slug} id={member.slug} className="grid md:grid-cols-4 gap-8 border border-gray-200 rounded-2xl p-8">
                  <div className="md:col-span-1 flex flex-col items-center text-center">
                    {member.avatarUrl ? (
                      <img src={member.avatarUrl} alt={member.name} className="w-28 h-28 rounded-full object-cover border-4 border-brand-100 mb-4" />
                    ) : (
                      <div className="w-28 h-28 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-3xl mb-4">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                    <h2 className="font-display font-bold text-gray-900 text-lg">{member.name}</h2>
                    <p className="text-sm text-gray-500 mb-3">{member.qualifications}</p>
                    <a href={gdcCheckUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs bg-green-50 border border-green-200 text-green-800 rounded-full px-3 py-1.5 hover:bg-green-100 transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      GDC {member.gdcNumber}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-brand-50 border border-brand-100 text-brand-700 rounded-full px-3 py-1">
                        {member.practiceName}, {member.practiceLocality}
                      </span>
                      {member.invisalignTier && (
                        <span className="text-xs bg-blue-50 border border-blue-100 text-blue-700 rounded-full px-3 py-1">
                          Invisalign {member.invisalignTier}
                        </span>
                      )}
                    </div>
                    <div className="prose prose-sm prose-gray max-w-none text-gray-700 leading-relaxed space-y-3">
                      {member.bioFull.split('\n\n').filter(Boolean).map((para, i) => (
                        <p key={i}>{para.trim()}</p>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                      Reviews: {member.reviewedTreatments.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-width max-w-2xl text-center">
          <h2 className="text-xl font-display font-bold text-gray-900 mb-3">
            Are you a GDC-registered dentist with Invisalign experience?
          </h2>
          <p className="text-gray-600 mb-6">
            We periodically expand our Advisory Board. Board members receive a fixed advisory fee for periodic content review and are publicly credited on reviewed pages.
          </p>
          <Link href="/contact/?subject=Advisory+Board+Enquiry"
            className="inline-block bg-brand-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-700 transition-colors">
            Express Interest
          </Link>
        </div>
      </section>

    </main>
      <Footer />
    </>
  );
}
