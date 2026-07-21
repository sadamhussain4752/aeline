import { assets } from './aeline-content'

export type ServiceCategory = 'digital' | 'offline'

export type ServiceCard = {
  title: string
  slug: string
  category: ServiceCategory
  text: string
  image: string
  deliverables: string[]
}

export const digitalServices = [
  'Digital Marketing Service',
  'SEO',
  'Website Design Development',
  'Social Media Marketing',
  'Creative Designing',
  'Mobile Application',
]

export const offlineServices = [
  'Marketing Collaterals',
  'Out of Home',
  'Paper insert',
  'Transit Media',
  'Retail Branding & Signages',
  'Events and activations',
]

export const digitalServiceCards: ServiceCard[] = [
  {
    title: 'Digital Marketing Service',
    slug: 'digital-marketing-service',
    category: 'digital',
    text: 'Performance campaigns, content planning, audience targeting, and reporting built to turn attention into measurable leads.',
    image: assets.card8,
    deliverables: ['Growth strategy', 'Campaign planning', 'Audience targeting', 'Performance reporting'],
  },
  {
    title: 'SEO',
    slug: 'seo',
    category: 'digital',
    text: 'Technical SEO, keyword planning, content structure, and search visibility improvements for long-term organic growth.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Technical audit', 'Keyword strategy', 'Content optimization', 'Ranking reports'],
  },
  {
    title: 'Website Design Development',
    slug: 'website-design-development',
    category: 'digital',
    text: 'Modern websites with clear UX, fast performance, responsive layouts, and conversion-focused content presentation.',
    image: assets.card1,
    deliverables: ['UX planning', 'Responsive design', 'Frontend development', 'Speed optimization'],
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    category: 'digital',
    text: 'Daily creative systems for social posts, campaigns, community growth, paid promotion, and platform-ready brand content.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Content calendar', 'Post design', 'Caption writing', 'Growth tracking'],
  },
  {
    title: 'Creative Designing',
    slug: 'creative-designing',
    category: 'digital',
    text: 'Campaign visuals, brand assets, launch graphics, print-ready layouts, and digital creatives with one consistent style.',
    image: assets.about,
    deliverables: ['Campaign creatives', 'Brand graphics', 'Print layouts', 'Social assets'],
  },
  {
    title: 'Mobile Application',
    slug: 'mobile-application',
    category: 'digital',
    text: 'User-friendly mobile app experiences, interface planning, feature flows, and scalable product presentation.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['App strategy', 'UI screens', 'User flows', 'Launch support'],
  },
]

export const offlineServiceCards: ServiceCard[] = [
  {
    title: 'Marketing Collaterals',
    slug: 'marketing-collaterals',
    category: 'offline',
    text: 'Brochures, flyers, posters, product sheets, and branded print assets designed for strong offline recall.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Brochures', 'Flyers', 'Posters', 'Print-ready artwork'],
  },
  {
    title: 'Out of Home',
    slug: 'out-of-home',
    category: 'offline',
    text: 'Large-format OOH campaigns with bold messaging, clean layouts, and high-distance readability.',
    image: assets.card4,
    deliverables: ['Hoardings', 'Outdoor layouts', 'Media planning', 'Visibility strategy'],
  },
  {
    title: 'Paper insert',
    slug: 'paper-insert',
    category: 'offline',
    text: 'Newspaper and leaflet insert campaigns planned with clear offers, local reach, and sharp print design.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Offer planning', 'Leaflet design', 'Print artwork', 'Distribution guidance'],
  },
  {
    title: 'Transit Media',
    slug: 'transit-media',
    category: 'offline',
    text: 'Campaign systems for buses, autos, metro placements, stations, and moving audience impressions.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Bus branding', 'Auto branding', 'Metro placements', 'Route-based planning'],
  },
  {
    title: 'Retail Branding & Signages',
    slug: 'retail-branding-and-signages',
    category: 'offline',
    text: 'In-store visibility, fascia design, wayfinding, POSM, and signage systems for stronger retail presence.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Store signage', 'Fascia design', 'POSM', 'Wayfinding'],
  },
  {
    title: 'Events and activations',
    slug: 'events-and-activations',
    category: 'offline',
    text: 'Launch events, booth branding, on-ground activations, and audience engagement ideas built for recall.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    deliverables: ['Launch events', 'Booth branding', 'Activation ideas', 'Audience engagement'],
  },
]

export const allServiceCards = [...digitalServiceCards, ...offlineServiceCards]
