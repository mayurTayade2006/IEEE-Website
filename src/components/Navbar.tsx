import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'What is IEEE?', id: 'what-is-ieee' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Chapters', id: 'chapters' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
    setActiveSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-ieee-darkBlue to-ieee-accent p-[1px] flex items-center justify-center">
            <div className="w-full h-full rounded-[7px] bg-[#0A0E17] flex items-center justify-center font-display font-extrabold text-sm tracking-tight text-white">
              IEEE
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-lg tracking-wider text-white leading-tight">
              IEEE <span className="text-ieee-accent">NMIET</span>
            </div>
            <div className="text-[10px] tracking-widest text-gray-400 uppercase">Student Branch</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                activeSection === item.id ? 'text-ieee-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-ieee-accent rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleLinkClick('join-us')}
            className="group px-5 py-2.5 rounded-full bg-ieee-blue hover:bg-ieee-lightBlue text-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-md shadow-ieee-blue/20"
          >
            Join Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] right-0 bottom-0 left-0 w-full bg-dark-bg/95 backdrop-blur-lg border-t border-white/5 z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 h-full justify-start items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-xl font-medium tracking-wide py-2 w-full text-center transition-all ${
                activeSection === item.id ? 'text-ieee-accent border-b border-ieee-accent/20' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('join-us')}
            className="w-full mt-4 max-w-xs py-3.5 rounded-full bg-ieee-blue hover:bg-ieee-lightBlue text-white font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300"
          >
            Join Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
