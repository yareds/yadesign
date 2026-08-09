import React from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F59E0B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Software built for <span className="italic font-normal text-[#FBBF24]">real operational impact.</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] mt-5">
            <Info className="w-4 h-4 text-[#FBBF24] shrink-0" />
            <span>Representative sample feedback from client roles & project stakeholders</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#1A2234] hover:border-[#F59E0B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FBBF24] px-2.5 py-1 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/20 font-semibold">
                    {t.projectRelation}
                  </span>
                  <Quote className="w-5 h-5 text-[#2A364F] group-hover:text-[#F59E0B]/50 transition-colors" />
                </div>

                <p className="font-serif text-base font-light text-[#F8FAFC] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A364F]/80">
                <div className="text-xs font-mono font-semibold text-[#F8FAFC]">
                  {t.role}
                </div>
                <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
