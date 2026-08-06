import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Cpu, Users, Layers } from 'lucide-react';
import { AbstractUiPreview } from './AbstractUiPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2438]/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        className="w-full max-w-3xl max-h-[90vh] bg-[#121826] text-[#F8FAFC] border border-[#2A364F] rounded-2xl shadow-2xl overflow-y-auto flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="p-5 border-b border-[#2A364F] flex items-center justify-between sticky top-0 bg-[#121826]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FBBF24]">
              ARCHITECTURE SPECIFICATION // {project.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1B2438] border border-[#2A364F] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#F59E0B]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Abstract UI Mockup */}
          <AbstractUiPreview
            projectId={project.id}
            projectName={project.name}
            accent={project.accent}
          />

          {/* Title & Category Header */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-[#1B2438] border border-[#2A364F] text-[#FBBF24]">
                {project.category}
              </span>
              <span className="text-[#94A3B8]">
                Status: <strong className="text-[#F8FAFC]">{project.status}</strong> ({project.year})
              </span>
            </div>

            <h2 id="modal-title" className="font-serif text-3xl font-light text-[#F8FAFC]">
              {project.name}
            </h2>
            <div className="font-sans text-base font-semibold text-[#FBBF24] mt-1">
              {project.tagline}
            </div>
            <p className="font-sans text-sm text-[#94A3B8] mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="p-5 rounded-xl bg-[#1B2438] border border-[#2A364F]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FBBF24] uppercase tracking-[0.2em] font-bold mb-3">
                <Cpu className="w-4 h-4 text-[#F59E0B]" />
                <span>ARCHITECTURAL HIGHLIGHTS</span>
              </div>
              <ul className="space-y-2">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-sans text-[#94A3B8]">
                    <span className="text-[#F59E0B] font-mono mt-0.5">0{idx + 1}.</span>
                    <span className="text-[#F8FAFC]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Target Audience */}
          {project.targetAudience && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#1B2438]/60 border border-[#2A364F]">
              <Users className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider font-bold">OPERATIONAL USER BASE</div>
                <p className="text-xs text-[#94A3B8] mt-1">{project.targetAudience}</p>
              </div>
            </div>
          )}

          {/* All Features List */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] uppercase tracking-[0.2em] font-bold mb-3">
              <Layers className="w-4 h-4 text-[#F59E0B]" />
              <span>CORE FUNCTIONALITIES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#1B2438] border border-[#2A364F] flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Tech Stack */}
          <div>
            <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-[0.2em] font-bold mb-3">
              TECHNOLOGY STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded bg-[#1B2438] border border-[#2A364F] text-xs font-mono text-[#FBBF24]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#2A364F] bg-[#1B2438] flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#94A3B8]">
            Status: <span className="text-[#FBBF24] font-semibold">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Specs
          </button>
        </div>
      </div>
    </div>
  );
};
