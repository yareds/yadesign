import { ServiceItem, ProcessStep, Testimonial, TechCategory } from '../types';

export const STUDIO_INFO = {
  name: 'YA Design',
  tagline: 'Software that runs real businesses, not just demos.',
  location: 'Remote & Worldwide',
  workingRadius: 'Working with clients remotely worldwide',
  email: 'yared.abegaz@gmail.com',
  description: 'YA Design designs and builds custom web applications, business management systems, e-commerce platforms, and digital experiences — end to end, one team from discovery through support.'
};

export const PRINCIPLES = [
  {
    number: '01',
    title: 'Built for the business, not the demo',
    description: 'We do not build flimsy hackathon prototypes. Every database schema, state loop, and UI component is engineered for daily production use by real people.'
  },
  {
    number: '02',
    title: 'One team, start to finish',
    description: 'No handoffs to junior contractors or outsourced sub-teams. From initial architectural whiteboarding through UI polish and Cloud Run deployment, you work with the same core engineers.'
  },
  {
    number: '03',
    title: 'Designed for where it is used',
    description: 'Currency formats, multi-language needs, mobile data constraints, and local payment or messaging handoffs (like Telegram and WhatsApp) are baseline design inputs, never afterthoughts.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    description: 'Tailored React 19 & TypeScript frontends paired with robust server architecture built for security, high density, and long-term maintainability.',
    icon: 'LayoutGrid'
  },
  {
    id: 'business-systems',
    title: 'Business Management Systems',
    description: 'Centralized operational dashboards, inventory management, multi-building property portals, and automated internal workflows.',
    icon: 'Database'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Marketplaces',
    description: 'High-converting fashion storefronts, auction platforms, multi-currency display, and seamless Telegram / WhatsApp checkout handoffs.',
    icon: 'ShoppingBag'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Bespoke design systems, typography pairing, mathematical spacing grids, and high-fidelity prototypes crafted for speed and legibility.',
    icon: 'Figma'
  },
  {
    id: 'responsive-sites',
    title: 'Responsive Web Platforms',
    description: 'Lightning-fast mobile-first websites optimized for search rankings, clean semantic HTML, keyboard accessibility, and low network latency.',
    icon: 'MonitorCheck'
  },
  {
    id: 'maintenance',
    title: 'Ongoing Support & Refactoring',
    description: 'Post-launch codebase evolution, cloud database optimizations, security audits, and continuous feature additions for growing software.',
    icon: 'Wrench'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your business model, operational bottlenecks, user needs, and exact project constraints before writing code.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting wireframes, design systems, and interactive prototypes with deliberate typography and brand identity.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building clean, modular full-stack applications with React 19, TypeScript, and optimized backend architectures.'
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Rigorous cross-device quality assurance, accessibility audits, multi-currency testing, and edge-case handling.'
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Zero-downtime production deployment to modern Cloud Run or Vercel infrastructure with automated SSL and CDN setup.'
  },
  {
    number: '06',
    title: 'Support',
    description: 'Continuous monitoring, iterative feature additions, performance tuning, and active maintenance to keep software running strong.'
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Frontend',
    items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion / Framer']
  },
  {
    category: 'Backend & Data',
    items: ['Firebase', 'Firestore', 'Supabase', 'PostgreSQL', 'Express.js']
  },
  {
    category: 'Intelligence & Analytics',
    items: ['Gemini AI API', 'Recharts', 'Data Visualization', 'Search Grounding']
  },
  {
    category: 'Tooling & Hosting',
    items: ['GitHub', 'Vercel', 'Google Cloud Run', 'Node.js', 'ESBuild']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Henok Tadesse',
    quote: 'YA Design built our property management system from the ground up. We replaced messy spreadsheets with a real-time dashboard that our field staff and property owners love using every day.',
    role: 'Property Portfolio Director',
    location: 'Addis Ababa & Global',
    projectRelation: 'GETCH Property Manager',
    rating: 5,
    date: '2026-07-15',
    isVisitor: false,
    helpfulCount: 14
  },
  {
    id: 't2',
    name: 'Sara Kifle',
    quote: 'The BUNA Ethiopia coffee experience brought our brand into the modern digital age without losing the cultural soul of Ethiopian coffee craftsmanship.',
    role: 'Specialty Coffee Brand Founder',
    location: 'Ethiopia & Global',
    projectRelation: 'BUNA Ethiopia Platform',
    rating: 5,
    date: '2026-06-28',
    isVisitor: false,
    helpfulCount: 19
  },
  {
    id: 't3',
    name: 'Dawit Solomon',
    quote: 'Our fashion marketplace needed localized checkout options like Telegram deep links alongside multi-currency display. YA Design delivered production code in weeks.',
    role: 'E-commerce Operations Lead',
    location: 'Ethiopia',
    projectRelation: 'EthioShein Marketplace',
    rating: 5,
    date: '2026-05-12',
    isVisitor: false,
    helpfulCount: 11
  }
];
