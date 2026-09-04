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
      color: 'border-[#3F6EB6]/20 text-[#3F6EB6] bg-[#3F6EB6]/10'
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Architecture & Solution',
      desc: 'Architecting high-performance SAP, cloud, API integration, and security blueprints.',
      icon: Compass,
      color: 'border-[#3F6EB6]/20 text-[#3F6EB6] bg-[#3F6EB6]/10'
    },
    {
      number: '03',
      title: 'Implement',
      subtitle: 'Execution & Migration',
      desc: 'Agile execution of SAP S/4HANA migration, AWS cloud setup, AI automation, and software engineering.',
      icon: Cpu,
      color: 'border-[#3F6EB6]/20 text-[#3F6EB6] bg-[#3F6EB6]/10'
    },
    {
      number: '04',
      title: 'Optimize',
      subtitle: 'Performance & Tuning',
      desc: 'Continuous performance optimization, SAP data archiving, system health checks, and process refining.',
      icon: Gauge,
      color: 'border-[#3F6EB6]/20 text-[#3F6EB6] bg-[#3F6EB6]/10'
    },
    {
      number: '05',
      title: 'Support',
      subtitle: '24/7 Managed Services',
      desc: 'Reliable 24/7 application support, monitoring, maintenance, and continuous optimization.',
      icon: Headphones,
      color: 'border-[#3F6EB6]/20 text-[#3F6EB6] bg-[#3F6EB6]/10'
    }
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FFFFFF] text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#3F6EB6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3F6EB6]" />
            <span>Complete Technology Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight">
            Our <span className="text-[#3F6EB6]">Approach</span>
          </h2>

          <div className="text-sm sm:text-base font-bold text-[#3F6EB6] flex flex-wrap items-center justify-center gap-2 py-2 px-4 bg-[#F8FAFC] rounded-full border border-slate-200 max-w-2xl mx-auto shadow-xs">
            <span>Discover</span>
            <span className="text-slate-400">➔</span>
            <span>Design</span>
            <span className="text-slate-400">➔</span>
            <span>Implement</span>
            <span className="text-slate-400">➔</span>
            <span>Optimize</span>
            <span className="text-slate-400">➔</span>
            <span>Support</span>
          </div>

          <p className="text-[#667085] text-base sm:text-lg leading-relaxed font-normal pt-2">
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
                className="bg-[#F8FAFC] border border-slate-200 hover:border-[#3F6EB6] hover:bg-white rounded-2xl p-6 text-left transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between transform hover:-translate-y-1.5 relative z-10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#3F6EB6] transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#3F6EB6] transition-colors mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#667085] mb-3">
                    {step.subtitle}
                  </div>
                  
                  <p className="text-xs text-[#667085] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector indicator */}
                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-[#667085] group-hover:text-[#3F6EB6] transition-colors">
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
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-md">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6EB6]">Lifecycle Support</span>
            <div className="text-base font-bold text-[#172033]">LoDi supports your entire technology lifecycle from assessment to 24/7 support.</div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#3F6EB6] hover:bg-[#325B99] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#3F6EB6]/25 hover:shadow-[#3F6EB6]/40 transition-all cursor-pointer"
          >
            Contact Us →
          </button>
        </div>

      </div>
    </section>
  );
}
