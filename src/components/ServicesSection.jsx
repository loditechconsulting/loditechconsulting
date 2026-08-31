import React, { useState } from 'react';
import { 
  Database, Cloud, GitFork, BarChart3, Bot, Server, 
  ArrowRight, Check, X, Sparkles 
} from 'lucide-react';

export default function ServicesSection({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'sap-services',
      icon: Database,
      title: 'SAP Services',
      subtitle: 'Implementation, Migration & Archiving',
      description: 'SAP S/4HANA, SAP BTP, AMS, Implementation, migration, optimization and data archiving.',
      features: [
        'SAP S/4HANA Cloud & On-Premise Migration',
        'SAP Business Technology Platform (BTP) Innovations',
        'AMS (Application Management Services) 24/7 SLA Support',
        'SAP Data Archiving & ILM Size Reduction',
        'System Optimization & ABAP / Fiori Modernization'
      ]
    },
    {
      id: 'cloud-transformation',
      icon: Cloud,
      title: 'Cloud & Digital Transformation',
      subtitle: 'AWS, DevOps & Modern Architecture',
      description: 'AWS, Cloud migration, modernization, DevOps, MES and scalable enterprise architecture.',
      features: [
        'AWS Cloud Migration & Infrastructure Engineering',
        'DevOps Automation & Continuous Integration (CI/CD)',
        'MES (Manufacturing Execution Systems) Integration',
        'Scalable Enterprise Architecture & Microservices',
        'Cloud Modernization & Security Compliance'
      ]
    },
    {
      id: 'integration-services',
      icon: GitFork,
      title: 'Integration Services',
      subtitle: 'APIs, Middleware & B2B Integration',
      description: 'SAP integration, APIs, middleware, B2B integration and enterprise application integration.',
      features: [
        'SAP Integration Suite & SAP CPI / PO Middleware',
        'RESTful & GraphQL Enterprise API Gateways',
        'B2B / EDI Partner System Integration',
        'Enterprise Application Integration (EAI)',
        'Real-time Data Sync & Messaging Pipelines'
      ]
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Data & Analytics',
      subtitle: 'Modernization, BI & Reporting',
      description: 'Data modernization, analytics, reporting and business intelligence.',
      features: [
        'Enterprise Data Modernization & Warehousing',
        'SAP BW/4HANA & SAP Analytics Cloud (SAC)',
        'Executive Business Intelligence (BI) Dashboards',
        'Custom Analytics & Real-time Reporting',
        'Data Governance & Compliance Infrastructure'
      ]
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI & Automation',
      subtitle: 'Intelligent AI-Powered Productivity',
      description: 'Intelligent automation and AI-powered solutions to improve productivity and reduce operational effort.',
      features: [
        'Intelligent Robotic Process Automation (RPA)',
        'AI-Powered Solutions for Productivity Enhancement',
        'Operational Effort Reduction & Workflow Bots',
        'Intelligent Document Processing & OCR',
        'Enterprise Generative AI Assistant Integration'
      ]
    },
    {
      id: 'managed-services',
      icon: Server,
      title: 'Managed Services',
      subtitle: 'Reliable Support & Monitoring',
      description: 'Reliable application support, monitoring, maintenance and continuous optimization.',
      features: [
        '24/7 SLA-Backed Application & L1-L4 Support',
        'Proactive Infrastructure & System Monitoring',
        'Preventative System Maintenance & Patch Management',
        'Continuous Performance Optimization',
        'Dedicated Technical Service Delivery Management'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071126] text-[#2563EB] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071126] tracking-tight">
            End-to-End Solutions.{' '}
            <span className="text-[#2563EB]">Measurable Impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Delivering SAP, Cloud, Integration, Data, AI and Managed Services that help enterprises modernize, optimize and scale.
          </p>
        </div>

        {/* 6 Services Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2563EB] transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#081635] text-[#2563EB] flex items-center justify-center mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#071126] group-hover:text-[#2563EB] transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors">
                  <span>Explore Service Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box Below Services */}
        <div className="mt-16 bg-[#071126] rounded-2xl p-8 lg:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="text-left max-w-2xl">
            <h4 className="text-2xl font-bold text-white mb-2">
              Ready to Modernize Your Technology Architecture?
            </h4>
            <p className="text-slate-300 text-sm sm:text-base">
              Talk to our enterprise architects for a technical assessment and custom solution roadmap.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto shrink-0 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            Talk to Our Experts →
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 text-left relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#081635] text-[#2563EB] flex items-center justify-center shrink-0 shadow-lg">
                {React.createElement(selectedService.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Core Service</span>
                <h3 className="text-2xl font-bold text-[#071126]">{selectedService.title}</h3>
                <p className="text-xs font-medium text-slate-500">{selectedService.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {selectedService.description}
            </p>

            <h4 className="text-xs font-bold text-[#071126] uppercase tracking-wider mb-4">
              Key Features & Capabilities:
            </h4>
            <div className="space-y-3 mb-8">
              {selectedService.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="p-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenConsultation();
                }}
                className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 px-6 rounded-xl transition-all text-center shadow-md cursor-pointer"
              >
                Schedule Consultation for {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 px-6 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
