import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalData } from '../data';

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...personalData.skills.map(s => s.category)];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Frontend': return 'deployed_code';
      case 'Backend': return 'dns';
      case 'Database': return 'storage';
      case 'Tools & Platforms': return 'build';
      default: return 'psychology';
    }
  };

  const getColorClass = (category: string) => {
    switch (category) {
      case 'Frontend': return 'text-primary bg-[#FAF9F6] border-on-surface';
      case 'Backend': return 'text-secondary bg-[#FAF9F6] border-on-surface';
      case 'Database': return 'text-tertiary bg-[#FAF9F6] border-on-surface';
      case 'Tools & Platforms': return 'text-[#1A1A1A] bg-[#FAF9F6] border-on-surface';
      default: return 'text-outline bg-[#FAF9F6] border-on-surface';
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? personalData.skills
    : personalData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#EBE7DF]/20 border-b border-on-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] block mb-3">
            TECHNICAL ARSENAL
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-extrabold text-[#111111] mb-4">
            Forged in Modern Standards
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
            A meticulously curated collection of languages, frameworks, APIs, development databases, and modern deployment tools.
          </p>
        </div>

        {/* Category Selection Tabs (Editorial news labels) */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-none font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary border-primary shadow-sm'
                  : 'bg-transparent text-on-surface-variant border-on-surface/20 hover:border-on-surface hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Bento List / Interactive Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((catGroup, idx) => (
              <motion.div
                key={catGroup.category}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="glass-card p-8 rounded-none flex flex-col gap-6 justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-bold text-on-surface-variant/70 tracking-widest uppercase">
                      Category 0{idx + 1}
                    </span>
                    <div className={`p-2 rounded-none border flex items-center justify-center ${getColorClass(catGroup.category)}`}>
                      <span className="material-symbols-outlined text-xl">
                        {getIconForCategory(catGroup.category)}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif italic text-2xl font-extrabold text-[#1A1A1A] mb-2">
                    {catGroup.category}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant/80 mb-6">
                    A list of core proficiencies and applied tools.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#FAF9F6] rounded-none text-xs font-mono text-on-surface border border-on-surface/10 hover:border-on-surface hover:bg-white transition-all cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-on-surface/10 flex items-center justify-between text-[11px] font-mono text-on-surface-variant/70">
                  <span>Continuous Learning</span>
                  <span className="text-primary font-bold">Active Depth</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Career Philosophy Quote Block for Visual Polish */}
        <div className="mt-20 p-8 glass-card rounded-none max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-[#FAF9F6]">
          <div className="p-3 border border-on-surface rounded-none bg-white text-secondary">
            <span className="material-symbols-outlined text-2xl">psychology</span>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-serif italic font-extrabold text-lg text-on-surface mb-1">
              &ldquo;Mastery is an infinite feedback loop.&rdquo;
            </h4>
            <p className="font-sans text-xs text-on-surface-variant/80 leading-relaxed">
              Structuring clean interfaces isn't just about learning syntax. It's about designing consistent logical structures that solve real problems efficiently.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
