import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Heart, Radio } from 'lucide-react';
import { contactDetails } from '../data/ieeeData';
import TiltCard from './TiltCard';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Background glow accents */}
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -bottom-20 -left-20" />
      <div className="glow-orb glow-magenta w-[400px] h-[400px] top-10 -right-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Info & Design Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel - Contact Info Details */}
          <div className="lg:col-span-6 text-left space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Communications
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                Have questions about student registration, project collaborations, workshops, or research papers? 
                Reach out to our Branch Counselor or student leaders.
              </p>
            </div>

            {/* Structured info list */}
            <div className="space-y-4">
              
              {/* Advisor name */}
              <div className="p-4 rounded-xl glass-cyber flex items-start gap-4 hover:border-ieee-accent/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ieee-blue/20 border border-ieee-accent/30 flex items-center justify-center text-ieee-accent mt-0.5 flex-shrink-0 shadow-inner">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">IEEE Branch Lead</span>
                  <p className="text-white font-medium text-sm md:text-base mt-0.5">{contactDetails.ieeeLead}</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl glass-cyber flex items-start gap-4 hover:border-ieee-accent/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ieee-blue/20 border border-ieee-accent/30 flex items-center justify-center text-ieee-accent mt-0.5 flex-shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</span>
                  <a href={`mailto:${contactDetails.collegeEmail}`} className="text-white hover:text-ieee-accent font-medium text-sm md:text-base mt-0.5 block transition-colors">
                    {contactDetails.collegeEmail}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl glass-cyber flex items-start gap-4 hover:border-ieee-accent/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ieee-blue/20 border border-ieee-accent/30 flex items-center justify-center text-ieee-accent mt-0.5 flex-shrink-0 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Phone Number</span>
                  <a href={`tel:${contactDetails.phone}`} className="text-white hover:text-ieee-accent font-medium text-sm md:text-base mt-0.5 block transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-xl glass-cyber flex items-start gap-4 hover:border-ieee-accent/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ieee-blue/20 border border-ieee-accent/30 flex items-center justify-center text-ieee-accent mt-0.5 flex-shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">College Campus</span>
                  <p className="text-gray-300 text-xs md:text-sm mt-0.5 leading-relaxed max-w-sm">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right panel - Sleek Cyber Terminal Display with 3D Tilt */}
          <div className="lg:col-span-6 w-full">
            <TiltCard glowColor="rgba(0, 216, 255, 0.3)" maxTilt={8} scale={1.02}>
              <div className="glass-cyber p-8 md:p-10 rounded-2xl aspect-video md:aspect-[4/3] flex flex-col justify-between text-left relative overflow-hidden shadow-2xl">
                
                {/* Abstract technical grid drawing overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-ieee-accent/10 blur-3xl pointer-events-none" />

                {/* Box Top */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-ieee-accent animate-ping" />
                    <span className="text-[10px] font-bold text-ieee-accent uppercase tracking-widest bg-ieee-accent/10 px-2.5 py-1 rounded-md border border-ieee-accent/20">
                      IEEE NMIET Node Active
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Connect Digitally</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                    We are actively monitoring our official channels. Send us a message or follow our student media portals.
                  </p>
                </div>

                {/* Box Bottom - Social Links Grid */}
                <div className="grid grid-cols-3 gap-4 relative z-10 mt-8 pt-6 border-t border-white/10">
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-ieee-accent/40 hover:bg-white/[0.06] transition-all text-center group shadow-md"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-ieee-accent transition-colors" />
                    <span className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-wider group-hover:text-white">LinkedIn</span>
                  </a>
                  <a
                    href={contactDetails.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#EC4899]/40 hover:bg-white/[0.06] transition-all text-center group shadow-md"
                  >
                    <Instagram className="w-5 h-5 text-gray-300 group-hover:text-[#EC4899] transition-colors" />
                    <span className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-wider group-hover:text-white">Instagram</span>
                  </a>
                  <a
                    href="https://chat.whatsapp.com/GeQXYxDRENH7U1uCE10gZt?s=cl&p=a&ilr=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-green-500/40 hover:bg-white/[0.06] transition-all text-center group shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors" />
                    <span className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-wider group-hover:text-white">WhatsApp</span>
                  </a>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
