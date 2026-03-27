'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const drinkRisks = [
  { drink: 'Tea or coffee', risk: 'Stains the aligner permanently yellow-brown within days. Also hot — warps the plastic.', verdict: 'Remove aligners' },
  { drink: 'Fizzy drinks / juice', risk: 'Acidic liquid trapped between tray and enamel accelerates decay dramatically.', verdict: 'Remove aligners' },
  { drink: 'Alcohol', risk: 'Sugar content risks decay; warm drinks risk warping. Staining likely with red wine.', verdict: 'Remove aligners' },
  { drink: 'Hot water / herbal tea', risk: 'Heat above approximately 70°C permanently deforms the thermoplastic.', verdict: 'Remove aligners' },
  { drink: 'Sparkling water (cold)', risk: 'No sugar, no heat — technically acceptable, though some providers advise still water only.', verdict: 'Generally fine' },
  { drink: 'Still cold/room temp water', risk: 'No risk whatsoever.', verdict: 'Always fine' },
];

const hardFoods = [
  { food: 'Boiled sweets / hard candy', issue: 'Direct bite force on hard objects is the most common cause of attachment dislodgement.' },
  { food: 'Ice (chewing)', issue: 'Same risk as hard candy. Chewing ice damages both attachments and natural enamel.' },
  { food: 'Very crusty bread / baguette', issue: 'Tearing force required pulls laterally on teeth — loosens attachments at the margins.' },
  { food: 'Nuts (whole)', issue: 'Hard surfaces create unpredictable force distribution. Chopped or ground is fine.' },
  { food: 'Turmeric / curry paste', issue: 'Does not affect the aligner (you remove it to eat) but heavily stains composite attachments.' },
  { food: 'Beetroot / red cabbage', issue: 'Strong pigment stains tooth-coloured composite attachments visibly.' },
];

export default function DietClient() {
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
              <Link href="/guides/treatment-process/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Treatment Process</Link>
              <span>/</span>
              <span style={{ color: 'var(--ink)' }}>Diet &amp; Food Rules</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Process · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Invisalign Diet:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>What You Can (and Can&apos;t) Eat or Drink</em>
            </h1>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>The golden rule</p>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                You can eat absolutely anything you want during Invisalign treatment — <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>as long as you take the aligners out first.</strong> There is no banned-food list. There are no wires to break, no brackets to dislodge with a sandwich. The restrictions are about what happens with aligners <em>in</em>, not what you eat with them <em>out</em>.
              </p>
            </div>
            <p style={pStyle}>
              That said, there are some foods and drinks worth being thoughtful about — not because of the aligners themselves, but because of the attachments bonded to your teeth. And the discipline of removing aligners for every meal and drink, every time, is more of a lifestyle adjustment than many patients anticipate. This guide covers all of it.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Water only */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The "Water Only" Rule</h2>
              <p style={pStyle}>
                The single most important dietary rule for Invisalign patients has nothing to do with food — it is about what you drink while your aligners are in. The rule is simple: <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>nothing except still, cold or room temperature water.</strong> Everything else goes in the glass, not in your mouth, until the aligner comes out. Here is why.
              </p>
              <p style={pStyle}>
                Your aligner fits tightly against your teeth, creating a sealed space between the plastic and your enamel. When you drink anything other than water with an aligner in, that liquid is drawn into that sealed space by capillary action and stays there. It cannot rinse away. For sugary drinks — squash, juice, fizzy drinks, flavoured coffees — this means concentrated sugar is in prolonged contact with your enamel with no saliva access to neutralise it. The result is accelerated decay and demineralisation that can permanently damage your enamel during the very treatment you invested in to improve your smile.
              </p>
              <p style={pStyle}>
                Heat is the second issue. Invisalign aligners are manufactured from a medical-grade thermoplastic called SmartTrack. It is precisely engineered to apply calibrated force to your teeth. Above approximately 70°C, the material softens and deforms. A cup of tea, coffee, or any hot drink consumed with an aligner in will warp the plastic permanently — changing its shape, destroying its fit, and potentially applying unintended force to your teeth. A warped aligner is a useless aligner. The replacement cost is £50 to £150 per set.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)' }}>Drink</th>
                      <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)' }}>Risk with aligners in</th>
                      <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '2px solid var(--border)' }}>Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drinkRisks.map((row, i) => (
                      <tr key={row.drink} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '11px 16px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.drink}</td>
                        <td style={{ padding: '11px 16px', color: 'var(--muted)', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>{row.risk}</td>
                        <td style={{ padding: '11px 16px', borderBottom: '1px solid var(--border)', fontSize: '12px', fontWeight: 600, color: row.verdict === 'Always fine' ? 'var(--sage)' : row.verdict === 'Generally fine' ? '#8B6914' : '#B42318' }}>
                          {row.verdict}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Foods to avoid */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Foods to Be Careful With (Even When Aligners Are Out)</h2>
              <p style={pStyle}>
                With aligners out, you can eat anything. But there is a category of food and drink worth thinking about even during meal times — not because of the plastic, but because of the composite attachments bonded to your teeth.
              </p>
              <p style={pStyle}>
                Attachments are small tooth-coloured dots of composite resin. They are bonded securely to enamel, but they are not indestructible. Extremely hard foods can dislodge attachments. Strongly pigmented foods can stain them visibly. Neither outcome ends your treatment, but a lost attachment does require a brief appointment to re-bond — and heavily stained attachments become visible during treatment in a way that defeats some of the aesthetic appeal of clear aligners.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '24px 0' }}>
                {hardFoods.map((item, i) => (
                  <div key={item.food} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#B42318', background: '#FEF3F2', padding: '2px 8px', borderRadius: '4px' }}>Caution</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>{item.food}</p>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.55 }}>{item.issue}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ ...pStyle, fontSize: '13px', fontStyle: 'italic' }}>
                None of these foods are banned. Awareness and moderation reduce the risk of attachment loss. If an attachment does come off, contact your provider — it is a quick appointment to re-bond.
              </p>
            </section>

            {/* H2: Managing 22 hours */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Managing the 22-Hour Wear Time Around Meals</h2>
              <p style={pStyle}>
                The 22-hour wear requirement means you have two hours per day out of your aligners, covering all meals, drinks, and oral hygiene. In theory that sounds restrictive. In practice, most patients settle into a workable routine within the first two weeks. Here is how experienced Invisalign patients manage it.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {[
                  { title: 'Eat three defined meals rather than grazing', body: 'Every time you take your aligners out to eat, the clock starts. Three 30-minute meals costs 90 minutes. Three 30-minute meals plus continuous snacking throughout the day can easily cost four hours. The patients who struggle with wear time are almost always snackers — not because of meals, but because of the constant in-out cycle required by frequent small snacks.' },
                  { title: 'Keep a travel toothbrush at work', body: 'You need to brush (and ideally floss) before putting aligners back in after every meal — food debris trapped under an aligner for hours is a decay risk. Keeping a compact toothbrush and toothpaste in a desk drawer or bag makes lunchtime compliance practical rather than inconvenient.' },
                  { title: 'Use aligner chewies after seating', body: 'Aligner chewies are small foam cylinders you bite down on after putting an aligner back in. They help the plastic seat fully against the teeth, ensuring proper contact with attachments. Most providers include them with your aligner sets. Biting on chewies for 30 seconds per quadrant after every insertion improves tracking.' },
                  { title: 'The snacking problem — be honest with yourself', body: 'The 22-hour rule effectively discourages habitual snacking, because every snack requires removing aligners, eating, cleaning teeth, and reinserting. Many patients simply stop snacking because the friction is not worth it for a handful of crisps. This is the source of the "Invisalign diet" effect discussed below — and it is a feature, not a bug, for patients who benefit from reduced grazing.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{item.title}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* H2: Weight loss myth */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The "Invisalign Diet" Weight Loss Effect</h2>
              <p style={pStyle}>
                There is a well-documented phenomenon among Invisalign patients — many lose a small amount of weight during treatment, typically three to five kilograms over a 12-month course, without actively trying. It has been discussed enough in dental forums and patient communities to have acquired its own informal name: the Invisalign diet.
              </p>
              <p style={pStyle}>
                The mechanism is entirely behavioural. When every snack requires removing your aligners, cleaning your teeth, and reinserting — a process that takes five to ten minutes — the unconscious, habitual eating that contributes significantly to daily caloric intake stops. The hand-to-mouth snacking that happens during work, television, and socialising simply becomes too much friction. Most Invisalign patients report that they still eat three full meals without any reduction, but that the incidental consumption between meals drops dramatically.
              </p>
              <p style={pStyle}>
                This is not a diet plan and is not a reason to choose Invisalign. For patients who are already at a healthy weight, the effect is marginal. But for patients who acknowledge habitual snacking as something they have wanted to address, the structural incentive that Invisalign provides can be a genuinely useful side effect of a treatment they were already choosing for other reasons.
              </p>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Ready to Commit to Your New Smile?</h2>
              <p style={pStyle}>
                Invisalign requires discipline — mostly around drink rules and consistent wear time. For patients who are ready to commit, the reward is straight teeth achieved discreetly, with no food restrictions and far fewer clinic appointments than braces require.
              </p>
              <p style={pStyle}>
                Compare Platinum and Diamond providers across Essex — each location page shows local pricing, available treatments, and verified patient ratings.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Find verified Invisalign providers near you:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { name: 'Chelmsford', slug: 'chelmsford' },
                    { name: 'Harlow',     slug: 'harlow' },
                    { name: 'Colchester', slug: 'colchester' },
                    { name: 'Basildon',   slug: 'basildon' },
                    { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
                  ].map(t => (
                    <Link key={t.slug} href={`/locations/${t.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      Invisalign {t.name} →
                    </Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Browse all 111 Essex towns →</Link>
                  <button onClick={() => setIsModalOpen(true)} style={{ padding: '10px 22px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Get Matched Free</button>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>The Key Rules</p>
              {[
                'Water only while aligners are in',
                'No hot drinks in — they warp the plastic',
                'No sugary drinks in — decay risk',
                'Remove for all food and drink',
                'Brush before reinserting after meals',
                'Hard foods can dislodge attachments',
                'Turmeric/beetroot stain composites',
                '3 meals > constant snacking for wear time',
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
                { label: 'Does Invisalign Hurt?', href: '/guides/treatment-process/does-invisalign-hurt/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
                { label: 'How Long Does Invisalign Take?', href: '/guides/treatment-process/how-long-does-invisalign-take/' },
                { label: 'Invisalign Attachments Explained', href: '/guides/treatment-process/invisalign-attachments-buttons/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Ready to start?</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free consultation. Free 3D scan. No obligation.</p>
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
