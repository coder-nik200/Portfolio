import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

export default function About() {
  const [glow, setGlow] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-on-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Profile Image Column (framed with a crisp thin border) */}
        <div className="lg:col-span-5 relative">
          <div className="relative border border-on-surface p-2.5 bg-[#FAF9F6] shadow-sm">
            <div className="aspect-square overflow-hidden border border-on-surface/40 bg-white">
              <img
                className="w-full h-full object-cover md:grayscale md:brightness-95 md:hover:grayscale-0 md:hover:brightness-100 transition-all duration-700"
                alt="Portrait of Nitish Bharti"
                referrerPolicy="no-referrer"
                src="/Nitish.jpeg"
              />
            </div>

            {/* Press Badge Label */}
            <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-on-primary border border-on-surface font-mono text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              Engineered with Care
            </div>
          </div>
        </div>

        {/* Written Biography & Education Column */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h4 variants={itemVariants} className="font-mono text-xs text-primary uppercase tracking-[0.4em] border-b border-on-surface pb-2 mb-6">
              Core Biography
            </motion.h4>

            <motion.h2 variants={itemVariants} className="font-serif italic text-3xl sm:text-5xl font-extrabold text-[#111111] mb-6 leading-tight">
              Architecting the web, <span className="underline decoration-on-surface/40">one digital dimension</span> at a time.
            </motion.h2>

            <motion.p variants={itemVariants} className="font-serif italic text-lg sm:text-xl text-on-surface-variant leading-relaxed mb-6">
              &ldquo;{personalData.aboutMe}&rdquo;
            </motion.p>
          </motion.div>

          {/* Education & Learning Panel - Nested Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Education Details */}
            <div className="glass-card rounded-none p-6 sm:p-7 bg-white/[0.02] border border-on-surface/10 hover:border-primary/20 transition-all duration-500">

              {/* Heading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 border border-secondary/20 bg-secondary/5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    school
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/50">
                    Academic
                  </p>

                  <h3 className="font-serif font-bold text-xl text-on-surface italic">
                    Education
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5 font-sans">

                {/* Qualification */}
                <div>
                  <div className="flex items-center justify-between border-b border-on-surface/10 pb-2">
                    <span className="text-[10px] text-on-surface-variant/60 uppercase font-mono tracking-[0.25em]">
                      Degree
                    </span>

                    <span className="text-[10px] text-primary uppercase font-mono tracking-[0.2em]">
                      2023 — 2026
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-base sm:text-lg font-bold text-primary leading-snug">
                      Bachelor of Computer Applications
                    </h4>

                    <p className="text-sm text-on-surface-variant mt-1">
                      Khalsa College, Amritsar
                    </p>
                  </div>
                </div>
                <div className="text-[10px] text-on-surface-variant/70 uppercase font-mono tracking-widest border-b border-on-surface/10 pb-1">Aptitude</div> <div className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Self-driven learning with focused hands-on training and execution.</div>
              </div>
            </div>

            {/* Currently Learning Panel */}
            <div className="glass-card rounded-none p-6 sm:p-7 bg-white/[0.02] border border-on-surface/10 hover:border-primary/20 transition-all duration-500">

              {/* Header */}
              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/50 mb-2">
                  Growth
                </p>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface italic leading-tight">
                  Current Learning Focus
                </h3>
              </div>

              {/* Learning Items */}
              <ul className="space-y-3">
                {personalData.education.currentlyLearning.map((item, idx) => (
                  <li
                    key={idx}
                    className="group flex items-center justify-between border-b border-on-surface/5 pb-3 last:border-none"
                  >
                    <span className="font-mono text-[11px] sm:text-xs tracking-[0.08em] text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>

                    <span className="font-mono text-[10px] text-on-surface-variant/30 tracking-[0.2em]">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
