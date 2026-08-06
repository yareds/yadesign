import React from 'react';
import { SERVICES } from '../data/siteData';
import { LayoutGrid, Database, ShoppingBag, Figma, MonitorCheck, Wrench, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Figma':
        return <Figma className="w-6 h-6" />;
      case 'MonitorCheck':
        return <MonitorCheck className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      default:
        return <LayoutGrid className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="bg-[#1B2438] text-[#F8FAFC] py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
            <span>STUDIO CAPABILITIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-tight">
            Full-spectrum software creation, <span className="italic font-normal text-[#FBBF24]">without shortcuts.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
            Whether you need a high-concurrency marketplace, a real-time multi-building operations portal, or localized checkout platforms, we design and code every layer in-house.
          </p>
        </div>

        {/* 3-Column Grid of 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-[#121826] border border-[#2A364F] hover:bg-[#0A0E17] hover:border-[#F59E0B]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 blur-2xl pointer-events-none rounded-full group-hover:bg-[#F59E0B]/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-[#1B2438] border border-[#2A364F] group-hover:border-[#F59E0B]/60 flex items-center justify-center text-[#FBBF24] shadow-inner transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FBBF24] px-2.5 py-1 rounded bg-[#1B2438] border border-[#2A364F]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#F8FAFC] mb-3 group-hover:text-[#FBBF24] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2A364F]/70 flex items-center justify-between text-xs font-mono text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors">
                <span className="tracking-wider text-[11px]">FULL STACK IMPLEMENTATION</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
