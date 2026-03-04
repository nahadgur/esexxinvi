export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: 'crowded',
    title: 'Invisalign for Crowded Teeth',
    slug: 'crowded',
    description: 'Effectively straighten teeth that overlap or lack space. Crowded teeth can lead to plaque buildup and gum disease.',
    image: 'https://images.unsplash.com/photo-1660732205543-dfef1a8761f7?q=80&w=1170&auto=format&fit=crop',
    icon: 'Users',
    color: 'sky',
    faqs: [
      { question: "How long does Invisalign take for crowded teeth?", answer: "Treatment for crowded teeth typically takes 12-18 months depending on severity. Mild crowding can be treated with Invisalign Lite in as few as 6 months." },
      { question: "Can Invisalign fix severe crowding?", answer: "Yes — Platinum and Diamond providers have the expertise to handle severe crowding using advanced techniques like IPR (interproximal reduction) and strategic staging of tooth movements." },
      { question: "Is crowding treatment more expensive?", answer: "Crowding cases typically fall under Full Invisalign treatment, ranging from £3,000 to £5,500. Complex cases may be at the higher end due to additional aligner sets needed." },
    ],
  },
  {
    id: 'gaps',
    title: 'Invisalign for Gaps',
    slug: 'gaps',
    description: 'Close noticeable spaces between your teeth quickly. Gaps can bring your smile together seamlessly.',
    image: 'https://images.pexels.com/photos/6502308/pexels-photo-6502308.jpeg',
    icon: 'Sparkles',
    color: 'indigo',
    faqs: [
      { question: "How quickly can Invisalign close gaps?", answer: "Small gaps can often be closed in 3-6 months with Invisalign Lite or Express. Larger spaces may require 9-12 months of Full Invisalign treatment." },
      { question: "Will gaps come back after treatment?", answer: "With proper retainer use after treatment, your results should be permanent. Your provider will supply Vivera retainers to maintain your new smile." },
      { question: "Can Invisalign close large gaps?", answer: "Invisalign can close gaps up to approximately 6mm. Very large gaps may require a combination approach — your Platinum provider will advise on the best strategy." },
    ],
  },
  {
    id: 'overbite',
    title: 'Invisalign for Overbite',
    slug: 'overbite',
    description: 'Correct deep bites where upper teeth overlap lower teeth significantly. Modern attachments handle complex movements.',
    image: 'https://images.pexels.com/photos/15073697/pexels-photo-15073697.jpeg',
    icon: 'Shield',
    color: 'emerald',
    faqs: [
      { question: "Can Invisalign really fix an overbite?", answer: "Yes. Modern Invisalign with Precision Wings and SmartForce attachments can effectively correct overbites. Platinum providers have the advanced training to manage these complex cases." },
      { question: "How long does overbite correction take?", answer: "Overbite correction typically takes 12-24 months depending on severity. Your ClinCheck plan will show the projected timeline during your consultation." },
      { question: "Is overbite treatment with Invisalign painful?", answer: "You may experience pressure when wearing elastics or new attachments, but most patients find it significantly more comfortable than traditional braces with headgear." },
    ],
  },
  {
    id: 'underbite',
    title: 'Invisalign for Underbite',
    slug: 'underbite',
    description: 'Address underbites to enhance facial profile and prevent wear. Invisalign is a gentle alternative to corrective surgery.',
    image: 'https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg',
    icon: 'Medal',
    color: 'amber',
    faqs: [
      { question: "Can Invisalign fix an underbite without surgery?", answer: "Many mild to moderate underbites can be treated with Invisalign alone. Severe skeletal underbites may require surgery, but a Platinum provider can determine your options." },
      { question: "How effective is Invisalign for underbites?", answer: "Invisalign is highly effective for dental underbites (caused by tooth position). Success rates are excellent when treated by experienced Platinum or Diamond providers." },
      { question: "What age is best for underbite treatment?", answer: "Underbite treatment can be effective at any age, though earlier intervention (teens) can take advantage of jaw growth. Adult treatment is equally successful for dental underbites." },
    ],
  },
  {
    id: 'crossbite',
    title: 'Invisalign for Crossbite',
    slug: 'crossbite',
    description: 'Fix crossbites to prevent jaw pain and tooth chipping. Clear aligners widen the arch for a balanced bite.',
    image: 'https://images.unsplash.com/photo-1581939511501-4ec557ff0957?q=80&w=1170&auto=format&fit=crop',
    icon: 'Globe',
    color: 'rose',
    faqs: [
      { question: "How does Invisalign fix a crossbite?", answer: "Invisalign uses programmed arch expansion and individual tooth movements to correct crossbites. SmartForce attachments provide the precision needed for these complex movements." },
      { question: "Is crossbite treatment more complex?", answer: "Crossbites are among the more complex cases, which is why we only recommend Platinum and Diamond providers — they have the case volume and expertise to achieve reliable results." },
      { question: "Can crossbite treatment improve jaw pain?", answer: "Yes. Correcting a crossbite often alleviates TMJ symptoms and jaw pain by bringing the bite into proper alignment and reducing strain on the jaw joints." },
    ],
  },
  {
    id: 'adults',
    title: 'Invisalign for Adults',
    slug: 'adults',
    description: 'Professional, discreet aligners designed for busy lifestyles. Straighten your teeth without the traditional braces look.',
    image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=1170&auto=format&fit=crop',
    icon: 'User',
    color: 'sky',
    faqs: [
      { question: "Am I too old for Invisalign?", answer: "There is no upper age limit for Invisalign treatment. As long as your teeth and gums are healthy, clear aligners can effectively straighten your teeth at any age." },
      { question: "Will people notice I'm wearing Invisalign?", answer: "Invisalign aligners are virtually invisible. Most people won't notice you're wearing them during normal conversation, meetings, or social situations." },
      { question: "Can I get Invisalign if I had braces as a child?", answer: "Absolutely. Re-treatment with Invisalign is very common for adults whose teeth have shifted after childhood braces. Invisalign Lite is often ideal for these relapse cases." },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
