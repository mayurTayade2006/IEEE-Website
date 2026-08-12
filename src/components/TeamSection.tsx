import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { mainTeamData } from '../data/ieeeData';

const TeamSection: React.FC = () => {
  // Separate team members for hierarchical layout
  const counselor = mainTeamData.find(member => member.role.includes('Counselor'));
  const executiveComm = mainTeamData.filter(member => 
    member.role.includes('Chairperson') || member.role.includes('Secretary')
  );
  const deptHeads = mainTeamData.filter(member => 
    member.role.includes('Head')
  );

  const TeamCard = ({ member }: { member: typeof mainTeamData[0] }) => (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-panel p-6 rounded-2xl border-white/10 text-center flex flex-col items-center justify-between group h-full shadow-lg"
    >
      <div className="flex flex-col items-center">
        {/* Frame around photo */}
        <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 p-1 mb-5 bg-[#0A0E17]">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Details */}
        <h3 className="font-display font-bold text-white text-base md:text-lg tracking-wide">{member.name}</h3>
        <span className="text-xs font-semibold text-ieee-accent tracking-wider uppercase mt-1 block">
          {member.role}
        </span>
        <span className="text-[10px] text-gray-500 uppercase mt-2 block tracking-widest leading-normal max-w-[90%] mx-auto">
          {member.department}
        </span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5 w-full justify-center">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-ieee-accent hover:bg-white/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-ieee-accent hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-dark-bg/50 border-t border-white/5">
      {/* Dynamic Floating Glass Discs Cluster */}
      <div className="absolute right-10 top-20 w-[400px] h-[400px] pointer-events-none hidden lg:block select-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-28 h-28 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-accent/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,181,226,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -360] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 right-28 w-20 h-20 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-ieee-blue/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(0,98,155,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-1.5 rounded-full border border-white/10 pointer-events-none" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-36 right-36 w-16 h-16 rounded-full border border-white/20 bg-gradient-to-tr from-white/[0.06] to-[#FF7F00]/[0.25] backdrop-blur-[3px] shadow-[0_8px_32px_0_rgba(255,127,0,0.15)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-20 pointer-events-none" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ieee-accent mb-3">
            Branch Officials
          </h2>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Our Leadership
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            The team responsible for coordinating technical chapters, organizing branch hackathons, 
            and managing student engagement across Nutan Maharashtra Institute of Engineering and Technology.
          </p>
        </div>

        {/* Hierarchical Layout */}
        <div className="space-y-16">
          
          {/* Level 1: Branch Counselor */}
          {counselor && (
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 text-center">
                  Branch Advisor
                </h4>
                <TeamCard member={counselor} />
              </div>
            </div>
          )}

          {/* Level 2: Executive Committee */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 text-center">
              Executive Committee
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {executiveComm.map((member) => (
                <div key={member.name} className="w-full">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Level 3: Department Heads */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 text-center">
              Department Heads
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {deptHeads.map((member) => (
                <div key={member.name} className="w-full">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamSection;
