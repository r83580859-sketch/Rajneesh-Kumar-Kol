import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Compass,
  HardHat,
  Cpu,
  Layers,
  Award,
  CheckCircle,
  GraduationCap,
  Globe2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: HardHat,
      title: 'Structural Analysis & Design',
      desc: 'Hands-on modeling of beams, columns, and foundations in STAAD.Pro. Executing load distributions, moment envelopes, deflection checks, and Indian Standard (IS) code verifications.',
    },
    {
      icon: Compass,
      title: 'Construction Detailing (AutoCAD 2D)',
      desc: 'Precision architectural and structural 2D drafting with clear section cuts, dimensioning grids, and coordinate schedules for rapid execution on active construction sites.',
    },
    {
      icon: Cpu,
      title: 'Data & Spreadsheet Reporting',
      desc: 'Applying Basic Excel for site measurement records, tabular progress tracking, and Microsoft Power BI dashboards to turn project metrics and quantities into clear operational summaries.',
    },
    {
      icon: Layers,
      title: 'Visual Representation & Detailing',
      desc: 'Translating concepts into clean visual identities, presentation showreels, and photorealistic product/apparel mockups with sharp graphic hierarchy.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // about rajneesh
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering Precision Grounded in Analysis & Practical Execution
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Rajneesh Kumar Kol is a Civil Engineering graduate (B.Tech, RGPV, 2025) with an 8.03 CGPA, certified in structural analysis (STAAD.Pro) and CAD drafting (AutoCAD 2D) from ACADD Centre, and trained in data science from Innovate Intern.
          </p>
        </div>

        {/* Narrative & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl p-7 sm:p-8 border border-slate-800/80 shadow-lg space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">
              Professional Approach & Background
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              During his engineering tenure at Trinity Institute of Technology & Research (RGPV Bhopal), Rajneesh paired deep coursework in structural analysis, concrete technology, and transportation engineering with industry-grade software training. At the ACADD Centre, he developed foundational proficiency in modeling multi-storey frame structures in STAAD.Pro and generating detailed construction sheets in AutoCAD 2D.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              What distinguishes his practice is a <strong className="text-white">data-first instinct</strong>: having completed a 12-week data science internship at Innovate Intern on predictive traffic modeling along with Microsoft Elevate’s Power BI program, he seamlessly bridges site realities with computational rigor.
            </p>

            {/* Quoted Career Objective from Verified Resume */}
            <div className="bg-slate-950/80 border-l-4 border-cyan-500 rounded-r-xl p-5 my-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                Career Objective (Verified Resume)
              </span>
              <p className="text-slate-200 text-sm italic leading-relaxed">
                "{PERSONAL_INFO.objective}"
              </p>
            </div>

            {/* Availability & Location tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <div className="text-xs font-mono text-slate-400">STATUS & DEPLOYMENT</div>
                <div className="text-sm font-semibold text-emerald-400 mt-1">
                  Immediate Joining
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Ready to relocate to any site location or office in India
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70">
                <div className="text-xs font-mono text-slate-400">ACADEMIC EXCELLENCE</div>
                <div className="text-sm font-semibold text-cyan-400 mt-1">
                  8.03 CGPA · B.Tech Civil
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Best Research Paper Award winner (PIMR Bhopal 2024)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Credentials</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="pb-3 border-b border-slate-800">
                  <div className="font-semibold text-slate-200 text-sm">B.Tech in Civil Engineering</div>
                  <div className="text-cyan-400 font-mono mt-0.5">CGPA: 8.03 / 10.0</div>
                  <div className="text-slate-400 mt-0.5">Trinity Institute (RGPV Bhopal) · 2021-2025</div>
                </div>

                <div className="pb-3 border-b border-slate-800">
                  <div className="font-semibold text-slate-200 text-sm">Class XII (CBSE)</div>
                  <div className="text-cyan-400 font-mono mt-0.5">Score: 78.8%</div>
                  <div className="text-slate-400 mt-0.5">Eklavya Model Residential School, Sidhi</div>
                </div>

                <div>
                  <div className="font-semibold text-slate-200 text-sm">Class X (CBSE)</div>
                  <div className="text-cyan-400 font-mono mt-0.5">Score: 77.4%</div>
                  <div className="text-slate-400 mt-0.5">Eklavya Model Residential School, Sidhi</div>
                </div>
              </div>
            </div>

            {/* Language & Communication */}
            <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Languages</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-300 font-medium">Hindi</span>
                  <span className="text-emerald-400 font-mono">Proficient / Native</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-300 font-medium">English</span>
                  <span className="text-cyan-400 font-mono">Proficient / Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 hover:bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
