import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Compass, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

const WhatIsIEEE: React.FC = () => {
  const benefits = [
    {
      title: 'Global Networking & Community',
      description: 'Connect with a network of over 409,000 technology professionals, researchers, and fellow students in over 160 countries.',
      icon: Users,
      glow: 'rgba(0, 216, 255, 0.25)',
      accent: 'text-ieee-accent',
    },
    {
      title: 'IEEE Xplore Digital Library',
      description: 'Gain access to millions of research papers, journals, standards, and conference proceedings on emerging engineering fields.',
      icon: BookOpen,
      glow: 'rgba(236, 72, 153, 0.25)',
      accent: 'text-[#EC4899]',
    },
    {
      title: 'Global Standardizations',
      description: 'IEEE is the developer of global industry standards that drive technology, including the famous IEEE 802.11 standards for Wi-Fi.',
      icon: Globe,
      glow: 'rgba(139, 92, 246, 0.25)',
      accent: 'text-[#8B5CF6]',
    },
    {
      title: 'Career & Professional Development',
      description: 'Build your profile through leadership positions in the student branch, attend seminars, and present at regional/national congresses.',
      icon: Compass,
      glow: 'rgba(0, 216, 255, 0.25)',
      accent: 'text-ieee-accent',
    },
  ];

  return (
    <section id="what-is-ieee" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Background glow orbs */}
      <div className="glow-orb glow-blue w-[500px] h-[500px] top-20 -right-20" />
      <div className="glow-orb glow-magenta w-[400px] h-[400px] bottom-10 -left-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              Global Organization
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              What is <span className="text-gradient">IEEE?</span>
            </h1>
          </div>
          <div className="lg:col-span-7 text-left lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              IEEE is the <strong>Institute of Electrical and Electronics Engineers</strong>. 
              As the world's largest technical professional organization, it is dedicated to advancing technology 
              for the benefit of humanity. IEEE and its members inspire a global community through its highly cited 
              publications, conferences, technology standards, and professional and educational activities.
            </p>
          </div>
        </div>

        {/* Benefits Timeline / Cards */}
        <div className="relative mt-12">
          {/* Vertical Center Line for timeline (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ieee-accent via-[#EC4899] to-ieee-blue opacity-30 hidden md:block" />

          <div className="flex flex-col gap-12 relative">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col md:flex-row items-center gap-8 relative w-full ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot with pulsing neon ring (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0A0E17] border-2 border-ieee-accent hidden md:flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,216,255,0.6)]">
                    <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Card Content Column with 3D Tilt */}
                  <div className="w-full md:w-1/2 text-left">
                    <TiltCard glowColor={benefit.glow} maxTilt={10} scale={1.02}>
                      <div className="glass-cyber p-8 rounded-2xl relative shadow-xl hover:border-ieee-accent/40 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                          <Icon className={`w-6 h-6 ${benefit.accent}`} />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-2.5">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsIEEE;
