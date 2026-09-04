import React from 'react';
import { Factory, ShoppingBag, Stethoscope, Zap, Truck, Briefcase, Landmark, ChevronRight, Layers } from 'lucide-react';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      tagline: 'Smart Industry 4.0 & SAP Supply Chain',
      desc: 'Optimizing plant maintenance, inventory planning, and real-time production analytics with SAP S/4HANA Manufacturing & AWS IoT.',
      stats: '35% Productivity Boost'
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Consumer Goods',
      tagline: 'Omnichannel Retail & Demand Forecasting',
      desc: 'Seamless point-of-sale integration, automated warehousing, and unified customer intelligence across multi-brand enterprise networks.',
      stats: '40% Faster Checkout'
    },
    {
      icon: Stethoscope,
      name: 'Healthcare & Life Sciences',
      tagline: 'HIPAA Data Archiving & EHR Systems',
      desc: 'Secure clinical data archiving, compliant patient record management, and AI-powered medical analytics infrastructure.',
      stats: '100% HIPAA Compliant'
    },
    {
      icon: Zap,
      name: 'Energy & Utilities',
      tagline: 'Asset Management & Smart Grid Analytics',
      desc: 'Predictive equipment maintenance, SAP IS-U billing integration, and cloud-native utility telemetry processing.',
      stats: '25% Maintenance Savings'
    },
    {
      icon: Truck,
      name: 'Logistics & Transportation',
      tagline: 'Fleet Telemetry & SAP TM Orchestration',
      desc: 'End-to-end shipment visibility, automated route optimization, and real-time freight billing integration.',
      stats: '99.2% On-Time Delivery'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      tagline: 'Resource Management & SAP SuccessFactors',
      desc: 'Streamlining project accounting, time tracking, global workforce management, and automated invoicing workflows.',
      stats: '50% Faster Invoicing'
    },
    {
      icon: Landmark,
      name: 'Public Sector',
      tagline: 'Secure Sovereign Cloud & Government IT',
      desc: 'High-security cloud migration, citizen service portals, and compliant financial governance for municipal and federal agencies.',
      stats: 'Zero-Trust Certified'
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F5F7FA] text-slate-900 relative border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#3F6EB6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#3F6EB6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#3F6EB6]" />
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight">
            Tailored Solutions for <span className="text-[#3F6EB6]">Vertical Enterprise Sectors</span>
          </h2>
          <p className="text-[#667085] text-base sm:text-lg leading-relaxed font-normal">
            Every industry has unique operational and regulatory needs. We deliver domain-specific SAP and cloud solutions engineered for compliance and speed.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-[#3F6EB6] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between text-left transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#3F6EB6]/10 text-[#3F6EB6] flex items-center justify-center group-hover:bg-[#3F6EB6] group-hover:text-white transition-colors shadow-sm">
                      <IndIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#3F6EB6] bg-[#3F6EB6]/10 border border-[#3F6EB6]/20 px-3 py-1 rounded-full">
                      {ind.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#3F6EB6] transition-colors mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#667085] mb-3">
                    {ind.tagline}
                  </p>
                  <p className="text-sm text-[#667085] leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-[#3F6EB6] hover:text-[#325B99] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Discuss Sector Solution</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
