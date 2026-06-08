export const assets = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85',
  about: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
  card1: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85',
  card4: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
  card5: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
  card6: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
  card8: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
}

export const services = [
  {
    title: 'AI Strategy',
    text: 'We help you identify opportunities for AI adoption and implement the right solutions.',
    image: assets.card1,
  },
  {
    title: 'Business consulting',
    text: 'Design operating models, customer journeys, and measurable roadmaps for intelligent growth.',
    image: assets.card6,
    dark: true,
  },
  {
    title: 'Data & insights',
    text: 'Transform raw data into strategic insight using analytics, dashboards, and predictive modeling.',
    image: assets.card4,
  },
]

export const plans = [
  {
    name: 'Starter Plan',
    text: 'Perfect for small teams beginning to explore AI and automation.',
    price: '$2,500',
    features: ['Strategy consultation up to 10 hours', 'Business process mapping', 'Basic AI workflow setup', 'Email support'],
  },
  {
    name: 'Growth Plan',
    text: 'Designed for growing companies ready to integrate AI into their operations.',
    price: '$8,500',
    featured: true,
    features: ['Dedicated consultant', 'End-to-end automation setup', 'Predictive analytics dashboards', 'AI-driven reporting & insights'],
  },
  {
    name: 'Enterprise Plan',
    text: 'Custom-built for enterprises seeking full-scale transformation optimization.',
    price: '$10,500',
    features: ['Tailored AI implementation roadmap', 'Custom automation architecture', 'Advanced data analytics', '24/7 premium support'],
  },
]

export const posts = [
  {
    title: 'Turning Data into Strategy: The Power of Analytics',
    date: 'September 16, 2025',
    slug: '/blog/turning-data-into-strategy-the-power-of-analytics',
    image: assets.card8,
    text: 'A practical look at turning signals, dashboards, and patterns into choices leaders can trust.',
  },
  {
    title: '5 Ways AI Can Streamline Business Operations',
    date: 'September 22, 2025',
    slug: '/blog/5-ways-ai-can-streamline-business-operations',
    image: assets.card5,
    text: 'Where automation can remove repetitive work while keeping people in control.',
  },
  {
    title: 'Human + Machine: Finding the Perfect Balance',
    date: 'November 5, 2025',
    slug: '/blog/human-machine-finding-perfect-balance',
    image: assets.card6,
    text: 'How teams can combine judgment and intelligent systems without losing craft.',
  },
]

export const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We partner with organizations of all sizes across retail, technology, finance, manufacturing, and professional services.',
  },
  {
    question: 'How does your consulting process work?',
    answer: 'We begin with discovery, design a focused roadmap, then execute and monitor outcomes with transparent measures.',
  },
  {
    question: 'What makes your AI solutions different?',
    answer: 'Our solutions are built around your data and workflows, with practicality, integration, and ROI at the center.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients see early improvements within weeks, with deeper returns developing over the following months.',
  },
]
