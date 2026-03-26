'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const essexVenues = [
  { name: 'Gosfield Lake Resort', location: 'Halstead' },
  { name: 'Channels Estate', location: 'Chelmsford' },
  { name: 'The Barn at Beal\'s Farm', location: 'Braintree' },
  { name: 'Blake Hall', location: 'Ongar' },
  { name: 'Notley Abbey', location: 'Braintree' },
  { name: 'Layer Marney Tower', location: 'Colchester' },
];

const townLinks = [
  { name: 'Braintree', slug: 'braintree' },
  { name: 'Colchester', slug: 'colchester' },
  { name: 'Chelmsford', slug: 'chelmsford' },
  { name: 'Harlow', slug: 'harlow' },
  { name: 'Brentwood', slug: 'brentwood' },
  { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
];

export default function WeddingTimelineClient() {
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
              <Link href="/guides/local/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Local Essex Guides</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Wedding Invisalign Timeline</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Local Essex Guide · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Getting Married in Essex?<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Your Pre-Wedding Invisalign Timeline</em>
            </h1>
            <p style={pStyle}>
              Essex has some of the most beautiful wedding venues in the South East — Georgian manor houses in Chelmsford, converted barns across the Braintree countryside, lakeside estates near Halstead, and historic towers outside Colchester. Whatever you have booked, one thing unites every wedding photo taken at all of them: you will spend the rest of your life looking at your smile in those images.
            </p>
            <p style={pStyle}>
              Invisalign is the most popular cosmetic dental treatment chosen specifically in preparation for a wedding — and for good reason. It is discreet enough to wear through the engagement period without anyone noticing, and the timeline is predictable enough to plan around a wedding date with precision. This guide tells you exactly how much lead time you need and what is achievable at every stage.
            </p>

            {/* Venue name-drops */}
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '16px 20px', marginTop: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>Popular Essex wedding venues — and how much smile prep time you have</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {essexVenues.map(v => (
                  <span key={v.name} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', color: 'var(--muted)' }}>
                    {v.name} <span style={{ color: 'var(--sage)', fontSize: '11px' }}>({v.location})</span>
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '10px', marginBottom: 0, fontStyle: 'italic' }}>
                Most Essex venues are booked 12–18 months in advance — the same lead time as Invisalign Comprehensive. The timing is not a coincidence.
              </p>
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* Timeline visual */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', margin: '0 0 48px' }} className="three-col-sm-grid">
              {[
                { label: '12–18 months', tier: 'Comprehensive', badge: 'Ideal window', badgeColor: 'var(--sage)', badgeBg: 'var(--sage-pale)', desc: 'Full corrections + whitening time' },
                { label: '6–9 months', tier: 'Invisalign Lite', badge: 'Good window', badgeColor: '#1D6B44', badgeBg: '#D1FAE5', desc: 'Moderate crowding and gaps' },
                { label: '3 months', tier: 'Express', badge: 'Still possible', badgeColor: '#8B6914', badgeBg: '#FEF9C3', desc: 'Minor front-tooth corrections' },
              ].map(w => (
                <div key={w.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Start</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{w.label}</p>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', background: w.badgeBg, color: w.badgeColor, display: 'inline-block', marginBottom: '8px' }}>{w.badge}</span>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>{w.tier}: {w.desc}</p>
                </div>
              ))}
            </div>

            {/* H2: 12-18 months */}
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <span style={{ background: 'var(--sage)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', flexShrink: 0 }}>Ideal window</span>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>12–18 Months Out: The Ideal Starting Point</h2>
              </div>

              <p style={pStyle}>
                If your wedding is 12 to 18 months away, you have the most flexibility of any pre-wedding treatment window — and that flexibility matters. Invisalign Comprehensive can be prescribed with unlimited aligners, covers the full clinical range of adult tooth movements, and typically completes in 12 to 18 months for moderate-to-complex cases. Starting now means you can address whatever your case needs without feeling rushed.
              </p>
              <p style={pStyle}>
                The other critical advantage of this window is time for teeth whitening after treatment. Whitening is most effective on clean, recently straightened teeth — and it is always done after Invisalign, not during, because the aligner trays sit flush against your enamel and would interfere with bleaching gel distribution. A professional whitening course (in-chair or take-home tray) takes four to six weeks. Starting Invisalign at 15 months out gives you 12 months of treatment, a month of post-treatment settling, and two months for whitening before the wedding. The result in photographs is the full transformation — straighter and brighter.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Ideal 15-month wedding timeline</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { period: 'Month 1', action: 'Free 3D scan consultation — see ClinCheck preview of your finished smile before committing' },
                    { period: 'Month 2', action: 'Aligners delivered and fitted. Attachments bonded if required.' },
                    { period: 'Months 2–14', action: 'Active treatment — aligner changes every 1–2 weeks, check-ups every 6–8 weeks' },
                    { period: 'Month 14', action: 'Final aligner. Attachments removed. Teeth polished.' },
                    { period: 'Month 14–15', action: 'Professional whitening — in-chair or take-home tray.' },
                    { period: 'Month 15', action: 'Wedding day. Retainers supplied — worn nightly from here.' },
                  ].map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--sage)', flexShrink: 0, width: '80px' }}>{step.period}</span>
                      <span style={{ color: 'var(--muted)' }}>{step.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* H2: 6-9 months */}
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <span style={{ background: '#D1FAE5', color: '#1D6B44', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', flexShrink: 0 }}>Good window</span>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>6–9 Months Out: The Invisalign Lite Window</h2>
              </div>

              <p style={pStyle}>
                Six to nine months before your wedding date is still a very workable starting point — provided your case is appropriate for Invisalign Lite (up to 14 aligners). This covers mild-to-moderate crowding, multiple small gaps, minor overbite, and cases where 2–4mm of tooth movement is needed across the arch. For the majority of adults with predominantly cosmetic concerns — teeth that are reasonably well-positioned but not quite aligned the way they would like them — Lite is the right product.
              </p>
              <p style={pStyle}>
                The constraint at this window is the absence of time for significant complications. If a Lite case tracks poorly and requires an additional refinement phase, that can add six to eight weeks — which can become an issue when working backward from a fixed date. The way to mitigate this is to choose an experienced Platinum provider: higher case volumes mean better treatment planning, lower refinement rates, and more realistic timelines communicated upfront.
              </p>
              <p style={pStyle}>
                At six to nine months, there is still time for a four-week take-home whitening course after treatment, delivered through custom trays made from your aligner moulds. You arrive at the venue with a straightened and whitened smile — the goal of anyone starting in this window.
              </p>
            </section>

            {/* H2: 3 months */}
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <span style={{ background: '#FEF9C3', color: '#8B6914', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', flexShrink: 0 }}>Still possible</span>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>3 Months Out: Is It Too Late? (Invisalign Express)</h2>
              </div>

              <p style={pStyle}>
                Three months is not too late — but it requires the right case and realistic expectations. Invisalign Express uses up to seven aligners and is designed for minor cosmetic corrections: a small gap between the upper front teeth, very slight crowding of the lower incisors, or minor relapse after childhood braces. These are the kinds of improvements that make the difference between teeth you are self-conscious about and teeth you are confident smiling with in photographs.
              </p>
              <p style={pStyle}>
                The "social six" — the six front teeth visible when you smile — are what Express is specifically optimised for. If your concern is primarily cosmetic and concentrated in the most visible area of your smile, Express is a clinically appropriate and time-appropriate option at three months.
              </p>
              <p style={pStyle}>
                What three months does not leave room for: significant crowding, any bite correction, movement of multiple back teeth, or two rounds of treatment if the first attempt does not achieve the result. Be honest with a provider about your timeline and your expectations. A Platinum provider will tell you clearly whether Express can give you a meaningful improvement in time — or whether it is not the right product for your case. If the latter, they can advise on what is achievable and whether partial treatment before the wedding plus completion afterwards makes sense.
              </p>
            </section>

            {/* H2: Treatment not finished */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What If Your Treatment Isn&apos;t Finished by the Big Day?</h2>
              <p style={pStyle}>
                This is where Invisalign has an extraordinary advantage over fixed braces that most people do not think about until they are in the situation. If your treatment is not quite complete — perhaps you are mid-way through a refinement phase — you have a simple option that is simply not available to brace patients:
              </p>
              <p style={pStyle}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>You can take your aligners out for the wedding and put them back in after the honeymoon.</strong>
              </p>
              <p style={pStyle}>
                If you are wearing aligners rather than fixed appliances, the attachments are bonded to your teeth but the trays are removable. For the wedding ceremony, the photos, and the reception — however many hours that covers — you simply do not wear the aligners. Your teeth will not move meaningfully in a single day. You put the current set of aligners back in when treatment resumes, continue from exactly where you left off, and finish treatment on schedule.
              </p>
              <p style={pStyle}>
                Compare this to the situation for a brace patient whose treatment runs long: metal brackets, visible wires, and elastic bands in every wedding photograph. There is no removal option. The brace is there for the ceremony, the first dance, the speeches, and the photos that will hang on walls for decades.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px', margin: '24px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Worth planning for</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  If your attachments are still bonded on the wedding day, ask your provider about having them temporarily removed and re-bonded. This is a clinical decision that depends on where you are in the treatment plan — not all providers will agree to it, and some movements cannot be paused safely at interim stages. Discuss this option explicitly at the time you start treatment so expectations are managed from day one.
                </p>
              </div>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Say &lsquo;I Do&rsquo; to a Free Consultation</h2>
              <p style={pStyle}>
                The single most useful thing you can do right now is book a free 3D scan consultation. The iTero scan takes four minutes, the ClinCheck animation shows you your proposed smile transformation before you commit to anything, and the provider gives you an honest timeline based on your actual case — not a generic estimate.
              </p>
              <p style={pStyle}>
                That timeline tells you exactly what is achievable before your wedding, which product is appropriate, and whether whitening is feasible afterwards. Everything else in this guide becomes concrete and personalised. There is no charge and no obligation.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  Start with a free 3D smile simulation near your Essex venue
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Compare top-rated cosmetic dentists in Essex and find a Platinum or Diamond provider near you. Every listed clinic offers a free initial consultation including a ClinCheck preview of your treatment outcome.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {townLinks.map(t => (
                    <Link key={t.slug} href={`/locations/${t.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      {t.name} →
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => setIsModalOpen(true)} style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                    Get Matched Free
                  </button>
                  <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px', alignSelf: 'center' }}>
                    Browse all Essex locations →
                  </Link>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Your Timeline Summary</p>
              {[
                { label: '18 months+', value: 'Comprehensive + whitening — full transformation' },
                { label: '12 months', value: 'Comprehensive — complex corrections complete' },
                { label: '6–9 months', value: 'Lite — moderate crowding and gaps' },
                { label: '3 months', value: 'Express — front tooth cosmetic corrections' },
                { label: 'Any point', value: 'Remove aligners on the wedding day — resume after' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i < 4 ? '12px' : 0, paddingBottom: i < 4 ? '12px' : 0, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginTop: '2px', width: '70px', lineHeight: 1.3 }}>{item.label}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'How Long Does Invisalign Take?', href: '/guides/treatment-process/how-long-does-invisalign-take/' },
                { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
                { label: 'Invisalign Payment Plans Explained', href: '/guides/costs/financing-payment-plans/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>See your smile before you commit</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free 3D ClinCheck simulation. Free consultation. No obligation.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Book Free Consultation</button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) { .guide-grid { grid-template-columns: 1fr !important; } .guide-sidebar { position: static !important; } }
        @media (max-width: 640px) { .three-col-sm-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
