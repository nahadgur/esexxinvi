import type { TownContent } from './types';
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
  rayleighContent,
  billericayContent,
  wickfordContent,
  loughtonContent,
  eppingContent,
  saffronWaldenContent,
} from './remaining-major-towns';

// Content map — keyed by town slug matching LOCATIONS in data/locations.ts.
// Add each new batch here as it is generated.
const contentMap: Record<string, TownContent> = {
  chelmsford:          chelmsfordContent,
  'southend-on-sea':   southendOnSeaContent,
  colchester:          colchesterContent,
  basildon:            basildonContent,
  brentwood:           brentwoodContent,
  harlow:              harlowContent,
  braintree:           braintreeContent,
  'clacton-on-sea':    clactonOnSeaContent,
  grays:               graysContent,
  rayleigh:            rayleighContent,
  billericay:          billericayContent,
  wickford:            wickfordContent,
  loughton:            loughtonContent,
  epping:              eppingContent,
  'saffron-walden':    saffronWaldenContent,
};

/**
 * Returns the full content object for a town, or undefined if not yet generated.
 * The PageClient falls back to generic template copy when undefined.
 */
export function getTownContent(townSlug: string): TownContent | undefined {
  return contentMap[townSlug];
}

/**
 * Returns the service-specific content block for a town×service combination.
 * Returns undefined if the town has no content yet, or if the service key is invalid.
 */
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
