import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Building2,
  BarChart3,
  Palette,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'BarChart3':
        return BarChart3;
      case 'Palette':
        return Palette;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // technical skillset
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Competencies Tested in Design & Field Analysis
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            A balanced stack combining core structural engineering and drafting with modern computational analytics and visual design.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 border-b border-slate-800/80 pb-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950/30'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.title}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div>
              <h3 className="text-lg font-display font-semibold text-white">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-md self-start sm:self-auto">
              Verified Coursework & Projects
            </div>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 whitespace-nowrap">
                      {skill.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Proficiency:</span>
                  <span className="font-medium text-emerald-400 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools Marquee / Badge Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-900/90 border border-slate-800 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
            Key Software & Frameworks In Daily Workflow
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              'STAAD.Pro',
              'AutoCAD 2D',
              'Basic Excel',
              'Power BI',
              'IS 456 & IS 875',
              'Load Calculations',
              'Site Measurement Sheets',
              'Generative AI',
              'Canva',
              'Product Mockups',
              'Site Reporting',
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
