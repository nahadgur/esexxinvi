'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'ide_consent_v1';
const COOKIE_NAME = 'ide_consent';
const COOKIE_MAX_AGE_DAYS = 180;

type ConsentValue = 'granted' | 'denied' | null;

function setCookie(name: string, value: string) {
  if (typeof document === 'undefined') return;
  const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1] ? decodeURIComponent(match[1]) : null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagConsentUpdate(state: 'granted' | 'denied') {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag('consent', 'update', {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export function ConsentBanner() {
  const [decision, setDecision] = useState<ConsentValue>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cookie = getCookie(COOKIE_NAME);
    if (cookie === 'granted' || cookie === 'denied') {
      setDecision(cookie);
      gtagConsentUpdate(cookie);
    }
  }, []);

  function setConsent(state: 'granted' | 'denied') {
    setCookie(COOKIE_NAME, state);
    try {
      localStorage.setItem(STORAGE_KEY, state);
    } catch {
      // private mode etc.
    }
    setDecision(state);
    gtagConsentUpdate(state);
  }

  if (!mounted || decision === 'granted' || decision === 'denied') {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-desc"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 720,
        margin: '0 auto',
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '20px 24px',
        boxShadow: '0 12px 32px rgba(20, 30, 22, 0.18)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div>
        <h2 id="consent-banner-title" style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', margin: 0, marginBottom: 6 }}>
          Cookies on Invisalign Dentists Essex
        </h2>
        <p id="consent-banner-desc" style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
          We use essential cookies to keep the site working. With your permission we also use analytics cookies to understand which content helps patients find the right provider. See our <Link href="/cookie-policy/" style={{ color: 'var(--sage)' }}>cookie policy</Link>.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <button
          onClick={() => setConsent('denied')}
          style={{
            padding: '10px 18px',
            background: '#fff',
            color: 'var(--ink)',
            border: '1px solid var(--border)',
            borderRadius: 30,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Essential only
        </button>
        <button
          onClick={() => setConsent('granted')}
          style={{
            padding: '10px 18px',
            background: 'var(--sage)',
            color: '#fff',
            border: 'none',
            borderRadius: 30,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
