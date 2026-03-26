'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const insurers = [
  {
    name: 'Bupa Health Insurance',
    standard: 'Excluded — classified as cosmetic orthodontics',
    premium: 'Bupa Dental Premium add-on: up to £500 cash benefit per year towards private orthodontics, subject to a 6-month qualifying period',
    verdict: 'Limited',
  },
  {
    name: 'AXA Health',
    standard: 'Excluded from standard medical and basic dental cover',
    premium: 'Dental Select Plus: fixed cash benefit up to £400 per year for orthodontics; rarely covers more than a single aligner set',
    verdict: 'Limited',
  },
  {
    name: 'Aviva',
    standard: 'Excluded — cosmetic orthodontics not covered under health policies',
    premium: 'Premium dental add-on available; check current schedule of benefits as terms vary by policy year',
    verdict: 'Limited',
  },
  {
    name: 'Vitality Health',
    standard: 'Excluded from core health policy',
    premium: 'Dental add-on includes orthodontics benefit; typically capped at £300–£500 per year depending on plan tier',
    verdict: 'Limited',
  },
  {
    name: 'WPA',
    standard: 'Excluded — cosmetic dental treatment not included in standard health plans',
    premium: 'Flexible dental module available; caps and exclusions apply — check individual policy wording',
    verdict: 'Limited',
  },
];

export default function InsuranceClient() {
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
              <span style={{ color: 'var(--ink)' }}>Health Insurance Cover</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Costs &amp; Financing · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Does UK Private Health Insurance<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Cover Invisalign?</em>
            </h1>
            <p style={pStyle}>
              If you have private health or dental insurance, it is completely natural to wonder whether it covers Invisalign before committing to paying for it yourself. The confusion is understandable — particularly for people familiar with how dental insurance works in the United States, where orthodontic coverage through an employer plan is common. The UK system works very differently, and understanding the distinction clearly will save you time spent on the phone to insurers and set realistic expectations about what your policy can and cannot do.
            </p>
            <p style={pStyle}>
              The short version: standard UK private health and dental policies almost universally exclude Invisalign. There are limited exceptions through premium dental add-ons, but the benefits are typically small — rarely enough to make a material difference to your total cost. Here is what you need to know.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Cosmetic vs Medical */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The Short Answer: Cosmetic vs. Medical</h2>
              <p style={pStyle}>
                UK private health insurers — Bupa, AXA Health, Aviva, Vitality, WPA, and others — categorise treatments based on whether they are medically necessary or cosmetic in nature. Orthodontic treatment with clear aligners, including Invisalign, is classified as cosmetic by all major UK insurers under their standard policy terms. As a cosmetic procedure, it is explicitly excluded from coverage.
              </p>
              <p style={pStyle}>
                This is not a loophole or an oversight — it is a deliberate policy position that reflects the same logic applied by the NHS. Both institutions define "medically necessary" orthodontics as treatment required to address a functional health problem: severe malocclusion that affects eating or speech, skeletal discrepancies requiring surgical intervention, or trauma-related dental damage. Straightening teeth for aesthetic reasons — even when that results in genuine health benefits like easier cleaning — does not meet that threshold under standard policy terms.
              </p>
              <p style={pStyle}>
                The result is unambiguous: if you call Bupa, AXA, or Aviva and ask whether your standard health or dental policy covers Invisalign, the answer will be no.
              </p>

              <div style={{ background: '#FEF3F2', border: '1px solid #FECDCA', borderRadius: '10px', padding: '18px 20px', margin: '24px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#B42318', marginBottom: '6px' }}>Common misconception</p>
                <p style={{ fontSize: '14px', color: '#7A271A', lineHeight: 1.7, margin: 0 }}>
                  US dental insurance routinely includes orthodontic benefits — sometimes covering 50% of treatment up to a lifetime maximum. UK private health insurance does not work this way. The two systems are structurally different. If you have moved to the UK from the US and assumed your British health policy would offer similar orthodontic cover, it almost certainly will not.
                </p>
              </div>
            </section>

            {/* H2: Exceptions */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Exceptions: When Might Insurance Pay Towards It?</h2>
              <p style={pStyle}>
                Some insurers offer premium dental add-ons to their standard health policies that include a fixed cash benefit or percentage contribution towards private orthodontic treatment. These are opt-in additions — not part of any standard health plan — and they come with conditions that significantly limit their practical value.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)' }}>Insurer</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#B42318', borderBottom: '2px solid var(--border)' }}>Standard policy</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)' }}>Premium dental add-on</th>
                    </tr>
                  </thead>
                  <tbody>
                    {insurers.map((ins, i) => (
                      <tr key={ins.name} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{ins.name}</td>
                        <td style={{ padding: '12px 16px', color: '#9A9A92', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{ins.standard}</td>
                        <td style={{ padding: '12px 16px', color: 'var(--muted)', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{ins.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                Policy terms change annually. Always check the current schedule of benefits directly with your insurer before assuming coverage. Information above reflects general market positioning as of January 2026.
              </p>

              <h3 style={h3Style}>The Practical Reality of Premium Dental Benefits</h3>
              <p style={pStyle}>
                Even where premium dental add-ons include an orthodontic benefit, the cap — typically £300 to £500 per year — rarely covers more than a fraction of Invisalign treatment. A £500 insurance benefit towards a £3,500 treatment still leaves you funding £3,000 yourself. The premium add-on will also cost you additional monthly premiums, and most include a qualifying period (typically 6 months) before orthodontic benefits become available. Run the maths carefully: in many cases, the additional premium cost over the qualifying period reduces the net benefit significantly.
              </p>
              <p style={pStyle}>
                That said, if you already have a premium dental policy with an orthodontic benefit, claiming it is always worthwhile. Even £400 towards your total cost is £400 you do not have to finance. Check your policy schedule, confirm the qualifying period has been met, and submit a claim after treatment — most insurers require the treatment to be completed before they pay out.
              </p>
            </section>

            {/* H2: Denplan */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What About Denplan and Practice Membership Plans?</h2>
              <p style={pStyle}>
                Denplan is the UK's most widely used dental payment plan — over 6,500 dental practices use it, and many patients assume it functions like dental insurance. It does not. Denplan is a capitation scheme: you pay a fixed monthly fee to your dentist in exchange for a defined set of routine dental services (examinations, X-rays, hygiene appointments, and sometimes basic restorative work). It is a budgeting tool for routine dentistry, not an insurance policy.
              </p>
              <p style={pStyle}>
                Cosmetic and specialist treatments — including Invisalign — are not covered under any standard Denplan arrangement. Some Denplan-registered practices offer their registered patients a percentage discount on cosmetic treatments as a courtesy benefit. This is typically 10% off the listed treatment fee, not a contribution from Denplan itself. On a £3,500 treatment, that is a £350 saving — meaningful, but not coverage.
              </p>
              <p style={pStyle}>
                Other practice-level membership schemes work similarly: fixed monthly fees covering routine care, with discounts rather than coverage for elective treatments. If your dentist offers a membership scheme, ask specifically whether it includes any orthodontic discount and what the percentage is. It may reduce your Invisalign quote slightly, but you should plan to fund the remainder through other means.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Worth checking before you start</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  If you are already a Denplan or membership patient at a clinic that also offers Invisalign, ask whether your membership entitles you to a discount on orthodontic treatment. Many practices honour this informally even if it is not prominently advertised.
                </p>
              </div>
            </section>

            {/* H2: Alternative — 0% finance */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>The Most Cost-Effective Alternative to Insurance</h2>
              <p style={pStyle}>
                For the overwhelming majority of Essex adults, the most practical and cost-effective way to access Invisalign is not through insurance — it is through 0% interest finance provided directly by the treating clinic or through an FCA-authorised credit broker.
              </p>
              <p style={pStyle}>
                0% finance means you pay the total cost of your treatment spread across monthly instalments — typically 12, 18, or 24 months — with no interest added. A £3,000 treatment over 24 months at 0% APR costs £125 per month. There is no insurer involved, no qualifying period, no claims process, and no ambiguity about what is covered. The full cost of your treatment is defined at the outset, and the finance agreement is regulated by the Financial Conduct Authority, giving you clear consumer protections.
              </p>
              <p style={pStyle}>
                For most people, the monthly cost of 0% Invisalign finance compares favourably to the combined cost of insurance premiums plus the gap between insurance benefits and actual treatment cost. It is also simpler: no policy to manage, no claim to submit, and no risk of the benefit being reduced or removed at renewal.
              </p>
              <p style={pStyle}>
                Our guide to{' '}
                <Link href="/guides/costs/financing-payment-plans/" style={{ color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500 }}>
                  Invisalign payment plans and dental finance
                </Link>{' '}
                covers the full mechanics — how credit checks work, the difference between in-house milestone payments and third-party FCA-regulated credit, and worked monthly cost examples across the three Invisalign treatment tiers.
              </p>

              {/* CTA block */}
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>
                  Find Essex providers offering 0% finance — no insurance needed
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every Platinum and Diamond provider in our directory offers a free initial consultation and a written, itemised quote. Most offer 0% finance options. Use our directory to find providers near you, or our matching service to be connected with the best-matched clinics in your area.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    style={{ padding: '12px 24px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
                  >
                    Get Matched Free
                  </button>
                  <Link
                    href="/locations/"
                    style={{ padding: '12px 24px', background: 'transparent', border: '1px solid #c8d9c9', borderRadius: '40px', fontSize: '14px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}
                  >
                    Browse by Location →
                  </Link>
                </div>
              </div>

              {/* Internal links */}
              <div style={{ borderTop: '2px solid var(--sage-pale)', paddingTop: '24px', marginTop: '8px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Continue reading: Cluster 1 — Costs &amp; Financing</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'The True Cost of Invisalign in the UK (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                    { label: 'How to Finance Invisalign: Payment Plans Explained', href: '/guides/costs/financing-payment-plans/' },
                    { label: 'Can I Get Invisalign on the NHS?', href: '/guides/costs/invisalign-nhs-essex/' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} style={{ fontSize: '14px', color: 'var(--sage)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      → {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">

            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Key Takeaways</p>
              {[
                'Standard UK health insurance: Invisalign excluded',
                'Premium dental add-ons: up to ~£500 max benefit',
                'Qualifying periods of 6 months typically apply',
                'Denplan covers routine care, not Invisalign',
                '10% practice discounts sometimes available',
                '0% finance is the most cost-effective route',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Cluster 1: Costs &amp; Financing</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                  { label: 'Invisalign Payment Plans Explained', href: '/guides/costs/financing-payment-plans/' },
                  { label: 'Can I Get Invisalign on the NHS?', href: '/guides/costs/invisalign-nhs-essex/' },
                  { label: 'Does Health Insurance Cover Invisalign?', href: '/guides/costs/private-health-insurance-cover/' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', fontWeight: link.href.includes('insurance') ? 600 : 400 }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Skip the insurance complexity</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free consultation. 0% finance confirmed at the appointment.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
              >
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
