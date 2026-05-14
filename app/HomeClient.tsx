'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { services } from '@/data/services';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { TOP_CITIES, siteConfig } from '@/data/site';
import { toSlug } from '@/data/locations';
import { getActiveClinics } from '@/data/clinics';

const featureCards = [
  { title: 'Verified Platinum providers', body: 'We list only Align-verified Platinum-tier dentists. Tier confirmation is re-checked annually because Invisalign provider status moves with rolling case volume.' },
  { title: 'Free 3D smile preview', body: 'Every matched provider includes a free iTero scan and ClinCheck preview, so you see the projected outcome before agreeing to anything.' },
  { title: 'Independent verification', body: "We verify each provider's Align Technology tier, GDC registration, indemnity and CQC standing before listing. No self-reported claims." },
  { title: '0% finance available', body: 'Most network providers offer interest-free payment plans from around £50 per month. Treatment does not have to be a single upfront cost.' },
];

const objections = [
  { q: 'Is Invisalign actually as effective as fixed braces?', a: 'For the vast majority of adult cases, including complex crowding, bites and gaps, yes. The narrow exception is severe skeletal jaw discrepancy requiring orthognathic surgery. Modern Invisalign with SmartForce attachments and Precision Wings handles cases that were fixed-brace-only five years ago.' },
  { q: 'Why does the provider tier matter?', a: 'A dentist completing 150+ Invisalign cases a year has far more hands-on experience with difficult movements, faster access to Align technical support, and a lower refinement rate than one fitting 10 cases a year. The result you walk away with reflects that gap directly.' },
  { q: 'How is this service free for patients?', a: 'Listed practices pay a fixed monthly listing fee to be in the directory. We are not paid per lead, per referral or as a percentage of treatment, which keeps the matching honest. Patients pay nothing for matching, the introduction, or the consultation.' },
];

const comparisonRows = [
  { label: 'Visibility',          inv: 'Nearly invisible',           braces: 'Visible brackets & wire' },
  { label: 'Eating restrictions', inv: 'None, remove to eat',       braces: 'Long banned-food list' },
  { label: 'Preview your result', inv: '3D animation before you start', braces: 'No preview available' },
  { label: 'Typical duration',    inv: '6 – 18 months',              braces: '18 – 36 months' },
  { label: 'Check-up frequency',  inv: 'Every 6 – 8 weeks',          braces: 'Monthly adjustments' },
];

const faqs = [
  { q: 'What does Invisalign cost across Essex?', a: 'Most Essex clinics in our network price Invisalign between £1,500 and £5,500. Where you land depends on case complexity, which product your dentist recommends, and provider tier. Nearly every provider we work with offers interest-free monthly payments from around £50, so the upfront number is rarely what you actually pay each month.' },
  { q: 'How quickly will I see results?', a: 'Minor cosmetic corrections with Invisalign Express can show results in as few as 10–12 weeks. Moderate cases typically show clear improvement within 3–4 months. Full comprehensive treatment takes 12–18 months, with most patients noticing significant change by month 3.' },
  { q: 'How does your free matching service actually work?', a: 'You fill in a 60-second form with your Essex location and what you want to fix. We filter our network by case type, distance, availability, and patient ratings, then send your details only to the 2–3 best matches. Those providers contact you within hours to arrange a free consultation, no pressure, no obligation.' },
  { q: 'Can I get Invisalign on the NHS in Essex?', a: 'NHS orthodontic treatment is available for children and teenagers in certain qualifying circumstances, but adult Invisalign is not available on the NHS. All treatment through our network is private, and we help patients access interest-free finance to make it manageable.' },
  { q: 'Is treatment painful?', a: 'SmartTrack material applies calibrated, gentle force. Most patients describe mild pressure for the first day or two of each new tray, nothing like the soreness of traditional brace tightening. There are no metal edges, no wires, and no emergency appointments for broken brackets.' },
];

const topCities = TOP_CITIES;

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
                We vet every provider so you do not have to. Get matched with verified Platinum-tier Invisalign providers near you. Free initial consultation, free 3D scan, no inbound calls.
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
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Verified Platinum providers</span>
                <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Tier re-checked annually</span>
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
              src="/images/home/hero-smile-reception.webp"
              alt="Invisalign consultation"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, mixBlendMode: 'multiply' }}
            />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'Nuffield Dental Practice · Harlow', tier: 'Platinum', sub: '200+ cases per year · 4.8★ from 120 reviews', badgeBg: 'var(--sage-pale)', badgeColor: 'var(--sage)' },
                { name: 'Church Langley Dental · Harlow', tier: 'Platinum', sub: '150+ cases per year · 4.9★ from 180 reviews', badgeBg: 'var(--sage-pale)', badgeColor: 'var(--sage)' },
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
          <span style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Below the fold</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            6 — FEATURES / OBJECTIONS / BENEFITS
            2×2 feature cards + objections row + comparison table
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', borderBottom: '1px solid var(--border)', background: 'var(--cream)' }}>
          <SectionH>Why provider tier matters,<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>and how we verify it</em></SectionH>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '36px' }}>
            Any dentist can list themselves as an Invisalign provider after the basic certification course. The difference between a clinic running 10 cases a year and 150 is significant in case outcome, refinement rate and bite-management depth.
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
            7 — LISTED PROVIDERS
            Real clinics with sourced data only — no fabricated testimonials
            ══════════════════════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <SectionH>Currently listed<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>partner practices</em></SectionH>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '28px' }}>
            Our directory currently lists {getActiveClinics().length} verified Platinum-tier partner practices in Essex. The matching service can additionally route to verified non-listed providers via our wider Align-confirmed referral network.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '20px' }} className="two-col-sm-grid">
            {getActiveClinics().map(c => (
              <Link key={c.slug} href={`/clinics/${c.slug}/`} style={{ background: 'var(--cream)', borderRadius: '10px', border: '1px solid var(--border)', padding: '22px 24px', textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em', background: 'var(--sage)', color: '#fff' }}>{c.tier}</span>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{c.addressLocality}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{c.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px', lineHeight: 1.55 }}>
                  {c.address}, {c.postalCode}
                </div>
                <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: 'var(--muted)' }}>
                  <span>Lead clinician: {c.leadPractitionerName}</span>
                </div>
              </Link>
            ))}
          </div>

          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '24px', maxWidth: '520px' }}>
            We do not publish patient testimonials. Per UK Digital Markets, Competition and Consumers Act 2024 (DMCCA) and CMA fake-review guidance, we only show verifiable practice data: tier, address, lead clinician, opening hours and treatment range.
          </p>
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
            Browse all 12 Essex catchments →
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
            {['Always 100% free for patients', 'Verified Platinum providers', 'Free 3D scan included'].map(item => (
              <span key={item}>,  {item}</span>
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
              &ldquo;Any high-street dentist can call themselves an Invisalign provider after a weekend course. When I looked into treatment for myself, I spent three hours trying to understand what &lsquo;Platinum&rsquo; actually meant and whether my local clinic was genuinely experienced, or just listed on Align&apos;s website. That research gap is what this service closes. We&apos;ve done the work so you don&apos;t have to.&rdquo;
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
        @media (max-width: 768px) {
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-grid > div:last-child { min-height: 200px !important; }
          .loc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .loc-link:hover { background: var(--sage-pale) !important; border-color: #c8d9c9 !important; }
      `}</style>
    </>
  );
}
