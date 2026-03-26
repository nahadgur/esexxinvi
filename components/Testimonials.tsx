import { testimonials } from '@/data/site';
import { cn } from '@/lib/utils';

export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const items = testimonials.slice(0, limit);

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}>
      {items.map(t => {
        const initials = t.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);
        return (
          <div
            key={t.id}
            style={{
              background: 'var(--cream)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Stars */}
            <div style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '12px' }}>
              {'★'.repeat(t.rating)}
            </div>

            {/* Quote */}
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.55,
              marginBottom: '18px',
              flex: 1,
            }}>
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--sage-pale)', border: '1.5px solid var(--sage-mid)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 600, color: 'var(--sage)',
                flexShrink: 0,
              }}>
                {initials}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.location} &middot; {t.service}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
