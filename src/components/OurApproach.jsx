import React from 'react';
import { Search, Compass, Cpu, Gauge, Headphones, ArrowRight, Sparkles } from 'lucide-react';

export default function OurApproach({ onOpenConsultation }) {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Strategy & Assessment',
      desc: 'Initial strategy, legacy system audit, business requirement gathering, and ROI scoping.',
      icon: Search,
      color: 'border-blue-500 text-[#2563EB] bg-blue-500/10'
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Architecture & Solution',
      desc: 'Architecting high-performance SAP, cloud, API integration, and security blueprints.',
      icon: Compass,
      color: 'border-[#2563EB] text-[#2563EB] bg-[#2563EB]/10'
    },
    {
      number: '03',
      title: 'Implement',
      subtitle: 'Execution & Migration',
      desc: 'Agile execution of SAP S/4HANA migration, AWS cloud setup, AI automation, and software engineering.',
      icon: Cpu,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
    },
    {
      number: '04',
      title: 'Optimize',
      subtitle: 'Performance & Tuning',
      desc: 'Continuous performance optimization, SAP data archiving, system health checks, and process refining.',
      icon: Gauge,
      color: 'border-amber-500 text-amber-400 bg-amber-500/10'
    },
    {
      number: '05',
      title: 'Support',
      subtitle: '24/7 Managed Services',
      desc: 'Reliable 24/7 application support, monitoring, maintenance, and continuous optimization.',
      icon: Headphones,
      color: 'border-purple-500 text-purple-400 bg-purple-500/10'
    }
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#081635] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2563EB]/10 to-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071126] text-[#2563EB] border border-[#2563EB]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Technology Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our <span className="text-[#2563EB]">Approach</span>
          </h2>

          <div className="text-sm sm:text-base font-bold text-[#2563EB] flex flex-wrap items-center justify-center gap-2 py-2 px-4 bg-[#071126] rounded-full border border-slate-800 max-w-2xl mx-auto shadow-md">
            <span>Discover</span>
            <span className="text-white">➔</span>
            <span>Design</span>
            <span className="text-white">➔</span>
            <span>Implement</span>
            <span className="text-white">➔</span>
            <span>Optimize</span>
            <span className="text-white">➔</span>
            <span>Support</span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
            From strategy and assessment through implementation and managed services, LoDi supports the complete technology lifecycle.
          </p>
        </div>

        {/* 5 Lifecycle Steps Horizontal Connected Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#071126] border border-slate-800 hover:border-[#2563EB] rounded-2xl p-6 text-left transition-all duration-300 shadow-xl hover:shadow-2xl group flex flex-col justify-between transform hover:-translate-y-1.5 relative z-10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-600 group-hover:text-[#2563EB] transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {step.subtitle}
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                  <span>Phase {step.number}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 hidden lg:block group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-14 p-6 rounded-2xl bg-[#071126]/80 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Lifecycle Support</span>
            <div className="text-base font-bold text-white">LoDi supports your entire technology lifecycle from assessment to 24/7 support.</div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            Contact Us →
          </button>
        </div>

      </div>
    </section>
  );
}
