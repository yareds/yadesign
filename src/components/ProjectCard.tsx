import React from 'react';
import { Project } from '../types';
import { AbstractUiPreview } from './AbstractUiPreview';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const isLive = project.status === 'Live';

  // Accent styling mappings
  const accentStyles = {
    brass: {
      badgeBg: 'bg-[#F59E0B]/20',
      badgeText: 'text-[#F59E0B]',
      badgeBorder: 'border-[#F59E0B]/40',
      checkColor: 'text-[#F59E0B]',
      hoverBorder: 'hover:border-[#F59E0B]',
    },
    rust: {
      badgeBg: 'bg-[#6366F1]/20',
      badgeText: 'text-[#6366F1]',
      badgeBorder: 'border-[#6366F1]/40',
      checkColor: 'text-[#6366F1]',
      hoverBorder: 'hover:border-[#6366F1]',
    },
    teal: {
      badgeBg: 'bg-[#0891B2]/20',
      badgeText: 'text-[#06B6D4]',
      badgeBorder: 'border-[#0891B2]/40',
      checkColor: 'text-[#06B6D4]',
      hoverBorder: 'hover:border-[#0891B2]',
    },
  }[project.accent];

  return (
    <article
      className={`p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] ${accentStyles.hoverBorder} transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group`}
    >
      <div>
        {/* Abstract UI Preview Mockup */}
        <div 
          onClick={() => onOpenModal(project)}
          className="cursor-pointer mb-6 transform group-hover:-translate-y-1 transition-transform duration-300"
          title={`Click to view architectural breakdown of ${project.name}`}
        >
          <AbstractUiPreview
            projectId={project.id}
            projectName={project.name}
            accent={project.accent}
          />
        </div>

        {/* Metadata Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full border ${accentStyles.badgeBg} ${accentStyles.badgeText} ${accentStyles.badgeBorder} font-bold uppercase tracking-wider flex items-center gap-1.5`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isLive ? 'bg-[#06B6D4]' : 'bg-[#F59E0B]'
                } animate-pulse`}
              />
              {project.status}
            </span>
            <span className="text-[#64748B] font-semibold">· {project.year}</span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="font-serif text-2xl font-normal text-[#0F172A] mb-1 group-hover:text-[#F59E0B] transition-colors">
          {project.name}
        </h3>
        <div className="font-sans text-sm font-semibold text-[#64748B] mb-3">
          {project.tagline}
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features (at least 3 with checkmarks) */}
        <div className="space-y-2 mb-6 pt-4 border-t border-[#E2E8F0]">
          <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-[0.2em] font-bold mb-2">
            KEY PRODUCTION FEATURES
          </div>
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#0F172A] leading-snug">
              <CheckCircle2 className={`w-4 h-4 ${accentStyles.checkColor} shrink-0 mt-0.5`} />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-mono text-[#64748B]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end text-xs font-mono">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#F59E0B] font-bold transition-colors cursor-pointer"
        >
          <span>Architecture Specs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
