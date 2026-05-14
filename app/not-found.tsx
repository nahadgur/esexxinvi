import Link from 'next/link';
import { LOCATIONS } from '@/data/locations';
import { services } from '@/data/services';

export const metadata = {
  title: 'Page not found | Invisalign Dentists Essex',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" style={{ minHeight: '70vh', padding: '60px 24px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 600, marginBottom: '14px' }}>
          404 &middot; Page not found
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.6rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '14px' }}>
          We can&apos;t find that page
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '28px', maxWidth: '520px' }}>
          The URL you followed may be from an old version of the site. We recently consolidated our location pages into 12 anchor catchments. Pick a starting point below.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '32px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>
              Top locations
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {LOCATIONS.slice(0, 8).map(l => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}/`} style={{ color: 'var(--sage)', fontSize: '13px', textDecoration: 'none' }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>
              Treatments
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '6px' }}>
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/treatments/${s.slug}/`} style={{ color: 'var(--sage)', fontSize: '13px', textDecoration: 'none' }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '12px 24px', background: 'var(--sage)', color: '#fff', borderRadius: '40px', textDecoration: 'none', fontSize: '14px' }}>
            Back to home
          </Link>
          <Link href="/clinics/" style={{ padding: '12px 24px', background: '#fff', color: 'var(--ink)', border: '1px solid var(--border)', borderRadius: '40px', textDecoration: 'none', fontSize: '14px' }}>
            View partner clinics
          </Link>
          <Link href="/contact/" style={{ padding: '12px 24px', background: '#fff', color: 'var(--ink)', border: '1px solid var(--border)', borderRadius: '40px', textDecoration: 'none', fontSize: '14px' }}>
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
