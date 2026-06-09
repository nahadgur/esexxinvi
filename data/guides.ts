import { siteConfig } from '@/data/site';

export interface GuideHub {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  reservedKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroDirectAnswer: string;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  /** /treatments/<slug> pillars this hub feeds. */
  treatmentSlugs: string[];
  /** Sideways links to adjacent hubs. */
  adjacentHubSlugs: string[];
  faqs: { question: string; answer: string }[];
  publishedAt: string;
  lastReviewedAt: string;
}

const reviewed = siteConfig.editorial.lastReviewedAt;

export const GUIDE_HUBS: GuideHub[] = [
  {
    slug: 'invisalign-cost-essex',
    title: 'Invisalign Cost in Essex',
    shortTitle: 'Cost',
    heroBadge: 'Cost and finance',
    reservedKeyword: 'invisalign cost essex',
    metaTitle: 'Invisalign Cost in Essex 2026 | Price Guide & Finance',
    metaDescription:
      'What Invisalign costs in Essex in 2026, by case type. Invisalign Lite vs Full pricing, finance and 0% plans, the NHS position, and hidden costs to watch for.',
    heroDirectAnswer:
      'In Essex in 2026, Invisalign typically costs around £1,800 to £2,800 for a minor case (Invisalign Lite or Express) and £2,800 to £4,500 for a full Comprehensive case. The exact figure depends on how much movement is needed, the provider, and whether retainers and refinements are included.',
    keyPoints: [
      'Invisalign Lite / Express (minor cases): roughly £1,800 to £2,800.',
      'Comprehensive (most adult cases): roughly £2,800 to £4,500.',
      'Almost always private: the NHS funds fixed braces for eligible children, not aligners.',
      'Most Essex clinics offer 0% finance over six to twelve months after a deposit.',
      'Always confirm retainers and refinements are in the quoted price, not extra later.',
    ],
    sections: [
      {
        heading: 'What changes the price',
        paragraphs: [
          'The biggest driver is case complexity, which decides how many aligners you need. A small amount of front-tooth movement or relapse correction is a Lite case; correcting the bite as well as the alignment is a Comprehensive case with many more aligners. Your dentist confirms which after the iTero scan and ClinCheck.',
          'After complexity, the variables are the provider and what the fee includes. An experienced Platinum clinic may charge a little more but is quoting for a result; a cheap quote that excludes retainers, refinements and review appointments is not the bargain it looks. Ask every clinic for the total amount payable in writing.',
        ],
      },
      {
        heading: 'Essex prices versus London',
        paragraphs: [
          'Invisalign in Essex is generally cheaper than central London for clinically equivalent treatment, because the price gap is driven by premises overhead rather than outcome. For commuters that is worth knowing: there is rarely a clinical reason to travel into London, and routine check-ins are easier to attend near home.',
          'If cost is the obstacle, finance is the usual answer rather than a cheaper but riskier route. See the finance and NHS spokes below, and never let price push you toward an unsupervised at-home aligner kit.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['invisalign-vs-braces', 'choosing-an-invisalign-provider'],
    faqs: [
      { question: 'How much is Invisalign in Essex?', answer: 'Roughly £1,800 to £2,800 for a minor (Lite) case and £2,800 to £4,500 for a full Comprehensive case in 2026. Your dentist confirms the figure after a 3D scan and ClinCheck.' },
      { question: 'Is Invisalign cheaper than going to London?', answer: 'Usually yes. Essex clinics typically charge less than central London for the same treatment, and there is no need to travel in for routine check-ins.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-treatment-process',
    title: 'The Invisalign Treatment Process and Timeline',
    shortTitle: 'Process',
    heroBadge: 'What to expect',
    reservedKeyword: 'invisalign treatment process',
    metaTitle: 'The Invisalign Process and Timeline | Step by Step',
    metaDescription:
      'Invisalign step by step: the consultation and iTero scan, ClinCheck plan, attachments, wearing and switching aligners, refinements, and retainers.',
    heroDirectAnswer:
      'Invisalign runs from a first consultation and 3D scan, through a digital ClinCheck plan you approve, to wearing a series of custom aligners for one to two weeks each, twenty to twenty-two hours a day. Most adult cases take six to eighteen months, finishing with refinements if needed and retainers to hold the result.',
    keyPoints: [
      'It starts with an iTero 3D scan and a ClinCheck plan you see before committing.',
      'Small tooth-coloured attachments are bonded on so the aligners can grip.',
      'Each aligner is worn one to two weeks; you switch to the next yourself.',
      'Aligners need twenty to twenty-two hours a day to track to plan.',
      'Refinements (a second set) are common, then retainers hold the result for life.',
    ],
    sections: [
      {
        heading: 'From consultation to your first aligners',
        paragraphs: [
          'At the consultation the dentist examines your teeth, takes an iTero scan, and uses ClinCheck software to plan the movements and show you a 3D animation of the projected result. You approve that plan before aligners are manufactured, so there are no surprises about the outcome.',
          'When the aligners arrive, the dentist bonds small tooth-coloured attachments to certain teeth so the plastic can apply the right forces, and fits your first set. You then progress through the series at home, returning every six to eight weeks for a short check.',
        ],
      },
      {
        heading: 'Finishing and holding the result',
        paragraphs: [
          'Toward the end, many cases need refinements: a short second set of aligners to perfect details the first series did not quite finish. This is routine and often included in the fee. Expect it rather than seeing it as a failure.',
          'Once the teeth are in place, retainers hold them there. Teeth drift for life without retention, so wearing retainers (usually nightly long term) is part of the treatment, not an optional extra. Confirm what retainers you get and what replacements cost.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['invisalign-comfort-and-pain', 'living-with-invisalign'],
    faqs: [
      { question: 'What is ClinCheck?', answer: 'ClinCheck is the digital planning software your dentist uses after the iTero scan to map your tooth movements and show a 3D preview of the result, which you approve before aligners are made.' },
      { question: 'Are refinements part of normal Invisalign treatment?', answer: 'Yes. A second set of aligners to perfect the finish is common and often included in the fee. It adds a few weeks rather than indicating a problem.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-vs-braces',
    title: 'Invisalign vs Braces and Other Aligners',
    shortTitle: 'Vs braces',
    heroBadge: 'Comparing options',
    reservedKeyword: 'invisalign vs braces',
    metaTitle: 'Invisalign vs Braces and Aligners | UK Comparison',
    metaDescription:
      'How Invisalign compares with metal and ceramic braces, lingual braces, and rival aligners like Spark and ClearCorrect, on looks, comfort, cost and suitability.',
    heroDirectAnswer:
      'Invisalign is removable and near-invisible, which suits most adults; fixed braces are not removable but can handle the most complex movements and demand no discipline about wear. On cost the two are broadly comparable in Essex, so the choice usually comes down to discretion, convenience and case complexity.',
    keyPoints: [
      'Invisalign is removable and near-invisible; braces are fixed and always working.',
      'Fixed braces still edge ahead for the most complex movements.',
      'Cost is broadly comparable in Essex, case for case.',
      'Aligners put the discipline on you: they only work at twenty to twenty-two hours a day.',
      'Spark and ClearCorrect are clinic-fitted aligner rivals; at-home kits are a riskier category.',
    ],
    sections: [
      {
        heading: 'Invisalign versus fixed braces',
        paragraphs: [
          'The headline difference is removability. Invisalign comes out to eat, brush and for photos, which most adults value, but it only works when actually worn. Fixed braces cannot be taken out, so they suit patients who would not keep aligners in, including some teenagers.',
          'For comfort, braces can rub the lips and cheeks while aligners have no brackets, though new trays feel tight for a day or two. For the most demanding bite corrections, an orthodontist may still prefer fixed appliances; for the great majority of adult cases, Invisalign achieves the same result discreetly.',
        ],
      },
      {
        heading: 'Invisalign versus other aligner brands',
        paragraphs: [
          'Spark and ClearCorrect are also dentist-fitted clear aligners. Invisalign has the longest track record and largest case dataset; the practical differences between brands matter less than the experience of the clinician planning your case.',
          'At-home, mail-order aligners are a separate category that skips the in-person exam and supervision, which UK dental bodies advise caution about. The provider hub covers how to choose safely.',
        ],
      },
    ],
    treatmentSlugs: ['adults', 'crowded'],
    adjacentHubSlugs: ['invisalign-cost-essex', 'choosing-an-invisalign-provider'],
    faqs: [
      { question: 'Is Invisalign as good as braces?', answer: 'For most adult cases, yes, with the advantage of being removable and discreet. Fixed braces still edge ahead for the most complex movements and need no wear discipline.' },
      { question: 'Does Invisalign cost more than braces?', answer: 'In Essex the two are broadly comparable case for case. The decision usually comes down to discretion and convenience rather than a large price gap.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'living-with-invisalign',
    title: 'Living with Invisalign',
    shortTitle: 'Living with it',
    heroBadge: 'Daily life',
    reservedKeyword: 'living with invisalign',
    metaTitle: 'Living with Invisalign | Eating, Cleaning and Daily Life',
    metaDescription:
      'The day-to-day of Invisalign: eating and drinking rules, cleaning your aligners and teeth, coffee and staining, speech in the first week, and keeping wear time up.',
    heroDirectAnswer:
      'Day to day, Invisalign means taking the aligners out to eat and to drink anything but water, cleaning your teeth and trays before they go back in, and keeping them in for twenty to twenty-two hours a day. You can eat anything you like, which is the big advantage over fixed braces.',
    keyPoints: [
      'Out to eat, out for any drink except plain water, then brush before re-inserting.',
      'No banned-food list: you remove the aligners, so you can eat normally.',
      'Coffee, tea, wine and fizzy drinks stain trays and teeth; have them out.',
      'A slight lisp in the first few days is normal and settles within a week.',
      'Fewer, longer eating windows protect your twenty-hours-a-day wear time.',
    ],
    sections: [
      {
        heading: 'Eating, drinking and cleaning',
        paragraphs: [
          'Because the aligners come out for meals, there is no list of forbidden foods. The discipline is in the drinks: hot drinks can warp the plastic, and coloured or sugary drinks stain and feed decay if trapped under a tray. Plain water is the only thing to drink with them in.',
          'Clean your teeth, or at least rinse well, before re-inserting, and rinse the aligners under cool water. A gentle clean of the trays each morning keeps them clear and odour-free. Avoid hot water and coloured mouthwash on the plastic.',
        ],
      },
      {
        heading: 'Speech, habits and wear time',
        paragraphs: [
          'A slight lisp is common for the first few days as your tongue adapts; reading aloud speeds it up, and it generally passes within a week. Smokers should know that smoking with aligners in stains them quickly, so it means more removal and cleaning.',
          'The thread through all of it is wear time. Aligners only move teeth when worn twenty to twenty-two hours a day, so grazing on snacks and drinks all day quietly eats into the total. Planning food into a few windows is the simplest way to stay on track.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['invisalign-comfort-and-pain', 'invisalign-treatment-process'],
    faqs: [
      { question: 'Can I eat anything with Invisalign?', answer: 'Yes. You take the aligners out to eat, so there is no banned-food list as there is with fixed braces. Just brush before putting them back in.' },
      { question: 'Will Invisalign affect my speech?', answer: 'Most people get a slight lisp for the first few days while the tongue adapts. It usually settles within a week, and reading aloud helps.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-comfort-and-pain',
    title: 'Invisalign Comfort, Pain and Side Effects',
    shortTitle: 'Comfort and pain',
    heroBadge: 'Comfort',
    reservedKeyword: 'does invisalign hurt',
    metaTitle: 'Does Invisalign Hurt? Comfort, Pain and Side Effects',
    metaDescription:
      'What Invisalign feels like: pressure and tenderness rather than sharp pain, sore spots and ulcers, how to relieve aligner pain, and managing the first 48 hours.',
    heroDirectAnswer:
      'Invisalign causes pressure and tenderness rather than sharp pain, strongest in the first one to three days of each new aligner and during the first week overall. It is generally far gentler than fixed braces, and the soreness is easily managed with chewies, softer foods and ordinary painkillers.',
    keyPoints: [
      'Expect pressure and tenderness, not sharp pain, mostly with each new tray.',
      'The first few days of treatment are the most noticeable.',
      'Switch to a new aligner at night to sleep through the tightest phase.',
      'Chewies help seat the aligners fully, which reduces soreness.',
      'Sharp or persistent pain from a specific edge warrants a call to your provider.',
    ],
    sections: [
      {
        heading: 'What it actually feels like',
        paragraphs: [
          'Most people describe Invisalign as a feeling of pressure, with the teeth tender to bite on for a day or two after each new aligner. That is the aligner doing its job. It fades as the teeth settle into the new position, so by the end of each tray the same aligner feels loose.',
          'Some patients get temporary rough spots or small ulcers where an aligner edge meets the gum or cheek. A dentist can smooth a sharp edge quickly, and orthodontic wax helps in the meantime.',
        ],
      },
      {
        heading: 'Managing the soreness',
        paragraphs: [
          'The practical tricks are simple: change trays at bedtime, use the small foam chewies your clinic provides to seat each aligner fully, stick to softer foods for the first day of a new tray, and take ordinary over-the-counter painkillers if you need them.',
          'Discomfort that is sharp rather than dull, that does not settle after a few days, or that comes from one specific point, is worth a call to your provider rather than something to push through.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['living-with-invisalign', 'invisalign-treatment-process'],
    faqs: [
      { question: 'Does Invisalign hurt more than braces?', answer: 'Generally no. There are no brackets to rub, and the sensation is pressure and tenderness with each new tray rather than the ongoing soreness many feel with fixed braces.' },
      { question: 'How do I stop Invisalign hurting?', answer: 'Switch trays at night, use chewies to seat them, eat softer foods for a day, and take ordinary painkillers if needed. See a provider about sharp or persistent pain.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-for-teens',
    title: 'Invisalign for Teens and Children',
    shortTitle: 'Teens',
    heroBadge: 'For teenagers',
    reservedKeyword: 'invisalign teen',
    metaTitle: 'Invisalign Teen | Guide for Parents in Essex',
    metaDescription:
      'Invisalign Teen explained for Essex parents: compliance indicators, the right age to start, school and sport, and how to think about cost.',
    heroDirectAnswer:
      'Invisalign Teen is designed for younger, still-growing patients, with compliance indicators that fade with wear and replacement aligners built in for lost ones. It works very well for a motivated teenager who will wear the aligners, and is a private cost in Essex since the NHS funds fixed braces only.',
    keyPoints: [
      'Compliance indicators let you and the dentist see the aligners are being worn.',
      'Eruption allowances accommodate teeth still coming through.',
      'Replacement aligners for lost ones are built into the plan.',
      'Discipline is the deciding factor: a teen who will not wear them needs fixed braces.',
      'Private in Essex; the NHS funds fixed braces for eligible children, not aligners.',
    ],
    sections: [
      {
        heading: 'Is your teenager a good candidate?',
        paragraphs: [
          'Invisalign Teen suits a motivated young person who values the discretion for school, sport and socialising and will keep the aligners in for twenty to twenty-two hours a day. The blue compliance indicators give parents a visible check rather than relying on trust.',
          'If a teenager is unlikely to wear removable aligners consistently, fixed braces they cannot take out are the more reliable route. An honest provider will say so at the consultation.',
        ],
      },
      {
        heading: 'School, sport and cost',
        paragraphs: [
          'Aligners are easy around school and sport: they come out for contact sports and mouthguards, and being near-invisible they avoid the self-consciousness some teenagers feel with metal braces. The main asks are discipline about wear and looking after the trays.',
          'Cost is private in Essex, usually spread over a clinic finance plan. The cost hub covers price bands, and the parents spoke below goes deeper on the family decision.',
        ],
      },
    ],
    treatmentSlugs: ['crowded'],
    adjacentHubSlugs: ['invisalign-for-adults', 'invisalign-cost-essex'],
    faqs: [
      { question: 'What age can a child start Invisalign?', answer: 'Invisalign Teen is for younger patients once enough adult teeth are through, typically the early-to-mid teens. The provider assesses readiness at the consultation.' },
      { question: 'How do parents know the aligners are being worn?', answer: 'Invisalign Teen aligners have blue compliance indicators that fade with wear, giving a visible check alongside the dentist’s monitoring.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-for-adults',
    title: 'Invisalign for Adults and Professionals',
    shortTitle: 'Adults',
    heroBadge: 'For adults',
    reservedKeyword: 'invisalign for adults',
    metaTitle: 'Invisalign for Adults and Professionals | Essex Guide',
    metaDescription:
      'Why Invisalign suits adults and professionals: discretion at work, treating relapse after childhood braces, over-40s and over-50s, and fitting it around busy lives.',
    heroDirectAnswer:
      'Invisalign is well suited to adults: it is discreet enough for client-facing work, removable for meals and occasions, and there is no upper age limit, so over-40s and over-50s are treated routinely. A very common reason adults start is relapse, where teeth have drifted since childhood braces.',
    keyPoints: [
      'Near-invisible and removable, so it fits professional and social life.',
      'No upper age limit: healthy teeth and gums matter more than age.',
      'Relapse after childhood braces is one of the most common adult cases.',
      'Short, infrequent check-ins suit busy and commuting schedules.',
      'Existing crowns, fillings and bridges are usually fine with planning.',
    ],
    sections: [
      {
        heading: 'Discretion, age and relapse',
        paragraphs: [
          'For working adults the appeal is obvious: aligners are close to invisible and come out for a presentation or a meal. There is no upper age limit on moving teeth, so what matters is the health of the teeth and gums, not the number on your birthday. Over-50s are treated regularly.',
          'A large share of adult cases is relapse: teeth that were straightened as a teenager but drifted because retainers were stopped. Invisalign is a discreet way to correct that, and this time the lesson is to keep wearing retainers afterward.',
        ],
      },
      {
        heading: 'Working it around real life',
        paragraphs: [
          'Treatment fits a busy schedule well. After the scan and plan, check-ins are short and every six to eight weeks, so a commuter can manage with the occasional early or Saturday slot near home rather than near work.',
          'Adults with existing dental work (crowns, veneers, bridges or implants) can usually still have Invisalign; the dentist plans around them, and aligners may avoid the bracket-bonding issues fixed braces create on restored teeth.',
        ],
      },
    ],
    treatmentSlugs: ['adults', 'crowded', 'gaps'],
    adjacentHubSlugs: ['invisalign-for-teens', 'invisalign-in-essex'],
    faqs: [
      { question: 'Is there an age limit for Invisalign?', answer: 'No. Adults of any age can have Invisalign provided the teeth and gums are healthy. Over-40s and over-50s are treated routinely.' },
      { question: 'Can I have Invisalign if I had braces as a child?', answer: 'Yes, and relapse after childhood braces is one of the most common adult reasons to start. Keep wearing retainers afterward to hold the result.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'what-invisalign-can-fix',
    title: 'What Invisalign Can Fix',
    shortTitle: 'Suitability',
    heroBadge: 'Suitability',
    reservedKeyword: 'invisalign suitability',
    metaTitle: 'What Invisalign Can Fix | Crowding, Gaps, Bite Problems',
    metaDescription:
      'What Invisalign treats: crowded teeth, gaps, overbite, underbite and crossbite, how far it can go on complex cases, and where fixed braces still win.',
    heroDirectAnswer:
      'Invisalign treats most common orthodontic problems: crowded teeth, gaps, and bite issues including overbite, underbite and crossbite. It handles the majority of adult cases well; very severe skeletal bite problems or the most complex movements may still need fixed braces or specialist input.',
    keyPoints: [
      'Crowded teeth and gaps are bread-and-butter Invisalign cases.',
      'Overbite, underbite and crossbite can often be corrected, sometimes with elastics.',
      'Each condition has its own treatment page with the detail.',
      'Very severe skeletal cases may need fixed braces or specialist referral.',
      'A scan and ClinCheck confirm what is realistic for your teeth.',
    ],
    sections: [
      {
        heading: 'The common cases',
        paragraphs: [
          'Crowding (teeth overlapping for want of space) and spacing (visible gaps) are the most straightforward things Invisalign corrects, often within a Lite or moderate plan. Mild to moderate bite problems, where the upper and lower teeth do not meet correctly, are also routinely treated.',
          'Bite correction sometimes uses buttons and elastics alongside the aligners to shift the arches into a better relationship. Your dentist explains whether your case needs this at the planning stage. Each condition is covered on its own treatment page.',
        ],
      },
      {
        heading: 'Where it reaches its limits',
        paragraphs: [
          'Invisalign is powerful but not unlimited. The most severe skeletal discrepancies, large rotations on certain teeth, or cases needing significant jaw correction can sit beyond what aligners alone achieve, and an honest provider will say when fixed braces or a specialist orthodontist is the better route.',
          'The only reliable way to know is an in-person exam and a 3D scan. A ClinCheck plan shows what the movements can realistically deliver before you commit to anything.',
        ],
      },
    ],
    treatmentSlugs: ['crowded', 'gaps', 'overbite', 'underbite', 'crossbite'],
    adjacentHubSlugs: ['invisalign-treatment-process', 'invisalign-for-adults'],
    faqs: [
      { question: 'Can Invisalign fix an overbite?', answer: 'Often yes. Many overbite, underbite and crossbite cases are treatable with Invisalign, sometimes using buttons and elastics. Very severe skeletal cases may need fixed braces or specialist input.' },
      { question: 'Is Invisalign suitable for crowded teeth?', answer: 'Yes, crowding is one of the most common Invisalign cases and is often corrected within a Lite or moderate plan. A scan confirms what is realistic.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'invisalign-in-essex',
    title: 'Invisalign in Essex: A Local Guide',
    shortTitle: 'In Essex',
    heroBadge: 'Local guide',
    reservedKeyword: 'invisalign essex guide',
    metaTitle: 'Invisalign in Essex | Local Guide to Providers and Clinics',
    metaDescription:
      'A local guide to Invisalign in Essex: finding a Platinum clinic near you, NHS access in mid and south Essex, commuter tips, and town-by-town coverage.',
    heroDirectAnswer:
      'Essex is well served for Invisalign, with verified Platinum providers across Chelmsford, Southend, Colchester, Basildon, Brentwood and the surrounding towns. Treatment is private, generally cheaper than London, and easy to fit around a commute thanks to short, infrequent check-ins.',
    keyPoints: [
      'Platinum providers across the main Essex towns, most within a short drive.',
      'Private treatment: NHS orthodontics in mid and south Essex is fixed braces for eligible children only.',
      'Generally cheaper than central London for the same treatment.',
      'Short, infrequent appointments suit commuters and busy schedules.',
      'Use the clinics directory and town pages to find a provider near you.',
    ],
    sections: [
      {
        heading: 'Finding a provider near you',
        paragraphs: [
          'The practical question for most Essex patients is which Platinum clinic is a sensible distance from home or station. The clinics directory lists verified providers with their tier, location and treatment range, and each town page covers the local picture. Most Essex postcodes are within a reasonable drive of at least one Platinum provider.',
          'Provider tier is worth checking because it moves annually with case volume. We re-confirm tiers and route enquiries only to verified providers, so you are comparing like for like.',
        ],
      },
      {
        heading: 'The Essex context',
        paragraphs: [
          'NHS orthodontic access across the Mid and South Essex and North East Essex footprints is stretched and limited to eligible children with fixed braces, so adult Invisalign is firmly private. The upside is that Essex pricing undercuts London for clinically equivalent work.',
          'For commuters, the combination of near-invisible aligners and infrequent local check-ins makes treatment genuinely low-disruption. The local spokes below go deeper on commuting, timing around events, and what to ask at a consultation.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['choosing-an-invisalign-provider', 'invisalign-cost-essex'],
    faqs: [
      { question: 'Where can I get Invisalign in Essex?', answer: 'Verified Platinum providers operate across Chelmsford, Southend, Colchester, Basildon, Brentwood and other towns. The clinics directory and town pages list options near you.' },
      { question: 'Is Invisalign available on the NHS in Essex?', answer: 'No. NHS orthodontics in Essex is fixed braces for eligible children only. Adult Invisalign is a private treatment.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'choosing-an-invisalign-provider',
    title: 'Choosing an Invisalign Provider and At-Home Aligner Risks',
    shortTitle: 'Choosing a provider',
    heroBadge: 'Provider choice',
    reservedKeyword: 'invisalign provider vs mail order',
    metaTitle: 'Choosing an Invisalign Provider | Tiers, Vetting, At-Home Risks',
    metaDescription:
      'How to choose an Essex Invisalign provider: what Platinum and Diamond tiers mean, what to check, getting a second opinion, and why at-home aligners are risky.',
    heroDirectAnswer:
      'Choose an Invisalign provider on genuine experience and transparency, not the lowest quote. Platinum or Diamond tier signals real case volume, you should see your ClinCheck before committing, and the full cost (including retainers and refinements) should be in writing. At-home, mail-order aligners skip the supervision that makes treatment safe.',
    keyPoints: [
      'Provider tier (Platinum, Diamond) reflects case volume and moves annually.',
      'You should see your ClinCheck plan before authorising aligners.',
      'Get the total cost, refinements and retainers confirmed in writing.',
      'A second opinion is reasonable; clinics run a comparative ClinCheck for free.',
      'At-home aligner kits skip the exam, X-rays and supervision: avoid them.',
    ],
    sections: [
      {
        heading: 'What the tiers mean and what to check',
        paragraphs: [
          'Align Technology ranks providers by rolling case volume: Bronze through Silver, Gold, Platinum, Platinum Elite and Diamond. Higher tiers mean more Invisalign cases completed, which generally means more experience, though the individual clinician’s skill is what counts. Because tiers move with volume, always ask for the current one.',
          'Beyond tier, check that the clinic will show you your ClinCheck before you commit, quotes the total cost in writing including refinements and retainers, and gives a named GDC-registered clinician accountable for your care. Vague answers or pressure to sign on the day are warning signs.',
        ],
      },
      {
        heading: 'Why at-home aligners are different',
        paragraphs: [
          'Mail-order aligner kits move teeth without an in-person examination, X-rays or ongoing supervision. Moving teeth with undetected gum disease or decay can cause real harm, and recourse is limited if something goes wrong. UK dental bodies have repeatedly advised caution.',
          'Dentist-supervised Invisalign is the safeguard you are paying for. If cost is the driver, finance is the answer rather than an unsupervised kit. How we vet the providers we list is set out on the how-we-vet-providers page.',
        ],
      },
    ],
    treatmentSlugs: ['adults'],
    adjacentHubSlugs: ['invisalign-in-essex', 'invisalign-vs-braces'],
    faqs: [
      { question: 'What does Platinum or Diamond Invisalign provider mean?', answer: 'They are Align Technology tiers based on rolling case volume. Platinum and Diamond providers have completed many Invisalign cases, signalling experience. Tiers move annually, so ask for the current one.' },
      { question: 'Are at-home aligners a safe cheaper option?', answer: 'No. They skip the in-person exam, X-rays and supervision that keep tooth movement safe. If cost is the issue, a finance plan with a supervised provider is the safer route.' },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
];

export const GUIDE_HUBS_BY_SLUG: Record<string, GuideHub> = Object.fromEntries(
  GUIDE_HUBS.map(h => [h.slug, h])
);

export const GUIDE_HUB_SLUGS = GUIDE_HUBS.map(h => h.slug);

export function getGuideHubBySlug(slug: string): GuideHub | undefined {
  return GUIDE_HUBS_BY_SLUG[slug];
}
