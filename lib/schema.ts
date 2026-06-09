import { siteConfig } from '@/data/site';
import type { LocationSpoke } from '@/data/locations';
import type { Service } from '@/data/services';
import type { Clinic } from '@/data/clinics';

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;
const AUTHOR_ID = `${siteConfig.url}/about-us/#author`;

// Editorial author entity. Brand byline (IDE), not an invented person. Emitted
// on the About page and referenced by @id from articles and guide hubs.
export function buildEditorialAuthor() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': AUTHOR_ID,
    name: siteConfig.editorial.authorName,
    alternateName: `${siteConfig.name} editorial team`,
    url: `${siteConfig.url}${siteConfig.editorial.authorUrl}`,
    parentOrganization: { '@id': ORG_ID },
    description:
      'Editorial team for Invisalign Dentists Essex. Clinical claims are checked against Align Technology UK guidance, GDC standards, and NHS sources.',
  };
}

export function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Essex, England',
    },
    serviceType: 'Invisalign provider matching service',
    knowsAbout: ['Invisalign', 'Clear aligners', 'Orthodontics', 'Cosmetic dentistry'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: siteConfig.contact.editorialEmail,
      availableLanguage: 'English',
    },
    publishingPrinciples: `${siteConfig.url}/editorial-policy/`,
  };
}

export function buildWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: siteConfig.locale,
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/locations/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function buildFAQPage(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function buildLocationSchemaGraph(loc: LocationSpoke) {
  const pageUrl = `${siteConfig.url}/locations/${loc.slug}/`;
  return [
    buildOrganization(),
    buildWebSite(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations/' },
      { label: loc.name },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      '@id': `${pageUrl}#place`,
      name: `${loc.name}, Essex`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: loc.name,
        addressRegion: 'Essex',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.geo.lat,
        longitude: loc.geo.lng,
      },
    },
    buildFAQPage(loc.faqs),
  ];
}

export function buildServiceSchemaGraph(svc: Service, faqs: FaqEntry[]) {
  const pageUrl = `${siteConfig.url}/treatments/${svc.slug}/`;
  return [
    buildOrganization(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments/' },
      { label: svc.title },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: svc.title,
      description: svc.description,
      provider: { '@id': ORG_ID },
      serviceType: 'Invisalign clear aligner treatment',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Essex, England',
      },
      url: pageUrl,
    },
    buildFAQPage(faqs),
  ];
}

export function buildClinicSchemaGraph(c: Clinic) {
  const pageUrl = `${siteConfig.url}/clinics/${c.slug}/`;
  return [
    buildOrganization(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Clinics', href: '/clinics/' },
      { label: c.name },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      '@id': `${pageUrl}#dentist`,
      name: c.name,
      url: c.websiteUrl,
      telephone: c.telephone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: c.address,
        addressLocality: c.addressLocality,
        addressRegion: c.addressRegion,
        postalCode: c.postalCode,
        addressCountry: 'GB',
      },
      ...(c.geoLat && c.geoLong
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: c.geoLat,
              longitude: c.geoLong,
            },
          }
        : {}),
      ...(c.openingHours ? { openingHours: c.openingHours } : {}),
      priceRange: `£${c.priceRangeLow}-£${c.priceRangeHigh}`,
      makesOffer: c.treatmentSlugs.map(slug => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `Invisalign for ${slug}` },
      })),
      isPartOf: { '@id': ORG_ID },
    },
  ];
}

export function buildArticleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    url: opts.url,
    author: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: opts.url,
    inLanguage: siteConfig.locale,
  };
}

// MedicalWebPage carries the YMYL signal: author/reviewer entity, dates, and the
// medical topic. Emitted alongside Article on health-content pages (spokes + hubs).
export function buildMedicalWebPage(opts: {
  url: string;
  name: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${opts.url}#medicalwebpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    lastReviewed: opts.dateModified,
    isPartOf: { '@id': SITE_ID },
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: siteConfig.locale,
    about: { '@type': 'MedicalProcedure', name: 'Invisalign clear aligner treatment' },
  };
}
