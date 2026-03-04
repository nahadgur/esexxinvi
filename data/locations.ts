export const LOCATIONS: Record<string, string[]> = {
  "Essex Cities & Major Towns": [
    "Chelmsford", "Southend-on-Sea", "Colchester", "Basildon", "Brentwood",
    "Harlow", "Braintree", "Clacton-on-Sea", "Grays", "Rayleigh",
    "Billericay", "Wickford", "Loughton", "Epping", "Saffron Walden",
  ],

  "South Essex": [
    "Canvey Island", "Benfleet", "Hadleigh", "Thundersley", "Leigh-on-Sea",
    "Westcliff-on-Sea", "Shoeburyness", "Rochford", "Hockley", "Rawreth",
    "Pitsea", "Laindon", "Langdon Hills", "Stanford-le-Hope", "Corringham",
    "Tilbury", "Purfleet", "South Ockendon", "Aveley", "Horndon-on-the-Hill",
  ],

  "West Essex": [
    "Buckhurst Hill", "Chigwell", "Woodford", "Waltham Abbey", "Cheshunt",
    "Nazeing", "Roydon", "Ongar", "North Weald Bassett", "Theydon Bois",
    "Abridge", "Stapleford Abbotts", "Debden", "Coopersale",
  ],

  "Mid Essex": [
    "Witham", "Maldon", "Burnham-on-Crouch", "Danbury", "Hatfield Peverel",
    "Tiptree", "Kelvedon", "Coggeshall", "Silver End", "Rivenhall",
    "Great Baddow", "Galleywood", "Writtle", "Margaretting", "Stock",
    "Ingatestone", "Mountnessing",
  ],

  "North Essex": [
    "Halstead", "Earls Colne", "Coggeshall", "Wivenhoe", "Brightlingsea",
    "Manningtree", "Mistley", "Lawford", "Dedham", "Great Dunmow",
    "Stansted Mountfitchet", "Thaxted", "Finchingfield", "Great Bardfield",
    "Castle Hedingham",
  ],

  "Tendring & Coast": [
    "Frinton-on-Sea", "Walton-on-the-Naze", "Harwich", "Dovercourt",
    "Jaywick", "Holland-on-Sea", "Little Clacton", "Great Clacton",
    "Thorpe-le-Soken", "Kirby Cross", "Weeley", "Tendring",
    "St Osyth", "Point Clear", "Brightlingsea",
  ],

  "Thurrock & Havering Border": [
    "Thurrock", "Lakeside", "Chafford Hundred", "Ockendon", "Bulphan",
    "Orsett", "Chadwell St Mary", "East Tilbury", "West Thurrock",
    "Upminster", "Hornchurch", "Romford", "Harold Wood", "Rainham",
    "Dagenham",
  ],
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCityBySlug(slug: string): string | undefined {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.find(city => toSlug(city) === slug);
}

export function getRegionForCity(cityName: string): string | undefined {
  for (const [region, cities] of Object.entries(LOCATIONS)) {
    if (cities.includes(cityName)) return region;
  }
  return undefined;
}

export function getAllCitySlugs(): string[] {
  return Object.values(LOCATIONS).flat().map(city => toSlug(city));
}
