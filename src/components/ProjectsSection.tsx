import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  Building2,
  BarChart3,
  Palette,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'civil' | 'data' | 'creative'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'civil':
        return { label: 'Civil & Structural', color: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60' };
      case 'data':
        return { label: 'Data Science & BI', color: 'bg-blue-950/80 text-blue-300 border-blue-800/60' };
      case 'creative':
        return { label: 'Visual & Branding', color: 'bg-purple-950/80 text-purple-300 border-purple-800/60' };
      default:
        return { label: 'Project', color: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
              // selected work & projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Civil Structures, Data Models & Visual Direction
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Explore hands-on civil engineering models, predictive traffic analytics, and production-grade brand showcases.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'civil', label: 'Civil & Structural' },
              { id: 'data', label: 'Data Analytics' },
              { id: 'creative', label: 'Visual & Branding' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                type="button"
                className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const catBadge = getCategoryBadge(project.category);
            return (
              <div
                key={project.id}
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/40"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border ${catBadge.color}`}
                    >
                      {catBadge.label}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.slice(0, 4).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-500">
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    {project.category === 'civil' ? 'Structural' : project.category === 'data' ? 'Analytics' : 'Design'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Portfolio Footnote */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>All civil and design projects represent verified work from ACADD Centre, Innovate Intern, and creative practice.</span>
          </div>
          <a
            href="#contact"
            className="text-cyan-400 hover:text-cyan-300 font-medium underline-offset-4 hover:underline"
          >
            Request Drawing Sets & Detailed Reports &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
