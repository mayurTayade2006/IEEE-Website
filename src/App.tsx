import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsIEEE from './components/WhatIsIEEE';
import GallerySection from './components/GallerySection';
import ChaptersSection from './components/ChaptersSection';
import TeamSection from './components/TeamSection';
import JoinUs from './components/JoinUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import type { Chapter, GalleryAlbum } from './data/ieeeData';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);

  const handleNavigate = (sectionId: string) => {
    // Reset modal and overlay states to prevent overlapping content during navigation
    setActiveChapter(null);
    setSelectedAlbum(null);
    document.body.style.overflow = ''; // Ensure body scroll lock is released

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#0A0E17] text-gray-100 min-h-screen relative font-sans antialiased overflow-x-hidden">
      {/* Structural layout: Fixed Navbar */}
      <Navbar onNavigate={handleNavigate} />
      
      {/* Main Sections */}
      <Hero onNavigate={handleNavigate} />
      
      <About />
      
      <WhatIsIEEE />
      
      <GallerySection 
        selectedAlbum={selectedAlbum} 
        setSelectedAlbum={setSelectedAlbum} 
      />
      
      <ChaptersSection 
        activeChapter={activeChapter} 
        setActiveChapter={setActiveChapter} 
      />
      
      <TeamSection />
      
      <JoinUs />
      
      <ContactSection />
      
      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
