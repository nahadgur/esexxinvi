'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const steps = [
  { n: 1, title: 'The Initial Consultation & iTero 3D Scan' },
  { n: 2, title: 'Receiving Your Custom Aligners' },
  { n: 3, title: 'The 22-Hour Wear Rule' },
  { n: 4, title: 'Check-Ups and Refinements' },
  { n: 5, title: 'Retention — Protecting Your Investment' },
];

const featuredTowns = [
  { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
  { name: 'Brentwood',       slug: 'brentwood' },
  { name: 'Chelmsford',      slug: 'chelmsford' },
  { name: 'Harlow',          slug: 'harlow' },
  { name: 'Colchester',      slug: 'colchester' },
  { name: 'Basildon',        slug: 'basildon' },
];

export default function JourneyClient() {
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
              <span style={{ color: 'var(--ink)' }}>The Invisalign Journey</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Process · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Invisalign Journey:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Step-by-Step from Scan to Smile</em>
            </h1>
            <p style={pStyle}>
              The technology behind Invisalign is genuinely impressive — digital 3D scanning, AI-assisted treatment planning, precision-engineered thermoplastic aligners manufactured to tolerances of less than a millimetre. But from a patient's perspective, the experience is far simpler than the engineering. You attend a handful of appointments, wear a series of clear trays, and at the end your teeth are straight.
            </p>
            <p style={pStyle}>
              This guide walks through every stage of Invisalign treatment in the order you will experience it — from the moment you sit down for your first scan to the day you put in your retainer for the last time. No jargon, no surprises.
            </p>

            {/* Step progress bar */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '28px', flexWrap: 'wrap' }}>
              {steps.map(step => (
                <div key={step.n} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '20px', padding: '5px 12px' }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.n}</span>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--sage)' }}>{step.title.split(':')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* Step 1 */}
            <section style={{ marginBottom: '52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>The Initial Consultation &amp; iTero 3D Scan</h2>
              </div>

              <p style={pStyle}>
                Your first appointment sets the entire treatment up. It is longer than a standard check-up — typically 45 to 60 minutes — and it involves considerably more than a quick look at your teeth.
              </p>
              <p style={pStyle}>
                The centrepiece of the consultation is the <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>iTero Element scanner</strong>. If you had orthodontic treatment before 2015 or so, you may remember biting into trays of pink dental putty that left impressions of your teeth. That process is now almost entirely obsolete at Platinum and Diamond Invisalign practices. The iTero is a handheld wand that captures thousands of photographs of your teeth per second, assembling them into a precise 3D digital model of your entire dentition in around four minutes. There is nothing to bite, nothing to wait to set, and no unpleasant taste.
              </p>
              <p style={pStyle}>
                That 3D model is then fed into <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>ClinCheck</strong> — Align Technology's proprietary treatment planning software. Your dentist uses ClinCheck to map out every tooth movement from your current position to the proposed final position, set by set. The software generates an animated video showing exactly how each tooth will move, how long the treatment will take, and what the final result is projected to look like.
              </p>
              <p style={pStyle}>
                You watch that animation at the consultation. This is one of the most significant advantages of Invisalign over traditional braces: you see a preview of your finished smile before any aligner is manufactured and before you commit to anything. If you want adjustments to the proposed outcome — a different level of correction, or a longer treatment to achieve a more comprehensive result — your dentist can modify the ClinCheck plan and show you the revised simulation.
              </p>
              <p style={pStyle}>
                At the end of the consultation, you receive a fixed written quote covering all aligners, any attachments, IPR if required, and retainers. There is no pressure to decide immediately.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>What to bring to your first appointment</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  Nothing specific — but if you have any previous dental X-rays or orthodontic records, bring them. Your dentist will take their own records, but prior imaging can be useful context, particularly for patients who have had previous orthodontic treatment.
                </p>
              </div>
            </section>

            {/* Step 2 */}
            <section style={{ marginBottom: '52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>Receiving Your Custom Aligners</h2>
              </div>

              <p style={pStyle}>
                Once you approve the ClinCheck treatment plan and confirm you want to proceed, your aligner series is manufactured at Align Technology's facilities and shipped to your clinic. The typical wait from approval to delivery is <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>three to four weeks</strong>.
              </p>
              <p style={pStyle}>
                Your fitting appointment — sometimes called the "bond-up" — is where treatment physically begins. Depending on your ClinCheck plan, your dentist may need to do two things before you put in your first aligner:
              </p>
              <ul style={{ ...pStyle, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <li>
                  <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Attachments:</strong> Small tooth-coloured composite bumps bonded to specific teeth. They look like tiny raised dots and are virtually invisible. Attachments give the aligner extra grip and leverage to perform more complex movements — rotations, vertical extrusions, and torque corrections that the aligner alone cannot reliably achieve. Not every patient needs them; your ClinCheck plan will have specified which teeth require them and their exact shape.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Interproximal Reduction (IPR):</strong> The careful removal of tiny amounts of enamel from between specific teeth — typically measured in tenths of a millimetre — to create space for tooth movement without extraction. IPR is performed using a fine dental disc or strip and is usually painless; you feel vibration but not discomfort. Not all cases require IPR; it is most common in crowding cases where space needs to be created.
                </li>
              </ul>
              <p style={pStyle}>
                Your dentist will then fit your first set of aligners and check that they seat correctly on every tooth. They will show you how to remove them using your fingertips at the back molars — a technique that takes a few days to become natural. You leave the appointment with your first several sets of aligners and a schedule for when to progress to each new set.
              </p>
            </section>

            {/* Step 3 */}
            <section style={{ marginBottom: '52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>The 22-Hour Wear Rule</h2>
              </div>

              <p style={pStyle}>
                Invisalign works because the aligners apply continuous, calibrated force to your teeth. The moment you take them out, that force stops. This is why the 22-hour wear requirement exists — and why it is not a guideline but a clinical requirement for treatment to track correctly.
              </p>
              <p style={pStyle}>
                Two hours a day is your total budget for taking the aligners out. That covers all meals, all drinks other than water, and all oral hygiene. In practice, most patients settle into a rhythm quickly: aligners out for meals and brushing, back in immediately afterwards. The discipline feels significant in the first two weeks and almost unconscious by month two.
              </p>
              <p style={pStyle}>
                The consequence of consistently wearing aligners for fewer than 20 to 22 hours is that teeth do not move as planned. When you put in the next aligner in the sequence, it does not fit properly because your teeth have not reached the position it was designed for. This is called "tracking failure," and it is the most common reason patients need additional refinement aligners beyond what was originally planned. It is preventable by respecting the wear time.
              </p>

              <div style={{ background: '#FEF3F2', border: '1px solid #FECDCA', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#B42318', marginBottom: '6px' }}>The most common mistake</p>
                <p style={{ fontSize: '14px', color: '#7A271A', lineHeight: 1.7, margin: 0 }}>
                  Leaving aligners out for social events, evenings out, or because a tray feels uncomfortable adds up faster than patients expect. Two hours per day is 14 hours per week. A single weekend of inconsistent wear can throw off tracking sufficiently to require an extra set of refinement aligners — adding cost and time to treatment.
                </p>
              </div>
            </section>

            {/* Step 4 */}
            <section style={{ marginBottom: '52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>Check-Ups and Refinements</h2>
              </div>

              <p style={pStyle}>
                One of the practical advantages of Invisalign over fixed braces is the infrequency of appointments. Brace patients typically attend monthly for wire adjustments. Invisalign patients typically see their dentist every <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>six to eight weeks</strong>, and appointments are brief — usually 15 to 20 minutes. There are no wires to tighten, no brackets to check. Your dentist assesses tracking (whether your teeth are moving as planned), hands you your next several sets of aligners, and you leave.
              </p>
              <p style={pStyle}>
                Towards the end of your initial aligner series, your dentist will assess your result against the ClinCheck plan. In many cases, particularly for complex tooth movements, the initial series achieves most but not all of the planned correction. This is normal and anticipated — it is why Comprehensive treatment includes unlimited aligners. A new 3D scan is taken, a revised ClinCheck plan is created, and an additional set of aligners — called <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>refinements</strong> — is manufactured to complete the treatment.
              </p>
              <p style={pStyle}>
                Refinements are not a sign that something has gone wrong. They are a standard part of the treatment protocol for most Comprehensive cases. The initial ClinCheck plan is a clinical roadmap — the refinement phase allows your dentist to adjust the route based on exactly where your teeth have moved to in reality. Most Comprehensive patients have one refinement phase; some have two. On Express and Lite treatments, refinements are less common but not unheard of.
              </p>
            </section>

            {/* Step 5 */}
            <section style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
                <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0 }}>Retention — Protecting Your Investment</h2>
              </div>

              <p style={pStyle}>
                The final aligner is the beginning of the retention phase, not the end of treatment. The orthodontic reality — true for braces and aligners alike — is that teeth have a memory. The periodontal ligaments that anchor your teeth to the bone are elastic; they want to pull your teeth back toward where they started. Without retention, post-treatment relapse is not a risk — it is a certainty. The only question is how quickly and how far teeth move back.
              </p>
              <p style={pStyle}>
                Retainers maintain your result by holding teeth in their new position long enough for the surrounding bone to fully consolidate. Most providers recommend <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>full-time retainer wear for the first three months</strong> after treatment — removing only to eat and clean — followed by night-only wear indefinitely. "Indefinitely" means for years, not months. Patients who stop retainer wear entirely after one or two years consistently experience relapse. Patients who wear their retainer most nights consistently maintain their result.
              </p>
              <p style={pStyle}>
                The most common retainer options after Invisalign are:
              </p>
              <ul style={{ ...pStyle, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Vivera retainers</strong> — Align Technology's own removable retainer, made from a harder thermoplastic than the treatment aligners. Sold in sets of four (two upper, two lower), giving you replacements as retainers wear over time. Vivera is the most commonly prescribed option after Invisalign.</li>
                <li><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Fixed lingual retainers</strong> — A thin wire bonded to the back of the teeth (most commonly the lower front six). Permanently in place, requiring no patient compliance. Often used in combination with a removable Vivera retainer, particularly for the lower arch where relapse pressure is highest.</li>
              </ul>
              <p style={pStyle}>
                Retainers are almost never included in the headline Invisalign quote. Confirm at the consultation stage what is included and what the cost of Vivera retainers will be — typically £200 to £400 for a set of four.
              </p>
            </section>

            {/* CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Start Your Journey with a Free 3D Scan in Essex</h2>
              <p style={pStyle}>
                Every Platinum and Diamond Invisalign provider in our Essex network offers a free initial consultation that includes a full iTero 3D scan and a ClinCheck preview of your proposed treatment. You see what your finished smile looks like before you make any decision. There is no obligation to proceed.
              </p>
              <p style={pStyle}>
                Use the links below to find providers offering free 3D scans near you, or use our matching service to be connected with the best-matched clinics in your area.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Find providers offering free iTero scans near you:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {featuredTowns.map(town => (
                    <Link key={town.slug} href={`/locations/${town.slug}/`} style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: 'var(--sage)', textDecoration: 'none' }}>
                      Invisalign {town.name} →
                    </Link>
                  ))}
                </div>
                <Link href="/locations/" style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px', marginBottom: '20px' }}>
                  Browse all 111 Essex towns →
                </Link>
                <button onClick={() => setIsModalOpen(true)} style={{ padding: '12px 28px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                  Get Matched Free
                </button>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">

            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>The 5 Steps</p>
              {steps.map((step, i) => (
                <div key={step.n} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i < steps.length - 1 ? '12px' : 0, paddingBottom: i < steps.length - 1 ? '12px' : 0, borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{step.n}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{step.title}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Does Invisalign Hurt? Managing Discomfort', href: '/guides/treatment-process/does-invisalign-hurt/' },
                  { label: 'The True Cost of Invisalign (2026)', href: '/guides/costs/true-cost-invisalign-uk/' },
                  { label: 'Invisalign Payment Plans Explained', href: '/guides/costs/financing-payment-plans/' },
                  { label: 'What Is a Platinum Invisalign Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Ready to start?</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free 3D scan. Free ClinCheck preview. Written quote. No obligation.</p>
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
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
