import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="nav-brand"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              RK
            </div>
            <div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 hidden sm:inline">Civil Engineer · RGPV '25</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Immediate Joining
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              type="button"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-lg transition-all duration-200 hover:border-cyan-500/40 shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              id="nav-contact-btn"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4 py-2 rounded-lg shadow-md shadow-cyan-900/30 transition-all duration-200 hover:shadow-cyan-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              type="button"
              id="mobile-resume-icon-btn"
              aria-label="View Resume"
              className="p-2 text-cyan-400 bg-slate-900 rounded-lg border border-slate-800"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Full Resume (PDF/Print)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-cyan-600 rounded-lg shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
