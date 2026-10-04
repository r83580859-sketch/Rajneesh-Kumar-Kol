import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // academic foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Formal Education & Engineering Studies
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Consistent academic excellence from secondary school to Bachelor of Technology in Civil Engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item, idx) => {
            const isBtech = idx === 0;
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 ${
                  isBtech
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      {item.period}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.universityOrBoard}
                    </p>
                  </div>

                  {/* Score Highlight */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Academic Standing
                    </span>
                    <span className="text-base font-display font-bold text-emerald-400">
                      {item.grade} {item.gradeType}
                    </span>
                  </div>

                  {/* Coursework if present */}
                  {item.coursework && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Key Subjects</span>
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.coursework}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                  <span>Regular Full-Time</span>
                  <span>Verified Transcript</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
