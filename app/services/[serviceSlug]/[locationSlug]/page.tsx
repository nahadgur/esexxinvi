'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Verified High-Tier Providers', desc: `Every ${cityName} dentist in our network completes 80 or more Invisalign cases per year. That experience shows in the results.` },
    { icon: <Clock className="w-6 h-6" />, title: 'Seen Within a Week', desc: `Most ${cityName} clinics offer free consultation slots within 7 days, including evenings and weekends.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Advanced Technology Included', desc: 'Every consultation includes a free iTero 3D scan and full ClinCheck digital treatment plan at no extra charge.' },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Case', desc: `We do not send you a random list. We match you with ${cityName} providers who have specific experience with your condition.` },
  ];

  const treatmentSteps = [
    `Book a free consultation at a vetted ${cityName} clinic through our matching form`,
    'Get a full 3D iTero scan of your teeth and a digital treatment simulation',
    'Review your ClinCheck plan and see exactly how your teeth will move, week by week',
    'Receive your custom aligners and begin wearing them, switching every 1 to 2 weeks',
    'Attend brief check-ups every 6 to 8 weeks until treatment is complete',
    'Get fitted with retainers to keep your results permanent',
  ];

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Split Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Treatments', href: '/services/' },
              { label: service.title, href: `/services/${service.slug}/` },
              { label: cityName }
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Platinum Providers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get matched with {cityName}&apos;s most experienced Invisalign providers for {service.title.toLowerCase()}. Free consultation, free 3D scan, and up to 3 quotes at no cost.
                </p>
                <div className="space-y-4 mb-8">
                  {[`Specialists in ${cityName} who treat this daily`, 'Compare up to 3 free quotes side by side', 'Only Platinum and Diamond tier providers listed'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <span>Highly rated by {cityName} patients</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container-width py-16">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* SEO Intro */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  What to Expect From {service.title} in {cityName}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600">
                  <p>
                    {service.title} is one of the most commonly requested Invisalign treatments at {cityName} clinics. Our Platinum providers in the area have treated hundreds of similar cases and understand exactly how to plan the aligner sequence for your specific situation. They use ClinCheck 3D software to map every millimetre of tooth movement before your first tray is even manufactured, so there are no surprises along the way.
                  </p>
                  <p>
                    {cityName} patients also benefit from access to advanced Invisalign features that are only available to high-tier providers. These include SmartForce attachments for complex tooth movements, Precision Wings for bite correction, and optimised staging protocols that reduce overall treatment time. If you have been told by a general dentist that your case is too difficult for Invisalign, it is worth getting a second opinion from one of our {cityName} specialists.
                  </p>
                </div>
              </section>

              {/* Nearby Areas - show coverage early */}
              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              {/* Treatment Steps */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How {service.title} Works in {cityName}</h2>
                <div className="space-y-4">
                  {treatmentSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              {/* Why Choose */}
              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {[
                    `Every ${cityName} provider we list has been independently verified as Platinum or Diamond tier by Align Technology`,
                    'You get a full 3D preview of your finished result before agreeing to treatment',
                    `${cityName} clinics in our network offer flexible scheduling including evenings and weekends`,
                    'Aftercare and retention planning is included in every treatment quote with no hidden extras',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              {/* Reviews */}
              <section className="mt-12 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Patients Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Treatments in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${params.locationSlug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere in Essex</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                      const slug = city.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <li key={city}>
                          <Link href={`/services/${service.slug}/${slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                            {service.title} in {city}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From £50/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available at most {cityName} clinics. Spread the cost of {service.title.toLowerCase()} over 12 to 60 months with nothing to pay upfront.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
