import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true, onOpenModal }: HeroProps) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px', borderBottom: '1px solid var(--border)' }} className="hero-grid">
      {/* Left column */}
      <div style={{ padding: 'clamp(36px,5vw,60px) clamp(24px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--cream)' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
          <div style={{ background: 'var(--sage-pale)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', color: 'var(--sage)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Diamond &amp; Platinum Only
          </div>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,46px)',
          fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px',
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '30px', maxWidth: '360px' }}>
          {subtitle}
        </p>

        {/* CTAs */}
        {showCta && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {onOpenModal ? (
              <button onClick={onOpenModal} className="btn-primary" style={{ fontSize: '14px' }}>
                Find My Provider
              </button>
            ) : (
              <Link href="/contact/" className="btn-primary" style={{ fontSize: '14px', textDecoration: 'none' }}>
                Find My Provider
              </Link>
            )}
            <Link href="/services/" className="btn-secondary" style={{ fontSize: '14px', textDecoration: 'none', color: 'var(--sage)' }}>
              View Treatments
            </Link>
          </div>
        )}

        {/* Social proof strip */}
        {showTrust && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>4.95 avg</span>
            </div>
            <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Platinum &amp; Diamond only</span>
            <div style={{ width: '1px', height: '14px', background: 'var(--border)' }} />
            <span style={{ background: 'var(--sage-pale)', borderRadius: '20px', padding: '3px 11px', fontSize: '11px', color: 'var(--sage)', fontWeight: 500 }}>
              Free 3D scan
            </span>
          </div>
        )}
      </div>

      {/* Right column — visual */}
      <div style={{ background: 'var(--sage-pale)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, mixBlendMode: 'multiply' }}
          loading="eager"
        />
        {/* Floating provider cards */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { name: 'Chelmsford Dental Studio', badge: 'Diamond', badgeStyle: { background: '#EDE9F8', color: '#5B42A8' }, sub: '150+ cases per year · Free 3D scan' },
            { name: 'Brentwood Smile Clinic', badge: 'Platinum', badgeStyle: { background: 'var(--sage-pale)', color: 'var(--sage)' }, sub: '80+ cases per year · 0% finance' },
          ].map(card => (
            <div key={card.name} style={{
              background: 'rgba(250,250,247,0.9)', border: '1px solid rgba(61,92,66,0.15)',
              borderRadius: '8px', padding: '10px 14px', backdropFilter: 'blur(4px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sage-mid)', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>{card.name}</span>
                <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '3px', letterSpacing: '0.05em', ...card.badgeStyle }}>{card.badge}</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', paddingLeft: '14px' }}>{card.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
