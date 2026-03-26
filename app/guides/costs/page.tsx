'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const articles = [
  {
    title: 'The True Cost of Invisalign in the UK: 2026 Pricing Guide',
    href: '/guides/costs/true-cost-invisalign-uk/',
    description: 'Exact price breakdown by tier — Express from £1,500, Lite from £2,800, Comprehensive up to £5,800. What affects your quote and hidden costs to watch.',
    mins: 8,
  },
  {
    title: 'Can You Get Invisalign on the NHS? (2026 Guide)',
    href: '/guides/costs/invisalign-nhs-essex/',
    description: 'Almost never — but understanding exactly why, and what affordable private options exist, saves you time and sets realistic expectations.',
    mins: 7,
  },
  {
    title: 'How to Finance Your Smile: Invisalign Payment Plans Explained',
    href: '/guides/costs/financing-payment-plans/',
    description: '0% finance terms, FCA regulation, hard vs soft credit checks, and worked monthly cost examples across all three treatment tiers.',
    mins: 6,
  },
  {
    title: 'Does UK Private Health Insurance Cover Invisalign?',
    href: '/guides/costs/private-health-insurance-cover/',
    description: 'Standard policies exclude it. Premium dental add-ons offer limited benefits. Here is what Bupa, AXA, Aviva and Denplan actually provide — and what works instead.',
    mins: 5,
  },
];

export default function CostsIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ background: 'var(--cream)' }}>
        <section style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', gap: '6px', fontSize: '12px', color: 'var(--muted)', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/guides/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Costs &amp; Financing</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Guide Cluster 1</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
              Invisalign Costs &amp; Financing
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '600px' }}>
              Four guides covering everything Essex adults need to know about the cost of Invisalign — from tier-by-tier pricing to payment plans, insurance, and NHS funding.
            </p>
          </div>
        </section>

        <section style={{ padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)' }}>
          <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {articles.map((a, i) => (
              <Link key={a.href} href={a.href} style={{ display: 'flex', gap: '20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 24px', textDecoration: 'none', alignItems: 'flex-start', transition: 'border-color 0.15s' }} className="guide-card">
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>{i + 1}</div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.35 }}>{a.title}</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '8px' }}>{a.description}</p>
                  <span style={{ fontSize: '12px', color: 'var(--sage)', fontWeight: 500 }}>{a.mins} min read →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ maxWidth: '760px', marginTop: '32px', padding: '20px 24px', background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>Done reading? Get a free quote.</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Free iTero scan and written quote from verified Essex providers. No obligation.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer', flexShrink: 0 }}>
              Get Matched Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.guide-card:hover { border-color: #c8d9c9 !important; background: var(--sage-pale) !important; }`}</style>
    </>
  );
}
