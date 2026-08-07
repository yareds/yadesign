import React from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Software built for <span className="italic font-normal text-[#FBBF24]">real operational impact.</span>
          </h2>

          <p className="text-sm md:text-base text-[#94A3B8] font-sans mt-3 max-w-2xl">
            Reflections from project partners and platform stakeholders who rely on software built by YA Design.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121826] border border-[#2A364F] text-xs font-mono text-[#94A3B8] mt-4">
            <Info className="w-4 h-4 text-[#FBBF24] shrink-0" />
            <span>Representative sample feedback from active production stakeholders & partners</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#1A2234] hover:border-[#F59E0B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group relative hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1B2438] border border-[#2A364F] group-hover:border-[#F59E0B]/60 flex items-center justify-center text-[#FBBF24] transition-colors">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                <p className="font-serif text-lg font-light text-[#F8FAFC] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A364F]/80">
                <div className="font-sans text-sm font-semibold text-[#F8FAFC] group-hover:text-[#FBBF24] transition-colors">
                  {t.role}
                </div>
                <div className="text-xs text-[#94A3B8] font-mono mt-0.5 flex items-center justify-between">
                  <span>{t.location}</span>
                  <span className="text-[#FBBF24] font-semibold">{t.projectRelation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
