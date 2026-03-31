import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// Individual blog post pages loaded client-side from CSV.
// We generate a canonical from the slug param so each article URL has
// a correct self-referencing canonical, preventing GSC "Duplicate without
// user-selected canonical" for the entire /blog/[slug]/ route.
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const canonical = `https://www.invisaligndentistsessex.uk/blog/${params.slug}/`;

  return {
    // Title/description will be overridden client-side via document.title if needed,
    // but the canonical tag is server-rendered and what Google uses for indexing.
    title: 'Invisalign Blog | Invisalign Dentists Essex',
    description: 'Expert Invisalign advice, cost guides, and patient stories for Essex patients.',
    alternates: { canonical },
    openGraph: {
      url: canonical,
    },
    // Allow indexing of individual blog posts
    robots: { index: true, follow: true },
  };
}

export default function Page() {
  return <BlogPostClient />;
}
