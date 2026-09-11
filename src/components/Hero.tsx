import React from 'react';
import { motion } from 'framer-motion';
import CyberPlexusCanvas from './CyberPlexusCanvas';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* 3D Cybernetic Neural Plexus & Network Constellation Canvas */}
      <CyberPlexusCanvas />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Copywriting */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/10 border border-ieee-blue/20 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ieee-accent" />
            NMIET Student Branch
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            IEEE <span className="text-gradient">NMIET</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-display font-medium text-gray-200 mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Innovate. Connect. Inspire.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            We are a student-driven technical community focused on emerging technologies, leadership, and professional growth. We empower students to build real projects, publish research, and connect with global engineering professionals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-ieee-blue via-ieee-lightBlue to-ieee-accent hover:opacity-95 text-white font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(0,181,226,0.3)] hover:shadow-[0_0_35px_rgba(0,181,226,0.5)] flex-1 sm:flex-none text-center cursor-pointer hover:scale-[1.02]"
            >
              Explore IEEE NMIET
            </button>
            <button
              onClick={() => onNavigate('join-us')}
              className="px-8 py-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-ieee-accent text-white font-semibold transition-all duration-300 flex-1 sm:flex-none text-center hover:bg-white/10 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] cursor-pointer hover:scale-[1.02]"
            >
              Join Community
            </button>
          </motion.div>

          {/* Quick Glassmorphic Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 w-full"
          >
            <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ieee-accent animate-pulse" />
              <span className="text-xs font-semibold text-gray-300">4 Student Chapters</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
              <span className="text-xs font-semibold text-gray-300">Active Technical Teams</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="text-xs font-semibold text-gray-300">Global IEEE STB99631</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Static Club Logo with rotating orbit nucleus */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient Background Glow matching the purple/blue theme */}
            <div className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-ieee-blue/15 to-ieee-accent/15 blur-3xl pointer-events-none" />

            {/* Outer orbit ring with rotating nucleus dots */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[24rem] h-[24rem] rounded-full border border-ieee-blue/20 pointer-events-none"
            >
              {['0', '120', '240'].map((angle) => (
                <div
                  key={angle}
                  className="absolute w-4 h-4 rounded-full bg-ieee-accent shadow-[0_0_18px_rgba(0,181,226,0.5)]"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-10.5rem)`
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[18rem] h-[18rem] rounded-full border border-ieee-accent/30 pointer-events-none"
            />

            {/* Static clean outline ring around the logo */}
            <div className="absolute -inset-4 rounded-full border border-ieee-blue/20 pointer-events-none" />

            {/* Circular Logo Container: rounding clips the corners of the square image (Medium Size) */}
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-ieee-blue/40 shadow-2xl relative bg-[#0A0E17] flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="IEEE NMIET Student Branch Logo" 
                className="w-full h-full object-cover scale-[1.01]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center items-start p-1.5 cursor-pointer"
          onClick={() => onNavigate('about')}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-ieee-accent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
