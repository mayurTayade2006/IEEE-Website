import React from 'react';
import { Linkedin, Instagram, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { contactDetails } from '../data/ieeeData';
import TiltCard from './TiltCard';

const JoinUs: React.FC = () => {
  return (
    <section id="join-us" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Glow Orbs */}
      <div className="glow-orb glow-cyan w-[450px] h-[450px] -bottom-20 -left-20" />
      <div className="glow-orb glow-magenta w-[450px] h-[450px] -top-20 -right-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel - Copywriting */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Membership Interest
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              Be Part of the <span className="text-gradient">IEEE Community</span>
            </h1>
            <h2 className="text-lg md:text-xl font-display text-gray-300 font-medium mb-6">
              Learn. Build. Connect. Lead.
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Join IEEE NMIET to expand your horizons. Connect directly through our official platforms to discover open opportunities in technical chapters, workshop operations, coding hackathons, and global IEEE membership benefits.
            </p>
            
            <ul className="space-y-4">
              {[
                'Access to IEEE Xplore digital publications and journals.',
                'Participation in global events like IEEEXtreme coding competitions.',
                'Leadership roles in local engineering student chapters.',
                'Networking with global technology developers and research advisors.',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-ieee-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel - Form Box with 3D Tilt */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="rgba(0, 216, 255, 0.25)" maxTilt={8} scale={1.02}>
              <div className="glass-cyber p-8 md:p-10 rounded-2xl relative shadow-2xl overflow-hidden max-w-xl mx-auto lg:mr-0">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Follow and Connect</p>
                    <h3 className="text-xl font-display font-bold text-white mt-0.5">IEEE NMIET Node</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-ieee-accent hover:border-ieee-accent/40 transition-colors shadow-sm">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#EC4899] hover:border-[#EC4899]/40 transition-colors shadow-sm">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="space-y-5 text-left">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Connect With Us Directly
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Join our student community groups and follow IEEE NMIET announcements in real time.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href={contactDetails.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:border-ieee-accent/40 hover:bg-white/[0.06] transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-ieee-blue/20 flex items-center justify-center text-ieee-accent">
                          <Linkedin className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">LinkedIn Official Page</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-ieee-accent group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                      href={contactDetails.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:border-[#EC4899]/40 hover:bg-white/[0.06] transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EC4899]/20 flex items-center justify-center text-[#EC4899]">
                          <Instagram className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">Instagram Channel</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#EC4899] group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                      href="https://chat.whatsapp.com/GeQXYxDRENH7U1uCE10gZt?s=cl&p=a&ilr=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:border-green-500/40 hover:bg-white/[0.06] transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">Official WhatsApp Group</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>

                  <div className="text-xs text-gray-400 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span>Direct Inquiries:</span>
                    <span className="text-ieee-accent font-mono">{contactDetails.collegeEmail}</span>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinUs;
