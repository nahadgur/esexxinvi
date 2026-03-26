'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sent, setSent]               = useState(false);
  const [form, setForm]               = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to your form backend (Formspree, Netlify Forms, or /api/contact)
    setSent(true);
  }

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Get in Touch</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '12px' }}>
            Contact<br /><em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Invisalign Essex</em>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '480px' }}>
            Questions about our directory, a listed clinic, or our vetting process — we respond within 2 working days.
          </p>
        </section>

        {/* Content */}
        <section style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', background: 'var(--sage-pale)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '56px', alignItems: 'start' }} className="two-col-sm-grid">

            {/* Left — contact info */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', marginBottom: '24px' }}>
                How to reach us
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail style={{ width: '16px', height: '16px', color: 'var(--sage)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Email</div>
                    <a href="mailto:hello@invisaligndentistsessex.uk" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'none' }}>
                      hello@invisaligndentistsessex.uk
                    </a>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>We respond within 2 working days</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin style={{ width: '16px', height: '16px', color: 'var(--sage)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Address</div>
                    <address style={{ fontStyle: 'normal', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                      [Registered Office Address]<br />
                      Essex, United Kingdom
                    </address>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock style={{ width: '16px', height: '16px', color: 'var(--sage)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Response time</div>
                    <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Monday – Friday, within 2 working days</p>
                  </div>
                </div>
              </div>

              {/* What we can help with */}
              <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>We can help with:</div>
                {['Questions about a listed clinic', 'Reporting a clinic that does not meet our criteria', 'Enquiries about our vetting methodology', 'Content corrections or inaccuracies', 'Press and media enquiries', 'General directory enquiries'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--muted)', marginBottom: '8px' }}>
                    <CheckCircle2 style={{ width: '14px', height: '14px', color: 'var(--sage)', flexShrink: 0, marginTop: '1px' }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Not what we do */}
              <div style={{ background: '#FFF9F0', border: '1px solid #F0E4C8', borderRadius: '10px', padding: '16px', marginTop: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#8B6914', marginBottom: '6px' }}>We cannot help with:</div>
                <p style={{ fontSize: '12px', color: '#9B7A2E', lineHeight: 1.6 }}>
                  Clinical dental advice, treatment queries directed at a specific clinic, emergency dental issues, or NHS referrals. Please contact the clinic directly or your GP for clinical matters.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <CheckCircle2 style={{ width: '48px', height: '48px', color: 'var(--sage)', margin: '0 auto 16px' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Message received</div>
                  <p style={{ fontSize: '14px', color: 'var(--muted)' }}>We will get back to you within 2 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>Send a message</div>

                  {[
                    { name: 'name',    label: 'Your name',      type: 'text',  required: true },
                    { name: 'email',   label: 'Email address',  type: 'email', required: true },
                    { name: 'subject', label: 'Subject',         type: 'text',  required: false },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {field.label} {field.required && <span style={{ color: 'var(--sage)' }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={(form as any)[field.name]}
                        onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                        style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14px', fontFamily: 'var(--font-sans)', color: 'var(--ink)', background: '#fff', outline: 'none' }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Message <span style={{ color: 'var(--sage)' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14px', fontFamily: 'var(--font-sans)', color: 'var(--ink)', background: '#fff', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" style={{ width: '100%', padding: '13px', background: 'var(--sage)', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                    Send Message
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center' }}>
                    We respond within 2 working days. See our <a href="/privacy-policy/" style={{ color: 'var(--sage)' }}>Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Looking for a provider? */}
        <section style={{ padding: 'clamp(36px,5vw,56px) clamp(24px,5vw,56px)', background: 'var(--sage)', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>
            Looking for an Invisalign provider, not just contact?
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
            Use our free matching service instead — we connect you with verified Platinum and Diamond providers near you in under 2 hours.
          </p>
          <button onClick={() => setIsModalOpen(true)} style={{ padding: '13px 32px', background: '#fff', color: 'var(--sage)', fontSize: '14px', fontWeight: 600, border: 'none', borderRadius: '40px', fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
            Get Matched Free
          </button>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) { .two-col-sm-grid { grid-template-columns: 1fr !important; } }
        input:focus, textarea:focus { border-color: var(--sage) !important; box-shadow: 0 0 0 3px rgba(61,92,66,0.1); }
      `}</style>
    </>
  );
}
