import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Invisalign Dentists Essex',
  description: 'How Invisalign Dentists Essex collects, uses, and protects your personal data. Last updated January 2025.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/privacy-policy/' },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: '1. Who we are',
    body: `Invisalign Dentists Essex is an independent consumer directory operated by [Company Name Ltd], registered in England and Wales (Company No. [XXXXXXXX]). We are the data controller for personal data collected through this website. Contact: hello@invisaligndentistsessex.uk`,
  },
  {
    title: '2. What data we collect',
    body: `We collect personal data you provide when you submit our enquiry form: your name, email address, phone number (if provided), Essex location, and treatment interest. We also collect standard analytics data (page views, session duration, device type) via cookies — see our Cookie Policy for details. We do not collect sensitive personal data such as health records.`,
  },
  {
    title: '3. Why we collect it',
    body: `We collect your contact details to match you with verified Platinum and Diamond Invisalign providers near you (our core service). Your data is shared only with the matched clinics so they can contact you to arrange a free consultation. We collect analytics data to improve the site and understand how patients use it.`,
  },
  {
    title: '4. Legal basis for processing',
    body: `We process your contact data on the basis of your consent, given when you submit our enquiry form. You can withdraw consent at any time by emailing hello@invisaligndentistsessex.uk. We process analytics data on the basis of our legitimate interests in improving our service.`,
  },
  {
    title: '5. Who we share your data with',
    body: `We share your name, contact details, location, and treatment interest with the matched dental clinics. These clinics are independent data controllers and their own privacy policies apply to how they handle your data. We do not sell your data to any third party. We use Vercel for hosting (US-based, EU-adequate safeguards in place).`,
  },
  {
    title: '6. How long we keep your data',
    body: `We retain enquiry data for 12 months from submission, then delete it unless you have asked us to keep it longer. Analytics data is retained for 26 months per standard GA4 settings.`,
  },
  {
    title: '7. Your rights under UK GDPR',
    body: `You have the right to: access the personal data we hold about you; correct inaccurate data; request deletion (right to erasure); withdraw consent at any time; complain to the ICO at ico.org.uk. To exercise any of these rights, email hello@invisaligndentistsessex.uk.`,
  },
  {
    title: '8. Cookies',
    body: `We use cookies for analytics and basic site functionality. See our Cookie Policy for full details and how to manage your preferences.`,
  },
  {
    title: '9. Changes to this policy',
    body: `We may update this policy from time to time. The most recent version is always available at /privacy-policy/. Material changes will be flagged on the site.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main style={{ flex: 1, background: 'var(--cream)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,40px)' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '40px' }}>Last updated: January 2025</p>

        {sections.map(s => (
          <div key={s.title} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>{s.title}</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{s.body}</p>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Link href="/terms/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Terms of Use</Link>
          <Link href="/cookie-policy/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Cookie Policy</Link>
          <Link href="/contact/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
