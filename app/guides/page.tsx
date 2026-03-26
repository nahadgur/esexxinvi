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
    slug: 'choosing',
    label: 'Choosing a Provider',
    description: 'Why provider tier matters more than any other factor — and how to find the right one for your case in Essex.',
    articles: [
      { title: 'What Is a Platinum or Diamond Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/', mins: 6 },
      { title: 'Invisalign vs. Metal Braces: Which Is Right for You?', href: '/guides/choosing/invisalign-vs-braces/', mins: 7 },
      { title: 'Questions to Ask at Your Free Invisalign Consultation', href: '/guides/choosing/consultation-questions/', mins: 5 },
    ],
  },
  {
    slug: 'treatment',
    label: 'Treatment & Results',
    description: 'What actually happens during Invisalign treatment — from first scan to final retainer.',
    articles: [
      { title: 'How Long Does Invisalign Take? (By Case Type)', href: '/guides/treatment/how-long-does-invisalign-take/', mins: 6 },
      { title: 'What Is ClinCheck? Your 3D Treatment Preview Explained', href: '/guides/treatment/what-is-clincheck/', mins: 5 },
      { title: 'Invisalign Retainers: Why They Are Non-Negotiable', href: '/guides/treatment/invisalign-retainers/', mins: 5 },
    ],
  },
  {
    slug: 'conditions',
    label: 'Conditions We Treat',
    description: 'Clinical guides to each condition Invisalign treats — what it is, how Invisalign fixes it, and how long it takes.',
    articles: [
      { title: 'Invisalign for Crowded Teeth: A Complete Guide', href: '/guides/conditions/crowded-teeth/', mins: 7 },
      { title: 'Invisalign for Overbite: What to Expect', href: '/guides/conditions/overbite/', mins: 6 },
      { title: 'Invisalign for Gaps: Closing Diastema with Clear Aligners', href: '/guides/conditions/gaps/', mins: 6 },
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
