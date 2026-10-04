import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center font-display font-bold text-white shadow-md">
                RK
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Civil Engineering graduate (B.Tech RGPV 2025, 8.03 CGPA) trained in structural analysis (STAAD.Pro), technical drafting (AutoCAD 2D), and data intelligence. Available for immediate on-site or design office roles.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-300 font-medium">Ready for Site Coordination & Structural Design</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Objective</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Core Skillset</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Engineering & Design Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Practical Training</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications & Honors</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education (RGPV)</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="text-cyan-400 hover:underline"
                >
                  View Full Resume (Printable)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Contact Channels
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-white truncate">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">{PERSONAL_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">Bhopal, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline truncate"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified records and credentials preserved.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
