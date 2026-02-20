import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import MantrasSection from '@/components/MantrasSection';
import HistoryTabs from '@/components/HistoryTabs';
import TempleOverview from '@/components/TempleOverview';
import LocationSection from '@/components/LocationSection';
import ConstructionSection from '@/components/ConstructionSection';
import VisionSection from '@/components/VisionSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import HangingDiyas from '@/components/HangingDiyas';
import galleryBg from '@/assets/gallery.jpeg';

const Index = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <HangingDiyas isHomePage={true} footerRef={footerRef} />



      <HeroSection />

      <div
        className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-temple-stone"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        {/* Black Shade Overlay - Increased darkness */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content with Z-index to stand above overlay */}
        <div className="relative z-10">
          <WelcomeSection />
          <AboutSection />
          <MantrasSection />
          <HistoryTabs />
          <TempleOverview />
          <ConstructionSection />
          <GallerySection />
          <LocationSection />
          <VisionSection />
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
