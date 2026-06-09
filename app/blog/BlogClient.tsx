'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';
import { getPublishedBlogPosts } from '@/data/blog';
import { internalLinkMap } from '@/data/seo';

export default function BlogIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posts = getPublishedBlogPosts();

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main id="main" className="flex-grow">
        <Hero
          title="Editorial blog"
          subtitle="Long-form Invisalign analysis from the Invisalign Dentists Essex editorial team. Pricing, process, and local context for Essex patients."
          showCta={false}
          showTrust={false}
        />

        <section className="section-padding">
          <div className="container-width max-w-3xl">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  New posts coming soon
                </h2>
                <p className="text-gray-600 mb-8 max-w-prose mx-auto">
                  Our editorial blog is launching with the next site update. In the meantime, the in-depth treatment guides cover pricing, financing, NHS routes, and the Invisalign process in detail.
                </p>
                <ul className="flex flex-wrap gap-3 justify-center">
                  {internalLinkMap.guides.map(g => (
                    <li key={g.href}>
                      <Link
                        href={g.href}
                        className="inline-block px-4 py-2 bg-brand-50 text-brand-700 border border-brand-100 rounded-full text-sm hover:bg-brand-100 transition"
                      >
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-10">
                {posts.map(post => (
                  <article key={post.slug} className="border-b border-gray-100 pb-10">
                    <Link href={`/blog/${post.slug}/`} className="group block">
                      <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold mb-2">
                        {post.category}
                      </div>
                      <h2 className="text-2xl font-display font-bold text-gray-900 group-hover:text-brand-700 mb-3 transition">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="text-sm text-gray-500">
                        Last reviewed{' '}
                        <time dateTime={post.lastReviewedAt}>
                          {new Date(post.lastReviewedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
