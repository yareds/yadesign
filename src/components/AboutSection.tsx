import React from 'react';
import { PRINCIPLES, STUDIO_INFO } from '../data/siteData';
import { MapPin, Users2, Code2, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F8FAFC] text-[#0F172A] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E8F0] border border-[#CBD5E1] text-[11px] font-mono uppercase tracking-[0.2em] text-[#64748B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span>ABOUT THE STUDIO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#0F172A] tracking-tight leading-tight">
            A small studio that ships production software, <span className="italic font-normal text-[#F59E0B]">end to end.</span>
          </h2>

          <p className="font-sans text-lg text-[#64748B] mt-6 leading-relaxed">
            YA Design combines engineering rigor with operational domain knowledge. We don't hand off wireframes or half-finished code to external teams. We design, write, test, deploy, and maintain the software our clients rely on daily.
          </p>
        </div>

        {/* Three Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] flex flex-col justify-between hover:border-[#F59E0B] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] px-3 py-1 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    PRINCIPLE {principle.number}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#F59E0B]/40 group-hover:text-[#F59E0B] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#0F172A] mb-4 leading-snug group-hover:text-[#F59E0B] transition-colors">
                  {principle.title}
                </h3>

                <p className="font-sans text-sm text-[#64748B] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span className="tracking-wider">STUDIO MANDATE</span>
                <span className="text-[#F59E0B] font-bold">✓ VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Location & Capability Highlight Banner */}
        <div className="p-8 md:p-10 rounded-2xl bg-[#0A0E17] text-[#F8FAFC] border border-[#2A364F] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B]/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#FBBF24] shrink-0 group-hover:scale-105 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#FBBF24] uppercase tracking-[0.2em] font-bold">STUDIO BASE</div>
              <div className="font-serif text-2xl text-[#F8FAFC] font-normal mt-0.5">{STUDIO_INFO.location}</div>
              <div className="text-xs text-[#94A3B8] font-mono mt-1">{STUDIO_INFO.workingRadius}</div>
            </div>
          </div>

          <div className="flex items-center gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-[#2A364F] pt-6 md:pt-0 md:pl-10 w-full md:w-auto justify-between md:justify-start z-10">
            <div>
              <div className="font-mono text-3xl font-bold text-[#F8FAFC]">100%</div>
              <div className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mt-0.5">Shipped Code</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-[#FBBF24]">6+</div>
              <div className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mt-0.5">Live Software Products</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-[#06B6D4]">0</div>
              <div className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mt-0.5">Outsourced Contractors</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
