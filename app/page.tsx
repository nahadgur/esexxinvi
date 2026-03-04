'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users, CreditCard, Award, Zap } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topCities = ['Chelmsford', 'Southend-on-Sea', 'Colchester', 'Basildon', 'Brentwood', 'Harlow', 'Braintree', 'Clacton-on-Sea', 'Grays', 'Rayleigh', 'Billericay', 'Loughton'];

const homepageFaqs = [
  { question: "What does Invisalign treatment cost across Essex?", answer: "Most Essex clinics in our network price Invisalign between £1,500 and £5,500. Where you land in that range comes down to three things: how complex your case is, which Invisalign product your dentist recommends, and whether the clinic holds Platinum or Diamond status. Express treatment for minor cosmetic fixes sits at the lower end. Full Comprehensive for bite correction and severe crowding sits at the upper end. Nearly every Essex provider we work with offers interest-free monthly payments starting around £50, so the upfront number is rarely what you actually pay each month." },
  { question: "How quickly will I see results?", answer: "That depends entirely on what needs fixing. If you have a small gap or slight crowding in your front teeth, Invisalign Express can wrap up in 3 to 6 months. Moderate cases using Invisalign Lite typically take 6 to 12 months. Full Comprehensive treatment for complex issues like bite correction runs 12 to 18 months. Most patients notice visible changes within the first 6 to 8 weeks. Your Essex provider will show you a precise week-by-week digital timeline before you commit to anything." },
  { question: "Do clear aligners actually work as well as metal braces?", answer: "For the vast majority of adult cases, yes. Clinical research shows Invisalign delivers equivalent results for crowding, spacing, and mild to moderate bite problems. Where it gets interesting is that Platinum-tier providers now have access to features like Precision Wings and SmartForce attachments that handle complex movements previously only possible with fixed braces. The small number of cases where braces still have an edge are severe skeletal jaw discrepancies that need surgical intervention, which applies to very few adults." },
  { question: "Is the treatment painful?", answer: "Uncomfortable for a couple of days when you switch to a new tray, but nothing close to the pain of braces tightening. What you feel is a dull pressure as the aligner moves your teeth into position. It typically fades within 48 hours. Invisalign uses a patented SmartTrack material designed to apply slow, steady force rather than the abrupt mechanical pressure of wire adjustments. Most Essex patients we hear from say they rarely need pain relief beyond the first day of a new set." },
  { question: "Why should I care about my dentist's Invisalign tier?", answer: "Because experience changes everything. Align Technology ranks providers by how many cases they finish each year. A Gold provider might do 20. A Platinum provider does 80 or more. A Diamond provider does 150 or more. That is the difference between someone who occasionally fits aligners and someone who lives and breathes complex tooth movements every single day. Higher-tier providers get access to better Invisalign features, have lower refinement rates, and statistically deliver better outcomes. Every dentist in our Essex network holds Platinum or Diamond status." },
  { question: "How does your free service actually work?", answer: "We are not a clinic and we do not do any dental work. You fill in a short form telling us where you are in Essex and what treatment you are interested in. We then match you with up to 3 Platinum or Diamond providers near you. Those clinics contact you directly, usually within a couple of hours, to book a free consultation that includes a 3D iTero scan and a personalised treatment plan. You pay us nothing. The clinics pay us a referral fee only if you decide to go ahead with treatment. If you do not proceed, nobody pays anything." },
  { question: "Are there any food restrictions during treatment?", answer: "None at all. You take your aligners out to eat and drink, which means you can have whatever you want. Steak, toffee, popcorn, corn on the cob, all the things that are completely off limits with fixed braces. The only rule is to wear your trays for 20 to 22 hours a day, so you get about 2 to 4 hours for meals. Brush your teeth before putting the aligners back in and you are good to go." },
  { question: "Can I preview my finished smile before starting?", answer: "Yes, and this is one of the biggest selling points. Every consultation with our Essex providers includes a 3D scan using an iTero scanner. Your dentist feeds that scan into ClinCheck software, which generates a complete digital simulation of your treatment showing exactly how each tooth moves, week by week, from where it is now to where it will end up. You watch the animation and decide if you want to proceed. No other orthodontic system gives you that level of certainty before treatment begins." },
  { question: "Can I get Invisalign through the NHS in Essex?", answer: "Almost certainly not. NHS orthodontics is restricted to under-18s with clinically severe problems, and even then the treatment is usually metal braces. Adult Invisalign is private. But the reality is that with 0% finance options available at most Essex clinics, the monthly cost is often comparable to a gym membership. Full treatment through our network starts around £3,500, and many patients pay £50 to £80 per month spread over 12 to 60 months." },
  { question: "How many check-up appointments will I need?", answer: "Far fewer than with braces. Most Invisalign patients see their provider every 6 to 8 weeks, and each appointment is usually 15 to 20 minutes. There are no wires to tighten. Your dentist simply checks that your teeth are tracking correctly, hands you your next few sets of aligners, and sends you on your way. For busy Essex commuters and professionals, this is a major practical advantage over braces, which typically demand monthly visits for adjustments." },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Essex's Most Experienced Invisalign Dentists, Compared"
          subtitle="We vet every provider so you do not have to. Get matched with Platinum and Diamond Invisalign specialists near you. Free consultation, free 3D scan, zero cost to use our service."
          image="https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* What Is Invisalign */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">Clear Aligners That Straighten Teeth Without the Metal</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Invisalign replaces traditional brackets and wires with a series of custom-moulded, nearly invisible plastic trays. Each set is worn for one to two weeks before swapping to the next, gradually shifting your teeth into the correct position. You remove them to eat, drink, and brush, then pop them back in.
                </p>
                <p>
                  Before treatment begins, your dentist takes a full 3D scan of your mouth using an iTero scanner. That scan feeds into ClinCheck software, which maps out every tooth movement from day one to the final result. You watch an animated preview of your smile transformation before agreeing to anything. No guesswork, no surprises.
                </p>
                <p>
                  Align Technology, the company behind Invisalign, has treated over 14 million patients worldwide since 1997 and holds over 900 patents on the materials and attachment designs used in every set of trays. It is the most clinically studied clear aligner system on the market. Essex is also home to some of the most experienced providers in the South East.
                </p>
                <p>
                  Here is the part most people do not realise: <strong>not all Invisalign dentists are equal</strong>. Align Technology ranks providers into tiers based on how many cases they complete each year. The difference between a dentist who does 10 cases annually and one who does 150 is enormous in planning skill, in troubleshooting ability, and in the final result you walk away with. We only list Platinum and Diamond providers because the gap in quality is too significant to ignore.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { tier: 'Diamond', cases: '150+ cases/year', desc: 'Treats multiple patients daily. Access to every advanced Invisalign feature and priority technical support.', listed: true },
                  { tier: 'Platinum', cases: '80+ cases/year', desc: 'Routinely handles complex cases including deep bites, severe crowding, and full arch corrections.', listed: true },
                  { tier: 'Gold', cases: '20+ cases/year', desc: 'Limited complex case experience. Not included in our Essex network.', listed: false },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${item.listed ? 'bg-brand-50 border-brand-100' : 'bg-gray-50 border-gray-200 opacity-50'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 text-sm">{item.tier}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.listed ? 'bg-brand-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                        {item.listed ? 'In Network' : 'Not Listed'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{item.cases}</div>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
                <div className="bg-gray-900 text-white p-5 rounded-xl mt-2">
                  <div className="text-sm font-bold mb-1">Why does tier matter?</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    A higher tier means more hands-on experience with difficult cases, access to advanced features like Precision Wings and mandibular advancement, lower refinement rates, and consistently better patient outcomes. We do the vetting so you get the top 5% without having to research it yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Invisalign */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Six Reasons Essex Patients Pick Invisalign Over Fixed Braces</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Adult orthodontics has exploded across the South East, and clear aligners are driving most of that growth. The appeal is simple: Invisalign delivers the same clinical results as braces for most cases, without the lifestyle compromise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <CheckCircle className="w-6 h-6 text-brand-500" />, title: 'Nobody Can Tell', desc: 'SmartTrack trays are clear, thin, and custom-fitted to your teeth. Colleagues, clients, and friends will not notice them during normal conversation. Perfect if your job means being in front of people all day.' },
                { icon: <Users className="w-6 h-6 text-brand-500" />, title: 'Eat Whatever You Want', desc: 'Pop the trays out for meals and eat normally. No avoiding hard foods, no getting lettuce stuck in wires, no banned-food lists. Braces patients spend 12 to 24 months skipping half the menu. You do not.' },
                { icon: <Shield className="w-6 h-6 text-brand-500" />, title: 'Far Less Discomfort', desc: 'No metal edges cutting your cheeks, no wire poking your gums at 2am. SmartTrack applies a gentle, calibrated force that most patients describe as mild pressure for the first day or two of each new tray.' },
                { icon: <Sparkles className="w-6 h-6 text-brand-500" />, title: 'See the End Result Before You Start', desc: 'ClinCheck generates a 3D animation of your entire treatment. You see every tooth moving into position, week by week, and know exactly what your smile will look like before a single tray is manufactured.' },
                { icon: <Calendar className="w-6 h-6 text-brand-500" />, title: 'Some Cases Finish in 3 Months', desc: 'Minor cosmetic corrections can be done with Invisalign Express in as little as 3 months. Moderate cases take 6 to 12. Even complex full treatment averages 12 to 18 months, which is roughly half the time of traditional braces.' },
                { icon: <Globe className="w-6 h-6 text-brand-500" />, title: 'Your Teeth Stay Healthier', desc: 'Braces create dozens of food traps that lead to white spots, cavities, and swollen gums. With Invisalign you remove the trays and brush normally, so your oral health stays on track throughout treatment.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">What Essex Patients Actually Pay for Invisalign</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Every case is different, but these are the price ranges you will see from Platinum and Diamond clinics across Essex. As a South East county, prices sit in the mid-to-upper range nationally. The quality of provider you get through our network justifies every penny.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-brand-50 text-left">
                    <th className="px-5 py-3 font-bold text-gray-900">Treatment Type</th>
                    <th className="px-5 py-3 font-bold text-gray-900">Price (GBP)</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden md:table-cell">Duration</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden lg:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr key={tier.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-4 font-bold text-gray-900">{tier.treatment}</td>
                      <td className="px-5 py-4"><span className="font-bold text-brand-600">£{tier.priceFrom.toLocaleString()} to £{tier.priceTo.toLocaleString()}</span></td>
                      <td className="px-5 py-4 text-gray-700 hidden md:table-cell">{tier.typicalDuration}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs hidden lg:table-cell">{tier.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Every Quote Includes</h3>
                <ul className="space-y-2">
                  {treatmentIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-brand-600" />
                  <h3 className="font-bold text-gray-900 text-sm">Spread the Cost at 0% Interest</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{financeInfo.description}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="text-xl font-display font-bold text-brand-600">From £{financeInfo.monthlyFrom}/month</div>
                  <span className="text-xs text-gray-500">Over {financeInfo.spreadOver} at 0% APR</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              Yes, a Platinum provider may cost slightly more than the general dentist down the road. But their experience means fewer correction rounds, fewer surprises, and a better end result. Most patients find the marginally higher fee saves them money overall because treatment finishes faster and needs fewer adjustments. Our service is free, so compare up to 3 quotes and decide for yourself.
            </p>
          </div>
        </section>

        {/* Conditions / Treatments */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What Can Invisalign Actually Fix?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                More than most people think. Our Essex Platinum providers use advanced attachments and staging techniques to treat cases that were braces-only territory just a few years ago. Pick a condition below to find local specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <article key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <Link href={`/services/${service.slug}/`} className="block h-44 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <Link href={`/services/${service.slug}/`}>
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-1.5 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-2 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                      <Link href={`/services/${service.slug}/`} className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                        Find providers <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button onClick={() => setIsModalOpen(true)} className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors">
                        Get 3 Quotes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">From Form to Free Consultation in Under 2 Hours</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are not a dental practice. We are a free matching service that connects Essex patients with the right Invisalign specialist for their case. No fees, no obligation, no hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { step: 1, title: "Tell Us What You Need", desc: "Fill in a 60-second form with your Essex location and what you want to fix. No account required. We only share your details with clinics we match you with." },
                { step: 2, title: "We Shortlist Your Best Options", desc: "We filter our network of Platinum and Diamond Essex providers by case type, distance, availability, and patient ratings. You get the best 2 to 3 matches, not a random list." },
                { step: 3, title: "Clinics Reach Out With Free Quotes", desc: "Matched providers contact you within hours to arrange a free consultation. Every consultation includes an iTero 3D scan and a personalised treatment plan, all at no cost to you." },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                    <span className="text-2xl font-display font-bold text-brand-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">Why this service exists</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Any high-street dentist can call themselves an Invisalign provider after a weekend course. The problem is that your result depends almost entirely on how many complex cases that dentist has actually completed. Researching provider tiers, reading reviews, and comparing quotes across multiple clinics takes hours. We have already done that work for every provider in our Essex network.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We cover clinics from Saffron Walden down to Southend, from Harlow across to Clacton. The service costs you nothing. We earn a referral fee from the clinic only if you choose to go ahead with treatment, so if you decide it is not for you, nobody pays a thing.
                  </p>
                </div>
                <div className="text-center">
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">Get Your Free Quotes</button>
                  <p className="text-xs text-gray-500 mt-2">100% free · No obligation · 60 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invisalign vs Braces */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">Invisalign vs Metal Braces: The Honest Comparison</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Both systems straighten teeth. The difference is how they fit into your life while they do it. For the majority of adult cases, Invisalign matches or beats braces on clinical outcomes with none of the lifestyle trade-offs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-brand-100">
                <h3 className="font-display font-bold text-brand-600 text-lg mb-4">Invisalign Clear Aligners</h3>
                <ul className="space-y-2.5">
                  {['Nearly invisible, most people will not notice', 'Remove to eat, drink, brush, and floss', 'No metal in your mouth at all', 'Check-ups every 6 to 8 weeks only', 'Full 3D preview of your result before starting', 'Typical treatment 6 to 18 months', 'Smooth medical-grade plastic, no sharp edges', 'From £1,500 to £5,500 across Essex'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-display font-bold text-gray-400 text-lg mb-4">Traditional Metal Braces</h3>
                <ul className="space-y-2.5">
                  {['Visible metal brackets and wires', 'Fixed in place for the entire treatment', 'Long list of banned foods', 'Monthly adjustment appointments required', 'No way to visualise the end result', 'Typical treatment 18 to 36 months', 'Brackets and wires cause sores and irritation', 'From £1,500 to £6,000'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              The deciding factor is always provider experience. A Platinum specialist who has planned and managed hundreds of Invisalign cases will outperform a generalist with either system. The narrow set of cases where braces genuinely win, specifically severe skeletal jaw discrepancies requiring surgery, affects a very small percentage of adults. For everyone else, Invisalign treated by an experienced provider is the stronger option.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">Straight From Essex Patients</h2>
                <p className="text-gray-600">Real experiences from people who used our free matching service to find their Invisalign provider.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary whitespace-nowrap self-start md:self-auto">Get Matched Free</button>
            </div>
            <Testimonials limit={5} />
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">Find Invisalign Providers in Your Part of Essex</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              We cover every major town and surrounding area in the county. Each location page shows which treatments are available, what local patients pay, and how to book a free consultation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {topCities.map(city => (
                <Link key={city} href={`/location/${toSlug(city)}/`} className="group flex items-center gap-3 bg-white hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-4 transition-all">
                  <div className="w-9 h-9 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-gray-900 group-hover:text-brand-700 text-sm block">Invisalign {city}</span>
                    <span className="text-[11px] text-gray-500">Providers and prices</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/location/" className="text-brand-600 font-semibold text-sm hover:underline">Browse all Essex locations →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Your Invisalign Questions, Answered" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container-width text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Your Perfect Smile Starts With the Right Provider</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Fill in our 60-second form and let Essex&apos;s top Invisalign clinics come to you. Free quotes, free consultations, free 3D scans. No strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-10 !py-4">Compare Providers Free</button>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-lg !px-10 !py-4">
                Browse Treatments
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {['Always 100% free', 'Platinum and Diamond only', 'Free 3D scan included'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
