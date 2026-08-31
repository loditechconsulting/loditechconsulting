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
    <section id="technologies" className="py-20 lg:py-28 bg-[#081635] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071126] text-[#2563EB] border border-[#2563EB]/30 text-xs font-bold uppercase tracking-wider">
            <span>Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Technology <span className="text-[#2563EB]">Ecosystem</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-mono bg-[#071126] py-3 px-6 rounded-full border border-slate-800 inline-block shadow-md">
            <span className="text-[#2563EB]">SAP</span> | <span className="text-white">AWS</span> | <span className="text-[#2563EB]">BTP</span> | <span className="text-white">Integration</span> | <span className="text-[#2563EB]">AI</span> | <span className="text-white">Data & Analytics</span> | <span className="text-[#2563EB]">DevOps</span> | <span className="text-white">Enterprise Applications</span> | <span className="text-[#2563EB]">MES</span>
          </p>
        </div>

        {/* 9 Items Grid (3 Columns x 3 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((item, idx) => {
            const TechIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#071126]/90 border border-slate-800 hover:border-[#2563EB] rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl group transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#081635] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors shadow-md">
                    <TechIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-800 text-[#2563EB] group-hover:text-[#60A5FA] transition-colors">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
