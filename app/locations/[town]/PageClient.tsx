'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { Testimonials } from '@/components/Testimonials';

const townRegionImage: Record<string, string> = {
  // Coastal
  'southend-on-sea': '/images/locations/template-coastal-essex.webp',
  'clacton-on-sea': '/images/locations/template-coastal-essex.webp',
  'brightlingsea': '/images/locations/template-coastal-essex.webp',
  'mersea-island': '/images/locations/template-coastal-essex.webp',
  'shoeburyness': '/images/locations/template-coastal-essex.webp',
  'westcliff-on-sea': '/images/locations/template-coastal-essex.webp',
  'leigh-on-sea': '/images/locations/template-coastal-essex.webp',
  'canvey-island': '/images/locations/template-coastal-essex.webp',
  'burnham-on-crouch': '/images/locations/template-coastal-essex.webp',
  'mersea': '/images/locations/template-coastal-essex.webp',
  // Commuter belt / London fringe
  'loughton': '/images/locations/template-commuter-belt.webp',
  'epping': '/images/locations/template-commuter-belt.webp',
  'buckhurst-hill': '/images/locations/template-commuter-belt.webp',
  'chigwell': '/images/locations/template-commuter-belt.webp',
  'waltham-abbey': '/images/locations/template-commuter-belt.webp',
  'cheshunt': '/images/locations/template-commuter-belt.webp',
  'woodford': '/images/locations/template-commuter-belt.webp',
  'theydon-bois': '/images/locations/template-commuter-belt.webp',
  'abridge': '/images/locations/template-commuter-belt.webp',
  'roydon': '/images/locations/template-commuter-belt.webp',
  'nazeing': '/images/locations/template-commuter-belt.webp',
  'north-weald-bassett': '/images/locations/template-commuter-belt.webp',
  'ongar': '/images/locations/template-commuter-belt.webp',
  // South Essex / Thurrock
  'basildon': '/images/locations/template-south-essex-town.webp',
  'grays': '/images/locations/template-south-essex-town.webp',
  'tilbury': '/images/locations/template-south-essex-town.webp',
  'stanford-le-hope': '/images/locations/template-south-essex-town.webp',
  'corringham': '/images/locations/template-south-essex-town.webp',
  'purfleet': '/images/locations/template-south-essex-town.webp',
  'south-ockendon': '/images/locations/template-south-essex-town.webp',
  'aveley': '/images/locations/template-south-essex-town.webp',
  'pitsea': '/images/locations/template-south-essex-town.webp',
  'laindon': '/images/locations/template-south-essex-town.webp',
  'langdon-hills': '/images/locations/template-south-essex-town.webp',
  'horndon-on-the-hill': '/images/locations/template-south-essex-town.webp',
};

const DEFAULT_TOWN_IMAGE = '/images/locations/template-market-town.webp';

export default function TownPageClient({ params }: { params: { town: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cityName = getCityBySlug(params.town);
  if (!cityName) notFound();

  const heroImage = townRegionImage[params.town] ?? DEFAULT_TOWN_IMAGE;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero with form */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Locations', href: '/locations/' }, { label: cityName }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Verified Platinum Providers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  Invisalign in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Compare the highest-rated Invisalign dentists in {cityName}. Every provider in our network is Platinum or Diamond tier, meaning they complete 80 or more cases per year. Get matched for free below.
                </p>
              </div>
              <div>
                <HeroLeadForm city={cityName} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">

              {/* SEO Intro */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Top-Rated Invisalign Providers in {cityName}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    If you are considering Invisalign in {cityName}, you have come to the right place. We work exclusively with Platinum and Diamond tier providers, which means every dentist we recommend completes at least 80 Invisalign cases per year. That volume of experience translates into better treatment plans, fewer refinement rounds, and consistently superior results compared to general dentists who only fit a handful of cases annually.
                  </p>
                  <p>
                    Our {cityName} partners use iTero 3D scanning and ClinCheck digital planning as standard. You will see a full animated preview of your smile transformation before committing to anything. Initial consultations are free across our entire {cityName} network, with no obligation to proceed.
                  </p>
                </div>
              </section>

              {/* Services Grid */}
              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Treatments Available in {cityName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(service => (
                    <Link key={service.id} href={`/locations/${params.town}/${service.slug}/`} className="block group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="h-36 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1.5">{service.title} in {cityName}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
                        <span className="text-brand-600 font-medium text-sm flex items-center">Get free quotes <ArrowRight className="w-4 h-4 ml-1" /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <PricingSection cityName={cityName} />

              {/* Why Choose */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">Why {cityName} Patients Use Our Service</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Star className="w-5 h-5" />, title: 'Consistently High Ratings', desc: `Every ${cityName} provider in our network maintains exceptional patient satisfaction scores. We monitor reviews continuously and remove any clinic that falls below our standards.` },
                    { icon: <Shield className="w-5 h-5" />, title: 'Only the Top 5%', desc: `We do not list general dentists who dabble in Invisalign. Every ${cityName} provider holds Platinum or Diamond status, meaning they have the training and case volume to handle complex work.` },
                    { icon: <Clock className="w-5 h-5" />, title: 'Appointments Within Days', desc: `Most ${cityName} clinics in our network can see you within 7 days. Many offer evening and weekend slots for patients who cannot take time off during the week.` },
                    { icon: <CheckCircle className="w-5 h-5" />, title: 'Free Scan Worth Up to £300', desc: `Your free initial consultation at any ${cityName} partner clinic includes a full iTero 3D scan. This would normally cost £150 to £300 as a standalone appointment.` },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nearby Areas */}
              <NearbyAreasGrid cityName={cityName} />

              {/* FAQs */}
              <div className="mb-12"><FAQ faqs={[...FAQS_LOCATION, ...FAQS_SERVICES]} title={`Invisalign in ${cityName}: Common Questions`} /></div>

              {/* Reviews */}
              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Patients Are Saying</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Get Matched in {cityName}</h3>
                  <p className="text-gray-600 text-sm mb-6">Tell us what you need and we will connect you with up to 3 Platinum providers near {cityName}. Completely free, no strings attached.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find a Provider</button>
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: 'Consultations available this week' },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: 'Platinum and Diamond providers only' },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: 'Free iTero 3D scan included' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From £50/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available at most {cityName} clinics. Spread the cost over 12 to 60 months with nothing to pay upfront at many providers.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Check Eligibility</button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-brand-50 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-900 mb-4">Ready to Start Your Invisalign Journey in {cityName}?</h2>
            <p className="text-brand-700 mb-8 max-w-2xl mx-auto">Fill in our 60-second form and let {cityName}&apos;s top Invisalign clinics come to you. Free consultations, free 3D scans, zero obligation.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
