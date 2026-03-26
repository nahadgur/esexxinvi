import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Invisalign Dentists Essex',
  description: 'Terms of use for the Invisalign Dentists Essex directory. Last updated January 2025.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/terms/' },
  robots: { index: false, follow: true },
};

const sections = [
  { title: '1. About this site', body: 'Invisalign Dentists Essex is an independent consumer directory operated by [Company Name Ltd]. We provide information about Invisalign providers in Essex and a free matching service connecting patients with clinics. We are not a dental practice and do not provide clinical treatment.' },
  { title: '2. Use of the site', body: 'This site is for personal, non-commercial use. You may not reproduce, distribute, or republish any content from this site without our written permission. You must not use this site in any way that is unlawful, harmful, or abusive.' },
  { title: '3. No clinical advice', body: 'Content on this site is for general information only and does not constitute clinical dental advice. Treatment decisions should be made in consultation with a qualified, registered dental professional. We accept no liability for decisions made on the basis of information on this site.' },
  { title: '4. Referral service', body: 'Our free matching service connects you with dental clinics. We receive a referral fee from matched clinics when you proceed with treatment. This arrangement is disclosed on our About Us page. We are not responsible for the clinical services provided by matched clinics — your treatment relationship is directly with the clinic.' },
  { title: '5. Accuracy of information', body: 'We take reasonable care to ensure information about listed clinics is accurate and current. Provider tier status, ratings, and GDC registration are verified periodically. We cannot guarantee that all information is accurate at the time of your visit and recommend independent verification of all clinical credentials.' },
  { title: '6. Links to third-party sites', body: 'This site links to external websites including the GDC register and individual clinic websites. We are not responsible for the content of those sites. Links do not imply endorsement beyond what is stated on our site.' },
  { title: '7. Intellectual property', body: 'All content on this site, including text, structure, and design, is owned by [Company Name Ltd] or its licensors. The Invisalign trademark and provider tier designations are owned by Align Technology, Inc. We use them for descriptive and informational purposes.' },
  { title: '8. Limitation of liability', body: 'To the extent permitted by law, we exclude all liability for loss or damage arising from your use of this site or reliance on its content. Our liability for any claim shall not exceed £100.' },
  { title: '9. Governing law', body: 'These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.' },
  { title: '10. Changes', body: 'We may update these terms at any time. The current version is always available at /terms/. Continued use of the site after changes constitutes acceptance.' },
];

export default function TermsPage() {
  return (
    <main style={{ flex: 1, background: 'var(--cream)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,40px)' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Terms of Use</h1>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '40px' }}>Last updated: January 2025</p>
        {sections.map(s => (
          <div key={s.title} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>{s.title}</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{s.body}</p>
          </div>
        ))}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Link href="/privacy-policy/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Privacy Policy</Link>
          <Link href="/cookie-policy/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Cookie Policy</Link>
          <Link href="/contact/" style={{ fontSize: '13px', color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
