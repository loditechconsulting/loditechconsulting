import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Database, Cloud, Cpu } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section id="home" className="relative min-h-[85vh] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] overflow-hidden flex flex-col justify-center py-16 lg:py-24 border-b border-slate-200">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#3F6EB6] text-xs font-bold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#3F6EB6]" />
              <span>LoDi Tech Consulting Private Limited</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] leading-tight tracking-tight">
              Transforming Businesses with{' '}
              <span className="block mt-1 text-[#3F6EB6]">
                Intelligent Technology
              </span>
            </h1>

            {/* Subheadline from PDF */}
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-normal leading-relaxed">
              Delivering SAP, Cloud, Integration, Data, AI and Managed Services that help enterprises modernize, optimize and scale.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 bg-[#3F6EB6] hover:bg-[#325B99] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-[#3F6EB6]/25 hover:shadow-[#3F6EB6]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#172033] font-bold text-base px-7 py-4 rounded-xl border-2 border-slate-200 hover:border-[#3F6EB6] transition-all duration-300 shadow-sm"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Checkpoints */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#667085] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6EB6]" />
                <span>SAP S/4HANA & BTP Specialty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6EB6]" />
                <span>AWS & Azure Cloud Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F6EB6]" />
                <span>End-to-End Managed Support</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Tech Widget */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl p-1 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 shadow-xl">
              <div className="w-full h-full bg-white rounded-[14px] p-6 relative overflow-hidden flex flex-col justify-between border border-slate-200/80">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-[#667085]">loditech-core-v1.0</span>
                </div>

                {/* Core Services Preview Items */}
                <div className="space-y-3 my-4">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#3F6EB6] transition-all flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#3F6EB6]/10 text-[#3F6EB6]">
                        <Database className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-[#172033]">SAP Services</div>
                        <div className="text-xs text-[#667085]">S/4HANA, BTP, AMS & Archiving</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#3F6EB6]/10 text-[#3F6EB6]">Core</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#3F6EB6] transition-all flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#3F6EB6]/10 text-[#3F6EB6]">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-[#172033]">Cloud & Modernization</div>
                        <div className="text-xs text-[#667085]">AWS, DevOps, MES & Architecture</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#3F6EB6]/10 text-[#3F6EB6]">Cloud</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#3F6EB6] transition-all flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#3F6EB6]/10 text-[#3F6EB6]">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-[#172033]">AI & Integration</div>
                        <div className="text-xs text-[#667085]">Intelligent Automation & APIs</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#3F6EB6]/10 text-[#3F6EB6]">AI</span>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#667085]">
                  <span>Enterprise Lifecycle</span>
                  <span className="text-[#3F6EB6] font-bold">Discover ➔ Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
