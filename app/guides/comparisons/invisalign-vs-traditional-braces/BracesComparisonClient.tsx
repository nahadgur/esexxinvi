'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const comparisonRows = [
  { category: 'Visibility',             invisalign: 'Virtually invisible — clear thermoplastic',       braces: 'Clearly visible metal brackets and wires' },
  { category: 'Removable',              invisalign: 'Yes — remove to eat, drink, and clean',           braces: 'No — fixed for the entire treatment duration' },
  { category: 'Food restrictions',      invisalign: 'None — eat anything when aligners are out',       braces: 'Significant — no hard, sticky, or chewy foods' },
  { category: 'Oral hygiene',           invisalign: 'Easy — remove tray, brush normally',              braces: 'Difficult — special brushes and floss threaders required' },
  { category: 'Check-up frequency',     invisalign: 'Every 6–8 weeks',                                braces: 'Monthly tightening appointments' },
  { category: 'Result preview',         invisalign: '3D ClinCheck animation before treatment',         braces: 'No preview — outcome visible only at the end' },
  { category: 'Discomfort',             invisalign: 'Pressure for 48hrs after each new tray',          braces: 'Ongoing irritation from wires and brackets' },
  { category: 'Typical cost (private)', invisalign: '£1,500 – £5,500 depending on tier',              braces: '£2,500 – £5,000 depending on case complexity' },
  { category: 'Complex bite cases',     invisalign: 'Handles most with Precision Wings & attachments', braces: 'May be required for severe skeletal discrepancy' },
  { category: 'Patient compliance',     invisalign: '22-hour wear required — relies on patient',       braces: 'Fixed — compliance not required' },
];

const casesForBraces = [
  { condition: 'Severely impacted canines', explanation: 'Canine teeth that are positioned high in the gum and have not erupted into the arch typically require surgical exposure and traction with fixed brackets before any clear aligner treatment is feasible.' },
  { condition: 'Skeletal jaw discrepancy', explanation: 'Cases where the upper and lower jaws are significantly misaligned skeletally — not just dentally — may require jaw surgery (orthognathic surgery). Braces are used in combination with surgical procedures for pre- and post-surgical alignment.' },
  { condition: 'Severe open bite', explanation: 'Significant open bites — where the front teeth do not overlap vertically at all — are among the most challenging movements for clear aligners. Some presentations are better handled with fixed appliances and skeletal anchorage.' },
  { condition: 'Paediatric orthodontics', explanation: 'For children and teenagers undergoing active growth-modification treatment, fixed braces combined with growth appliances (expanders, headgear) remain the standard of care. Invisalign First is available for children but has more limited clinical scope.' },
];

export default function BracesComparisonClient() {
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
              <span style={{ color: 'var(--ink)' }}>Invisalign vs Braces</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Comparisons · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Invisalign vs. Traditional Braces:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Which Is Right for You in 2026?</em>
            </h1>
            <p style={pStyle}>
              Choosing between Invisalign and metal braces is one of the most common questions adults considering orthodontic treatment face — and it is one that deserves a genuinely honest answer rather than a sales pitch from a directory that lists only Invisalign providers. The truth is that both systems straighten teeth effectively, both are appropriate for different clinical situations, and the right choice depends on your specific case, your lifestyle, and your priorities. This guide covers the comparison across every meaningful dimension so you can make an informed decision.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* Full comparison table */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Side-by-Side: The Complete Comparison</h2>
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '28%' }}>Category</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Invisalign</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--muted)', borderBottom: '2px solid var(--border)' }}>Metal Braces</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.category} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '11px 16px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.category}</td>
                        <td style={{ padding: '11px 16px', color: 'var(--sage)', fontWeight: 500, borderBottom: '1px solid var(--border)', fontSize: '13px', background: 'var(--sage-pale)' }}>{row.invisalign}</td>
                        <td style={{ padding: '11px 16px', color: '#9A9A92', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.braces}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Aesthetics */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Aesthetics and Discretion</h2>
              <p style={pStyle}>
                For the majority of Essex adults who enquire about orthodontic treatment, aesthetics during treatment is the single most important consideration. Working professionals — in client-facing roles, in management, in any environment where professional presentation matters — consistently cite the visibility of metal braces as the primary reason they did not pursue orthodontic treatment earlier in life. Invisalign removes that barrier.
              </p>
              <p style={pStyle}>
                Clear aligner trays made from SmartTrack thermoplastic are genuinely difficult to detect in normal conversation at normal social distances. Most patients report that colleagues and clients have not noticed they were in treatment. Attachments — small tooth-coloured composite bumps that assist with complex movements — are visible on close inspection, particularly under direct lighting. But they are composite resin matched to tooth shade, not silver metal brackets with wires running through them. The visual difference in practice is substantial.
              </p>
              <p style={pStyle}>
                For patients for whom any orthodontic visibility is unacceptable — broadcast presenters, barristers, senior executives — lingual braces (braces bonded to the inside surface of the teeth) offer complete concealment. But they are significantly more expensive than Invisalign, more technically demanding, and less comfortable. For most Essex adults seeking discretion, Invisalign clear aligners are the practical answer.
              </p>
            </section>

            {/* H2: Speed */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Treatment Speed and Efficiency</h2>
              <p style={pStyle}>
                A persistent myth holds that metal braces are faster than Invisalign. The reality is more nuanced. For mild to moderate cases — which describe the majority of adult orthodontic presentations — Invisalign treatment duration is comparable to fixed braces and in some cases shorter. SmartTrack material applies continuous, gentle, graduated force to teeth throughout the day. Fixed brace wires apply intermittent force that peaks immediately after a tightening appointment and then decreases until the next one. The biomechanical difference favours consistent low-force application for predictable tooth movement, which is what clear aligners provide.
              </p>
              <p style={pStyle}>
                For complex cases — particularly severe skeletal bite discrepancies and significant arch expansion — fixed appliances with skeletal anchorage and extended mechanics can achieve things that clear aligners approach only asymptotically. In these cases, the treatment timeline advantage shifts decisively to fixed appliances.
              </p>
              <p style={pStyle}>
                The most accurate generalisation is: for cases that Invisalign can handle well, it handles them at a speed broadly comparable to braces. For cases at the clinical edge of what clear aligners can treat, braces are faster because they can do more per unit of time.
              </p>
            </section>

            {/* H2: Diet and hygiene */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Daily Life: Diet and Oral Hygiene</h2>
              <p style={pStyle}>
                This is where Invisalign has an unconditional, clinically meaningful advantage — and it is the dimension that most frequently determines which system Essex adults choose when both are clinically appropriate.
              </p>
              <p style={pStyle}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Diet:</strong> Fixed brace patients are given a list of prohibited foods from day one: no hard foods that could break brackets (crusty bread, raw carrots, hard nuts, apples), no sticky foods that pull brackets off teeth (toffees, chewing gum, dried fruit), no chewy foods that bend wires. This list applies continuously for the duration of treatment — which for complex cases can be 24 months. Invisalign patients remove the tray, eat whatever they want, and put the tray back in.
              </p>
              <p style={pStyle}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Oral hygiene:</strong> Keeping teeth clean with fixed braces is objectively difficult. Metal brackets and wires create dozens of surfaces that trap food and plaque. Specialist interdental brushes, floss threaders, and orthodontic-specific toothbrushes are required, and even with diligent technique, white spot lesions (early enamel demineralisation caused by plaque around brackets) are a documented clinical risk. Studies consistently show elevated plaque and gingival inflammation in brace patients compared to Invisalign patients.
              </p>
              <p style={pStyle}>
                Invisalign patients remove the aligner, brush normally, and reinsert. Oral hygiene during Invisalign treatment is no more complex than it is without any orthodontic treatment at all. This difference is clinically significant, not merely a matter of convenience.
              </p>
            </section>

            {/* H2: Cost */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Cost Comparison in the UK</h2>
              <p style={pStyle}>
                Privately, the cost difference between Invisalign and metal braces for comparable case complexity is smaller than most patients expect. For mild-to-moderate adult cases:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '24px 0' }} className="two-col-sm-grid">
                {[
                  { system: 'Invisalign (Lite)', range: '£2,800 – £3,500', note: 'Mild-to-moderate crowding or gaps' },
                  { system: 'Metal braces', range: '£2,500 – £4,000', note: 'Equivalent case complexity' },
                  { system: 'Invisalign (Comprehensive)', range: '£3,500 – £5,500', note: 'Complex cases, unlimited aligners' },
                  { system: 'Ceramic braces', range: '£3,000 – £5,000', note: 'Tooth-coloured alternative to metal' },
                ].map(item => (
                  <div key={item.system} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>{item.system}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--sage)', marginBottom: '4px' }}>{item.range}</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>{item.note}</p>
                  </div>
                ))}
              </div>
              <p style={pStyle}>
                The cost difference for equivalent cases is typically £300 to £700 — with Invisalign slightly higher. Given the dietary freedom, the oral hygiene advantage, and the aesthetic benefit during treatment, most patients who receive quotes for both find the marginal premium for Invisalign a straightforward decision. The cases where cost strongly favours braces are at the complex end — where Invisalign Comprehensive with multiple refinement phases can exceed brace fees for comparable case duration.
              </p>
              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                0% finance plans are available for both Invisalign and private braces at most Essex providers. Finance terms are confirmed at consultation.
              </p>
            </section>

            {/* H2: Clinical cases for braces */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Which Option Is Clinically Better for Your Case?</h2>
              <p style={pStyle}>
                For the majority of adult orthodontic presentations — crowding, spacing, overbite, underbite, crossbite within the dental (not skeletal) range — Invisalign in the hands of a Platinum or Diamond provider can achieve equivalent clinical results to fixed braces. This is not marketing; it is the documented consensus of the orthodontic literature over the past decade.
              </p>
              <p style={pStyle}>
                There are cases, however, where traditional fixed appliances retain a genuine clinical advantage or are required:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '24px 0' }}>
                {casesForBraces.map((item, i) => (
                  <div key={item.condition} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{item.condition}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{item.explanation}</p>
                  </div>
                ))}
              </div>
              <p style={pStyle}>
                The honest position: if a Platinum or Diamond Invisalign provider tells you at consultation that your case is better treated with fixed appliances, that is a clinically significant recommendation — not a sales failure. Experienced providers refer out when it is in the patient's interest to do so.
              </p>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Get a Professional Opinion in Essex</h2>
              <p style={pStyle}>
                No guide can substitute for a clinical assessment of your specific case. Whether Invisalign or braces is the appropriate route depends on measurements and clinical findings that only a 3D scan and in-person examination can provide.
              </p>
              <p style={pStyle}>
                Every Diamond and Platinum provider in our Essex directory offers a free initial consultation — including a full iTero 3D scan and a written treatment recommendation. If Invisalign is appropriate for your case, you will see a ClinCheck simulation of the result. If fixed braces would serve you better, an experienced provider will tell you so and explain why.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Compare Diamond and Platinum providers in Essex</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Browse our verified clinic directory — every listed provider holds Platinum or Diamond tier status and is rated 4.5 stars or above by verified patients.
                </p>
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
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Invisalign Wins On</p>
              {['Virtually invisible during treatment', 'No food restrictions', 'Far easier to keep teeth clean', 'Fewer clinic appointments', 'See result before you commit', 'Comfortable — no metal edges'].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '14px', marginTop: '4px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Braces Still Win On</p>
                {['Severe skeletal discrepancy', 'Impacted canine cases', 'No patient compliance required', 'Some complex open bite cases'].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>→</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'Invisalign vs Spark vs ClearCorrect', href: '/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/' },
                { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
                { label: 'What Is a Platinum Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Not sure which is right?</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>A free 3D scan gives you the clinical answer. No obligation.</p>
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
