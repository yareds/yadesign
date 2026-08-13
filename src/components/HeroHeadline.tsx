import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HeroHeadlineProps {
  line1?: string;
  line2?: string;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  line1 = "Software that runs real businesses,",
  line2 = "not just demos."
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const wordsLine1 = line1.split(' ');

  // Motion variants for smooth orchestrated reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 32,
      rotateX: 20,
      filter: 'blur(6px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      }
    },
  };

  const line2Variants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.95,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        delay: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.95,
        delay: 0.95,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-5xl mx-auto mb-8 select-none py-2"
    >
      {/* Interactive Cursor Ambient Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500 -z-10 rounded-full blur-[100px] opacity-70"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: '320px',
            height: '320px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(6, 182, 212, 0.18) 45%, transparent 70%)',
          }}
        />
      )}

      <motion.h1 
        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F8FAFC] tracking-tight leading-[1.08] text-center flex flex-col items-center justify-center gap-1 sm:gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={`${line1} ${line2}`}
      >
        {/* Line 1 - Word-by-Word Reveal */}
        <span className="flex flex-wrap justify-center gap-x-2.5 sm:gap-x-4 gap-y-1 sm:gap-y-2 max-w-4xl" aria-hidden="true">
          {wordsLine1.map((word, index) => {
            const isHighlightWord = word.toLowerCase().includes('real') || word.toLowerCase().includes('businesses');
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block transform-gpu transition-all duration-300 ${
                  isHighlightWord 
                    ? 'hover:text-[#FBBF24] hover:scale-105' 
                    : 'hover:text-[#38BDF8] hover:scale-105'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </span>

        {/* Line 2 - Shimmering Accent Line */}
        <motion.span 
          variants={line2Variants}
          className="relative inline-block mt-1 sm:mt-3 group cursor-default"
          aria-hidden="true"
        >
          <span className="italic font-normal bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] via-[#FEF08A] to-[#FBBF24] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer-smooth inline-flex items-center gap-2 sm:gap-3 drop-shadow-[0_2px_24px_rgba(245,158,11,0.25)]">
            {line2}
            <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-[#FBBF24] inline-block opacity-90 animate-pulse shrink-0" />
          </span>

          {/* Animated Gold Underline Glow */}
          <motion.span 
            variants={underlineVariants}
            className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent origin-left rounded-full shadow-[0_0_12px_#F59E0B]"
          />
        </motion.span>
      </motion.h1>
    </div>
  );
};
