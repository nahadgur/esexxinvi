// data/content/faq-templates.ts
// FAQ framework for invisaligndentistsessex.uk
// 666 static pages — 111 Essex towns × 6 Invisalign treatments

export interface FaqVariables {
  // Location
  townName: string;
  essexRegion: string;
  nearestMajorHub: string;
  commuteTimeMin: number;
  commuteMode: string;

  // Logistics
  waitTimeDays: number;

  // Finance
  financeMinMonthly: number;
  priceRangeLow: number;
  priceRangeHigh: number;
  priceVarianceNote: string; // inserted verbatim into FAQ 1

  // Clinic (optional — Branch A only)
  clinic1Name?: string;
  clinic1Tier?: string;             // e.g. "Platinum", "Diamond"
  clinic1GoogleRating?: number;     // e.g. 4.9
  clinic1ReviewCount?: number;      // e.g. 312
  clinic1CaseVolume?: string;       // e.g. "400+"

  // Treatment
  treatmentFullName: string;        // e.g. "Invisalign for crowded teeth"
  treatmentShortName: string;       // e.g. "Invisalign Lite"
  siteBaseUrl: string;              // e.g. "https://invisaligndentistsessex.uk"
}

export interface RenderedFaq {
  question: string;
  answer: string;
}

// ---------------------------------------------------------------------------
// Duration map keyed by service slug
// ---------------------------------------------------------------------------

const durationMap: Record<string, { range: string; detail: string }> = {
  crowded: {
    range: "6–18 months",
    detail:
      "Crowding correction typically takes 6–18 months depending on severity. " +
      "Your dentist will scan your teeth digitally, send the data to Invisalign's ClinCheck lab, " +
      "and you'll receive your first set of aligners within 4–6 weeks. " +
      "You'll swap to a new tray every 1–2 weeks and attend check-ups roughly every 6–8 weeks.",
  },
  gaps: {
    range: "6–12 months",
    detail:
      "Closing gaps (diastemas) usually takes 6–12 months. " +
      "After an initial 3D scan, your aligners are custom-fabricated and delivered within 4–6 weeks. " +
      "Trays are changed every 1–2 weeks; most patients need fewer aligners than crowding cases " +
      "and attend fewer in-person reviews.",
  },
  overbite: {
    range: "12–24 months",
    detail:
      "Deep overbite correction is one of the more complex Invisalign applications and typically takes 12–24 months. " +
      "Precision bite-ramp attachments bonded to your teeth help intrude the lower incisors over time. " +
      "Expect check-ups every 6–8 weeks and a possible refinement phase in the final 3 months.",
  },
  underbite: {
    range: "18–30 months",
    detail:
      "Underbite cases treated with Invisalign typically require 18–30 months and are accepted only by providers " +
      "with a Platinum tier or above. After scanning, your ClinCheck simulation will show the predicted tooth " +
      "movement stage by stage. Elastics worn alongside your aligners help reposition the jaw relationship " +
      "over the treatment period.",
  },
  crossbite: {
    range: "12–24 months",
    detail:
      "Crossbite correction generally takes 12–24 months. Attachments are placed on specific teeth to allow " +
      "the controlled torque movements needed. Your dentist will monitor expansion carefully at each review " +
      "appointment, usually every 6–8 weeks, to avoid any unwanted gum recession.",
  },
  adults: {
    range: "12–18 months",
    detail:
      "Full-arch adult treatment typically runs 12–18 months. " +
      "The process opens with a digital scan and ClinCheck preview, followed by aligner fabrication " +
      "taking 4–6 weeks. Trays are swapped every 1–2 weeks and in-person visits are needed every 6–8 weeks. " +
      "A retainer phase follows active treatment to maintain your result.",
  },
};

function getServiceSlug(treatmentFullName: string): string {
  const name = treatmentFullName.toLowerCase();
  if (name.includes("crowd")) return "crowded";
  if (name.includes("gap")) return "gaps";
  if (name.includes("overbite")) return "overbite";
  if (name.includes("underbite")) return "underbite";
  if (name.includes("crossbite")) return "crossbite";
  return "adults";
}

// ---------------------------------------------------------------------------
// FAQ 1 — Commercial intent: cost
// ---------------------------------------------------------------------------

export function renderFaq1(v: FaqVariables): RenderedFaq {
  const question = `How much does ${v.treatmentFullName} cost in ${v.townName}?`;

  const answer =
    `${v.priceVarianceNote} ` +
    `Spread over a typical course, this works out from £${v.financeMinMonthly} per month with 0% finance options, ` +
    `making treatment accessible without a large upfront payment. ` +
    `Every provider listed on this site offers a free consultation, so you can get an accurate, ` +
    `no-obligation quote based on your specific case before committing to anything.`;

  return { question, answer };
}

// ---------------------------------------------------------------------------
// FAQ 2 — Provider trust: qualifications
// ---------------------------------------------------------------------------

export function renderFaq2(v: FaqVariables): RenderedFaq {
  const question = `How do I know the Invisalign providers listed for ${v.townName} are qualified?`;

  const branchAReady =
    v.clinic1Name &&
    v.clinic1Tier &&
    v.clinic1GoogleRating !== undefined &&
    v.clinic1ReviewCount !== undefined;

  let answer: string;

  if (branchAReady) {
    const volumeNote =
      v.clinic1CaseVolume !== undefined
        ? ` and has completed over ${v.clinic1CaseVolume} Invisalign cases`
        : "";
    answer =
      `All providers listed on invisaligndentistsessex.uk are verified Invisalign-certified dentists operating ` +
      `under GDC registration. For ${v.townName}, one featured clinic is ${v.clinic1Name!}, ` +
      `an Invisalign ${v.clinic1Tier!} Provider — a tier awarded only to practices that treat a high volume ` +
      `of cases per year${volumeNote}. ` +
      `${v.clinic1Name!} holds a Google rating of ${v.clinic1GoogleRating!.toFixed(1)} from ${v.clinic1ReviewCount!.toLocaleString()} patient reviews, ` +
      `reflecting consistent clinical outcomes and patient satisfaction. ` +
      `Each provider has also agreed to our patient-protection standards, including transparent pricing ` +
      `and a free initial consultation.`;
  } else {
    answer =
      `All providers listed on invisaligndentistsessex.uk are verified Invisalign-certified dentists operating ` +
      `under GDC registration. While ${v.townName} itself has a developing provider network, ` +
      `patients are within ${v.commuteTimeMin} minutes by ${v.commuteMode} of ${v.nearestMajorHub}, ` +
      `where several clinics hold Platinum (150+ cases per year) or Diamond (300+ cases per year) status — ` +
      `the highest tiers in Invisalign's provider programme. ` +
      `Every listed clinic has agreed to transparent pricing and offers a free consultation ` +
      `so you can assess suitability before committing.`;
  }

  return { question, answer };
}

// ---------------------------------------------------------------------------
// FAQ 3 — Logistical: duration and process
// ---------------------------------------------------------------------------

export function renderFaq3(v: FaqVariables): RenderedFaq {
  const question = `How long does ${v.treatmentFullName} take, and what does the process look like in ${v.townName}?`;

  const slug = getServiceSlug(v.treatmentFullName);
  const duration = durationMap[slug] ?? durationMap["adults"];

  const answer =
    `${v.treatmentFullName} typically takes ${duration.range}. ` +
    `${duration.detail} ` +
    `If you're starting from ${v.townName}, current wait times for an initial consultation with a listed ` +
    `provider are approximately ${v.waitTimeDays} days — ` +
    `so you could realistically begin treatment within a fortnight of your first enquiry.`;

  return { question, answer };
}

// ---------------------------------------------------------------------------
// buildFaqPageSchema — FAQPage JSON-LD
// ---------------------------------------------------------------------------

export function buildFaqPageSchema(v: FaqVariables): object {
  const faqs = buildPageFaqs(v);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// buildPageFaqs — returns all 3 RenderedFaq for UI component consumption
// ---------------------------------------------------------------------------

export function buildPageFaqs(v: FaqVariables): RenderedFaq[] {
  return [renderFaq1(v), renderFaq2(v), renderFaq3(v)];
}
