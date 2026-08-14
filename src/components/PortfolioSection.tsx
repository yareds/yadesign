import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  selectedProjectId?: string | null;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ selectedProjectId }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Business Software', 'E-commerce', 'Marketplace', 'Custom Digital Experience'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#F8FAFC] text-[#0F172A] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E8F0] border border-[#CBD5E1] text-[11px] font-mono uppercase tracking-[0.2em] text-[#64748B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>SELECTED WORK</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#0F172A] tracking-tight leading-tight">
              Seven products, <span className="italic font-normal text-[#F59E0B]">seven real problems solved.</span>
            </h2>

            <p className="font-sans text-base text-[#64748B] mt-3">
              Explore live production applications engineered for real operations — featuring real-time Firebase sync, Gemini AI taste engines, localized auction marketplaces, and multi-currency social commerce.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 border-b border-[#E2E8F0] pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A0E17] text-[#FBBF24] font-bold shadow-lg shadow-[#0A0E17]/20 scale-105'
                  : 'bg-[#FFFFFF] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#E2E8F0]'
              }`}
            >
              {cat} {cat === 'All' && `(${PROJECTS.length})`}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
