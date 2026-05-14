'use client';

import { useState, useRef, useEffect } from 'react';
import { captureFirstTouchAttribution, readAttribution } from '@/lib/attribution';

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
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

export function HeroLeadForm({ city, service }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formStartedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    formStartedAtRef.current = Date.now();
    captureFirstTouchAttribution();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }
    const data = new FormData(form);
    const attr = readAttribution();

    const payload = {
      fullName: String(data.get('fullName') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      treatment: String(data.get('treatment') ?? '').trim(),
      location: (String(data.get('location') ?? '').trim() || city || ''),
      page: typeof window !== 'undefined' ? window.location.href : '',
      source: service ? `service:${service}` : 'direct',
      honeypot: String(data.get('website') ?? ''),
      formStartedAt: formStartedAtRef.current,
      utm: attr ? {
        source: attr.utmSource,
        medium: attr.utmMedium,
        campaign: attr.utmCampaign,
        content: attr.utmContent,
        term: attr.utmTerm,
        gclid: attr.gclid,
        fbclid: attr.fbclid,
        referrer: attr.referrer,
        landingPage: attr.landingPage,
      } : undefined,
    };

    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.ok === false) {
        throw new Error(result.error ?? `Submission failed (${res.status})`);
      }
      setIsSuccess(true);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div role="status" aria-live="polite" style={{
        background: '#fff', borderRadius: '12px',
        border: '1px solid var(--border)', padding: '40px 28px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', gap: '14px', minHeight: '320px',
      }}>
        <div aria-hidden="true" style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'var(--sage-pale)', border: '2px solid var(--sage-mid)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', color: 'var(--sage)',
        }}>&#10003;</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--ink)' }}>
          Request received
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>
          We will email you a shortlist of one to three matching providers{city ? ` near ${city}` : ''} within two working hours.
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
          Free matching service
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
          Get matched{city ? ` in ${city}` : ''}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
          We email a shortlist within two working hours
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Honeypot — hidden from users, visible to bots */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, width: 0, overflow: 'hidden' }}>
          <label htmlFor="website-hp">Website (leave blank)</label>
          <input id="website-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label htmlFor="lf-fullName" className="sr-only">Full name</label>
        <input
          id="lf-fullName"
          required
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Full name *"
          style={inputStyle}
        />

        <div className="lead-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div>
            <label htmlFor="lf-phone" className="sr-only">Phone number</label>
            <input
              id="lf-phone"
              required
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Phone *"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="lf-email" className="sr-only">Email address</label>
            <input
              id="lf-email"
              required
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Email *"
              style={inputStyle}
            />
          </div>
        </div>

        <label htmlFor="lf-treatment" className="sr-only">Treatment</label>
        <select
          id="lf-treatment"
          required
          name="treatment"
          defaultValue=""
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
        >
          <option value="" disabled>Select treatment *</option>
          {TREATMENTS.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {!city && (
          <>
            <label htmlFor="lf-location" className="sr-only">Your Essex town</label>
            <input
              id="lf-location"
              required
              name="location"
              type="text"
              autoComplete="address-level2"
              placeholder="Your Essex town *"
              style={inputStyle}
            />
          </>
        )}

        {formError && (
          <div role="alert" aria-live="assertive" style={{ fontSize: '13px', color: '#A33', padding: '8px 10px', borderRadius: '6px', background: '#FEE7E7', border: '1px solid #F5C6C6' }}>
            {formError}
          </div>
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
          {isSubmitting ? 'Sending…' : 'Match me with providers'}
        </button>

        <p style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.55, paddingTop: '4px' }}>
          By submitting, you agree to our{' '}
          <a href="/privacy-policy/" style={{ color: 'var(--sage)' }}>privacy notice</a>. We share your details only with the matched practice. No marketing emails.
        </p>
      </form>
    </div>
  );
}
