import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Database, Cloud, Cpu } from 'lucide-react';
import heroBg from '../assets/hero-tech-bg.jpg';

export default function Hero({ onOpenConsultation }) {
  return (
    <section id="home" className="relative min-h-[85vh] bg-gradient-to-b from-[#081635] via-[#0b1c42] to-[#071126] overflow-hidden flex flex-col justify-center py-16 lg:py-24">
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-luminosity" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081635] via-[#081635]/90 to-transparent z-0 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#7EC636]/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d204a]/80 border border-[#7EC636]/40 text-[#7EC636] text-xs font-bold tracking-wide uppercase shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LoDi Tech Consulting Private Limited</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Transforming Businesses with{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7EC636] via-[#92dc47] to-[#a4ea5a] drop-shadow-sm">
                Intelligent Technology
              </span>
            </h1>

            {/* Subheadline from PDF */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Delivering SAP, Cloud, Integration, Data, AI and Managed Services that help enterprises modernize, optimize and scale.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 bg-[#7EC636] hover:bg-[#6CB428] text-[#071126] font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-[#7EC636]/20 hover:shadow-[#7EC636]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl border border-slate-700 hover:border-[#2563EB] transition-all duration-300 backdrop-blur-md"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Checkpoints */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7EC636]" />
                <span>SAP S/4HANA & BTP Specialty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7EC636]" />
                <span>AWS & Azure Cloud Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7EC636]" />
                <span>End-to-End Managed Support</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Tech Widget */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl p-1 bg-gradient-to-b from-[#2563EB]/40 via-[#7EC636]/30 to-slate-800/60 shadow-2xl backdrop-blur-xl">
              <div className="w-full h-full bg-[#081635]/95 rounded-[14px] p-6 relative overflow-hidden flex flex-col justify-between">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">loditech-core-v1.0</span>
                </div>

                {/* Core Services Preview Items */}
                <div className="space-y-3 my-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#7EC636] transition-all flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#7EC636]/10 text-[#7EC636]">
                        <Database className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white">SAP Services</div>
                        <div className="text-xs text-slate-400">S/4HANA, BTP, AMS & Archiving</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#7EC636]/20 text-[#7EC636]">Core</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#2563EB] transition-all flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white">Cloud & Modernization</div>
                        <div className="text-xs text-slate-400">AWS, DevOps, MES & Architecture</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#2563EB]/20 text-[#2563EB]">Cloud</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400 transition-all flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white">AI & Integration</div>
                        <div className="text-xs text-slate-400">Intelligent Automation & APIs</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">AI</span>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Enterprise Lifecycle</span>
                  <span className="text-[#7EC636] font-semibold">Strategy ➔ Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
