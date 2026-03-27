export function TrustBadges() {
  const stats = [
    { number: '4.95★', label: 'Average provider rating' },
    { number: '150+', label: 'Cases/year — Diamond tier' },
    { number: '14M+', label: 'Patients treated globally' },
    { number: '£0', label: 'Cost to use our service' },
  ];

  return (
    <section style={{ borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex' }} className="trust-strip">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              flex: 1,
              padding: '22px 28px',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}
            className="trust-stat"
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, color: 'var(--sage)' }}>
              {stat.number}
            </div>
            <div style={{ fontSize: '11px', color: '#9A9A92', letterSpacing: '0.04em' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .trust-stat { padding: 16px 18px; }
          .trust-stat div:first-child { font-size: 22px !important; }
        }
      `}</style>
    </section>
  );
}
