import React from 'react';
import { STUDIO_INFO } from '../data/siteData';
import { Logo } from './Logo';
import { Mail, MapPin, ArrowUp, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1B2438] text-[#F8FAFC] border-t border-[#2A364F] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A364F]">
          
          {/* Studio Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <Logo height={48} />
            </div>

            <p className="font-sans text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              {STUDIO_INFO.tagline} End-to-end software engineering studio.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#FBBF24]">
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
              <span>{STUDIO_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#FBBF24] uppercase tracking-[0.2em] font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#FBBF24] uppercase tracking-[0.2em] font-bold">
              CONTACT STUDIO
            </div>
            <ul className="space-y-2.5 text-sm font-mono text-[#94A3B8]">
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#FBBF24] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F59E0B]" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Official Profiles & Social Links Row */}
        <div className="py-6 border-b border-[#2A364F] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FBBF24] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
            <span>OFFICIAL PROFILES & SOCIALS</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={STUDIO_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#0A66C2] transition-all duration-200 group"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#0A66C2] shrink-0" />
            </a>

            <a
              href={STUDIO_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#FF0000] hover:bg-[#FF0000]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#FF0000] transition-all duration-200 group"
              aria-label="Visit YouTube channel"
            >
              <Youtube className="w-4 h-4 text-[#FF0000] shrink-0" />
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#FF0000] shrink-0" />
            </a>

            <a
              href={STUDIO_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#E4405F] transition-all duration-200 group"
              aria-label="Visit Instagram profile"
            >
              <Instagram className="w-4 h-4 text-[#E4405F] shrink-0" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#E4405F] shrink-0" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} YA Design. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121826] border border-[#2A364F] hover:border-[#F59E0B] text-[#F8FAFC] hover:text-[#FBBF24] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
