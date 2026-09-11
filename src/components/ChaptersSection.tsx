import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Compass, Target, Shield, Users } from 'lucide-react';
import { chaptersData } from '../data/ieeeData';
import type { Chapter } from '../data/ieeeData';
import TiltCard from './TiltCard';

interface ChaptersSectionProps {
  activeChapter: Chapter | null;
  setActiveChapter: (chapter: Chapter | null) => void;
}

const ChaptersSection: React.FC<ChaptersSectionProps> = ({ activeChapter, setActiveChapter }) => {
  const handleOpenChapter = (chapter: Chapter) => {
    setActiveChapter(chapter);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseChapter = () => {
    setActiveChapter(null);
    // Restore background scrolling
    document.body.style.overflow = '';
  };

  return (
    <section id="chapters" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Dynamic Floating Glassmorphism Panels Cluster */}
      <div className="absolute -left-20 bottom-10 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [15, -15, 15] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-32 h-32 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-[#FF7F00]/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(255,127,0,0.18)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-25 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/25 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [-5, 35, -5] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-36 left-36 w-24 h-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-ieee-blue/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(0,98,155,0.18)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-28 w-20 h-20 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-ieee-accent/[0.25] backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(0,181,226,0.18)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/10 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ieee-accent animate-ping" />
            Technical Groups
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            IEEE NMIET <span className="text-gradient">Chapters</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
            Our student branch is segmented into core technology chapters. Explore each domain to connect with students, 
            projects, and workshops matching your engineering interests.
          </p>
        </div>

        {/* Chapters Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chaptersData.map((chapter) => (
            <TiltCard
              key={chapter.id}
              glowColor="rgba(0, 216, 255, 0.22)"
              maxTilt={10}
              scale={1.02}
              className="h-full"
            >
              <div className="glass-cyber rounded-2xl p-8 text-left flex flex-col justify-between h-full hover:border-ieee-accent/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-ieee-accent/10 rounded-full blur-xl group-hover:bg-ieee-accent/20 transition-all" />
                <div>
                  {/* Chapter Code Badge & Tagline */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-block px-3 py-1 rounded-lg bg-ieee-blue/20 border border-ieee-accent/30 text-ieee-accent text-xs font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(0,181,226,0.25)]">
                      {chapter.code} Chapter
                    </span>
                    {chapter.tagline && (
                      <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                        {chapter.tagline}
                      </span>
                    )}
                  </div>
                  
                  {/* Chapter Name */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-ieee-accent transition-colors">
                    {chapter.name}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                    {chapter.description}
                  </p>
                </div>

                {/* Action Link */}
                <button
                  onClick={() => handleOpenChapter(chapter)}
                  className="flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-ieee-accent hover:text-white transition-colors cursor-pointer group/btn"
                >
                  <span>Explore Chapter</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-ieee-blue group-hover/btn:text-white transition-all shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Full-screen Chapter Detail Overlay Panel */}
        <AnimatePresence>
          {activeChapter && (
            <div className="fixed inset-0 z-[100] overflow-y-auto bg-dark-bg pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="min-h-screen pb-24"
              >
                {/* Floating Top Nav Bar */}
                <div className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded bg-ieee-blue text-white text-xs font-semibold tracking-wider">
                      {activeChapter.code}
                    </span>
                    <span className="text-sm font-semibold text-gray-400 hidden sm:inline">IEEE Student Chapter</span>
                  </div>
                  
                  <button
                    onClick={handleCloseChapter}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all text-xs font-semibold"
                  >
                    <X className="w-4 h-4" />
                    Back to Chapters
                  </button>
                </div>

                {/* Subpage Main Content Wrapper */}
                <div className="max-w-5xl mx-auto px-6 pt-12 text-left">
                  
                  {/* Hero Header */}
                  <div className="space-y-4 mb-16">
                    {activeChapter.tagline && (
                      <span className="inline-block px-3 py-1 rounded bg-ieee-blue/20 text-ieee-accent text-xs font-semibold tracking-widest uppercase">
                        {activeChapter.tagline}
                      </span>
                    )}
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
                      {activeChapter.name}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                      {activeChapter.description}
                    </p>
                  </div>

                  {/* Vision & Mission Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                      <div className="flex items-center gap-3 mb-4 text-ieee-accent">
                        <Compass className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">Vision</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{activeChapter.vision}</p>
                    </div>

                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                      <div className="flex items-center gap-3 mb-4 text-ieee-accent">
                        <Target className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">Mission</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{activeChapter.mission}</p>
                    </div>
                  </div>

                  {/* Chapter Poster */}
                  {activeChapter.images.length > 0 && (
                    <div className="mb-16">
                      <div className="flex items-center gap-3 text-ieee-accent mb-6">
                        <Shield className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                          Official Chapter Poster
                        </h3>
                      </div>
                      <div className="flex justify-center">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl max-w-sm sm:max-w-md w-full">
                          <img
                            src={activeChapter.images[0]}
                            alt={`${activeChapter.name} Official Poster`}
                            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Objectives & Leadership Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Objectives Checklist */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="flex items-center gap-3 text-ieee-accent mb-2">
                        <Shield className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                          Key Objectives
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {activeChapter.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-ieee-blue/15 text-ieee-accent text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                              {obj}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Chapter Leadership */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3 text-ieee-accent mb-4">
                        <Users className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                          Chapter Team
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeChapter.leaders.map((leader, index) => (
                          <div 
                            key={index}
                            className="glass-panel p-4 rounded-xl border-white/5 flex flex-col items-center text-center group hover:border-ieee-accent/20 transition-all"
                          >
                            {/* Profile Image */}
                            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 mb-3 bg-[#0A0E17]">
                              <img
                                src={leader.photo}
                                alt={leader.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            
                            {/* Name & Role */}
                            <h4 className="font-display font-bold text-white text-xs md:text-sm tracking-wide leading-snug">{leader.name}</h4>
                            <span className="text-[10px] text-ieee-accent font-semibold tracking-wider uppercase mt-1 block">
                              {leader.role}
                            </span>
                            
                            {/* Short Description */}
                            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                              {leader.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ChaptersSection;
