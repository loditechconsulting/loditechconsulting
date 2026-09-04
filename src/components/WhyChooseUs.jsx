import React from 'react';
import { Award, Target, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenConsultation }) {
  const pillars = [
    {
      icon: Award,
      title: 'Technology Expertise',
      description: 'Senior certified SAP, AWS, and Integration architects bringing deep technical capabilities to every engagement.',
    },
    {
      icon: Target,
      title: 'Business Understanding',
      description: 'Practical business understanding ensuring technical solutions directly address enterprise operational goals.',
    },
    {
      icon: Zap,
      title: 'Faster Delivery',
      description: 'Accelerated implementation frameworks and pre-built templates driving rapid time-to-value for projects.',
    },
    {
      icon: HeartHandshake,
      title: 'Long-term Partnership',
      description: 'Dedicated long-term collaboration offering ongoing support, maintenance, and continuous optimization.',
    }
  ];

  return (
    <section id="why-lodi" className="py-20 lg:py-28 bg-[#FFFFFF] text-slate-900 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Tagline Banner */}
        <div className="mb-12 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm font-bold text-[#172033] shadow-sm">
          <span className="text-[#3F6EB6]">Technology Expertise</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#3F6EB6]">Business Understanding</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#3F6EB6]">Faster Delivery</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#3F6EB6]">Long-term Partnership</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Commitment Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#3F6EB6] text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>Why LoDi?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] leading-tight tracking-tight">
              Why <span className="text-[#3F6EB6]">LoDi?</span>
            </h2>

            <p className="text-[#667085] text-base sm:text-lg leading-relaxed font-normal">
              We combine deep enterprise technology expertise with practical business understanding to deliver solutions that create measurable value.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-[#172033] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#3F6EB6] shrink-0" />
                <span>Deep Enterprise Technology Expertise</span>
              </div>
              <div className="flex items-center gap-3 text-[#172033] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#3F6EB6] shrink-0" />
                <span>Practical Business Understanding</span>
              </div>
              <div className="flex items-center gap-3 text-[#172033] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#3F6EB6] shrink-0" />
                <span>Measurable Business Value & Faster Delivery</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#3F6EB6] hover:bg-[#325B99] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#3F6EB6]/25 hover:shadow-[#3F6EB6]/40 transition-all duration-200 cursor-pointer"
              >
                Contact Us →
              </button>
            </div>
          </div>

          {/* Right 4-Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#3F6EB6] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between transform hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-[#3F6EB6] group-hover:bg-[#3F6EB6] group-hover:text-white group-hover:border-[#3F6EB6] transition-all shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172033] mb-2 group-hover:text-[#3F6EB6] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
