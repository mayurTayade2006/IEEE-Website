import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';
import { contactDetails } from '../data/ieeeData';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg/50 border-t border-white/5">
      {/* Dynamic Floating Glass Panels Cluster */}
      <div className="absolute -left-20 bottom-0 w-[450px] h-[450px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [10, 40, 10] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-32 h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-ieee-blue/[0.08] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.05)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/5 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [-15, 15, -15] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-36 left-36 w-24 h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-ieee-accent/[0.08] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.05)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/5 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [5, -25, 5] }}
          transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-24 w-20 h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.01] to-[#FF7F00]/[0.08] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.05)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-xl border border-[#FF7F00]/10 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Info & Design Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel - Contact Info Details */}
          <div className="lg:col-span-6 text-left space-y-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
                Communications
              </h2>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Get in Touch
              </h1>
              <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
                Have questions about student registration, project collaborations, workshops, or research papers? 
                Reach out to our Branch Councilor or student leaders.
              </p>
            </div>

            {/* Structured info list */}
            <div className="space-y-6">
              
              {/* Advisor name */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mt-1 flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">IEEE Branch Lead</span>
                  <p className="text-white font-medium text-sm md:text-base mt-0.5">{contactDetails.ieeeLead}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email Address</span>
                  <a href={`mailto:${contactDetails.collegeEmail}`} className="text-white hover:text-ieee-accent font-medium text-sm md:text-base mt-0.5 block transition-colors">
                    {contactDetails.collegeEmail}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Phone Number</span>
                  <a href={`tel:${contactDetails.phone}`} className="text-white hover:text-ieee-accent font-medium text-sm md:text-base mt-0.5 block transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ieee-blue/10 flex items-center justify-center text-ieee-accent mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">College Address</span>
                  <p className="text-gray-300 text-xs md:text-sm mt-0.5 leading-relaxed max-w-sm">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right panel - Sleek Vector Map / Brand Identity Display */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel p-8 rounded-2xl border-white/10 aspect-video md:aspect-[4/3] flex flex-col justify-between text-left relative overflow-hidden shadow-2xl">
              
              {/* Abstract technical grid drawing overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-ieee-blue/5 blur-3xl pointer-events-none" />

              {/* Box Top */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-ieee-accent animate-ping" />
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                    IEEE NMIET Node Active
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Connect Digitally</h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                  We are actively monitoring our official channels. Send us a message or follow our social accounts.
                </p>
              </div>

              {/* Box Bottom - Social Links Grid */}
              <div className="grid grid-cols-3 gap-4 relative z-10 mt-8 pt-6 border-t border-white/5">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ieee-accent/25 hover:bg-white/[0.05] transition-all text-center group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-ieee-accent transition-colors" />
                  <span className="text-[10px] text-gray-500 font-semibold mt-2 uppercase tracking-wider">LinkedIn</span>
                </a>
                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ieee-accent/25 hover:bg-white/[0.05] transition-all text-center group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-ieee-accent transition-colors" />
                  <span className="text-[10px] text-gray-500 font-semibold mt-2 uppercase tracking-wider">Instagram</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/GeQXYxDRENH7U1uCE10gZt?s=cl&p=a&ilr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ieee-accent/25 hover:bg-white/[0.05] transition-all text-center group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-ieee-accent transition-colors" />
                  <span className="text-[10px] text-gray-500 font-semibold mt-2 uppercase tracking-wider">WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
