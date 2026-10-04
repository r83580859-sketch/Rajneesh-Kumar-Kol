import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone1, setCopiedPhone1] = useState(false);
  const [copiedPhone2, setCopiedPhone2] = useState(false);

  // Form state to formulate clean client-side mailto
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [subjectOption, setSubjectOption] = useState('Full-Time Civil Engineering Role');
  const [messageBody, setMessageBody] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone1' | 'phone2') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone1') {
      setCopiedPhone1(true);
      setTimeout(() => setCopiedPhone1(false), 2000);
    } else {
      setCopiedPhone2(true);
      setTimeout(() => setCopiedPhone2(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectOption} - ${senderName || 'Recruiter'}`);
    const fullBody = encodeURIComponent(
      `Hi Rajneesh,\n\n${messageBody || 'I reviewed your portfolio and would like to discuss an opportunity with our team.'}\n\nBest regards,\n${senderName || 'Hiring Manager'}${senderCompany ? `\n${senderCompany}` : ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${fullSubject}&body=${fullBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            // get in touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Discuss Projects or Employment Opportunities
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Actively seeking an entry-level Site Engineer or Structural Design Trainee position. Available for immediate joining across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-display font-bold text-white">
                Direct Contact Channels
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone 1 (Primary requested: +91 95228-08468) */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                      Primary Contact / WhatsApp
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phones[0].replace(/[^0-9+]/g, '')}`}
                      className="text-base font-bold text-white hover:text-emerald-400 transition-colors block"
                    >
                      {PERSONAL_INFO.phones[0]}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phones[0], 'phone1')}
                  aria-label="Copy primary phone number"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                >
                  {copiedPhone1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone 2 (Alternative) */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Alternative Contact
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phones[1].replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block"
                    >
                      {PERSONAL_INFO.phones[1]}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phones[1], 'phone2')}
                  aria-label="Copy secondary phone number"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                >
                  {copiedPhone2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & LinkedIn */}
              <div className="pt-2 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline inline-flex items-center gap-1 truncate"
                  >
                    <span>{PERSONAL_INFO.linkedinDisplay}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 space-y-2">
              <div className="flex items-center gap-2 font-display font-semibold text-sm text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Immediate Availability Notice</span>
              </div>
              <p className="text-xs text-emerald-200/80 leading-relaxed">
                Available to join immediately with no notice period. Full readiness for on-site structural coordination, field inspections, or design office placements.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Email Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your requirements below to instantly launch your preferred email client addressed to Rajneesh.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      YOUR NAME / RECRUITER
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. L&T / Shapoorji / Studio"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    INQUIRY FOCUS / PURPOSE
                  </label>
                  <select
                    value={subjectOption}
                    onChange={(e) => setSubjectOption(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Site Engineer / Core Civil Opening">Site Engineer / Core Civil Opening</option>
                    <option value="Structural Design Trainee (STAAD.Pro / CAD)">Structural Design Trainee (STAAD.Pro / CAD)</option>
                    <option value="Data Analytics & BI Opportunity">Data Analytics & BI Opportunity</option>
                    <option value="Freelance CAD Drafting / Drawing Detailing">Freelance CAD Drafting / Drawing Detailing</option>
                    <option value="Branding & Visual Design Campaign">Branding & Visual Design Campaign</option>
                    <option value="General Professional Inquiry">General Professional Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    MESSAGE / SCOPE OVERVIEW
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the role location, responsibilities, or structural project specifications..."
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email via Client (rawatrajneesh1289@gmail.com)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
