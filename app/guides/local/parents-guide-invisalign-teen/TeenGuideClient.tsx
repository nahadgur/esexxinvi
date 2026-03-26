'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const nhsVsPrivate = [
  { aspect: 'Eligibility',         nhs: 'IOTN Grade 4–5 only — roughly 30–40% of teens qualify', private: 'Any teen with healthy teeth and gums' },
  { aspect: 'Wait time',           nhs: '12–24 months for assessment and treatment start in Essex', private: 'Assessment within 1–2 weeks; treatment starting within 4–5 weeks' },
  { aspect: 'Appliance type',      nhs: 'Metal fixed braces — clear or ceramic rarely funded', private: 'Invisalign Teen clear aligners, or ceramic braces' },
  { aspect: 'Appointment burden',  nhs: 'Monthly tightening — 12–15 appointments per year', private: 'Every 6–8 weeks — 7–8 appointments per year' },
  { aspect: 'Food restrictions',   nhs: 'Significant — no hard, sticky, or chewy foods for 18–24 months', private: 'None — remove to eat anything' },
  { aspect: 'Self-consciousness',  nhs: 'Visible metal throughout secondary school years', private: 'Virtually invisible — most classmates will not notice' },
  { aspect: 'Sports safety',       nhs: 'Broken brackets from sports contact are common and painful', private: 'Remove for contact sports entirely' },
  { aspect: 'Cost to family',      nhs: 'Free if eligible', private: '£2,800–£4,500 (0% finance available)' },
];

export default function TeenGuideClient() {
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
              <span style={{ color: 'var(--ink)' }}>Parent&apos;s Guide: Invisalign Teen</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Local Essex Guide · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Essex Parent&apos;s Guide to<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Invisalign Teen vs. NHS Braces</em>
            </h1>
            <p style={pStyle}>
              Your teenager needs orthodontic treatment. You know it, they know it, and their dentist has mentioned it at two consecutive check-ups. The first thing most Essex parents do is look into NHS braces — free, established, available. The second thing they discover is that getting NHS orthodontic treatment in Essex is significantly harder, slower, and more restricted than they expected.
            </p>
            <p style={pStyle}>
              This guide is written for parents who are navigating that discovery — either finding out their teenager does not qualify for NHS funding, or facing an 18 to 24-month waiting list that will take them well into their GCSE or A-level years. It explains what the NHS system actually provides, how Invisalign Teen differs from the adult product, and how to make an informed decision for your child without feeling like you are being sold something.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: NHS waiting list reality */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The NHS Waiting List Reality in Essex</h2>
              <p style={pStyle}>
                NHS orthodontic treatment is assessed using the Index of Orthodontic Treatment Need (IOTN) — a standardised scoring system that grades dental misalignment from 1 (no treatment need) to 5 (severe need). NHS funding is only available for patients scoring Grade 4 or Grade 5 on the Dental Health Component of the scale.
              </p>
              <p style={pStyle}>
                Grade 4 and 5 cases involve clinically significant functional problems: severely impacted teeth, extreme crowding affecting dental health, significant jaw discrepancies, or conditions where leaving the misalignment untreated poses a genuine medical risk. Cosmetic concerns — teeth that look crowded but function normally, visible gaps, mild overbites — typically score Grade 2 or 3. The majority of teenagers whose parents are considering orthodontic treatment fall into this Grade 2–3 range. They will not qualify for NHS funding.
              </p>
              <p style={pStyle}>
                For the minority who do qualify at Grade 4 or 5, the situation in Essex is further complicated by waiting lists. In many parts of the county — particularly in areas with fewer NHS orthodontists — the waiting time from GP referral to the start of active treatment runs to 18 to 24 months. A teenager referred for NHS braces at 13 may not start treatment until 15. By the time treatment is complete at 16 or 17, they will have spent much of their secondary school career with a visible metal appliance — including GCSE years and the social pressures that accompany them.
              </p>
              <p style={pStyle}>
                This is the context in which many Essex parents consider private treatment — not because they have dismissed the NHS, but because the NHS either will not see their teenager or cannot see them in time.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>The IOTN grade that changes everything</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  If your teenager has already had an NHS orthodontic assessment and been told they are Grade 3 or below, NHS funding is not available regardless of how significant the misalignment looks or feels. The only route is private treatment — and the sooner that is accepted as the starting point, the sooner the decision about which private option to choose can be made constructively.
                </p>
              </div>
            </section>

            {/* H2: How Invisalign Teen differs */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>How Invisalign Teen Is Different from the Adult Product</h2>
              <p style={pStyle}>
                Align Technology produces a version of Invisalign specifically engineered for teenagers, with two features that address the realities of treating a 13 to 18-year-old rather than an adult professional.
              </p>

              <h3 style={h3Style}>Compliance Indicators</h3>
              <p style={pStyle}>
                Each Invisalign Teen tray has a small blue dot — a compliance indicator — printed on the aligner. The dot is visible when the tray is new and fades gradually with wear time. By the time a patient is ready to move to the next set of aligners, the dot should have faded to near-invisible. If the dot is still clearly blue at the two-week mark, the aligners have not been worn for the required 20 to 22 hours per day.
              </p>
              <p style={pStyle}>
                This gives parents — and providers — an objective, non-confrontational way to assess whether the treatment is tracking correctly. It removes the guesswork from the most common source of delay: insufficient wear time. Rather than a teenager claiming they have worn the aligners as prescribed, the dot provides an honest record. Many parents find this transparency extremely useful, particularly in the early months when the habit of consistent wear is still being established.
              </p>

              <h3 style={h3Style}>Free Replacement Aligners</h3>
              <p style={pStyle}>
                Teenagers lose things. This is not a character flaw — it is a statistical certainty across any population of 13 to 18-year-olds. Invisalign Teen includes up to six free replacement aligners within the treatment fee, specifically because the manufacturer recognises this reality. Lost or damaged aligners that would cost an adult patient £50 to £150 per set to replace are included in the Invisalign Teen product at no additional charge, up to the six-aligner limit.
              </p>
              <p style={pStyle}>
                For parents considering the total cost of treatment over 12 to 18 months, this provision is meaningful. With adult Invisalign, a teenager who lost two sets of aligners over a course of treatment would face a £100 to £300 replacement cost on top of the treatment fee. With Invisalign Teen, those replacements are built in.
              </p>

              <h3 style={h3Style}>Eruption Tabs for Developing Teeth</h3>
              <p style={pStyle}>
                Younger teenagers may still have second molars that are not yet fully erupted. Invisalign Teen trays include eruption tab spaces — spaces in the aligner that accommodate teeth that have not yet fully grown into position. This allows treatment to begin at an earlier age without waiting for full dental maturity, and without the aligner forcing pressure onto partially erupted teeth.
              </p>
            </section>

            {/* H2: NHS vs private table */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>NHS Braces vs. Invisalign Teen: The Comparison</h2>
              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '26%' }}>Aspect</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--muted)', borderBottom: '2px solid var(--border)' }}>NHS Metal Braces</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--sage)', borderBottom: '2px solid var(--border)', background: 'var(--sage-pale)' }}>Invisalign Teen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nhsVsPrivate.map((row, i) => (
                      <tr key={row.aspect} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{row.aspect}</td>
                        <td style={{ padding: '10px 14px', color: '#9A9A92', borderBottom: '1px solid var(--border)' }}>{row.nhs}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--sage)', fontWeight: 500, borderBottom: '1px solid var(--border)', background: 'var(--sage-pale)' }}>{row.private}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Hygiene, sports, self-esteem */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Hygiene, Sports, and Self-Esteem</h2>

              <h3 style={h3Style}>Sports and Physical Activity</h3>
              <p style={pStyle}>
                Metal brace patients who play contact sports — rugby, hockey, martial arts, boxing — are at meaningful risk of bracket and wire injury during impact. A rugby tackle with a fixed appliance can lacerate the inside of the lip against the metal. Emergency brace repair appointments are common among sporty teenagers, and in some cases the advice from orthodontists is to wear a mouthguard continuously over the braces — which is uncomfortable and affects breathing. Some teenagers simply stop playing their sport rather than manage the inconvenience.
              </p>
              <p style={pStyle}>
                With Invisalign Teen, the aligner is removed before any contact sport. There is nothing in the mouth. The teenager wears whatever mouthguard their sport requires, plays normally, and puts the aligner back in afterwards. There are no brackets to break, no wires to push into the lip, no emergency repair appointments. For parents of sporty teenagers, this is a meaningful practical difference — and for the teenager, it means their sport is not impacted by their orthodontic treatment.
              </p>

              <h3 style={h3Style}>Oral Hygiene</h3>
              <p style={pStyle}>
                Fixed metal braces are associated with measurably higher rates of dental decay and gum disease in teenagers. The brackets and wires create dozens of plaque traps that are genuinely difficult to clean with a standard toothbrush, and many teenagers — particularly at 14 and 15 — do not adopt the specialist interdental brushing and flossing technique required to keep metal braces clean. The result, documented in orthodontic literature, is white spot lesions (early enamel demineralisation around brackets) that can become permanent. Some teenagers finish metal brace treatment with straighter teeth and visible enamel damage on the tooth surfaces that were under the brackets.
              </p>
              <p style={pStyle}>
                With Invisalign Teen, the teenager removes the aligner, brushes normally, and reinserts. There is no complex cleaning protocol, no specialist equipment, and no plaque-trapping hardware attached to the teeth. The teeth are accessible to a normal toothbrush throughout treatment. For parents concerned about their teenager&apos;s dental hygiene habits, this is a significant clinical advantage.
              </p>

              <h3 style={h3Style}>Self-Esteem During Secondary School Years</h3>
              <p style={pStyle}>
                Secondary school years — particularly ages 13 to 16 — are among the most self-conscious of most people&apos;s lives. Teenagers are acutely aware of how they look, and visible metal orthodontic hardware during these years affects confidence, social behaviour, and willingness to smile openly. This is not trivial. Research consistently shows that adolescents with visible orthodontic appliances report higher levels of self-consciousness and social anxiety around their appearance than those without.
              </p>
              <p style={pStyle}>
                Invisalign Teen aligners are virtually invisible. Most classmates will not notice them in normal conversation. The teenager goes through treatment without the social anxiety associated with visible metal, and arrives at their GCSEs or A-levels with straight teeth and the confidence that comes with them — rather than straight teeth and a memory of metal braces for three years of secondary school.
              </p>
            </section>

            {/* H2: Cost CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Spreading the Cost of Your Teen&apos;s Smile</h2>
              <p style={pStyle}>
                Private orthodontic treatment is a significant financial commitment. Invisalign Teen typically costs between £2,800 and £4,500 depending on case complexity and the provider. For most Essex families, paying this as a single upfront sum is not realistic — and it does not have to be.
              </p>
              <p style={pStyle}>
                The majority of Platinum and Diamond Invisalign providers in our Essex network offer 0% interest finance plans that spread the cost over 12 to 36 months. A £3,500 treatment over 24 months at 0% APR is approximately £146 per month — less than many families spend on after-school activities, and considerably less than a Saturday morning activity class and extracurricular sports combined.
              </p>
              <p style={pStyle}>
                Finance is confirmed at the free initial consultation after the 3D scan and ClinCheck plan have been reviewed. No commitment is required at that stage — the consultation is genuinely free and without obligation.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  Find clinics offering 0% finance on Invisalign Teen in Essex
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Our directory covers all 111 Essex towns. Use the links below to find verified Platinum and Diamond providers near you who work with teen patients and offer flexible finance options.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { name: 'Basildon',  slug: 'basildon' },
                    { name: 'Rayleigh',  slug: 'rayleigh' },
                    { name: 'Chelmsford', slug: 'chelmsford' },
                    { name: 'Harlow',    slug: 'harlow' },
                    { name: 'Colchester', slug: 'colchester' },
                  ].map(t => (
                    <Link key={t.slug} href={`/locations/${t.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      {t.name} →
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => setIsModalOpen(true)} style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                    Book Free Consultation
                  </button>
                  <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px', alignSelf: 'center' }}>
                    Browse all 111 Essex towns →
                  </Link>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Invisalign Teen vs NHS — Key Points</p>
              {[
                'NHS requires IOTN Grade 4–5 — ~60% of teens don\'t qualify',
                'Essex NHS waiting lists: 18–24 months in many areas',
                'Compliance indicators (blue dots) hold teens accountable',
                '6 free replacement aligners included',
                'Remove for rugby, hockey, martial arts',
                'No plaque traps — hygiene like wearing nothing',
                'Virtually invisible through secondary school',
                '0% finance from ~£145/month',
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
                { label: 'How Long Does Invisalign Take?', href: '/guides/treatment-process/how-long-does-invisalign-take/' },
                { label: 'Invisalign Finance & Payment Plans', href: '/guides/costs/financing-payment-plans/' },
                { label: 'True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Free consultation for your teen</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free 3D scan. ClinCheck preview. No obligation. Finance confirmed at appointment.</p>
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
const h3Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25, marginBottom: '12px', marginTop: '28px' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
