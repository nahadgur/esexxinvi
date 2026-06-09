import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { GUIDE_HUBS, GUIDE_HUBS_BY_SLUG } from '@/data/guides';
import { getBlogPostsByHub } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';
import {
  buildOrganization,
  buildBreadcrumbList,
  buildArticleSchema,
  buildMedicalWebPage,
  buildFAQPage,
  buildEditorialAuthor,
} from '@/lib/schema';
import GuideHubClient from './GuideHubClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_HUBS.map(h => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = GUIDE_HUBS_BY_SLUG[params.slug];
  if (!hub) return {};
  const canonical = `${siteConfig.url}/guides/${params.slug}/`;
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: canonical,
      type: 'article',
      locale: 'en_GB',
      publishedTime: hub.publishedAt,
      modifiedTime: hub.lastReviewedAt,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const hub = GUIDE_HUBS_BY_SLUG[params.slug];
  if (!hub) notFound();

  const url = `${siteConfig.url}/guides/${params.slug}/`;

  const spokes = getBlogPostsByHub(hub.slug).map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
  }));

  const treatments = hub.treatmentSlugs
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map(s => ({ slug: s.slug, title: s.title }));

  const adjacentHubs = hub.adjacentHubSlugs
    .map(slug => GUIDE_HUBS_BY_SLUG[slug])
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .map(h => ({ slug: h.slug, title: h.title }));

  const schemas = [
    buildOrganization(),
    buildEditorialAuthor(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Guides', href: '/guides/' },
      { label: hub.title },
    ]),
    buildArticleSchema({
      url,
      headline: hub.title,
      description: hub.metaDescription,
      datePublished: hub.publishedAt,
      dateModified: hub.lastReviewedAt,
    }),
    buildMedicalWebPage({
      url,
      name: hub.title,
      description: hub.metaDescription,
      datePublished: hub.publishedAt,
      dateModified: hub.lastReviewedAt,
    }),
    buildFAQPage(hub.faqs),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <GuideHubClient hub={hub} spokes={spokes} treatments={treatments} adjacentHubs={adjacentHubs} />
    </>
  );
}
