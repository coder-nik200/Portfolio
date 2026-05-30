import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

export default function Certifications() {
  return (
    <section className="py-24 bg-[#EBE7DF]/10 border-b border-on-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.4em] block mb-3">
            VERIFIED EXPERTISE
          </span>
          <h2 className="font-serif italic text-4xl font-extrabold text-on-surface">
            Professional Certifications
          </h2>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card p-6 rounded-none bg-white flex flex-col justify-between h-48 group border border-on-surface"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-tertiary text-xl group-hover:scale-110 transition-transform">
                    workspace_premium
                  </span>
                  <span className="font-mono text-[9px] text-[#1A1A1A] font-bold uppercase tracking-widest">
                    Verified ID 0{idx + 1}
                  </span>
                </div>
                
                <h3 className="font-serif italic font-extrabold text-base text-on-surface leading-snug mb-2 group-hover:text-tertiary transition-colors">
                  {cert.name}
                </h3>
              </div>
              
              <div className="flex items-end justify-between border-t border-on-surface/10 pt-3 font-sans text-xs text-on-surface-variant font-medium">
                <span>{cert.issuer}</span>
                <span className="font-mono text-primary font-bold text-[10px]">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
