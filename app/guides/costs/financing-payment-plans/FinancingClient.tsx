'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const exampleCalculations = [
  { treatment: 'Invisalign Express', total: 3500, deposit: 500, months: 24, label: 'Mid-range Lite case' },
  { treatment: 'Invisalign Lite',    total: 2800, deposit: 350, months: 18, label: 'Lite — 18 months' },
  { treatment: 'Comprehensive',      total: 4800, deposit: 800, months: 36, label: 'Comprehensive — 3 years' },
];

export default function FinancingClient() {
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
              <span style={{ color: 'var(--ink)' }}>Payment Plans</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Costs &amp; Financing · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              How to Finance Your Smile:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>A Guide to Invisalign Payment Plans</em>
            </h1>
            <p style={pStyle}>
              The sticker price of Invisalign — anywhere from £1,500 to £5,800 depending on your case — can make private orthodontic treatment feel out of reach. But in practice, more than 60% of private dental patients in the UK use some form of monthly financing to spread that cost over time. For most working adults, the real question is not "can I afford Invisalign?" but "what does Invisalign actually cost me per month?" This guide gives you the full picture on how dental finance works, what the credit check involves, and how to find the right payment structure for your situation.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: How 0% finance works */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>How 0% Dental Finance Works in the UK</h2>
              <p style={pStyle}>
                Zero per cent interest dental finance is exactly what it says: you pay the total cost of your treatment spread across a fixed number of monthly instalments, with no interest added. If your treatment costs £3,000 and you choose a 24-month plan, you pay £125 per month for 24 months. At the end you have paid £3,000 — not a penny more.
              </p>
              <p style={pStyle}>
                The clinic absorbs the cost of the interest-free period, which is why 0% finance is offered selectively — typically on treatments above a minimum threshold (usually £500 to £1,000) and over set repayment periods. Common 0% terms available at Essex Invisalign providers are 12, 18, and 24 months. Some clinics extend 0% to 36 months for larger treatment fees.
              </p>

              <h3 style={h3Style}>FCA Regulation and Consumer Protection</h3>
              <p style={pStyle}>
                Dental finance in the UK is regulated by the Financial Conduct Authority (FCA). Any clinic offering credit — including 0% payment plans — must either hold an FCA consumer credit licence or operate through an FCA-authorised credit broker. This regulation exists to protect you: it means the terms of your agreement must be clearly disclosed before you sign, you have a 14-day cooling-off period after signing, and there is a regulatory complaints process if something goes wrong.
              </p>
              <p style={pStyle}>
                When you sign a finance agreement at a dental clinic, you are entering a regulated consumer credit agreement — not an informal arrangement with the practice. Your rights under the Consumer Credit Act 1974 apply in full.
              </p>

              <h3 style={h3Style}>Why Clinics Offer It</h3>
              <p style={pStyle}>
                Offering 0% finance makes treatment accessible to more patients — which is good for the clinic commercially. The cost of the interest-free period is factored into the clinic's pricing model. This is why clinics that offer 0% finance sometimes appear slightly more expensive on headline price than those that don't. The finance facility is a benefit to you, but it is not free to the practice. Understanding this helps you compare quotes accurately: a clinic charging £3,200 with 0% finance included may represent better value than one charging £2,900 with no finance available.
              </p>
            </section>

            {/* H2: Monthly cost breakdown */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Breaking Down the Monthly Costs</h2>
              <p style={pStyle}>
                The maths on dental finance is straightforward. The three variables are your total treatment cost, your deposit (if any), and the repayment term. Here are three realistic Essex scenarios:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {exampleCalculations.map((ex) => {
                  const financed = ex.total - ex.deposit;
                  const monthly  = Math.round(financed / ex.months);
                  return (
                    <div key={ex.treatment} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                        <div>
                          <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>{ex.treatment}</p>
                          <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{ex.label}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--sage)', lineHeight: 1 }}>£{monthly}/mo</p>
                          <p style={{ fontSize: '11px', color: 'var(--muted)' }}>at 0% over {ex.months} months</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--muted)', borderTop: '1px solid var(--border)', paddingTop: '12px', flexWrap: 'wrap' }}>
                        <span>Total: <strong style={{ color: 'var(--ink)' }}>£{ex.total.toLocaleString()}</strong></span>
                        <span>Deposit: <strong style={{ color: 'var(--ink)' }}>£{ex.deposit.toLocaleString()}</strong></span>
                        <span>Financed: <strong style={{ color: 'var(--ink)' }}>£{financed.toLocaleString()}</strong></span>
                        <span>Interest: <strong style={{ color: 'var(--sage)' }}>£0</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                Deposits vary by clinic — some require none. Monthly figures shown are illustrative at 0% APR. Your provider will confirm exact terms at consultation.
              </p>
            </section>

            {/* H2: Credit check */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The Credit Check Process</h2>
              <p style={pStyle}>
                Applying for dental finance involves a credit check. Understanding what type of check is involved — and what happens if your score is lower — removes most of the anxiety around applying.
              </p>

              <h3 style={h3Style}>Soft vs. Hard Checks</h3>
              <p style={pStyle}>
                Some clinics and credit brokers run a <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>soft credit check</strong> at the initial stage. A soft check gives the lender a view of your credit file but does not leave a visible footprint — meaning other lenders cannot see it and it does not affect your credit score. This is sometimes used for an initial eligibility assessment before you formally apply.
              </p>
              <p style={pStyle}>
                A <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>hard credit check</strong> is recorded on your credit file and is visible to other lenders for 12 months. This is performed at the formal application stage. Multiple hard checks in a short period can affect your credit score, so avoid applying to several finance options simultaneously.
              </p>
              <p style={pStyle}>
                The majority of employed adults with a stable credit history — no County Court Judgements (CCJs), no defaults, and manageable existing credit commitments — will be approved for standard 0% dental finance terms.
              </p>

              <h3 style={h3Style}>If Your Credit Score Is Lower</h3>
              <p style={pStyle}>
                If you are declined for 0% finance or have a credit history that makes short-term 0% plans unavailable, interest-bearing options over longer terms (36 to 60 months) are usually still accessible. These typically carry APR rates between 9.9% and 14.9%. On a £3,000 treatment over 48 months at 9.9% APR, you would pay approximately £75–£80 per month but a higher total overall. Some patients find this a worthwhile trade-off for keeping monthly payments very low.
              </p>
              <p style={pStyle}>
                Clinics are not permitted to guarantee finance approval before a credit check is completed. If a clinic tells you "everyone is approved," treat that with scepticism — it is not how FCA-regulated consumer credit works.
              </p>
            </section>

            {/* H2: In-house vs third-party */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>In-House Payment Plans vs. Third-Party Credit</h2>
              <p style={pStyle}>
                When you arrange finance at a dental clinic, there are two distinct structures you may encounter — and understanding the difference helps you ask the right questions.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '24px 0' }} className="two-col-sm-grid">
                <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>In-House Payment Milestones</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>
                    Some clinics offer their own staged payment structure — you pay a deposit before treatment, a mid-treatment payment when aligners are delivered, and a final payment on completion. This is not credit in the regulated sense; it is a commercial arrangement with the practice. No credit check is required. It is interest-free by default but the terms are entirely at the clinic's discretion. If you miss a payment, the clinic — not a credit company — is the party you deal with.
                  </p>
                </div>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>Third-Party Credit Brokers</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>
                    Most larger dental practices use FCA-authorised credit brokers — companies like Chrysalis Finance, Medenta, or DivideBuy — to arrange regulated consumer credit on their behalf. This gives you the full consumer protection framework of the Consumer Credit Act, access to longer terms and higher credit limits than most in-house plans, and a formal complaints process if something goes wrong. The downside is the credit check and the formal application process.
                  </p>
                </div>
              </div>

              <p style={pStyle}>
                For most patients, third-party FCA-regulated finance over 12 to 24 months at 0% APR is the most cost-effective and protected option. In-house milestone payments can work well for shorter, less complex treatments where the total fee is lower and fewer payments are involved.
              </p>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Find a Clinic Offering 0% Finance in Essex</h2>
              <p style={pStyle}>
                The majority of Platinum and Diamond Invisalign providers in our Essex network offer 0% finance options as a standard part of their treatment offering. Both{' '}
                <Link href="/clinics/nuffield-dental-harlow/" style={{ color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Nuffield Dental</Link>
                {' '}and{' '}
                <Link href="/clinics/church-langley-dental-harlow/" style={{ color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Church Langley Dental</Link>
                {' '}in Harlow offer flexible finance arrangements — the exact terms are confirmed at your free initial consultation, which includes a full 3D scan and written quote.
              </p>
              <p style={pStyle}>
                To see which providers near you offer finance and to get a free quote before committing to anything, use our clinic directory or our free matching service below.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Compare Invisalign providers with 0% finance in Essex</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0' }}>
                    Browse our <Link href="/clinics/" style={{ color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Clinics Directory</Link> or use our free matching service to be connected with up to 3 Platinum and Diamond providers near you — free consultation, free 3D scan, no obligation.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} style={{ padding: '12px 24px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer', flexShrink: 0 }}>
                  Get Matched Free
                </button>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Key Facts</p>
              {[
                '60%+ of private dental patients use finance',
                '0% plans: 12, 18 or 24 months typically',
                'FCA-regulated — you have legal protections',
                'Credit check required for formal finance',
                'No-interest options from ~£50/month',
                '14-day cooling-off period after signing',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'True Cost of Invisalign in the UK', href: '/guides/costs/true-cost-invisalign-uk/' },
                  { label: 'Can I Get Invisalign on the NHS?', href: '/guides/costs/invisalign-nhs-essex/' },
                  { label: 'Invisalign vs Braces: Which Is Right?', href: '/guides/costs/invisalign-vs-braces/' },
                  { label: 'What Is a Platinum Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>See your monthly cost</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free consultation. Written quote. Finance terms confirmed on the day.</p>
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
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const h3Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '12px', marginTop: '28px' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
