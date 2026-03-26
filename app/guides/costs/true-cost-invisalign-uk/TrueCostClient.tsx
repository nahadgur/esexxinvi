'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const tiers = [
  {
    name: 'Invisalign Express',
    price: '£1,500 – £2,500',
    aligners: 'Up to 7 aligners',
    duration: '3 – 6 months',
    bestFor: 'Minor cosmetic corrections, relapse after previous braces, single gap closure',
    notFor: 'Bite correction, moderate crowding, complex tooth movements',
    color: 'var(--sage-pale)',
    border: '#c8d9c9',
  },
  {
    name: 'Invisalign Lite',
    price: '£2,800 – £3,500',
    aligners: 'Up to 14 aligners',
    duration: '6 – 12 months',
    bestFor: 'Mild-to-moderate crowding, multiple gaps, minor bite discrepancies',
    notFor: 'Deep overbite, underbite, severe crowding requiring extraction consideration',
    color: '#EDF2EE',
    border: '#b8d0ba',
  },
  {
    name: 'Invisalign Comprehensive',
    price: '£3,500 – £5,800',
    aligners: 'Unlimited aligners',
    duration: '12 – 20 months',
    bestFor: 'Complex crowding, overbite, underbite, crossbite, full arch corrections',
    notFor: 'Nothing — this covers the full clinical range',
    color: 'var(--sage)',
    border: 'var(--sage)',
    dark: true,
  },
];

const hiddenCosts = [
  {
    item: 'Vivera Retainers',
    typical: '£300 – £500',
    detail: 'The most overlooked post-treatment cost. Retainers are not optional — without them, your teeth will move back. Some clinics include a single removable retainer in the treatment price; Vivera retainers (Align\'s own brand, sold in sets of four) are usually quoted separately. Clarify this at the consultation stage.',
  },
  {
    item: 'Refinement Aligners',
    typical: 'Often included; sometimes £200–£400',
    detail: 'Refinements are additional aligner sets manufactured after the main treatment to fine-tune the final result. On Comprehensive treatment they are almost always included at no extra cost. On Lite, they may trigger an upgrade charge if the case is more complex than initially planned.',
  },
  {
    item: 'Interproximal Reduction (IPR)',
    typical: 'Usually included',
    detail: 'IPR is the careful removal of tiny amounts of enamel between teeth to create space for movement. It should always be included in the quoted fee. If a clinic quotes separately for IPR, treat that as a red flag and ask for full itemisation.',
  },
  {
    item: 'Lost or Damaged Aligners',
    typical: '£50 – £150 per set',
    detail: 'Aligners are precision-manufactured for your teeth. A lost or damaged set requires a replacement to be manufactured. Most clinics charge per replacement. Keep aligners in their case when not in your mouth.',
  },
  {
    item: 'Teeth Whitening',
    typical: '£300 – £500 add-on',
    detail: 'Many patients choose to whiten at the end of treatment. Not included in Invisalign pricing. Some clinics offer combined packages — worth asking about at consultation.',
  },
];

export default function TrueCostClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ background: 'var(--cream)' }}>

        {/* Hero */}
        <section style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--muted)', marginBottom: '20px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/guides/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>
              <span>/</span>
              <Link href="/guides/costs/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Costs &amp; Financing</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>True Cost of Invisalign</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Costs &amp; Financing · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The True Cost of Invisalign in the UK:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>2026 Pricing Guide</em>
            </h1>
            <p style={pStyle}>
              "It depends" is the most honest answer to the question of Invisalign costs — and also the most frustrating one. It depends on your case complexity, the treatment tier your provider recommends, whether you are in a city centre or a smaller Essex town, and the tier of provider you choose. But "it depends" is not useful when you are trying to decide whether Invisalign is financially realistic for you.
            </p>
            <p style={pStyle}>
              This guide breaks down the actual price ranges by treatment tier, explains what moves the number up or down, flags the costs that often catch patients off guard, and tells you exactly how to get an accurate quote for your specific case — without committing to anything.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Prices by tier */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Average Invisalign Prices in Essex: Breakdown by Tier</h2>
              <p style={pStyle}>
                Align Technology — the manufacturer of Invisalign — produces several distinct products targeting different levels of case complexity. Understanding which tier applies to your situation is the single most useful thing you can do before getting a quote, because it tells you the realistic price bracket before you walk into a consultation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '28px 0' }}>
                {tiers.map(tier => (
                  <div key={tier.name} style={{ background: tier.dark ? tier.color : tier.color, border: `1px solid ${tier.border}`, borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: tier.dark ? '#fff' : 'var(--ink)', margin: 0 }}>{tier.name}</h3>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: tier.dark ? 'rgba(255,255,255,0.9)' : 'var(--sage)' }}>{tier.price}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      {[
                        { label: 'Aligners', value: tier.aligners },
                        { label: 'Duration', value: tier.duration },
                      ].map(item => (
                        <div key={item.label}>
                          <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: tier.dark ? 'rgba(255,255,255,0.5)' : 'var(--muted)', marginBottom: '3px' }}>{item.label}</p>
                          <p style={{ fontSize: '13px', fontWeight: 500, color: tier.dark ? 'rgba(255,255,255,0.85)' : 'var(--ink)', margin: 0 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: '13px', color: tier.dark ? 'rgba(255,255,255,0.75)' : 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                      <strong style={{ color: tier.dark ? 'rgba(255,255,255,0.9)' : 'var(--ink)', fontWeight: 600 }}>Best for: </strong>{tier.bestFor}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                Price ranges reflect Platinum and Diamond provider fees across Essex as of January 2026. Individual quotes may vary. A free consultation and iTero 3D scan will confirm your tier and exact cost before you commit.
              </p>
            </section>

            {/* H2: What affects the price */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What Factors Influence Your Final Quote?</h2>
              <p style={pStyle}>
                Two people with similar-looking teeth can receive quotes that differ by £1,000 or more. The variation is not arbitrary — it reflects genuine differences in case complexity, clinical time, and the market in which the provider operates.
              </p>

              <h3 style={h3Style}>Clinic Location: City Centre vs. Suburban Essex</h3>
              <p style={pStyle}>
                A Chelmsford city centre clinic carries higher overheads than a Church Langley or Braintree practice — higher rent, higher staffing costs, more competition on convenience rather than price. That overhead is reflected in fees. Suburban and smaller-town Essex providers frequently offer equivalent clinical quality at a noticeably lower price point. Our directory covers all 111 Essex towns precisely because the most cost-effective option for your case may not be the most obvious one.
              </p>

              <h3 style={h3Style}>Provider Tier: Diamond vs. Platinum vs. Lower Tiers</h3>
              <p style={pStyle}>
                Counter-intuitively, choosing a higher-tier provider does not always mean paying more — and in some cases it means paying less overall. A Diamond provider completing 300+ Invisalign cases per year is faster and more accurate at treatment planning than a Gold provider doing 20. Fewer errors mean fewer refinement rounds, fewer additional aligner sets, and a treatment that finishes on schedule. The slightly higher consultation fee is often recovered within the first refinement avoided.
              </p>
              <p style={pStyle}>
                We list only Platinum and Diamond providers — not because Gold and lower providers cannot do good work, but because the evidence consistently shows better outcomes and lower refinement rates at higher case volumes.
              </p>

              <h3 style={h3Style}>Case Complexity: What Your Teeth Actually Need</h3>
              <p style={pStyle}>
                The most significant price driver is the clinical complexity of your case. A 2mm relapse gap between two front teeth after childhood braces is a fundamentally different treatment challenge from severe crowding across both arches combined with a deep overbite. The former is Invisalign Express territory; the latter requires Comprehensive with Precision Wing technology. No honest provider can give you an accurate price without a 3D scan of your teeth — which is why the free iTero consultation exists.
              </p>
            </section>

            {/* H2: Hidden costs */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Hidden Costs to Watch Out For</h2>
              <p style={pStyle}>
                The headline quote you receive at consultation should cover all aligners, attachments, IPR where needed, and standard check-up appointments. But several costs sit outside the standard quote at many clinics. Knowing about them in advance means you can ask the right questions — and compare quotes on a like-for-like basis.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '24px 0' }}>
                {hiddenCosts.map((cost, i) => (
                  <div key={cost.item} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)', border: '1px solid var(--border)', borderRadius: '8px', padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{cost.item}</span>
                      <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--sage)', whiteSpace: 'nowrap' }}>{cost.typical}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{cost.detail}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>The right question to ask at consultation</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  "Can you confirm that this quote includes all aligners, all refinements, all IPR, and at least one set of retainers?" A provider who hesitates or deflects on that question is a provider who may present additional charges later.
                </p>
              </div>
            </section>

            {/* H2: Mail-order warning */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Are Cheaper "Mail-Order" Aligners Worth It?</h2>
              <p style={pStyle}>
                Direct-to-consumer aligner companies — brands that ask you to take your own impressions at home and mail them in, without a dentist examining your teeth — are significantly cheaper than Invisalign. Some quote as little as £800 to £1,500 for a full treatment. For many patients the appeal is understandable.
              </p>
              <p style={pStyle}>
                The British Dental Association, the General Dental Council, and the British Orthodontic Society have all published guidance warning against mail-order aligners for the same reason: orthodontic treatment without clinical examination cannot account for root health, bone density, gum condition, or the three-dimensional position of teeth below the gumline. Moving teeth without this information carries real risks — root resorption, gum recession, bite damage, and in serious cases permanent tooth loss.
              </p>
              <p style={pStyle}>
                Several direct-to-consumer aligner companies have ceased trading in the UK, leaving patients mid-treatment with no recourse, no clinical oversight, and teeth in an intermediate position that required corrective treatment to fix. The cases have been documented in the dental press. The GDC has been explicit: orthodontic treatment must involve a registered dental professional who has examined the patient in person.
              </p>
              <div style={{ background: '#FEF3F2', border: '1px solid #FECDCA', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#B42318', marginBottom: '6px' }}>Our position</p>
                <p style={{ fontSize: '14px', color: '#7A271A', lineHeight: 1.7, margin: 0 }}>
                  We do not list direct-to-consumer aligner providers. Every clinic in our directory involves an in-person clinical examination, an iTero 3D scan, and a GDC-registered dentist who takes clinical responsibility for your treatment. The price difference is real. So is the risk difference.
                </p>
              </div>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Compare Quotes in Your Local Area</h2>
              <p style={pStyle}>
                The most accurate price for your treatment is the one a provider gives you after examining your teeth in person. No online guide, including this one, can substitute for a clinical assessment — because the tier you need depends on measurements that only a 3D scan can provide.
              </p>
              <p style={pStyle}>
                The good news is that the assessment is free. Every provider in our Essex network offers a free initial consultation with a full iTero 3D scan and a ClinCheck digital simulation of your proposed treatment. You receive a written, itemised quote at that appointment. There is no obligation to proceed.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
                  Find a Platinum or Diamond Invisalign provider near you:
                </p>
                <Link href="/locations/" style={{ display: 'inline-block', marginBottom: '16px', fontSize: '14px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Browse all 111 Essex towns →
                </Link>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                  Or use our free matching service — tell us your location and treatment interest, and we'll send your details to the 2–3 best-matched Platinum or Diamond providers near you. They contact you within hours to arrange your free consultation.
                </p>
                <button onClick={() => setIsModalOpen(true)} style={{ padding: '12px 28px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                  Get Matched Free
                </button>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Essex Price Summary</p>
              {[
                { tier: 'Express', price: '£1,500 – £2,500' },
                { tier: 'Lite', price: '£2,800 – £3,500' },
                { tier: 'Comprehensive', price: '£3,500 – £5,800' },
              ].map(item => (
                <div key={item.tier} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{item.tier}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{item.price}</span>
                </div>
              ))}
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Finance from ~£50/month at 0%</p>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Can I Get Invisalign on the NHS?', href: '/guides/costs/invisalign-nhs-essex/' },
                  { label: 'Invisalign Payment Plans Explained', href: '/guides/costs/financing-payment-plans/' },
                  { label: 'What Is a Platinum Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                  { label: 'Invisalign vs Braces: Which Is Right?', href: '/guides/costs/invisalign-vs-braces/' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Get an accurate quote</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free iTero scan and written quote. No obligation.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                Find Providers Free
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .guide-grid { grid-template-columns: 1fr !important; }
          .guide-sidebar { position: static !important; }
        }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const h3Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '12px', marginTop: '28px' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
