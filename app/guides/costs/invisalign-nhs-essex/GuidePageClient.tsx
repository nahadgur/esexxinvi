'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

// ── Internal links to town pages — edit this list as needed ──────────────────
const featuredTowns = [
  { name: 'Harlow',          slug: 'harlow' },
  { name: 'Chelmsford',      slug: 'chelmsford' },
  { name: 'Colchester',      slug: 'colchester' },
  { name: 'Basildon',        slug: 'basildon' },
  { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
  { name: 'Brentwood',       slug: 'brentwood' },
];

const comparisonRows = [
  { feature: 'Appearance',         nhs: 'Visible metal brackets and wires',             private: 'Clear, virtually invisible aligners' },
  { feature: 'Wait time',          nhs: '12–24+ months before treatment starts',        private: 'Consultation within 1–2 weeks' },
  { feature: 'Cost to patient',    nhs: 'Free (if eligible)',                           private: '£1,500–£5,500 depending on complexity' },
  { feature: 'Finance options',    nhs: 'None — NHS treatment is fixed-cost at £0',     private: '0% interest plans from £50/month' },
  { feature: 'Adult eligibility',  nhs: 'Extremely rare — severe health need only',     private: 'Any adult with healthy teeth and gums' },
  { feature: 'Food restrictions',  nhs: 'Long list of banned foods with fixed braces',  private: 'None — remove aligners to eat anything' },
  { feature: 'Check-up frequency', nhs: 'Monthly tightening appointments',              private: 'Every 6–8 weeks only' },
  { feature: 'Result preview',     nhs: 'No preview before treatment begins',           private: 'Full 3D ClinCheck simulation before you commit' },
];

export default function GuidePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ background: 'var(--cream)' }}>

        {/* ── Hero ── */}
        <section style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,56px)', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '760px' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--muted)', marginBottom: '20px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/guides/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Guides</Link>
              <span>/</span>
              <Link href="/guides/costs/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Costs & Financing</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Invisalign on the NHS</span>
            </div>

            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Costs &amp; Financing · Updated January 2026
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Can You Get Invisalign on the NHS in the UK?
              <br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>2026 Guide</em>
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '640px' }}>
              It is one of the most common questions we receive. The answer is almost always no — but understanding why, and what the real alternatives look like, can save you a great deal of time and frustration. This guide explains how NHS orthodontic funding actually works, why clear aligners are effectively excluded, and how Essex adults are accessing Invisalign affordably through private providers.
            </p>
          </div>
        </section>

        {/* ── Article body ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          {/* Main content */}
          <article style={{ minWidth: 0 }}>

            {/* H2: How NHS Funding Works */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>How NHS Orthodontic Funding Works</h2>
              <p style={pStyle}>
                The NHS does fund orthodontic treatment in the UK — but funding is allocated on clinical need, not cosmetic preference, and it is primarily reserved for children and teenagers under 18. To understand why adults rarely qualify and why Invisalign specifically is almost never covered, you need to understand the system used to decide who gets treatment.
              </p>

              <h3 style={h3Style}>The Index of Orthodontic Treatment Need (IOTN)</h3>
              <p style={pStyle}>
                Every patient seeking NHS orthodontic treatment is assessed using the Index of Orthodontic Treatment Need (IOTN). This is a standardised scoring system that grades dental misalignment on a scale from 1 to 5, based on two components: the Dental Health Component (DHC), which measures functional and health-related issues, and the Aesthetic Component (AC), which measures the visual severity of misalignment.
              </p>
              <p style={pStyle}>
                NHS funding is only available for patients scoring at IOTN Grade 4 or Grade 5 on the DHC — meaning severe misalignment that poses a genuine risk to dental health. Grades 1, 2, and 3 — which cover the vast majority of adults who want straighter teeth — do not qualify. A patient with noticeable crowding, a visible gap between their front teeth, or a mild overbite that has never caused functional problems will almost certainly score Grade 2 or 3. That means no NHS funding, regardless of how long they have lived with the issue.
              </p>

              <h3 style={h3Style}>Why Clear Aligners Are Excluded</h3>
              <p style={pStyle}>
                Even for patients who do score high enough on the IOTN, the NHS funds treatment based on clinical effectiveness and cost — not patient preference for a particular system. The treatment provided is almost invariably fixed metal braces. Clear aligners like Invisalign are not an approved NHS treatment modality.
              </p>
              <p style={pStyle}>
                The reason is straightforward: Invisalign is significantly more expensive than traditional fixed appliances, and the NHS does not fund cosmetic upgrades within an orthodontic treatment plan. The NHS can straighten teeth using metal brackets and wires — which it does effectively — and it has no mandate to fund a more aesthetically convenient alternative. If you are eligible for NHS orthodontics, you will be offered braces. Invisalign is simply not on the menu.
              </p>
            </section>

            {/* H2: Comparison table */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>NHS Braces vs. Private Invisalign: The Main Differences</h2>
              <p style={pStyle}>
                Before accepting that private treatment is out of reach, it is worth understanding what you are actually comparing. NHS braces and private Invisalign are not interchangeable experiences — they differ substantially in convenience, comfort, and the day-to-day realities of living with treatment.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '28%' }}>Feature</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--muted)', borderBottom: '2px solid var(--border)' }}>NHS Metal Braces</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Private Invisalign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.feature}</td>
                        <td style={{ padding: '12px 16px', color: '#9A9A92', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.nhs}</td>
                        <td style={{ padding: '12px 16px', color: 'var(--sage)', fontWeight: 500, borderBottom: '1px solid var(--border)', fontSize: '13px', background: 'var(--sage-pale)' }}>{row.private}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ ...pStyle, fontSize: '13px', color: 'var(--muted)', fontStyle: 'italic' }}>
                NHS eligibility is subject to IOTN scoring and local commissioning decisions. Waiting times vary by region and can exceed 24 months in parts of Essex.
              </p>
            </section>

            {/* H2: Reality for adults in Essex */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The Reality for Adults Seeking Orthodontics in Essex</h2>
              <p style={pStyle}>
                For adults in Essex, NHS orthodontic funding is exceptionally rare. In practice, adult NHS orthodontics is reserved almost exclusively for patients who require jaw surgery — cases where the skeletal relationship between the upper and lower jaw is so severe that orthodontic treatment alone cannot correct the problem. These are significant medical conditions, not cosmetic concerns.
              </p>
              <p style={pStyle}>
                If you are an adult with crowded teeth, a gap between your front teeth, a mild to moderate overbite, or teeth that have shifted since teenage braces — none of these will typically meet the IOTN threshold for NHS funding. Your GP or dentist may refer you for an orthodontic assessment, but the outcome for most adults is a recommendation for private treatment.
              </p>
              <p style={pStyle}>
                This is not a failing of the NHS — it is a reflection of the fact that the system was designed to treat health-critical misalignment, not to provide cosmetic orthodontics to the general adult population. Understanding this clearly means you can stop waiting for a funding solution that is unlikely to materialise, and focus your energy on finding affordable private options instead.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '20px 24px', margin: '24px 0' }}>
                <p style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: 500, marginBottom: '6px' }}>Worth knowing</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  If you are under 18, the situation is different. Children and teenagers with IOTN Grade 4 or 5 can access NHS fixed braces at no cost. If you are enquiring on behalf of a child or teenager, speak to your NHS dentist about a referral — you do not need to use a private directory like this one.
                </p>
              </div>
            </section>

            {/* H2: Making private Invisalign affordable */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>How to Make Private Invisalign Affordable</h2>
              <p style={pStyle}>
                The most common reason people investigate NHS options is cost. Invisalign has a reputation for being expensive, and in absolute terms the headline figures — £1,500 to £5,500 depending on case complexity — can feel daunting. But the way most Essex patients actually pay for treatment is very different from the sticker price.
              </p>

              <h3 style={h3Style}>0% Interest Finance Plans</h3>
              <p style={pStyle}>
                The majority of Platinum and Diamond Invisalign providers in Essex offer interest-free finance plans, typically running from 12 to 60 months. This means treatment that costs £3,000 in total can be spread into payments of £50 to £60 per month — comparable to a monthly gym membership or a streaming subscription tier. You pay no additional cost for the finance itself; it is a straightforward spread of the total fee with no interest applied.
              </p>
              <p style={pStyle}>
                Finance is subject to a standard credit check, but the majority of employed adults with a clean credit history will be approved. Your provider will outline the options at the free initial consultation — and there is no obligation to commit at that stage.
              </p>

              <h3 style={h3Style}>Choosing the Right Treatment Tier</h3>
              <p style={pStyle}>
                Not every patient needs — or qualifies for — the most comprehensive and expensive Invisalign product. Align Technology offers several treatment tiers, and an experienced provider will match you with the product appropriate to your case:
              </p>
              <ul style={{ ...pStyle, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Invisalign Express (7 aligners, £1,500–£2,000):</strong> Minor cosmetic corrections and relapse cases after previous braces. Fastest treatment — sometimes complete in 3 months.</li>
                <li><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Invisalign Lite (14 aligners, £2,000–£3,200):</strong> Mild-to-moderate crowding, small gaps, minor bite issues. Typically 6 to 12 months.</li>
                <li><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Invisalign Comprehensive (unlimited aligners, £3,000–£5,500):</strong> Complex crowding, significant bite correction, overbite, underbite, crossbite. 12 to 20 months.</li>
              </ul>
              <p style={pStyle}>
                A common mistake is assuming you need Comprehensive when Express or Lite is clinically appropriate. An honest, experienced provider will recommend the product your case actually requires — not the most expensive option available. This is one reason choosing a Platinum or Diamond provider matters: their higher case volumes mean they have experience with the full range of products and can advise accurately.
              </p>

              <h3 style={h3Style}>The Free Consultation</h3>
              <p style={pStyle}>
                Every Invisalign provider in the Essex Dentists Essex network offers a free initial consultation. This includes a full iTero 3D scan of your teeth and a ClinCheck digital simulation showing the proposed tooth movements from start to finish. You receive a fixed written quote at that consultation — covering all aligners, any attachments needed, and retainers at the end of treatment. You are under no obligation to proceed. The consultation costs nothing.
              </p>
            </section>

            {/* H2: Find providers CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Find Affordable Invisalign Providers in Essex</h2>
              <p style={pStyle}>
                If you have established that NHS funding is not a realistic option for your situation, the next step is comparing private providers in your area. Price, tier, and wait time all vary meaningfully across Essex — and a provider in a smaller town near you may offer equivalent clinical quality at a lower price than a central Chelmsford clinic.
              </p>
              <p style={pStyle}>
                Our directory covers all 111 Essex towns, with local pricing data and verified provider tiers for each. Use the links below to see which Platinum and Diamond providers are available near you, what they charge for your treatment type, and how quickly you can get seen.
              </p>

              {/* Town links */}
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
                  Compare private Invisalign costs in your Essex town:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {featuredTowns.map(town => (
                    <Link
                      key={town.slug}
                      href={`/locations/${town.slug}/`}
                      style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}
                    >
                      Invisalign {town.name} →
                    </Link>
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
                  Or use our free matching service — we send your details to up to 3 verified Platinum and Diamond providers near you. Free consultations, free 3D scans, written quotes at no obligation.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{ padding: '12px 28px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
                >
                  Get Matched Free
                </button>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">

            {/* Quick summary */}
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Quick Summary</p>
              {[
                'Invisalign is almost never available on the NHS',
                'NHS orthodontics requires IOTN Grade 4–5 (severe)',
                'Adult NHS funding is reserved for jaw surgery cases',
                '0% finance plans start from ~£50/month',
                'Free consultation included at all listed clinics',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Related guides */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'How Much Does Invisalign Cost in Essex?', href: '/guides/costs/invisalign-cost-essex/' },
                  { label: 'Invisalign vs Braces: Which Is Right for You?', href: '/guides/costs/invisalign-vs-braces/' },
                  { label: 'What Is a Platinum Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                  { label: '0% Finance: How Invisalign Payment Plans Work', href: '/guides/costs/invisalign-finance-essex/' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>
                Ready to get a free quote?
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                Compare Platinum and Diamond providers near you. Free consultation, free 3D scan.
              </p>
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

// ── Shared text styles ────────────────────────────────────────────────────────
const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
  fontWeight: 600,
  color: 'var(--ink)',
  lineHeight: 1.2,
  marginBottom: '16px',
  marginTop: '0',
  paddingTop: '8px',
  borderTop: '2px solid var(--sage-pale)',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
  fontWeight: 600,
  color: 'var(--ink)',
  lineHeight: 1.25,
  marginBottom: '12px',
  marginTop: '28px',
};

const pStyle: React.CSSProperties = {
  fontSize: '15px',
  color: 'var(--muted)',
  lineHeight: 1.8,
  marginBottom: '16px',
};
