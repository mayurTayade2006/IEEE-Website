import React from 'react';
import { motion } from 'framer-motion';
// No lucide icons needed in Hero anymore

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background glow orbs */}
      <div className="glow-orb glow-blue w-[500px] h-[500px] -top-40 -left-40" />
      <div className="glow-orb glow-cyan w-[400px] h-[400px] bottom-10 -right-20" />

      {/* Dynamic Floating Crystal Wave Background (Independent Crystals) */}
      {(() => {
        const crystals = [
          // Left side cluster (behind text)
          { id: 1, src: '/bg-cubes-1.png', size: 130, top: '15%', left: '5%', duration: 14, delay: 0, xRange: [0, 15, 0], yRange: [0, -25, 0], rotRange: [0, 180, 360] },
          { id: 2, src: '/bg-cubes-1.png', size: 90, top: '35%', left: '12%', duration: 18, delay: 1, xRange: [0, -12, 0], yRange: [0, 20, 0], rotRange: [0, -180, -360] },
          { id: 3, src: '/bg-cubes-1.png', size: 100, top: '20%', left: '22%', duration: 16, delay: 2, xRange: [0, 20, 0], yRange: [0, -15, 0], rotRange: [0, 360] },
          { id: 4, src: '/bg-cubes-1.png', size: 80, top: '55%', left: '8%', duration: 22, delay: 0.5, xRange: [0, -15, 0], yRange: [0, -30, 0], rotRange: [0, 180] },
          { id: 5, src: '/bg-cubes-1.png', size: 95, top: '65%', left: '18%', duration: 17, delay: 1.5, xRange: [0, 10, 0], yRange: [0, 20, 0], rotRange: [0, -360] },

          // Bridge wave (flowing toward the logo)
          { id: 6, src: '/bg-cubes-1.png', size: 110, top: '40%', left: '32%', duration: 15, delay: 0.8, xRange: [0, 25, 0], yRange: [0, -25, 0], rotRange: [0, 180, 360] },
          { id: 7, src: '/bg-cubes-1.png', size: 90, top: '22%', left: '42%', duration: 20, delay: 2.2, xRange: [0, -15, 0], yRange: [0, 15, 0], rotRange: [0, -180] },
          { id: 8, src: '/bg-cubes-1.png', size: 100, top: '60%', left: '38%', duration: 16, delay: 1.2, xRange: [0, 15, 0], yRange: [0, -20, 0], rotRange: [0, 360] },

          // Right side cluster (around the logo)
          { id: 9, src: '/bg-cubes-1.png', size: 140, top: '8%', right: '15%', duration: 18, delay: 0.3, xRange: [0, 20, 0], yRange: [0, -30, 0], rotRange: [0, 360] },
          { id: 10, src: '/bg-cubes-1.png', size: 95, top: '25%', right: '5%', duration: 14, delay: 1.7, xRange: [0, -10, 0], yRange: [0, 25, 0], rotRange: [0, -180, -360] },
          { id: 11, src: '/bg-cubes-1.png', size: 115, top: '50%', right: '22%', duration: 16, delay: 0.5, xRange: [0, -20, 0], yRange: [0, -15, 0], rotRange: [0, 360] },
          { id: 12, src: '/bg-cubes-1.png', size: 85, top: '68%', right: '10%', duration: 21, delay: 2.5, xRange: [0, 15, 0], yRange: [0, 25, 0], rotRange: [0, -360] },
          { id: 13, src: '/bg-cubes-1.png', size: 105, top: '75%', right: '26%', duration: 15, delay: 1.1, xRange: [0, -15, 0], yRange: [0, -20, 0], rotRange: [0, 180] },
          
          // Accents (Orange glowing cubes to match the branding)
          { id: 14, src: '/bg-cubes-2.png', size: 90, top: '30%', left: '50%', duration: 24, delay: 3, xRange: [0, 30, 0], yRange: [0, -25, 0], rotRange: [0, 360] },
          { id: 15, src: '/bg-cubes-2.png', size: 100, top: '78%', left: '10%', duration: 19, delay: 2, xRange: [0, -20, 0], yRange: [0, 15, 0], rotRange: [0, -360] },
          { id: 16, src: '/bg-cubes-2.png', size: 110, top: '65%', right: '6%', duration: 18, delay: 0.9, xRange: [0, 20, 0], yRange: [0, -20, 0], rotRange: [0, 360] },
          
          // Accents (Floating purple discs to tie the color space)
          { id: 17, src: '/bg-discs-1.png', size: 120, top: '5%', left: '40%', duration: 25, delay: 1.5, xRange: [0, 20, 0], yRange: [0, 10, 0], rotRange: [0, 360] },
          { id: 18, src: '/bg-discs-2.png', size: 110, top: '50%', left: '18%', duration: 22, delay: 0.2, xRange: [0, -10, 0], yRange: [0, -15, 0], rotRange: [0, -360] }
        ];

        return crystals.map((c) => (
          <motion.div
            key={c.id}
            animate={{
              x: c.xRange,
              y: c.yRange,
              rotate: c.rotRange
            }}
            transition={{
              duration: c.duration,
              repeat: Infinity,
              delay: c.delay,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              width: c.size,
              height: c.size,
              top: c.top,
              left: c.left,
              right: c.right,
              zIndex: 0,
              pointerEvents: 'none'
            }}
            className="opacity-60 blur-[0.5px] hidden md:block"
          >
            {c.src.includes('discs') ? (
              <div className="w-full h-full rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-40 pointer-events-none" />
                <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />
              </div>
            ) : c.src.includes('cubes-2') ? (
              <div className="w-full h-full rounded-2xl border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
                <div className="absolute inset-3 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
              </div>
            )}
          </motion.div>
        ));
      })()}

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
            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            IEEE <span className="text-gradient">NMIET</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-display font-medium text-gray-300 mb-6"
          >
            Innovate. Connect. Inspire.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            We are a student-driven technical community focused on emerging technologies, leadership, and professional growth. We empower students to build real projects, publish research, and connect with global engineering professionals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-lg bg-ieee-blue hover:bg-ieee-lightBlue text-white font-semibold transition-all duration-300 shadow-lg shadow-ieee-blue/20 flex-1 sm:flex-none text-center"
            >
              Explore IEEE NMIET
            </button>
            <button
              onClick={() => onNavigate('join-us')}
              className="px-8 py-4 rounded-lg bg-transparent border border-gray-700 hover:border-ieee-accent text-white font-semibold transition-all duration-300 flex-1 sm:flex-none text-center hover:bg-white/5"
            >
              Join IEEE
            </button>
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
