import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

export default function ServicesPanel() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-on-surface">
      
      {/* Header Panel */}
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] block mb-3">
          UTILITY CATALOG
        </span>
        <h2 className="font-serif italic text-4xl sm:text-5xl font-extrabold text-on-surface">
          Services Offered
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mt-3">
          Delivering end-to-end full stack development, pixel-perfect user experiences, and automated system optimizations.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {personalData.services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="glass-card p-8 rounded-none flex flex-col justify-between bg-white border border-on-surface group"
          >
            <div>
              <div className="h-10 w-10 bg-[#FAF9F6] border border-on-surface text-[#1A1A1A] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm rounded-none">
                <span className="material-symbols-outlined text-xl">{service.icon}</span>
              </div>
              
              <h3 className="font-serif italic text-xl font-extrabold text-on-surface mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Tags footer */}
            <div className="border-t border-on-surface/10 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-on-surface/25 bg-[#FAF9F6] font-mono text-[9px] uppercase tracking-wider text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
