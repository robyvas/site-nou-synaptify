import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightText } from './components/HighlightText';
import { Exceptionalities } from './components/Exceptionalities';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Steps } from './components/Steps';
import { DataPrivacy } from './components/DataPrivacy';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { IntegrationSection } from './components/IntegrationSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenContact = (planName?: string) => {
    setSelectedPlan(planName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white flex flex-col items-center overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Page Flow */}
      <main className="w-full flex flex-col items-center">
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 2. Highlight Text & Holographic Sphere */}
        <HighlightText />

        {/* 3. Exceptionalities Bento Grid */}
        <Exceptionalities onOpenContact={() => handleOpenContact()} />

        {/* 4. Features with Sticky Category Menu & Live Typewriter */}
        <Features onOpenContact={() => handleOpenContact()} />

        {/* 5. Products Showcase with Interactive Tabs */}
        <Products />

        {/* 6. 3 Steps to Kickstart */}
        <Steps />

        {/* 7. Multi-Layer Security / Data & Privacy */}
        <DataPrivacy />

        {/* 8. Customer Testimonials Carousel */}
        <Testimonials />

        {/* 9. Pricing Plans with Monthly/Yearly Toggle */}
        <Pricing onOpenContact={(plan) => handleOpenContact(plan)} />

        {/* 10. Interactive FAQ Accordion */}
        <FAQ />

        {/* 11. Smart Versatile Agent driven Integration */}
        <IntegrationSection onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Contact / Demo Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
