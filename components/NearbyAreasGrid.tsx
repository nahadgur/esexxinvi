'use client';

import { useState } from 'react';
import { getNearbyAreas } from '@/data/nearby-areas';

interface NearbyAreasGridProps {
  cityName: string;
  serviceSlug?: string;
  serviceName?: string;
  initialVisible?: number;
}

export function NearbyAreasGrid({ cityName, serviceSlug, serviceName, initialVisible = 10 }: NearbyAreasGridProps) {
  const areas = getNearbyAreas(cityName);
  const [showAll, setShowAll] = useState(false);

  if (areas.length === 0) return null;

  const visibleAreas = showAll ? areas : areas.slice(0, initialVisible);
  const hiddenCount = areas.length - initialVisible;

  const heading = serviceName
    ? `${serviceName}: Areas Around ${cityName}`
    : `Areas We Cover Around ${cityName}`;

  const description = serviceName
    ? `Looking for ${serviceName.toLowerCase()} near ${cityName}? Our Platinum providers serve patients across ${cityName} and the surrounding areas listed below.`
    : `Our Platinum Invisalign providers in ${cityName} serve patients from across the wider Essex area. If you live in any of the neighbourhoods or nearby towns below, you are within reach of expert Invisalign treatment.`;

  return (
    <section style={{ marginBottom: '56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div style={{ width: '3px', height: '28px', background: 'var(--sage)', borderRadius: '2px' }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 600, color: 'var(--ink)' }}>
          {heading}
        </h2>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '640px' }}>
        {description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
        {visibleAreas.map(area => (
          <div
            key={area}
            style={{
              padding: '9px 14px',
              background: 'var(--sage-pale)',
              border: '1px solid #d4dfd5',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'var(--ink)',
              fontWeight: 400,
            }}
          >
            {serviceName ? area : `Invisalign ${area}`}
          </div>
        ))}
      </div>

      {hiddenCount > 0 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          style={{
            marginTop: '14px', background: 'none', border: 'none',
            color: 'var(--sage)', fontWeight: 500, fontSize: '13px',
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Show all {areas.length} areas around {cityName}
        </button>
      )}

      {showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(false)}
          style={{
            marginTop: '14px', background: 'none', border: 'none',
            color: 'var(--sage)', fontWeight: 500, fontSize: '13px',
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Show fewer
        </button>
      )}

      <div style={{ marginTop: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
        <p>
          Patients from {areas.slice(0, 5).join(', ')}, and other areas around {cityName} regularly travel to our partnered clinics for Invisalign consultations.{' '}
          {serviceName
            ? `If you need ${serviceName.toLowerCase()} and live in or near ${cityName}, our Platinum providers can accommodate your schedule with flexible appointment times including evenings and weekends.`
            : `All of our ${cityName} partner clinics are easily accessible and offer flexible appointment times to suit your schedule.`
          }
        </p>
      </div>
    </section>
  );
}
