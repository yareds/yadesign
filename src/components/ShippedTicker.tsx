import React from 'react';
import { PROJECTS } from '../data/portfolioData';

interface ShippedTickerProps {
  onSelectProject?: (projectId: string) => void;
}

export const ShippedTicker: React.FC<ShippedTickerProps> = ({ onSelectProject }) => {
  // Duplicate list to ensure infinite seamless scrolling loop
  const tickerItems = [...PROJECTS, ...PROJECTS];

  const handlePillClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full bg-[#1B2438] border-y border-[#2A364F] py-3.5 overflow-hidden select-none relative group/ticker">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1B2438] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1B2438] to-transparent z-10 pointer-events-none" />

      <div className="animate-ticker flex items-center gap-4 px-4">
        {tickerItems.map((project, idx) => {
          const isLive = project.status === 'Live';
          const dotColor = isLive ? 'bg-[#06B6D4]' : 'bg-[#F59E0B]';
          const badgeText = isLive ? 'LIVE' : 'IN DEV';

          return (
            <button
              key={`${project.id}-${idx}`}
              onClick={() => handlePillClick(project.id)}
              className="px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] hover:border-[#F59E0B]/60 text-xs font-mono text-[#F8FAFC] flex items-center gap-2.5 transition-all duration-200 hover:scale-105 hover:bg-[#232D42] whitespace-nowrap cursor-pointer group"
            >
              <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
              <span className="font-semibold group-hover:text-[#FBBF24] transition-colors">
                {project.name}
              </span>
              <span className="text-[10px] text-[#94A3B8]/80 font-mono">
                [{project.category}]
              </span>
              <span 
                className={`text-[9px] px-1.5 py-0.2 rounded uppercase font-mono ${
                  isLive ? 'bg-[#0891B2]/30 text-[#06B6D4]' : 'bg-[#F59E0B]/30 text-[#FBBF24]'
                }`}
              >
                {badgeText}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
