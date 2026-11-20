/**
 * All site copy and company details live here. Edit this file to change
 * text, contact details, services, industries or case studies. No component
 * changes needed.
 */
import {
  Database, Cloud, GitFork, ChartColumn, Bot, Server,
  Layers, GitBranch, Cpu, Terminal, Globe, Factory,
  ShoppingBag, Stethoscope, Zap, Truck, Briefcase, Landmark,
  Award, Target, HeartHandshake,
  Search, Compass, Gauge, Headphones,
  CloudUpload, Workflow,
} from 'lucide-react';

export const company = {
  name: 'LoDi Tech Consulting',
  legalName: 'LoDi Tech Consulting Private Limited',
  email: 'loditechc@gmail.com',
  phone: { display: '+91 832-8659381', href: 'tel:+918328659381', e164: '+918328659381' },
  address: {
    street: 'Hi-Tech City',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500081',
    country: 'India',
    countryCode: 'IN',
  },
  hours: { display: 'Mon – Fri, 9:00 AM – 6:00 PM IST', opens: '09:00', closes: '18:00' },
  // Full profile URLs. Icons only render for entries that are filled in.
  social: {
    linkedin: '',
    x: '',
  },
};

export const hero = {
  eyebrow: 'SAP · Cloud · Integration · Data · AI',
  title: 'Transforming Businesses with',
  titleAccent: 'Intelligent Technology',
  summary:
    'Delivering SAP, Cloud, Integration, Data, AI and Managed Services that help enterprises modernize, optimize and scale.',
  highlights: [
    'SAP ECC, S/4HANA & BTP specialists',
    'AWS cloud migration & DevOps',
    'End-to-end managed support',
  ],
};

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Why LoDi', href: '/#why-lodi' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Case Studies', href: '/#case-studies' },
];

export const services = [
  {
    id: 'sap',
    icon: Database,
    title: 'SAP Services',
    short: 'S/4HANA, BTP, AMS & Archiving',
    subtitle: 'Implementation, Migration & Archiving',
    description:
      'SAP ECC, S/4HANA, SAP BTP and AMS: implementation, migration, optimization and data archiving.',
    features: [
      'SAP ECC implementations',
      'SAP S/4HANA cloud & on-premise migration',
      'SAP Business Technology Platform (BTP) extensions',
      'Application Management Services (AMS) with SLA-based support',
      'SAP data archiving & Information Lifecycle Management (ILM)',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & Digital Transformation',
    short: 'AWS, DevOps, MES & Architecture',
    subtitle: 'AWS, DevOps & Modern Architecture',
    description:
      'AWS cloud migration, modernization, DevOps, MES and scalable enterprise architecture.',
    features: [
      'AWS cloud migration & infrastructure engineering',
      'DevOps automation & CI/CD pipelines',
      'Manufacturing Execution Systems (MES) integration',
      'Scalable enterprise architecture & microservices',
      'Cloud modernization & security best practices',
    ],
  },
  {
    id: 'integration',
    icon: GitFork,
    title: 'Integration Services',
    short: 'APIs, Middleware & B2B',
    subtitle: 'APIs, Middleware & B2B Integration',
    description:
      'SAP integration, APIs, middleware, B2B integration and enterprise application integration.',
    features: [
      'SAP Integration Suite, SAP CPI & PO middleware',
      'REST & GraphQL enterprise API gateways',
      'B2B / EDI partner integration',
      'Enterprise Application Integration (EAI)',
      'Real-time data sync & messaging pipelines',
    ],
  },
  {
    id: 'data',
    icon: ChartColumn,
    title: 'Data & Analytics',
    short: 'BI, Reporting & SAC',
    subtitle: 'Modernization, BI & Reporting',
    description: 'Data modernization, analytics, reporting and business intelligence.',
    features: [
      'Enterprise data modernization & warehousing',
      'SAP BW/4HANA & SAP Analytics Cloud (SAC)',
      'Executive business intelligence dashboards',
      'Custom analytics & real-time reporting',
      'Data governance foundations',
    ],
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automation',
    short: 'Intelligent Automation',
    subtitle: 'AI-Powered Productivity',
    description:
      'Intelligent automation and AI-powered solutions that improve productivity and reduce operational effort.',
    features: [
      'Robotic Process Automation (RPA)',
      'AI-powered productivity solutions',
      'Workflow automation to reduce operational effort',
      'Intelligent document processing & OCR',
      'Generative AI assistant integration',
    ],
  },
  {
    id: 'managed',
    icon: Server,
    title: 'Managed Services',
    short: 'Support, Monitoring & Optimization',
    subtitle: 'Reliable Support & Monitoring',
    description:
      'Reliable application support, monitoring, maintenance and continuous optimization.',
    features: [
      'SLA-backed application support (L1–L3)',
      'Proactive infrastructure & system monitoring',
      'Preventive maintenance & patch management',
      'Continuous performance optimization',
      'Dedicated service delivery management',
    ],
  },
];

export const pillars = [
  {
    icon: Award,
    title: 'Technology Expertise',
    description:
      'Experienced SAP, AWS and integration consultants bringing deep technical capability to every engagement.',
  },
  {
    icon: Target,
    title: 'Business Understanding',
    description:
      'Solutions shaped around your operational goals, not just the technology.',
  },
  {
    icon: Zap,
    title: 'Faster Delivery',
    description:
      'Proven frameworks and reusable accelerators that shorten time-to-value.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Partnership',
    description:
      'Ongoing support, maintenance and continuous optimization long after go-live.',
  },
];

export const technologies = [
  { name: 'SAP', desc: 'SAP ECC, S/4HANA ERP & archiving', badge: 'Core ERP', icon: Database },
  { name: 'AWS', desc: 'Cloud migration, infrastructure & managed hosting', badge: 'Cloud', icon: Cloud },
  { name: 'SAP BTP', desc: 'Business Technology Platform & cloud extensions', badge: 'Platform', icon: Layers },
  { name: 'Integration', desc: 'SAP Integration Suite, APIs & B2B middleware', badge: 'APIs', icon: GitBranch },
  { name: 'AI', desc: 'Intelligent automation & AI-powered solutions', badge: 'Automation', icon: Cpu },
  { name: 'Data & Analytics', desc: 'Data modernization, reporting & BI', badge: 'Insights', icon: ChartColumn },
  { name: 'DevOps', desc: 'CI/CD pipelines, automation & containerization', badge: 'Engineering', icon: Terminal },
  { name: 'Enterprise Applications', desc: 'Custom, scalable enterprise software', badge: 'Applications', icon: Globe },
  { name: 'MES', desc: 'Manufacturing Execution Systems & shop-floor data', badge: 'Manufacturing', icon: Factory },
];

export const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    tagline: 'Industry 4.0 & SAP Supply Chain',
    desc: 'Plant maintenance, inventory planning and real-time production analytics with SAP S/4HANA and MES integration.',
    focus: ['SAP S/4HANA', 'MES', 'Supply Chain'],
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Consumer Goods',
    tagline: 'Omnichannel Retail & Demand Planning',
    desc: 'Point-of-sale integration, automated warehousing and unified customer data across multi-brand networks.',
    focus: ['POS Integration', 'Warehousing', 'Analytics'],
  },
  {
    icon: Stethoscope,
    name: 'Healthcare & Life Sciences',
    tagline: 'Compliant Data & Clinical Systems',
    desc: 'Secure data archiving, patient-record integration and analytics built around regulatory requirements.',
    focus: ['Data Archiving', 'EHR Integration', 'Compliance'],
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    tagline: 'Asset Management & Grid Analytics',
    desc: 'Predictive maintenance, SAP IS-U billing integration and cloud-based telemetry processing.',
    focus: ['SAP IS-U', 'Asset Management', 'Telemetry'],
  },
  {
    icon: Truck,
    name: 'Logistics & Transportation',
    tagline: 'Fleet Visibility & SAP TM',
    desc: 'End-to-end shipment visibility, route optimization and real-time freight billing integration.',
    focus: ['SAP TM', 'Fleet Telemetry', 'Billing'],
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    tagline: 'Resource Management & SuccessFactors',
    desc: 'Project accounting, time tracking, workforce management and automated invoicing workflows.',
    focus: ['SuccessFactors', 'Project Accounting', 'Invoicing'],
  },
  {
    icon: Landmark,
    name: 'Public Sector',
    tagline: 'Secure Cloud & Government IT',
    desc: 'Secure cloud migration, citizen service portals and sound financial governance for public bodies.',
    focus: ['Secure Cloud', 'Citizen Portals', 'Governance'],
  },
];

export const approach = {
  intro:
    'From strategy and assessment through implementation and managed services, LoDi supports the complete technology lifecycle.',
  steps: [
    {
      title: 'Discover',
      subtitle: 'Strategy & Assessment',
      desc: 'Current-state audit, business requirements and ROI scoping.',
      icon: Search,
    },
    {
      title: 'Design',
      subtitle: 'Architecture & Solution',
      desc: 'SAP, cloud, integration and security blueprints built for your landscape.',
      icon: Compass,
    },
    {
      title: 'Implement',
      subtitle: 'Execution & Migration',
      desc: 'Agile delivery of migrations, cloud builds, automation and custom software.',
      icon: Cpu,
    },
    {
      title: 'Optimize',
      subtitle: 'Performance & Tuning',
      desc: 'Performance tuning, data archiving, health checks and process refinement.',
      icon: Gauge,
    },
    {
      title: 'Support',
      subtitle: 'Managed Services',
      desc: 'Application support, monitoring, maintenance and continuous improvement.',
      icon: Headphones,
    },
  ],
};

/**
 * Case studies. Every figure below must be confirmed by the client before
 * launch. Remove or edit any engagement that can't be substantiated.
 */
export const caseStudies = [
  {
    id: 'sap-archiving',
    icon: Database,
    title: 'Reduced SAP Database Growth by 60%',
    category: 'SAP Data Archiving & ILM',
    client: 'Global manufacturing enterprise (10,000+ users)',
    headline: { value: '60%', label: 'smaller SAP database' },
    metrics: [
      { label: 'DB reduction', value: '60%' },
      { label: 'Annual savings', value: '$1.2M' },
      { label: 'Backups', value: '4× faster' },
    ],
    summary:
      'Automated SAP ILM archiving strategy that moved inactive data to low-cost storage while keeping full audit compliance.',
    challenge:
      'The SAP database had grown past 14 TB, causing sluggish performance, rising cloud storage costs and nightly backup windows of more than 16 hours.',
    solution:
      'We implemented SAP Data Archiving with Information Lifecycle Management (ILM), moving historical financial, purchasing and sales documents into encrypted low-cost storage while keeping them retrievable on demand.',
    results: [
      'Primary SAP database reduced from 14 TB to 5.6 TB.',
      'Nightly backups cut from 16 hours to under 4 hours.',
      'Annual cloud storage and memory costs reduced by $1.2M.',
      'No impact on SAP GUI or Fiori response times for end users.',
    ],
  },
  {
    id: 's4hana-aws',
    icon: CloudUpload,
    title: 'SAP S/4HANA Migration to AWS',
    category: 'Cloud Modernization',
    client: 'Multinational retail & FMCG group',
    headline: { value: '−45%', label: '3-year infrastructure TCO' },
    metrics: [
      { label: 'Unplanned downtime', value: '0 hrs' },
      { label: '3-year TCO', value: '−45%' },
      { label: 'Availability', value: '99.99%' },
    ],
    summary:
      'Moved a legacy on-premise SAP ECC 6.0 landscape to SAP S/4HANA on AWS.',
    challenge:
      'End-of-life on-premise hardware was creating risk and blocking real-time omnichannel inventory visibility.',
    solution:
      'A phased migration combined with S/4HANA conversion onto a multi-AZ, fault-tolerant AWS environment with automated failover and tiered storage.',
    results: [
      'Cutover completed over a planned holiday weekend with no unplanned downtime.',
      'Three-year infrastructure total cost of ownership reduced by 45%.',
      '99.99% availability across 120+ retail locations.',
    ],
  },
  {
    id: 'integration-automation',
    icon: Workflow,
    title: 'Integrated & Automated Business Workflows',
    category: 'Integration & AI Automation',
    client: 'Energy & utilities provider',
    headline: { value: '75%', label: 'faster order-to-cash' },
    metrics: [
      { label: 'Order cycle', value: '75% faster' },
      { label: 'Data sync', value: 'Real-time' },
      { label: 'Daily workflows', value: '50,000+' },
    ],
    summary:
      'Connected SAP ERP with CRM, IoT telemetry and billing systems using SAP Integration Suite and event streaming.',
    challenge:
      'Disconnected applications forced manual data entry, causing errors and delayed billing cycles.',
    solution:
      'An event-driven integration layer on SAP Integration Suite, with automation bots that ingest smart-meter readings and trigger invoice generation automatically.',
    results: [
      'Order-to-cash cycle accelerated by 75%.',
      '50,000+ automated workflows orchestrated every day.',
      'Manual data-entry errors eliminated across billing and support teams.',
    ],
  },
];

export const serviceOptions = [...services.map((s) => s.title), 'Other / not sure yet'];
