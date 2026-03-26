import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.55)', paddingTop: '52px', paddingBottom: '28px' }}>
      <div className="container-width">

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '48px' }} className="footer-grid">

          {/* Brand */}
          <div>
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
              Independent referral facilitator connecting patients with top-rated Platinum and Diamond Invisalign providers across Essex.
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '10px', fontStyle: 'italic' }}>
              We connect you with independent dental professionals. We do not perform treatment ourselves.
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Treatments
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                    className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Popular Locations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                { label: 'Invisalign Chelmsford', href: '/location/chelmsford/' },
                { label: 'Invisalign Southend', href: '/location/southend-on-sea/' },
                { label: 'Invisalign Colchester', href: '/location/colchester/' },
                { label: 'Invisalign Basildon', href: '/location/basildon/' },
                { label: 'Invisalign Brentwood', href: '/location/brentwood/' },
                { label: 'Invisalign Harlow', href: '/location/harlow/' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                    className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              Contact
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Essex, United Kingdom</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. We are a facilitator, not a dental provider.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { label: 'Sitemap', href: '/sitemap.xml' },
              { label: 'Services', href: '/services/' },
              { label: 'Locations', href: '/location/' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}
                className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
