export interface BlogPost {
  slug: string;
  title: string;
  category: 'pricing' | 'process' | 'comparison' | 'local' | 'editorial';
  excerpt: string;
  body: string;
  publishedAt: string;
  lastReviewedAt: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage?: string;
}

// Typed posts replace the legacy /articles.csv autoblog. Per editorial policy,
// every post has a known publish date, last-reviewed date, and editorial team
// authorship — no fabricated bylines.
export const BLOG_POSTS: BlogPost[] = [];

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map(p => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
