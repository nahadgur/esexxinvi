'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.error('App error:', error);
    }
  }, [error]);

  return (
    <main id="main" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '520px', width: '100%' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 600, marginBottom: '14px' }}>
          Something went wrong
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.6vw,2.4rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '14px' }}>
          We hit an unexpected error
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px' }}>
          Please try again. If the problem keeps happening, our editorial team would like to know &mdash; email <a href="mailto:editorial@invisaligndentistsessex.uk" style={{ color: 'var(--sage)' }}>editorial@invisaligndentistsessex.uk</a>.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => reset()} style={{ padding: '12px 24px', background: 'var(--sage)', color: '#fff', border: 'none', borderRadius: '40px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
            Try again
          </button>
          <Link href="/" style={{ padding: '12px 24px', background: '#fff', color: 'var(--ink)', border: '1px solid var(--border)', borderRadius: '40px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
            Back to home
          </Link>
        </div>
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
            Useful links:
          </p>
          <ul style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0, fontSize: '13px' }}>
            <li><Link href="/locations/" style={{ color: 'var(--sage)' }}>Locations</Link></li>
            <li><Link href="/treatments/" style={{ color: 'var(--sage)' }}>Treatments</Link></li>
            <li><Link href="/clinics/" style={{ color: 'var(--sage)' }}>Clinics</Link></li>
            <li><Link href="/contact/" style={{ color: 'var(--sage)' }}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
