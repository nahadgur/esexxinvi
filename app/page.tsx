'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { services } from '@/data/services';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { toSlug } from '@/data/locations';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const testimonials = [
  { initials: 'CW', quote: 'My teeth look incredible after just 8 months. The Diamond provider in Chelmsford they matched me with was exceptional.', name: 'Charlotte W.', loc: 'Chelmsford · Full Invisalign' },
  { initials: 'JR', quote: 'Finding a Platinum provider in Brentwood made all the difference. They\'d handled thousands of cases and knew exactly how to manage my bite.', name: 'James R.', loc: 'Brentwood · Full Invisalign' },
  { initials: 'DK', quote: 'Done in 5 months and the results speak for themselves. Great to find a verified top-tier provider in Colchester without all the research.', name: 'Daniel K.', loc: 'Colchester · Invisalign Lite' },
  { initials: 'PM', quote: 'I combined Invisalign with whitening at the end. The transformation is genuinely unreal. Provider had over 1,500 cases under their belt.', name: 'Priya M.', loc: 'Basildon · Invisalign + Whitening' },
];

const featureCards = [
  { title: 'Diamond & Platinum Only', body: 'We list only the top-tier Invisalign providers in Essex by annual case volume — verified independently before joining our network.' },
  { title: 'Free 3D Smile Preview', body: 'Every matched provider includes a free iTero scan and ClinCheck preview — you see your finished smile before agreeing to a single thing.' },
  { title: 'Independently Verified', body: "Every provider's Invisalign tier is checked against Align Technology's records before we list them. No self-reported claims." },
  { title: '0% Finance Available', body: 'Most providers in our Essex network offer interest-free payment plans from £50 a month. Treatment does not have to be a single upfront cost.' },
];

const objections = [
  { q: 'Is Invisalign actually as effective as metal braces?', a: 'For the vast majority of adult cases — including complex crowding, bites, and gaps — yes. The narrow exception is severe skeletal jaw discrepancy requiring surgery, which affects a small minority. Diamond-tier providers routinely handle cases that were braces-only territory five years ago.' },
  { q: 'Why does the provider tier matter so much?', a: 'A dentist who completes 150+ cases a year has far more hands-on experience with difficult movements, access to advanced Invisalign features, and a lower refinement rate than one doing 10 cases. The end result you walk away with reflects that gap directly.' },
  { q: "How is this service free — what's the catch?", a: 'We earn a referral fee from the clinic only if you choose to go ahead with treatment. If you do not proceed, nobody pays anything. Our incentive is to match you with a provider good enough that you actually go ahead.' },
];

const comparisonRows = [
  { label: 'Visibility',          inv: 'Nearly invisible',           braces: 'Visible brackets & wire' },
  { label: 'Eating restrictions', inv: 'None — remove to eat',       braces: 'Long banned-food list' },
  { label: 'Preview your result', inv: '3D animation before you start', braces: 'No preview available' },
  { label: 'Typical duration',    inv: '6 – 18 months',              braces: '18 – 36 months' },
  { label: 'Check-up frequency',  inv: 'Every 6 – 8 weeks',          braces: 'Monthly adjustments' },
];

const faqs = [
  { q: 'What does Invisalign cost across Essex?', a: 'Most Essex clinics in our network price Invisalign between £1,500 and £5,500. Where you land depends on case complexity, which product your dentist recommends, and provider tier. Nearly every provider we work with offers interest-free monthly payments from around £50, so the upfront number is rarely what you actually pay each month.' },
  { q: 'How quickly will I see results?', a: 'Minor cosmetic corrections with Invisalign Express can show results in as few as 10–12 weeks. Moderate cases typically show clear improvement within 3–4 months. Full comprehensive treatment takes 12–18 months, with most patients noticing significant change by month 3.' },
  { q: 'How does your free matching service actually work?', a: 'You fill in a 60-second form with your Essex location and what you want to fix. We filter our network by case type, distance, availability, and patient ratings, then send your details only to the 2–3 best matches. Those providers contact you within hours to arrange a free consultation — no pressure, no obligation.' },
  { q: 'Can I get Invisalign on the NHS in Essex?', a: 'NHS orthodontic treatment is available for children and teenagers in certain qualifying circumstances, but adult Invisalign is not available on the NHS. All treatment through our network is private, and we help patients access interest-free finance to make it manageable.' },
  { q: 'Is treatment painful?', a: 'SmartTrack material applies calibrated, gentle force. Most patients describe mild pressure for the first day or two of each new tray — nothing like the soreness of traditional brace tightening. There are no metal edges, no wires, and no emergency appointments for broken brackets.' },
];

const topCities = ['Chelmsford', 'Southend-on-Sea', 'Colchester', 'Basildon', 'Brentwood', 'Harlow', 'Braintree', 'Clacton-on-Sea', 'Grays', 'Rayleigh', 'Billericay', 'Loughton'];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────


function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '10px' }}>
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', marginBottom: '2px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', gap: '16px', textAlign: 'left' }}
      >
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>{q}</span>
        <span style={{
          width: '18px', height: '18px', borderRadius: '50%', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', color: 'var(--sage)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s',
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 16px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, background: '#fff' }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* ══════════════════════════════════════════════════════════════
            HERO — split 50/50, above fold
            Left: headline + subtitle + CTA + social proof
            Right: dental image with floating provider cards overlay
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '460px', borderBottom: '1px solid var(--border)' }} className="hero-grid">

          {/* Left column */}
          <div style={{ padding: 'clamp(40px,6vw,64px) clamp(24px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0, background: 'var(--cream)' }}>

            {/* 1 — Headline */}
            <div style={{ marginBottom: '20px' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,3rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1 }}>
                Essex&apos;s Finest<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Invisalign</em>
              </h1>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,3rem)', fontWeight: 400, fontStyle: 'italic', color: '#C0C8BE', lineHeight: 1.1 }}>
                Specialists, Matched Free
              </div>
            </div>

            {/* 2 — Subtitle */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '320px' }}>
                We vet every provider so you do not have to. Get matched with Platinum and Diamond Invisalign specialists near you — free consultation, free 3D scan, zero cost.
              </p>
            </div>

            {/* 3 — CTA */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: '13px 28px', borderRadius: '40px', fontSize: '13px' }}>
                  Get Free Quotes
                </button>
                <Link href="/treatments/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  View Treatments
                </Link>
              </div>
            </div>

            {/* 4 — Social proof */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: '#C9A96E', fontSize: '13px', letterSpacing: '1px' }}>★★★★★</span>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>4.95 avg</span>
                </div>
                <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Platinum &amp; Diamond only</span>
                <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
                <span style={{ background: 'var(--sage-pale)', borderRadius: '20px', padding: '3px 10px', fontSize: '11px', color: 'var(--sage)', fontWeight: 500 }}>
                  Free 3D scan
                </span>
              </div>
            </div>
          </div>

          {/* 5 — Visual: image + floating provider cards */}
          <div style={{ background: 'var(--sage-pale)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px', minHeight: '380px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
              alt="Invisalign consultation"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, mixBlendMode: 'multiply' }}
            />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'Chelmsford Dental Studio', tier: 'Diamond', sub: '150+ cases per year · Free 3D scan', badgeBg: '#EDE9F8', badgeColor: '#5B42A8' },
                { name: 'Brentwood Smile Clinic',   tier: 'Platinum', sub: '80+ cases per year · 0% finance', badgeBg: 'var(--sage-pale)', badgeColor: 'var(--sage)' },
              ].map(card => (
                <div key={card.name} style={{ background: 'rgba(250,250,247,0.92)', border: '1px solid rgba(61,92,66,0.15)', borderRadius: '8px', padding: '10px 14px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sage-mid)', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>{card.name}</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '3px', letterSpacing: '0.05em', background: card.badgeBg, color: card.badgeColor, marginLeft: 'auto' }}>
                      {card.tier}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', paddingLeft: '14px' }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            THE FOLD LINE
            ══════════════════════════════════════════════════════════════ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px clamp(24px,5vw,56px)', background: 'var(--sage-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}></span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            6 — FEATURES / OBJECTIONS / BENEFITS
            2×2 feature cards + objections row + comparison table
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', borderBottom: '1px solid var(--border)', background: 'var(--cream)' }}>
          <SectionH>Why tier matters.<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>And why we only list the top 5%.</em></SectionH>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '36px' }}>
            Any dentist can call themselves an Invisalign provider after a weekend course. The difference between someone doing 10 cases a year and 150 is enormous in skill, troubleshooting, and your final result.
          </p>

          {/* 2×2 feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }} className="two-col-sm-grid">
            {featureCards.map(card => (
              <div key={card.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'var(--sage)', fontSize: '14px' }}>✦</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{card.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* Objections */}
          <div style={{ background: 'var(--sage-pale)', borderRadius: '10px', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
            {objections.map(obj => (
              <div key={obj.q} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700 }}>?</span>
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>{obj.q}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.55 }}>{obj.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
              Invisalign <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>vs</em> Traditional Braces
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, padding: '8px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)', width: '36%' }}></th>
                    <th style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, padding: '8px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)', borderRadius: '6px 6px 0 0' }}>Invisalign</th>
                    <th style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, padding: '8px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Metal Braces</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf7' }}>
                      <td style={{ padding: '11px 16px', fontSize: '13px', color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{row.label}</td>
                      <td style={{ padding: '11px 16px', fontSize: '13px', color: 'var(--sage)', fontWeight: 500, background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>{row.inv}</td>
                      <td style={{ padding: '11px 16px', fontSize: '13px', color: '#A0A09A', borderBottom: '1px solid var(--border)' }}>{row.braces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            7 — SOCIAL PROOF / TESTIMONIALS
            Sage-pale background, serif italic quote style
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <SectionH>What Essex patients say<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>after using our service</em></SectionH>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '32px' }} className="two-col-sm-grid">
            {testimonials.map(t => (
              <div key={t.initials} style={{ background: 'var(--cream)', borderRadius: '10px', border: '1px solid var(--border)', padding: '22px 24px' }}>
                <div style={{ color: '#C9A96E', fontSize: '12px', letterSpacing: '1px', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5, marginBottom: '16px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sage-pale)', border: '1.5px solid var(--sage-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: 'var(--sage)', flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            LOCATIONS — inline between testimonials and FAQ
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <SectionH>Find providers in <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>your part of Essex</em></SectionH>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '28px' }}>
            We cover every major town in the county. Each location page shows which treatments are available, what local patients pay, and how to book a free consultation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }} className="loc-grid">
            {topCities.map(city => (
              <Link key={city} href={`/locations/${toSlug(city)}/`} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px', textDecoration: 'none', transition: 'border-color 0.15s' }} className="loc-link">
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '10px', color: 'var(--sage)' }}>↗</span>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)', fontSize: '13px', display: 'block' }}>
                    {city}
                  </span>
                  <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Providers &amp; prices</span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Browse all 111 Essex towns →
          </Link>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            8 — FAQ
            Accordion, clean borders
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', borderBottom: '1px solid var(--border)', background: 'var(--cream)' }}>
          <SectionH>Your questions,<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>answered honestly</em></SectionH>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '32px' }}>
            No vague answers. No upselling. Just what you need to know before booking.
          </p>

          <div>
            {faqs.map(faq => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            9 — FINAL CTA
            Sage background, white headline, ghost secondary button
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(56px,8vw,96px) clamp(24px,5vw,56px)', background: 'var(--sage)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: '#fff', lineHeight: 1.15, marginBottom: '12px', marginTop: '10px' }}>
            Your perfect smile starts<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>with the right provider.</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.7 }}>
            Free quotes, free consultations, free 3D scans. Essex&apos;s top Invisalign clinics come to you. No strings attached.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} style={{ padding: '14px 36px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
              Get Free Quotes
            </button>
            <Link href="/treatments/" style={{ padding: '14px 28px', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '40px', textDecoration: 'none' }}>
              Browse Treatments
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)', flexWrap: 'wrap' }}>
            {['Always 100% free', 'Platinum and Diamond only', 'Free 3D scan included'].map(item => (
              <span key={item}>— {item}</span>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            10 — FOUNDER'S NOTE
            Cream background, serif italic quote, avatar sig
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(44px,6vw,64px) clamp(24px,5vw,56px)', borderTop: '1px solid var(--border)', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '520px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--sage-mid)' }} />
              <span style={{ fontSize: '11px', color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                A note on why this exists
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.65, marginBottom: '24px' }}>
              &ldquo;Any high-street dentist can call themselves an Invisalign provider after a weekend course. When I looked into treatment for myself, I spent three hours trying to understand what &lsquo;Platinum&rsquo; actually meant and whether my local clinic was genuinely experienced — or just listed on Align&apos;s website. That research gap is what this service closes. We&apos;ve done the work so you don&apos;t have to.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--sage-pale)', border: '1.5px solid var(--sage-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: 'var(--sage)', flexShrink: 0 }}>
                IE
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Invisalign Essex</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Independent referral facilitator · Est. Essex</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { min-height: 260px !important; }
          .loc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
          .loc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .loc-link:hover { background: var(--sage-pale) !important; border-color: #c8d9c9 !important; }
      `}</style>
    </>
  );
}
