// components/BreadcrumbJsonLd.tsx
// Server component — renders a BreadcrumbList JSON-LD script tag inline.
// Use this in the server wrapper page.tsx for any route that needs structured
// breadcrumb data. Do NOT put this in a 'use client' component — script tags
// with JSON-LD must be in the server render to be picked up by crawlers.
//
// Usage:
//   <BreadcrumbJsonLd items={[
//     { name: 'Home', url: 'https://www.invisaligndentistsessex.uk/' },
//     { name: 'Locations', url: 'https://www.invisaligndentistsessex.uk/locations/' },
//     { name: 'Chelmsford', url: 'https://www.invisaligndentistsessex.uk/locations/chelmsford/' },
//     { name: 'Invisalign for Overbite' }, // Last item — no url needed
//   ]} />

interface BreadcrumbItem {
  name: string;
  url?: string; // Omit for the final (current page) item
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
