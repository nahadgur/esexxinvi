'use client';

import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
        fontWeight: 600, color: 'var(--ink)',
        lineHeight: 1.15, marginBottom: '8px',
      }}>
        {title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '24px' }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', padding: '16px 20px',
                textAlign: 'left', background: 'none', border: 'none',
                cursor: 'pointer', gap: '16px',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                {faq.question}
              </span>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '13px', color: 'var(--sage)',
                transform: openIndex === i ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.2s',
              }}>
                +
              </div>
            </button>
            {openIndex === i && (
              <div style={{
                padding: '0 20px 16px',
                fontSize: '13px', color: 'var(--muted)',
                lineHeight: 1.7,
                borderTop: '1px solid var(--border)',
                paddingTop: '14px',
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
