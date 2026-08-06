import React from 'react';
import { TECH_STACK } from '../data/siteData';
import { Layers, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="stack" className="bg-[#F8FAFC] text-[#0F172A] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2E8F0] border border-[#CBD5E1] text-xs font-mono uppercase tracking-[0.2em] text-[#64748B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span>TECHNOLOGY ARCHITECTURE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#0F172A] tracking-tight leading-tight">
            Battle-tested stack, <span className="italic font-normal text-[#F59E0B]">built for longevity.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed">
            We rely on fast, modular technologies that guarantee quick cold-starts, type safety, real-time data sync, and effortless production deployment.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((col, idx) => (
            <div
              key={col.category}
              className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] flex flex-col justify-between shadow-sm hover:border-[#F59E0B] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E2E8F0]">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                    0{idx + 1} // {col.category}
                  </span>
                  <Layers className="w-4 h-4 text-[#64748B] group-hover:text-[#F59E0B] transition-colors" />
                </div>

                <ul className="space-y-3.5 my-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-sans font-medium text-[#0F172A] group-hover:translate-x-0.5 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                <span>VERIFIED STACK</span>
                <span className="text-[#0891B2] font-bold">100% READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
