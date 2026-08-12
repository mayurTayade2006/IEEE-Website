import React from 'react';
import { Linkedin, Instagram, MessageCircle, ChevronUp } from 'lucide-react';
import { contactDetails } from '../data/ieeeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'What is IEEE?', id: 'what-is-ieee' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Chapters', id: 'chapters' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
    { label: 'Join Us', id: 'join-us' },
  ];

  return (
    <footer className="bg-[#05080E] border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      
      {/* Footer Main container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollUp}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-ieee-darkBlue to-ieee-accent p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-[7px] bg-[#05080E] flex items-center justify-center font-display font-extrabold text-sm tracking-tight text-white">
                  IEEE
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white leading-tight">
                  IEEE <span className="text-ieee-accent">NMIET</span>
                </h3>
                <span className="text-[9px] tracking-widest text-gray-500 uppercase">Student Branch</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Empowering students through technology, innovation and leadership. We bridge academic study 
              with practical development to shape tomorrow\'s tech pioneers.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-gray-400 hover:text-ieee-accent text-xs transition-colors text-left py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections Column */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-ieee-accent hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-ieee-accent hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/GeQXYxDRENH7U1uCE10gZt?s=cl&p=a&ilr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-ieee-accent hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-gray-500">
              National Code: STB99631
            </div>
          </div>

        </div>

        {/* Footer Base copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} IEEE NMIET. All Rights Reserved.
          </span>
          
          <button
            onClick={scrollUp}
            className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 hover:text-ieee-accent uppercase tracking-widest transition-colors"
          >
            Back to Top
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
