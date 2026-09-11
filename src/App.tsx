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
import CyberWaveCanvas from './components/CyberWaveCanvas';
import CursorSpotlight from './components/CursorSpotlight';
import type { Chapter, GalleryAlbum, FunctionalTeam } from './data/ieeeData';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);
  const [activeTeam, setActiveTeam] = useState<FunctionalTeam | null>(null);

  const handleNavigate = (sectionId: string) => {
    // Reset all subpages, modals, and overlay states immediately
    setActiveChapter(null);
    setSelectedAlbum(null);
    setActiveTeam(null);
    document.body.style.overflow = ''; // Release body scroll lock

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Smooth scroll to target section with a slight timeout to let any open modal unmount cleanly
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  return (
    <div className="bg-[#0A0E17] text-gray-100 min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-ieee-accent/30 selection:text-white">
      {/* 3D Colorful Cyber Wave Terrain Mesh & Particles across all sections */}
      <CyberWaveCanvas />

      {/* Interactive Ambient Cursor Nebula Spotlight */}
      <CursorSpotlight />

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
      
      <TeamSection 
        activeTeam={activeTeam}
        setActiveTeam={setActiveTeam}
      />
      
      <JoinUs />
      
      <ContactSection />
      
      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
