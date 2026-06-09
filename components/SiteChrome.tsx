'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LeadFormModal } from './LeadFormModal';

/**
 * Sitewide chrome. Renders exactly one Header and one Footer around every route
 * (hoisted out of the individual page client components), plus the lead modal
 * the header CTA opens. Page bodies keep their own in-content CTAs.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      {children}
      <Footer />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
