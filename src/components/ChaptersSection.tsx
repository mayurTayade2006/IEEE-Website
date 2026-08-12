import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Compass, Target, Shield, Users } from 'lucide-react';
import { chaptersData } from '../data/ieeeData';
import type { Chapter } from '../data/ieeeData';

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
    <section id="chapters" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      {/* Dynamic Floating Glass Panels Cluster */}
      <div className="absolute -left-20 bottom-10 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [15, -15, 15] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-32 h-32 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [-5, 35, -5] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-36 left-36 w-24 h-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-28 w-20 h-20 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Technical Groups
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            IEEE NMIET Chapters
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Our student branch is segmented into core technology chapters. Explore each domain to connect with students, 
            projects, and workshops matching your engineering interests.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chaptersData.map((chapter) => (
            <motion.div
              key={chapter.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group glass-panel rounded-2xl p-8 border-white/10 text-left flex flex-col justify-between hover:border-ieee-accent/20 transition-all duration-300"
            >
              <div>
                {/* Chapter Code Badge */}
                <span className="inline-block px-3 py-1 rounded bg-ieee-blue/15 text-ieee-accent text-xs font-semibold tracking-wider uppercase mb-6">
                  {chapter.code} Chapter
                </span>
                
                {/* Chapter Name */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-ieee-accent transition-colors">
                  {chapter.name}
                </h3>
                
                {/* Short Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
                  {chapter.description}
                </p>
              </div>

              {/* Action Link */}
              <button
                onClick={() => handleOpenChapter(chapter)}
                className="flex items-center gap-1.5 text-xs font-semibold text-ieee-accent hover:text-white transition-colors"
              >
                Explore Chapter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Chapter Detail Overlay Panel */}
        <AnimatePresence>
          {activeChapter && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-bg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="min-h-screen pb-24"
              >
                {/* Floating Top Nav Bar */}
                <div className="sticky top-0 z-40 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
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
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
                      IEEE {activeChapter.code} Chapter
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

                  {/* Chapter Gallery */}
                  <div className="mb-16">
                    <div className="flex items-center gap-3 text-ieee-accent mb-6">
                      <Shield className="w-5 h-5" />
                      <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                        Chapter Gallery
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
                      {activeChapter.images.map((image, index) => (
                        <div key={`${activeChapter.id}-image-${index}`} className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                          <img
                            src={image}
                            alt={`${activeChapter.name} gallery ${index + 1}`}
                            className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectives & Leadership Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Objectives Checklist */}
                    <div className="lg:col-span-6 space-y-6">
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
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3 text-ieee-accent mb-4">
                        <Users className="w-5 h-5" />
                        <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                          Chapter Leadership
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {activeChapter.leaders.map((leader, index) => (
                          <div 
                            key={index}
                            className="glass-panel p-5 rounded-xl border-white/5 flex flex-col items-center text-center group"
                          >
                            {/* Profile Image */}
                            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 mb-4">
                              <img
                                src={leader.photo}
                                alt={leader.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            
                            {/* Name & Role */}
                            <h4 className="font-display font-bold text-white text-sm tracking-wide">{leader.name}</h4>
                            <span className="text-[10px] text-ieee-accent font-semibold tracking-widest uppercase mt-1 block">
                              {leader.role}
                            </span>
                            
                            {/* Short Description */}
                            <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
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
