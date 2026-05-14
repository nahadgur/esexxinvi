'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function LocationsIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const grouped = useMemo(() => {
    const filtered = LOCATIONS.filter(l =>
      !searchQuery ||
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.region.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    const out: Record<string, typeof LOCATIONS> = {};
    for (const loc of filtered) {
      const key = loc.region;
      if (!out[key]) out[key] = [];
      out[key]!.push(loc);
    }
    return out;
  }, [searchQuery]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main" className="flex-grow">
        <Hero
          title="Find verified Invisalign providers in your part of Essex"
          subtitle="Twelve anchor catchments cover the whole county. Each location page shows local pricing, transport, neighbourhoods, and the providers we route enquiries to."
          image="/images/locations/hero-essex-aerial.webp"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-xl mx-auto mb-12">
              <label htmlFor="loc-search" className="sr-only">Search Essex locations</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <input
                  id="loc-search"
                  type="search"
                  placeholder="Search town or region"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="space-y-12">
              {Object.entries(grouped).map(([region, locs]) => (
                <div key={region}>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">{region}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {locs.map(loc => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}/`}
                        className="group block bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-4 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                          <span className="font-medium text-gray-900 group-hover:text-brand-700 text-sm">{loc.name}</span>
                        </div>
                        <span className="block text-xs text-gray-500 ml-6">{loc.postcodeAreas.join(', ')}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {Object.keys(grouped).length === 0 && (
                <p className="text-center text-gray-500">No matching locations. Try a different search term.</p>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-12 max-w-2xl">
              Don&apos;t see your town? Most Essex postcodes are within a 25-minute drive of one of the 12 anchor locations above. Submit the matching form and we will route you to the nearest provider.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} title="Common questions about Invisalign in Essex" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
