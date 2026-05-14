import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Invisalign Dentists Essex, verified Platinum providers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #3D5C42 0%, #5A7C5F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#FAFAF7',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Invisalign Dentists Essex
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 78, fontWeight: 600, lineHeight: 1.05, fontFamily: 'serif' }}>
            Verified Platinum providers
          </div>
          <div style={{ fontSize: 32, fontStyle: 'italic', opacity: 0.8 }}>
            across 12 Essex catchments
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 22, opacity: 0.6 }}>
          <span>Free for patients &middot; No inbound calls</span>
          <span>invisaligndentistsessex.uk</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
