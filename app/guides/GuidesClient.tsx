'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface HubCard {
  slug: string;
  title: string;
  heroBadge: string;
  heroDirectAnswer: string;
}

export default function GuidesClient({ hubs }: { hubs: HubCard[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main id="main" className="flex-grow">
        <div className="container-width max-w-4xl py-16">
          <Breadcrumbs items={[{ label: 'Guides' }]} />
          <header className="mt-6 mb-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
              Invisalign guides for Essex
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ten plain-English guides to Invisalign in Essex: cost, the treatment process, how it compares with braces, living with aligners, comfort, teens and adults, what it can fix, the local picture, and choosing a provider. Written and reviewed by the Invisalign Dentists Essex editorial team.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-5">
            {hubs.map(hub => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}/`}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-brand-400 hover:shadow-sm transition"
              >
                <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-2">{hub.heroBadge}</div>
                <h2 className="text-lg font-display font-bold text-gray-900 mb-2">{hub.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{hub.heroDirectAnswer}</p>
                <span className="inline-block mt-3 text-sm font-medium text-brand-600">Open guide →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Prefer to talk it through? Match with verified Essex providers, free.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">Find a provider</button>
          </div>
        </div>
      </main>
    </>
  );
}
