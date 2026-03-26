'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

const trustLinks = [
  { label: 'How We Vet Providers',    href: '/how-we-vet-providers/' },
  { label: 'Medical Advisory Board',  href: '/advisory-board/' },
  { label: 'Editorial Policy',        href: '/editorial-policy/' },
  { label: 'Patient Success Stories', href: '/success-stories/' },
  { label: 'Share Your Story',        href: '/share-your-story/' },
  { label: 'About Us',                href: '/about-us/' },
];

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [aboutOpen, setAboutOpen]           = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const pathname                             = usePathname();

  const treatmentsRef = useRef<HTMLDivElement>(null);
  const aboutRef      = useRef<HTMLDivElement>(null);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setTreatmentsOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    left: 0,
    width: '240px',
    background: 'var(--cream)',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    padding: '6px',
    boxShadow: '0 8px 24px rgba(30,36,32,0.12)',
    zIndex: 100,
  };

  const dropdownLinkStyle: React.CSSProperties = {
    display: 'block',
    padding: '9px 14px',
    fontSize: '13px',
    color: 'var(--muted)',
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'background 0.15s, color 0.15s',
  };

  return (
    <header style={{
      background: 'var(--cream)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 40,
      boxShadow: scrolled ? '0 1px 12px rgba(30,36,32,0.07)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      <div className="container-width">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '30px', height: '30px', borderRadius: '50%',
              border: '1.5px solid var(--sage)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '10px', color: 'var(--sage)', fontWeight: 600, flexShrink: 0,
            }}>IE</div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>Invisalign</div>
              <div style={{ fontSize: '9px', color: 'var(--sage)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Essex</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden lg:flex">

            {/* Treatments dropdown */}
            <div ref={treatmentsRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setTreatmentsOpen(o => !o); setAboutOpen(false); }}
                style={{ ...navBtn, color: treatmentsOpen ? 'var(--sage)' : 'var(--muted)' }}
              >
                Treatments
                <ChevronDown style={{ width: '13px', height: '13px', transform: treatmentsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {treatmentsOpen && (
                <div style={dropdownStyle}>
                  {services.map(service => (
                    <Link
                      key={service.id}
                      href={`/treatments/${service.slug}/`}
                      style={dropdownLinkStyle}
                      onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--sage-pale)'; (e.target as HTMLElement).style.color = 'var(--sage)'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--muted)'; }}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0' }} />
                  <Link href="/treatments/" style={{ ...dropdownLinkStyle, fontWeight: 500, color: 'var(--sage)' }}>
                    All Treatments →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/locations/" style={navLink}>Locations</Link>
            <Link href="/clinics/"   style={navLink}>Clinics</Link>
            <Link href="/blog/"      style={navLink}>Blog</Link>
            <Link href="/guides/"    style={navLink}>Guides</Link>

            {/* About dropdown */}
            <div ref={aboutRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setAboutOpen(o => !o); setTreatmentsOpen(false); }}
                style={{ ...navBtn, color: aboutOpen ? 'var(--sage)' : 'var(--muted)' }}
              >
                About
                <ChevronDown style={{ width: '13px', height: '13px', transform: aboutOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {aboutOpen && (
                <div style={{ ...dropdownStyle, left: 'auto', right: 0 }}>
                  {trustLinks.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      style={dropdownLinkStyle}
                      onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--sage-pale)'; (e.target as HTMLElement).style.color = 'var(--sage)'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--muted)'; }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{ marginLeft: '8px', fontSize: '13px', padding: '9px 22px' }}
            >
              Find a Provider
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ padding: '6px', color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
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
          zIndex: 50, maxHeight: '85vh', overflowY: 'auto',
        }}>
          <div style={{ padding: '8px 20px 28px' }}>

            <Link href="/" style={mobileLink}>Home</Link>

            {/* Treatments */}
            <div style={{ padding: '10px 0 4px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', paddingLeft: '4px' }}>
                Treatments
              </div>
              {services.map(s => (
                <Link key={s.id} href={`/treatments/${s.slug}/`} style={{ ...mobileLink, fontSize: '14px', paddingTop: '8px', paddingBottom: '8px' }}>
                  {s.title}
                </Link>
              ))}
              <Link href="/treatments/" style={{ ...mobileLink, fontSize: '13px', color: 'var(--sage)', fontWeight: 500 }}>
                All Treatments →
              </Link>
            </div>

            <Link href="/locations/" style={mobileLink}>Locations</Link>
            <Link href="/clinics/"   style={mobileLink}>Clinics</Link>
            <Link href="/blog/"      style={mobileLink}>Blog</Link>
            <Link href="/guides/"    style={mobileLink}>Guides</Link>

            {/* About & Trust */}
            <div style={{ padding: '10px 0 4px', borderTop: '1px solid var(--border)', marginTop: '8px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--sage-mid)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', paddingLeft: '4px' }}>
                About &amp; Trust
              </div>
              {trustLinks.map(l => (
                <Link key={l.href} href={l.href} style={{ ...mobileLink, fontSize: '14px', paddingTop: '8px', paddingBottom: '8px' }}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div style={{ padding: '16px 0 0' }}>
              <button
                onClick={() => { onOpenModal?.(); setMobileOpen(false); }}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', fontSize: '14px' }}
              >
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
  padding: '8px 14px',
  fontSize: '13px',
  color: 'var(--muted)',
  textDecoration: 'none',
  fontWeight: 400,
  borderRadius: '6px',
};

const navBtn: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '8px 14px',
  fontSize: '13px',
  fontWeight: 400,
  fontFamily: 'var(--font-sans)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '6px',
};

const mobileLink: React.CSSProperties = {
  display: 'block',
  padding: '10px 4px',
  fontSize: '15px',
  fontWeight: 400,
  color: 'var(--ink)',
  textDecoration: 'none',
};
