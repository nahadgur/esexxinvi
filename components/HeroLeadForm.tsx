'use client';

import { useState, useRef } from 'react';

interface HeroLeadFormProps {
  city?: string;
  service?: string;
}

const TREATMENTS = [
  'Invisalign for Crowded Teeth',
  'Invisalign for Gaps',
  'Invisalign for Overbite',
  'Invisalign for Underbite',
  'Invisalign for Crossbite',
  'Invisalign for Adults',
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw0QaLFaG-XujztIC0ZyJ_DXbvlP9BHc7F2wbwOq0D9bRYijhYq8Dje_l4enKWfoUVvfg/exec';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: '8px',
  border: '1px solid var(--border)',
  background: 'var(--cream)',
  color: 'var(--ink)',
  fontSize: '13px',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.15s',
};

export function HeroLeadForm({ city, service }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Read directly from the form DOM — no state mapping can go wrong
    const form = formRef.current!;
    const fullName  = (form.querySelector<HTMLInputElement>('[name="fullName"]')?.value  || '').trim();
    const phone     = (form.querySelector<HTMLInputElement>('[name="phone"]')?.value      || '').trim();
    const email     = (form.querySelector<HTMLInputElement>('[name="email"]')?.value      || '').trim();
    const treatment = (form.querySelector<HTMLSelectElement>('[name="treatment"]')?.value || '').trim();
    const location  = (form.querySelector<HTMLInputElement>('[name="location"]')?.value  || city || '').trim();

    const payload = {
      fullName,
      phone,
      email,
      treatment,
      location,
      page:   typeof window !== 'undefined' ? window.location.href : '',
      source: 'Invisalign Essex',
    };

    try {
      const res  = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body:   JSON.stringify(payload),
      });
      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}
      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div style={{
        background: '#fff', borderRadius: '12px',
        border: '1px solid var(--border)', padding: '40px 28px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', gap: '14px', minHeight: '320px',
      }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'var(--sage-pale)', border: '2px solid var(--sage-mid)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', color: 'var(--sage)',
        }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--ink)' }}>
          Request Received
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>
          We&apos;ve matched you with a Platinum Partner{city ? ` in ${city}` : ''}. Check your email for next steps.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: '#fff', borderRadius: '12px',
      border: '1px solid var(--border)', padding: '24px 26px',
    }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'inline-block', background: 'var(--sage-pale)',
          borderRadius: '20px', padding: '4px 12px', marginBottom: '10px',
          fontSize: '10px', fontWeight: 600, color: 'var(--sage)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Free Matching Service
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
          Get Matched{city ? ` in ${city}` : ''}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
          Top local clinics will contact you within 2 hours
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          required name="fullName" type="text"
          placeholder="Full Name *" style={inputStyle}
        />

        <div className="lead-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input
            required name="phone" type="tel"
            placeholder="Phone Number *" style={inputStyle}
          />
          <input
            required name="email" type="email"
            placeholder="Email Address *" style={inputStyle}
          />
        </div>

        <select
          required name="treatment"
          defaultValue=""
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
        >
          <option value="" disabled>Select Treatment *</option>
          {TREATMENTS.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {!city && (
          <input
            required name="location" type="text"
            placeholder="Your Essex Town *" style={inputStyle}
          />
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          style={{
            width: '100%', background: isSubmitting ? '#7aA080' : 'var(--sage)',
            color: '#fff', fontWeight: 500, padding: '13px 20px',
            borderRadius: '40px', border: 'none', fontSize: '14px',
            fontFamily: 'var(--font-sans)', cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginTop: '4px', transition: 'background 0.2s',
          }}
        >
          {isSubmitting ? 'Sending\u2026' : 'Get 3 Free Quotes \u2192'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', paddingTop: '4px' }}>
          {['100% Free', 'No Spam', '2hr Response'].map(item => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--sage)', fontWeight: 500 }}>
              <span style={{ width: '5px', height: '5px', background: 'var(--sage-mid)', borderRadius: '50%', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}
