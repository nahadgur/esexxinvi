'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const tips = [
  {
    n: 1,
    title: 'Switch to new trays right before bed',
    body: 'The worst of the pressure arrives in the first two to three hours after putting in a new set. If you make the switch at 10pm and go to sleep an hour later, you sleep through the peak discomfort phase entirely. Many experienced Invisalign patients swear by this as the single most effective strategy — particularly for the first few changes.',
  },
  {
    n: 2,
    title: 'Stick to soft foods on day one of a new tray',
    body: 'Chewing applies lateral force to teeth that are already under pressure from the new aligner. On the first day of a new set, choose foods that require minimal biting effort — soup, yoghurt, scrambled eggs, pasta. By day two the tenderness when chewing typically reduces significantly, and normal eating is comfortable again by day three for most patients.',
  },
  {
    n: 3,
    title: 'Use over-the-counter pain relief if needed',
    body: 'Paracetamol or ibuprofen taken prophylactically — before the discomfort peaks rather than after — is effective for most patients. A standard dose of ibuprofen (400mg) taken with food shortly before putting in a new tray can take the edge off the first few hours considerably. There is no clinical reason to avoid pain relief during Invisalign treatment; it does not interfere with tooth movement.',
  },
  {
    n: 4,
    title: 'Use orthodontic wax over sharp attachments',
    body: 'If an attachment or the edge of a tray is causing a sore patch on your cheek or lip, a small ball of orthodontic wax pressed over the offending surface creates a smooth barrier. Orthodontic wax is inexpensive and available at most pharmacies. It is a temporary fix — the soft tissue typically toughens and adapts within one to two weeks — but it makes the early weeks considerably more comfortable.',
  },
  {
    n: 5,
    title: 'File sharp tray edges with an emery board',
    body: 'Occasionally a tray arrives with a slightly sharp edge at the gumline — usually on a back molar where the plastic is thinnest. A very gentle pass with the fine side of an emery board (nail file) can smooth the edge without compromising the aligner\'s fit. Use minimal pressure and work in one direction only. If you are unsure, contact your provider — most will smooth edges for you at a brief appointment or advise over the phone.',
  },
];

export default function HurtClient() {
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
              <span style={{ color: 'var(--ink)' }}>Does Invisalign Hurt?</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Process · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              Does Invisalign Hurt?<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>What to Expect and How to Manage Discomfort</em>
            </h1>

            {/* Direct answer box */}
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>The direct answer</p>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                Invisalign does not hurt the way metal braces hurt. There are no sharp wires cutting the inside of your cheeks, no brackets breaking loose, no emergency appointments for bracket re-bonding. What there is — and what you should expect at the start of each new tray — is noticeable pressure. In the first 48 hours of a new aligner set, most patients describe their teeth as feeling tight, tender to bite on, and slightly sensitive. That pressure is the treatment working. It fades. By day three it is usually mild, and by day five most patients forget they switched trays at all.
              </p>
            </div>

            <p style={pStyle}>
              Whether that constitutes "pain" depends almost entirely on the individual. Some patients describe the first day of a new tray as genuinely uncomfortable; others notice a dull pressure and little else. The honest answer is that discomfort varies, it is manageable, and it is temporary.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: First 48 hours */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>The First 48 Hours: The "Pressure" Phase</h2>
              <p style={pStyle}>
                To understand why the first 48 hours feel different from the rest of the tray cycle, it helps to understand what is actually happening to your teeth.
              </p>
              <p style={pStyle}>
                Each new aligner is manufactured in a position slightly ahead of where your teeth currently are — typically 0.25mm of movement per tray. When you first seat a new set, the aligner is applying force to teeth that have not yet reached the position the tray is designed for. That force is transmitted through the periodontal ligaments — the fibrous connective tissue that suspends each tooth within its socket — to the surrounding alveolar bone. The ligaments stretch and compress; the bone begins to remodel to accommodate the new tooth position. This remodelling is the biological mechanism by which orthodontic treatment works.
              </p>
              <p style={pStyle}>
                What patients feel is the initial load on the ligaments: a tight, achey sensation, usually described as similar to the feeling of biting down on something hard for too long. The teeth feel slightly mobile and tender under pressure. Bite force amplifies this significantly — which is why chewing on the first day of a new tray is the most uncomfortable part of the experience for most patients.
              </p>
              <p style={pStyle}>
                The ligament response peaks in the first 24 to 48 hours and then diminishes as the teeth move toward the target position and the load on the ligaments decreases. By day three, most patients report a significant reduction in tenderness. By the end of the first week, the sensation is typically indistinguishable from wearing the aligner they were used to.
              </p>
              <p style={pStyle}>
                The cycle then repeats with the next set. Over the course of treatment, most patients find that later trays feel less uncomfortable than the early ones — possibly because the periodontal ligaments adapt, and possibly because patients become more skilled at managing the transition.
              </p>
            </section>

            {/* H2: Common sensations */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Common Sensations During Treatment</h2>
              <p style={pStyle}>
                Beyond the tray-change pressure cycle, there are a few specific sensations that catch some patients off guard. None are serious; all are manageable.
              </p>

              <h3 style={h3Style}>Tenderness When Chewing</h3>
              <p style={pStyle}>
                In the first day or two of a new tray, biting into food that requires any lateral cutting or tearing can produce a sharp, momentary tenderness. This is particularly noticeable with crusty bread, raw vegetables, and any food that requires significant occlusal force. The solution is straightforward: choose soft foods for day one. The tenderness when chewing resolves quickly — most patients are eating normally by day two or three without any modification.
              </p>
              <p style={pStyle}>
                This is one area where Invisalign has a genuine functional advantage over fixed braces. Brace patients deal with food restrictions and chewing discomfort for the entire duration of treatment. Invisalign patients remove the trays to eat and only experience chewing tenderness for the first couple of days after each new set — typically once every one to two weeks.
              </p>

              <h3 style={h3Style}>Sharp Edges on Trays</h3>
              <p style={pStyle}>
                Invisalign aligners are trimmed along the gumline, and the trim line varies slightly by tooth depending on the planned movement. Occasionally — not commonly, but it happens — a tray arrives with a slightly rough or sharp edge at the gumline of a back tooth. This can create a localised sore patch on the gum or cheek tissue that rubs against the edge.
              </p>
              <p style={pStyle}>
                The fix is simple: a nail file or emery board on its finest side, used with very gentle pressure to smooth the offending edge. Work carefully in one direction only along the edge of the plastic. You are removing a small amount of material from the trim line, not filing the tooth contact surface — the fit of the aligner is not affected by smoothing a rough edge. If you are not comfortable doing this yourself, your provider will smooth it for you at a brief visit, or can often advise over the phone.
              </p>

              <h3 style={h3Style}>Attachment Rubbing</h3>
              <p style={pStyle}>
                Attachments — the small tooth-coloured composite bumps bonded to specific teeth — create raised points on the tooth surface that the aligner grips around. Initially, the inside of the lip and cheeks are not adapted to these new contours, and friction against attachment surfaces can cause irritation or a small sore patch on the soft tissue.
              </p>
              <p style={pStyle}>
                This is the most common source of discomfort in the first two weeks of treatment and it almost always resolves on its own. The oral mucosa toughens quickly in response to friction — the same process that allows people who play wind instruments to develop hardened lip tissue over time. For most patients, the lip and cheek adaptation is complete within two weeks. In the interim, orthodontic wax pressed over the rough attachment provides immediate relief.
              </p>
            </section>

            {/* H2: 5 tips */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>5 Tips to Manage Invisalign Discomfort</h2>
              <p style={pStyle}>
                These are the strategies that experienced Invisalign patients and providers consistently recommend. They address the actual mechanics of why each tray change is uncomfortable, rather than simply masking symptoms.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {tips.map(tip => (
                  <div key={tip.n} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{tip.n}</div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{tip.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* H2: Speak to an expert */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Speak to an Essex Invisalign Expert</h2>
              <p style={pStyle}>
                The discomfort described in this guide is normal and expected. It is a sign that the aligners are applying the intended force and that tooth movement is occurring. But not all discomfort during Invisalign treatment is normal, and knowing the difference matters.
              </p>
              <p style={pStyle}>
                Contact your provider if you experience any of the following: sharp, localised pain that persists beyond the first week of a new tray; pain that worsens rather than improves over the tray cycle; an aligner that does not seat fully on any tooth after three to four days of consistent wear; or any breakage, cracking, or change in shape of an aligner. These are not common events, but they require clinical assessment — not self-management.
              </p>
              <p style={pStyle}>
                This is one of the practical benefits of choosing a Platinum or Diamond provider. Higher case volumes mean your dentist has managed every variety of tracking issue, attachment problem, and patient discomfort concern many times before. They know what normal looks like, they know what needs attention, and they can usually answer concerns quickly — often without requiring an in-person appointment.
              </p>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Find a supportive, experienced Essex provider</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every clinic in our directory holds Platinum or Diamond Invisalign tier status and is rated 4.5 stars or above by verified patients. Browse the directory to read patient reviews and find a provider who will monitor your comfort throughout treatment.
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
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Quick Summary</p>
              {[
                'Not "painful" — more like noticeable pressure',
                'Worst in first 48 hrs of a new tray',
                'Fades significantly by day 3',
                'Chewing tenderness resolves by day 2–3',
                'Attachment rubbing settles within 2 weeks',
                'Switch trays at bedtime to sleep through the peak',
                'Paracetamol/ibuprofen are safe to use',
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
                  { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
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
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Find a provider near you</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Free consultation. Free 3D scan. No obligation.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                Get Matched Free
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
