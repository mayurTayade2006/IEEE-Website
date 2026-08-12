import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Innovation', desc: 'Promoting forward-thinking and original technological designs.' },
    { title: 'Collaboration', desc: 'Nurturing team synergy, cross-departmental tasks, and peer growth.' },
    { title: 'Leadership', desc: 'Guiding student engineers to manage complex teams, tasks, and budgets.' },
    { title: 'Learning', desc: 'Sustaining a continuous stream of workshops, bootcamps, and lectures.' },
    { title: 'Excellence', desc: 'Striving for highest technical rigor in codes, projects, and research papers.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-ieee-blue/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-24 right-12 w-36 h-36 rounded-full bg-gradient-to-br from-ieee-accent/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [-15, 15, -15], y: [15, -20, 15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-16 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-white/10 to-ieee-blue/10 blur-3xl"
        />
      </div>
      {/* Dynamic Floating Glass Panels Cluster */}
      <div className="absolute -left-20 bottom-10 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [12, 45, 12] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-32 h-32 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [-10, -35, -10] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-44 w-24 h-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-44 left-32 w-20 h-20 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Who We Are
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            About IEEE NMIET
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            NMIET\'s IEEE Student Branch is a hub for innovation, collaboration, and professional engineering growth. 
            We build platforms for engineering students to master emerging technologies, engage with industry projects, 
            and expand their professional networks internationally.
          </p>
        </div>

        {/* Vision & Mission Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-2xl text-left border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-ieee-accent/5 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-xl bg-ieee-accent/10 flex items-center justify-center text-ieee-accent mb-6 border border-ieee-accent/20">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              To nurture a vibrant, self-sustaining student community of technologically sound engineers, 
              innovators, and research heads who will design state-of-the-art systems to address local and global issues.
            </p>
          </motion.div>

          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel p-8 md:p-10 rounded-2xl text-left border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-ieee-blue/5 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-xl bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mb-6 border border-ieee-blue/20">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              To systematically coordinate high-caliber workshops, hacking competitions, guest research seminars, and 
              leadership opportunities that bridge theoretical classroom curriculum with industry engineering standards.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel */}
          <div className="lg:col-span-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 mb-6 border border-white/10">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Our Core Values</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              These underlying pillars form the foundation of our student operations, event coordination, and project execution.
            </p>
          </div>

          {/* Right values grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-left flex items-start gap-4 hover:border-ieee-blue/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-ieee-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-white mb-1.5">{v.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
