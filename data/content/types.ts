export type ServiceSlug = 'crowded' | 'gaps' | 'overbite' | 'underbite' | 'crossbite' | 'adults';
export type ConditionVariant = 'A' | 'B' | 'C';
export type PricePosition = 'lower-end' | 'mid-range' | 'upper-end';
export type ClinicTier = 'Platinum' | 'Diamond';

export interface TownServiceContent {
  // Two-sentence lead paragraph. Sentence 1: treatment framing.
  // Sentence 2: landmark anchor (rotated per service) + wait time CTA.
  introParagraph: string;
  // Which of the 3 condition body variants this town uses for this service.
  // Variant is selected once per town and held constant across all 6 services
  // so the medical framing angle is consistent within a town silo.
  conditionVariant: ConditionVariant;
  // Treatment-specific pricing note — injected verbatim into PricingSection.
  // Must differ across all 6 services for the same town.
  priceVarianceNote: string;
  // Position of this treatment within the town price band.
  pricePosition: PricePosition;
}

export interface TownClinic {
  name: string;
  slug: string;
  tier: ClinicTier;
  address: string;
  googleRating?: number;
  reviewCount?: number;
  caseVolume?: string;
  phone?: string;
}

export interface TownContent {
  townName: string;
  townSlug: string;
  essexRegion: string;
  demographicProfile: string;
  primaryAudience: string;
  landmarkPrimary: string;
  landmarkSecondary: string;
  landmarkTertiary?: string;
  localKnownFor: string;
  publicTransportNote: string;
  parkingNote: string;
  nearestMajorHub: string;
  commuteTimeMin: number;
  commuteMode: string;
  priceRangeLow: number;
  priceRangeHigh: number;
  financeMinMonthly: number;
  waitTimeDays: number;
  clinic1?: TownClinic;
  clinic2?: TownClinic;
  // Six service content blocks keyed by service slug
  services: Record<ServiceSlug, TownServiceContent>;
}
