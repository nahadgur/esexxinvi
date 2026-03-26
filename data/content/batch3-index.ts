// Batch 3 — West Essex (15 towns)
// Add these imports into data/content/index.ts alongside batches 1 and 2.

import {
  buckhillContent,
  chigwellContent,
  woodfordContent,
  walthamAbbeyContent,
  cheshuntContent,
} from './west-essex-london-fringe';

import {
  nazeingContent,
  roydonContent,
  ongarContent,
  northWealdBassettContent,
  theydonBoisContent,
  abridgeContent,
  staplefordAbbottsContent,
  debdenContent,
  coopersaleContent,
} from './west-essex-rural';

// Paste this block into the contentMap object in data/content/index.ts:
export const batch3Entries = {
  'buckhurst-hill':       buckhillContent,
  'chigwell':             chigwellContent,
  'woodford':             woodfordContent,
  'waltham-abbey':        walthamAbbeyContent,
  'cheshunt':             cheshuntContent,
  'nazeing':              nazeingContent,
  'roydon':               roydonContent,
  'ongar':                ongarContent,
  'north-weald-bassett':  northWealdBassettContent,
  'theydon-bois':         theydonBoisContent,
  'abridge':              abridgeContent,
  'stapleford-abbotts':   staplefordAbbottsContent,
  'debden':               debdenContent,
  'coopersale':           coopersaleContent,
};
