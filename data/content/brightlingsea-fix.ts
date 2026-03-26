// data/content/north-essex-towns.ts — PARTIAL FIX
// Only the brightlingsEaContent export is changed here.
// Replace the entire brightlingsEaContent block in your file with this.
//
// ROOT CAUSE:
//   landmarkSecondary: 'Brightlingsea town centre and the All Saints' Church landmark',
//   ^^ Unescaped apostrophe inside single-quoted string breaks the parser.
//
// FIX: Switch the outer quotes to double-quotes so the apostrophe needs no escaping.
//   OR use a template literal.
//
// This fix file contains ONLY the corrected brightlingsEaContent export.
// Your existing import in data/content/index.ts and the other exports
// in north-essex-towns.ts are unchanged.

import type { TownContent } from './types';

export const brightlingsEaContent: TownContent = {
  townName: 'Brightlingsea',
  townSlug: 'brightlingsea',
  essexRegion: 'North Essex',
  demographicProfile: 'Coastal / Sailing / Family',
  primaryAudience: 'Brightlingsea sailing and watersports community, coastal Essex families, boat yard and marine industry workers',
  landmarkPrimary: "Brightlingsea Hard waterfront and the Royal Burnham Yacht Club quayside",
  // FIX: was single-quoted with an apostrophe in "All Saints' Church" — now double-quoted
  landmarkSecondary: "Brightlingsea town centre and the All Saints' Church landmark",
  landmarkTertiary: "Cindery Island and the Colne Estuary nature reserve",
  localKnownFor: "the only Cinque Port associate in Essex — Brightlingsea's maritime heritage stretches back to medieval times, and its active sailing community, boat yards, and the Colne Estuary's wildlife-rich salt marshes give it a distinctly nautical character that sets it apart from every other coastal town in North Essex",
  publicTransportNote: "Brightlingsea has no rail connection — the nearest station is Wivenhoe, 8 miles north-west, for Clacton branch services to Colchester and London. Most residents drive to Colchester for major clinic appointments",
  parkingNote: "Brightlingsea Hard car park and Church Road serve the waterfront clinic area, with free parking available throughout the town centre",
  nearestMajorHub: 'Colchester',
  commuteTimeMin: 22,
  commuteMode: 'Car',
  priceRangeLow: 2700,
  priceRangeHigh: 4800,
  financeMinMonthly: 50,
  waitTimeDays: 9,
  services: {
    crowded: {
      conditionVariant: 'A',
      pricePosition: 'lower-end',
      priceVarianceNote: "Crowded teeth correction for Brightlingsea patients is available at our Colchester Platinum provider — 22 minutes north via the B1029 — from £2,900 for mild cases to £4,600 for complex Comprehensive treatment. Finance from £50 per month for the Cinque Port maritime community.",
      introParagraph: "Crowded teeth correction for Brightlingsea patients draws on our Colchester Platinum provider's expertise — 22 minutes from the Colne Estuary waterfront via the B1029. Serving Essex's only Cinque Port associate and its sailing community, the clinic has free assessments within 9 days.",
    },
    gaps: {
      conditionVariant: 'A',
      pricePosition: 'lower-end',
      priceVarianceNote: "Gap closure for Brightlingsea patients at our Colchester Platinum provider runs £2,900–£3,700. Simple Express cases complete in four months — five 22-minute drives from the waterfront to Colchester.",
      introParagraph: "Gap closure for Brightlingsea patients connects the medieval Cinque Port with our Colchester Platinum provider — 22 minutes north. Simple gap cases complete in four months. Free assessments within 9 days.",
    },
    overbite: {
      conditionVariant: 'A',
      pricePosition: 'upper-end',
      priceVarianceNote: "Overbite correction for Brightlingsea patients at our Colchester Platinum provider sits at £3,800–£4,800 — upper end for Precision Wing treatment at the North Essex coastal rate.",
      introParagraph: "Overbite correction for Brightlingsea patients draws on our Colchester Platinum provider's expertise — 22 minutes from the Hard waterfront. Free overbite assessments within 9 days.",
    },
    underbite: {
      conditionVariant: 'A',
      pricePosition: 'upper-end',
      priceVarianceNote: "Underbite treatment for Brightlingsea patients at our Colchester Platinum provider is quoted at £3,400–£4,800, with a fixed cost established at the free consultation.",
      introParagraph: "Underbite correction for Brightlingsea patients is managed at our Colchester Platinum provider — 22 minutes from the Colne Estuary. Fixed cost at the free consultation. Slots within 9 days.",
    },
    crossbite: {
      conditionVariant: 'A',
      pricePosition: 'mid-range',
      priceVarianceNote: "Crossbite correction for Brightlingsea patients at our Colchester Platinum provider runs £2,900–£4,300. The B1029 route takes 22 minutes — manageable for the 6–8 week check-up schedule.",
      introParagraph: "Crossbite correction for Brightlingsea patients is available at our Colchester Platinum provider — 22 minutes north from the Cinque Port waterfront. Free assessments within 9 days.",
    },
    adults: {
      conditionVariant: 'A',
      pricePosition: 'mid-range',
      priceVarianceNote: "Adult Invisalign for Brightlingsea patients spans £2,900–£4,800 at Colchester Platinum — finance from £50 per month. The sailing community's practical approach to quality is well matched by a Platinum provider at 22 minutes via a single straightforward road.",
      introParagraph: "Adult Invisalign for Brightlingsea patients serves the Colne Estuary's proud maritime community — our Colchester Platinum provider is 22 minutes north via the B1029. Finance from £50 per month, free adult consultations within 9 days.",
    },
  },
};
