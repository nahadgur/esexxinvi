'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const clusters = [
  {
    slug: 'costs',
    label: 'Costs & Financing',
    description: 'Everything you need to know about Invisalign pricing, payment plans, and what your insurance actually covers.',
    articles: [
      { title: 'The True Cost of Invisalign in the UK (2026)', href: '/guides/costs/true-cost-invisalign-uk/', mins: 8 },
      { title: 'Can I Get Invisalign on the NHS?', href: '/guides/costs/invisalign-nhs-essex/', mins: 7 },
      { title: 'Invisalign Payment Plans & 0% Finance Explained', href: '/guides/costs/financing-payment-plans/', mins: 6 },
      { title: 'Does Health Insurance Cover Invisalign?', href: '/guides/costs/private-health-insurance-cover/', mins: 5 },
    ],
  },
  {
    slug: 'comparisons',
    label: 'Comparing Your Options',
    description: 'How Invisalign stacks up against braces, other aligner brands, and why the provider you choose matters as much as the product.',
    articles: [
      { title: 'Invisalign vs. Traditional Braces: Which Is Right for You?', href: '/guides/comparisons/invisalign-vs-traditional-braces/', mins: 7 },
      { title: 'Invisalign vs. Spark vs. ClearCorrect: Brand Comparison', href: '/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/', mins: 6 },
      { title: 'Ceramic Braces vs. Invisalign', href: '/guides/comparisons/ceramic-braces-vs-invisalign/', mins: 5 },
      { title: 'The Dangers of At-Home Mail-Order Aligners', href: '/guides/comparisons/dangers-of-at-home-mail-order-aligners/', mins: 5 },
    ],
  },
  {
    slug: 'treatment-process',
    label: 'Treatment & Results',
    description: 'What actually happens during Invisalign treatment — from first scan to final retainer.',
    articles: [
      { title: 'How Long Does Invisalign Take? (By Case Type)', href: '/guides/treatment-process/how-long-does-invisalign-take/', mins: 6 },
      { title: 'The Invisalign Journey: Step by Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/', mins: 7 },
      { title: 'Does Invisalign Hurt?', href: '/guides/treatment-process/does-invisalign-hurt/', mins: 5 },
      { title: 'Invisalign Diet & Food Rules Explained', href: '/guides/treatment-process/invisalign-diet-food-rules/', mins: 5 },
      { title: 'Invisalign Attachments & Buttons: What to Expect', href: '/guides/treatment-process/invisalign-attachments-buttons/', mins: 5 },
    ],
  },
  {
    slug: 'local',
    label: 'Essex Patient Guides',
    description: 'Guides written specifically for Essex patients — from busy commuters to parents of teens planning their consultation.',
    articles: [
      { title: 'Questions to Ask at Your Invisalign Consultation', href: '/guides/local/top-questions-invisalign-consultation/', mins: 5 },
      { title: 'Parents\' Guide to Invisalign Teen in Essex', href: '/guides/local/parents-guide-invisalign-teen/', mins: 6 },
      { title: 'The Essex Commuter\'s Guide to Invisalign', href: '/guides/local/essex-commuter-guide-invisalign/', mins: 5 },
      { title: 'Invisalign Wedding Timeline for Essex Brides & Grooms', href: '/guides/local/wedding-invisalign-timeline-essex/', mins: 6 },
    ],
  },
];

export default function GuidesIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ background: 'var(--cream)' }}>

        {/* Hero */}
        <section style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '720px' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Patient Guides</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
              Invisalign Guides for Essex Patients
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '600px' }}>
              Medically accurate, jargon-free guides to every aspect of Invisalign — costs, choosing a provider, what treatment involves, and the conditions it treats. Written for Essex patients by a team with direct clinical experience of the local market.
            </p>
          </div>
        </section>

        {/* Clusters */}
        <section style={{ padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)' }}>
          <div style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {clusters.map(cluster => (
              <div key={cluster.slug}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '2px solid var(--sage-pale)' }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                      {cluster.label}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{cluster.description}</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} className="two-col-sm-grid">
                  {cluster.articles.map(article => (
                    <Link
                      key={article.href}
                      href={article.href}
                      style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.15s' }}
                      className="guide-card"
                    >
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, marginBottom: '10px', flex: 1 }}>{article.title}</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{article.mins} min read →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)', background: 'var(--sage)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
            Ready to find a provider?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginBottom: '28px', lineHeight: 1.7 }}>
            Free consultations, free 3D scans, written quotes — no obligation.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} style={{ padding: '13px 32px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
              Get Matched Free
            </button>
            <Link href="/locations/" style={{ padding: '13px 28px', background: 'transparent', color: 'rgba(255,255,255,0.8)', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '40px', textDecoration: 'none' }}>
              Browse by Location →
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .guide-card:hover { border-color: #c8d9c9 !important; background: var(--sage-pale) !important; }
        @media (max-width: 640px) { .two-col-sm-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
