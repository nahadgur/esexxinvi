'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Shield, Calendar, Users } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topCities = ['Chelmsford', 'Southend-on-Sea', 'Colchester', 'Basildon', 'Brentwood', 'Harlow', 'Braintree', 'Clacton-on-Sea', 'Grays', 'Rayleigh', 'Billericay', 'Loughton'];

const homepageFaqs = [
  { question: "What does Invisalign treatment cost across Essex?", answer: "Most Essex clinics in our network price Invisalign between £1,500 and £5,500. Where you land in that range comes down to three things: how complex your case is, which Invisalign product your dentist recommends, and whether the clinic holds Platinum or Diamond status. Express treatment for minor cosmetic fixes sits at the lower end. Full Comprehensive for bite correction and severe crowding sits at the upper end. Nearly every Essex provider we work with offers interest-free monthly payments starting around £50, so the upfront number is rarely what you actually pay each month." },
  { question: "How quickly will I see results?", answer: "That depends entirely on what needs fixing. If you have a small gap or slight crowding in your front teeth, Invisalign Express can wrap up in 3 to 6 months. Moderate cases using Invisalign Lite typically take 6 to 12 months. Full Comprehensive treatment for complex issues like bite correction runs 12 to 18 months. Most patients notice visible changes within the first 6 to 8 weeks. Your Essex provider will show you a precise week-by-week digital timeline before you commit to anything." },
  { question: "Do clear aligners actually work as well as metal braces?", answer: "For the vast majority of adult cases, yes. Clinical research shows Invisalign delivers equivalent results for crowding, spacing, and mild to moderate bite problems. Where it gets interesting is that Platinum-tier providers now have access to features like Precision Wings and SmartForce attachments that handle complex movements previously only possible with fixed braces. The small number of cases where braces still have an edge are severe skeletal jaw discrepancies that need surgical intervention, which applies to very few adults." },
  { question: "Is the treatment painful?", answer: "Uncomfortable for a couple of days when you switch to a new tray, but nothing close to the pain of braces tightening. What you feel is a dull pressure as the aligner moves your teeth into position. It typically fades within 48 hours. Most Essex patients we hear from say they rarely need pain relief beyond the first day of a new set." },
  { question: "Why should I care about my dentist's Invisalign tier?", answer: "Because experience changes everything. Align Technology ranks providers by how many cases they finish each year. A Gold provider might do 20. A Platinum provider does 80 or more. A Diamond provider does 150 or more. That is the difference between someone who occasionally fits aligners and someone who lives and breathes complex tooth movements every single day. Every dentist in our Essex network holds Platinum or Diamond status." },
  { question: "How does your free service actually work?", answer: "You fill in a short form telling us where you are in Essex and what treatment you are interested in. We then match you with up to 3 Platinum or Diamond providers near you. Those clinics contact you directly, usually within a couple of hours, to book a free consultation that includes a 3D iTero scan and a personalised treatment plan. You pay us nothing. The clinics pay us a referral fee only if you decide to go ahead with treatment." },
  { question: "Are there any food restrictions during treatment?", answer: "None at all. You take your aligners out to eat and drink, which means you can have whatever you want. The only rule is to wear your trays for 20 to 22 hours a day. Brush your teeth before putting the aligners back in and you are good to go." },
  { question: "Can I preview my finished smile before starting?", answer: "Yes. Every consultation with our Essex providers includes a 3D scan using an iTero scanner. Your dentist feeds that scan into ClinCheck software, which generates a complete digital simulation showing exactly how each tooth moves from where it is now to where it will end up. You watch the animation and decide if you want to proceed." },
  { question: "Can I get Invisalign through the NHS in Essex?", answer: "Almost certainly not. NHS orthodontics is restricted to under-18s with clinically severe problems. Adult Invisalign is private. But with 0% finance options available at most Essex clinics, the monthly cost is often comparable to a gym membership." },
  { question: "How many check-up appointments will I need?", answer: "Far fewer than with braces. Most Invisalign patients see their provider every 6 to 8 weeks, and each appointment is usually 15 to 20 minutes. There are no wires to tighten. Your dentist checks that your teeth are tracking correctly, hands you your next sets of aligners, and sends you on your way." },
];

const featureItems = [
  { title: 'Nobody Can Tell', desc: 'SmartTrack trays are clear, thin, and custom-fitted. Colleagues and clients will not notice them during normal conversation.' },
  { title: 'Eat Whatever You Want', desc: 'Remove the trays for meals and eat normally. No banned-food lists, no getting food stuck in wires for 12 to 24 months.' },
  { title: 'Far Less Discomfort', desc: 'No metal edges, no wires. SmartTrack applies gentle, calibrated force — most patients describe mild pressure for the first day or two of each new tray.' },
  { title: 'See the End Result Before You Start', desc: 'ClinCheck generates a 3D animation of your entire treatment before a single tray is manufactured. No guesswork.' },
  { title: 'Some Cases Finish in 3 Months', desc: 'Minor cosmetic corrections with Invisalign Express can complete in as little as 3 months. Complex cases still average half the time of traditional braces.' },
  { title: 'Your Teeth Stay Healthier', desc: 'Braces trap food and lead to white spots and cavities. With Invisalign you remove the trays and brush normally throughout treatment.' },
];

// Section heading component (inline for this file)
function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      fontWeight: 600,
      color: 'var(--ink)',
      lineHeight: 1.15,
    }}>
      {children}
    </h2>
  );
}

function SectionSub({ children, maxWidth }: { children: React.ReactNode; maxWidth?: string }) {
  return (
    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: maxWidth || '560px' }}>
      {children}
    </p>
  );
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* HERO */}
        <Hero
          title="Essex's Finest Invisalign Specialists, Matched Free"
          subtitle="We vet every provider so you do not have to. Get matched with Platinum and Diamond Invisalign specialists near you. Free consultation, free 3D scan, zero cost to use our service."
          image="https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        {/* STAT STRIP */}
        <TrustBadges />

        {/* ── WHAT IS INVISALIGN ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '56px', alignItems: 'start' }} className="two-col-grid">

              {/* Left: prose */}
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
                  <SectionH>Clear aligners that straighten teeth <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>without the metal</em></SectionH>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '600px' }}>
                  <p>Invisalign replaces traditional brackets and wires with a series of custom-moulded, nearly invisible plastic trays. Each set is worn for one to two weeks before swapping to the next, gradually shifting your teeth into the correct position. You remove them to eat, drink, and brush, then pop them back in.</p>
                  <p>Before treatment begins, your dentist takes a full 3D scan using an iTero scanner. That scan feeds into ClinCheck software, which maps out every tooth movement from day one to the final result. You watch an animated preview of your smile transformation before agreeing to anything. No guesswork, no surprises.</p>
                  <p>Align Technology has treated over 14 million patients worldwide since 1997 and holds over 900 patents on the materials and attachment designs used in every set of trays. It is the most clinically studied clear aligner system on the market.</p>
                  <p>Here is the part most people do not realise: <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>not all Invisalign dentists are equal</strong>. Align Technology ranks providers into tiers based on how many cases they complete each year. The difference between a dentist who does 10 cases annually and one who does 150 is enormous — in planning skill, troubleshooting ability, and the final result you walk away with.</p>
                </div>
              </div>

              {/* Right: tier cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { tier: 'Diamond', cases: '150+ cases/year', desc: 'Treats multiple patients daily. Access to every advanced Invisalign feature and priority technical support.', listed: true, badgeStyle: { background: '#EDE9F8', color: '#5B42A8' } },
                  { tier: 'Platinum', cases: '80+ cases/year', desc: 'Routinely handles complex cases including deep bites, severe crowding, and full arch corrections.', listed: true, badgeStyle: { background: 'var(--sage-pale)', color: 'var(--sage)' } },
                  { tier: 'Gold', cases: '20+ cases/year', desc: 'Limited complex case experience. Not included in our Essex network.', listed: false, badgeStyle: { background: '#f0f0ec', color: '#9A9A92' } },
                ].map(item => (
                  <div key={item.tier} style={{
                    background: item.listed ? 'var(--sage-pale)' : '#f5f5f2',
                    border: `1px solid ${item.listed ? '#c8d9c9' : 'var(--border)'}`,
                    borderRadius: '10px', padding: '16px 18px',
                    opacity: item.listed ? 1 : 0.5,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>{item.tier}</span>
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px', letterSpacing: '0.05em', ...item.badgeStyle }}>
                        {item.listed ? 'In Network' : 'Not Listed'}
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '6px' }}>{item.cases}</div>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}

                {/* Why tier matters */}
                <div style={{ background: 'var(--sage)', borderRadius: '10px', padding: '18px 20px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>Why does tier matter?</div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                    A higher tier means more hands-on experience with difficult cases, access to advanced features like Precision Wings and mandibular advancement, lower refinement rates, and consistently better outcomes. We do the vetting so you get the top 5% without having to research it yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SIX REASONS ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '40px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>Six reasons Essex patients <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>choose Invisalign</em></SectionH>
              <div style={{ marginTop: '12px' }}>
                <SectionSub maxWidth="580px">
                  Adult orthodontics has grown dramatically across the South East. The appeal is simple: Invisalign delivers the same clinical results as braces for most cases, without the lifestyle compromise.
                </SectionSub>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="three-col-grid">
              {featureItems.map((item, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '28px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>What Essex patients <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>actually pay</em> for Invisalign</SectionH>
              <div style={{ marginTop: '10px' }}>
                <SectionSub maxWidth="600px">
                  Every case is different, but these are the price ranges you will see from Platinum and Diamond clinics across Essex. The quality of provider you get through our network justifies every penny.
                </SectionSub>
              </div>
            </div>

            {/* Pricing table */}
            <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: 'var(--sage-pale)', textAlign: 'left' }}>
                    <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px' }}>Treatment Type</th>
                    <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--sage)', fontSize: '12px' }}>Price (GBP)</th>
                    <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px' }} className="hidden md:table-cell">Duration</th>
                    <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px' }} className="hidden lg:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr key={tier.slug} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                      <td style={{ padding: '13px 18px', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{tier.treatment}</td>
                      <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ fontWeight: 600, color: 'var(--sage)', fontSize: '15px' }}>£{tier.priceFrom.toLocaleString()} – £{tier.priceTo.toLocaleString()}</span>
                      </td>
                      <td style={{ padding: '13px 18px', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }} className="hidden md:table-cell">{tier.typicalDuration}</td>
                      <td style={{ padding: '13px 18px', color: 'var(--muted)', fontSize: '12px', borderBottom: '1px solid var(--border)' }} className="hidden lg:table-cell">{tier.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Included + finance */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }} className="two-col-sm-grid">
              <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '20px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '14px' }}>Every Quote Includes</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {treatmentIncludes.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '8px', color: '#fff', fontWeight: 700 }}>✓</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>0% Finance Available</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '14px' }}>{financeInfo.description}</p>
                <div style={{ background: 'var(--sage-pale)', borderRadius: '8px', padding: '14px 16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 600, color: 'var(--sage)' }}>From £{financeInfo.monthlyFrom}/month</div>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Over {financeInfo.spreadOver} at 0% APR</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '680px' }}>
              Yes, a Platinum provider may cost slightly more than the general dentist down the road. But their experience means fewer correction rounds, fewer surprises, and a better end result. Most patients find the marginally higher fee saves them money overall. Our service is free, so compare up to 3 quotes and decide for yourself.
            </p>
          </div>
        </section>

        {/* ── TREATMENTS / SERVICES ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--sage-light)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '36px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>What can Invisalign <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>actually fix?</em></SectionH>
              <div style={{ marginTop: '10px' }}>
                <SectionSub>
                  More than most people think. Our Essex Platinum providers use advanced attachments and staging techniques to treat cases that were braces-only territory just a few years ago.
                </SectionSub>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="three-col-grid">
              {services.map(service => (
                <article key={service.id} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <Link href={`/services/${service.slug}/`} style={{ display: 'block', height: '180px', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image} alt={service.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      loading="lazy"
                      className="service-img"
                    />
                  </Link>
                  <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Link href={`/services/${service.slug}/`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', transition: 'color 0.15s' }}
                        className="hover:text-brand-600">
                        {service.title}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.6, flex: 1 }}>{service.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                      <Link href={`/services/${service.slug}/`} style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                        Find providers <ArrowRight style={{ width: '14px', height: '14px' }} />
                      </Link>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        style={{ background: 'var(--ink)', color: '#fff', fontSize: '11px', fontWeight: 600, padding: '7px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
                      >
                        Get 3 Quotes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '44px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>From form to free consultation <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>in under 2 hours</em></SectionH>
              <div style={{ marginTop: '10px' }}>
                <SectionSub>We are not a dental practice. We are a free matching service that connects Essex patients with the right Invisalign specialist for their case.</SectionSub>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '44px' }} className="three-col-grid">
              {[
                { step: 1, title: 'Tell Us What You Need', desc: 'Fill in a 60-second form with your Essex location and what you want to fix. No account required. We only share your details with clinics we match you with.' },
                { step: 2, title: 'We Shortlist Your Best Options', desc: 'We filter our network by case type, distance, availability, and patient ratings. You get the best 2 to 3 matches, not a random list.' },
                { step: 3, title: 'Clinics Reach Out With Free Quotes', desc: 'Matched providers contact you within hours to arrange a free consultation including an iTero 3D scan and a personalised treatment plan — at no cost.' },
              ].map(item => (
                <div key={item.step} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'var(--sage-pale)', border: '2px solid #c8d9c9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 18px', flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--sage)' }}>{item.step}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Why this service exists */}
            <div style={{ background: 'var(--sage-pale)', border: '1px solid #c8d9c9', borderRadius: '12px', padding: 'clamp(24px,4vw,40px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }} className="cta-split-grid">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <div style={{ width: '24px', height: '1px', background: 'var(--sage-mid)' }} />
                    <span style={{ fontSize: '11px', color: 'var(--sage-mid)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Why this service exists</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '10px' }}>
                    Any high-street dentist can call themselves an Invisalign provider after a weekend course. The problem is that your result depends almost entirely on how many complex cases that dentist has actually completed. Researching provider tiers, reading reviews, and comparing quotes across multiple clinics takes hours. We have already done that work for every provider in our Essex network.
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>
                    We cover clinics from Saffron Walden down to Southend, from Harlow across to Clacton. The service costs you nothing. We earn a referral fee from the clinic only if you choose to go ahead with treatment.
                  </p>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
                    Get Your Free Quotes
                  </button>
                  <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '8px' }}>100% free &middot; No obligation &middot; 60 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INVISALIGN VS BRACES ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--sage-light)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '32px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>Invisalign <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>vs</em> Metal Braces: the honest comparison</SectionH>
              <div style={{ marginTop: '10px' }}>
                <SectionSub maxWidth="600px">Both systems straighten teeth. The difference is how they fit into your life while they do it.</SectionSub>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }} className="two-col-sm-grid">
              {/* Invisalign col */}
              <div style={{ background: '#fff', border: '1px solid #c8d9c9', borderRadius: '10px', padding: '22px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--sage)', marginBottom: '18px' }}>
                  Invisalign Clear Aligners
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Nearly invisible, most people will not notice', 'Remove to eat, drink, brush, and floss', 'No metal in your mouth at all', 'Check-ups every 6 to 8 weeks only', 'Full 3D preview of your result before starting', 'Typical treatment 6 to 18 months', 'Smooth medical-grade plastic, no sharp edges', 'From £1,500 to £5,500 across Essex'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '8px', color: '#fff', fontWeight: 700 }}>✓</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Braces col */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '22px 24px', opacity: 0.75 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: '#B0B0A8', marginBottom: '18px' }}>
                  Traditional Metal Braces
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Visible metal brackets and wires', 'Fixed in place for the entire treatment', 'Long list of banned foods', 'Monthly adjustment appointments required', 'No way to visualise the end result', 'Typical treatment 18 to 36 months', 'Brackets and wires cause sores and irritation', 'From £1,500 to £6,000'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#B0B0A8' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '1.5px solid #D0D0C8', flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '680px' }}>
              The deciding factor is always provider experience. A Platinum specialist who has planned and managed hundreds of Invisalign cases will outperform a generalist with either system. For everyone else, Invisalign treated by an experienced provider is the stronger option.
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '36px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
                <SectionH>Straight from <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Essex patients</em></SectionH>
                <div style={{ marginTop: '8px' }}>
                  <SectionSub>Real experiences from people who used our free matching service to find their Invisalign provider.</SectionSub>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ fontSize: '13px', flexShrink: 0 }}>
                Get Matched Free
              </button>
            </div>
            <Testimonials limit={4} />
          </div>
        </section>

        {/* ── LOCATIONS ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width">
            <div style={{ marginBottom: '32px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
              <SectionH>Find providers in <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>your part of Essex</em></SectionH>
              <div style={{ marginTop: '10px' }}>
                <SectionSub maxWidth="580px">We cover every major town in the county. Each location page shows which treatments are available, what local patients pay, and how to book a free consultation.</SectionSub>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }} className="loc-grid">
              {topCities.map(city => (
                <Link key={city} href={`/location/${toSlug(city)}/`} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  background: '#fff', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '14px 16px',
                  textDecoration: 'none', transition: 'border-color 0.15s, background 0.15s',
                }} className="loc-link">
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'var(--sage-pale)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <MapPin style={{ width: '14px', height: '14px', color: 'var(--sage)' }} />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)', fontSize: '14px', display: 'block' }}>
                      Invisalign {city}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Providers and prices</span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link href="/location/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Browse all Essex locations
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width" style={{ maxWidth: '760px' }}>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '14px' }} />
            </div>
            <FAQ faqs={homepageFaqs} title="Your Invisalign questions, answered" />
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: 'clamp(56px,8vw,96px) 0', background: 'var(--sage)' }}>
          <div className="container-width" style={{ textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem,4vw,2.8rem)',
              fontWeight: 600, color: '#fff',
              lineHeight: 1.15, marginBottom: '12px',
            }}>
              Your perfect smile starts with <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.55)' }}>the right provider</em>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 36px' }}>
              Fill in our 60-second form and let Essex&apos;s top Invisalign clinics come to you. Free quotes, free consultations, free 3D scans. No strings attached.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ padding: '14px 36px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}
              >
                Compare Providers Free
              </button>
              <Link href="/services/" className="btn-outline" style={{ fontSize: '14px', textDecoration: 'none' }}>
                Browse Treatments
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Always 100% free', 'Platinum and Diamond only', 'Free 3D scan included'].map(item => (
                <span key={item} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
          .three-col-grid { grid-template-columns: 1fr 1fr !important; }
          .loc-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-split-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
        @media (max-width: 600px) {
          .three-col-grid { grid-template-columns: 1fr !important; }
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
          .loc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .loc-link:hover { background: var(--sage-pale) !important; border-color: #c8d9c9 !important; }
        .service-img:hover { transform: scale(1.04); }
      `}</style>
    </>
  );
}
