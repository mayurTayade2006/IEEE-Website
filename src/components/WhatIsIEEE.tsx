import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Compass, HelpCircle } from 'lucide-react';

const WhatIsIEEE: React.FC = () => {
  const benefits = [
    {
      title: 'Global Networking & Community',
      description: 'Connect with a network of over 409,000 technology professionals, researchers, and fellow students in over 160 countries.',
      icon: Users,
    },
    {
      title: 'IEEE Xplore Digital Library',
      description: 'Gain access to millions of research papers, journals, standards, and conference proceedings on emerging engineering fields.',
      icon: BookOpen,
    },
    {
      title: 'Global Standardizations',
      description: 'IEEE is the developer of global industry standards that drive technology, including the famous IEEE 802.11 standards for Wi-Fi.',
      icon: Globe,
    },
    {
      title: 'Career & Professional Development',
      description: 'Build your profile through leadership positions in the student branch, attend seminars, and present at regional/national congresses.',
      icon: Compass,
    },
  ];

  return (
    <section id="what-is-ieee" className="py-24 relative overflow-hidden bg-dark-bg/50 border-t border-white/5">
      {/* Dynamic Floating Glass Discs Cluster */}
      <div className="absolute right-10 top-20 w-[350px] h-[350px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 360] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-28 h-28 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 right-28 w-20 h-20 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-1.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-36 right-36 w-16 h-16 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Global Organization
            </h2>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              What is IEEE?
            </h1>
          </div>
          <div className="lg:col-span-7 text-left lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              IEEE is the <strong>Institute of Electrical and Electronics Engineers</strong>. 
              As the world\'s largest technical professional organization, it is dedicated to advancing technology 
              for the benefit of humanity. IEEE and its members inspire a global community through its highly cited 
              publications, conferences, technology standards, and professional and educational activities.
            </p>
          </div>
        </div>

        {/* Benefits Timeline / Cards */}
        <div className="relative mt-12">
          {/* Vertical Center Line for timeline (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

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
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border border-ieee-accent/50 hidden md:flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-ieee-accent" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Card Content Column */}
                  <div className="w-full md:w-1/2 text-left">
                    <div className="glass-panel p-8 rounded-2xl border-white/10 relative hover:border-ieee-accent/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
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
