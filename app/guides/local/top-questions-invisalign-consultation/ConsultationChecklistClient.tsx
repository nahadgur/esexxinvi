'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const questions = [
  {
    n: 1,
    q: 'Are you a certified Invisalign provider — and what is your tier?',
    why: 'This is the single most important question at any consultation, and the answer should be immediate and specific.',
    detail: `Align Technology certifies Invisalign providers at several tiers based on how many cases they complete each year. The relevant tiers for quality assurance are Platinum (80+ cases per year) and Diamond (150+ cases per year). These providers plan and manage Invisalign cases daily — they have seen the complications, the tracking failures, the challenging rotations. They know how to handle them.

A Gold provider completes around 20 cases per year. That is fewer than two per month. A general dentist who offers Invisalign alongside fillings, hygiene, and routine NHS appointments may be perfectly competent at straightforward cases, but they are not exposed to enough clinical complexity to develop the troubleshooting expertise that Platinum and Diamond providers accumulate naturally.

Ask the question directly: "What is your current Invisalign tier, and can you confirm it?" The answer should be immediate and specific. If there is hesitation, or if the response is "we are registered with Invisalign" rather than a named tier, that tells you something.`,
    redFlag: 'Vague answer about being "certified" without naming a tier. Any tier below Platinum.',
    greenFlag: 'Platinum or Diamond tier confirmed immediately and without prompting.',
  },
  {
    n: 2,
    q: 'Will my treatment include attachments or IPR?',
    why: 'Understanding what is planned tells you how complex your case is and helps you evaluate whether the quote is realistic.',
    detail: `Attachments are small tooth-coloured composite bumps bonded to specific teeth that enable complex movements — rotation, extrusion, torque. Interproximal Reduction (IPR) is the controlled removal of tiny amounts of enamel between teeth to create space without extraction.

Asking about attachments and IPR does two things. First, it tells you how complex your case actually is — more attachments typically indicate a more demanding tooth movement plan. Second, it tells you whether the provider is planning your treatment properly. Attachments and IPR are clinical necessities for moderate-to-complex cases. A provider who tells you your moderately crowded teeth require no attachments is either treating a very simple case or is underselling the treatment plan.

Ask: "Will my ClinCheck plan include attachments? If so, on which teeth and why? Will IPR be needed?" A competent provider will walk through the plan clearly. If the response is dismissive or vague, the planning may be insufficiently detailed.`,
    redFlag: 'Provider cannot explain why attachments are or are not needed. Refusal to discuss IPR.',
    greenFlag: 'Clear explanation of which teeth need attachments and the biomechanical reason for each.',
  },
  {
    n: 3,
    q: 'Are Vivera retainers included in your quote?',
    why: 'This is where many patients discover a £300–£500 charge they were not expecting — after they have already committed.',
    detail: `Retainers are not optional. Without them, your teeth will begin to move back toward their original position — sometimes within months. Retainers are the final and indefinitely ongoing phase of orthodontic treatment. They are as important as the aligners themselves.

Vivera retainers are Align Technology's post-Invisalign removable retainer, sold in sets of four (two upper, two lower). They are made from a harder thermoplastic than the treatment aligners and typically cost £200 to £400 per set. Some clinics include a single set of Vivera retainers in the treatment fee. Many do not — the retainers are quoted separately at the end of treatment, when the patient is least likely to question the additional charge.

Ask: "Does your quote include retainers? What type and how many sets? If Vivera retainers are not included, what is the additional cost?" Write down the answer. A transparent clinic will tell you clearly and upfront what retainer provision is included and what is extra.`,
    redFlag: 'Provider deflects the retainer question or says "we will discuss that at the end." Quote does not itemise retainers.',
    greenFlag: 'Retainer provision — type and number of sets — clearly stated as part of the quote or explicitly quoted separately.',
  },
  {
    n: 4,
    q: 'What is your refinement policy — and are refinements included?',
    why: 'Refinements are additional aligners made when the initial series does not achieve the full planned result. Knowing whether they are included or extra-cost matters a great deal over a 12–18 month treatment.',
    detail: `A refinement phase occurs when your teeth have not quite reached their planned final position at the end of the initial aligner series. A new 3D scan is taken, a revised ClinCheck plan is generated, and additional aligners are manufactured to complete the correction. For Comprehensive treatment, refinements are standard — the product includes unlimited aligners for exactly this reason. For Lite, refinements may be included or may trigger an upgrade charge depending on how the case is structured.

Ask: "If my teeth do not track fully with the initial aligner series, will refinements be included in the price I am paying today? How many rounds of refinements? Is there a point at which I would be charged extra?" The refinement policy reveals a great deal about the provider's confidence in their own planning and their approach to patient relationships. A provider who refuses to include any refinements in a Comprehensive quote is transferring risk to you that properly belongs to them.`,
    redFlag: 'Refinements explicitly excluded from the quote. Provider cannot tell you what happens if tracking fails.',
    greenFlag: 'Clear policy: Comprehensive includes unlimited refinements. Lite states explicitly what is and is not included.',
  },
  {
    n: 5,
    q: 'Can I see my ClinCheck simulation before I commit?',
    why: 'You should see your proposed treatment outcome — animated from start to finish — before you sign anything.',
    detail: `ClinCheck is Align Technology's treatment planning software. It generates a frame-by-frame digital animation of every tooth movement from your current position to the planned final position. It is one of Invisalign's most clinically and commercially compelling features: you watch your own smile transform before any aligner is manufactured.

The ClinCheck simulation should be shown to you at the consultation, before you are asked to sign a treatment agreement or pay a deposit. If a provider asks you to commit before showing you the simulation, or says the simulation will be prepared after you pay, the clinical workflow is inverted. You are committing to a result you have not seen.

Ask: "Can I see my ClinCheck simulation today, as part of the free consultation?" The 3D scan is taken at the consultation precisely so that a preliminary ClinCheck can be generated. You should leave the appointment having seen at minimum a preliminary simulation of your proposed outcome.`,
    redFlag: 'Provider cannot or will not show ClinCheck at the consultation stage. Commitment requested before simulation is shown.',
    greenFlag: 'ClinCheck simulation shown at the free consultation, with the provider walking through each stage of movement.',
  },
  {
    n: 6,
    q: 'What finance options do you offer, and is it 0% APR?',
    why: 'Finance terms vary significantly. 0% APR over 24 months and 14.9% APR over 48 months are both "finance options" — but they produce very different total costs.',
    detail: `Most Platinum and Diamond providers in Essex offer some form of finance. The terms vary considerably: 0% APR over 12 to 24 months is the most advantageous option for patients with good credit history. Interest-bearing plans at 9.9% to 14.9% APR over 36 to 60 months are available for patients who need lower monthly payments or have a lower credit score — but these increase the total amount paid.

Ask: "What are your finance options? Do you offer 0% APR and for how long? What APR applies to longer-term plans? What deposit is required?" Request the finance details in writing. The Credit Brokers and Finance Providers are required by the FCA to provide a pre-contractual information document — ask for it.`,
    redFlag: 'Vague about finance terms. Cannot tell you the APR. Asks you to sign before providing written finance terms.',
    greenFlag: 'Clear statement of 0% APR term, deposit requirement, and monthly payment. Written finance summary provided.',
  },
  {
    n: 7,
    q: 'What does the fee include, in writing?',
    why: 'A verbal assurance that everything is included is not the same as an itemised written quote.',
    detail: `Before you leave the consultation, request an itemised written quote that lists explicitly: all aligner sets (including refinements if applicable), all attachments and re-bonding if needed, all IPR, all check-up appointments, retainer provision, and any costs that are explicitly not included. The written quote protects you if the scope of the fee is disputed later.

A transparent clinic will produce this without hesitation. A clinic that is vague about what the fee covers — or that provides only a headline figure without itemisation — is a clinic where you may encounter additional charges later. The most common surprise charges are: retainers not included, refinements charged extra after the first round, and replacement aligners charged at a per-set rate.`,
    redFlag: 'Provider cannot or will not provide a written itemised quote. Only a headline figure is given.',
    greenFlag: 'Itemised written quote provided before you leave, listing inclusions and explicit exclusions.',
  },
];

export default function ConsultationChecklistClient() {
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
              <span style={{ color: 'var(--ink)' }}>Consultation Checklist</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Patient Advocate Guide · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Top 7 Questions to Ask<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>During Your Essex Invisalign Consultation</em>
            </h1>
            <p style={pStyle}>
              A free Invisalign consultation is not a one-way event. It is not simply an opportunity for a provider to present their treatment plan and for you to nod and sign. It is an interview — and you are the one doing the interviewing. You are deciding whether to trust this clinic with 12 to 18 months of your dental health and several thousand pounds of your money. The questions you ask in that first appointment will tell you more about the clinic than any website, Google review, or before-and-after gallery.
            </p>
            <p style={pStyle}>
              The seven questions below are the ones that separate confident, transparent clinics from those where surprises — clinical and financial — emerge later in treatment. Print this page, take it with you, and ask every one of them.
            </p>

            {/* Quick reference card */}
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px 24px', marginTop: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Your consultation checklist — at a glance:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {questions.map(q => (
                  <div key={q.n} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{q.n}</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{q.q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {questions.map(q => (
              <section key={q.n} style={{ marginBottom: '52px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{q.n}</div>
                  <h2 style={{ ...h2Style, borderTop: 'none', paddingTop: 0, margin: 0, flex: 1 }}>{q.q}</h2>
                </div>

                <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sage)', margin: 0 }}>Why this matters: {q.why}</p>
                </div>

                {q.detail.split('\n\n').map((para, i) => (
                  <p key={i} style={pStyle}>{para}</p>
                ))}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }} className="two-col-sm-grid">
                  <div style={{ background: '#FEF3F2', border: '1px solid #FECDCA', borderRadius: '8px', padding: '12px 14px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#B42318', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Red flag</p>
                    <p style={{ fontSize: '13px', color: '#7A271A', lineHeight: 1.55, margin: 0 }}>{q.redFlag}</p>
                  </div>
                  <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '8px', padding: '12px 14px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Green flag</p>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{q.greenFlag}</p>
                  </div>
                </div>
              </section>
            ))}

            {/* CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Find a Vetted Provider You Can Trust</h2>
              <p style={pStyle}>
                Asking the right questions matters — but you can reduce the risk considerably by starting with a provider who has already been vetted against objective criteria. Every clinic in our Essex directory holds Platinum or Diamond tier status (confirmed against Align Technology records, not self-reported), maintains a 4.5-star or above Google rating from verified patients, and is GDC-registered.
              </p>
              <p style={pStyle}>
                We have done the heavy lifting before you get to the consultation. The questions above remain worth asking — but you are starting from a much stronger position when the provider has already cleared our five-point vetting criteria.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Browse the Essex Clinic Directory</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every listed clinic is Platinum or Diamond tier, GDC-registered, and rated 4.5 stars or above. Verified, transparent, and offering free consultations.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/clinics/" style={{ padding: '11px 22px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '40px', textDecoration: 'none' }}>
                    Browse Essex Clinic Directory
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
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Your 7-Question Checklist</p>
              {questions.map((q, i) => (
                <div key={q.n} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i < 6 ? '10px' : 0 }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{q.n}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{q.q}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Related Guides</p>
              {[
                { label: 'What Is a Platinum Provider?', href: '/guides/choosing/platinum-diamond-provider/' },
                { label: 'Hidden Costs to Watch Out For', href: '/guides/costs/true-cost-invisalign-uk/' },
                { label: 'Invisalign Finance & Payment Plans', href: '/guides/costs/financing-payment-plans/' },
                { label: 'The Invisalign Journey: Step-by-Step', href: '/guides/treatment-process/invisalign-journey-step-by-step/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Start with a vetted clinic</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Platinum or Diamond tier. GDC-registered. 4.5 stars+. Free consultation.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Find Providers Free</button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) { .guide-grid { grid-template-columns: 1fr !important; } .guide-sidebar { position: static !important; } }
        @media (max-width: 640px) { .two-col-sm-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
