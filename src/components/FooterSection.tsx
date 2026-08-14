import React from 'react';
import { STUDIO_INFO } from '../data/siteData';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.62V7.22a4.85 4.85 0 0 1-1-.53z"/>
  </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

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
              <li>
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-[#F8FAFC] hover:text-[#FBBF24] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#06B6D4]" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Links Row */}
        <div className="py-6 border-b border-[#2A364F] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full justify-start sm:justify-end">
            <a
              href={STUDIO_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#E4405F] transition-all duration-200 group"
              aria-label="Visit Instagram profile"
            >
              <Instagram className="w-4 h-4 text-[#E4405F] shrink-0" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#E4405F] shrink-0" />
            </a>
            
            <a
              href={STUDIO_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#00F2FE] hover:bg-[#00F2FE]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#00F2FE] transition-all duration-200 group"
              aria-label="Visit TikTok profile"
            >
              <TikTokIcon className="w-4 h-4 text-[#00F2FE] shrink-0" />
              <span>TikTok</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#00F2FE] shrink-0" />
            </a>

            <a
              href={STUDIO_INFO.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#229ED9] hover:bg-[#229ED9]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#229ED9] transition-all duration-200 group"
              aria-label="Visit Telegram channel"
            >
              <TelegramIcon className="w-4 h-4 text-[#229ED9] shrink-0" />
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#229ED9] shrink-0" />
            </a>
            <a
                href={STUDIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121826] border border-[#2A364F] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 text-xs font-mono text-[#F8FAFC] hover:text-[#0A66C2] transition-all duration-200 group"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-[#0A66C2] shrink-0" />
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
