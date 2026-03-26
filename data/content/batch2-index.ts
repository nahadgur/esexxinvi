// Batch 2 — South Essex (20 towns)
// Add these imports into data/content/index.ts alongside the batch 1 imports.

import {
  canveyIslandContent,
  benfleetContent,
  hadleighContent,
  thundersleyContent,
  leighOnSeaContent,
} from './south-essex-coastal';

import {
  westcliffOnSeaContent,
  shoeburynessContent,
  rochfordContent,
  hockleyContent,
  rawrethContent,
} from './south-essex-inner';

import {
  pitseaContent,
  laindonContent,
  langdonHillsContent,
  stanfordLeHopeContent,
  corringhamContent,
  tilburyContent,
  purfleetContent,
  southOckendonContent,
  aveleyContent,
  horndonOnTheHillContent,
} from './south-essex-thurrock';

// Paste this block into the contentMap object in data/content/index.ts:
export const batch2Entries = {
  'canvey-island':        canveyIslandContent,
  'benfleet':             benfleetContent,
  'hadleigh':             hadleighContent,
  'thundersley':          thundersleyContent,
  'leigh-on-sea':         leighOnSeaContent,
  'westcliff-on-sea':     westcliffOnSeaContent,
  'shoeburyness':         shoeburynessContent,
  'rochford':             rochfordContent,
  'hockley':              hockleyContent,
  'rawreth':              rawrethContent,
  'pitsea':               pitseaContent,
  'laindon':              laindonContent,
  'langdon-hills':        langdonHillsContent,
  'stanford-le-hope':     stanfordLeHopeContent,
  'corringham':           corringhamContent,
  'tilbury':              tilburyContent,
  'purfleet':             purfleetContent,
  'south-ockendon':       southOckendonContent,
  'aveley':               aveleyContent,
  'horndon-on-the-hill':  horndonOnTheHillContent,
};
