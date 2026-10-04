import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // credentials & honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Verified Certifications & Research Honors
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Certified technical competencies across structural engineering, data intelligence, and academic research.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isAward = cert.category === 'award';
            return (
              <div
                key={cert.id}
                className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between group ${
                  isAward
                    ? 'bg-gradient-to-b from-amber-950/30 to-slate-900/80 border-amber-500/40 shadow-lg shadow-amber-950/20'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isAward
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}
                    >
                      {isAward ? <Trophy className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    </div>

                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded ${
                        isAward
                          ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {cert.badgeText || cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400 mt-1">
                      {cert.issuer}
                    </div>
                    {cert.program && (
                      <div className="text-xs text-slate-400 mt-0.5">
                        {cert.program}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Date: {cert.date}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
