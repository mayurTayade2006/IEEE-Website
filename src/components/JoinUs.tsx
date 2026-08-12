import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { contactDetails } from '../data/ieeeData';

const JoinUs: React.FC = () => {

  return (
    <section id="join-us" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5">
      {/* Dynamic Floating Glass Panels Cluster */}
      <div className="absolute -right-20 top-10 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [-10, 20, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-32 h-32 rounded-2xl border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [15, 45, 15] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 right-44 w-24 h-24 rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/8 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-44 right-32 w-20 h-20 rounded-2xl border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2 rounded-xl border border-[#FF7F00]/20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Subtle blue ambient light */}
      <div className="glow-orb glow-blue w-[400px] h-[400px] -bottom-20 -left-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel - Copywriting */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3 block">
              Membership Interest
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              Be Part of the IEEE Community
            </h1>
            <h2 className="text-lg md:text-xl font-display text-gray-300 font-medium mb-6">
              Learn. Build. Connect. Lead.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Join IEEE NMIET to expand your horizons. By submitting this interest form, our leadership team 
              will contact you about open opportunities in our technical chapters, workshop operations, coding teams, 
              and global IEEE membership discounts.
            </p>
            
            <ul className="space-y-4">
              {[
                'Access to IEEE Xplore digital publications.',
                'Participation in global events like IEEEXtreme coding competitions.',
                'Leadership roles in local college chapters.',
                'Networking contacts with technology developers and research advisors.',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ieee-accent mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel - Form Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-2xl border-white/10 relative shadow-2xl overflow-hidden max-w-xl mx-auto lg:mr-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Follow and Connect</p>
                  <h3 className="text-xl font-display font-bold text-white mt-1">IEEE NMIET</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-ieee-accent transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-ieee-accent transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-5 text-left">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  I Want to Join IEEE
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with IEEE NMIET through our official social channels and be part of the student community.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:border-ieee-accent/30 hover:bg-white/[0.06] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-ieee-accent" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>

                  <a
                    href={contactDetails.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:border-ieee-accent/30 hover:bg-white/[0.06] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-ieee-accent" />
                      <span className="text-sm font-medium">Instagram</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>

                  <a
                    href="https://chat.whatsapp.com/GeQXYxDRENH7U1uCE10gZt?s=cl&p=a&ilr=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:border-ieee-accent/30 hover:bg-white/[0.06] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-ieee-accent" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                <div className="text-[10px] text-gray-500 pt-2">
                  Email: {contactDetails.collegeEmail}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinUs;
