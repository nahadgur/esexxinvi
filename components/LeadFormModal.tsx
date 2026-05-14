'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { HeroLeadForm } from './HeroLeadForm';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  city?: string;
  service?: string;
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function LeadFormModal({ isOpen, onClose, city, service }: LeadFormModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    const dialog = dialogRef.current;
    if (dialog) {
      const focusables = dialog.querySelectorAll<HTMLElement>(FOCUSABLE);
      focusables[0]?.focus();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialog) {
        const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          el => !el.hasAttribute('disabled'),
        );
        if (focusables.length === 0) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
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
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        style={{
          position: 'relative', width: '100%', maxWidth: '460px',
          animation: 'modalIn 0.25s ease-out',
          marginTop: '24px', marginBottom: '24px',
        }}
      >
        <span id="lead-modal-title" className="sr-only">Get matched with verified Essex Invisalign providers</span>
        <button
          onClick={onClose}
          type="button"
          style={{
            position: 'absolute', top: '-12px', right: '-12px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'var(--ink)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 10,
          }}
          aria-label="Close form"
        >
          <X style={{ width: '15px', height: '15px', color: '#fff' }} aria-hidden="true" />
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
