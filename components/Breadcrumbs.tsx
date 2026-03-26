import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" style={{ paddingTop: '14px', paddingBottom: '14px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-width">
        <ol style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {i > 0 && (
                <ChevronRight style={{ width: '13px', height: '13px', color: 'var(--border)', flexShrink: 0 }} />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  style={{ fontSize: '12px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                  className="hover:text-brand-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{ fontSize: '12px', color: 'var(--sage)', fontWeight: 500 }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
