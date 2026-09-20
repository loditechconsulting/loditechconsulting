import React from 'react';

/**
 * Enterprise Brand Logo Component for LoDi Tech Consulting Private Limited
 * Displays the official uploaded PNG logo from /lodi-logo.png
 */
export default function Logo({ 
  variant = 'light', // 'light' | 'dark' | 'icon'
  className = '',
  ...props 
}) {
  const isDark = variant === 'dark';

  if (isDark) {
    return (
      <div className="inline-flex items-center bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-700/50 hover:opacity-95 transition-opacity">
        <img
          src="/lodi-logo.png"
          alt="LoDi Tech Consulting Private Limited"
          className={`h-10 sm:h-12 w-auto object-contain ${className}`}
          {...props}
        />
      </div>
    );
  }

  return (
    <img
      src="/lodi-logo.png"
      alt="LoDi Tech Consulting Private Limited"
      className={`h-11 sm:h-13 lg:h-14 w-auto object-contain ${className}`}
      {...props}
    />
  );
}

