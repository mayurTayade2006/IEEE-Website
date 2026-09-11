import React from 'react';
import { Eye, Target, Award, CheckCircle, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const About: React.FC = () => {
  const values = [
    { title: 'Innovation', desc: 'Promoting forward-thinking and original technological designs.', color: 'from-[#00D8FF]/20 to-transparent' },
    { title: 'Collaboration', desc: 'Nurturing team synergy, cross-departmental tasks, and peer growth.', color: 'from-[#EC4899]/20 to-transparent' },
    { title: 'Leadership', desc: 'Guiding student engineers to manage complex teams, tasks, and budgets.', color: 'from-[#8B5CF6]/20 to-transparent' },
    { title: 'Continuous Learning', desc: 'Sustaining a continuous stream of workshops, bootcamps, and lectures.', color: 'from-[#00B5E2]/20 to-transparent' },
    { title: 'Engineering Excellence', desc: 'Striving for highest technical rigor in codes, projects, and research papers.', color: 'from-[#3B82F6]/20 to-transparent' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5">
      {/* Background glow accents */}
      <div className="glow-orb glow-cyan w-[500px] h-[500px] top-10 -left-20" />
      <div className="glow-orb glow-magenta w-[450px] h-[450px] bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ieee-blue/15 border border-ieee-accent/30 text-ieee-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            About IEEE <span className="text-gradient">NMIET</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            NMIET's IEEE Student Branch is a hub for innovation, collaboration, and professional engineering growth. 
            We build platforms for engineering students to master emerging technologies, engage with industry projects, 
            and expand their professional networks internationally.
          </p>
        </div>

        {/* Vision & Mission Split Layout with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Vision card */}
          <TiltCard glowColor="rgba(0, 216, 255, 0.25)" className="h-full">
            <div className="glass-cyber p-8 md:p-10 rounded-2xl text-left h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ieee-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-ieee-accent/15 flex items-center justify-center text-ieee-accent mb-6 border border-ieee-accent/30 shadow-[0_0_20px_rgba(0,181,226,0.3)]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  To nurture a vibrant, self-sustaining student community of technologically sound engineers, 
                  innovators, and research heads who will design state-of-the-art systems to address local and global issues.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="text-xs font-semibold text-ieee-accent uppercase tracking-wider">Pioneering Futuristic Engineering</span>
              </div>
            </div>
          </TiltCard>

          {/* Mission card */}
          <TiltCard glowColor="rgba(236, 72, 153, 0.25)" className="h-full">
            <div className="glass-cyber p-8 md:p-10 rounded-2xl text-left h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC4899]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EC4899]/15 flex items-center justify-center text-[#EC4899] mb-6 border border-[#EC4899]/30 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  To systematically coordinate high-caliber workshops, hacking competitions, guest research seminars, and 
                  leadership opportunities that bridge theoretical classroom curriculum with industry engineering standards.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="text-xs font-semibold text-[#EC4899] uppercase tracking-wider">Empowering Student Impact</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel */}
          <div className="lg:col-span-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-ieee-accent mb-6 border border-white/10 shadow-[0_0_20px_rgba(0,181,226,0.2)]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Our Core Values</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              These underlying pillars form the foundation of our student operations, event coordination, and project execution.
            </p>
          </div>

          {/* Right values grid with 3D hover */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <TiltCard key={v.title} maxTilt={8} scale={1.03}>
                <div className="p-6 rounded-xl border border-white/10 bg-dark-card/70 backdrop-blur-md text-left flex items-start gap-4 hover:border-ieee-accent/40 transition-all duration-300 shadow-lg h-full">
                  <div className="w-8 h-8 rounded-lg bg-ieee-blue/15 border border-ieee-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-ieee-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1.5 text-base">{v.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
