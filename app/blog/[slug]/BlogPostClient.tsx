'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { BlogPost } from '@/data/blog';

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main" className="flex-grow">
        <article className="container-width max-w-3xl py-16">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: post.title }]} />
          <header className="mt-6 mb-10">
            <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-3">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
            <div className="text-sm text-gray-500 mt-4 flex flex-wrap gap-4">
              <span>
                Published{' '}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </span>
              <span>
                Last reviewed{' '}
                <time dateTime={post.lastReviewedAt}>
                  {new Date(post.lastReviewedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </span>
              <span>
                <Link href="/editorial-policy/" className="text-brand-600 hover:underline">
                  Editorial team
                </Link>
              </span>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <footer className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">
              Ready to start? Match with verified Platinum providers across Essex.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              Get matched
            </button>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
