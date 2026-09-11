import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Users, Shield, Share2, Code2, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { mainTeamData, functionalTeamsData } from '../data/ieeeData';
import type { FunctionalTeam } from '../data/ieeeData';
import TiltCard from './TiltCard';

interface TeamSectionProps {
  activeTeam: FunctionalTeam | null;
  setActiveTeam: (team: FunctionalTeam | null) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ activeTeam, setActiveTeam }) => {
  // Separate executive team members for hierarchical layout
  const counselor = mainTeamData.find(member => member.role.includes('Counselor'));
  const branchChair = mainTeamData.find(member => 
    member.role === 'Student Branch Chair' || (member.role.includes('Chair') && !member.role.includes('Vice'))
  );
  const executiveOfficers = mainTeamData.filter(member => 
    !member.role.includes('Counselor') && member.name !== branchChair?.name
  );

  const handleOpenTeam = (team: FunctionalTeam) => {
    setActiveTeam(team);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseTeam = () => {
    setActiveTeam(null);
    document.body.style.overflow = '';
  };

  const getTeamIcon = (teamId: string) => {
    switch (teamId) {
      case 'team-social':
        return <Share2 className="w-5 h-5 text-ieee-accent" />;
      case 'team-tech':
        return <Code2 className="w-5 h-5 text-ieee-accent" />;
      case 'team-research':
        return <BookOpen className="w-5 h-5 text-ieee-accent" />;
      case 'team-events':
        return <Calendar className="w-5 h-5 text-ieee-accent" />;
      default:
        return <Users className="w-5 h-5 text-ieee-accent" />;
    }
  };

  const TeamCard = ({ member, highlight = false }: { member: typeof mainTeamData[0]; highlight?: boolean }) => (
    <TiltCard
      glowColor={highlight ? 'rgba(0, 216, 255, 0.35)' : 'rgba(236, 72, 153, 0.2)'}
      maxTilt={10}
      scale={1.03}
      className="h-full"
    >
      <div
        className={`glass-cyber p-6 rounded-2xl text-center flex flex-col items-center justify-center group h-full shadow-xl transition-all relative overflow-hidden ${
          highlight 
            ? 'border-ieee-accent/50 bg-gradient-to-b from-ieee-blue/20 to-transparent shadow-[0_0_30px_rgba(0,181,226,0.25)] ring-1 ring-ieee-accent/40' 
            : 'border-white/10 hover:border-white/30'
        }`}
      >
        {highlight && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-36 bg-ieee-accent/20 rounded-full blur-2xl pointer-events-none" />
        )}
        <div className="flex flex-col items-center w-full relative z-10">
          {/* Frame around photo */}
          <div className={`w-28 h-28 rounded-full overflow-hidden p-1 mb-5 bg-[#0A0E17] shadow-lg transition-all ${
            highlight 
              ? 'border-2 border-ieee-accent shadow-[0_0_20px_rgba(0,181,226,0.5)] ring-2 ring-ieee-accent/30' 
              : 'border border-white/20 group-hover:border-ieee-accent/50 group-hover:shadow-[0_0_15px_rgba(0,216,255,0.3)]'
          }`}>
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Details */}
          <h3 className="font-display font-bold text-white text-base md:text-lg tracking-wide">{member.name}</h3>
          <span className={`text-xs font-bold tracking-wider uppercase mt-1.5 block ${highlight ? 'text-ieee-accent drop-shadow-[0_0_10px_rgba(0,181,226,0.6)]' : 'text-ieee-accent'}`}>
            {member.role}
          </span>
          <span className="text-[11px] text-gray-400 uppercase mt-1.5 block tracking-widest leading-normal max-w-[90%] mx-auto">
            {member.department}
          </span>
        </div>
      </div>
    </TiltCard>
  );

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Background glow orbs */}
      <div className="glow-orb glow-magenta w-[550px] h-[550px] top-1/4 -right-20" />
      <div className="glow-orb glow-cyan w-[500px] h-[500px] bottom-10 -left-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Committees & Officials
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Our Teams & Leadership
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Meet the functional teams powering our social outreach, technical infrastructure, academic research, 
            and event operations across Nutan Maharashtra Institute of Engineering and Technology.
          </p>
        </div>

        {/* Section 1: Four Functional Teams Grid */}
        <div className="mb-24 text-left">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-ieee-accent" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Functional Teams
            </h3>
            <span className="text-xs text-gray-500 font-medium">(Click to explore team & members)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionalTeamsData.map((team) => (
              <TiltCard
                key={team.id}
                glowColor="rgba(0, 216, 255, 0.25)"
                maxTilt={10}
                scale={1.03}
                onClick={() => handleOpenTeam(team)}
                className="cursor-pointer h-full"
              >
                <div className="glass-cyber rounded-2xl p-6 text-left flex flex-col justify-between hover:border-ieee-accent/50 transition-all duration-300 shadow-xl relative overflow-hidden h-full group">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-ieee-accent/10 rounded-full blur-xl group-hover:bg-ieee-accent/20 transition-all" />
                  
                  {/* Top Banner Icon & Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-ieee-blue/20 border border-ieee-accent/30 flex items-center justify-center group-hover:bg-ieee-accent/20 transition-colors shadow-inner">
                        {getTeamIcon(team.id)}
                      </div>
                      <span className="text-[9px] font-bold text-ieee-accent bg-ieee-accent/10 px-2.5 py-1 rounded-md tracking-wider uppercase border border-ieee-accent/20">
                        {team.members.length + 1} Members
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-ieee-accent transition-colors">
                      {team.name}
                    </h4>

                    <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block mb-3">
                      {team.tagline}
                    </span>

                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-6">
                      {team.description}
                    </p>
                  </div>

                  {/* Footer preview */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-md">
                        <img src={team.lead.photo} alt={team.lead.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-bold text-white block leading-tight">{team.lead.name}</span>
                        <span className="text-[8px] text-gray-400 uppercase">{team.lead.role}</span>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-ieee-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Section 2: Executive Leadership */}
        <div className="space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-ieee-blue" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                  Branch Executive Council (ExeCom)
                </h3>
                <span className="text-[11px] text-ieee-accent font-medium tracking-wider uppercase block mt-0.5">
                  Innovate • Collaborate • Impact
                </span>
              </div>
            </div>
            <span className="text-xs text-gray-500">
              Session 2026
            </span>
          </div>

          {/* Level 1: Branch Leadership (Counselor on Left, Chair on Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
            {counselor && (
              <div className="flex flex-col h-full">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-center">
                  Branch Advisor & Counselor
                </h4>
                <div className="flex-1">
                  <TeamCard member={counselor} />
                </div>
              </div>
            )}

            {branchChair && (
              <div className="flex flex-col h-full">
                <h4 className="text-[10px] font-bold text-ieee-accent uppercase tracking-[0.2em] mb-4 text-center">
                  Student Branch Chair
                </h4>
                <div className="flex-1">
                  <TeamCard member={branchChair} highlight={true} />
                </div>
              </div>
            )}
          </div>

          {/* Level 2: Core Executive Officers */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 text-center">
              Executive Officers
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {executiveOfficers.map((member) => (
                <div key={member.name} className="w-full">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-screen Team Detail Overlay Modal */}
        <AnimatePresence>
          {activeTeam && (
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
                      {activeTeam.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-400 hidden sm:inline">IEEE Student Branch Team</span>
                  </div>
                  
                  <button
                    onClick={handleCloseTeam}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all text-xs font-semibold"
                  >
                    <X className="w-4 h-4" />
                    Back to Teams
                  </button>
                </div>

                {/* Subpage Main Content Wrapper */}
                <div className="max-w-5xl mx-auto px-6 pt-12 text-left">
                  
                  {/* Hero Header */}
                  <div className="space-y-4 mb-14">
                    <span className="inline-block px-3 py-1 rounded bg-ieee-blue/20 text-ieee-accent text-xs font-semibold tracking-widest uppercase">
                      {activeTeam.tagline}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
                      {activeTeam.name}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                      {activeTeam.description}
                    </p>
                  </div>

                  {/* Responsibilities Full Width Grid */}
                  <div className="mb-16">
                    <div className="flex items-center gap-3 text-ieee-accent mb-6">
                      <Shield className="w-5 h-5" />
                      <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                        Key Responsibilities
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeTeam.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                          <CheckCircle2 className="w-4 h-4 text-ieee-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Members Section */}
                  <div className="space-y-10">
                    
                    {/* Section Header */}
                    <div className="flex items-center gap-3 text-ieee-accent">
                      <Users className="w-5 h-5" />
                      <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                        Team Members & Leadership
                      </h3>
                    </div>

                    {/* Team Lead Card */}
                    <div className="flex justify-center mb-8">
                      <div className="w-full max-w-md glass-panel p-6 rounded-2xl border-ieee-accent/30 text-center flex flex-col items-center bg-gradient-to-b from-ieee-blue/10 to-transparent shadow-xl">
                        <span className="text-[9px] font-bold text-ieee-accent uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-ieee-accent/10 mb-4">
                          Team Leadership
                        </span>
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-ieee-accent/40 mb-4 bg-[#0A0E17] shadow-lg">
                          <img
                            src={activeTeam.lead.photo}
                            alt={activeTeam.lead.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-display font-bold text-white text-base md:text-lg tracking-wide">
                          {activeTeam.lead.name}
                        </h4>
                        <span className="text-xs text-ieee-accent font-semibold tracking-wider uppercase mt-1">
                          {activeTeam.lead.role}
                        </span>
                        <p className="text-xs text-gray-400 mt-3 leading-relaxed max-w-xs">
                          {activeTeam.lead.description}
                        </p>
                      </div>
                    </div>

                    {/* Members Grid */}
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 text-center">
                        Team Members
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {activeTeam.members.map((member, index) => (
                          <div 
                            key={index}
                            className="glass-panel p-4 rounded-xl border-white/5 flex flex-col items-center text-center group hover:border-ieee-accent/20 transition-all"
                          >
                            <div className="w-18 h-18 rounded-full overflow-hidden border border-white/10 mb-3 bg-[#0A0E17]">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <h5 className="font-display font-bold text-white text-xs md:text-sm tracking-wide leading-snug">
                              {member.name}
                            </h5>
                            <span className="text-[10px] text-ieee-accent font-semibold tracking-wider uppercase mt-1 block">
                              {member.role}
                            </span>
                            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                              {member.description}
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

export default TeamSection;
