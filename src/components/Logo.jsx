import React from 'react';
import logoTransparent from '../assets/logo-brand-transparent.png';
import logoJpg from '../assets/logo-brand.jpg';

/**
 * Pristine Brand Logo component for LODI Tech Consulting Private Limited
 */
export default function Logo({ 
  variant = 'dark', 
  showSubtext = true, 
  className = 'h-10 w-auto',
  useJpg = false,
  ...props 
}) {
  const logoSrc = useJpg ? logoJpg : logoTransparent;

  return (
    <img
      src={logoSrc}
      alt="LODI Tech Consulting Private Limited"
      className={`object-contain ${variant === 'light' ? 'brightness-0' : ''} ${className}`}
      {...props}
    />
  );
}


