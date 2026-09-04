import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Core Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-lodi' },
    { name: 'Technology Expertise', href: '#technologies' },
    { name: 'Industries', href: '#industries' },
    { name: 'Approach', href: '#approach' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact Us', href: '#cta' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
          : 'bg-white border-b border-slate-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Light Variant (Dark Text + Blue Accents) */}
        <a href="#home" className="flex items-center group py-1" aria-label="LoDi Tech Consulting Home">
          <Logo variant="light" className="h-12 sm:h-14 lg:h-16 w-auto transition-all group-hover:opacity-90" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-[#172033] hover:text-[#3F6EB6] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3F6EB6] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 bg-[#3F6EB6] hover:bg-[#325B99] text-white text-xs xl:text-sm font-bold px-4 xl:px-5 py-2.5 rounded-lg shadow-md shadow-[#3F6EB6]/20 hover:shadow-[#3F6EB6]/35 transition-all duration-200 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-[#172033] hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-[#172033] hover:text-[#3F6EB6] hover:bg-slate-50 transition-all text-left"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#3F6EB6] hover:bg-[#325B99] text-white text-sm font-bold px-5 py-3 rounded-lg shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
