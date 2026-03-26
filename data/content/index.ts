import type { TownContent } from './types';

// ── Batch 1: Essex major towns ─────────────────────────────────────────────
import { chelmsfordContent } from './chelmsford';
import { southendOnSeaContent } from './southend-on-sea';
import { colchesterContent } from './colchester';
import { basildonContent } from './basildon';
import { brentwoodContent } from './brentwood';
import { harlowContent } from './harlow';
import { braintreeContent } from './braintree';
import { clactonOnSeaContent } from './clacton-on-sea';
import { graysContent } from './grays';
import {
  rayleighContent, billericayContent, wickfordContent,
  loughtonContent, eppingContent, saffronWaldenContent,
} from './remaining-major-towns';

// ── Batch 2: South Essex ───────────────────────────────────────────────────
import {
  canveyIslandContent, benfleetContent, hadleighContent,
  thundersleyContent, leighOnSeaContent,
} from './south-essex-coastal';
import {
  westcliffOnSeaContent, shoeburynessContent, rochfordContent,
  hockleyContent, rawrethContent,
} from './south-essex-inner';
import {
  pitseaContent, laindonContent, langdonHillsContent,
  stanfordLeHopeContent, corringhamContent, tilburyContent,
  purfleetContent, southOckendonContent, aveleyContent,
  horndonOnTheHillContent,
} from './south-essex-thurrock';

// ── Batch 3: West Essex ────────────────────────────────────────────────────
import {
  buckhillContent, chigwellContent, woodfordContent,
  walthamAbbeyContent, cheshuntContent,
} from './west-essex-london-fringe';
import {
  nazeingContent, roydonContent, ongarContent,
  northWealdBassettContent, theydonBoisContent, abridgeContent,
  staplefordAbbottsContent, debdenContent, coopersaleContent,
} from './west-essex-rural';

// ── Batch 4: Mid Essex ─────────────────────────────────────────────────────
import {
  withamContent, maldonContent, burnhamOnCrouchContent,
  danburyContent, hatfieldPeverelContent, tiptreeContent,
  kelvedonContent, coggeshallContent, silverEndContent, rivenhallContent,
} from './mid-essex-towns';
import {
  greatBaddowContent, galleywoodContent, writtleContent,
  margarerettingContent, stockContent, ingatestoneContent,
  mountnessingContent,
} from './mid-essex-chelmsford-satellites';

// ── Batch 5: North Essex ───────────────────────────────────────────────────
import {
  halsteadContent, earlsColneContent, wivenhoeContent,
  brightlingsEaContent, manningtreeContent, mistleyContent,
  lawfordContent, dedhamContent, greatDunmowContent,
} from './north-essex-towns';
import {
  stanstedMountfitchetContent, thaxstedContent, finchingfieldContent,
  greatBardfieldContent, castleHedinghamContent, chaffordHundredContent,
} from './north-essex-rural-thurrock';

// ── Batch 6: Tendring + Thurrock/Havering ─────────────────────────────────
import {
  frintonOnSeaContent, waltonOnTheNazeContent, harwichContent,
  dovercourtContent, jaywikContent, hollandOnSeaContent,
  littleClactonContent, greatClactonContent,
} from './tendring-coastal';
import {
  thorpeLeSokenContent, kirtbyCrossContent, weeleyContent,
  tendringContent, stOsythContent, pointClearContent,
} from './tendring-inland';
import {
  thurrockContent, lakesideContent, ockendonContent,
  bulphanContent, orsettContent, chadwellStMaryContent,
  eastTilburyContent, westThurrockContent, UpminsterContent,
  hornchurchContent, romfordContent, haroldWoodContent,
  rainhamContent, dagenhamContent,
} from './thurrock-havering';

// ── Complete content map — 109 unique town files covering all 111 slugs ────
const contentMap: Record<string, TownContent> = {
  // Batch 1
  'chelmsford':           chelmsfordContent,
  'southend-on-sea':      southendOnSeaContent,
  'colchester':           colchesterContent,
  'basildon':             basildonContent,
  'brentwood':            brentwoodContent,
  'harlow':               harlowContent,
  'braintree':            braintreeContent,
  'clacton-on-sea':       clactonOnSeaContent,
  'grays':                graysContent,
  'rayleigh':             rayleighContent,
  'billericay':           billericayContent,
  'wickford':             wickfordContent,
  'loughton':             loughtonContent,
  'epping':               eppingContent,
  'saffron-walden':       saffronWaldenContent,
  // Batch 2
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
  // Batch 3
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
  // Batch 4
  'witham':               withamContent,
  'maldon':               maldonContent,
  'burnham-on-crouch':    burnhamOnCrouchContent,
  'danbury':              danburyContent,
  'hatfield-peverel':     hatfieldPeverelContent,
  'tiptree':              tiptreeContent,
  'kelvedon':             kelvedonContent,
  'coggeshall':           coggeshallContent,
  'silver-end':           silverEndContent,
  'rivenhall':            rivenhallContent,
  'great-baddow':         greatBaddowContent,
  'galleywood':           galleywoodContent,
  'writtle':              writtleContent,
  'margaretting':         margarerettingContent,
  'stock':                stockContent,
  'ingatestone':          ingatestoneContent,
  'mountnessing':         mountnessingContent,
  // Batch 5
  'halstead':             halsteadContent,
  'earls-colne':          earlsColneContent,
  'wivenhoe':             wivenhoeContent,
  'brightlingsea':        brightlingsEaContent,
  'manningtree':          manningtreeContent,
  'mistley':              mistleyContent,
  'lawford':              lawfordContent,
  'dedham':               dedhamContent,
  'great-dunmow':         greatDunmowContent,
  'stansted-mountfitchet':stanstedMountfitchetContent,
  'thaxted':              thaxstedContent,
  'finchingfield':        finchingfieldContent,
  'great-bardfield':      greatBardfieldContent,
  'castle-hedingham':     castleHedinghamContent,
  'chafford-hundred':     chaffordHundredContent,
  // Batch 6
  'frinton-on-sea':       frintonOnSeaContent,
  'walton-on-the-naze':   waltonOnTheNazeContent,
  'harwich':              harwichContent,
  'dovercourt':           dovercourtContent,
  'jaywick':              jaywikContent,
  'holland-on-sea':       hollandOnSeaContent,
  'little-clacton':       littleClactonContent,
  'great-clacton':        greatClactonContent,
  'thorpe-le-soken':      thorpeLeSokenContent,
  'kirby-cross':          kirtbyCrossContent,
  'weeley':               weeleyContent,
  'tendring':             tendringContent,
  'st-osyth':             stOsythContent,
  'point-clear':          pointClearContent,
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

export function getTownContent(townSlug: string): TownContent | undefined {
  return contentMap[townSlug];
}

export function getServiceContent(
  townSlug: string,
  serviceSlug: string
): TownContent['services'][keyof TownContent['services']] | undefined {
  const town = getTownContent(townSlug);
  if (!town) return undefined;
  return town.services[serviceSlug as keyof typeof town.services];
}

export type { TownContent };
export { contentMap };
