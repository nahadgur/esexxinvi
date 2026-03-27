import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export function Footer() {
  const popularLocations = [
    { label: 'Invisalign Chelmsford',       href: '/locations/chelmsford/' },
    { label: 'Invisalign Southend-on-Sea',  href: '/locations/southend-on-sea/' },
    { label: 'Invisalign Colchester',       href: '/locations/colchester/' },
    { label: 'Invisalign Basildon',         href: '/locations/basildon/' },
    { label: 'Invisalign Harlow',           href: '/locations/harlow/' },
    { label: 'Invisalign Brentwood',        href: '/locations/brentwood/' },
  ];

  const trustLinks = [
    { label: 'How We Vet Providers',    href: '/how-we-vet-providers/' },
    { label: 'Medical Advisory Board',  href: '/advisory-board/' },
    { label: 'Editorial Policy',        href: '/editorial-policy/' },
    { label: 'Patient Success Stories', href: '/success-stories/' },
    { label: 'Share Your Story',        href: '/share-your-story/' },
    { label: 'About Us',                href: '/about-us/' },
  ];

  const linkStyle = {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    transition: 'color 0.15s',
  };

  const headingStyle = {
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '16px',
  };

  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.55)', paddingTop: '52px', paddingBottom: '28px' }}>
      <div className="container-width">

        {/* Main grid — 5 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '36px', marginBottom: '48px' }} className="footer-grid">

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                border: '1.5px solid rgba(107,143,113,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', color: 'rgba(107,143,113,0.9)', fontWeight: 600,
              }}>IE</div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                Invisalign Essex
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>
              Independent directory connecting patients with verified Platinum and Diamond Invisalign providers across all 111 Essex towns.
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '10px', fontStyle: 'italic' }}>
              We are not a dental practice. We connect you with independent GDC-registered providers.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h4 style={headingStyle}>Treatments</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/treatments/${s.slug}/`} style={linkStyle} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/treatments/" style={{ ...linkStyle, color: 'rgba(255,255,255,0.3)' }} className="hover:text-white">
                  All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 style={headingStyle}>Popular Locations</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {popularLocations.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" style={{ ...linkStyle, color: 'rgba(255,255,255,0.3)' }} className="hover:text-white">
                  All 111 Towns →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & About */}
          <div>
            <h4 style={headingStyle}>About &amp; Trust</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {trustLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:hello@invisaligndentistsessex.uk"
                style={{ ...linkStyle, wordBreak: 'break-all' }} className="hover:text-white">
                hello@invisaligndentistsessex.uk
              </a>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Essex, United Kingdom</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '8px' }}>
                <Link href="/clinics/" style={linkStyle} className="hover:text-white">Find a Clinic</Link>
                <Link href="/blog/"    style={linkStyle} className="hover:text-white">Blog</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Independent directory. Not a dental provider.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Sitemap',          href: '/sitemap.xml' },
              { label: 'Privacy Policy',   href: '/privacy-policy/' },
              { label: 'Terms',            href: '/terms/' },
              { label: 'Cookie Policy',    href: '/cookie-policy/' },
              { label: 'Locations',        href: '/locations/' },
              { label: 'Clinics',          href: '/clinics/' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}
                className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .footer-grid > div:first-child { grid-column: span 3; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
        @media (max-width: 400px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 1; }
        }
        @media (max-width: 640px) {
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
