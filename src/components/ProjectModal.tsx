import React from 'react';
import { Project } from '../types';
import { X, CheckCircle, Tag, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 uppercase">
            {project.category.toUpperCase()}
          </span>
          {project.badge && (
            <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Project Overview & Scope
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Engineering / Design Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Execution Steps & Deliverables
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics / Outcome */}
        {project.metricsOrOutcome && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Final Outcome / Validation
            </span>
            <p className="text-sm text-slate-200 font-medium">
              {project.metricsOrOutcome}
            </p>
          </div>
        )}

        {/* Tool tags */}
        <div className="pt-2 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
            Technologies & Tools Applied
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
              >
                <Tag className="w-3 h-3 text-cyan-400" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Close footer button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
