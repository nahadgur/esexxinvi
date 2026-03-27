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
  const [mobileOpen, setMobileOpen]                     = useState(false);
  const [treatmentsOpen, setTreatmentsOpen]             = useState(false);
  const [aboutOpen, setAboutOpen]                       = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen]           = useState(false);
  const [scrolled, setScrolled]                         = useState(false);
  const pathname                                         = usePathname();

  const treatmentsRef = useRef<HTMLDivElement>(null);
  const aboutRef      = useRef<HTMLDivElement>(null);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setTreatmentsOpen(false);
    setAboutOpen(false);
    setMobileTreatmentsOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target as Node)) setTreatmentsOpen(false);
      if (aboutRef.current      && !aboutRef.current.contains(e.target as Node))      setAboutOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '240px',
    background: 'var(--cream)', borderRadius: '10px', border: '1px solid var(--border)',
    padding: '6px', boxShadow: '0 8px 24px rgba(30,36,32,0.12)', zIndex: 100,
  };

  const dropdownLinkStyle: React.CSSProperties = {
    display: 'block', padding: '9px 14px', fontSize: '13px',
    color: 'var(--muted)', textDecoration: 'none', borderRadius: '6px',
    transition: 'background 0.15s, color 0.15s',
  };

  return (
    <header style={{
      background: 'var(--cream)', borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 40,
      boxShadow: scrolled ? '0 1px 12px rgba(30,36,32,0.07)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      <div className="container-width">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

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

          {/* ── Desktop Nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden lg:flex">

            <div ref={treatmentsRef} style={{ position: 'relative' }}>
              <button onClick={() => { setTreatmentsOpen(o => !o); setAboutOpen(false); }}
                style={{ ...navBtn, color: treatmentsOpen ? 'var(--sage)' : 'var(--muted)' }}>
                Treatments
                <ChevronDown style={{ width: '13px', height: '13px', transform: treatmentsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {treatmentsOpen && (
                <div style={dropdownStyle}>
                  {services.map(s => (
                    <Link key={s.id} href={`/treatments/${s.slug}/`} style={dropdownLinkStyle}
                      onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--sage-pale)'; (e.target as HTMLElement).style.color = 'var(--sage)'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--muted)'; }}>
                      {s.title}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0' }} />
                  <Link href="/treatments/" style={{ ...dropdownLinkStyle, fontWeight: 500, color: 'var(--sage)' }}>All Treatments →</Link>
                </div>
              )}
            </div>

            <Link href="/locations/" style={navLink}>Locations</Link>
            <Link href="/clinics/"   style={navLink}>Clinics</Link>
            <Link href="/blog/"      style={navLink}>Blog</Link>
            <Link href="/guides/"    style={navLink}>Guides</Link>

            <div ref={aboutRef} style={{ position: 'relative' }}>
              <button onClick={() => { setAboutOpen(o => !o); setTreatmentsOpen(false); }}
                style={{ ...navBtn, color: aboutOpen ? 'var(--sage)' : 'var(--muted)' }}>
                About
                <ChevronDown style={{ width: '13px', height: '13px', transform: aboutOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {aboutOpen && (
                <div style={{ ...dropdownStyle, left: 'auto', right: 0 }}>
                  {trustLinks.map(l => (
                    <Link key={l.href} href={l.href} style={dropdownLinkStyle}
                      onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--sage-pale)'; (e.target as HTMLElement).style.color = 'var(--sage)'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--muted)'; }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={onOpenModal} className="btn-primary" style={{ marginLeft: '8px', fontSize: '13px', padding: '9px 22px' }}>
              Find a Provider
            </button>
          </nav>

          {/* ── Mobile: mini CTA + hamburger ── */}
          <div className="lg:hidden" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={onOpenModal} className="btn-primary" style={{ fontSize: '12px', padding: '8px 14px' }}>
              Get Quotes
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                padding: '7px', background: 'none', border: '1px solid var(--border)',
                borderRadius: '8px', cursor: 'pointer', color: 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {mobileOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 45,
              background: 'rgba(30,36,32,0.4)',
              backdropFilter: 'blur(2px)',
            }}
          />

          {/* Slide-in panel */}
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
            width: 'min(320px, 88vw)',
            background: 'var(--cream)',
            boxShadow: '-8px 0 32px rgba(30,36,32,0.14)',
            display: 'flex', flexDirection: 'column',
            overflowY: 'auto',
          }}>

            {/* Panel header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 18px', borderBottom: '1px solid var(--border)', flexShrink: 0,
            }}>
              <Link href="/" onClick={() => setMobileOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  border: '1.5px solid var(--sage)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', color: 'var(--sage)', fontWeight: 600,
                }}>IE</div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                  Invisalign Essex
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close"
                style={{ padding: '6px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}>
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex: 1 }}>

              <Link href="/" style={drawerLink}>Home</Link>

              {/* Treatments accordion */}
              <button onClick={() => setMobileTreatmentsOpen(o => !o)} style={drawerAccordion}>
                <span>Treatments</span>
                <ChevronDown style={{
                  width: '16px', height: '16px', color: 'var(--muted)', flexShrink: 0,
                  transform: mobileTreatmentsOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }} />
              </button>
              {mobileTreatmentsOpen && (
                <div style={{ background: 'var(--sage-light)', borderBottom: '1px solid var(--border)' }}>
                  {services.map(s => (
                    <Link key={s.id} href={`/treatments/${s.slug}/`} style={drawerSubLink}>{s.title}</Link>
                  ))}
                  <Link href="/treatments/" style={{ ...drawerSubLink, color: 'var(--sage)', fontWeight: 500 }}>
                    All Treatments →
                  </Link>
                </div>
              )}

              <Link href="/locations/" style={drawerLink}>Locations</Link>
              <Link href="/clinics/"   style={drawerLink}>Clinics</Link>
              <Link href="/blog/"      style={drawerLink}>Blog</Link>
              <Link href="/guides/"    style={drawerLink}>Guides</Link>

              {/* About accordion */}
              <button onClick={() => setMobileAboutOpen(o => !o)} style={drawerAccordion}>
                <span>About &amp; Trust</span>
                <ChevronDown style={{
                  width: '16px', height: '16px', color: 'var(--muted)', flexShrink: 0,
                  transform: mobileAboutOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }} />
              </button>
              {mobileAboutOpen && (
                <div style={{ background: 'var(--sage-light)', borderBottom: '1px solid var(--border)' }}>
                  {trustLinks.map(l => (
                    <Link key={l.href} href={l.href} style={drawerSubLink}>{l.label}</Link>
                  ))}
                </div>
              )}
            </nav>

            {/* CTA */}
            <div style={{ padding: '16px 18px', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
              <button
                onClick={() => { onOpenModal?.(); setMobileOpen(false); }}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center', fontSize: '14px', padding: '13px' }}
              >
                Find a Provider — Free
              </button>
              <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '8px' }}>
                Free consultation · No obligation
              </p>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

// ── Style constants ────────────────────────────────────────────────

const navLink: React.CSSProperties = {
  padding: '8px 14px', fontSize: '13px', color: 'var(--muted)',
  textDecoration: 'none', fontWeight: 400, borderRadius: '6px',
};

const navBtn: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '4px',
  padding: '8px 14px', fontSize: '13px', fontWeight: 400,
  fontFamily: 'var(--font-sans)', background: 'none', border: 'none',
  cursor: 'pointer', borderRadius: '6px',
};

const drawerLink: React.CSSProperties = {
  display: 'flex', alignItems: 'center',
  padding: '15px 18px', fontSize: '15px', fontWeight: 400,
  color: 'var(--ink)', textDecoration: 'none',
  borderBottom: '1px solid var(--border)',
};

const drawerAccordion: React.CSSProperties = {
  width: '100%', display: 'flex', alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 18px', fontSize: '15px', fontWeight: 400,
  color: 'var(--ink)', background: 'none', border: 'none',
  borderBottom: '1px solid var(--border)',
  cursor: 'pointer', fontFamily: 'var(--font-sans)', textAlign: 'left',
};

const drawerSubLink: React.CSSProperties = {
  display: 'block', padding: '12px 30px', fontSize: '14px',
  color: 'var(--muted)', textDecoration: 'none',
  borderBottom: '1px solid var(--border)',
};
