import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, Clock, ShieldCheck, X, Sparkles } from 'lucide-react';
import csDataImage from '../assets/case-study-sap-data.jpg';
import csCloudImage from '../assets/case-study-s4hana-cloud.jpg';
import csIntegrationImage from '../assets/case-study-integration.jpg';

export default function SuccessStories({ onOpenConsultation }) {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    {
      id: 'sap-archiving-60',
      title: 'Reduced SAP Database Growth by 60%',
      category: 'SAP Data Archiving & ILM',
      client: 'Global Manufacturing Enterprise (10,000+ Users)',
      image: csDataImage,
      metrics: [
        { label: 'DB Reduction', value: '60%' },
        { label: 'Annual Savings', value: '$1.2M' },
        { label: 'Backup Speed', value: '4x Faster' }
      ],
      summary: 'Implemented automated SAP ILM data archiving strategy, purging non-active transaction logs while maintaining full audit compliance.',
      challenge: 'The client’s SAP database exceeded 14 TB, causing severe system sluggishness, inflated cloud storage costs, and nightly backup windows exceeding 16 hours.',
      solution: 'LoDi Tech implemented a comprehensive SAP Data Archiving solution utilizing SAP Information Lifecycle Management (ILM). We archived historical financial records, purchasing logs, and sales documents into low-cost encrypted cold storage while maintaining instant online retrieval capability.',
      results: [
        'Reduced primary SAP database size from 14 TB down to 5.6 TB (60% growth reduction).',
        'Accelerated nightly backup duration from 16 hours down to under 4 hours.',
        'Cut annual AWS cloud storage & memory licensing expenses by $1.2M.',
        'Zero impact on end-user SAP GUI and Fiori application response times.'
      ]
    },
    {
      id: 's4hana-aws-migration',
      title: 'Seamless SAP S/4HANA Cloud Migration on AWS',
      category: 'Cloud Modernization',
      client: 'Multinational Retail & FMCG Group',
      image: csCloudImage,
      metrics: [
        { label: 'Cutover Downtime', value: '0 Hours' },
        { label: '3-Year TCO', value: '-45%' },
        { label: 'AWS SLA', value: '99.99%' }
      ],
      summary: 'Migrated legacy on-premise SAP ECC 6.0 to SAP S/4HANA Cloud hosted on AWS high-performance EC2 & HANA memory instances.',
      challenge: 'Aging on-premise hardware reached end-of-life, creating vulnerability risks and hindering real-time omnichannel inventory tracking.',
      solution: 'LoDi Tech executed a phased lift-and-shift migration combined with S/4HANA database conversion. We architected a multi-AZ fault-tolerant AWS environment equipped with automated failover and EBS storage tiering.',
      results: [
        'Completed cutover during a scheduled holiday weekend with zero unplanned business downtime.',
        'Reduced overall 3-year IT infrastructure Total Cost of Ownership (TCO) by 45%.',
        'Achieved 99.99% continuous system availability across 120+ retail store locations.'
      ]
    },
    {
      id: 'workflow-integration-automation',
      title: 'Integrated & Automated Enterprise Business Workflows',
      category: 'Integration & AI Automation',
      client: 'Energy & Power Infrastructure Utilities',
      image: csIntegrationImage,
      metrics: [
        { label: 'Order Cycle', value: '75% Faster' },
        { label: 'API Sync', value: '100% Real-Time' },
        { label: 'Daily Workflows', value: '50,000+' }
      ],
      summary: 'Connected SAP ERP with Salesforce CRM, IoT telemetry grid, and custom billing APIs via SAP CPI and Kafka event streams.',
      challenge: 'Disparate software applications forced manual data entry, leading to high error rates and delayed utility billing cycles.',
      solution: 'Designed an event-driven integration mesh powered by SAP Integration Suite and AI process automation bots to automatically ingest smart meter readings and trigger invoice generation.',
      results: [
        'Accelerated Order-to-Cash processing cycle by 75%.',
        'Orchestrated 50,000+ daily automated workflows with 99.999% message delivery reliability.',
        'Eliminated manual data entry errors across billing and customer support teams.'
      ]
    }
  ];

  return (
    <section id="success-stories" className="py-20 lg:py-28 bg-[#071126] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081635] text-[#2563EB] border border-[#2563EB]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Real Results.{' '}
            <span className="text-[#2563EB]">Proven Enterprise Impact.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore how we’ve empowered industry leaders to modernize their IT infrastructure, optimize SAP environments, and achieve measurable ROI.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="bg-[#081635] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-[#2563EB] transition-all duration-300 group cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081635] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-[#071126]/90 text-[#2563EB] border border-[#2563EB]/40 backdrop-blur-md">
                    {story.category}
                  </span>
                </div>

                {/* Card Header & Title */}
                <div className="p-6">
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    {story.client}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors mb-4 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-6">
                    {story.summary}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#071126] rounded-xl border border-slate-800/80 text-center">
                    {story.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-base font-extrabold text-[#2563EB]">{m.value}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <div className="w-full py-3 px-4 rounded-xl bg-slate-800/60 group-hover:bg-[#2563EB] text-slate-200 group-hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all">
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Case Study Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#081635] text-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700 p-6 sm:p-8 text-left relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                {activeStory.category} • Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeStory.title}</h3>
              <p className="text-sm font-medium text-slate-400">{activeStory.client}</p>
            </div>

            {/* Banner Image */}
            <div className="rounded-xl overflow-hidden mb-6 h-56 border border-slate-700">
              <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
            </div>

            {/* Metrics highlight */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#071126] border border-slate-800 text-center mb-6">
              {activeStory.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#2563EB]">{m.value}</div>
                  <div className="text-xs text-slate-300 font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              <div>
                <h4 className="text-base font-bold text-white mb-2 text-[#2563EB]">The Enterprise Challenge</h4>
                <p className="bg-[#071126]/60 p-4 rounded-xl border border-slate-800">{activeStory.challenge}</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 text-[#2563EB]">Our Technical Solution</h4>
                <p className="bg-[#071126]/60 p-4 rounded-xl border border-slate-800">{activeStory.solution}</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-3">Key Results & Business Value</h4>
                <div className="space-y-2">
                  {activeStory.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setActiveStory(null);
                  onOpenConsultation();
                }}
                className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 px-6 rounded-xl transition-all text-center shadow-lg cursor-pointer"
              >
                Transform Your Enterprise Like This →
              </button>
              <button
                onClick={() => setActiveStory(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3.5 px-6 rounded-xl transition-colors"
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
