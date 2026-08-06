export type ProjectStatus = 'Live' | 'In development';
export type AccentColor = 'brass' | 'rust' | 'teal';

export interface ProjectFeature {
  text: string;
}

export interface Project {
  id: string;
  name: string;
  category: 'Business Software' | 'E-commerce' | 'Marketplace' | 'Custom Digital Experience';
  year: string;
  status: ProjectStatus;
  repo?: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  accent: AccentColor;
  architectureHighlights?: string[];
  targetAudience?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: string; // e.g. "01"
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  role: string;
  location: string;
  projectRelation: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  timeline?: string;
  budget?: string;
  details: string;
}
