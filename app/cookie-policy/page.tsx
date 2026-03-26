import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Invisalign Dentists Essex',
  description: 'How Invisalign Dentists Essex uses cookies. Last updated January 2025.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/cookie-policy/' },
  robots: { index: false, follow: true },
};

const cookies = [
  { name: '_ga, _ga_*', purpose: 'Google Analytics — tracks pages visited, session duration, and device type.', duration: '2 years', essential: false },
  { name: '__session', purpose: 'Session management — remembers your preferences during a single visit.', duration: 'Session', essential: true },
  { name: 'NEXT_LOCALE', purpose: 'Stores your language preference.', duration: '1 year', essential: true },
];

export default function CookiePolicyPage() {
  return (
    <main style={{ flex: 1, background: 'var(--cream)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,40px)' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Cookie Policy</h1>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '40px' }}>Last updated: January 2025</p>

        {[
          { title: 'What are cookies?', body: 'Cookies are small text files stored on your device when you visit a website. They help us understand how the site is used and remember your preferences.' },
          { title: 'What cookies we use', body: '' },
          { title: 'Essential cookies', body: 'Essential cookies are necessary for the site to function correctly. They cannot be disabled. They include session management and basic functionality cookies.' },
          { title: 'Analytics cookies', body: 'We use Google Analytics to understand how visitors use the site — which pages are most popular, how long sessions last, and what devices are used. This data is aggregated and anonymous. You can opt out by visiting https://tools.google.com/dlpage/gaoptout.' },
          { title: 'How to control cookies', body: 'You can control cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when cookies are set. Note that disabling cookies may affect site functionality.' },
          { title: 'Changes to this policy', body: 'We may update this policy periodically. The current version is always available at /cookie-policy/.' },
        ].map((s, i) => (
          <div key={s.title} style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>{s.title}</h2>
            {s.body && <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{s.body}</p>}
            {s.title === 'What cookies we use' && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginTop: '8px' }}>
                  <thead>
                    <tr style={{ background: 'var(--sage-pale)' }}>
                      {['Cookie name', 'Purpose', 'Duration', 'Essential'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.map((c, i) => (
                      <tr key={c.name} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', fontFamily: 'monospace', fontSize: '12px' }}>{c.name}</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{c.purpose}</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{c.duration}</td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', color: c.essential ? 'var(--sage)' : 'var(--muted)', fontWeight: c.essential ? 600 : 400 }}>{c.essential ? 'Yes' : 'No'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Privacy Policy</Link>
          <Link href="/terms/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Terms of Use</Link>
        </div>
      </div>
    </main>
  );
}
