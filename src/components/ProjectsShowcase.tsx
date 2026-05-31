import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { personalData } from '../data';

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-on-surface">
      
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b border-on-surface pb-8">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] block mb-3">
            CURATED CREATIONS
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-extrabold text-[#111111]">
            Selected Works
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-on-surface-variant max-w-xl mt-3">
            A precise collection of digital artifacts crafted with high-fidelity UI systems, backend integrations, and smooth client workflows.
          </p>
        </div>
        
        <div className="font-mono text-[10px] font-bold text-on-surface-variant flex items-center gap-2 bg-[#FAF9F6] py-1.5 px-3 rounded-none border border-on-surface select-none uppercase tracking-widest shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>Interactive Preview Enabled</span>
        </div>
      </div>

      {/* Projects List with responsive grid layout */}
      <div className="space-y-32">
        {personalData.projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Media showcase column - styled with elegant vintage framing */}
              <div className={`lg:col-span-7 bg-[#FAF9F6] p-2.5 border border-on-surface shadow-sm relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-linear-to-t from-bg-dark/20 via-transparent to-transparent z-10 pointer-events-none" />

                <div className="relative aspect-video overflow-hidden border border-on-surface/30">
                  <img
                    className="w-full h-full object-contain grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    alt={project.name}
                    src={project.imageUrl}
                  />
                  {/* Floating badge for active indicator */}
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    {project.liveDemo && (
                      <span className="px-3 py-1 rounded-none bg-primary text-on-primary border border-on-surface text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-on-primary animate-ping" />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text narrative and specs column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="font-mono text-xs text-primary mb-2 block tracking-widest uppercase border-b border-on-surface/10 pb-1 w-fit">
                  Project 0{index + 1} &bull; {project.techStack[0]} Focus
                </span>
                
                <h3 className="font-serif italic text-3xl sm:text-4xl font-extrabold text-[#111111] leading-tight transition-colors">
                  {project.name}
                </h3>
                
                <p className="font-serif leading-relaxed italic text-base text-on-surface-variant/90">
                  &ldquo;{project.description}&rdquo;
                </p>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-[#FCFAF7] border border-on-surface/20 rounded-none font-mono text-[10px] uppercase tracking-wider text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions bar */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 font-serif italic font-bold text-sm text-[#111111] hover:underline decoration-primary cursor-pointer"
                  >
                    View Specifications
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                  
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-[#FAF9F6] hover:bg-neutral-100 rounded-none border border-on-surface font-mono text-[10px] uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-xs">launch</span>
                      <span>Demo Link</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Specifications Drawer */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              transition={{ duration: 0.25 }}
              className="glass-card w-full max-w-2xl bg-white rounded-none border border-on-surface overflow-hidden flex flex-col shadow-xl"
            >
              {/* Modal Header banner */}
              <div className="relative h-44 sm:h-52 bg-cover bg-center border-b border-on-surface" style={{ backgroundImage: `url(${activeProject.imageUrl})` }}>
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-black/30" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-none bg-white border border-on-surface text-on-surface flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
                
                <div className="absolute bottom-4 left-6">
                  <span className="font-[#1A1A1A] text-[9px] uppercase tracking-[0.2em] bg-[#FAF9F6] px-2 py-0.5 border border-on-surface font-mono leading-none font-bold block w-fit shadow-xs mb-1.5">
                    Detailed Scope
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl font-extrabold text-[#111111]">
                    {activeProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Contents Area */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[55vh] custom-scroll scrollbar">
                
                <div>
                  <h4 className="font-mono text-xs font-bold text-on-surface-variant/80 uppercase tracking-widest border-b border-on-surface/10 pb-1 mb-2">
                    Core Description
                  </h4>
                  <p className="font-serif text-sm text-on-surface leading-relaxed italic">
                    &ldquo;{activeProject.description}&rdquo;
                  </p>
                </div>

                {/* Features Roster Checklist */}
                <div>
                  <span className="font-mono text-xs font-bold text-on-surface-variant/80 uppercase tracking-widest block border-b border-on-surface/10 pb-1 mb-3">
                    Project Capabilities ({activeProject.features.length})
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start bg-[#FAF9F6] p-3 border border-on-surface/20">
                        <span className="material-symbols-outlined text-base text-primary mt-0.5 font-bold">
                          check
                        </span>
                        <span className="font-sans text-[11px] text-on-surface-variant/90 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Technical Stack */}
                <div>
                  <span className="font-mono text-xs font-bold text-on-surface-variant/80 uppercase tracking-widest block border-b border-on-surface/10 pb-1 mb-3">
                    System Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 border border-on-surface/30 rounded-none bg-[#FCFAF7] font-mono text-[10px] text-on-surface uppercase font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Actions Footer */}
              <div className="bg-[#FAF9F6] border-t border-on-surface p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-mono text-[9px] text-[#1A1A1A] font-bold uppercase tracking-widest">
                  Secure Demonstration Sandbox
                </span>
                
                <div className="flex gap-2.5">
                  {activeProject.liveDemo && (
                    <a
                      href={activeProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-primary text-on-primary border border-primary font-mono text-[10px] uppercase tracking-widest font-bold rounded-none hover:bg-neutral-800 flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined text-xs font-bold font-mono">launch</span>
                      <span>Launch Site</span>
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#FAF9F6] border border-on-surface font-mono text-[10px] uppercase tracking-widest font-bold rounded-none hover:bg-neutral-100 flex items-center gap-1.5 transition-all shadow-xs"
                    >
                      <span className="material-symbols-outlined text-xs">source_notes</span>
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
