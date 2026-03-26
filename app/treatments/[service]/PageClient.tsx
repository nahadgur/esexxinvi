'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { getServiceBySlug, services } from '@/data/services';
import { getAllCitySlugs, getCityBySlug, toSlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

// Rich content per service (mirrors what was in the old PageClient)
const serviceContent: Record<string, {
  intro: string[];
  benefits: { title: string; desc: string }[];
  candidates: string[];
  process: { title: string; desc: string }[];
  priceRange: string;
  duration: string;
}> = {
  crowded: {
    intro: [
      "Crowded teeth are the most common orthodontic issue among Essex adults. They occur when there is not enough space in the jaw for all teeth to fit naturally, causing overlap, twisting, or forward displacement.",
      "Invisalign treats crowding using a sequence of clear aligners that gradually create space and guide each tooth into alignment. Platinum and Diamond providers use interproximal reduction (IPR) and SmartForce attachments to achieve extraction-free results most general dentists would not attempt.",
    ],
    benefits: [
      { title: 'Easier to Clean', desc: 'Straight teeth make brushing and flossing significantly more effective, reducing long-term risk of decay and gum disease.' },
      { title: 'No Extractions Needed', desc: 'Experienced providers use IPR to create space without removing healthy teeth in the majority of crowding cases.' },
      { title: 'Predictable Digital Planning', desc: 'ClinCheck maps every millimetre of movement before treatment begins, so you know exactly how your crowding will resolve.' },
      { title: 'Comfortable Progress', desc: 'SmartTrack aligners apply gentle pressure across multiple teeth simultaneously — far more comfortable than brace tightening.' },
    ],
    candidates: ['Teeth that overlap or sit behind each other', 'Difficulty flossing between tightly packed teeth', 'Teeth that have shifted after childhood braces', 'Visible twisting or rotation of front teeth'],
    process: [
      { title: 'Assessment and Scan', desc: 'Your provider takes a full 3D iTero scan and assesses severity of crowding, jaw space, and gum health.' },
      { title: 'ClinCheck Treatment Plan', desc: 'A digital plan maps how each tooth moves to resolve crowding, including any IPR needed to create space.' },
      { title: 'Aligner Treatment', desc: 'You wear each set of aligners for 1–2 weeks, with check-ups every 6–8 weeks to monitor progress.' },
      { title: 'Refinement and Retention', desc: 'If needed, refinement aligners fine-tune the final position. A retainer keeps your result permanent.' },
    ],
    priceRange: '£2,500 – £5,500', duration: '6 – 18 months',
  },
  gaps: {
    intro: [
      "Gaps between teeth, known clinically as diastema, can occur anywhere in the mouth but are most common between upper front teeth. Small gaps can often be closed in as little as 3 months with Invisalign Express.",
      "Platinum providers plan gap closure to maintain proper bite alignment — simply pushing teeth together without considering occlusion can create new problems. Experience makes the difference.",
    ],
    benefits: [
      { title: 'Fast Results for Small Gaps', desc: 'Single gaps between front teeth can often be closed in 3–6 months with Invisalign Express.' },
      { title: 'No Impact on Bite', desc: 'Platinum providers plan gap closure to maintain proper occlusion throughout treatment.' },
      { title: 'Discreet Treatment', desc: 'Clear aligners are virtually invisible — no one needs to know you are closing gaps.' },
      { title: 'Permanent Results', desc: 'With proper retention, gap closure with Invisalign is a permanent solution.' },
    ],
    candidates: ['A visible gap between front teeth', 'Multiple small spaces across upper or lower teeth', 'Gaps that trap food and are hard to keep clean', 'Spaces affecting speech or confidence'],
    process: [
      { title: 'Gap Assessment', desc: 'Your provider measures gap sizes and scans your full mouth with iTero 3D technology.' },
      { title: 'Movement Planning', desc: 'ClinCheck plans each tooth movement to close gaps while maintaining bite balance.' },
      { title: 'Aligner Wear', desc: 'Clear aligners gently guide teeth together, each set making incremental progress.' },
      { title: 'Retention', desc: 'A bonded or removable retainer ensures gaps stay closed permanently.' },
    ],
    priceRange: '£1,500 – £4,000', duration: '3 – 12 months',
  },
  overbite: {
    intro: [
      "An overbite occurs when the upper front teeth overlap the lower front teeth by more than the normal 2–3mm. A deep overbite can cause wear on front teeth, jaw pain, and difficulty eating.",
      "Invisalign corrects overbites using Precision Wings — built-in features that encourage the lower jaw to move forward while aligners simultaneously adjust tooth positions. This dual-action approach handles cases previously considered braces-only.",
    ],
    benefits: [
      { title: 'No Headgear Required', desc: 'Precision Wings provide mandibular advancement without the discomfort or visibility of headgear.' },
      { title: 'Simultaneous Correction', desc: 'Bite and alignment are corrected at the same time, shortening overall treatment duration.' },
      { title: 'Reduced Jaw Pain', desc: 'Correcting deep overbite often alleviates TMJ symptoms and morning jaw tension.' },
      { title: 'Protects Tooth Enamel', desc: 'Resolving overbite prevents the accelerated enamel wear common with untreated deep bites.' },
    ],
    candidates: ['Upper teeth that cover more than a third of your lower teeth', 'Lower teeth biting into the roof of your mouth', 'Jaw pain or tension, especially in the morning', 'Front teeth showing signs of wear'],
    process: [
      { title: 'Bite Assessment', desc: 'Your provider measures overbite depth and assesses whether the cause is dental or skeletal.' },
      { title: 'Precision Wing Planning', desc: 'ClinCheck stages both vertical tooth intrusion and jaw positioning for simultaneous correction.' },
      { title: 'Aligner and Wing Treatment', desc: 'Aligners with built-in Precision Wings guide the bite correction week by week.' },
      { title: 'Retention', desc: 'Retainers maintain the corrected bite position and prevent relapse.' },
    ],
    priceRange: '£3,500 – £5,500', duration: '12 – 20 months',
  },
  underbite: {
    intro: [
      "An underbite occurs when the lower teeth sit in front of the upper teeth. Many mild-to-moderate underbites can be treated with Invisalign using Class III elastics — without surgery.",
      "Success with underbite treatment depends heavily on provider experience. Our Essex Platinum and Diamond providers have the case volume to distinguish dental underbites (treatable with Invisalign) from skeletal cases requiring a combined approach.",
    ],
    benefits: [
      { title: 'Surgery Often Avoidable', desc: 'Many dental underbites can be fully corrected with Invisalign alone — no surgical referral required.' },
      { title: 'Improved Profile', desc: 'Correcting an underbite brings the jaw relationship into balance, improving the facial profile.' },
      { title: 'Reduced Wear', desc: 'Underbites cause accelerated wear on front teeth. Correction stops the damage and protects enamel.' },
      { title: 'Better Function', desc: 'Proper occlusion improves chewing efficiency and reduces strain on jaw joints.' },
    ],
    candidates: ['Lower teeth that sit in front of upper teeth when biting', 'Visible jaw protrusion from the side', 'Difficulty chewing or biting into food', 'Speech issues related to jaw position'],
    process: [
      { title: 'Skeletal vs Dental Assessment', desc: 'Your provider determines whether the underbite is dental (tooth position) or skeletal (jaw discrepancy).' },
      { title: 'Elastic Integration Planning', desc: 'ClinCheck stages Class III elastic use alongside aligner movement for coordinated correction.' },
      { title: 'Aligner Treatment with Elastics', desc: 'Aligners and elastics work together to advance the upper arch and retract the lower.' },
      { title: 'Retention', desc: 'Permanent retention maintains the corrected jaw relationship.' },
    ],
    priceRange: '£3,000 – £5,500', duration: '12 – 18 months',
  },
  crossbite: {
    intro: [
      "A crossbite occurs when one or more upper teeth sit inside (lingual to) the lower teeth — anteriorly with incisors, or posteriorly with back teeth. It can cause a mandibular shift and accelerated tooth wear.",
      "Invisalign corrects crossbites using optimised SmartForce attachments engineered for buccal and palatal force vectors. This eliminates the crossbite contact and the associated jaw shift without fixed appliances.",
    ],
    benefits: [
      { title: 'Eliminates Jaw Shift', desc: 'Correcting the crossbite removes the mandibular shift, reducing asymmetric jaw loading.' },
      { title: 'No Fixed Expanders', desc: 'Many crossbites can be corrected with clear aligners alone, avoiding palatal expanders.' },
      { title: 'Prevents Tooth Damage', desc: 'Crossbite teeth are subjected to abnormal force. Correction stops premature wear and chipping.' },
      { title: 'Balances the Bite', desc: 'Proper buccal overjet improves chewing efficiency and symmetry across the whole bite.' },
    ],
    candidates: ['Upper teeth sitting inside lower teeth when biting', 'Jaw that shifts to one side when closing', 'Teeth showing abnormal wear on one side', 'Headaches or jaw pain related to asymmetric bite'],
    process: [
      { title: 'Crossbite Classification', desc: 'Your provider identifies whether the crossbite is anterior, posterior, unilateral, or bilateral.' },
      { title: 'Attachment Planning', desc: 'ClinCheck stages SmartForce attachments to generate the correct force vectors for each tooth.' },
      { title: 'Aligner Treatment', desc: 'Sequential aligners with precision attachments move teeth into correct buccal overjet.' },
      { title: 'Retention', desc: 'Retainers maintain the corrected position and prevent the crossbite from returning.' },
    ],
    priceRange: '£2,500 – £5,000', duration: '12 – 18 months',
  },
  adults: {
    intro: [
      "Adult Invisalign is the most common treatment type in our Essex network. Whether you want to correct mild relapse from teenage braces or address a complex bite you have lived with for decades, clear aligners fit around professional and social commitments.",
      "There is no upper age limit for Invisalign. Our providers treat patients in their 20s, 40s, and 70s. The key difference from teenage cases is planning around existing restorations — crowns, veneers, bridges — which experienced providers manage routinely.",
    ],
    benefits: [
      { title: 'Virtually Invisible', desc: 'SmartTrack trays are clear, thin, and custom-fitted. Colleagues and clients will not notice them.' },
      { title: 'Remove to Eat', desc: 'No food restrictions. Remove the trays for meals and eat normally throughout treatment.' },
      { title: 'Fewer Appointments', desc: 'Check-ups every 6–8 weeks — a fraction of the monthly adjustments required with fixed braces.' },
      { title: 'Works Around Restorations', desc: 'Experienced providers plan treatment around existing crowns, veneers, and implants.' },
    ],
    candidates: ['Teeth that have shifted after childhood braces', 'Mild-to-moderate crowding or spacing as an adult', 'Bite issues that have worsened with age', 'Professionals wanting discreet treatment'],
    process: [
      { title: 'Comprehensive Assessment', desc: 'Your provider reviews existing restorations, gum health, and bone density before planning treatment.' },
      { title: 'Treatment Selection', desc: 'Express, Lite, or Comprehensive is selected based on what needs correcting — you are not sold more than needed.' },
      { title: 'Aligner Treatment', desc: 'Wear aligners 20–22 hours per day, removing for meals and oral hygiene throughout.' },
      { title: 'Long-term Retention', desc: 'Adults require indefinite retention. Your provider will supply the appropriate retainer type.' },
    ],
    priceRange: '£1,500 – £5,500', duration: '3 – 18 months',
  },
};

// Sample Essex towns for the locations grid on each treatment page
const featuredTowns = [
  'Chelmsford', 'Harlow', 'Southend-on-Sea', 'Colchester',
  'Basildon', 'Brentwood', 'Braintree', 'Clacton-on-Sea',
];

function FaqAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '2px', overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', gap: '16px', textAlign: 'left' }}>
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>{q}</span>
        <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--sage)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && <div style={{ padding: '0 20px 16px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, background: '#fff' }}>{a}</div>}
    </div>
  );
}

export default function TreatmentPageClient({ params }: { params: { service: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const content = serviceContent[params.service] ?? serviceContent.adults;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px', borderBottom: '1px solid var(--border)' }} className="hero-grid">
          <div style={{ padding: 'clamp(40px,6vw,64px) clamp(24px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--cream)' }}>
            <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Treatment Guide</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
              <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>{service.title}</em>
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#C0C8BE' }}>across Essex</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '360px', marginBottom: '28px' }}>
              {service.description} Matched with verified Platinum and Diamond providers near you — free consultation, free 3D scan.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: '13px 28px', borderRadius: '40px', fontSize: '13px' }}>
                Get Matched Free
              </button>
              <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px', alignSelf: 'center' }}>
                Find by Location
              </Link>
            </div>
            {/* Quick stats */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[{ label: 'Typical Cost', value: content.priceRange }, { label: 'Duration', value: content.duration }, { label: 'Providers', value: 'Platinum & Diamond' }].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--sage-pale)', minHeight: '320px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, mixBlendMode: 'multiply' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', zIndex: 2 }}>
              <div style={{ background: 'rgba(250,250,247,0.92)', border: '1px solid rgba(61,92,66,0.15)', borderRadius: '8px', padding: '14px 16px', backdropFilter: 'blur(4px)' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Essex Platinum providers</div>
                <div style={{ fontSize: '13px', color: 'var(--ink)', fontWeight: 500 }}>Free iTero 3D scan included at every consultation.</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>0% finance available — from £50/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px', marginBottom: '16px' }} />
            {content.intro.map((para, i) => (
              <p key={i} style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' }}>{para}</p>
            ))}
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '32px' }}>
            Why patients in Essex choose<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>{service.title.toLowerCase()}</em>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="two-col-sm-grid">
            {content.benefits.map(b => (
              <div key={b.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <CheckCircle2 style={{ width: '18px', height: '18px', color: 'var(--sage)', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{b.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '36px' }}>
            From consultation to<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>finished smile</em>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }} className="four-col-grid">
            {content.process.map((step, i) => (
              <div key={step.title} style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--sage-pale)', border: '2px solid #c8d9c9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--sage)' }}>{i + 1}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GOOD CANDIDATE ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-light)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="two-col-sm-grid">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
                Are you a good candidate?
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                You may be suitable for {service.title.toLowerCase()} if you experience any of the following. A free consultation confirms your options — no commitment required.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {content.candidates.map(c => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--muted)' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '8px', color: '#fff', fontWeight: 700 }}>✓</span>
                    </div>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--sage)', borderRadius: '12px', padding: '32px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
                Get matched with a specialist
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
                Free consultation, free 3D scan, written quote before you commit. We match you with up to 3 Platinum or Diamond providers near you.
              </p>
              <button onClick={() => setIsModalOpen(true)} style={{ width: '100%', padding: '13px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                Find My Provider
              </button>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '8px' }}>100% free · No obligation</p>
            </div>
          </div>
        </section>

        {/* ── LOCATIONS FOR THIS TREATMENT ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
            Find <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>{service.title.toLowerCase()}</em><br />near you
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '28px' }}>
            Select your town to see which Platinum and Diamond providers offer this treatment locally, along with local pricing data.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '16px' }} className="loc-grid">
            {featuredTowns.map(city => (
              <Link key={city} href={`/locations/${toSlug(city)}/${params.service}/`} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 14px', textDecoration: 'none', transition: 'border-color 0.15s' }} className="loc-link">
                <MapPin style={{ width: '14px', height: '14px', color: 'var(--sage)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink)', fontSize: '13px' }}>{city}</span>
              </Link>
            ))}
          </div>
          <Link href="/locations/" style={{ fontSize: '13px', color: 'var(--sage)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Browse all 111 Essex towns →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
            Common questions about<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>{service.title.toLowerCase()}</em>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>Straight answers. No upselling.</p>
          <div style={{ maxWidth: '680px' }}>
            {service.faqs.map(faq => <FaqAccordion key={faq.question} q={faq.question} a={faq.answer} />)}
          </div>
        </section>

        {/* ── OTHER TREATMENTS ── */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', marginBottom: '20px' }}>
            Other conditions we treat
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }} className="three-col-grid">
            {services.filter(s => s.slug !== params.service).map(s => (
              <Link key={s.slug} href={`/treatments/${s.slug}/`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 16px', textDecoration: 'none' }} className="loc-link">
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{s.title}</span>
                <ArrowRight style={{ width: '14px', height: '14px', color: 'var(--sage)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: 'clamp(56px,8vw,96px) clamp(24px,5vw,56px)', background: 'var(--sage)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 600, color: '#fff', lineHeight: 1.15, marginBottom: '12px' }}>
            Ready to fix your {service.title.toLowerCase().replace('invisalign for ', '').replace('invisalign ', '')}?
            <br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Start with a free consultation.</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.7 }}>
            We match you with verified Platinum and Diamond providers in Essex. Free 3D scan included.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} style={{ padding: '14px 36px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
              Get Free Quotes
            </button>
            <Link href="/locations/" style={{ padding: '14px 28px', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: '14px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '40px', textDecoration: 'none' }}>
              Browse by Location
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .four-col-grid { grid-template-columns: 1fr 1fr !important; }
          .three-col-grid { grid-template-columns: 1fr 1fr !important; }
          .loc-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .two-col-sm-grid { grid-template-columns: 1fr !important; }
          .three-col-grid { grid-template-columns: 1fr !important; }
          .loc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .loc-link:hover { background: var(--sage-pale) !important; border-color: #c8d9c9 !important; }
      `}</style>
    </>
  );
}
