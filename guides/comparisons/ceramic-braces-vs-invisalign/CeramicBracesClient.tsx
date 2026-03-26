'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const comparisonRows = [
  { feature: 'Bracket material',        ceramic: 'Tooth-coloured or clear ceramic',          invisalign: 'No brackets — smooth clear plastic tray' },
  { feature: 'Wire visibility',         ceramic: 'Frosted or tooth-coloured wire available', invisalign: 'No wire — tray replaces wire function' },
  { feature: 'Elastic bands',           ceramic: 'Required — stain yellow between visits',   invisalign: 'Not required — tray changed every 1–2 weeks' },
  { feature: 'Overall visibility',      ceramic: 'Less than metal, more than Invisalign',    invisalign: 'Least visible orthodontic option (except lingual)' },
  { feature: 'Removability',            ceramic: 'Fixed — cannot remove',                   invisalign: 'Removable — for eating, cleaning, occasions' },
  { feature: 'Diet restrictions',       ceramic: 'Same as metal braces',                    invisalign: 'None — remove to eat anything' },
  { feature: 'Oral hygiene',            ceramic: 'Difficult — brackets trap plaque',        invisalign: 'Easy — remove tray and brush normally' },
  { feature: 'Complex rotations',       ceramic: 'Slightly better control than Invisalign', invisalign: 'Very good with attachments — not quite equal' },
  { feature: 'Patient compliance',      ceramic: 'Not required — fixed in place',           invisalign: '22-hour daily wear required' },
  { feature: 'Bracket durability',      ceramic: 'More fragile than metal',                 invisalign: 'Tray replaced regularly — durability not an issue' },
  { feature: 'Bracket comfort',         ceramic: 'Bulkier than metal — more lip contact',   invisalign: 'Smooth rounded edges — minimal irritation' },
  { feature: 'Typical cost (private)', ceramic: '£3,000 – £5,000',                         invisalign: '£2,800 – £5,500 depending on tier' },
];

export default function CeramicBracesClient() {
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
              <span style={{ color: 'var(--ink)' }}>Ceramic Braces vs Invisalign</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Comparisons · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Ceramic Braces vs. Invisalign:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Choosing the Best Discreet Orthodontics</em>
            </h1>
            <p style={pStyle}>
              For adults who need the clinical power of fixed orthodontic appliances but cannot tolerate the visual impact of metal brackets and wires, the choice typically narrows to two options: ceramic braces or Invisalign clear aligners. Both offer significantly more discretion than traditional metal braces. Both can treat complex presentations. And both are available privately across Essex at comparable price points. The right choice between them comes down to your specific clinical needs, your lifestyle, and how you weigh the trade-offs each system involves.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: What are ceramic braces */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What Are Ceramic Braces?</h2>
              <p style={pStyle}>
                Ceramic braces are functionally identical to traditional metal braces. They work through the same mechanism: brackets bonded to the front surface of each tooth, connected by an archwire that is periodically tightened to apply progressively greater force as teeth move toward the target position. The clinical principles — force application, monthly tightening, fixed arch mechanics — are unchanged.
              </p>
              <p style={pStyle}>
                What differs is the material. Standard ceramic brackets are made from aluminium oxide or zirconia — a tooth-coloured or clear ceramic compound. This significantly reduces their visual impact against the tooth surface compared to silver metal. The archwire running through the brackets can also be tooth-coloured or frosted to reduce visibility further, though the wire remains visible to anyone looking closely at the teeth.
              </p>
              <p style={pStyle}>
                Ceramic braces are available in two main variants: standard polycrystalline ceramic (opaque but tooth-coloured) and monocrystalline sapphire (nearly clear but more brittle). Both are considerably more visible than Invisalign trays in normal lighting but substantially less visible than metal braces.
              </p>
            </section>

            {/* H2: Aesthetics */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Comparing the Aesthetics</h2>
              <p style={pStyle}>
                At first appointment, ceramic braces look significantly better than metal. The brackets blend with the tooth shade and the frosted wire is barely noticeable in photographs or at conversational distances. Many patients choose ceramic braces specifically for client-facing roles or social occasions during treatment.
              </p>
              <p style={pStyle}>
                The aesthetic advantage deteriorates over time for two reasons. First, ceramic brackets and the elastic ligatures holding the wire in place absorb staining pigments from food and drink — particularly coffee, tea, red wine, curry, and tomato-based sauces. The elastic ligatures, which are typically changed at each monthly appointment, visibly yellow between visits. The brackets themselves can develop a permanent tint over a 12 to 18-month treatment course. Patients who drink significant amounts of coffee or eat curries regularly will find that ceramic braces look meaningfully less clean by month three or four than they did on day one.
              </p>
              <p style={pStyle}>
                Invisalign trays do not have this problem. Each aligner set is worn for one to two weeks and then discarded. There is no cumulative staining across the treatment — each set starts clear. The dietary habits that discolour ceramic brackets have no equivalent effect on Invisalign trays because the trays are replaced before staining becomes visible. For patients who prioritise sustained aesthetic quality throughout treatment, Invisalign maintains its appearance more consistently.
              </p>
            </section>

            {/* H2: Effectiveness */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Comparing the Clinical Effectiveness</h2>
              <p style={pStyle}>
                For the majority of adult orthodontic presentations, ceramic braces and Invisalign (in the hands of a Platinum or Diamond provider) produce equivalent clinical outcomes. The choice between them for mild-to-moderate crowding, spacing, and bite correction is largely a lifestyle question rather than a clinical one.
              </p>
              <p style={pStyle}>
                There is one area where ceramic braces retain a clinical edge: <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>severely rotated teeth.</strong> Rotation — spinning a tooth around its long axis — is mechanically demanding regardless of the system used. Fixed braces can apply rotational force through bracket placement and wire bending in ways that provide continuous, precisely directed torque throughout the treatment cycle. Invisalign achieves excellent rotational control using optimised attachments, but for extreme rotations (greater than 20 to 30 degrees) in some tooth geometries, fixed mechanics can be marginally more reliable.
              </p>
              <p style={pStyle}>
                Ceramic braces share one disadvantage with all fixed appliances: bracket fracture. Ceramic is more brittle than metal. Biting on hard objects — ice, boiled sweets, crusty bread — can fracture ceramic brackets. A fractured bracket requires an urgent repair appointment to prevent the wire from causing injury and the tooth from losing its anchorage. Metal braces are less susceptible to this; Invisalign trays, which are replaced regularly, have no equivalent failure mode.
              </p>
            </section>

            {/* H2: Cost and comfort */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Cost and Comfort</h2>
              <p style={pStyle}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Cost:</strong> Ceramic braces typically cost £3,000 to £5,000 privately in Essex, compared to £2,800 to £5,500 for Invisalign depending on the treatment tier. For equivalent case complexity, the price difference is marginal — often £200 to £500 either way depending on the practice and the specific case. Both are available on 0% finance at most private practices.
              </p>
              <p style={pStyle}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Comfort:</strong> Ceramic brackets are physically larger than their metal equivalents — the manufacturing process for ceramic requires slightly more material to achieve the same bracket strength. This additional bulk means ceramic brackets create more contact with the inside surface of the lips and cheeks. Patients with ceramic braces consistently report more soft tissue irritation — rubbing, ulcers, and general soreness against the lip — than patients with standard metal braces, and considerably more than Invisalign patients.
              </p>
              <p style={pStyle}>
                Invisalign trays have smooth, rounded edges with no protruding elements. The discomfort they cause is pressure-based — tightness and tenderness in the first 48 hours of each new tray — rather than friction-based. Most patients report that friction discomfort from ceramic brackets reduces as soft tissue adapts over the first few weeks, but the adaptation period can be uncomfortable.
              </p>

              <div style={{ overflowX: 'auto', margin: '28px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '28%' }}>Feature</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#8B6914', borderBottom: '2px solid var(--border)' }}>Ceramic Braces</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Invisalign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{row.feature}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>{row.ceramic}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--sage)', fontWeight: 500, borderBottom: '1px solid var(--border)', background: 'var(--sage-pale)' }}>{row.invisalign}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Discuss Your Options with an Essex Specialist</h2>
              <p style={pStyle}>
                The choice between ceramic braces and Invisalign is genuinely case-dependent. For patients with primarily cosmetic concerns and mild-to-moderate alignment issues, Invisalign typically offers better aesthetic consistency throughout treatment and a more comfortable daily experience. For patients with severe rotations or compliance concerns, ceramic braces may be the more reliable clinical route.
              </p>
              <p style={pStyle}>
                Many of the top-rated clinics in our Essex directory offer both Invisalign and ceramic brace options — and will give you an honest recommendation at consultation based on your specific case, not on which product carries the higher fee.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Find a specialist near you to explore your options</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
                    { name: 'Braintree',       slug: 'braintree' },
                    { name: 'Chelmsford',      slug: 'chelmsford' },
                    { name: 'Harlow',          slug: 'harlow' },
                  ].map(t => (
                    <Link key={t.slug} href={`/locations/${t.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      Providers in {t.name} →
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
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Choose Ceramic Braces if...</p>
              {['You have severely rotated teeth', 'You have compliance concerns (22hr rule)', 'Your clinician specifically recommends fixed'].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>→</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px', marginTop: '12px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Choose Invisalign if...</p>
                {['Aesthetics matter throughout treatment', 'You eat or drink things that stain', 'Comfort and hygiene are priorities', 'You prefer a fixed end date for treatment'].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>✓</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'Invisalign vs. Traditional Metal Braces', href: '/guides/comparisons/invisalign-vs-traditional-braces/' },
                { label: 'Invisalign vs Spark vs ClearCorrect', href: '/guides/comparisons/invisalign-vs-spark-vs-clearcorrect/' },
                { label: 'How Long Does Invisalign Take?', href: '/guides/treatment-process/how-long-does-invisalign-take/' },
                { label: 'True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Get the right recommendation</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free consultation. Free 3D scan. Honest clinical advice.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Find Providers Free</button>
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
