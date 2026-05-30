import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [activeSegment, setActiveSegment] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      let currentSection = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = section;
          }
        }
      }
      setActiveSegment(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Hero', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-[94%] sm:w-[88%] max-w-5xl transition-all duration-400 ${
        scrolled
          ? 'glass-nav mt-2 border border-on-surface rounded-none'
          : 'bg-transparent border-b border-on-surface/20 mt-4 rounded-none'
      }`}
      id="custom-navbar"
    >
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onScrollTo('hero')}>
        {/* Editorial Serif Logo */}
        <div className="flex items-center justify-center w-8 h-8 rounded-none bg-primary text-on-primary font-serif italic font-black text-lg border border-primary">
          N
        </div>
        <span className="font-serif italic font-extrabold text-xl tracking-wider text-on-surface hidden xs:block">
          Nitish Bharti
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-1 sm:gap-2 bg-[#EBE7DF]/50 py-1 px-2 sm:px-3 rounded-none border border-on-surface/30">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`px-2 sm:px-3 py-1 rounded-none text-xs sm:text-sm font-sans font-semibold transition-all duration-350 relative uppercase tracking-wider ${
                activeSegment === item.id
                  ? 'text-primary'
                  : 'text-on-surface-variant/80 hover:text-on-surface'
              }`}
            >
              {item.label}
              {activeSegment === item.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => onScrollTo('contact')}
          className="px-4 py-1.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-neutral-800 transition-all border border-primary cursor-pointer"
        >
          Hire
        </button>
      </div>
    </nav>
  );
}
