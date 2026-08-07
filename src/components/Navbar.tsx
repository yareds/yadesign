import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1B2438]/90 backdrop-blur-md border-b border-[#2A364F] py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center group focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] rounded-lg p-0.5"
          aria-label="YA Design Homepage"
        >
          <Logo height={42} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-mono uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer focus:outline-hidden focus:text-[#FBBF24]"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('#contact')}
            className="px-5 py-2.5 rounded-full bg-[#1B2438] hover:bg-[#F59E0B] text-[#F8FAFC] hover:text-[#0A0E17] border border-[#2A364F] hover:border-[#F59E0B] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 text-[#F59E0B] group-hover:text-[#0A0E17]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#121826] border border-[#2A364F] text-[#F8FAFC] hover:text-[#FBBF24] focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B2438] border-b border-[#2A364F] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#F8FAFC] hover:bg-[#121826] hover:text-[#FBBF24] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0A0E17] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
