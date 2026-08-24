import React from 'react';
import { Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTABanner({ onOpenConsultation }) {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-gradient-to-b from-[#071126] via-[#081635] to-[#071126] relative overflow-hidden border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#2563EB]/20 to-[#7EC636]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#081635]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-6">
          
          {/* Rocket Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071126] border border-[#7EC636]/40 text-[#7EC636] text-xs font-bold uppercase tracking-wider shadow-md">
            <Rocket className="w-4 h-4 text-[#7EC636] animate-bounce" />
            <span>Strong CTA</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to accelerate your{' '}
            <span className="text-[#7EC636]">digital transformation?</span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Let's discuss your business challenges and identify the right technology solution.
          </p>

          {/* Call to action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7EC636] hover:bg-[#6CB428] text-[#071126] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-[#7EC636]/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-7 py-4 rounded-xl border border-slate-700 hover:border-[#2563EB] transition-all duration-300 cursor-pointer"
            >
              <span>Talk to Our Experts</span>
            </button>
          </div>

          {/* Guarantee pill */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span>LoDi Tech Consulting Private Limited • Confidential Assessment</span>
          </div>

        </div>
      </div>
    </section>
  );
}
