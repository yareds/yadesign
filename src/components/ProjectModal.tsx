import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Cpu, Users, Layers, ExternalLink, Globe, Monitor } from 'lucide-react';
import { AbstractUiPreview } from './AbstractUiPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [viewMode, setViewMode] = useState<'architecture' | 'live'>('live');

  useEffect(() => {
    if (project?.liveUrl) {
      setViewMode('live');
    } else {
      setViewMode('architecture');
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2438]/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        className="w-full max-w-4xl max-h-[92vh] bg-[#121826] text-[#F8FAFC] border border-[#2A364F] rounded-2xl shadow-2xl overflow-y-auto flex flex-col justify-between"
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

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <div className="flex items-center gap-1 bg-[#1B2438] p-1 rounded-xl border border-[#2A364F] text-xs font-mono">
                <button
                  onClick={() => setViewMode('architecture')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'architecture' ? 'bg-[#F59E0B] text-[#0A0E17] font-bold' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Specs View</span>
                </button>
                <button
                  onClick={() => setViewMode('live')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'live' ? 'bg-[#06B6D4] text-[#0A0E17] font-bold' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Landing Frame</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1B2438] border border-[#2A364F] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#F59E0B] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Live Preview Iframe or Abstract UI Mockup */}
          {viewMode === 'live' && project.liveUrl ? (
            <div className="w-full rounded-2xl bg-[#1B2438] border border-[#2A364F] overflow-hidden shadow-xl flex flex-col">
              <div className="bg-[#0A0E17] border-b border-[#2A364F] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-[#F8FAFC] font-semibold">Live Home Page View: {project.liveUrl}</span>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-[#1B2438] border border-[#2A364F] text-[11px] font-mono text-[#FBBF24]">
                  Links & Menus Disabled
                </div>
              </div>
              <div className="w-full h-[540px] bg-[#0F172A] relative overflow-hidden">
                <iframe
                  src={project.liveUrl}
                  title={`${project.name} Landing Page Preview`}
                  className="w-full h-full border-0 pointer-events-none select-none"
                  loading="lazy"
                />
                {/* Full overlay catcher to completely disable any iframe link or menu click */}
                <div 
                  className="absolute inset-0 bg-transparent cursor-default z-10"
                  onClick={(e) => e.preventDefault()} 
                />
                
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0A0E17]/90 border border-[#2A364F] text-[11px] font-mono text-[#94A3B8] backdrop-blur-sm pointer-events-none z-20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <span>Landing Page Preview · All Links & Navigation Disabled</span>
                </div>
              </div>
            </div>
          ) : (
            <AbstractUiPreview
              projectId={project.id}
              projectName={project.name}
              accent={project.accent}
            />
          )}

          {/* Title & Category Header */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1B2438] border border-[#2A364F] text-[#FBBF24]">
                  {project.category}
                </span>
                <span className="text-[#94A3B8]">
                  Status: <strong className="text-[#F8FAFC]">{project.status}</strong> ({project.year})
                </span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-[#06B6D4] hover:bg-[#0891B2] text-[#0A0E17] font-bold text-xs font-mono inline-flex items-center gap-2 transition-all shadow-md"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit {project.liveUrl.replace('https://', '').replace('/', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
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
