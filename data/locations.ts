export interface LocationSpoke {
  slug: string;
  name: string;
  region: string;
  postcodeAreas: string[];
  population: number;
  neighbourhoods: string[];
  nearestRail: string;
  drivingDistanceFromHarlow: string;
  drivingDistanceFromSouthend: string;
  catchment: 'core' | 'wider';
  geo: { lat: number; lng: number };
  intro: string;
  whyEssexProviders: string[];
  localContext: string;
  notableNamedEntities: string[];
  nearbyTowns: string[];
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: LocationSpoke[] = [
  {
    slug: 'chelmsford',
    name: 'Chelmsford',
    region: 'Mid Essex',
    postcodeAreas: ['CM1', 'CM2', 'CM3'],
    population: 181763,
    neighbourhoods: ['Great Baddow', 'Springfield', 'Galleywood', 'Writtle', 'Moulsham', 'Old Moulsham', 'Broomfield'],
    nearestRail: 'Chelmsford (Greater Anglia, 35 min to Liverpool Street)',
    drivingDistanceFromHarlow: '28 miles via A414 / M11 (45 min off-peak)',
    drivingDistanceFromSouthend: '23 miles via A130 (40 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.7356, lng: 0.4685 },
    intro:
      "Chelmsford is the county town of Essex and the largest single Invisalign catchment we cover. Direct trains to London and an affluent commuter base mean the local market for verified Platinum-tier providers is unusually competitive, which is good for patients comparing quotes.",
    whyEssexProviders: [
      'Network-matched Platinum-tier practices accessible from the CM1 / CM2 corridor',
      'High provider density supports faster ClinCheck turnaround (typically 7–10 days)',
      'Most clinics offer evening clinics for City of London commuters',
    ],
    localContext:
      "Chelmsford patients overwhelmingly want discreet treatment they can wear through professional working life. Adult cases (often age 28–45, post-childhood relapse) make up the majority of CM-postcode enquiries we receive. Lite and Express plans are popular because the median commute pattern (4 days a week into London Liverpool Street) makes weekly aligner changes practical.",
    notableNamedEntities: ['Bond Street shopping quarter', 'High Chelmer', 'Chelmsford Cathedral', 'Anglia Ruskin University', 'Hylands Park'],
    nearbyTowns: ['Witham', 'Billericay', 'Maldon'],
    faqs: [
      {
        question: 'How long is the wait for a Chelmsford Invisalign consultation?',
        answer:
          "Within our network the typical wait for a free initial scan in CM1 / CM2 is 5–10 working days. Higher-volume Platinum practices fill earliest, so if you have a fixed start window (a wedding, exams) submit a request early and ask the matched provider about a fast-track ClinCheck.",
      },
      {
        question: 'Are there evening or Saturday Invisalign appointments in Chelmsford?',
        answer:
          'Yes. Most CM-postcode practices in our network reserve at least one weekday evening slot per week and some run a fortnightly Saturday morning clinic for review appointments. Initial scans are usually weekday daytime to allow full ClinCheck modelling time.',
      },
      {
        question: 'Will a Chelmsford clinic price-match a Brentwood or London quote?',
        answer:
          'Most Platinum providers in Chelmsford do not formally price-match because their pricing is structured by case complexity, not headline rate. Several do offer a free comparative ClinCheck if you bring a written quote from another network provider so you can compare the proposed treatment plan, not just the cost.',
      },
    ],
  },
  {
    slug: 'southend-on-sea',
    name: 'Southend-on-Sea',
    region: 'South Essex',
    postcodeAreas: ['SS1', 'SS2', 'SS3', 'SS9'],
    population: 182463,
    neighbourhoods: ['Westcliff-on-Sea', 'Leigh-on-Sea', 'Thorpe Bay', 'Shoeburyness', 'Prittlewell', 'Eastwood'],
    nearestRail: 'Southend Central / Southend Victoria (c2c & Greater Anglia)',
    drivingDistanceFromHarlow: '46 miles via M25 / A127 (75 min off-peak)',
    drivingDistanceFromSouthend: 'in town',
    catchment: 'core',
    geo: { lat: 51.5459, lng: 0.7077 },
    intro:
      "Southend is the second-largest Invisalign catchment in Essex and our south-coast hub. SS-postcode patients tend to consolidate around the seafront and Hamlet Court Road clinical clusters, with several Platinum providers offering Lite plans tailored to under-30s.",
    whyEssexProviders: [
      'Cluster of Platinum providers between SS1 and SS9, short referral distance from any neighbourhood',
      'Higher proportion of providers offering Invisalign Teen alongside adult plans',
      'Strong c2c rail link to London Fenchurch Street makes scan + city-based work day practical',
    ],
    localContext:
      "Southend skews younger than the Mid Essex catchment, with a higher share of teen and early-twenties cases. Most enquiries we route through SS-postcode providers are for mild to moderate crowding or aesthetic finishing after retainer drift. Pricing tends to be at the lower end of the Essex range because of higher provider density.",
    notableNamedEntities: ['Southend Pier', 'Hamlet Court Road clinical strip', 'Southend Hospital', 'Westcliff conservation area', 'University of Essex Southend campus'],
    nearbyTowns: ['Leigh-on-Sea', 'Rayleigh', 'Basildon'],
    faqs: [
      {
        question: 'Which Southend area has the most Invisalign providers?',
        answer:
          'The Hamlet Court Road and London Road corridor in SS0 / SS1 has the densest cluster of dental clinics in Southend, with several verified Platinum-tier providers within a 1-mile stretch. We can match you to that cluster or to the SS9 (Westcliff / Leigh fringe) cluster depending on where you live.',
      },
      {
        question: 'Is parking provided at Southend dental clinics for Invisalign appointments?',
        answer:
          'Most clinics on the Hamlet Court Road strip rely on metered street parking. Clinics further out in SS3 / SS9 typically have a small forecourt or partner with adjacent retail car parks. We list parking notes in the clinic profile.',
      },
      {
        question: 'Can I have my ClinCheck scan in Southend and reviews in London?',
        answer:
          'In some cases yes, a few national group practices allow inter-clinic review appointments, but most Essex Platinum providers expect reviews at the clinic that holds your case file. If continuity matters because of London work, ask us to match you only to providers that confirm cross-site reviews.',
      },
    ],
  },
  {
    slug: 'colchester',
    name: 'Colchester',
    region: 'North Essex',
    postcodeAreas: ['CO1', 'CO2', 'CO3', 'CO4', 'CO6'],
    population: 192700,
    neighbourhoods: ['Lexden', 'Stanway', 'Mile End', 'Greenstead', 'Highwoods', 'Old Heath'],
    nearestRail: 'Colchester / Colchester Town (Greater Anglia, 50 min to Liverpool Street)',
    drivingDistanceFromHarlow: '52 miles via A12 (75 min off-peak)',
    drivingDistanceFromSouthend: '40 miles via A12 / A130 (65 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.8959, lng: 0.8919 },
    intro:
      "Colchester is the largest population centre in Essex and Britain's oldest recorded town, with a strong professional services and university base. CO-postcode demand is steady year-round, with a noticeable summer spike for graduation and wedding-season finishing cases.",
    whyEssexProviders: [
      'Two Platinum-tier practices within the CO1 / CO2 town centre',
      'Strong Lexden / Stanway suburban cluster for patients avoiding town-centre parking',
      'Specialist orthodontists alongside general-practice Invisalign providers (useful for borderline surgical cases)',
    ],
    localContext:
      "Colchester patients tend to research more thoroughly than the south-Essex average, with longer pre-enquiry windows and more questions about treatment alternatives (Spark, ClearCorrect, ceramic braces). Our matching tilts toward providers who can run a comparative ClinCheck and walk patients through the trade-offs without pushing the highest-margin plan.",
    notableNamedEntities: ['Colchester Castle', 'Colchester Zoo', 'University of Essex (Wivenhoe)', 'Colchester Hospital', 'Mercury Theatre'],
    nearbyTowns: ['Clacton-on-Sea', 'Witham', 'Maldon'],
    faqs: [
      {
        question: 'How does Invisalign pricing in Colchester compare with London?',
        answer:
          'Headline pricing in CO postcodes is typically 10–20 per cent below central London for the equivalent case complexity, partly because property and staffing costs are lower. Higher-volume Platinum providers in Colchester can sit at London prices for complex cases because the case-volume premium is global, not local.',
      },
      {
        question: 'Is the University of Essex covered by any clinic in your network?',
        answer:
          "Yes. Several Colchester providers offer student-priced Invisalign Lite plans for University of Essex undergrads with valid student ID, typically with 12-month payment plans aligned to term dates. Mention you're a student when the clinic calls and ask for the student-finance option.",
      },
      {
        question: 'Are home visits or remote monitoring offered by Colchester Invisalign providers?',
        answer:
          'Several CO-postcode providers in our network use Invisalign Virtual Care or Dental Monitoring for review appointments after the first three months, which is useful if you commute or are at university away from home. Initial scan and final fit must be in-clinic.',
      },
    ],
  },
  {
    slug: 'basildon',
    name: 'Basildon',
    region: 'South Essex',
    postcodeAreas: ['SS13', 'SS14', 'SS15', 'SS16'],
    population: 107123,
    neighbourhoods: ['Pitsea', 'Laindon', 'Vange', 'Langdon Hills', 'Lee Chapel', 'Fryerns'],
    nearestRail: 'Basildon (c2c, 35 min to Fenchurch Street)',
    drivingDistanceFromHarlow: '28 miles via M11 / A127 (50 min off-peak)',
    drivingDistanceFromSouthend: '14 miles via A127 (25 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.5762, lng: 0.4882 },
    intro:
      "Basildon is the largest town in the Borough of Basildon and a key c2c commuter hub. SS-postcode patients here tend to want fast, cost-disciplined treatment with predictable monthly finance.",
    whyEssexProviders: [
      'Strong fit for finance-led plans (£49–£99/month is the modal quote we see)',
      'Town-centre and Pipps Hill clinics offer evening-only treatment tracks for c2c commuters',
      'Short referral distance to Brentwood / Southend if the Basildon clinic schedule is full',
    ],
    localContext:
      "Basildon enquiries lean heavily toward Lite and Moderate plans (£1,800–£3,200) over Comprehensive. Cosmetic finishing for under-thirties is the most common case profile. We match almost exclusively to providers who publish a written written all-in price (not 'from £X') because the Basildon market is fee-sensitive.",
    notableNamedEntities: ['Eastgate Shopping Centre', 'Basildon Hospital', 'Festival Leisure Park', 'Pipps Hill retail park', 'South Essex College'],
    nearbyTowns: ['Billericay', 'Brentwood', 'Rayleigh'],
    faqs: [
      {
        question: 'What is the cheapest Invisalign plan available in Basildon?',
        answer:
          "The lowest published Lite quotes in SS13–SS16 sit around £1,800 all-in, typically for cases requiring 7–14 aligners. Anything advertised below £1,500 is usually an Express plan covering minor relapse only. Always ask whether retainers and one set of refinements are included.",
      },
      {
        question: 'Do Basildon clinics accept payment plans through DentiCare or Tabeo?',
        answer:
          'Most Platinum providers in Basildon offer 0% finance through Tabeo or V12 Retail Finance over 12–24 months. DentiCare is offered by a smaller subset. Confirm the finance partner before signing because eligibility checks vary.',
      },
      {
        question: 'Can I get Invisalign on the NHS in Basildon?',
        answer:
          "Adult Invisalign is not available on the NHS anywhere in Essex, NHS orthodontic treatment for adults is restricted to severe medical-need cases and uses fixed appliances, not clear aligners. NHS treatment for under-18s is via referral to a specialist orthodontist, not direct.",
      },
    ],
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    region: 'West Essex',
    postcodeAreas: ['CM13', 'CM14', 'CM15'],
    population: 76000,
    neighbourhoods: ['Hutton', 'Shenfield', 'Warley', 'Pilgrims Hatch', 'Doddinghurst'],
    nearestRail: 'Brentwood (Elizabeth line, 35 min to Liverpool Street)',
    drivingDistanceFromHarlow: '17 miles via A1023 / M11 (35 min off-peak)',
    drivingDistanceFromSouthend: '24 miles via A127 (40 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.6219, lng: 0.3057 },
    intro:
      "Brentwood is one of the most affluent catchments in Essex and the Elizabeth line opening has made it a high-throughput referral location for higher-volume Platinum work. CM13 / CM14 patients are typically willing to pay a premium for shorter total treatment time and longer-tenure clinicians.",
    whyEssexProviders: [
      'Strong concentration of verified Platinum-tier providers per head of population in Essex',
      'Several private-only practices with in-house iTero scanning and same-week ClinCheck delivery',
      'Strong Elizabeth-line catchment from Shenfield extends into east London',
    ],
    localContext:
      "Brentwood demand skews toward Comprehensive and Moderate plans, with case-complexity profiles that justify higher-volume Platinum referrals. We see more bonded retainer requests at the end of treatment in CM postcodes than anywhere else in our coverage area, partly because Brentwood patients are buying long-term outcome certainty.",
    notableNamedEntities: ['Brentwood School', 'Shenfield High Street', 'Brentwood Cathedral', 'Brentwood Centre', 'Warley Country Park'],
    nearbyTowns: ['Billericay', 'Basildon', 'Chelmsford'],
    faqs: [
      {
        question: 'Are higher-volume Platinum providers worth the price premium in Brentwood?',
        answer:
          "Platinum status reflects case volume (150+ per year, with the strongest providers running 200+) and exposure to complex movements like deep bite, crossbite expansion and surgical-orthodontic interface cases. For straightforward Lite cases the difference is small. For Comprehensive cases involving precision wings, IPR or attachments on most teeth, the case-volume premium is real and we'd recommend the higher-volume Platinum option.",
      },
      {
        question: 'Which Brentwood postcodes have evening Elizabeth-line-friendly clinics?',
        answer:
          "CM13 (Hutton / Shenfield side) has the best concentration of evening clinics within walking distance of Shenfield station. CM14 (town centre) is more weekday-daytime-oriented but several practices reserve a Tuesday or Thursday late slot specifically for commuters.",
      },
      {
        question: 'How does Brentwood Invisalign pricing compare to Romford or Stratford?',
        answer:
          'Brentwood is typically 5–15 per cent more expensive than Romford or Stratford for the same case profile, but with shorter waits and longer-tenure clinicians. If you live closer to Romford and the price gap matters, our matching service can route you to a Romford-side provider with verified Platinum status.',
      },
    ],
  },
  {
    slug: 'harlow',
    name: 'Harlow',
    region: 'West Essex',
    postcodeAreas: ['CM17', 'CM18', 'CM19', 'CM20'],
    population: 93462,
    neighbourhoods: ['Old Harlow', 'Church Langley', 'Newhall', 'Bush Fair', 'Staple Tye', 'Sumners'],
    nearestRail: 'Harlow Town / Harlow Mill (Greater Anglia, 35 min to Liverpool Street)',
    drivingDistanceFromHarlow: 'in town',
    drivingDistanceFromSouthend: '46 miles via M25 / A127 (75 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.7714, lng: 0.0936 },
    intro:
      "Harlow is the western anchor of our network and home to two of our partner verified Platinum-tier practices. CM17–CM20 catchment includes the rapidly growing Newhall and Church Langley neighbourhoods, which have a higher-than-average household income and steady Invisalign demand.",
    whyEssexProviders: [
      'Two verified Platinum-tier providers in CM17 / CM20 with 150+ case volume',
      'M11 / A414 access makes Harlow practical for patients in north Essex / south Hertfordshire fringes',
      'Both grocery-rail (Liverpool Street 35 min) and West End-rail (Tottenham Hale change) make commuter scheduling flexible',
    ],
    localContext:
      "Harlow demand is balanced between Lite/Moderate cosmetic cases (Newhall, Church Langley) and Comprehensive cases (older Harlow neighbourhoods seeking late-stage correction). We see slightly more retainer-only enquiries here than the Essex average, typically patients who had childhood braces and are seeing relapse in their thirties.",
    notableNamedEntities: ['Princess Alexandra Hospital', 'Harlow College', 'The Stow shopping centre', 'Gibberd Garden', 'Harlow Town Park'],
    nearbyTowns: ['Brentwood', 'Chelmsford', 'Billericay'],
    faqs: [
      {
        question: 'What can a higher-volume Platinum provider treat that lower-volume providers cannot?',
        answer:
          "Tier status doesn't expand the legal scope of treatment, every UK Invisalign provider can prescribe the same case types. What changes is throughput and exposure: higher-volume Platinum clinicians have typically run 150+ cases per year and have direct case-review escalation paths to Align technical staff. For complex multi-arch movement, that experience compresses the case timeline.",
      },
      {
        question: 'Are there any NHS-funded teen Invisalign options in Harlow?',
        answer:
          'NHS orthodontic treatment for under-18s in Harlow is delivered through specialist orthodontic referral, and uses metal or ceramic fixed braces, not Invisalign. Invisalign Teen for NHS-eligible patients is privately funded only, although several Harlow practices offer extended payment plans for under-18 cases.',
      },
      {
        question: 'How much does Invisalign cost in Harlow?',
        answer:
          "All-in Invisalign costs in Harlow currently range from approximately £1,800 (Lite, 14 aligners) to £5,500 (Comprehensive Platinum-tier with refinements and bonded retainers). Mid-range cases, most adult patients, quote between £3,200 and £4,200. Consultation, scan and ClinCheck modelling are free at every clinic in our network.",
      },
    ],
  },
  {
    slug: 'billericay',
    name: 'Billericay',
    region: 'South Essex',
    postcodeAreas: ['CM11', 'CM12'],
    population: 35517,
    neighbourhoods: ['Sun Corner', 'South Green', 'Stockwell', 'Buttsbury', 'Queens Park'],
    nearestRail: 'Billericay (c2c, 35 min to Fenchurch Street)',
    drivingDistanceFromHarlow: '24 miles via A414 / A127 (45 min off-peak)',
    drivingDistanceFromSouthend: '14 miles via A129 (25 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.6266, lng: 0.4194 },
    intro:
      "Billericay is a compact, affluent commuter town with high private dental usage and a relatively older patient demographic. CM11 / CM12 enquiries are weighted toward late-stage relapse correction and aesthetic finishing.",
    whyEssexProviders: [
      'Two Platinum clinics within walking distance of Billericay station',
      'Convenient cross-route to higher-volume Brentwood Platinum providers if Billericay schedules fill',
      'Strong concentration of bonded-retainer providers (lower long-term relapse risk)',
    ],
    localContext:
      "Billericay enquiries skew older (40+) than the Essex average and are commonly second-cycle treatments, patients who had braces in childhood and are correcting relapse. We see a high proportion of Comprehensive plans because relapse cases often involve multi-tooth movement and bite re-establishment.",
    notableNamedEntities: ['Sun Corner', 'Lake Meadows Park', 'Mayflower Hall', 'Billericay School', 'Norsey Wood'],
    nearbyTowns: ['Basildon', 'Brentwood', 'Rayleigh'],
    faqs: [
      {
        question: 'Is it possible to get evening or weekend Invisalign appointments in Billericay?',
        answer:
          'Both Platinum providers we work with in CM11/CM12 reserve at least one weekday evening slot per week. Saturday morning availability is limited and tends to be reserved for established patients on review appointments rather than new consultations.',
      },
      {
        question: 'How long is the treatment for a Billericay relapse case?',
        answer:
          'Relapse cases (where teeth have shifted after childhood braces) typically resolve in 6–12 months on Invisalign Lite or Moderate. Most Billericay patients we route are eligible for Lite, which costs £1,800–£2,800 and uses 14–26 aligners.',
      },
      {
        question: 'Will my Billericay clinic supply lifetime retainers?',
        answer:
          "All Invisalign treatment plans include Vivera retainers (typically 4 sets covering 2 years). For longer protection, most Billericay providers offer subscription retainer-replacement programmes (~£15-£20/month) or a one-off bonded retainer for £250–£400. Bonded retainers carry the lowest long-term relapse risk.",
      },
    ],
  },
  {
    slug: 'witham',
    name: 'Witham',
    region: 'Mid Essex',
    postcodeAreas: ['CM8'],
    population: 25353,
    neighbourhoods: ['Templars', 'Whitehall', 'Chipping Hill', 'Spa Road'],
    nearestRail: 'Witham (Greater Anglia, 45 min to Liverpool Street)',
    drivingDistanceFromHarlow: '34 miles via A12 (55 min off-peak)',
    drivingDistanceFromSouthend: '28 miles via A12 / A130 (45 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.7977, lng: 0.6406 },
    intro:
      "Witham sits on the A12 / Greater Anglia corridor between Chelmsford and Colchester, and acts as a bridging market for both anchor catchments. CM8 patients commonly choose between a Witham-based clinic for proximity and a Chelmsford or Colchester referral for case-volume depth.",
    whyEssexProviders: [
      'Centrally located between Chelmsford and Colchester verified Platinum hubs',
      "A12 access supports cross-clinic continuity if you start treatment in Witham and review elsewhere",
      'Single Platinum provider in CM8, short waiting list relative to Chelmsford',
    ],
    localContext:
      "Witham demand is steady but lower-volume than the major catchments. The town's single Platinum provider tends to run a 10–14 day initial consultation wait. We see more cross-referrals into Chelmsford and Colchester from CM8 than from any other catchment, because patients prioritise practice depth over single-mile-radius proximity.",
    notableNamedEntities: ['Witham Town Hall', 'Witham Public Hall', "Maldon Road shopping district", 'Spring Lodge community centre'],
    nearbyTowns: ['Chelmsford', 'Maldon', 'Colchester'],
    faqs: [
      {
        question: 'Should I choose a Witham Invisalign provider or travel to Chelmsford?',
        answer:
          'For Lite or Moderate cases the Witham Platinum provider is the obvious choice. It removes a 30-minute round trip and your case complexity does not justify a higher-volume referral. For Comprehensive cases involving complex bite work, the larger Chelmsford Platinum practices have higher case volume and are usually worth the travel.',
      },
      {
        question: 'How much does Invisalign cost in CM8?',
        answer:
          'CM8 Invisalign quotes in our network range from £1,900 for Lite plans to approximately £4,800 for Comprehensive cases. Pricing is broadly in line with Chelmsford because the Platinum provider sets fees against the broader Mid Essex market rather than a Witham-specific rate.',
      },
      {
        question: 'Are there child or teen Invisalign options in Witham?',
        answer:
          'Yes. The CM8 Platinum provider in our network treats Invisalign Teen cases (typically age 13–18) alongside adult plans. Treatment is privately funded, NHS routes for under-18s use fixed appliances via specialist orthodontic referral.',
      },
    ],
  },
  {
    slug: 'clacton-on-sea',
    name: 'Clacton-on-Sea',
    region: 'Tendring & Coast',
    postcodeAreas: ['CO15', 'CO16'],
    population: 53053,
    neighbourhoods: ['Holland-on-Sea', 'Jaywick', 'Great Clacton', 'Little Clacton'],
    nearestRail: 'Clacton-on-Sea (Greater Anglia, 90 min to Liverpool Street)',
    drivingDistanceFromHarlow: '67 miles via A120 / A12 (110 min off-peak)',
    drivingDistanceFromSouthend: '52 miles via A12 / A130 (85 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.789, lng: 1.155 },
    intro:
      "Clacton is the largest town in the Tendring district and the eastern anchor of our coverage. CO15 / CO16 demand is more cost-conscious than Mid or West Essex, with a higher proportion of Lite and Express plans.",
    whyEssexProviders: [
      'Single Platinum provider in town centre with full ClinCheck and iTero capability',
      'Cross-referral pathway to higher-volume Colchester Platinum providers for complex cases',
      'Lower median pricing than Mid/West Essex (10–15 per cent below Chelmsford for equivalent plans)',
    ],
    localContext:
      "Clacton enquiries split clearly between two groups: working-age patients in Holland-on-Sea and Great Clacton seeking Lite cosmetic finishing, and a smaller segment of retirees correcting decades-old relapse. We rarely see Comprehensive plans in CO15, most complex cases get referred up to Colchester.",
    notableNamedEntities: ['Clacton Pier', 'Clacton Hospital', 'Clacton County High School', 'Marine Parade'],
    nearbyTowns: ['Colchester', 'Witham', 'Maldon'],
    faqs: [
      {
        question: 'Is it worth travelling to Colchester for Invisalign instead of staying in Clacton?',
        answer:
          'For Lite and Moderate cases, no. The Clacton Platinum provider is fully equipped and pricing is typically lower than Colchester. For Comprehensive cases involving complex bite work or severe crowding, the case-volume difference at the larger Colchester Platinum practices justifies the 30-minute drive.',
      },
      {
        question: 'How much does Invisalign cost in Clacton?',
        answer:
          'CO15 / CO16 Invisalign quotes in our network range from £1,750 for Lite plans to approximately £4,200 for Comprehensive cases. Quotes are typically 10–15 per cent below Mid/West Essex equivalents.',
      },
      {
        question: 'Does the Clacton clinic offer remote review appointments?',
        answer:
          "Yes. The Clacton Platinum provider uses Invisalign Virtual Care for review appointments after the first three months, which is useful given the longer drive to Colchester for back-up appointments. Initial scan, fit and final review are in-clinic.",
      },
    ],
  },
  {
    slug: 'rayleigh',
    name: 'Rayleigh',
    region: 'South Essex',
    postcodeAreas: ['SS6'],
    population: 32150,
    neighbourhoods: ['Hockley', 'Hullbridge', 'Rawreth', 'Sweyne Park', 'Down Hall'],
    nearestRail: 'Rayleigh (Greater Anglia, 50 min to Liverpool Street)',
    drivingDistanceFromHarlow: '37 miles via M11 / A127 (60 min off-peak)',
    drivingDistanceFromSouthend: '7 miles via A127 (15 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.5867, lng: 0.6053 },
    intro:
      "Rayleigh is a busy commuter town between Southend and Basildon, with a high private dental usage rate and a strong middle-aged Invisalign cohort. SS6 patients have direct access to both the Southend SS-cluster and the Basildon corridor.",
    whyEssexProviders: [
      'Single Platinum provider on Rayleigh High Street with a typical 7–10 day consultation wait',
      'Easy SS6 referral routes to Southend Hamlet Court Road cluster (5 miles)',
      'Modal patient profile is age 35–55 with relapse correction or aesthetic finishing',
    ],
    localContext:
      "Rayleigh demand sits between Billericay (older, second-cycle) and Southend (younger, cosmetic). We see more Moderate plans here than either neighbour, with case profiles requiring 26–40 aligners. Bonded retainer uptake at end of treatment is also above the Essex average.",
    notableNamedEntities: ['Rayleigh High Street', 'Rayleigh Mount', 'Rayleigh Windmill', 'Sweyne Park School'],
    nearbyTowns: ['Leigh-on-Sea', 'Southend-on-Sea', 'Billericay'],
    faqs: [
      {
        question: 'Should I use the Rayleigh clinic or travel to Southend?',
        answer:
          'For most cases the Rayleigh Platinum provider is the right choice. It is closer, has shorter waits, and pricing is comparable. Patients in SS6 with complex bite work occasionally cross-refer to the higher-volume Southend Platinum practices, but this is the exception.',
      },
      {
        question: 'How much does Invisalign cost in Rayleigh?',
        answer:
          "SS6 Invisalign quotes range from £1,900 for Lite plans to approximately £4,500 for Comprehensive cases. Most Rayleigh patients we route receive Moderate quotes between £3,000 and £3,800.",
      },
      {
        question: 'Are weekend appointments available at the Rayleigh Invisalign clinic?',
        answer:
          'The SS6 Platinum provider runs a Saturday morning clinic on alternate weekends, primarily for review appointments. New consultations are scheduled weekday only, with one evening slot per week.',
      },
    ],
  },
  {
    slug: 'maldon',
    name: 'Maldon',
    region: 'Mid Essex',
    postcodeAreas: ['CM9'],
    population: 14220,
    neighbourhoods: ['Heybridge', 'Heybridge Basin', 'Maldon Town', 'Beeleigh'],
    nearestRail: 'Hatfield Peverel (5 miles, Greater Anglia)',
    drivingDistanceFromHarlow: '40 miles via A414 (65 min off-peak)',
    drivingDistanceFromSouthend: '19 miles via A130 / B1418 (40 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.7311, lng: 0.6779 },
    intro:
      "Maldon is a riverside market town with a stable, affluent local market. CM9 demand is steady but lower-volume than the major Essex hubs, and most enquiries route through to either the Witham or Chelmsford Platinum clusters.",
    whyEssexProviders: [
      'Single dental practice offering Invisalign in CM9, most CM9 patients are referred to Chelmsford or Witham',
      'Short A414 access to Chelmsford (45 min round trip including consultation)',
      'Low-density market means longer consultation slots and a more bespoke patient pathway',
    ],
    localContext:
      "Maldon enquiries are predominantly Lite and Moderate (£1,900–£3,500) for adult cosmetic finishing. Patients here are willing to travel, most accept Chelmsford or Witham referrals because in-town capacity is limited. Average pre-enquiry research window is the longest in our coverage area.",
    notableNamedEntities: ['Maldon Promenade', 'Maldon Salt Company', "Plume Library", 'Maldon Hospital', 'Hythe Quay'],
    nearbyTowns: ['Chelmsford', 'Witham', 'Colchester'],
    faqs: [
      {
        question: 'Is there an Invisalign provider in Maldon itself?',
        answer:
          'There is one general dental practice in CM9 offering Invisalign. Most enquiries we receive from Maldon are routed to a Chelmsford or Witham Platinum provider for shorter consultation waits and broader case experience. The choice is yours, both routes are valid.',
      },
      {
        question: 'How much does Invisalign cost in Maldon?',
        answer:
          "CM9 quotes range from £1,900 for Lite to £4,500 for Comprehensive, broadly in line with Mid Essex. Pricing in the Witham / Chelmsford referral route is comparable, and finance options are similar across the three locations.",
      },
      {
        question: 'How long is the wait for a Maldon Invisalign consultation?',
        answer:
          "The CM9 in-town provider typically books 2–4 weeks ahead. The Witham referral route shortens this to 5–10 working days, and the higher-volume Chelmsford Platinum practices are typically 7–14 days for new consultations.",
      },
    ],
  },
  {
    slug: 'leigh-on-sea',
    name: 'Leigh-on-Sea',
    region: 'South Essex',
    postcodeAreas: ['SS9'],
    population: 22149,
    neighbourhoods: ['Old Leigh', 'Leigh Broadway', 'Highlands', 'Belfairs', 'Marine Estate'],
    nearestRail: 'Leigh-on-Sea (c2c, 50 min to Fenchurch Street)',
    drivingDistanceFromHarlow: '45 miles via M25 / A127 (75 min off-peak)',
    drivingDistanceFromSouthend: '4 miles via A13 (10 min off-peak)',
    catchment: 'core',
    geo: { lat: 51.5443, lng: 0.6443 },
    intro:
      "Leigh-on-Sea is the affluent western end of the Southend conurbation, with a dense local clinical market and a mostly young-professional patient base. SS9 enquiries cluster around Leigh Broadway and the Highlands neighbourhood.",
    whyEssexProviders: [
      'Two Platinum providers within SS9, short referral distance from any neighbourhood',
      'Strong cross-referral to higher-volume Southend SS1 Platinum practices for complex cases',
      'Patient demographic skews younger and more cosmetic-finishing than Southend proper',
    ],
    localContext:
      "Leigh demand is heavily Lite and Moderate (cosmetic finishing, late-twenties to mid-thirties), with a steady stream of pre-wedding consultations through summer. Pricing is comparable to Southend SS1 cluster and noticeably below the Brentwood / Chelmsford levels.",
    notableNamedEntities: ['Leigh Broadway', 'Old Leigh fishing village', 'Belfairs Park', 'Leigh Library Gardens', 'Leigh-on-Sea station'],
    nearbyTowns: ['Southend-on-Sea', 'Rayleigh', 'Basildon'],
    faqs: [
      {
        question: 'Is Leigh cheaper than Southend for Invisalign?',
        answer:
          'Headline pricing in SS9 is broadly in line with SS1 / SS2, both Leigh Platinum providers price against the wider South Essex market rather than a Leigh-specific rate. Where Leigh wins is consultation availability, with shorter waits than the busier Hamlet Court Road cluster.',
      },
      {
        question: 'Are there family Invisalign packages in Leigh-on-Sea?',
        answer:
          'Both SS9 Platinum providers offer family discounts of typically 5–10 per cent off second and third treatment in the same household, including Invisalign Teen alongside parental Lite or Moderate plans. Confirm details on the introductory call.',
      },
      {
        question: 'Can I park at Leigh dental clinics?',
        answer:
          'Leigh Broadway clinics rely on metered street parking and the nearby Highlands Boulevard car park (10 min walk). Highlands and Belfairs clinics typically have small forecourts. Parking notes are listed in each clinic profile.',
      },
    ],
  },
];

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCityBySlug(slug: string): LocationSpoke | undefined {
  return LOCATIONS.find(l => l.slug === slug);
}

export function getCityNameBySlug(slug: string): string | undefined {
  return getCityBySlug(slug)?.name;
}

export function getRegionForCity(slug: string): string | undefined {
  return getCityBySlug(slug)?.region;
}

export function getAllCitySlugs(): string[] {
  return LOCATIONS.map(l => l.slug);
}

export const KEPT_LOCATION_SLUGS = LOCATIONS.map(l => l.slug);

export const RETIRED_LOCATION_SLUGS = [
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
];
