import React from 'react';

/**
 * Enterprise Brand Logo Component for LoDi Tech Consulting Private Limited
 * 
 * Available Versions:
 * 1. Primary: Blue (#3F6EB6) + Dark Navy (#172033) on white/light backgrounds (variant="primary" or variant="light")
 * 2. Dark: White (#FFFFFF) + Blue (#3F6EB6) on dark navy/black backgrounds (variant="dark")
 * 3. Icon: Stylized standalone O/I tech mark for favicon, app icons & social media (variant="icon" or layout="icon")
 */
export default function Logo({ 
  variant = 'primary', // 'primary' (light) | 'dark' | 'icon'
  layout = 'stacked', // 'stacked' | 'horizontal' | 'icon'
  className = 'h-12 sm:h-14 w-auto',
  showSubtext = true,
  ...props 
}) {
  // Normalize variant: 'primary' & 'light' use dark navy text on light; 'dark' uses white text on dark
  const isDarkTheme = variant === 'dark';
  const isIconOnly = variant === 'icon' || layout === 'icon';

  // High contrast palette tailored for light and dark backgrounds
  const primaryFill = isDarkTheme ? '#FFFFFF' : '#172033';
  const subtextColor = isDarkTheme ? '#FFFFFF' : '#172033';
  const legalColor = isDarkTheme ? '#94A3B8' : '#667085';
  const brandBlue = '#3F6EB6';

  // ==========================================
  // VERSION 3: Standalone Icon / Mark (Favicon, Avatars, App Icon)
  // ==========================================
  if (isIconOnly) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block shrink-0 ${className}`}
        aria-label="LoDi Tech Consulting Mark"
        {...props}
      >
        <g id="LoDi-Symbol">
          {/* Integrated O Ring Body */}
          <path
            d="M 24 16 A 16 16 0 1 0 40 32 L 31.5 32 A 7.5 7.5 0 1 1 24 23.5 L 24 16 Z"
            fill={primaryFill}
          />
          {/* O - 90 deg Precision Blue Tech Arc */}
          <path
            d="M 24 16 A 16 16 0 0 1 40 32 L 31.5 32 A 7.5 7.5 0 0 0 24 23.5 L 24 16 Z"
            fill={brandBlue}
          />
          {/* I - Stem */}
          <path d="M 43.5 25 H 53.5 V 48 H 43.5 Z" fill={primaryFill} />
          {/* I - Precision Aligned Geometric Blue Dot */}
          <path d="M 43.5 21 H 53.5 V 16 L 43.5 19 Z" fill={brandBlue} />
        </g>
      </svg>
    );
  }

  // ==========================================
  // VERSION 2 & 1 (Horizontal Layout Lockup)
  // ==========================================
  if (layout === 'horizontal') {
    return (
      <svg
        viewBox="0 0 310 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-label="LoDi Tech Consulting Private Limited"
        {...props}
      >
        {/* Main LODI Wordmark */}
        <g id="LODI-Letters-Horizontal" transform="translate(2, 2)">
          {/* L - Strong 11.5px Stem & Base */}
          <path d="M 0 6 H 11.5 V 32.5 H 33 V 44 H 0 Z" fill={primaryFill} />

          {/* O - Main 270 deg Body (Left, Bottom, Right-lower) */}
          <path
            d="M 54 6 A 19 19 0 1 0 73 25 L 64.5 25 A 10.5 10.5 0 1 1 54 14.5 L 54 6 Z"
            fill={primaryFill}
          />
          {/* O - Intentionally Integrated 90 deg Blue Tech Sector */}
          <path
            d="M 54 6 A 19 19 0 0 1 73 25 L 64.5 25 A 10.5 10.5 0 0 0 54 14.5 L 54 6 Z"
            fill={brandBlue}
          />

          {/* D - Strong 11.5px Spine with Precision Cutout Counter */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 83 6 H 102 C 115 6 123 14 123 25 C 123 36 115 44 102 44 H 83 Z M 94.5 17 V 33 H 100.5 C 106.5 33 111.5 29 111.5 25 C 111.5 21 106.5 17 100.5 17 Z"
            fill={primaryFill}
          />

          {/* I - Lower Vertical Stem */}
          <path d="M 132 17 H 143.5 V 44 H 132 Z" fill={primaryFill} />
          {/* I - Intentionally Aligned Geometric Blue Top Accent */}
          <path d="M 132 13 H 143.5 V 6 L 132 10 Z" fill={brandBlue} />
        </g>

        {/* Vertical Divider Line */}
        <line x1="158" y1="8" x2="158" y2="44" stroke={isDarkTheme ? '#334155' : '#CBD5E1'} strokeWidth="1.5" />

        {/* Descriptors */}
        <g id="LODI-Descriptors-Horizontal" transform="translate(170, 0)">
          <text 
            x="0" 
            y="24" 
            fill={subtextColor} 
            fontSize="14" 
            fontWeight="900" 
            letterSpacing="2.5" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          >
            TECH CONSULTING
          </text>
          <text 
            x="0" 
            y="40" 
            fill={legalColor} 
            fontSize="9.5" 
            fontWeight="700" 
            letterSpacing="2.5" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          >
            PRIVATE LIMITED
          </text>
        </g>
      </svg>
    );
  }

  // ==========================================
  // VERSION 1 & 2: Primary / Dark Stacked Brand Lockup (Default)
  // ==========================================
  return (
    <svg
      viewBox="0 0 162 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="LoDi Tech Consulting Private Limited"
      {...props}
    >
      {/* Main LODI Wordmark with Strong Darker Geometry */}
      <g id="LODI-Letters-Stacked" transform="translate(6, 2)">
        {/* L - Strong 11.5px Weight */}
        <path d="M 0 6 H 11.5 V 32.5 H 33 V 44 H 0 Z" fill={primaryFill} />

        {/* O - Main 270 deg Ring Body */}
        <path
          d="M 54 6 A 19 19 0 1 0 73 25 L 64.5 25 A 10.5 10.5 0 1 1 54 14.5 L 54 6 Z"
          fill={primaryFill}
        />
        {/* O - Intentionally Integrated 90 deg Blue Tech Sector */}
        <path
          d="M 54 6 A 19 19 0 0 1 73 25 L 64.5 25 A 10.5 10.5 0 0 0 54 14.5 L 54 6 Z"
          fill={brandBlue}
        />

        {/* D - Strong Spine with Clean Counter Cutout */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 83 6 H 102 C 115 6 123 14 123 25 C 123 36 115 44 102 44 H 83 Z M 94.5 17 V 33 H 100.5 C 106.5 33 111.5 29 111.5 25 C 111.5 21 106.5 17 100.5 17 Z"
          fill={primaryFill}
        />

        {/* I - Solid Vertical Stem */}
        <path d="M 132 17 H 143.5 V 44 H 132 Z" fill={primaryFill} />
        {/* I - Aligned Geometric Blue Top Accent */}
        <path d="M 132 13 H 143.5 V 6 L 132 10 Z" fill={brandBlue} />
      </g>

      {/* Subtitles: TECH CONSULTING PRIVATE LIMITED */}
      {showSubtext && (
        <g id="LODI-Taglines-Stacked">
          {/* TECH CONSULTING - Extra Bold & Highly Legible */}
          <text 
            x="81" 
            y="60" 
            textAnchor="middle" 
            fill={subtextColor} 
            fontSize="11" 
            fontWeight="900" 
            letterSpacing="3.5" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          >
            TECH CONSULTING
          </text>

          {/* Private Limited - Clear & Professional */}
          <text 
            x="81" 
            y="73" 
            textAnchor="middle" 
            fill={legalColor} 
            fontSize="8" 
            fontWeight="700" 
            letterSpacing="2.5" 
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          >
            PRIVATE LIMITED
          </text>
        </g>
      )}
    </svg>
  );
}
