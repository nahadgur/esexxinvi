// app/locations/[town]/[service]/DynamicFaqItem.tsx
'use client';

// ============================================================================
// HOW TO WIRE THIS INTO PageClient.tsx
// ============================================================================
//
// ── 1. Imports ───────────────────────────────────────────────────────────────
//
//   import DynamicFaqItem from '@/app/locations/[town]/[service]/DynamicFaqItem';
//   import { buildPageFaqs, type FaqVariables } from '@/data/content/faq-templates';
//
// ── 2. Construct faqVars inside your component (after townData / svcContent  ──
//       are resolved from props/context) ────────────────────────────────────
//
//   const clinic1 = townData.clinics?.[0];
//
//   const priceRangeLow: number =
//     townData.priceRangeLow ?? svcContent.priceRangeLow ?? 1500;
//   const priceRangeHigh: number =
//     townData.priceRangeHigh ?? svcContent.priceRangeHigh ?? 5500;
//
//   const faqVars: FaqVariables = {
//     // Location
//     townName:         townData.cityName,
//     essexRegion:      townData.essexRegion      ?? 'Essex',
//     nearestMajorHub:  townData.nearestMajorHub  ?? 'Chelmsford',
//     commuteTimeMin:   townData.commuteTimeMin   ?? 20,
//     commuteMode:      townData.commuteMode      ?? 'train',
//
//     // Logistics
//     waitTimeDays:     townData.waitTimeDays     ?? 7,
//
//     // Finance
//     financeMinMonthly: townData.financeMinMonthly ?? 49,
//     priceRangeLow,
//     priceRangeHigh,
//     priceVarianceNote:
//       townData.priceVarianceNote ??
//       svcContent.priceVarianceNote ??
//       `${svcContent.title} in ${townData.cityName} is typically quoted between £${priceRangeLow} and £${priceRangeHigh} depending on case complexity. Your provider will confirm a fixed cost at the free initial consultation.`,
//
//     // Clinic — optional Branch A fields
//     ...(clinic1?.name           && { clinic1Name:          clinic1.name }),
//     ...(clinic1?.tier           && { clinic1Tier:          clinic1.tier }),
//     ...(clinic1?.googleRating  !== undefined && { clinic1GoogleRating:  clinic1.googleRating }),
//     ...(clinic1?.reviewCount   !== undefined && { clinic1ReviewCount:   clinic1.reviewCount }),
//     ...(clinic1?.caseVolume    !== undefined && { clinic1CaseVolume:    clinic1.caseVolume }),
//
//     // Treatment
//     treatmentFullName:  svcContent.fullName  ?? svcContent.title,
//     treatmentShortName: svcContent.shortName ?? svcContent.title,
//     siteBaseUrl: 'https://invisaligndentistsessex.uk',
//   };
//
// ── 3. Build the dynamic FAQs ────────────────────────────────────────────────
//
//   const dynamicFaqs = buildPageFaqs(faqVars);
//   // Returns RenderedFaq[] — 3 items: cost · qualifications · duration
//
// ── 4. JSX replacement block ─────────────────────────────────────────────────
//
//   Replace your existing static FAQ list (e.g. service.faqs.map(...)) with:
//
//   <div className="space-y-3">
//     {/* Dynamic FAQs — cost, provider trust, duration/process */}
//     {dynamicFaqs.map((faq, i) => (
//       <DynamicFaqItem
//         key={`dynamic-faq-${i}`}
//         question={faq.question}
//         answer={faq.answer}
//       />
//     ))}
//
//     {/* Static FAQs from service data — appended after dynamic FAQs */}
//     {service.faqs?.map((faq, i) => (
//       <DynamicFaqItem
//         key={`static-faq-${i}`}
//         question={faq.question}
//         answer={faq.answer}
//       />
//     ))}
//   </div>
//
// ============================================================================

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DynamicFaqItemProps {
  question: string;
  answer: string;
}

export default function DynamicFaqItem({ question, answer }: DynamicFaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
      >
        <span className="text-sm font-medium text-gray-900 leading-snug">
          {question}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <div
        role="region"
        hidden={!isOpen}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-5 pt-1 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
