import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function TopBar() {
  return (
    <div className="bg-[#F5F7FA] border-b border-slate-200 text-xs text-[#667085] py-2.5 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        
        {/* Contact info items */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-medium">
          <a 
            href="mailto:info@loditech.com" 
            className="flex items-center gap-1.5 hover:text-[#3F6EB6] transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 text-[#3F6EB6] group-hover:scale-110 transition-transform" />
            <span>info@loditech.com</span>
          </a>
          <a 
            href="tel:+914068108888" 
            className="flex items-center gap-1.5 hover:text-[#3F6EB6] transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 text-[#3F6EB6] group-hover:scale-110 transition-transform" />
            <span>+91 40 6810 8888</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 text-[#667085]">
            <MapPin className="w-3.5 h-3.5 text-[#3F6EB6]" />
            <span>Hi-Tech City, Hyderabad, India</span>
          </div>
        </div>

        {/* Business hours & Social links */}
        <div className="flex items-center gap-4 sm:gap-6 font-medium">
          <div className="hidden sm:flex items-center gap-1.5 text-[#667085]">
            <Clock className="w-3.5 h-3.5 text-[#3F6EB6]" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
          </div>
          <div className="flex items-center gap-3 border-l border-slate-300 pl-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 text-[#667085] hover:text-[#3F6EB6] hover:bg-white rounded transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 text-[#667085] hover:text-[#3F6EB6] hover:bg-white rounded transition-all"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
