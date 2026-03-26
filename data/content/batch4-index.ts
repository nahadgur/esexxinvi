// Batch 4 — Mid Essex (17 towns)
// Add these imports into data/content/index.ts alongside batches 1–3.

import {
  withamContent,
  maldonContent,
  burnhamOnCrouchContent,
  danburyContent,
  hatfieldPeverelContent,
  tiptreeContent,
  kelvedonContent,
  coggeshallContent,
  silverEndContent,
  rivenhallContent,
} from './mid-essex-towns';

import {
  greatBaddowContent,
  galleywoodContent,
  writtleContent,
  margarerettingContent,
  stockContent,
  ingatestoneContent,
  mountnessingContent,
} from './mid-essex-chelmsford-satellites';

// Paste this block into the contentMap object in data/content/index.ts:
export const batch4Entries = {
  'witham':              withamContent,
  'maldon':              maldonContent,
  'burnham-on-crouch':   burnhamOnCrouchContent,
  'danbury':             danburyContent,
  'hatfield-peverel':    hatfieldPeverelContent,
  'tiptree':             tiptreeContent,
  'kelvedon':            kelvedonContent,
  'coggeshall':          coggeshallContent,
  'silver-end':          silverEndContent,
  'rivenhall':           rivenhallContent,
  'great-baddow':        greatBaddowContent,
  'galleywood':          galleywoodContent,
  'writtle':             writtleContent,
  'margaretting':        margarerettingContent,
  'stock':               stockContent,
  'ingatestone':         ingatestoneContent,
  'mountnessing':        mountnessingContent,
};
