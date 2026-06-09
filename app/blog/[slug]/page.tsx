import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/data/blog';
import { GUIDE_HUBS_BY_SLUG } from '@/data/guides';
import {
  buildArticleSchema,
  buildBreadcrumbList,
  buildOrganization,
  buildEditorialAuthor,
  buildMedicalWebPage,
  buildFAQPage,
} from '@/lib/schema';
import BlogPostClient from './BlogPostClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  const canonical = `${siteConfig.url}/blog/${params.slug}/`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical,
      type: 'article',
      locale: 'en_GB',
      publishedTime: post.publishedAt,
      modifiedTime: post.lastReviewedAt,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post || post.draft) notFound();

  const canonical = `${siteConfig.url}/blog/${params.slug}/`;
  const hubGuide = GUIDE_HUBS_BY_SLUG[post.hub];
  const hub = hubGuide ? { slug: hubGuide.slug, title: hubGuide.title } : null;

  const schemas = [
    buildOrganization(),
    buildEditorialAuthor(),
    buildBreadcrumbList([
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog/' },
      { label: post.title },
    ]),
    buildArticleSchema({
      url: canonical,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.lastReviewedAt,
    }),
    buildMedicalWebPage({
      url: canonical,
      name: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.lastReviewedAt,
    }),
    ...(post.faqs && post.faqs.length > 0 ? [buildFAQPage(post.faqs)] : []),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogPostClient post={post} hub={hub} />
    </>
  );
}
