'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const tiers = [
  {
    name: 'Invisalign Express',
    range: '3 – 6 months',
    aligners: 'Up to 7',
    changes: 'Every 1–2 weeks',
    clinicVisits: '2–3 total',
    bestFor: 'Minor relapse after childhood braces, single small gap, very mild crowding of 1–2 front teeth. Cases where less than 2mm of movement is required across the arch.',
    notFor: 'Bite correction of any kind, moderate or severe crowding, multiple gaps, rotation of back teeth.',
    color: 'var(--sage-pale)',
    border: '#c8d9c9',
  },
  {
    name: 'Invisalign Lite',
    range: '6 – 9 months',
    aligners: 'Up to 14',
    changes: 'Every 1–2 weeks',
    clinicVisits: '4–5 total',
    bestFor: 'Mild-to-moderate crowding across the arch, multiple small gaps, mild overbite with no skeletal component, cases where 2–4mm of movement is required.',
    notFor: 'Deep overbite, underbite, crossbite, severe crowding requiring significant arch expansion or IPR.',
    color: '#EDF2EE',
    border: '#b8d0ba',
  },
  {
    name: 'Invisalign Comprehensive',
    range: '12 – 24+ months',
    aligners: 'Unlimited',
    changes: 'Every 1–2 weeks',
    clinicVisits: '8–12+ total',
    bestFor: 'Complex crowding, overbite, underbite, crossbite, open bite, full arch corrections, cases requiring Precision Wings or Class II/III elastic integration.',
    notFor: 'Nothing — this covers the full range of cases suitable for clear aligner treatment.',
    color: 'var(--sage)',
    border: 'var(--sage)',
    dark: true,
  },
];

const delays = [
  {
    title: 'Insufficient wear time',
    detail: 'The most common reason treatment runs longer than projected. Each tray is designed for a specific amount of tooth movement assuming 20–22 hours of daily wear. Consistently wearing aligners for 16–18 hours instead of 22 means teeth arrive at each new tray\'s target position late — or not at all. The result is tracking failure and additional refinement aligners. Every extra refinement set adds 4–8 weeks to your total treatment time.',
    severity: 'high',
  },
  {
    title: 'Missed or delayed appointments',
    detail: 'Check-up appointments at 6–8 week intervals serve a clinical function: your dentist confirms that tracking is on course and authorises progression. A missed appointment that pushes back by even three weeks affects the refinement timing at the end of treatment and delays the final result. Two or three missed appointments in a 12-month treatment can add two months to the overall timeline.',
    severity: 'medium',
  },
  {
    title: 'Slower-than-predicted tooth movement',
    detail: 'ClinCheck creates a mathematically precise projection of tooth movement. Biological reality sometimes diverges from the model — teeth move through bone at rates influenced by age, bone density, gum health, and individual biology. Some teeth simply move more slowly than the software predicted. This is normal, it is not a sign of treatment failure, and it is why Comprehensive treatment includes unlimited aligners. It does, however, extend the timeline.',
    severity: 'medium',
  },
  {
    title: 'Lost or damaged aligners',
    detail: 'A lost aligner requires going back to the previous set while a replacement is manufactured — a two to three week delay per incident. Aligners removed at restaurants or wrapped in napkins are the most common casualty. Keep the case with you at all times.',
    severity: 'low',
  },
  {
    title: 'Unplanned refinement phases',
    detail: 'Even with perfect wear compliance, some cases require more refinement rounds than initially anticipated. This is most common in complex Comprehensive cases involving difficult movements like deep bite correction or significant rotation. A single unexpected refinement phase adds approximately six to eight weeks.',
    severity: 'low',
  },
];

export default function TimelineClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ background: 'var(--cream)' }}>

        {/* Hero */}
        <section style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', gap: '6px', fontSize: '12px', color: 'var(--muted)', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/guides/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>
              <span>/</span>
              <Link href="/guides/treatment-process/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Treatment Process</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>How Long Does Invisalign Take?</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Process · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              How Long Does Invisalign Actually Take?<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Real Timelines for 2026</em>
            </h1>
            <p style={pStyle}>
              The figure most often cited — 12 to 18 months — is accurate for the most common treatment type. But it is a range that covers moderate-complexity adult cases using Invisalign Comprehensive. For simple cases, treatment can be complete in three months. For complex cases involving significant bite correction, it can run to 24 months or beyond. The actual duration depends almost entirely on three things: how much movement your teeth need, which Invisalign product your case calls for, and how consistently you wear your aligners.
            </p>
            <p style={pStyle}>
              This guide gives you realistic, tier-specific timelines — not marketing averages — and explains honestly what makes treatment run longer than planned.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Timelines by tier */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Timelines by Invisalign Tier</h2>
              <p style={pStyle}>
                Align Technology produces three main treatment tiers for adult orthodontics. The tier your provider recommends is determined by the clinical complexity of your case — specifically, how many teeth need to move, how far, and in what direction. Here is what each tier involves in terms of time and commitment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '28px 0' }}>
                {tiers.map(tier => (
                  <div key={tier.name} style={{ background: tier.dark ? tier.color : tier.color, border: `1px solid ${tier.border}`, borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: tier.dark ? '#fff' : 'var(--ink)', margin: 0 }}>{tier.name}</h3>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: tier.dark ? 'rgba(255,255,255,0.9)' : 'var(--sage)' }}>{tier.range}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '16px' }}>
                      {[
                        { label: 'Aligners', value: tier.aligners },
                        { label: 'Tray changes', value: tier.changes },
                        { label: 'Clinic visits', value: tier.clinicVisits },
                      ].map(stat => (
                        <div key={stat.label}>
                          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: tier.dark ? 'rgba(255,255,255,0.5)' : 'var(--muted)', marginBottom: '3px' }}>{stat.label}</p>
                          <p style={{ fontSize: '13px', fontWeight: 500, color: tier.dark ? 'rgba(255,255,255,0.85)' : 'var(--ink)', margin: 0 }}>{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: '13px', color: tier.dark ? 'rgba(255,255,255,0.75)' : 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                      <strong style={{ color: tier.dark ? 'rgba(255,255,255,0.9)' : 'var(--ink)', fontWeight: 600 }}>Best for: </strong>{tier.bestFor}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                Treatment duration figures assume full 20–22 hour daily wear compliance. Actual timelines are confirmed at your free 3D scan consultation. Refinement phases may extend the total duration.
              </p>
            </section>

            {/* H2: Factors that delay */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Factors That Delay Your Progress</h2>
              <p style={pStyle}>
                The ClinCheck treatment plan your dentist creates is a projection, not a guarantee. Several factors can extend your treatment beyond the initial estimate — some within your control, some not.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {delays.map(d => (
                  <div key={d.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px', background: d.severity === 'high' ? '#FEF3F2' : d.severity === 'medium' ? '#FFFBEB' : 'var(--sage-pale)', color: d.severity === 'high' ? '#B42318' : d.severity === 'medium' ? '#8B6914' : 'var(--sage)' }}>
                      {d.severity === 'high' ? 'High impact' : d.severity === 'medium' ? 'Medium' : 'Low impact'}
                    </span>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{d.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* H2: Find out your exact timeline */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Find Out Your Exact Timeline</h2>
              <p style={pStyle}>
                Every ClinCheck treatment plan specifies exactly how many aligners your case requires and at what interval — which gives a precise projected treatment duration from the first set to the last. That figure is confirmed at your free consultation after the iTero 3D scan. There is no reliable way to estimate your timeline accurately before that scan.
              </p>
              <p style={pStyle}>
                If you already have a sense of what your case involves, the links below connect you directly to location pages for specific treatments — so you can find verified providers near you for the correction type most relevant to your situation.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Find Essex providers by treatment type:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }} className="two-col-sm-grid">
                  {[
                    { label: 'Express in Chelmsford (minor corrections)', href: '/locations/chelmsford/adults/' },
                    { label: 'Express in Harlow', href: '/locations/harlow/adults/' },
                    { label: 'Overbite providers in Essex', href: '/locations/chelmsford/overbite/' },
                    { label: 'Crowded teeth in Colchester', href: '/locations/colchester/crowded/' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none', display: 'block' }}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Browse all 111 Essex towns →</Link>
                  <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px 22px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Get Matched Free</button>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Timeline Summary</p>
              {[{ tier: 'Express', range: '3 – 6 months' }, { tier: 'Lite', range: '6 – 9 months' }, { tier: 'Comprehensive', range: '12 – 24+ months' }].map((t, i) => (
                <div key={t.tier} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: i < 2 ? '12px' : 0, paddingBottom: i < 2 ? '12px' : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{t.tier}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{t.range}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
                { label: 'Does Invisalign Hurt?', href: '/guides/treatment-process/does-invisalign-hurt/' },
                { label: 'True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'Invisalign Attachments Explained', href: '/guides/treatment-process/invisalign-attachments-buttons/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Get your exact timeline</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free 3D scan. ClinCheck shows your full timeline before you commit.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Find Providers Free</button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) { .guide-grid { grid-template-columns: 1fr !important; } .guide-sidebar { position: static !important; } }
        @media (max-width: 640px) { .two-col-sm-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
