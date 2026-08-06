import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-[#0A0E17]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero (Dark #14100D) */}
        <HeroSection onSelectProject={handleSelectProject} />
        
        <SectionDivider mode="dark" />

        {/* 2. About (Light #EDE6D6) */}
        <AboutSection />

        <SectionDivider mode="light" />

        {/* 3. Services (Dark #14100D) */}
        <ServicesSection />

        <SectionDivider mode="dark" />

        {/* 4. Portfolio (Light #EDE6D6) */}
        <PortfolioSection selectedProjectId={selectedProjectId} />

        <SectionDivider mode="light" />

        {/* 5. Process (Dark #14100D) */}
        <ProcessSection />

        <SectionDivider mode="dark" />

        {/* 6. Tech Stack (Light #EDE6D6) */}
        <TechStackSection />

        <SectionDivider mode="light" />

        {/* 7. Testimonials (Dark #14100D) */}
        <TestimonialsSection />

        <SectionDivider mode="dark" />

        {/* 8. Contact (Light #EDE6D6) */}
        <ContactSection />

        <SectionDivider mode="light" />
      </main>

      {/* 9. Footer (Dark #14100D) */}
      <FooterSection />
    </div>
  );
}
