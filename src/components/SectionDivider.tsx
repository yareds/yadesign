import React from 'react';

interface SectionDividerProps {
  mode: 'light' | 'dark';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ mode }) => {
  return (
    <div className="w-full relative overflow-hidden select-none">
      <div 
        className={mode === 'light' ? 'divider-pattern-light' : 'divider-pattern-dark'} 
        aria-hidden="true" 
      />
    </div>
  );
};
