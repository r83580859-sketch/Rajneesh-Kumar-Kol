import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Cpu,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // practical training & internships
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Industry Training & Applied Internships
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Hands-on technical drafting, structural software modeling, and data science research experience.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800/80 ml-3 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isStructural = exp.category === 'structural' || exp.category === 'cad';
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                    isStructural
                      ? 'bg-slate-900 border-cyan-500 text-cyan-400'
                      : 'bg-slate-900 border-blue-500 text-blue-400'
                  }`}
                >
                  {isStructural ? (
                    <Building2 className="w-4 h-4" />
                  ) : (
                    <Cpu className="w-4 h-4" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-sm space-y-4">
                  {/* Title & Org */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-cyan-400 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-1">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
