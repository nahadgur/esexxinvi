'use client';

import { CheckCircle } from 'lucide-react';
import { pricingTiers, treatmentIncludes, financeInfo, getPricingForService } from '@/data/pricing';

interface PricingSectionProps {
  cityName?: string;
  serviceId?: string;
  serviceName?: string;
}

export function PricingSection({ cityName, serviceId, serviceName }: PricingSectionProps) {
  const tiers = serviceId ? getPricingForService(serviceId) : pricingTiers;

  const heading = cityName && serviceName
    ? `How Much Does ${serviceName} Cost in ${cityName}?`
    : cityName
    ? `How Much Does Invisalign Cost in ${cityName}?`
    : serviceName
    ? `${serviceName} Pricing Guide`
    : 'Invisalign Pricing Guide';

  const intro = cityName
    ? `Invisalign prices in ${cityName} vary depending on the complexity of your case and the provider tier. Below are typical costs from Platinum and Diamond providers in the ${cityName} area.`
    : `Invisalign prices across Essex vary depending on case complexity, treatment type, and your provider's tier. Below are typical costs from Platinum and Diamond providers.`;

  return (
    <section style={{ marginBottom: '56px' }}>

      {/* Heading */}
      <div style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)' }}>
            {heading}
          </h2>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '640px' }}>{intro}</p>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--sage-pale)', textAlign: 'left' }}>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px', letterSpacing: '0.04em' }}>Treatment</th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--sage)', fontSize: '12px', letterSpacing: '0.04em' }}>Price Range</th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px', letterSpacing: '0.04em' }} className="hidden md:table-cell">Duration</th>
              <th style={{ padding: '12px 18px', fontWeight: 600, color: 'var(--ink)', fontSize: '12px', letterSpacing: '0.04em' }} className="hidden lg:table-cell">Aligner Sets</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr key={tier.slug} style={{ background: i % 2 === 0 ? '#fff' : 'var(--cream)' }}>
                <td style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>{tier.treatment}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }} className="hidden sm:block">{tier.description}</div>
                </td>
                <td style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--sage)', fontSize: '15px' }}>
                    £{tier.priceFrom.toLocaleString()} – £{tier.priceTo.toLocaleString()}
                  </span>
                </td>
                <td style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }} className="hidden md:table-cell">
                  {tier.typicalDuration}
                </td>
                <td style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }} className="hidden lg:table-cell">
                  {tier.alignerSets}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        {tiers.map(tier => (
          <div key={tier.slug} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>{tier.treatment}</span>
              <span style={{ fontWeight: 600, color: 'var(--sage)' }}>£{tier.priceFrom.toLocaleString()}–£{tier.priceTo.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--muted)' }}>
              <span>{tier.typicalDuration}</span>
              <span>{tier.alignerSets} aligners</span>
            </div>
          </div>
        ))}
      </div>

      {/* What's included + finance */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="pricing-two-col">
        <div style={{ background: 'var(--sage-pale)', border: '1px solid #d4dfd5', borderRadius: '10px', padding: '20px 22px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '14px' }}>
            What&apos;s Included
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {treatmentIncludes.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '8px', color: '#fff', fontWeight: 700 }}>✓</span>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 22px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
            0% Finance Available
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '14px' }}>
            {financeInfo.description}
          </p>
          <div style={{ background: 'var(--sage-pale)', borderRadius: '8px', padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 600, color: 'var(--sage)' }}>
              From £{financeInfo.monthlyFrom}/month
            </div>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
              Spread over {financeInfo.spreadOver} at 0% APR
            </span>
          </div>
        </div>
      </div>

      {cityName && (
        <div style={{ marginTop: '24px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '720px' }}>
          <p>
            The cost of Invisalign in {cityName} depends on several factors: the severity of your misalignment, which Invisalign product is recommended, and the experience level of your orthodontist. Platinum and Diamond tier providers in {cityName} may charge slightly more than general dentists, but this reflects their significantly higher case volume and access to advanced Invisalign features. Most {cityName} clinics in our network offer free initial consultations including a 3D iTero scan, so you can get an accurate quote before committing to treatment.
          </p>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pricing-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
