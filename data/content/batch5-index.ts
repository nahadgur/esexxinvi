// Batch 5 — North Essex (14 towns) + Chafford Hundred
// Add these imports into data/content/index.ts alongside batches 1–4.

import {
  halsteadContent,
  earlsColneContent,
  wivenhoeContent,
  brightlingsEaContent,
  manningtreeContent,
  mistleyContent,
  lawfordContent,
  dedhamContent,
  greatDunmowContent,
} from './north-essex-towns';

import {
  stanstedMountfitchetContent,
  thaxstedContent,
  finchingfieldContent,
  greatBardfieldContent,
  castleHedinghamContent,
  chaffordHundredContent,
} from './north-essex-rural-thurrock';

// Paste this block into the contentMap object in data/content/index.ts:
export const batch5Entries = {
  'halstead':               halsteadContent,
  'earls-colne':            earlsColneContent,
  'wivenhoe':               wivenhoeContent,
  'brightlingsea':          brightlingsEaContent,
  'manningtree':            manningtreeContent,
  'mistley':                mistleyContent,
  'lawford':                lawfordContent,
  'dedham':                 dedhamContent,
  'great-dunmow':           greatDunmowContent,
  'stansted-mountfitchet':  stanstedMountfitchetContent,
  'thaxted':                thaxstedContent,
  'finchingfield':          finchingfieldContent,
  'great-bardfield':        greatBardfieldContent,
  'castle-hedingham':       castleHedinghamContent,
  'chafford-hundred':       chaffordHundredContent,
};
