import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', height = 48 }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 290 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: typeof height === 'number' ? `${height}px` : height, width: 'auto' }}
        className="select-none overflow-visible"
        aria-label="YA Design Logo"
      >
        {/* Script "ya" text in golden yellow */}
        <text
          x="8"
          y="58"
          fill="#F59E0B"
          style={{
            fontFamily: "var(--font-calligraphy), 'Alex Brush', 'Great Vibes', 'Sacramento', cursive",
            fontSize: '64px',
            fontWeight: 'normal',
          }}
        >
          ya
        </text>

        {/* Golden-yellow arch curve sweeping from tail of 'a' over "DES" towards the dot over "I" */}
        <path
          d="M 76 48 C 90 28, 120 8, 148 8 C 158 8, 164 12, 168 18"
          stroke="#F59E0B"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating golden-yellow dot directly above the letter "I" in "DESIGN" */}
        <circle cx="170" cy="24" r="4.5" fill="#F59E0B" />

        {/* "DESIGN" text in bold white sans-serif as a single continuous word */}
        <text
          x="94"
          y="55"
          fill="#FFFFFF"
          style={{
            fontFamily: "'Montserrat', 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: '33px',
            fontWeight: '800',
            letterSpacing: '0.04em',
          }}
        >
          DESIGN
        </text>
      </svg>
    </div>
  );
};
