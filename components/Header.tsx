'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [trustOpen, setTrustOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); setTreatmentsOpen(false); setTrustOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trustLinks = [
    { label: 'How We Vet Providers', href: '/how-we-vet-providers/' },
    { label: 'Medical Advisory Board', href: '/advisory-board/' },
    { label: 'Editorial Policy',       href: '/editorial-policy/' },
    { label: 'Patient Success Stories',href: '/success-stories/' },
    { label: 'About Us',               href: '/about-us/' },
  ];

  return (
    <header style={{
      background: 'var(--cream)',
      borderBottom: `1px solid var(--border)`,
      position: 'sticky', top: 0, zIndex: 40,
      transition: 'box-shadow 0.2s',
      boxShadow: scrolled ? '0 1px 12px rgba(30,36,32,0.07)' : 'none',
    }}>
      <div className="container-width">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              border: '1.5px solid var(--sage)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', color: 'var(--sage)', fontWeight: 600, letterSpacing: '-0.3px', flexShrink: 0,
            }}>IE</div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, color: 'var(--ink)' }}>
                Invisalign
              </span>
              <span style={{ fontSize: '10px', color: 'var(--sage)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Essex
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ alignItems: 'center', gap: '4px' }}>

            {/* Treatments dropdown */}
            <div style={{ position: 'relative' }} className="group">
              <Link href="/treatments/" style={{ ...navLink, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Treatments <ChevronDown style={{ width: '14px', height: '14px' }} />
              </Link>
              <div style={{
                position: 'absolute', top: '100%', left: 0, width: '260px',
                background: 'var(--cream)', borderRadius: '10px',
                border: '1px solid var(--border)', padding: '6px',
                boxShadow: '0 8px 24px rgba(30,36,32,0.1)',
                opacity: 0, visibility: 'hidden', transform: 'translateY(8px)',
                transition: 'all 0.18s', zIndex: 50,
              }} className="group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {services.map(service => (
                  <Link key={service.id} href={`/treatments/${service.slug}/`} style={{
                    display: 'block', padding: '9px 14px', fontSize: '13px',
                    color: 'var(--muted)', textDecoration: 'none', borderRadius: '6px',
                    transition: 'background 0.15s, color 0.15s',
                  }} className="hover:bg-brand-50 hover:text-brand-700">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/locations/" style={navLink}>Locations</Link>
            <Link href="/clinics/"   style={navLink}>Clinics</Link>
            <Link href="/blog/"      style={navLink}>Blog</Link>

            {/* Trust dropdown */}
            <div style={{ position: 'relative' }} className="group">
              <button style={{ ...navLink, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                About <ChevronDown style={{ width: '14px', height: '14px' }} />
              </button>
              <div style={{
                position: 'absolute', top: '100%', right: 0, width: '240px',
                background: 'var(--cream)', borderRadius: '10px',
                border: '1px solid var(--border)', padding: '6px',
                boxShadow: '0 8px 24px rgba(30,36,32,0.1)',
                opacity: 0, visibility: 'hidden', transform: 'translateY(8px)',
                transition: 'all 0.18s', zIndex: 50,
              }} className="group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {trustLinks.map(l => (
                  <Link key={l.href} href={l.href} style={{
                    display: 'block', padding: '9px 14px', fontSize: '13px',
                    color: 'var(--muted)', textDecoration: 'none', borderRadius: '6px',
                    transition: 'background 0.15s, color 0.15s',
                  }} className="hover:bg-brand-50 hover:text-brand-700">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <button onClick={onOpenModal} className="btn-primary"
              style={{ marginLeft: '12px', fontSize: '13px', padding: '9px 22px' }}>
              Find a Provider
            </button>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ padding: '6px', color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}>
            {mobileOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--cream)', borderTop: '1px solid var(--border)',
          position: 'absolute', width: '100%', left: 0,
          boxShadow: '0 8px 24px rgba(30,36,32,0.1)',
          zIndex: 50, maxHeight: '80vh', overflowY: 'auto',
        }}>
          <div style={{ padding: '8px 16px 24px' }}>

            <Link href="/" style={mobileLink}>Home</Link>

            {/* Treatments section */}
            <div style={{ padding: '10px 12px 4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                Treatments
              </div>
              {services.map(s => (
                <Link key={s.id} href={`/treatments/${s.slug}/`}
                  style={{ ...mobileLink, fontSize: '13px', paddingTop: '7px', paddingBottom: '7px' }}>
                  {s.title}
                </Link>
              ))}
              <Link href="/treatments/" style={{ ...mobileLink, fontSize: '13px', paddingTop: '7px', paddingBottom: '7px', color: 'var(--sage)' }}>
                All Treatments →
              </Link>
            </div>

            <Link href="/locations/" style={mobileLink}>Locations</Link>
            <Link href="/clinics/"   style={mobileLink}>Clinics</Link>
            <Link href="/blog/"      style={mobileLink}>Blog</Link>

            {/* Trust section */}
            <div style={{ padding: '10px 12px 4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                About &amp; Trust
              </div>
              {trustLinks.map(l => (
                <Link key={l.href} href={l.href}
                  style={{ ...mobileLink, fontSize: '13px', paddingTop: '7px', paddingBottom: '7px' }}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div style={{ padding: '16px 12px 0' }}>
              <button onClick={() => { onOpenModal?.(); setMobileOpen(false); }} className="btn-primary"
                style={{ width: '100%', textAlign: 'center', fontSize: '14px' }}>
                Find a Provider
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const navLink: React.CSSProperties = {
  padding: '8px 14px', fontSize: '13px', color: 'var(--muted)',
  textDecoration: 'none', fontWeight: 400, borderRadius: '6px',
  transition: 'color 0.15s',
};

const mobileLink: React.CSSProperties = {
  display: 'block', padding: '11px 12px', fontSize: '15px',
  fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', borderRadius: '6px',
};
