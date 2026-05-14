import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/data/blog';
import { buildArticleSchema, buildBreadcrumbList, buildOrganization } from '@/lib/schema';
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
  if (!post) notFound();

  const canonical = `${siteConfig.url}/blog/${params.slug}/`;
  const schemas = [
    buildOrganization(),
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
      <BlogPostClient post={post} />
    </>
  );
}
