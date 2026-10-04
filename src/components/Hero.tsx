import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  FileText,
  Send,
  Building2,
  Award,
  Compass,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"
    >
      {/* Background Architectural Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Subtle Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Terminal style badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="font-mono text-cyan-400 font-medium">&gt;&gt; civil.engineer</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">B.Tech RGPV 2025 (8.03 CGPA)</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-medium">Ready for Site / Design</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Civil Engineer (B.Tech RGPV 2025)
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Trained in structural modeling basics (<span className="text-cyan-300 font-medium">STAAD.Pro</span>) and 2D technical drafting (<span className="text-cyan-300 font-medium">AutoCAD 2D</span>), alongside practical fundamentals in <span className="text-white font-medium">Basic Excel & Microsoft Power BI</span>. Seeking an entry-level Site Engineer or Structural Design Trainee role.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Bhopal, Madhya Pradesh</span>
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-850 px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phones[0].replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-850 px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-emerald-400">{PERSONAL_INFO.phones[0]}</span>
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-200"
              >
                <Compass className="w-4 h-4" />
                <span>View Engineering & Design Work</span>
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                id="hero-resume-modal-btn"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume / Credentials</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-anchor-btn"
                className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white font-medium text-sm px-4 py-3.5 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Let's Discuss Role</span>
              </a>
            </div>
          </div>

          {/* Right Card / Technical Specimen (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 border border-slate-800 shadow-2xl shadow-black/40">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Candidate Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  ID: RGPV-2025
                </span>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 py-5">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Verification Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hands-on beam, column & foundation design in <strong>STAAD.Pro</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Technical drafting of plans, elevations & sections in <strong>AutoCAD 2D</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Best Research Paper Award winner at <strong>PIMR Bhopal (2024)</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Immediate availability for Site Engineer or Trainee openings</span>
                </div>
              </div>

              {/* LinkedIn & Direct Link */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <span className="text-[11px] font-mono text-slate-500">
                  Open to Relocation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono"
          >
            <span>DISCOVER PROFILE & WORKS</span>
            <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
