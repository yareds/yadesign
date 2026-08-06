import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { Compass, Palette, Code, CheckSquare, Rocket, LifeBuoy } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01': return <Compass className="w-5 h-5" />;
      case '02': return <Palette className="w-5 h-5" />;
      case '03': return <Code className="w-5 h-5" />;
      case '04': return <CheckSquare className="w-5 h-5" />;
      case '05': return <Rocket className="w-5 h-5" />;
      case '06': return <LifeBuoy className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
            <span>STUDIO WORKFLOW</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            A workflow built to reach production, <span className="italic font-normal text-[#FBBF24]">not a prototype.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
            Six disciplined stages ensuring every feature, data schema, and UI component moves smoothly from whiteboarding through long-term maintenance.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#232D42] hover:border-[#F59E0B]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#FBBF24] px-3.5 py-1.5 rounded-lg bg-[#1B2438] border border-[#2A364F] shadow-inner">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#1B2438] border border-[#2A364F] flex items-center justify-center text-[#94A3B8] group-hover:text-[#FBBF24] group-hover:border-[#F59E0B]/40 transition-colors">
                    {getStepIcon(step.number)}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#F8FAFC] mb-3 group-hover:text-[#FBBF24] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2A364F]/70 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span className="tracking-wider">STAGE {step.number} MILESTONE</span>
                <span className="text-[#06B6D4] font-bold">✓ DELIVERED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
