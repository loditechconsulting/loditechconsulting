import React from 'react';
import { Rocket, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTABanner({ onOpenConsultation }) {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xl space-y-6">
          
          {/* Rocket Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#3F6EB6]/30 text-[#3F6EB6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Rocket className="w-4 h-4 text-[#3F6EB6] animate-bounce" />
            <span>Strong CTA</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] leading-tight">
            Ready to accelerate your{' '}
            <span className="text-[#3F6EB6]">digital transformation?</span>
          </h2>

          {/* Description */}
          <p className="text-[#667085] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Let's discuss your business challenges and identify the right technology solution.
          </p>

          {/* Call to action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3F6EB6] hover:bg-[#325B99] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-[#3F6EB6]/25 hover:shadow-[#3F6EB6]/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#172033] font-bold text-base px-7 py-4 rounded-xl border-2 border-slate-200 hover:border-[#3F6EB6] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Talk to Our Experts</span>
            </button>
          </div>

          {/* Guarantee pill */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#667085] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#3F6EB6]" />
            <span>LoDi Tech Consulting Private Limited • Confidential Assessment</span>
          </div>

        </div>
      </div>
    </section>
  );
}
