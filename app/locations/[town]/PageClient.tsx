'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Train, Clock, Shield, ArrowRight, CheckCircle, PoundSterling } from 'lucide-react';
import { services } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';

export default function TownPageClient({ slug }: { slug: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loc = getCityBySlug(slug);
  if (!loc) notFound();

  const otherCatchments = LOCATIONS.filter(l => l.slug !== loc.slug).slice(0, 8);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main id="main" className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Locations', href: '/locations/' }, { label: loc.name }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" aria-hidden="true" /> {loc.region} catchment
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  Invisalign in {loc.name}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {loc.intro}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><Train className="w-4 h-4" aria-hidden="true" /> {loc.nearestRail}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" /> {loc.postcodeAreas.join(', ')}</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={loc.name} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* Local context */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  What patients in {loc.name} typically want
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {loc.localContext}
                </p>
              </section>

              {/* Why our network */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Why we route {loc.region} enquiries the way we do
                </h2>
                <ul className="space-y-3">
                  {loc.whyEssexProviders.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Treatments link grid (no combo URLs — link to pillar) */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Invisalign treatment options for {loc.name} patients
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(service => (
                    <Link
                      key={service.id}
                      href={`/treatments/${service.slug}/`}
                      className="block group bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all p-5"
                    >
                      <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-700 mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                      <span className="text-brand-600 font-medium text-sm flex items-center gap-1">
                        Treatment details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <PricingSection cityName={loc.name} />

              {/* Neighbourhoods */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Neighbourhoods we cover within {loc.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  Population approximately {loc.population.toLocaleString()}. {loc.postcodeAreas.length === 1 ? `Postcode area ${loc.postcodeAreas[0]}` : `Postcode areas ${loc.postcodeAreas.join(', ')}`}.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {loc.neighbourhoods.map(n => (
                    <li key={n} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {n}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Named local entities */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Local landmarks and reference points
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  {loc.notableNamedEntities.map(e => (
                    <li key={e} className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQs (location-specific) */}
              <section className="mb-12">
                <FAQ
                  faqs={loc.faqs}
                  title={`Common questions about Invisalign in ${loc.name}`}
                />
              </section>

              {/* Nearby anchor catchments */}
              <section className="mb-12">
                <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Other Essex anchor catchments
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {otherCatchments.map(o => (
                    <Link
                      key={o.slug}
                      href={`/locations/${o.slug}/`}
                      className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-lg text-sm transition"
                    >
                      <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium text-gray-700">{o.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                    Get matched in {loc.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    Submit the matching form and we will email a shortlist of one to three providers within two working hours.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">
                    Start the form
                  </button>
                  <ul className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                      Two-hour email response on working days
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                      Verified Platinum-tier providers only
                    </li>
                    <li className="flex items-center gap-3">
                      <PoundSterling className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
                      Free for patients, no commission per lead
                    </li>
                  </ul>
                </div>

                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-brand-900 mb-2">
                    Drive times
                  </h3>
                  <p className="text-sm text-brand-800 mb-2">
                    From Harlow (network anchor): {loc.drivingDistanceFromHarlow}
                  </p>
                  <p className="text-sm text-brand-800">
                    From Southend: {loc.drivingDistanceFromSouthend}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
