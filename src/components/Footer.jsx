import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const LinkedInIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071126] text-slate-400 border-t border-slate-800/80 text-sm">
      
      {/* Main 4-Column Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#home" className="inline-block" aria-label="LoDi Tech Consulting Home">
              <Logo variant="dark" className="h-12 w-auto" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              LoDi Tech Consulting delivers high-impact enterprise IT transformation. Specializing in SAP S/4HANA implementation, SAP Data Archiving, AWS Cloud migration, and AI-driven automation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#7EC636] hover:text-[#071126] flex items-center justify-center text-slate-300 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#7EC636] hover:text-[#071126] flex items-center justify-center text-slate-300 transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>


          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-[#7EC636] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">Core Services</a></li>
              <li><a href="#why-lodi" className="hover:text-[#7EC636] transition-colors">Why Choose US</a></li>
              <li><a href="#technologies" className="hover:text-[#7EC636] transition-colors">Technology expertise</a></li>
              <li><a href="#industries" className="hover:text-[#7EC636] transition-colors">Industries</a></li>
              <li><a href="#cta" className="hover:text-[#7EC636] transition-colors">Call to Action</a></li>
            </ul>
          </div>

          {/* Column 3: Enterprise Services */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Core Services Breakdown
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">SAP Services</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">Cloud & Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">Integration Services</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">Data & Analytics</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">AI & Automation</a></li>
              <li><a href="#services" className="hover:text-[#7EC636] transition-colors">Managed Services</a></li>
            </ul>
          </div>


          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7EC636] shrink-0 mt-0.5" />
                <span>LoDi Tech Consulting, Hi-Tech City, Hyderabad, Telangana 500081, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="tel:+914068108888" className="hover:text-[#7EC636] transition-colors">+91 40 6810 8888</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7EC636] shrink-0" />
                <a href="mailto:info@loditech.com" className="hover:text-[#7EC636] transition-colors">info@loditech.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#050c1b] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 LoDi Tech Consulting. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-slate-300 transition-colors">ISO Security</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-[#7EC636] hover:text-[#071126] text-slate-300 transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
