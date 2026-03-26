'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const commuterHubs = [
  {
    town: 'Chelmsford',
    slug: 'chelmsford',
    line: 'Greater Anglia',
    toCity: 'Liverpool Street',
    fastestMin: 35,
    peakFreq: 'Every 10–15 min peak',
    note: 'County town, most clinic options, multiple Platinum providers within walking distance of station.',
  },
  {
    town: 'Harlow',
    slug: 'harlow',
    line: 'Greater Anglia',
    toCity: 'Liverpool Street',
    fastestMin: 45,
    peakFreq: 'Every 20–30 min',
    note: 'Nuffield Dental at The Stow and Church Langley Dental both offer flexible appointment schedules.',
  },
  {
    town: 'Brentwood',
    slug: 'brentwood',
    line: 'Greater Anglia / TfL Rail',
    toCity: 'Liverpool Street',
    fastestMin: 28,
    peakFreq: 'Every 10 min peak',
    note: 'Fastest commute time from Essex. Compact town centre with several private dental practices.',
  },
  {
    town: 'Southend-on-Sea',
    slug: 'southend-on-sea',
    line: 'c2c',
    toCity: 'Fenchurch Street',
    fastestMin: 52,
    peakFreq: 'Every 15 min peak',
    note: 'c2c serves Fenchurch Street — shorter walk from City. Multiple practices in town centre.',
  },
];

const wearTimeTips = [
  {
    scenario: 'The morning station coffee',
    problem: 'You want a flat white before the 07:14. You have your aligners in.',
    solution: 'Take the aligners out, have the coffee on the platform, pop them back in before you board. You are losing 8 minutes — not a crisis. Do not drink hot coffee with aligners in.',
    verdict: 'Manageable',
  },
  {
    scenario: 'The Pret lunch at Liverpool Street',
    problem: 'Grabbing a sandwich at Pret between meetings. Nowhere obvious to brush.',
    solution: 'Most Liverpool Street Pret locations have decent bathroom facilities. Remove aligners, eat, rinse your mouth and aligners with water, reinsert. A travel toothbrush in your work bag makes this faster. At worst: rinse, reinsert, brush properly when you get home.',
    verdict: 'Manageable',
  },
  {
    scenario: 'After-work drinks',
    problem: 'Post-meeting pint with colleagues. Removing aligners in a crowded City pub feels awkward.',
    solution: 'Keep them in and drink water. Or remove at the bar — no one is watching you as closely as you think. The real trap is the extended evening that turns one drink into four hours. That is significant wear time lost.',
    verdict: 'Plan ahead',
  },
  {
    scenario: 'The team lunch that runs to 2 hours',
    problem: 'A client lunch that starts at 12:30 and goes until 2:45. Aligners out the whole time.',
    solution: 'This is fine — it is roughly what a normal meal removal costs you. The problem is when client lunches happen twice a week on top of morning coffees and long evenings. The 22-hour rule is an aggregate. Keep a mental tally.',
    verdict: 'Fine in moderation',
  },
  {
    scenario: 'The train journey itself',
    problem: 'What do you do with 35–55 minutes twice a day?',
    solution: 'This is prime aligner-wearing time. Aligners in, headphones on. If Dental Monitoring is part of your treatment, the weekly scan takes about 90 seconds and can be done on the return journey.',
    verdict: 'Use it well',
  },
];

export default function CommuterGuideClient() {
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
              <span style={{ color: 'var(--ink)' }}>Commuter Guide</span>
            </div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Local Essex Guide · Updated January 2026</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px' }}>
              The Essex Commuter&apos;s Guide to Invisalign:<br />
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Fitting a New Smile Into Your Schedule</em>
            </h1>
            <p style={pStyle}>
              You are up at 6:20. Out of the house by 7:00. On the Greater Anglia platform at 7:09 hoping the 07:14 is actually on time. Into Liverpool Street by 7:49, Tube to the office, full day, back through Liverpool Street by 18:30 if you are lucky — or 19:45 if you are not. Then dinner, inbox, bed, repeat. If you are on the c2c line into Fenchurch Street from Southend or Basildon, the particulars differ but the arithmetic is the same: your working day does not leave much margin for a dental appointment that starts at 2pm.
            </p>
            <p style={pStyle}>
              The good news is that Invisalign, of all the orthodontic systems available, is by some margin the most compatible with a London commuter&apos;s life. This guide explains why — and how to make it work practically if you live and travel from Essex.
            </p>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '56px', maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(24px,5vw,56px)' }} className="guide-grid">

          <article style={{ minWidth: 0 }}>

            {/* H2: Why Invisalign suits commuters */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Why Invisalign Is the Ultimate "Commuter Bracket"</h2>
              <p style={pStyle}>
                If you were considering metal braces, the appointment schedule alone would be a significant logistical problem. Fixed braces require a tightening appointment approximately every four weeks — every month, without fail, for 18 to 24 months. Each appointment takes 30 to 45 minutes. For an Essex commuter, that means either burning annual leave, leaving the City at 4:30pm and arriving home at 7pm, or finding a dentist near your London office (expensive) and rushing there in a lunch hour that is always shorter than it should be.
              </p>
              <p style={pStyle}>
                Invisalign check-ups happen every <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>six to eight weeks</strong>. Not monthly — six to eight weeks. On a 12-month treatment, that is seven or eight appointments over the entire course. And each appointment runs 15 to 20 minutes, not 45. You can book an 8am slot on the way to the station, a 7pm slot on the way back, or a Saturday morning that does not cost you a day off.
              </p>
              <p style={pStyle}>
                Some Platinum providers also integrate <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Dental Monitoring</strong> — a smartphone-based remote monitoring system where you take a weekly scan of your teeth using a cheek retractor and your phone camera. The AI analyses the scan and flags anything requiring attention to your dentist. For patients whose treatment is tracking well, this can extend the time between in-person appointments further. The scan takes about 90 seconds. It is ideal for the return journey on the Greater Anglia to Chelmsford.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px', margin: '28px 0' }} className="two-col-sm-grid">
                {[
                  { label: 'Invisalign check-ups', value: 'Every 6–8 weeks', sub: '7–8 appointments total per year', good: true },
                  { label: 'Metal brace check-ups', value: 'Every 4 weeks', sub: '12–13 appointments per year', good: false },
                  { label: 'Appointment duration', value: '15–20 minutes', sub: 'Invisalign progress check', good: true },
                  { label: 'Brace tightening', value: '30–45 minutes', sub: 'Wire adjustments required', good: false },
                ].map(stat => (
                  <div key={stat.label} style={{ background: stat.good ? 'var(--sage-pale)' : '#f5f5f2', border: `1px solid ${stat.good ? '#c8d9c9' : 'var(--border)'}`, borderRadius: '10px', padding: '16px 18px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>{stat.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: stat.good ? 'var(--sage)' : 'var(--muted)', marginBottom: '3px' }}>{stat.value}</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0 }}>{stat.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* H2: Coffee, Pret, and the 22-hour rule */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Navigating Coffee, Prets, and the 22-Hour Rule</h2>
              <p style={pStyle}>
                The 22-hour wear rule is non-negotiable for treatment to track correctly. But it does not mean you cannot have a life — it means you need to plan one. For Essex commuters, the specific scenarios where aligner wear time gets eroded are predictable. Here is how to manage each of them:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
                {wearTimeTips.map(tip => (
                  <div key={tip.scenario} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{tip.scenario}</p>
                      <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', flexShrink: 0, background: tip.verdict === 'Manageable' ? 'var(--sage-pale)' : tip.verdict === 'Use it well' ? '#EDE9F8' : '#FFFBEB', color: tip.verdict === 'Manageable' ? 'var(--sage)' : tip.verdict === 'Use it well' ? '#5B42A8' : '#8B6914' }}>
                        {tip.verdict}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#9A9A92', marginBottom: '8px', fontStyle: 'italic' }}>{tip.problem}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{tip.solution}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '18px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>The commuter&apos;s aligner kit</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  Keep a small zip bag in your work bag with: a travel toothbrush and mini toothpaste, a case for your aligners (never wrap them in tissue — that is how they end up in the bin), a small bottle of water, and orthodontic wax if your attachments are rubbing during the adaptation period. The whole lot fits in a jacket pocket.
                </p>
              </div>
            </section>

            {/* H2: Commuter-friendly clinics */}
            <section style={{ marginBottom: '48px' }}>
              <h2 style={h2Style}>Finding Essex Clinics with Commuter-Friendly Hours</h2>
              <p style={pStyle}>
                The single most important practical question for any Essex commuter considering Invisalign is not which provider has the best ClinCheck software — it is which provider offers appointment slots that do not require you to leave the City at 3pm. Evening appointments (6pm or later) and Saturday morning slots are the non-negotiables.
              </p>
              <p style={pStyle}>
                The good news: the major commuter corridors from London are also among the highest concentrations of Platinum and Diamond Invisalign providers in the county. Here is the commuter landscape across the key Essex hubs:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '28px 0' }}>
                {commuterHubs.map(hub => (
                  <div key={hub.town} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <div>
                        <Link href={`/locations/${hub.slug}/`} style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
                          {hub.town}
                        </Link>
                        <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '3px 0 0' }}>{hub.line} → {hub.toCity}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--sage)', lineHeight: 1 }}>{hub.fastestMin} min</p>
                        <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '3px 0 0' }}>fastest service</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '10px' }}>{hub.peakFreq}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{hub.note}</p>
                  </div>
                ))}
              </div>

              <p style={pStyle}>
                When you contact a clinic, ask specifically: do you offer appointments after 6pm on weekdays? Do you have Saturday slots? How long is each Invisalign check-up? The answers tell you immediately whether the practice has built its schedule around the reality of its patients' working lives.
              </p>
              <p style={pStyle}>
                Church Langley Dental in Harlow, for example, opens until 5:30pm Monday to Thursday and 9am to 4:30pm on Saturdays — making them one of the more accessible practices for patients who need to time appointments around train timetables. Always confirm current opening hours directly with the clinic before booking.
              </p>
            </section>

            {/* H2: Book around train schedule CTA */}
            <section style={{ marginBottom: '32px' }}>
              <h2 style={h2Style}>Book Around Your Train Schedule</h2>
              <p style={pStyle}>
                Annual leave is too valuable to spend on a 20-minute orthodontic check-up. The right provider — one within walking or short driving distance of your home station, with a slot at 7am or 7pm — removes the appointment logistics entirely from the equation.
              </p>
              <p style={pStyle}>
                Use our directory to find Platinum and Diamond providers in the Essex commuter towns closest to you. Each location page shows the clinics available, their opening hours, and how to book a free initial consultation.
              </p>
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '24px', margin: '28px 0' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Find providers near your station:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {[
                    { name: 'Chelmsford', slug: 'chelmsford' },
                    { name: 'Harlow',     slug: 'harlow' },
                    { name: 'Brentwood', slug: 'brentwood' },
                    { name: 'Southend-on-Sea', slug: 'southend-on-sea' },
                    { name: 'Basildon',  slug: 'basildon' },
                    { name: 'Braintree', slug: 'braintree' },
                  ].map(t => (
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
                    Browse all 111 Essex towns →
                  </Link>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '88px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }} className="guide-sidebar">
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Why Invisalign Works for Commuters</p>
              {[
                'Check-ups every 6–8 weeks, not monthly',
                'Appointments: 15–20 min, not 45',
                'Remote monitoring via smartphone',
                'No emergency brace-breaking appointments',
                'Remove for all meals — no food rules',
                'Evening and Saturday clinics in Chelmsford, Harlow, Southend',
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', flexShrink: 0, marginTop: '3px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Commuter Town Pages</p>
              {[
                { label: 'Invisalign Chelmsford (GX)', href: '/locations/chelmsford/' },
                { label: 'Invisalign Harlow (GX)', href: '/locations/harlow/' },
                { label: 'Invisalign Brentwood (GX/TfL)', href: '/locations/brentwood/' },
                { label: 'Invisalign Southend-on-Sea (c2c)', href: '/locations/southend-on-sea/' },
                { label: 'Invisalign Basildon (c2c)', href: '/locations/basildon/' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '13px', color: 'var(--sage)', textDecoration: 'none', lineHeight: 1.5, borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>{l.label} →</Link>
              ))}
            </div>
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>Don&apos;t burn annual leave</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6 }}>Find a clinic near your station with evening or Saturday slots.</p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '12px', background: 'var(--sage)', color: '#fff', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>Get Matched Free</button>
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

const h2Style: React.CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '16px', marginTop: '0', paddingTop: '8px', borderTop: '2px solid var(--sage-pale)' };
const pStyle: React.CSSProperties = { fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' };
