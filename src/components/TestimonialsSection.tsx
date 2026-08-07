import React from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
            <span>CLIENT REFLECTIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Software built for <span className="italic font-normal text-[#FBBF24]">real operational impact.</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] mt-4">
            <Info className="w-4 h-4 text-[#FBBF24] shrink-0" />
            <span>Representative sample feedback from active production stakeholders & partners</span>
          </div>
        </div>

        {/* 3 Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#232D42] hover:border-[#F59E0B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1B2438] border border-[#2A364F] flex items-center justify-center text-[#F59E0B] group-hover:border-[#F59E0B]/40 transition-colors">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#06B6D4] px-2.5 py-1 rounded-full bg-[#0891B2]/20 border border-[#0891B2]/40 font-bold">
                    REPRESENTATIVE
                  </span>
                </div>

                <p className="font-serif text-lg font-light text-[#F8FAFC] leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#2A364F]/80 flex items-center justify-between">
                <div>
                  <div className="font-sans text-sm font-semibold text-[#FBBF24]">
                    {t.role}
                  </div>
                  <div className="text-xs text-[#94A3B8] font-mono mt-0.5">
                    {t.location}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8]/80 text-right bg-[#1B2438] px-2.5 py-1 rounded border border-[#2A364F]">
                  <div className="text-[#64748B] text-[9px]">PROJECT</div>
                  <div className="text-[#F8FAFC] font-semibold">{t.projectRelation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
