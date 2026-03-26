// Batch 6 — Final batch: Tendring Coast (14 towns) + Thurrock/Havering (14 towns) = 28 towns
// This completes all 111 town slugs (109 unique towns, with coggeshall and brightlingsea
// each appearing twice in the source data — both covered by existing content files).
//
// Add these imports into data/content/index.ts alongside batches 1–5.

import {
  frintonOnSeaContent,
  waltonOnTheNazeContent,
  harwichContent,
  dovercourtContent,
  jaywikContent,
  hollandOnSeaContent,
  littleClactonContent,
  greatClactonContent,
} from './tendring-coastal';

import {
  thorpeLeSokenContent,
  kirtbyCrossContent,
  weeleyContent,
  tendringContent,
  stOsythContent,
  pointClearContent,
} from './tendring-inland';

import {
  thurrockContent,
  lakesideContent,
  ockendonContent,
  bulphanContent,
  orsettContent,
  chadwellStMaryContent,
  eastTilburyContent,
  westThurrockContent,
  UpminsterContent,
  hornchurchContent,
  romfordContent,
  haroldWoodContent,
  rainhamContent,
  dagenhamContent,
} from './thurrock-havering';

// Paste this block into the contentMap object in data/content/index.ts:
export const batch6Entries = {
  // Tendring Coast
  'frinton-on-sea':       frintonOnSeaContent,
  'walton-on-the-naze':   waltonOnTheNazeContent,
  'harwich':              harwichContent,
  'dovercourt':           dovercourtContent,
  'jaywick':              jaywikContent,
  'holland-on-sea':       hollandOnSeaContent,
  'little-clacton':       littleClactonContent,
  'great-clacton':        greatClactonContent,
  // Tendring Inland
  'thorpe-le-soken':      thorpeLeSokenContent,
  'kirby-cross':          kirtbyCrossContent,
  'weeley':               weeleyContent,
  'tendring':             tendringContent,
  'st-osyth':             stOsythContent,
  'point-clear':          pointClearContent,
  // Thurrock & Havering Border
  'thurrock':             thurrockContent,
  'lakeside':             lakesideContent,
  'ockendon':             ockendonContent,
  'bulphan':              bulphanContent,
  'orsett':               orsettContent,
  'chadwell-st-mary':     chadwellStMaryContent,
  'east-tilbury':         eastTilburyContent,
  'west-thurrock':        westThurrockContent,
  'upminster':            UpminsterContent,
  'hornchurch':           hornchurchContent,
  'romford':              romfordContent,
  'harold-wood':          haroldWoodContent,
  'rainham':              rainhamContent,
  'dagenham':             dagenhamContent,
};
