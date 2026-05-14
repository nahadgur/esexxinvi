import { NextRequest, NextResponse } from 'next/server';

// Combo route × retired-town URLs return 410 Gone so Google removes them
// quickly. Kept-town combos are 308 redirected via next.config.js.
const RETIRED_LOCATION_SLUGS = new Set<string>([
  'braintree', 'grays', 'wickford', 'loughton', 'epping', 'saffron-walden',
  'canvey-island', 'benfleet', 'hadleigh', 'thundersley', 'westcliff-on-sea',
  'shoeburyness', 'rochford', 'hockley', 'rawreth', 'pitsea', 'laindon',
  'langdon-hills', 'stanford-le-hope', 'corringham', 'tilbury', 'purfleet',
  'south-ockendon', 'aveley', 'horndon-on-the-hill', 'buckhurst-hill',
  'chigwell', 'woodford', 'waltham-abbey', 'cheshunt', 'nazeing', 'roydon',
  'ongar', 'north-weald-bassett', 'theydon-bois', 'abridge', 'stapleford-abbotts',
  'debden', 'coopersale', 'burnham-on-crouch', 'danbury', 'hatfield-peverel',
  'tiptree', 'kelvedon', 'coggeshall', 'silver-end', 'rivenhall', 'great-baddow',
  'galleywood', 'writtle', 'margaretting', 'stock', 'ingatestone', 'mountnessing',
  'halstead', 'earls-colne', 'wivenhoe', 'brightlingsea', 'manningtree', 'mistley',
  'lawford', 'dedham', 'great-dunmow', 'stansted-mountfitchet', 'thaxted',
  'finchingfield', 'great-bardfield', 'castle-hedingham', 'frinton-on-sea',
  'walton-on-the-naze', 'harwich', 'dovercourt', 'jaywick', 'holland-on-sea',
  'little-clacton', 'great-clacton', 'thorpe-le-soken', 'kirby-cross', 'weeley',
  'tendring', 'st-osyth', 'point-clear', 'thurrock', 'lakeside', 'chafford-hundred',
  'ockendon', 'bulphan', 'orsett', 'chadwell-st-mary', 'east-tilbury',
  'west-thurrock', 'upminster', 'hornchurch', 'romford', 'harold-wood', 'rainham',
  'dagenham',
]);

const SERVICE_SLUGS = new Set<string>([
  'crowded', 'gaps', 'overbite', 'underbite', 'crossbite', 'adults',
]);

// Sample patient stories removed per DMCCA / CMA fake-review guidance. The
// URLs were indexed (GSC shows /success-stories/james-harlow-crowded/ at
// position 22, 14 imp). 410 lets Google drop them quickly.
const REMOVED_STORY_SLUGS = new Set<string>([
  'sarah-chelmsford-overbite',
  'james-harlow-crowded',
  'priya-southend-adult',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.replace(/^\/|\/$/g, '').split('/');

  // /locations/<retired-town>/<service>/ → 410
  if (segments.length === 3 && segments[0] === 'locations') {
    const town = segments[1] ?? '';
    const service = segments[2] ?? '';
    if (RETIRED_LOCATION_SLUGS.has(town) && SERVICE_SLUGS.has(service)) {
      return gone();
    }
  }

  // Legacy /services/<service>/<retired-town>/ → 410
  // (KEPT-town variants are 308 redirected via next.config.js)
  if (segments.length === 3 && segments[0] === 'services') {
    const service = segments[1] ?? '';
    const town = segments[2] ?? '';
    if (SERVICE_SLUGS.has(service) && RETIRED_LOCATION_SLUGS.has(town)) {
      return gone();
    }
  }

  // Removed sample patient stories → 410
  if (segments.length === 2 && segments[0] === 'success-stories') {
    const slug = segments[1] ?? '';
    if (REMOVED_STORY_SLUGS.has(slug)) {
      return gone();
    }
  }

  return NextResponse.next();
}

function gone() {
  return new NextResponse('Gone', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: [
    '/locations/:town/:service*',
    '/services/:service/:town*',
    '/success-stories/:slug*',
  ],
};
