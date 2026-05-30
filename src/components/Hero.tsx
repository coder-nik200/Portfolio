import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 14 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-32 overflow-hidden bg-bg-dark border-b border-on-surface"
    >
      {/* Editorial Gridlines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px] bg-on-surface/5" />
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px] bg-on-surface/5" />
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-on-surface/5" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-5xl"
      >
        {/* Editorial Sub-banner */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-4 py-1 border border-on-surface/30 bg-[#EBE7DF]/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-on-surface animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-on-surface tracking-[0.3em] uppercase">
            Portfolio Selection &bull; Vol. 2026
          </span>
        </motion.div>

        {/* Serif Dynamic Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif italic text-6xl sm:text-8xl md:text-9xl font-black text-on-surface mb-6 tracking-tighter leading-[0.85] -ml-2"
        >
          {personalData.name}
        </motion.h1>

        {/* Editorial Rolodex Specs / Custom Badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-on-surface"
        >
          {personalData.roles.map((role) => (
            <span
              key={role}
              className="px-3 py-0.5 border border-on-surface text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] font-semibold bg-[#FAF9F6] shadow-sm"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Rich Serif Intro Quote Block */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-xl sm:text-2xl text-on-surface max-w-3xl mx-auto mb-12 leading-relaxed opacity-95"
        >
          &ldquo;{personalData.shortIntro}&rdquo;
        </motion.p>

        {/* Editorial CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-xl mx-auto"
        >
          <button
            onClick={() => onScrollTo('projects')}
            className="group relative overflow-hidden w-full sm:w-auto px-12 py-4 bg-[#111111] text-white font-mono text-[11px] uppercase tracking-[0.25em] font-bold border border-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          >
            <span className="relative z-10">Explore Portfolio</span>

            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          {/* Resume Button */}
          <a
            href="/Nitish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden w-full sm:w-auto px-12 py-4 bg-white/60 backdrop-blur-xl text-black font-mono text-[11px] uppercase tracking-[0.25em] font-bold border border-black/10 hover:bg-white transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          >
            <span className="relative z-10">View Resume</span>

            <div className="absolute inset-0 bg-black/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>

      </motion.div>

      {/* Down indicators */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        onClick={() => onScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 group"
      >
        <div className="flex flex-col items-center gap-3">

          {/* Vertical Line */}
          <div className="w-px h-14 bg-black/15 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-black/60"
            />
          </div>

          {/* Text */}
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/45 group-hover:text-black/80 transition-all duration-500">
            Scroll
          </span>
        </div>
      </motion.div>

    </section>
  );
}
