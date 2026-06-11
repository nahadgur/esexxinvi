'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import type { GuideHub } from '@/data/guides';

interface SpokeLink { slug: string; title: string; excerpt: string }
interface PillarLink { slug: string; title: string }
interface HubLink { slug: string; title: string }

interface Props {
  hub: GuideHub;
  spokes: SpokeLink[];
  treatments: PillarLink[];
  adjacentHubs: HubLink[];
}

export default function GuideHubClient({ hub, spokes, treatments, adjacentHubs }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const words = hub.sections
    .flatMap(s => s.paragraphs)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const readMins = Math.max(3, Math.round(words / 200));

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main id="main" className="flex-grow">
        <article className="container-width max-w-3xl py-16">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: hub.title }]} />

          <header className="mt-6 mb-10">
            <div className="mt-4">
              <SpokeHero
                title={hub.title}
                hubName="Guide"
                hubSlug={hub.slug}
                readMins={readMins}
              />
            </div>
            <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-3 mt-8">{hub.heroBadge}</div>
            <h1 className="sr-only">{hub.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{hub.heroDirectAnswer}</p>
            <div className="text-sm text-gray-500 mt-4 flex flex-wrap gap-4">
              <span>By <Link href="/about-us/" className="text-brand-600 hover:underline">IDE</Link></span>
              <span>Last reviewed <time dateTime={hub.lastReviewedAt}>{new Date(hub.lastReviewedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time></span>
            </div>
          </header>

          {/* Key points */}
          <div className="rounded-2xl bg-sage-50 border border-gray-100 p-6 mb-10" style={{ background: 'var(--sage-light, #f3f6f3)' }}>
            <p className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-3">The short answer</p>
            <ul className="space-y-2">
              {hub.keyPoints.map((p, i) => (
                <li key={i} className="flex gap-2 text-gray-700"><span className="text-brand-600">•</span><span>{p}</span></li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="prose prose-lg max-w-none">
            {hub.sections.map((s, i) => (
              <section key={i}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((para, j) => <p key={j}>{para}</p>)}
              </section>
            ))}
          </div>

          {/* Spoke grid (published only) */}
          {spokes.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-5">Guides in this series</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {spokes.map(sp => (
                  <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="block rounded-xl border border-gray-200 p-5 hover:border-brand-400 hover:shadow-sm transition">
                    <h3 className="font-semibold text-gray-900 mb-1">{sp.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{sp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Treatment pillars */}
          {treatments.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-5">Related treatments</h2>
              <div className="flex flex-wrap gap-3">
                {treatments.map(t => (
                  <Link key={t.slug} href={`/treatments/${t.slug}/`} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-400 hover:text-brand-600 transition">
                    {t.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Adjacent hubs */}
          {adjacentHubs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-5">Continue across the guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {adjacentHubs.map(h => (
                  <Link key={h.slug} href={`/guides/${h.slug}/`} className="block rounded-xl border border-gray-200 p-5 hover:border-brand-400 hover:shadow-sm transition">
                    <h3 className="font-semibold text-gray-900">{h.title}</h3>
                    <span className="text-sm text-brand-600">Open guide →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {hub.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-5">{hub.shortTitle} questions</h2>
              <div className="space-y-5">
                {hub.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <footer className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Match with verified Platinum Invisalign providers across Essex. Free, no obligation.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">Find a provider</button>
          </footer>
        </article>
      </main>
    </>
  );
}
