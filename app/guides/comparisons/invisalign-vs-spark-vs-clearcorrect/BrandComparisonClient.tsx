'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const brands = [
  {
    name: 'Invisalign',
    maker: 'Align Technology (USA)',
    material: 'SmartTrack thermoplastic',
    founded: '1997',
    patients: '17 million+',
    providerNetwork: 'Largest in the world — 100,000+ certified providers',
    strengths: [
      '25+ years of clinical data and case libraries',
      'SmartForce attachments — widest biomechanical range',
      'ClinCheck AI-assisted treatment planning',
      'Platinum/Diamond tier system drives quality',
      'iTero scanner integration for precise digital workflow',
      'Vivera retainers and full post-treatment ecosystem',
    ],
    weaknesses: [
      'More visible than competitors according to some users (slightly less clear than Spark TruGEN)',
      'Premium pricing at Platinum/Diamond tier',
    ],
    verdict: 'The gold standard',
    verdictColor: '#5B42A8',
    verdictBg: '#EDE9F8',
  },
  {
    name: 'Spark Aligners',
    maker: 'Ormco (subsidiary of Envista Holdings)',
    material: 'TruGEN and TruGEN XR thermoplastic',
    founded: '2019 (Spark brand)',
    patients: 'Not publicly disclosed',
    providerNetwork: 'Growing — primarily orthodontist-led practices in the UK',
    strengths: [
      'TruGEN material reported to be marginally clearer and more stain-resistant than SmartTrack',
      'Proprietary scalloped edge trim for improved gingival fit',
      'Backed by Ormco\'s orthodontic heritage',
      'Growing clinical evidence base',
    ],
    weaknesses: [
      'Significantly fewer certified providers than Invisalign in Essex',
      'Shorter clinical data history — less long-term outcome evidence',
      'Fewer attachment options for complex movements',
      'Less established post-treatment retainer ecosystem',
    ],
    verdict: 'The challenger',
    verdictColor: '#1D6B44',
    verdictBg: '#D1FAE5',
  },
  {
    name: 'ClearCorrect',
    maker: 'Straumann Group (Switzerland)',
    material: 'Zendura FLX polyurethane-based plastic',
    founded: '2006 (acquired by Straumann 2017)',
    patients: 'Not publicly disclosed',
    providerNetwork: 'Moderate — available at Straumann partner practices',
    strengths: [
      'Backed by Straumann Group — a respected implant and dental company',
      'Zendura FLX offers good clarity and some flexibility',
      'Often positioned at a lower price point than Invisalign',
      'Good for mild to moderate adult cases',
    ],
    weaknesses: [
      'Thinner material than SmartTrack or TruGEN — less force precision',
      'Fewer advanced biomechanical tools for complex cases',
      'Smaller provider network in Essex specifically',
      'Less comprehensive attachment system than Invisalign',
    ],
    verdict: 'The alternative',
    verdictColor: '#8B6914',
    verdictBg: '#FEF9C3',
  },
];

const comparisonRows = [
  { feature: 'Material',               invisalign: 'SmartTrack',      spark: 'TruGEN / TruGEN XR',      clearcorrect: 'Zendura FLX' },
  { feature: 'Clinical data',          invisalign: '25+ years',       spark: '5 years (brand)',          clearcorrect: '18 years' },
  { feature: 'Attachment system',      invisalign: 'Most advanced',   spark: 'Advanced',                 clearcorrect: 'Basic' },
  { feature: 'Clarity',                invisalign: 'Excellent',       spark: 'Marginally clearer',       clearcorrect: 'Good' },
  { feature: 'Stain resistance',       invisalign: 'Good',            spark: 'Slightly better',          clearcorrect: 'Good' },
  { feature: 'Complex cases',          invisalign: 'Full range',      spark: 'Most cases',               clearcorrect: 'Mild–moderate' },
  { feature: 'Essex provider network', invisalign: 'Largest',         spark: 'Limited',                  clearcorrect: 'Limited' },
  { feature: 'Typical cost',           invisalign: 'Market rate',     spark: 'Similar to Invisalign',   clearcorrect: 'Often lower' },
];

export default function BrandComparisonClient() {
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
              <Link href="/guides/comparisons/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Comparisons</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Invisalign vs Spark vs ClearCorrect</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Comparisons · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Invisalign vs. Spark vs. ClearCorrect:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Which Aligner Brand Is Best?</em>
            </h1>
            <p style={pStyle}>
              "Invisalign" has become something of a generic term for clear aligners — used in the same way "Hoover" is used for vacuum cleaners, regardless of who made it. But Invisalign is a brand name owned by Align Technology, and while they pioneered the clinical application of clear aligner orthodontics in 1997, they are no longer the only player in the market. Ormco's Spark aligners and Straumann's ClearCorrect are now used by dentists and orthodontists across the UK, and each has genuine strengths worth understanding.
            </p>
            <p style={pStyle}>
              This guide compares the three main dentist-led clear aligner systems available in the UK — and explains why the choice of brand, while meaningful, matters considerably less than the experience of the provider using it.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* Brand cards */}
            {brands.map(brand => (
              <section key={brand.name} style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', background: brand.verdictBg, color: brand.verdictColor, flexShrink: 0 }}>{brand.verdict}</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{brand.name}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', margin: '16px 0 20px' }}>
                  {[
                    { label: 'Made by', value: brand.maker },
                    { label: 'Material', value: brand.material },
                    { label: 'Provider network', value: brand.providerNetwork },
                  ].map(stat => (
                    <div key={stat.label} style={{ background: 'var(--sage-pale)', borderRadius: '8px', padding: '12px 14px' }}>
                      <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '4px' }}>{stat.label}</p>
                      <p style={{ fontSize: '13px', color: 'var(--ink)', margin: 0, lineHeight: 1.45 }}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '16px 0' }} className="two-col-sm-grid">
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Strengths</p>
                    {brand.strengths.map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--sage)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>✓</span>
                        <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#B42318', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Limitations</p>
                    {brand.weaknesses.map((w, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <span style={{ color: '#B42318', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>→</span>
                        <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* Quick comparison table */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>At a Glance: Brand Comparison</h2>
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)' }}>Feature</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Invisalign</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#1D6B44', borderBottom: '2px solid var(--border)' }}>Spark</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#8B6914', borderBottom: '2px solid var(--border)' }}>ClearCorrect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{row.feature}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--sage)', fontWeight: 500, borderBottom: '1px solid var(--border)', background: 'var(--sage-pale)' }}>{row.invisalign}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>{row.spark}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>{row.clearcorrect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Dentist matters more */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Why the Dentist Matters More Than the Brand</h2>
              <p style={pStyle}>
                Here is the most important truth in clear aligner orthodontics, and it applies regardless of which brand you or your provider choose: <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>the plastic tray is just a tool. The clinical outcome is determined almost entirely by the quality of the treatment plan, not the thermoplastic it is printed from.</strong>
              </p>
              <p style={pStyle}>
                A master orthodontist with 20 years of experience and 3,000 Invisalign cases will consistently achieve better outcomes than a general dentist with 50 cases — using exactly the same brand and exactly the same software. The software generates a mathematical projection of tooth movement; it is the clinician who evaluates whether that projection is biologically realistic, whether the planned attachment positions are optimal, and whether the staging of movements is sequenced correctly. These are clinical judgements that the software cannot make.
              </p>
              <p style={pStyle}>
                This is why provider tier matters so much in the Invisalign system — and why analogous quality signals exist for Spark and ClearCorrect. A Spark Elite provider or a ClearCorrect experienced provider with a high case volume will outperform an Invisalign Gold provider every time, regardless of the brand advantage.
              </p>
              <p style={pStyle}>
                The practical implication for patients is straightforward: prioritise finding the most experienced provider accessible to you, and let them advise on which brand they use and why. If they use Invisalign, Spark, or ClearCorrect with equivalent case volumes and comparable clinical outcomes, the material difference between TruGEN and SmartTrack is unlikely to be clinically meaningful for your case.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Our editorial position</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  This directory lists Invisalign Platinum and Diamond providers — not because other brands produce inferior results, but because the Invisalign tier system is the most transparent, independently verifiable quality signal available to patients in the UK market. If a Spark or ClearCorrect provider in Essex meets equivalent criteria, we will consider listing them. The standard is the tier, not the brand.
                </p>
              </div>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Find Top-Rated Aligner Dentists Near You</h2>
              <p style={pStyle}>
                Whether you decide on Invisalign, are curious about Spark, or simply want the most experienced clear aligner provider available to you in Essex — the starting point is the same: a free consultation and 3D scan with a high-volume provider.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Browse verified providers in Essex</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { name: 'Chelmsford', slug: 'chelmsford' },
                    { name: 'Harlow',     slug: 'harlow' },
                    { name: 'Colchester', slug: 'colchester' },
                    { name: 'Basildon',   slug: 'basildon' },
                  ].map(t => (
                    <Link key={t.slug} href={`/locations/${t.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      Invisalign {t.name} →
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/clinics/" style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '40px', textDecoration: 'none' }}>
                    Browse Essex Clinics
                  </Link>
                  <button onClick={() => setIsModalOpen(true)} style={{ padding: '11px 22px', background: 'transparent', border: '1px solid #c8d9c9', color: 'var(--sage)', fontSize: '14px', fontWeight: 500, borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                    Get Matched Free →
                  </button>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Bottom Line</p>
              {[
                'Invisalign: most data, most providers, widest clinical range',
                'Spark: marginally clearer material, fewer Essex providers',
                'ClearCorrect: can be cheaper, less complex case range',
                'Provider experience beats brand in every case',
                'Look for Platinum/Diamond or equivalent high-volume tier',
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'Invisalign vs. Traditional Braces', href: '/guides/comparisons/invisalign-vs-traditional-braces/' },
                { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'What Is a Platinum Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Find a top-tier provider</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free 3D scan. Free quote. No commitment required.</p>
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
