'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { HeroLeadForm } from './HeroLeadForm';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  city?: string;
  service?: string;
}

export function LeadFormModal({ isOpen, onClose, city, service }: LeadFormModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(30,36,32,0.55)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '16px',
        paddingTop: 'max(16px, env(safe-area-inset-top))',
        overflowY: 'auto',
        backdropFilter: 'blur(2px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        position: 'relative', width: '100%', maxWidth: '460px',
        animation: 'modalIn 0.25s ease-out',
        marginTop: '24px', marginBottom: '24px',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-12px', right: '-12px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'var(--ink)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 10,
          }}
          aria-label="Close"
        >
          <X style={{ width: '15px', height: '15px', color: '#fff' }} />
        </button>

        <HeroLeadForm city={city} service={service} />
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
