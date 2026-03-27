'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const movementTypes = [
  { movement: 'Rotation', explanation: 'Spinning a tooth around its long axis. Without a handle to grip, the aligner slides across the smooth tooth surface rather than rotating it. An attachment on the side of the tooth gives the aligner a point to push against.' },
  { movement: 'Extrusion', explanation: 'Pulling a tooth downward (or upward) out of the gumline. Smooth aligners can push teeth; pulling them requires the aligner to hook onto something. Attachments on the gum-facing surface of the tooth create this anchorage.' },
  { movement: 'Torque control', explanation: 'Tipping the root of a tooth while keeping the crown in position. This is among the most mechanically demanding movements in orthodontics. Rectangular or wedge-shaped attachments transmit the precise force vectors required.' },
  { movement: 'Bodily movement', explanation: 'Moving the entire tooth — crown and root together — along the arch. Without attachments, aligner pressure tilts the crown rather than moving the whole tooth. Attachments distribute force more evenly.' },
];

export default function AttachmentsClient() {
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
              <span style={{ color: 'var(--ink)' }}>Attachments &amp; Buttons</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Process · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              What Are Invisalign Attachments?<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>And Do You Need Them?</em>
            </h1>
            <p style={pStyle}>
              One of the most common moments of surprise in an Invisalign consultation is when a patient realises that the aligners are not, in fact, completely invisible — because of small raised dots bonded to specific teeth. These are attachments, sometimes called buttons, and they are present on the majority of Invisalign patients. Understanding what they are, why they exist, and what happens to them at the end of treatment removes the surprise and replaces it with a much more accurate picture of what treatment actually looks like.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: What they're made of */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>What Are Attachments Made Of?</h2>
              <p style={pStyle}>
                Invisalign attachments are small geometrically precise shapes — circles, rectangles, wedges, or bevelled squares, depending on the tooth movement they are designed to facilitate — made from dental composite resin. This is exactly the same material used to make white (tooth-coloured) fillings. It is safe, durable, and matched to your tooth shade at the time of bonding.
              </p>
              <p style={pStyle}>
                They are typically 1 to 2mm in size — small enough that most people will not notice them in normal conversation, but visible on close inspection, particularly on the front teeth. Under direct lighting or photography, they catch the light slightly differently from the surrounding enamel. For most patients, this is a reasonable trade-off for the clinical effectiveness they provide. For patients doing Invisalign Express with no attachments, there is no compromise — but Express cases are limited to the simplest presentations.
              </p>
            </section>

            {/* H2: Why they're necessary */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Why Are Attachments Necessary?</h2>
              <p style={pStyle}>
                The simplest way to understand attachments is through an analogy. Imagine trying to open a door that has no handle — just a flat, smooth surface. You can push it, but you cannot pull it with any precision or force. Now add a handle: suddenly you can apply force in a controlled direction. Attachments are handles for the aligner.
              </p>
              <p style={pStyle}>
                An Invisalign aligner is a smooth, close-fitting plastic tray. Against the smooth curved surface of a tooth, it can apply a reasonable amount of pushing force — tipping or translating a tooth in one direction. But many clinical movements require more than a push. They require a precise directional grip. Without a handle, the aligner slides across the tooth surface instead of controlling it.
              </p>
              <p style={pStyle}>
                ClinCheck specifies the exact shape, position, and orientation of each attachment based on the biomechanics of the planned movement. The aligner is then manufactured with corresponding indentations — hollows that click over each attachment precisely, converting the attachment into a controlled anchorage point. Here is how this applies to specific clinical situations:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '24px 0' }}>
                {movementTypes.map((m, i) => (
                  <div key={m.movement} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ background: 'var(--sage)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{m.movement}</span>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.explanation}</p>
                  </div>
                ))}
              </div>

              <p style={pStyle}>
                Diamond and Platinum providers have the most experience specifying and placing attachments accurately. Because attachment placement is determined during the ClinCheck planning stage, an experienced provider will prescribe the minimum number of attachments needed to achieve the planned movements — rather than the maximum number that software might suggest by default. Fewer attachments means less visible hardware and less attachment rubbing discomfort.
              </p>
            </section>

            {/* H2: Can you avoid them */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Can You Have Invisalign Without Attachments?</h2>
              <p style={pStyle}>
                Yes — but only for the simplest cases. Invisalign Express, which covers minor cosmetic corrections requiring movement of less than approximately 2mm with no rotation or significant torque, can sometimes be completed without any attachments. Cases involving very minor relapse of the front teeth — for example, slight crowding that has developed after childhood braces — may be treatable with aligner-only force.
              </p>
              <p style={pStyle}>
                The majority of patients, however, will need at least some attachments. Invisalign Lite cases — moderate crowding, multiple gaps, minor bite discrepancies — typically require attachments on several teeth. Comprehensive cases almost invariably require them on multiple teeth across both arches.
              </p>
              <p style={pStyle}>
                Whether your case requires attachments is determined at the ClinCheck planning stage, not by preference. A provider who tells you they can treat a complex case without attachments to make the aligners look clearer is a provider who is compromising clinical outcomes for cosmetic appeal. The movements simply cannot be performed as planned without the anchorage attachments provide.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>The right question to ask</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  At consultation, ask your provider how many attachments your ClinCheck plan specifies and why each one is needed. An experienced Platinum or Diamond provider should be able to explain each attachment in terms of the tooth movement it facilitates. If they cannot, or if they suggest removing attachments the plan requires in order to make treatment look cleaner, seek a second opinion.
                </p>
              </div>
            </section>

            {/* H2: Removing attachments */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Removing the Attachments</h2>
              <p style={pStyle}>
                Attachments are bonded to the surface of the enamel — they do not penetrate the tooth. Removal at the end of treatment is a simple, painless, and safe procedure that typically takes 15 to 30 minutes in total. Your dentist uses a low-speed polishing handpiece to buff the composite off the enamel surface. No drilling, no anaesthetic, no enamel removal.
              </p>
              <p style={pStyle}>
                The composite sits on top of the enamel, not within it. The polishing procedure removes only the composite layer, leaving the underlying enamel completely intact. Patients who are concerned about enamel damage from attachment removal can be reassured: the same technique used to remove composite bonding from teeth does not touch the tooth structure itself.
              </p>
              <p style={pStyle}>
                After removal, the tooth surfaces are polished to a smooth finish. Many patients also choose teeth whitening at this stage — whitening is most effective on freshly polished enamel, and the timing after Invisalign treatment is ideal.
              </p>
            </section>

            {/* H2: CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Book a Consultation with an Essex Invisalign Expert</h2>
              <p style={pStyle}>
                The most accurate way to know whether your case requires attachments — and how many — is a ClinCheck plan generated from your own 3D scan. That plan specifies every attachment precisely: its shape, position, and the tooth movement it enables.
              </p>
              <p style={pStyle}>
                Diamond and Platinum providers have the highest case volumes and the most experience planning complex tooth movements using attachments efficiently. Browse our Essex clinic directory to find a top-tier provider near you and book your free 3D scan.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Browse top-tier Essex Invisalign clinics</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every clinic in our directory holds Platinum or Diamond tier status — meaning 80 to 300+ Invisalign cases completed per year. That experience directly affects how accurately attachments are planned and placed.
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
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Key Facts</p>
              {[
                'Small tooth-coloured composite bumps',
                'Same material as white fillings',
                'Enable rotation, extrusion & torque',
                'Needed by most patients (not Express)',
                'ClinCheck specifies exact shape/position',
                'Polished off painlessly at treatment end',
                'No enamel damage from removal',
                'Fewer needed = more experienced provider',
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
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
                { label: 'Does Invisalign Hurt?', href: '/guides/treatment-process/does-invisalign-hurt/' },
                { label: 'How Long Does Invisalign Take?', href: '/guides/treatment-process/how-long-does-invisalign-take/' },
                { label: 'The Invisalign Diet: Food & Drink Rules', href: '/guides/treatment-process/invisalign-diet-food-rules/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>See your ClinCheck plan free</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Your attachment map is generated at the free 3D scan consultation.</p>
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
