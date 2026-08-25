import React from 'react';

/**
 * High-Quality Transparent Vector Logo for LODI Tech Consulting Private Limited
 * Accepts variant:
 * - "dark" (default): White text with blue accents, ideal for dark navy (#071126) backgrounds.
 * - "light": Dark navy (#0F2042) text with blue accents, ideal for white/light backgrounds.
 * - "auto": Adapts to text color using CSS currentColor.
 */
export default function Logo({ 
  variant = 'dark', 
  showSubtext = true, 
  className = 'h-10 w-auto',
  ...props 
}) {
  // Determine primary text color
  let textColor = '#FFFFFF';
  let subtextColor = '#CBD5E1';
  let accentBlue = '#2563EB'; // Vibrant blue accent

  if (variant === 'light') {
    textColor = '#0F2042';
    subtextColor = '#1E293B';
    accentBlue = '#2563EB';
  } else if (variant === 'auto') {
    textColor = 'currentColor';
    subtextColor = 'currentColor';
  }

  return (
    <svg
      viewBox="0 0 310 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LODI Tech Consulting Private Limited"
      {...props}
    >
      <g id="LODI-Letters">
        {/* L */}
        <path
          d="M 0 0 L 12 0 L 12 38 L 48 38 L 48 50 L 0 50 Z"
          fill={textColor}
        />

        {/* O - Main Ring with Cutout at Top Right */}
        <path
          d="M 112.6 20.7 A 25 25 0 1 1 94.5 0.8 L 91.6 11.5 A 14 14 0 1 0 101.8 22.6 Z"
          fill={textColor}
        />

        {/* O - Blue Top-Right Accent Arc */}
        <path
          d="M 98.6 2.3 A 25 25 0 0 1 111.5 16.5 L 101.2 20.2 A 14 14 0 0 0 93.9 12.3 Z"
          fill={accentBlue}
        />

        {/* D - Outer Body & Inner Cutout */}
        <path
          d="M 126 0 L 152 0 C 168 0 178 10 178 25 C 178 40 168 50 152 50 L 126 50 Z M 138 12 L 150 12 C 160 12 165 17 165 25 C 165 33 160 38 150 38 L 138 38 Z"
          fill={textColor}
        />

        {/* I - Stem with Slanted Top Cut */}
        <path
          d="M 192 18 L 204 14 L 204 50 L 192 50 Z"
          fill={textColor}
        />

        {/* I - Parallelogram Accent Dot in Accent Blue */}
        <path
          d="M 196 11 L 208 7 L 214 0 L 202 0 Z"
          fill={accentBlue}
        />
      </g>

      {showSubtext && (
        <g id="LODI-Taglines">
          {/* TECH CONSULTING */}
          <text
            x="107"
            y="70"
            textAnchor="middle"
            fill={textColor}
            fontSize="12.5"
            fontWeight="800"
            letterSpacing="5"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", textTransform: 'uppercase' }}
          >
            TECH CONSULTING
          </text>

          {/* Private Limited */}
          <text
            x="107"
            y="87"
            textAnchor="middle"
            fill={subtextColor}
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="5.5"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            Private Limited
          </text>
        </g>
      )}
    </svg>
  );
}
