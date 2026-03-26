'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users, ArrowLeft, BookOpen } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { getTownContent, getServiceContent } from '@/data/content';
import { serviceVariants } from '@/data/content/service-variants';

export default function LocationServicePageClient({ params }: { params: { town: string; service: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.service);
  const cityName = getCityBySlug(params.town);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();

  // ── Content data lookup ──────────────────────────────────────────────────
  const townData    = getTownContent(params.town);
  const svcContent  = getServiceContent(params.town, params.service);

  // Condition body: select variant if town content exists; else fall back to variant A
  const conditionVariant = svcContent?.conditionVariant ?? 'A';
  const conditionBody = serviceVariants[params.service]?.[conditionVariant] ?? null;

  // Trust strip values — prefer content data, fall back to generic strings
  const googleRating   = townData?.clinic1?.googleRating;
  const reviewCount    = townData?.clinic1?.reviewCount;
  const clinic1Name    = townData?.clinic1?.name;
  const clinic1Tier    = townData?.clinic1?.tier ?? 'Platinum';
  const caseVolume     = townData?.clinic1?.caseVolume ?? '300+';
  const waitDays       = townData?.waitTimeDays ?? 7;

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Verified High-Tier Providers', desc: `Every ${cityName} dentist in our network completes 80 or more Invisalign cases per year. That experience shows in the results.` },
    { icon: <Clock className="w-6 h-6" />, title: `Seen Within ${waitDays} Days`, desc: `Most ${cityName} clinics offer free consultation slots within ${waitDays} days, including evenings and weekends.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Advanced Technology Included', desc: 'Every consultation includes a free iTero 3D scan and full ClinCheck digital treatment plan at no extra charge.' },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Case', desc: `We match you with ${cityName} providers who have specific experience with ${service.title.toLowerCase()}.` },
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

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Locations', href: '/locations/' },
              { label: cityName, href: `/locations/${params.town}/` },
              { label: service.title },
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> {clinic1Tier} Providers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {svcContent?.introParagraph
                    ? svcContent.introParagraph
                    : `Get matched with ${cityName}'s most experienced Invisalign providers for ${service.title.toLowerCase()}. Free consultation, free 3D scan, and up to 3 quotes at no cost.`}
                </p>
                {/* Trust strip */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {googleRating && reviewCount ? (
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-yellow-400 text-sm mb-0.5">{'★'.repeat(5)}</div>
                      <div className="font-bold text-sm">{googleRating}/5</div>
                      <div className="text-gray-400 text-xs">{reviewCount} reviews</div>
                    </div>
                  ) : (
                    <div className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-yellow-400 text-sm mb-0.5">{'★'.repeat(5)}</div>
                      <div className="font-bold text-sm">Top Rated</div>
                      <div className="text-gray-400 text-xs">{cityName} providers</div>
                    </div>
                  )}
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-brand-400 text-sm mb-0.5">🏆</div>
                    <div className="font-bold text-sm">{clinic1Tier}</div>
                    <div className="text-gray-400 text-xs">{caseVolume} cases</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-brand-400 text-sm mb-0.5">📅</div>
                    <div className="font-bold text-sm">Free Consult</div>
                    <div className="text-gray-400 text-xs">Within {waitDays} days</div>
                  </div>
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

              {/* Upward links */}
              <section className="mb-12">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/locations/${params.town}/`} className="flex items-center gap-3 flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all group">
                    <div className="bg-brand-100 p-2 rounded-lg flex-shrink-0"><MapPin className="w-4 h-4 text-brand-600" /></div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 mb-0.5">All Invisalign in</p>
                      <p className="font-semibold text-gray-900 group-hover:text-brand-700 text-sm">{cityName} Providers</p>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-brand-600 ml-auto flex-shrink-0 rotate-180 transition-colors" />
                  </Link>
                  <Link href={`/treatments/${service.slug}/`} className="flex items-center gap-3 flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all group">
                    <div className="bg-brand-100 p-2 rounded-lg flex-shrink-0"><BookOpen className="w-4 h-4 text-brand-600" /></div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 mb-0.5">Complete guide to</p>
                      <p className="font-semibold text-gray-900 group-hover:text-brand-700 text-sm">{service.title}</p>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-brand-600 ml-auto flex-shrink-0 rotate-180 transition-colors" />
                  </Link>
                </div>
              </section>

              {/* SEO Intro — localised if available */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  What to Expect From {service.title} in {cityName}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {svcContent?.introParagraph ? (
                    <p>{svcContent.introParagraph}</p>
                  ) : (
                    <>
                      <p>{service.title} is one of the most commonly requested Invisalign treatments at {cityName} clinics. Our {clinic1Tier} providers in the area have treated hundreds of similar cases and understand exactly how to plan the aligner sequence for your specific situation.</p>
                      <p>{cityName} patients benefit from access to advanced Invisalign features including SmartForce attachments, Precision Wings for bite correction, and optimised staging protocols that reduce overall treatment time.</p>
                    </>
                  )}
                </div>
              </section>

              {/* Condition explanation — variant-selected body */}
              {conditionBody && (
                <section className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    How Invisalign Treats {service.title}: What to Know Before Your Consultation
                  </h2>
                  <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                    {conditionBody.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Nearby Areas */}
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

              {/* Pricing — uses price_variance_note when available */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  How Much Does {service.title} Cost in {cityName}?
                </h2>
                {svcContent?.priceVarianceNote && (
                  <div className="mb-6 p-4 bg-amber-50 border border-amber-100 border-l-4 border-l-amber-400 rounded-xl">
                    <p className="text-gray-700 text-sm leading-relaxed">{svcContent.priceVarianceNote}</p>
                  </div>
                )}
                {townData && (
                  <div className="flex justify-between items-center mb-2 text-sm font-mono text-gray-600">
                    <span>£{townData.priceRangeLow.toLocaleString()}</span>
                    <span className="text-gray-400">{cityName} local range</span>
                    <span>£{townData.priceRangeHigh.toLocaleString()}</span>
                  </div>
                )}
                <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />
                {townData?.financeMinMonthly && (
                  <div className="mt-4 flex items-center justify-between p-4 bg-gray-900 text-white rounded-xl">
                    <div>
                      <div className="font-display font-bold">From £{townData.financeMinMonthly}/month</div>
                      <div className="text-gray-400 text-sm">0% finance available at most {cityName} clinics</div>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                      Check Eligibility
                    </button>
                  </div>
                )}
              </section>

              {/* Why Choose */}
              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {[
                    `Every ${cityName} provider we list has been independently verified as ${clinic1Tier} or Diamond tier by Align Technology`,
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

              {/* Review sentence if rating data available */}
              {googleRating && reviewCount && clinic1Name && (
                <div className="mb-12 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">{'★'.repeat(5)}</span>
                    <span className="font-semibold text-gray-900">{googleRating}/5</span>
                    <span className="text-gray-500 text-sm">across {reviewCount} patient reviews</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {clinic1Name} is among the highest-rated Invisalign providers for {service.title.toLowerCase()} in {cityName}, with a {googleRating}/5 rating across {reviewCount} verified patient reviews.
                  </p>
                </div>
              )}

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
                  {/* Sidebar upward links */}
                  <div className="mb-5 pb-5 border-b border-gray-100 space-y-2">
                    <Link href={`/locations/${params.town}/`} className="flex items-center gap-2 text-sm text-brand-700 font-medium hover:underline">
                      <ArrowLeft className="w-3.5 h-3.5" /> All treatments in {cityName}
                    </Link>
                    <Link href={`/treatments/${service.slug}/`} className="flex items-center gap-2 text-sm text-brand-700 font-medium hover:underline">
                      <ArrowLeft className="w-3.5 h-3.5" /> {service.title} — full guide
                    </Link>
                  </div>

                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Treatments in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/locations/${params.town}/${s.slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere in Essex</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => (
                      <li key={city}>
                        <Link href={`/locations/${toSlug(city)}/${service.slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {service.title} in {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">
                    {townData ? `From £${townData.financeMinMonthly}/month` : 'From £50/month'}
                  </h3>
                  <p className="text-brand-100 text-sm mb-4">
                    0% finance available at most {cityName} clinics. Spread the cost of {service.title.toLowerCase()} over 12 to 60 months.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">
                    Get Free Quotes
                  </button>
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
