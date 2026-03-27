'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const scanComparison = [
  { aspect: 'Process', diy: 'Bite into trays of alginate putty at home. Material must set before the impression is taken.', professional: 'iTero wand captures 6,000 images per second. Completed chairside in 4 minutes.' },
  { aspect: 'Accuracy', diy: 'Distorts as the patient bites unevenly or moves during setting. Error margins of 1–3mm common.', professional: 'Submillimetre accuracy across the full arch. Captures tooth morphology, gingival margins, and interproximal contacts.' },
  { aspect: 'Root information', diy: 'None — surface impression only. No information about root position or bone levels.', professional: 'X-rays taken separately provide root and bone data. ClinCheck plans account for root position.' },
  { aspect: 'Clinical review', diy: 'No dentist examines the patient. Models reviewed by a remote technician.', professional: 'GDC-registered dentist examines the mouth, reviews X-rays, assesses gum health before any plan is created.' },
  { aspect: 'Error detection', diy: 'Underlying pathology invisible. Caries, bone loss, gum disease go undetected.', professional: 'Clinical examination identifies contraindications before treatment begins.' },
];

export default function MailOrderWarningClient() {
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
              <span style={{ color: 'var(--ink)' }}>Mail-Order Aligner Dangers</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#B42318', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Patient Safety Guide · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Hidden Dangers of<br />
              <em style={{ fontStyle: 'italic', color: '#B42318' }}>"At-Home" and Mail-Order Clear Aligners</em>
            </h1>
            <div style={{ background: '#FEF3F2', border: '1px solid #FECDCA', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#B42318', marginBottom: '8px' }}>What happened to SmileDirectClub</p>
              <p style={{ fontSize: '14px', color: '#7A271A', lineHeight: 1.75, margin: 0 }}>
                SmileDirectClub — the largest mail-order aligner company in the world at its peak — filed for bankruptcy in September 2023, leaving an estimated 50,000+ patients mid-treatment with no provider, no clinical support, and no recourse. Many had paid in full upfront. Patients in mid-treatment had no way to complete their course, obtain refinement aligners, or access retainers. Some were left with teeth in an intermediate position worse than where they started. The company's UK operations ceased entirely. This is not an isolated cautionary tale — it is the documented endpoint of a business model that prioritised scale over clinical responsibility.
              </p>
            </div>
            <p style={pStyle}>
              The appeal is understandable. Mail-order clear aligners are marketed at £800 to £1,500 — a fraction of the cost of dentist-led Invisalign. The process appears simple: take impressions at home, mail them in, receive aligners. No clinic visits, no waiting rooms, no awkward conversations. But the price difference is not a discount. It reflects the removal of the clinical safeguards that make orthodontic treatment safe. This guide explains what those safeguards are, what happens when they are absent, and what to do if you have already been affected.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Missing medical step */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The Missing Medical Step: X-Rays and Gum Health</h2>
              <p style={pStyle}>
                Before any orthodontic treatment begins — whether braces, Invisalign, or any other system — a GDC-registered dentist is required to conduct a full clinical examination. This includes dental X-rays, a periodontal (gum) assessment, and an evaluation of the bone supporting each tooth. This step is not a formality. It is the mechanism by which potentially life-altering contraindications are identified before teeth start moving.
              </p>
              <p style={pStyle}>
                Consider the consequences of two conditions that are completely invisible on the surface of the teeth, detectable only by examination:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '24px 0' }}>
                {[
                  {
                    condition: 'Periodontitis (gum disease with bone loss)',
                    detail: 'Periodontitis involves the progressive destruction of the bone and connective tissue that anchor teeth in the jaw. A patient with active periodontitis may have teeth that appear entirely healthy from the surface while the supporting bone has been significantly reduced. Applying orthodontic force to teeth with compromised bone support accelerates bone loss. In severe cases, teeth subjected to orthodontic movement against a backdrop of untreated periodontitis can become mobile and require extraction — teeth that were stable before treatment began. Mail-order companies cannot detect this.',
                  },
                  {
                    condition: 'Undetected dental decay',
                    detail: 'Interproximal cavities — decay between teeth — are invisible to the naked eye and to any photograph or impression. A mail-order company reviewing a surface impression cannot identify cavities that sit at or below the gumline. Moving teeth with active decay present concentrates bacteria, promotes further demineralisation, and can cause cavities that were initially small to progress to pulpal involvement during the treatment period. The patient finishes treatment with straighter teeth and significantly more complex decay than they started with.',
                  },
                  {
                    condition: 'Root resorption risk factors',
                    detail: 'Some patients have anatomical or genetic risk factors for root resorption — the shortening of tooth roots that can occur under orthodontic force. This risk is identifiable from dental X-rays and can inform how orthodontic force should be staged and limited. Without X-rays, a mail-order company applies the same force prescription regardless of individual risk. Root resorption is irreversible.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#FFF7F7', border: '1px solid #FECDCA', borderRadius: '10px', padding: '18px 20px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#B42318', marginBottom: '8px' }}>{item.condition}</p>
                    <p style={{ fontSize: '14px', color: '#7A271A', lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
                  </div>
                ))}
              </div>

              <p style={pStyle}>
                The GDC has been explicit in its guidance: orthodontic treatment that moves teeth must involve a registered dental professional who has physically examined the patient. This is not a preference — it is a regulatory requirement in the UK.
              </p>
            </section>

            {/* H2: DIY vs iTero */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>DIY Impressions vs. Professional 3D iTero Scans</h2>
              <p style={pStyle}>
                The quality of the treatment plan is entirely dependent on the quality of the data it is built from. Mail-order aligners are planned from home impressions. Dentist-led Invisalign is planned from iTero 3D digital scans. The difference is not cosmetic.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '22%' }}>Aspect</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#B42318', borderBottom: '2px solid var(--border)' }}>DIY Home Impressions</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Professional iTero Scan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scanComparison.map((row, i) => (
                      <tr key={row.aspect} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '11px 14px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{row.aspect}</td>
                        <td style={{ padding: '11px 14px', color: '#9A9A92', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{row.diy}</td>
                        <td style={{ padding: '11px 14px', color: 'var(--muted)', borderBottom: '1px solid var(--border)', verticalAlign: 'top', background: 'var(--sage-pale)' }}>{row.professional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={pStyle}>
                An inaccurate impression produces an inaccurate aligner that does not fit the teeth it is supposed to move. A poorly fitting aligner applies force unpredictably — sometimes to the wrong tooth surface, sometimes causing unintended tipping rather than planned movement. These errors are undetectable without clinical monitoring.
              </p>
            </section>

            {/* H2: No attachments */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>No Attachments, No Complex Movement</h2>
              <p style={pStyle}>
                Mail-order aligner companies cannot use attachments — the small tooth-coloured composite bumps bonded to specific teeth that enable complex tooth movements. They cannot use interproximal reduction (IPR) — the controlled removal of small amounts of enamel between teeth to create space. Both procedures require a dentist or orthodontist to be physically present with clinical instruments.
              </p>
              <p style={pStyle}>
                This is a fundamental clinical limitation, not a minor inconvenience. Attachments and IPR are what allow Invisalign to perform rotations, extrusions, torque corrections, and bodily movement — moving the entire tooth including the root in the planned direction. Without attachments, a clear aligner can only tip the crown of a tooth. The root goes where physics takes it, not where the treatment plan specifies.
              </p>
              <p style={pStyle}>
                The result is predictable: mail-order aligners can move the crowns of teeth to improve the appearance of alignment while leaving roots in unplanned positions. In mild crowding cases, this may produce an acceptable aesthetic result with limited clinical harm. In moderate-to-complex cases, it produces teeth that look straighter but have roots in positions that create future problems — including bite interference, bone defects, and increased extraction likelihood if conventional treatment is attempted afterwards.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>What this means in practice</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  Mail-order aligners are, at best, a cosmetic tooth-tipping system. They are not orthodontic treatment in the clinical sense. The British Orthodontic Society describes them as offering "only limited tooth movement" and emphasises that they "cannot achieve the same results as full orthodontic treatment carried out by a trained professional."
                </p>
              </div>
            </section>

            {/* H2: Stranded patients */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What to Do If You Were Left Stranded by a Mail-Order Company</h2>
              <p style={pStyle}>
                If you began treatment with a direct-to-consumer aligner company that has ceased trading — or simply stopped responding — you are not alone, and corrective treatment is available. The steps below are appropriate regardless of which company was involved.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {[
                  { n: 1, title: 'Stop wearing the aligners immediately if you have reached the end of your prescribed series', body: 'Without retainers, teeth will begin to relapse. However, continuing to wear a final aligner indefinitely is not a substitute for proper retention and may cause unwanted tooth movement.' },
                  { n: 2, title: 'Book an urgent assessment with a GDC-registered dentist', body: 'You need a full clinical examination — X-rays, periodontal assessment, and an evaluation of where your teeth are now versus where the treatment planned to move them. This establishes whether your current position is stable, improving, or requires corrective intervention.' },
                  { n: 3, title: 'Do not attempt to self-source replacement aligners online', body: 'Several companies offer "aligner subscription" services that claim to provide replacement aligners based on your existing prescription. Using aligners from a different company against an existing plan from another provider is clinically unsafe and not something any GDC-registered dentist would endorse.' },
                  { n: 4, title: 'Discuss your options for completing or correcting treatment', body: 'Depending on your current tooth positions, a dentist may be able to complete the remaining movement with dentist-led Invisalign or braces, or may need to correct unwanted tooth tipping before starting fresh. The assessment will determine the most appropriate route and the associated cost.' },
                  { n: 5, title: 'Consider a complaint to the GDC or Trading Standards if appropriate', body: 'If a UK-based company provided dental treatment without GDC-registered clinical oversight, that may constitute a regulatory breach. The GDC cannot investigate companies that have ceased trading, but Trading Standards and the Financial Ombudsman may have jurisdiction on consumer protection grounds depending on how you paid.' },
                ].map(step => (
                  <div key={step.n} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.n}</div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{step.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Safe, Dentist-Led Alternatives in Essex</h2>
              <p style={pStyle}>
                Dentist-led Invisalign costs more than mail-order aligners because it includes what mail-order aligners remove: a GDC-registered clinician who examines your teeth, takes diagnostic X-rays, assesses your gum health, plans treatment using accurate 3D data, monitors your progress at every stage, and takes clinical responsibility for the outcome.
              </p>
              <p style={pStyle}>
                The cost difference between a £900 mail-order kit and a £3,000 dentist-led Invisalign treatment is not a saving if the cheaper option leaves you with bone damage, poorly positioned roots, or mid-treatment abandonment that requires corrective treatment costing more than the original sum.
              </p>
              <p style={pStyle}>
                The majority of Platinum and Diamond Invisalign providers in Essex offer 0% interest finance plans. A £3,000 treatment over 24 months at 0% APR is £125 per month. The cost barrier that mail-order aligners appear to remove is largely addressed by finance — without any of the clinical risk.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Find a safe, dentist-led Invisalign provider near you</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every provider in our Essex directory is GDC-registered, holds Platinum or Diamond Invisalign tier status, and offers a free initial consultation with a full iTero 3D scan. 0% finance is available at the majority of listed clinics. No obligation to proceed.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/locations/" style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '40px', textDecoration: 'none' }}>
                    Find Invisalign Providers in Essex
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
            <div style={{ background: '#B42318', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Mail-Order Risks</p>
              {[
                'No X-rays — bone loss invisible',
                'No gum health assessment',
                'DIY impressions — 1–3mm error margins',
                'No attachments — crown tipping only',
                'No IPR — no space creation',
                'No clinical monitoring during treatment',
                'No GDC-registered clinician oversight',
                'Company collapse leaves you stranded',
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>!</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'Invisalign vs. Traditional Braces', href: '/guides/comparisons/invisalign-vs-traditional-braces/' },
                { label: 'Invisalign vs Spark vs ClearCorrect', href: '/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/' },
                { label: 'Invisalign Finance & Payment Plans', href: '/guides/costs/financing-payment-plans/' },
                { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Do it safely</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>GDC-registered providers. Free 3D scan. 0% finance available.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Find Safe Providers</button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) { .guide-grid { grid-template-columns: 1fr !important; } .guide-sidebar { position: static !important; } }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
