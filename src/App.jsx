import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TechEcosystem from './components/TechEcosystem';
import IndustriesSection from './components/IndustriesSection';
import OurApproach from './components/OurApproach';
import SuccessStories from './components/SuccessStories';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#172033] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#3F6EB6] selection:text-white">
      {/* Top Header Contact Bar */}
      <TopBar />

      {/* Main Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Core Services */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Why LoDi Tech */}
        <WhyChooseUs onOpenConsultation={handleOpenConsultation} />

        {/* Technology Ecosystem */}
        <TechEcosystem />

        {/* Industries Vertical Solutions */}
        <IndustriesSection onOpenConsultation={handleOpenConsultation} />

        {/* Our Approach (Discover -> Design -> Implement -> Optimize -> Support) */}
        <OurApproach onOpenConsultation={handleOpenConsultation} />

        {/* Success Stories & Case Studies */}
        <SuccessStories onOpenConsultation={handleOpenConsultation} />

        {/* Strong Call to Action Banner */}
        <CTABanner onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal Dialog */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
}
