import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Code2, Sparkles } from 'lucide-react';
import { ShippedTicker } from './ShippedTicker';
import { HeroHeadline } from './HeroHeadline';

interface HeroSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectProject }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-[#1B2438] pt-28 md:pt-36 pb-0 text-[#F8FAFC] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F59E0B]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#06B6D4]/12 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#6366F1]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle diamond weave grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F8FAFC 0, #F8FAFC 1px, transparent 0, transparent 40px), repeating-linear-gradient(-45deg, #F8FAFC 0, #F8FAFC 1px, transparent 0, transparent 40px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow badge */}
          <motion.div 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121826] border border-[#2A364F] text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] mb-8 shadow-md hover:border-[#F59E0B]/60 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            <span>SOFTWARE STUDIO</span>
          </motion.div>

          {/* Premium Modern Hero Headline Animation */}
          <HeroHeadline
            line1="Software that runs real businesses,"
            line2="not just demos."
          />

          {/* Supporting paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-10 font-normal"
          >
            YA Design builds custom web applications, business management systems, e-commerce platforms, and digital experiences — engineered specifically for how Ethiopian enterprises and modern global ventures operate.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#F59E0B]/20 hover:shadow-xl hover:shadow-[#F59E0B]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121826] hover:bg-[#232D42] text-[#F8FAFC] border border-[#2A364F] hover:border-[#F59E0B]/50 font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md"
            >
              <Code2 className="w-4 h-4 text-[#F59E0B]" />
              <span>View the work</span>
              <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
            </button>
          </motion.div>

          {/* Key value signals */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 pb-12 border-t border-[#2A364F]/70 text-left"
          >
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#121826]/60 border border-[#2A364F]/60 hover:border-[#F59E0B]/40 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#1B2438] border border-[#2A364F] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#F8FAFC] tracking-wider">End-to-End Delivery</div>
                <div className="text-xs text-[#94A3B8] mt-1 leading-normal">From architectural discovery to live production deployment.</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#121826]/60 border border-[#2A364F]/60 hover:border-[#F59E0B]/40 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#1B2438] border border-[#2A364F] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#F8FAFC] tracking-wider">Isolated & Secure</div>
                <div className="text-xs text-[#94A3B8] mt-1 leading-normal">Strict data isolation rules & real-time sync.</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#121826]/60 border border-[#2A364F]/60 hover:border-[#F59E0B]/40 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#1B2438] border border-[#2A364F] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-[#6366F1]" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#F8FAFC] tracking-wider">Localized Channels</div>
                <div className="text-xs text-[#94A3B8] mt-1 leading-normal">Telegram, WhatsApp & multi-currency integrations.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Shipped Roster Ticker Strip below fold */}
      <div className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2.5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>SHIPPED ROSTER // LIVE PRODUCTS</span>
          </span>
          <span className="hidden sm:inline text-[#FBBF24] hover:underline cursor-pointer" onClick={() => scrollToSection('portfolio')}>
            CLICK TO INSPECT ARCHITECTURE →
          </span>
        </div>
        <ShippedTicker onSelectProject={onSelectProject} />
      </div>
    </section>
  );
};

