'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import type { BlogPost } from '@/data/blog';

interface Props {
  post: BlogPost;
  hub: { slug: string; title: string } | null;
}

export default function BlogPostClient({ post, hub }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const words = post.body.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const readMins = Math.max(3, Math.round(words / 200));

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main id="main" className="flex-grow">
        <article className="container-width max-w-3xl py-16">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: post.title }]} />
          <header className="mt-6 mb-10">
            <div className="mt-4">
              <SpokeHero
                title={post.title}
                hubName={hub ? hub.title : null}
                hubSlug={hub ? hub.slug : post.hub}
                readMins={readMins}
              />
            </div>
            <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-3 mt-8">
              {post.category}
            </div>
            <h1 className="sr-only">
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
                By{' '}
                <Link href="/about-us/" className="text-brand-600 hover:underline">
                  IDE
                </Link>
              </span>
            </div>
          </header>

          <div
            className="blog-prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-5">Frequently asked questions</h2>
              <div className="space-y-5">
                {post.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-900 mb-1">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

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
    </>
  );
}
