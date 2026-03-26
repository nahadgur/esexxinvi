'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Star, Award, BadgeCheck, MapPin, ExternalLink } from 'lucide-react';
import { getActiveClinics } from '@/data/clinics';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ClinicsIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clinics = getActiveClinics();

  const diamond  = clinics.filter(c => c.tier === 'Diamond');
  const platinum = clinics.filter(c => c.tier === 'Platinum');

  const TierBadge = ({ tier }: { tier: 'Diamond' | 'Platinum' }) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px',
      letterSpacing: '0.05em',
      background: tier === 'Diamond' ? '#EDE9F8' : 'var(--sage-pale)',
      color:      tier === 'Diamond' ? '#5B42A8' : 'var(--sage)',
    }}>
      {tier === 'Diamond' ? <Award style={{ width: '10px', height: '10px' }} /> : <BadgeCheck style={{ width: '10px', height: '10px' }} />}
      {tier}
    </span>
  );

  const ClinicCard = ({ clinic }: { clinic: ReturnType<typeof getActiveClinics>[0] }) => (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <TierBadge tier={clinic.tier} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginTop: '8px', marginBottom: '4px' }}>
            {clinic.name}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--muted)' }}>
            <MapPin style={{ width: '13px', height: '13px' }} />
            {clinic.addressLocality}, {clinic.addressRegion}
          </div>
        </div>
        {/* Rating */}
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center', marginBottom: '2px' }}>
            <Star style={{ width: '14px', height: '14px', color: '#C9A96E', fill: '#C9A96E' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)' }}>{clinic.googleRating}</span>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{clinic.reviewCount.toLocaleString()} reviews</div>
        </div>
      </div>

      {/* About snippet */}
      <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>
        {clinic.aboutParagraphs[0]}
      </p>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '14px', marginTop: 'auto' }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--sage)', fontFamily: 'var(--font-display)' }}>{clinic.caseVolume}</div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Invisalign cases</div>
        </div>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--sage)', fontFamily: 'var(--font-display)' }}>£{clinic.priceRangeLow.toLocaleString()} – £{clinic.priceRangeHigh.toLocaleString()}</div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Price range</div>
        </div>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--sage)', fontFamily: 'var(--font-display)' }}>Free</div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Initial consultation</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Link href={`/clinics/${clinic.slug}/`} style={{ flex: 1, textAlign: 'center', padding: '10px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 500, borderRadius: '8px', textDecoration: 'none' }}>
          View Profile
        </Link>
        <button onClick={() => setIsModalOpen(true)} style={{ flex: 1, padding: '10px', background: 'var(--sage-pale)', color: 'var(--sage)', fontSize: '13px', fontWeight: 500, border: '1px solid #c8d9c9', borderRadius: '8px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
          Book Free Consult
        </button>
      </div>
    </div>
  );

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Verified Essex Providers</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
            Invisalign Clinics<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>in Essex</em>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '28px' }}>
            Every clinic listed here has been independently verified against our five-point criteria — GDC registration, Platinum or Diamond tier status, minimum 4.5-star rating, transparent pricing, and evidenced CPD.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: '13px 28px', borderRadius: '40px', fontSize: '13px' }}>
              Get Matched Free
            </button>
            <Link href="/how-we-vet-providers/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px', alignSelf: 'center' }}>
              How we vet every provider →
            </Link>
          </div>

          {/* Summary badges */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: `${diamond.length} Diamond providers`, bg: '#EDE9F8', color: '#5B42A8' },
              { label: `${platinum.length} Platinum providers`, bg: 'var(--sage-pale)', color: 'var(--sage)' },
              { label: 'GDC verified', bg: 'var(--sage-light)', color: 'var(--sage)' },
            ].map(badge => (
              <span key={badge.label} style={{ background: badge.bg, color: badge.color, fontSize: '12px', fontWeight: 600, padding: '6px 14px', borderRadius: '20px' }}>
                {badge.label}
              </span>
            ))}
          </div>
        </section>

        {/* Diamond providers */}
        {diamond.length > 0 && (
          <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: '#F8F7FC', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Award style={{ width: '20px', height: '20px', color: '#5B42A8' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)' }}>Diamond Providers</span>
              <span style={{ fontSize: '11px', color: '#5B42A8', background: '#EDE9F8', padding: '3px 10px', borderRadius: '20px', fontWeight: 600 }}>300+ cases/year</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }} className="two-col-sm-grid">
              {diamond.map(c => <ClinicCard key={c.slug} clinic={c} />)}
            </div>
          </section>
        )}

        {/* Platinum providers */}
        {platinum.length > 0 && (
          <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <BadgeCheck style={{ width: '20px', height: '20px', color: 'var(--sage)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)' }}>Platinum Providers</span>
              <span style={{ fontSize: '11px', color: 'var(--sage)', background: 'var(--cream)', border: '1px solid #c8d9c9', padding: '3px 10px', borderRadius: '20px', fontWeight: 600 }}>150+ cases/year</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }} className="two-col-sm-grid">
              {platinum.map(c => <ClinicCard key={c.slug} clinic={c} />)}
            </div>
          </section>
        )}

        {/* Trust footer strip */}
        <section style={{ padding: 'clamp(36px,5vw,56px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
            <ShieldCheck style={{ width: '18px', height: '18px', color: 'var(--sage)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)' }}>How listings are verified</span>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '16px' }}>
            Every clinic in this directory is checked against our five-point criteria before listing and re-verified annually. GDC registration, Invisalign tier, Google rating, pricing transparency, and CPD compliance are all independently confirmed — not self-reported.
          </p>
          <Link href="/how-we-vet-providers/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Read our full vetting methodology →
          </Link>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
