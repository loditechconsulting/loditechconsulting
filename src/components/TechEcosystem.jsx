import React from 'react';
import { Database, Cloud, Layers, GitBranch, Cpu, Server, Terminal, Globe, Factory } from 'lucide-react';

export default function TechEcosystem() {
  const ecosystemItems = [
    { name: 'SAP', desc: 'SAP Enterprise Software, S/4HANA ERP & Core Archiving', badge: 'Core ERP', icon: Database },
    { name: 'AWS', desc: 'Amazon Web Services Cloud Migration & Infrastructure', badge: 'Cloud Partner', icon: Cloud },
    { name: 'BTP', desc: 'SAP Business Technology Platform & Cloud Extensions', badge: 'Cloud Platform', icon: Layers },
    { name: 'Integration', desc: 'SAP Integration Suite, APIs & B2B Middleware', badge: 'APIs & Mesh', icon: GitBranch },
    { name: 'AI', desc: 'Intelligent Automation & AI-Powered Solutions', badge: 'Intelligent AI', icon: Cpu },
    { name: 'Data & Analytics', desc: 'Data Modernization, Analytics, Reporting & BI', badge: 'Business Intelligence', icon: Server },
    { name: 'DevOps', desc: 'DevOps Automation, CI/CD Pipelines & Containerization', badge: 'Automation', icon: Terminal },
    { name: 'Enterprise Applications', desc: 'Custom Applications & Scalable Enterprise Software', badge: 'Applications', icon: Globe },
    { name: 'MES', desc: 'Manufacturing Execution Systems & Industrial Telemetry', badge: 'Manufacturing', icon: Factory },
  ];

  return (
    <section id="technologies" className="py-20 lg:py-28 bg-[#F5F7FA] text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#3F6EB6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#3F6EB6]" />
            <span>Technology Stack & Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight">
            Enterprise <span className="text-[#3F6EB6]">Technology Ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-normal">
            Certified expertise across market-leading enterprise platforms, cloud providers, databases, and AI frameworks.
          </p>
        </div>

        {/* 9 Items Grid (3 Columns x 3 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((item, idx) => {
            const TechIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#3F6EB6] rounded-2xl p-6 text-left transition-all duration-300 shadow-sm hover:shadow-xl group transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#3F6EB6] group-hover:bg-[#3F6EB6] group-hover:text-white group-hover:border-[#3F6EB6] transition-all shadow-xs">
                    <TechIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#3F6EB6]/10 border border-[#3F6EB6]/20 text-[#3F6EB6] transition-colors">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#3F6EB6] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#667085] font-medium">
            💡 Modernizing legacy enterprise monoliths into agile, API-driven cloud architectures.
          </p>
        </div>

      </div>
    </section>
  );
}
