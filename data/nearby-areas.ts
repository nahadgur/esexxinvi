// Sub-locations and nearby areas for each Essex city/town
// These are real neighbourhoods, suburbs, and nearby villages
// Pages won't exist for these — they appear as a grid to capture long-tail search

export interface NearbyArea {
  name: string;
  type: 'neighbourhood' | 'suburb' | 'nearby-town';
}

export const nearbyAreas: Record<string, string[]> = {
  "Chelmsford": [
    "Great Baddow", "Galleywood", "Writtle", "Broomfield", "Springfield", "Moulsham",
    "Boreham", "Little Baddow", "Danbury", "Sandon", "Howe Green", "Margaretting",
    "Stock", "Ingatestone", "Hatfield Peverel", "Terling", "Good Easter", "Roxwell",
    "Widford", "Hylands", "Melbourne", "Rettendon", "Runwell", "South Woodham Ferrers",
    "Bicknacre", "Woodham Walter", "East Hanningfield", "West Hanningfield", "Hanningfield",
    "Great Leighs", "Little Waltham", "Great Waltham", "Pleshey", "Chelmer Village",
  ],

  "Southend-on-Sea": [
    "Westcliff-on-Sea", "Leigh-on-Sea", "Shoeburyness", "Thorpe Bay", "Prittlewell",
    "Southchurch", "North Shoebury", "Eastwood", "Rochford", "Hockley",
    "Rayleigh", "Hadleigh", "Benfleet", "Canvey Island", "Thundersley",
    "Hullbridge", "Ashingdon", "Hawkwell", "Great Wakering", "Little Wakering",
    "Barling", "Foulness Island", "Paglesham", "Stambridge", "Shopland",
    "Sutton", "Southend Airport", "Fossetts Farm", "Chalkwell", "Belfairs",
  ],

  "Colchester": [
    "Wivenhoe", "Rowhedge", "Fingringhoe", "Abberton", "Layer-de-la-Haye",
    "Tiptree", "Marks Tey", "Copford", "Stanway", "Lexden",
    "Shrub End", "Greenstead", "Highwoods", "Mile End", "Myland",
    "Berechurch", "Monkwick", "Old Heath", "The Hythe", "East Donyland",
    "Great Horkesley", "West Bergholt", "Boxted", "Langham", "Dedham",
    "Mersea Island", "West Mersea", "East Mersea", "Peldon", "Salcott",
    "Birch", "Layer Breton", "Great Tey", "Earls Colne", "Coggeshall",
  ],

  "Basildon": [
    "Pitsea", "Laindon", "Langdon Hills", "Vange", "Noak Bridge",
    "Lee Chapel", "Barstable", "Ghyllgrove", "Fryerns", "Kingswood",
    "Wickford", "Shotgate", "Rawreth", "Battlesbridge", "Crays Hill",
    "Billericay", "Great Burstead", "Little Burstead", "Noak Hill", "Ramsden Bellhouse",
    "Bowers Gifford", "North Benfleet", "Dunton", "West Horndon", "Bulphan",
    "Stanford-le-Hope", "Corringham", "Canvey Island", "Benfleet", "Hadleigh",
  ],

  "Brentwood": [
    "Shenfield", "Hutton", "Pilgrims Hatch", "Brook Street", "Warley",
    "Great Warley", "Little Warley", "Ingrave", "Herongate", "Thorndon",
    "Mountnessing", "Doddinghurst", "Kelvedon Hatch", "Navestock", "Bentley",
    "South Weald", "Coxtie Green", "Crow Green", "West Horndon", "Dunton",
    "Bulphan", "Ingatestone", "Blackmore", "Stondon Massey", "Hook End",
    "Wyatts Green", "Swallows Cross", "Childerditch", "East Horndon", "Laindon",
  ],

  "Harlow": [
    "Old Harlow", "Potter Street", "Church Langley", "Staple Tye", "Mark Hall",
    "Netteswell", "Latton Bush", "Great Parndon", "Little Parndon", "Tye Green",
    "Pinnacles", "Katherines", "Kingsmoor", "Sumners", "Brays Grove",
    "Sawbridgeworth", "Epping", "North Weald Bassett", "Roydon", "Nazeing",
    "Matching", "Hatfield Heath", "Sheering", "Lower Sheering", "Churchgate Street",
    "Gilston", "Hunsdon", "Widford", "Much Hadham", "Bishops Stortford",
  ],

  "Braintree": [
    "Bocking", "Black Notley", "White Notley", "Rayne", "Great Notley",
    "Cressing", "Rivenhall", "Silver End", "Witham", "Kelvedon",
    "Coggeshall", "Stisted", "Panfield", "Shalford", "Gosfield",
    "Halstead", "Earls Colne", "Great Bardfield", "Finchingfield", "Wethersfield",
    "Castle Hedingham", "Sible Hedingham", "Toppesfield", "Stambourne", "Ridgewell",
  ],

  "Clacton-on-Sea": [
    "Holland-on-Sea", "Jaywick", "Great Clacton", "Little Clacton", "Burrsville",
    "St Osyth", "Point Clear", "Lee-over-Sands", "Seawick", "Frinton-on-Sea",
    "Walton-on-the-Naze", "Kirby Cross", "Great Holland", "Thorpe-le-Soken", "Weeley",
    "Tendring", "Beaumont-cum-Moze", "Brightlingsea", "Elmstead Market", "Alresford",
    "Wix", "Ramsey", "Dovercourt", "Harwich", "Parkeston",
  ],

  "Grays": [
    "Thurrock", "Chafford Hundred", "Lakeside", "West Thurrock", "South Stifford",
    "Chadwell St Mary", "Tilbury", "East Tilbury", "Stanford-le-Hope", "Corringham",
    "Horndon-on-the-Hill", "Orsett", "Bulphan", "Purfleet", "Aveley",
    "South Ockendon", "North Ockendon", "Stifford Clays", "Little Thurrock", "Badgers Dene",
    "Socketts Heath", "Woodside", "Dell Road", "Argent Street", "Clarence Road",
  ],

  "Rayleigh": [
    "Hullbridge", "Hockley", "Rochford", "Hawkwell", "Ashingdon",
    "Rawreth", "Shotgate", "Wickford", "Runwell", "Rettendon",
    "Battlesbridge", "South Fambridge", "North Fambridge", "Canewdon", "Paglesham",
    "Great Stambridge", "Hadleigh", "Thundersley", "Benfleet", "Leigh-on-Sea",
  ],

  "Billericay": [
    "Great Burstead", "Little Burstead", "Stock", "Buttsbury", "Ramsden Heath",
    "Ramsden Bellhouse", "Downham", "South Green", "Noak Hill", "Crays Hill",
    "Wickford", "Shotgate", "Rawreth", "Basildon", "Laindon",
    "Ingrave", "Herongate", "Mountnessing", "Hutton", "Shenfield",
  ],

  "Wickford": [
    "Shotgate", "Rawreth", "Runwell", "Battlesbridge", "Rettendon",
    "South Woodham Ferrers", "North Fambridge", "Crays Hill", "Ramsden Heath",
    "Downham", "Billericay", "Basildon", "Rayleigh", "Hullbridge",
    "Hockley", "Rochford", "Canewdon", "Ashingdon", "Hawkwell",
  ],

  "Loughton": [
    "Buckhurst Hill", "Chigwell", "Debden", "Theydon Bois", "Abridge",
    "Stapleford Abbotts", "Lambourne", "Hainault", "Grange Hill", "Roding Valley",
    "High Beach", "Epping", "North Weald", "Waltham Abbey", "Woodford",
    "Woodford Green", "South Woodford", "Snaresbrook", "Wanstead", "Leytonstone",
  ],

  "Epping": [
    "Theydon Bois", "North Weald Bassett", "Coopersale", "Thornwood",
    "Fiddlers Hamlet", "Ivy Chimneys", "Epping Upland", "Epping Green",
    "Waltham Abbey", "Nazeing", "Roydon", "Harlow", "Matching",
    "High Laver", "Moreton", "Bobbingworth", "Ongar", "Fyfield",
  ],

  "Saffron Walden": [
    "Great Chesterford", "Little Chesterford", "Audley End", "Wendens Ambo",
    "Newport", "Quendon", "Rickling", "Clavering", "Arkesden",
    "Elmdon", "Strethall", "Littlebury", "Ashdon", "Hadstock",
    "Linton", "Great Sampford", "Little Sampford", "Radwinter", "Sewards End",
    "Debden", "Thaxted", "Great Dunmow", "Stansted Mountfitchet", "Bishops Stortford",
  ],
};

// Fallback: for cities not in the detailed map above, generate nearby areas from LOCATIONS data
export function getNearbyAreas(cityName: string): string[] {
  // First check detailed map
  if (nearbyAreas[cityName]) return nearbyAreas[cityName];

  // Otherwise return empty — the component will handle "no sub-locations" gracefully
  return [];
}
