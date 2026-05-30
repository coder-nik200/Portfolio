import React from 'react';
import { personalData } from '../data';

export default function HobbiesAndGoals() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-bg-dark border-b border-on-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Languages & Hobbies Box */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-none border border-on-surface bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">language</span>
              <h3 className="font-serif italic font-extrabold text-xl text-on-surface">Languages</h3>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {personalData.languages.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-on-surface/10 pb-2 last:border-none">
                  <span className="font-semibold text-on-surface">{item.name}</span>
                  <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">{item.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-none border border-on-surface bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-xl">sports_esports</span>
              <h3 className="font-serif italic font-extrabold text-xl text-on-surface">Hobbies & Interests</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {personalData.hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#FAF9F6] border border-on-surface/20 rounded-none font-mono text-xs text-on-surface-variant flex items-center gap-2 hover:border-on-surface hover:text-[#1A1A1A] hover:bg-white transition-colors cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 bg-secondary rounded-none" />
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Career Goals Box */}
        <div className="glass-card p-8 rounded-none border border-on-surface flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary text-xl">trending_up</span>
              <h3 className="font-serif italic font-extrabold text-xl text-on-surface">Career Objectives</h3>
            </div>

            <p className="font-serif italic text-sm text-on-surface-variant mb-6 leading-relaxed">
              Targeting immediate full stack depth, high-capacity backend servers, and modern deployment loops to power real-world digital ecosystems.
            </p>

            <div className="space-y-4">
              {personalData.careerGoals.map((goal, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-[#FAF9F6] p-4 rounded-none border border-on-surface/10 hover:border-on-surface/40 transition-all group">
                  <div className="h-6 w-6 rounded-none bg-tertiary text-on-tertiary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-on-surface leading-relaxed font-semibold">
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-on-surface/10 text-center text-[10px] font-mono tracking-wider uppercase text-on-surface-variant/80">
            Engineered with clear long-term direction.
          </div>
        </div>

      </div>
    </section>
  );
}
