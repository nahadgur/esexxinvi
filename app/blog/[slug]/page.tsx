'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ChevronUp, ArrowUpRight } from 'lucide-react';
import Papa from 'papaparse';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

/* =======================
   TYPES
======================= */

interface Article {
  'Article Title': string;
  'Article Content': string;
  'wp_category': string;
  'Slug': string;
  'Meta Title': string;
  'Meta Description': string;
  'Schema Markup': string;
  'Status': string;
  'Further Reading'?: string;
}

interface ArticleWithDate extends Article {
  publishDate: Date;
  index: number;
  featuredImage?: string;
  cleanedHtml?: string;
}

type ReadingLink = {
  url: string;
  label: string;
};

/* =======================
   SLUG HELPERS
======================= */

const slugify = (s: string) =>
  (s || '')
    .toLowerCase()
    .trim()
    .replace(/['\"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const makeUniqueSlug = (base: string, used: Set<string>) => {
  const cleanBase = base && base.length ? base : 'post';
  let slug = cleanBase;
  let i = 2;
  while (used.has(slug)) slug = `${cleanBase}-${i++}`;
  used.add(slug);
  return slug;
};

/* =======================
   IMAGE + HTML CLEANUP
======================= */

const extractImageUrls = (html: string): string[] => {
  const out: string[] = [];
  const s = html || '';

  const srcRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = srcRe.exec(s))) out.push(m[1]);

  const urlRe = /(https?:\/\/[^\s"']+\.(?:png|jpe?g|webp|gif))(?:\?[^\s"']*)?/gi;
  while ((m = urlRe.exec(s))) out.push(m[1]);

  return Array.from(new Set(out));
};

const cleanArticleHtml = (html: string) => {
  let h = html || '';
  h = h.replace(/<\/?(strong|b)\b[^>]*>/gi, '');
  h = h.replace(/\sstyle=["'][^"']*["']/gi, '');
  h = h.replace(/\s(width|height)=["'][^"']*["']/gi, '');
  return h;
};

const ensureParagraphs = (html: string) => {
  let h = (html || '').trim();
  if (!h) return '';

  const hasBlocks =
    /<\s*p\b/i.test(h) ||
    /<\s*h[1-6]\b/i.test(h) ||
    /<\s*(ul|ol|table|blockquote|pre)\b/i.test(h);
  if (hasBlocks) return h;

  const brSplit = h.split(/<br\s*\/?>\s*<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
  if (brSplit.length > 1) {
    return brSplit.map((p) => `<p>${p.replace(/\n/g, '<br />')}</p>`).join('');
  }

  const nlSplit = h.split(/\n\s*\n+/).map((s) => s.trim()).filter(Boolean);
  if (nlSplit.length > 1) {
    return nlSplit.map((p) => `<p>${p.replace(/\n/g, '<br />')}</p>`).join('');
  }

  return `<p>${h.replace(/\n/g, '<br />')}</p>`;
};

/* =======================
   FURTHER READING
======================= */

const FURTHER_READING_POOL: ReadingLink[] = [
  { url: 'https://www.invisalign.com', label: 'Invisalign (official site)' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/?term=invisalign', label: 'PubMed: Invisalign research' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/?term=clear+aligners', label: 'PubMed: Clear aligners research' },
  { url: 'https://www.mouthhealthy.org/all-topics-a-z/orthodontics', label: 'MouthHealthy (ADA): Orthodontics' },
  { url: 'https://www.nhs.uk/conditions/orthodontics/', label: 'NHS: Orthodontics' },
  { url: 'https://www.mayoclinic.org/tests-procedures/braces/about/pac-20384670', label: 'Mayo Clinic: Braces overview' },
  { url: 'https://www.cdc.gov/oralhealth', label: 'CDC: Oral health' },
  { url: 'https://www.ajodo.org', label: 'AJODO (orthodontic journal)' },
];

const hashString = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const pickFurtherReading = (key: string, count: number = 3): ReadingLink[] => {
  const pool = FURTHER_READING_POOL;
  if (!pool.length) return [];
  const start = hashString(key || 'post') % pool.length;
  const out: ReadingLink[] = [];
  for (let i = 0; i < pool.length && out.length < Math.min(count, pool.length); i++) {
    out.push(pool[(start + i) % pool.length]);
  }
  return out;
};

/* =======================
   CTA BANNER — Warm Sage
======================= */

function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div style={{
      margin: '40px 0',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #c8d9c9',
      background: 'var(--sage)',
      position: 'relative',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'rgba(255,255,255,0.2)',
      }} />
      <div style={{
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        {/* Icon */}
        <div style={{
          flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{
            fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', marginBottom: '4px',
          }}>
            Free Consultation
          </p>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600,
            color: '#fff', lineHeight: 1.2, marginBottom: '4px',
          }}>
            Ready to start your Invisalign journey?
          </h3>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>
            Get matched with a specialist provider near you. No obligation, no cost.
          </p>
        </div>

        {/* CTA */}
        <div style={{ flexShrink: 0 }}>
          <button
            onClick={onOpenModal}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '40px',
              background: '#fff', color: 'var(--sage)',
              fontWeight: 600, fontSize: '13px',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.15s',
            }}
          >
            Book Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* =======================
   BANNER SPLIT HELPER
======================= */

const splitHtmlAfterFirstH2Section = (html: string): [string, string] => {
  if (!html) return ['', ''];

  const firstH2Match = html.match(/<h2[\s>]/i);
  if (firstH2Match && firstH2Match.index !== undefined) {
    const afterFirstH2 = html.slice(firstH2Match.index + firstH2Match[0].length);
    const nextHeadingMatch = afterFirstH2.match(/<h[23][\s>]/i);
    if (nextHeadingMatch && nextHeadingMatch.index !== undefined) {
      const splitPoint = firstH2Match.index + firstH2Match[0].length + nextHeadingMatch.index;
      return [html.slice(0, splitPoint), html.slice(splitPoint)];
    }
  }

  let count = 0;
  let pos = 0;
  while (pos < html.length && count < 3) {
    const idx = html.indexOf('</p>', pos);
    if (idx === -1) break;
    pos = idx + 4;
    count++;
  }
  if (count >= 3 && pos < html.length) {
    return [html.slice(0, pos), html.slice(pos)];
  }

  return [html, ''];
};

/* =======================
   PAGE
======================= */

export default function ArticlePage() {
  const params = useParams();
  const rawSlug = params?.slug as string | string[] | undefined;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const [article, setArticle] = useState<ArticleWithDate | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleWithDate[]>([]);
  const [furtherReading, setFurtherReading] = useState<ReadingLink[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(h > 0 && window.scrollY / h > 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Load article */
  useEffect(() => {
    if (!slug) return;

    fetch('/articles.csv')
      .then((r) => r.text())
      .then((csvText) => {
        Papa.parse<Article>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const startDate = new Date('2026-02-10T00:00:00');
            const articlesPerDay = 3;
            const usedSlugs = new Set<string>();

            const all: ArticleWithDate[] = (results.data || [])
              .filter((a) => a?.['Article Title'])
              .map((a, index) => {
                const publishDate = new Date(startDate);
                publishDate.setDate(
                  publishDate.getDate() + Math.floor(index / articlesPerDay)
                );

                const uniqueSlug = makeUniqueSlug(
                  (a['Slug'] || '').trim() || slugify(a['Article Title']),
                  usedSlugs
                );

                const images = extractImageUrls(a['Article Content']);
                const featuredImage = images.length > 0 ? images[0] : undefined;

                return {
                  ...a,
                  Slug: uniqueSlug,
                  publishDate,
                  index,
                  featuredImage,
                  cleanedHtml: ensureParagraphs(cleanArticleHtml(a['Article Content'])),
                };
              });

            const found = all.find((a) => a.Slug === slug) || null;
            setArticle(found);

            if (found) {
              setFurtherReading(pickFurtherReading(found.Slug, 3));
              const sameCategory = all.filter(
                (a) => a.Slug !== slug && a.wp_category === found.wp_category
              );
              const fill = all.filter(
                (a) => a.Slug !== slug && a.wp_category !== found.wp_category
              );
              setRelatedArticles([...sameCategory, ...fill].slice(0, 3));
            }
          },
        });
      });
  }, [slug]);

  /* Not found state */
  if (!article) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
        <Header onOpenModal={() => setIsModalOpen(true)} />
        <div style={{ paddingTop: '80px', padding: '80px 24px 60px', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--ink)' }}>
            Article not found
          </h1>
          <Link href="/blog" style={{ color: 'var(--sage)', textDecoration: 'underline', marginTop: '24px', display: 'inline-block', fontSize: '14px' }}>
            Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  /* Article prose classes — Warm Sage palette */
  const articleClasses = [
    'p-10 max-w-none',
    /* headings */
    '[&_h1]:font-display [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-ink [&_h1]:mt-10 [&_h1]:mb-5',
    '[&_h2]:font-display [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4',
    '[&_h3]:font-display [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3',
    '[&_h4]:font-display [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-ink [&_h4]:mt-7 [&_h4]:mb-3',
    /* body */
    '[&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-5',
    '[&_a]:text-brand-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-brand-600',
    /* lists */
    '[&_ul]:my-6 [&_ul]:pl-7 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:space-y-3 [&_ul]:text-muted',
    '[&_ol]:my-6 [&_ol]:pl-7 [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:space-y-3 [&_ol]:text-muted',
    '[&_li]:leading-relaxed [&_li]:pl-1 [&_li]:marker:text-brand-500',
    /* blockquote */
    '[&_blockquote]:my-8 [&_blockquote]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-brand-500 [&_blockquote]:bg-brand-50 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:text-ink [&_blockquote]:italic',
    '[&_blockquote_p]:mb-0',
    /* misc */
    '[&_hr]:my-10 [&_hr]:border-border',
    '[&_img]:w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:my-8',
    /* table */
    '[&_table]:w-full [&_table]:my-10 [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:border [&_table]:border-border',
    '[&_thead]:bg-brand-50',
    '[&_th]:text-left [&_th]:px-5 [&_th]:py-3 [&_th]:text-ink [&_th]:text-sm [&_th]:font-semibold',
    '[&_td]:px-5 [&_td]:py-3 [&_td]:text-muted [&_td]:text-sm [&_td]:border-t [&_td]:border-border',
    'hover:[&_tbody_tr]:bg-brand-50',
    /* code */
    '[&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:bg-brand-50 [&_code]:text-brand-600 [&_code]:text-[0.95em]',
    '[&_pre]:my-8 [&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:bg-brand-50 [&_pre]:border [&_pre]:border-border [&_pre]:overflow-x-auto',
  ].join(' ');

  const [htmlBefore, htmlAfter] = splitHtmlAfterFirstH2Section(article.cleanedHtml || '');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* Scroll-to-top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed', bottom: '24px', left: '24px', zIndex: 50,
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--sage-pale)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--sage)',
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp style={{ width: '18px', height: '18px' }} />
        </button>
      )}

      <div style={{ paddingTop: '48px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', maxWidth: '900px', margin: '0 auto' }}>

        {/* Back link */}
        <Link href="/blog" style={{ color: 'var(--sage)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '28px' }}>
          ← Back to blog
        </Link>

        {/* Article card */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: '#fff' }}>

          {/* Hero image */}
          <div style={{ position: 'relative', height: '420px' }}>
            {article.featuredImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.featuredImage}
                alt={article['Article Title']}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
            {/* gradient overlay for title legibility */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,36,32,0.75) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: '32px', left: '36px', right: '36px' }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginBottom: '8px', fontWeight: 500 }}>
                {article.publishDate.toDateString()}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.1,
              }}>
                {article['Article Title']}
              </h1>
            </div>
          </div>

          {/* Article body */}
          {htmlAfter ? (
            <>
              <div className={articleClasses} dangerouslySetInnerHTML={{ __html: htmlBefore }} />
              <div style={{ padding: '0 40px 8px' }}>
                <BlogCtaBanner onOpenModal={() => setIsModalOpen(true)} />
              </div>
              <div className={articleClasses} dangerouslySetInnerHTML={{ __html: htmlAfter }} />
            </>
          ) : (
            <div className={articleClasses} dangerouslySetInnerHTML={{ __html: article.cleanedHtml || '' }} />
          )}
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: '56px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '24px' }}>
              Related articles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="related-grid">
              {relatedArticles.map((a) => (
                <Link
                  key={a.Slug}
                  href={`/blog/${a.Slug}`}
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: '10px', border: '1px solid var(--border)', overflow: 'hidden', background: '#fff', transition: 'border-color 0.15s' }}
                  className="related-card"
                >
                  {/* Thumbnail */}
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: 'var(--sage-pale)' }}>
                    {a.featuredImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={a.featuredImage}
                        alt={a['Article Title']}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                        loading="lazy"
                      />
                    ) : null}
                    {/* Category pill */}
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      padding: '3px 10px', borderRadius: '20px',
                      background: 'rgba(237,242,238,0.92)', color: 'var(--sage)',
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>
                      {a.wp_category}
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600,
                      color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.3, flex: 1,
                    }}>
                      {a['Article Title']}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--sage)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Read article <ArrowUpRight style={{ width: '13px', height: '13px' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Further reading */}
        {furtherReading.length > 0 && (
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
              Further reading
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {furtherReading.map((l) => (
                <li key={l.url} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--sage-mid)', flexShrink: 0 }} />
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px', fontSize: '14px' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
        .related-card:hover { border-color: #c8d9c9 !important; }
      `}</style>
    </div>
  );
}
