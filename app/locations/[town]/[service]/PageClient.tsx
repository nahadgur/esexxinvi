'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug } from '@/data/services';
import { getCityBySlug, toSlug } from '@/data/locations';
import { getNearbyAreas } from '@/data/nearby-areas';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { getTownContent, getServiceContent } from '@/data/content';
import { serviceVariants } from '@/data/content/service-variants';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '2px', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', gap: '16px', textAlign: 'left' }}
      >
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>{q}</span>
        <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--sage)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 18px 14px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, background: '#fff' }}>{a}</div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function LocationServicePageClient({ params }: { params: { town: string; service: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service  = getServiceBySlug(params.service);
  const cityName = getCityBySlug(params.town);
  if (!service || !cityName) notFound();

  const townData   = getTownContent(params.town);
  const svcContent = getServiceContent(params.town, params.service);

  // Condition body — pick variant per town or default A
  const conditionVariant = svcContent?.conditionVariant ?? 'A';
  const conditionBody    = serviceVariants[params.service]?.[conditionVariant] ?? null;

  // Data values with fallbacks
  const clinic1         = townData?.clinic1;
  const googleRating    = clinic1?.googleRating;
  const reviewCount     = clinic1?.reviewCount;
  const clinic1Name     = clinic1?.name ?? `Top-rated clinic in ${cityName}`;
  const clinic1Tier     = clinic1?.tier ?? 'Platinum';
  const caseVolume      = clinic1?.caseVolume ?? '200+';
  const waitDays        = townData?.waitTimeDays ?? 7;
  const priceRangeLow   = townData?.priceRangeLow ?? 1500;
  const priceRangeHigh  = townData?.priceRangeHigh ?? 5500;
  const financeFrom     = townData?.financeMinMonthly ?? 49;
  const introParagraph  = svcContent?.introParagraph;
  const priceNote       = svcContent?.priceVarianceNote;
  const nearbyAreas     = getNearbyAreas(cityName).slice(0, 5);

  const serviceShort = service.title.toLowerCase().replace('invisalign for ', '').replace('invisalign ', '');

  const treatmentSteps = [
    `Book a free consultation — most ${cityName} providers have slots within ${waitDays} days`,
    'Full iTero 3D scan in 4 minutes — no putty impressions',
    'Watch your ClinCheck simulation showing the result before you commit',
    'Receive custom aligners, switching every 1–2 weeks from home',
    `Brief check-up every 6–8 weeks at your ${cityName} clinic`,
    'Retainers fitted at the end — result is permanent with nightly wear',
  ];

  const faqs = service.faqs;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* ══ HERO — full-width sage ══ */}
        <section style={{ background: 'var(--sage)', padding: 'clamp(36px,5vw,56px) clamp(24px,5vw,56px) clamp(28px,4vw,44px)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/locations/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Locations</Link>
              <span>/</span>
              <Link href={`/locations/${params.town}/`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{cityName}</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{service.title}</span>
            </div>

            {/* Eyebrow */}
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {clinic1Tier} Providers · {cityName}, Essex
            </p>

            {/* H1 */}
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 600, color: '#fff', lineHeight: 1.1, marginBottom: '14px' }}>
              Find the right specialist for<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>{serviceShort}</em> in {cityName}
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '22px' }}>
              {introParagraph
                ? introParagraph
                : `Verified Platinum and Diamond Invisalign providers matched to your case. Free 3D scan, free consultation, written quote before you commit to anything.`}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ padding: '12px 28px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
              >
                Get Free Quotes
              </button>
              <Link
                href="/clinics/"
                style={{ padding: '12px 22px', background: 'transparent', color: 'rgba(255,255,255,0.8)', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '40px', textDecoration: 'none' }}
              >
                Browse clinics →
              </Link>
            </div>

            {/* Trust stats */}
            <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
              {[
                { value: googleRating ? `★ ${googleRating}` : '★ 4.9', label: `${reviewCount ? reviewCount.toLocaleString() : '200+'} reviews` },
                { value: `${waitDays} days`, label: 'To consultation' },
                { value: `£${financeFrom}/mo`, label: '0% finance from' },
                { value: 'Free', label: 'iTero 3D scan' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.15)', margin: '0 20px' }} />}
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BODY — two column ══ */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '0', background: 'var(--cream)' }} className="body-grid">

          {/* ── Main content ── */}
          <div style={{ padding: 'clamp(32px,4vw,48px) clamp(24px,4vw,40px)', borderRight: '1px solid var(--border)', minWidth: 0 }}>

            {/* Condition body */}
            {conditionBody && (
              <section style={{ marginBottom: '40px' }}>
                <h2 style={h2}>About {service.title.toLowerCase()} in {cityName}</h2>
                {conditionBody.split('\n\n').map((para, i) => (
                  <p key={i} style={p}>{para}</p>
                ))}
              </section>
            )}

            {/* Price variance note */}
            {priceNote && (
              <section style={{ marginBottom: '40px' }}>
                <h2 style={h2}>Pricing in {cityName}</h2>
                <p style={p}>{priceNote}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }} className="two-col-sm-grid">
                  {[
                    { label: 'Invisalign Lite', range: `£${Math.max(1500, priceRangeLow - 200).toLocaleString()} – £${Math.min(priceRangeLow + 800, 3500).toLocaleString()}` },
                    { label: 'Comprehensive', range: `£${priceRangeLow.toLocaleString()} – £${priceRangeHigh.toLocaleString()}` },
                    { label: '0% finance from', range: `~£${financeFrom}/month`, highlight: true },
                    { label: 'Free consultation', range: 'incl. 3D iTero scan', highlight: true },
                  ].map((item, i) => (
                    <div key={i} style={{ background: item.highlight ? 'var(--sage-pale)' : '#fff', border: `1px solid ${item.highlight ? '#c8d9c9' : 'var(--border)'}`, borderRadius: '8px', padding: '14px 16px' }}>
                      <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: item.highlight ? 'var(--sage)' : 'var(--ink)' }}>{item.range}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* How it works */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={h2}>How it works in {cityName}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {treatmentSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</div>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {faqs && faqs.length > 0 && (
              <section style={{ marginBottom: '40px' }}>
                <h2 style={h2}>Common questions</h2>
                {faqs.map(faq => (
                  <FaqItem key={faq.question} q={faq.question} a={faq.answer} />
                ))}
              </section>
            )}

            {/* Nearby areas */}
            {nearbyAreas.length > 0 && (
              <section style={{ marginBottom: '16px' }}>
                <h2 style={h2}>Nearby areas</h2>
                <p style={p}>Looking for providers in a specific part of {cityName}? We also cover these surrounding areas:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {nearbyAreas.map(area => (
                    <Link
                      key={area}
                      href={`/locations/${toSlug(area)}/`}
                      style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div style={{ padding: 'clamp(32px,4vw,48px) 20px', background: 'var(--sage-light)' }}>
            <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Clinic card */}
              {clinic1Name && (
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px 20px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Featured provider</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>{clinic1Name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', background: clinic1Tier === 'Diamond' ? '#EDE9F8' : 'var(--sage-pale)', color: clinic1Tier === 'Diamond' ? '#5B42A8' : 'var(--sage)' }}>
                      {clinic1Tier}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{caseVolume} cases/year</span>
                  </div>
                  {googleRating && reviewCount && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>
                      <span style={{ color: '#C9A96E' }}>★★★★★</span>
                      <span>{googleRating} · {reviewCount.toLocaleString()} reviews</span>
                    </div>
                  )}
                  <Link href={`/clinics/`} style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    View all {cityName} clinics →
                  </Link>
                </div>
              )}

              {/* Main CTA */}
              <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
                  Get matched with {cityName} providers
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '16px' }}>
                  Free 3D scan · Free consultation · Written quote before you commit · 0% finance available
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{ width: '100%', padding: '12px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
                >
                  Find Providers in {cityName}
                </button>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginTop: '8px' }}>
                  100% free · No obligation
                </p>
              </div>

              {/* Price summary */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>{cityName} pricing</div>
                {[
                  { label: 'Price range', value: `£${priceRangeLow.toLocaleString()} – £${priceRangeHigh.toLocaleString()}` },
                  { label: 'Finance from', value: `~£${financeFrom}/month at 0%` },
                  { label: 'Initial consultation', value: 'Free' },
                  { label: 'iTero 3D scan', value: 'Free' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', paddingBottom: '8px', marginBottom: '8px', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                    <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Other treatments */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>Other treatments in {cityName}</div>
                {['crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults']
                  .filter(s => s !== params.service)
                  .slice(0, 4)
                  .map(slug => {
                    const s = { crowded: 'Crowded Teeth', gaps: 'Gaps', overbite: 'Overbite', underbite: 'Underbite', crossbite: 'Crossbite', adults: 'Adult Invisalign' }[slug];
                    return (
                      <Link key={slug} href={`/locations/${params.town}/${slug}/`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                        <span>{s}</span>
                        <span>→</span>
                      </Link>
                    );
                  })}
              </div>

            </div>
          </div>
        </div>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .body-grid { grid-template-columns: 1fr !important; }
          .body-grid > div:last-child { border-right: none !important; }
        }
        @media (max-width: 640px) {
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
  fontWeight: 600,
  color: 'var(--ink)',
  lineHeight: 1.2,
  marginBottom: '14px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--border)',
};

const p: React.CSSProperties = {
  fontSize: '14px',
  color: 'var(--muted)',
  lineHeight: 1.8,
  marginBottom: '14px',
};
