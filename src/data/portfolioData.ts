import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'getch-property-manager',
    name: 'GETCH Property Manager',
    category: 'Business Software',
    year: '2025',
    status: 'Live',
    repo: 'github.com/yareds/Getch-Property-Manager',
    tagline: 'Centralized operations for a multi-building rental portfolio',
    description: 'A dashboard for a real property portfolio — buildings, units, leases, tenants, payments, and maintenance in one place, with financial analytics. Rebuilt on Firebase for real-time sync and per-owner data isolation.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Recharts', 'Motion'],
    features: [
      'Building, unit, and lease management with tenant records',
      'Payment tracking and collections analytics',
      'Maintenance request workflow with status tracking',
      'Document storage per property',
      'Real-time sync and per-owner Firestore rules'
    ],
    accent: 'brass',
    architectureHighlights: [
      'Firestore Security Rules with strict multi-tenant owner scoping',
      'Normalized data schema for buildings, units, leases, and ledger transactions',
      'Reactive snapshot listeners for zero-latency dashboard state updates'
    ],
    targetAudience: 'Property managers and multi-building real estate owners in urban centers.'
  },
  {
    id: 'buna-ai',
    name: 'BUNA Ethiopia',
    category: 'E-commerce',
    year: '2025',
    status: 'Live',
    repo: 'github.com/yareds/coffee-shop',
    tagline: 'A premium Ethiopian coffee discovery experience',
    description: 'A full-stack coffee platform with an AI taste quiz, a custom drink builder, a digital coffee passport, and lucky-bean rewards gamification — backed by an owner analytics dashboard.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API', 'Recharts', 'Motion'],
    features: [
      'AI-powered taste-profile quiz and recommendations',
      'Custom drink builder with live pricing',
      'Digital coffee passport and loyalty gamification',
      'Owner analytics dashboard',
      'Interactive brew timer and origin map'
    ],
    accent: 'rust',
    architectureHighlights: [
      'Gemini API integration for personalized roast profiling based on taste preferences',
      'Interactive roast radar charts and origin mapping across Ethiopian coffee regions (Yirgacheffe, Sidama, Guji)',
      'Client-side state persistence for digital coffee passport stamps and beans earned'
    ],
    targetAudience: 'Specialty coffee roasters, cafes, and international coffee enthusiasts.'
  },
  {
    id: 'ethio-phone-auction',
    name: 'ETPhone Auction',
    category: 'Marketplace',
    year: '2025',
    status: 'Live',
    repo: 'github.com/yareds/ethioPhone-auction',
    tagline: 'A real-time marketplace for buying and selling used phones',
    description: 'A production-grade auction marketplace connecting verified phone shops and individual sellers. Buyers bid in real time, sellers manage live listings, shop accounts get a public storefront, with an admin layer for oversight.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API', 'Motion'],
    features: [
      'Real-time bidding on live listings',
      'Separate buyer and seller dashboards',
      'Verified shop storefronts alongside individual sellers',
      'Admin panel for marketplace oversight',
      'Structured onboarding/signup flow'
    ],
    accent: 'teal',
    architectureHighlights: [
      'High-concurrency bidding model with automatic countdown timers and increment validations',
      'Merchant verification pipeline for retail phone shops in local electronics hubs',
      'Automated device diagnostic checks aided by smart specifications parsing'
    ],
    targetAudience: 'Electronics retailers, refurbishers, and peer-to-peer device buyers.'
  },
  {
    id: 'ethio-shein',
    name: 'EthioShein Marketplace',
    category: 'E-commerce',
    year: '2025',
    status: 'Live',
    repo: 'github.com/yareds/Ethio-shein',
    tagline: 'Localized fashion e-commerce for the Ethiopian market',
    description: 'A fashion storefront pairing traditional Habesha handwoven wear with modern, SHEIN-inspired styles — checkout via Telegram, WhatsApp, or phone handoff, multi-currency display throughout.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API', 'Motion'],
    features: [
      'Product catalog with cart and detail views',
      'Multi-currency price display',
      'Checkout handoff via Telegram/WhatsApp/phone',
      'Admin dashboard for catalog management',
      'Warm, editorial visual identity'
    ],
    accent: 'brass',
    architectureHighlights: [
      'Direct social-checkout handoff deep links tailored for Telegram & WhatsApp commerce channels',
      'Real-time multi-currency calculator switching between ETB, USD, and EUR',
      'Responsive editorial layouts with high-density image galleries and size guides'
    ],
    targetAudience: 'Ethiopian fashion boutiques, artisans, and fashion-forward online shoppers.'
  },
  {
    id: 'digital-wedding-invitation',
    name: 'Digital Wedding Invitation',
    category: 'Custom Digital Experience',
    year: '2024',
    status: 'Live',
    repo: 'github.com/yareds/wedding-invitation-',
    tagline: 'An elegant, interactive invitation for Sebastian & ቤዛዊት',
    description: 'A bespoke digital invitation replacing the printed card — cinematic splash and story section, order-of-events timeline, photo gallery lightbox, ambient music, structured RSVP collection.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    features: [
      'Cinematic splash intro and love-story section',
      'Order-of-events timeline',
      'Photo gallery with lightbox',
      'Ambient background music with player control',
      'Structured RSVP collection'
    ],
    accent: 'rust',
    architectureHighlights: [
      'Custom Web Audio API background music player with smooth fade-in and mute toggles',
      'Bilingual Amharic & English typography orchestration with animated timeline components',
      'Low-latency guest RSVP engine with meal preference & head-count collection'
    ],
    targetAudience: 'Couples seeking bespoke, high-touch event experiences and digital keepsakes.'
  },
  {
    id: 'event-negotiation-tracker',
    name: 'Event Negotiation Tracker',
    category: 'Business Software',
    year: '2025',
    status: 'In development',
    repo: 'github.com/yareds/Event-negotiation-tracker-',
    tagline: 'A vendor-negotiation workflow tool for event planners',
    description: 'An internal tool for tracking vendor negotiations across an event — structured around a real database schema and MVC architecture, with a live transactional-email simulation.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    features: [
      'Vendor and negotiation tracking by event',
      'Structured data model (events, vendors, logs)',
      'Live transactional email simulation',
      'Modal-driven workflow',
      'Being refactored for cleaner architecture and persistence'
    ],
    accent: 'teal',
    architectureHighlights: [
      'Relational state structure mapping Events -> Vendors -> Negotiation Logs & Contracts',
      'Simulated email dispatch logs for tracking quote requests, counter-offers, and approvals',
      'Contract status pipeline with stage-gated negotiation milestones'
    ],
    targetAudience: 'Event coordinators, wedding planners, and corporate production teams.'
  }
];
