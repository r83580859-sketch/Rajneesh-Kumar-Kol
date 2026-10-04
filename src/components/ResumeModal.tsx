import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Download, ExternalLink, AlertCircle, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [printStatus, setPrintStatus] = useState<'idle' | 'printing' | 'ready'>('idle');

  // Helper to generate a standalone, self-contained, 100% printable A4 HTML resume document
  const generateFullResumeHTML = (autoPrint = false) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rajneesh_Kumar_Kol_Resume_Civil_Engineer_Bhopal</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      background-color: #ffffff;
      margin: 0;
      padding: 24px;
      line-height: 1.38;
      font-size: 10pt;
    }
    .print-actions-bar {
      background: #0f172a;
      color: #ffffff;
      padding: 12px 20px;
      margin: -24px -24px 20px -24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 13px;
    }
    .btn-print {
      background: #0284c7;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
    }
    .btn-print:hover {
      background: #0369a1;
    }
    @media print {
      .print-actions-bar {
        display: none !important;
      }
      body {
        padding: 0 !important;
      }
    }
    .header {
      border-bottom: 2.5px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .candidate-name {
      font-size: 22pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0;
      color: #020617;
      text-transform: uppercase;
    }
    .candidate-badge {
      font-size: 9.5pt;
      font-weight: 700;
      color: #0369a1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-line {
      font-size: 9pt;
      color: #334155;
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      font-weight: 500;
      margin-top: 4px;
    }
    .contact-line a {
      color: #0369a1;
      text-decoration: none;
      font-weight: 600;
    }
    h2 {
      font-size: 10.5pt;
      font-weight: 700;
      color: #0369a1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin: 11px 0 6px 0;
    }
    p {
      margin: 3px 0;
      font-size: 9.5pt;
      color: #1e293b;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 14px;
      font-size: 9.2pt;
    }
    .skills-item {
      margin-bottom: 2px;
    }
    .skills-item strong {
      color: #0f172a;
    }
    .experience-item {
      margin-bottom: 8px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 9.5pt;
      color: #0f172a;
    }
    .item-date {
      font-size: 8.5pt;
      color: #0369a1;
      font-family: monospace;
      font-weight: 600;
    }
    ul {
      margin: 2px 0 4px 0;
      padding-left: 18px;
    }
    li {
      margin-bottom: 2px;
      font-size: 9pt;
      color: #334155;
    }
    .education-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9pt;
      margin-top: 4px;
    }
    .education-table th, .education-table td {
      padding: 4px 6px;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    .education-table th {
      background-color: #f1f5f9;
      font-weight: 700;
      color: #0f172a;
    }
    .declaration {
      margin-top: 14px;
      padding-top: 8px;
      border-top: 1px solid #cbd5e1;
      font-size: 8.8pt;
    }
    .sign-row {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      font-weight: 600;
      font-size: 9pt;
    }
    .page-break-avoid {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>
  ${
    autoPrint
      ? `<script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.print();
      }, 450);
    });
  </script>`
      : ''
  }
</head>
<body>
  <div class="print-actions-bar">
    <div>
      <strong>Rajneesh Kumar Kol — Printable Resume (Bhopal, M.P.)</strong>
      <span style="opacity: 0.8; margin-left: 8px;">A4 Format Clean Print / PDF</span>
    </div>
    <button class="btn-print" onclick="window.print()">🖨️ Click to Print / Save as PDF</button>
  </div>

  <div class="header page-break-avoid">
    <div class="header-top">
      <h1 class="candidate-name">${PERSONAL_INFO.name}</h1>
      <span class="candidate-badge">Civil Engineer (B.Tech RGPV 2025 · 8.03 CGPA)</span>
    </div>
    <div class="contact-line">
      <span>📍 Bhopal, Madhya Pradesh, India</span>
      <span>•</span>
      <span>📞 <a href="tel:+919522808468">+91 95228-08468</a> (Primary) / +91 78791-39116</span>
      <span>•</span>
      <span>✉️ <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a></span>
      <span>•</span>
      <span>🔗 <a href="${PERSONAL_INFO.linkedin}">linkedin.com/in/rajneesh-kumar-kol-866727249</a></span>
    </div>
  </div>

  <div class="page-break-avoid">
    <h2>Career Objective</h2>
    <p style="text-align: justify; line-height: 1.4;">${PERSONAL_INFO.objective}</p>
  </div>

  <div class="page-break-avoid">
    <h2>Core Technical Skills</h2>
    <div class="skills-grid">
      <div class="skills-item">• <strong>Structural Analysis & Design:</strong> STAAD.Pro (Beams, Columns, Foundations, Load Distribution, Deflection)</div>
      <div class="skills-item">• <strong>Technical Drafting & Detailing:</strong> AutoCAD 2D (Architectural Plans, Elevations, Sections, Schedules)</div>
      <div class="skills-item">• <strong>Codes & Standards:</strong> IS 456 (Plain/Reinforced Concrete), IS 875 (Design Loads), IS 1893</div>
      <div class="skills-item">• <strong>Site Execution & Estimation:</strong> Drawing Interpretation, Material Takeoff, Site Coordination, BBS Basics</div>
      <div class="skills-item" style="grid-column: span 2;">• <strong>Computational & Office Tools:</strong> Basic Excel (Site Measurement Sheets, Data Entry, Progress Logs, Basic Formulas), Microsoft Power BI</div>
    </div>
  </div>

  <div class="page-break-avoid">
    <h2>Practical Training & Internships</h2>

    <div class="experience-item">
      <div class="item-header">
        <span>STAAD.Pro Structural Design Trainee — ACADD Centre</span>
        <span class="item-date">Aug 2023 – Sep 2023</span>
      </div>
      <ul>
        <li>Modeled and analyzed multi-storey reinforced concrete structural frames using STAAD.Pro.</li>
        <li>Executed dead and live load assignments, evaluated bending moment envelopes, and verified deflection limits per IS design codes.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="item-header">
        <span>AutoCAD 2D Drafting & Detailing Trainee — ACADD Centre</span>
        <span class="item-date">Apr 2024 – May 2024</span>
      </div>
      <ul>
        <li>Drafted construction-ready 2D architectural plans, building elevations, and structural cross-sections.</li>
        <li>Utilized layer management protocols, dimensioning standards, coordinate grids, and opening schedules for site supervisors.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="item-header">
        <span>Data Science & Analytics Intern — Innovate Intern</span>
        <span class="item-date">May 2024 – Jul 2024 (12 Weeks)</span>
      </div>
      <ul>
        <li>Research Project: <em>"Predictive Modeling for Road Traffic Management"</em>.</li>
        <li>Organized and processed multi-point roadway volume datasets in Excel, analyzing peak congestion windows and signaling suggestions.</li>
      </ul>
    </div>

    <div class="experience-item">
      <div class="item-header">
        <span>Emerging Tech & Data Intern — Edunet & Connecting Dreams Foundation</span>
        <span class="item-date">Jun 2024 – Jul 2024</span>
      </div>
      <ul>
        <li>National initiative supported by AICTE and Vodafone Idea Foundation (_VOIS for Tech Program).</li>
        <li>Trained in cloud technologies, data analytics, and digital workflows for operational problem solving.</li>
      </ul>
    </div>
  </div>

  <div class="page-break-avoid">
    <h2>Education</h2>
    <table class="education-table">
      <thead>
        <tr>
          <th>Degree / Certificate</th>
          <th>Institution / Board</th>
          <th>Year</th>
          <th>Performance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>B.Tech in Civil Engineering</strong></td>
          <td>Trinity Institute of Technology & Research (RGPV Bhopal)</td>
          <td>2021 – 2025</td>
          <td><strong>8.03 CGPA</strong></td>
        </tr>
        <tr>
          <td><strong>Senior Secondary (Class XII)</strong></td>
          <td>Eklavya Model Residential School, Sidhi (CBSE)</td>
          <td>2020 – 2021</td>
          <td><strong>78.8%</strong></td>
        </tr>
        <tr>
          <td><strong>Secondary (Class X)</strong></td>
          <td>Eklavya Model Residential School, Sidhi (CBSE)</td>
          <td>2018 – 2019</td>
          <td><strong>77.4%</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="page-break-avoid">
    <h2>Certifications & Honors</h2>
    <div class="skills-grid">
      <div class="skills-item">• <strong>Best Research Paper Award:</strong> PIMR Bhopal, 2024</div>
      <div class="skills-item">• <strong>AutoCAD 2D & STAAD.Pro Certified:</strong> ACADD Centre</div>
      <div class="skills-item">• <strong>Power BI for Business Applications:</strong> Microsoft Elevate & AICTE</div>
      <div class="skills-item">• <strong>30-Days Excel Course:</strong> CoursePe / Learn More Pro</div>
    </div>
  </div>

  <div class="declaration page-break-avoid">
    <div style="display: flex; justify-content: space-between; font-size: 8.8pt; color: #334155; margin-bottom: 6px;">
      <span><strong>Languages:</strong> Hindi (Native), English (Proficient)</span>
      <span><strong>Availability:</strong> Immediate Joining | Willing to relocate</span>
    </div>
    <p style="font-style: italic; color: #475569; margin: 4px 0;">"I hereby declare that the information furnished above is true to the best of my knowledge and belief."</p>
    <div class="sign-row">
      <div>
        <div>Place: <strong>Bhopal (M.P.)</strong></div>
        <div style="font-size: 8pt; color: #64748b; font-weight: normal;">Date: Available on Request</div>
      </div>
      <div style="text-align: right;">
        <div><strong>(Rajneesh Kumar Kol)</strong></div>
        <div style="font-size: 8pt; color: #64748b; font-weight: normal;">Civil Engineer</div>
      </div>
    </div>
  </div>
</body>
</html>`;
  };

  // 1. Direct Print Method with iframe fallback
  const handlePrint = () => {
    setPrintStatus('printing');

    try {
      // Remove any prior print frame
      const oldFrame = document.getElementById('rajneesh-resume-print-iframe');
      if (oldFrame) {
        oldFrame.remove();
      }

      const iframe = document.createElement('iframe');
      iframe.id = 'rajneesh-resume-print-iframe';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      iframe.setAttribute('aria-hidden', 'true');
      document.body.appendChild(iframe);

      const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
      if (frameDoc) {
        frameDoc.open();
        frameDoc.write(generateFullResumeHTML(false));
        frameDoc.close();

        setTimeout(() => {
          try {
            iframe.contentWindow?.focus();
            iframe.contentWindow?.print();
            setPrintStatus('ready');
          } catch (err) {
            console.warn('Iframe print blocked, falling back to window.print()', err);
            window.print();
            setPrintStatus('ready');
          }
        }, 350);
      } else {
        window.print();
        setPrintStatus('ready');
      }
    } catch (e) {
      console.warn('Print invocation error, calling standard window.print()', e);
      window.print();
      setPrintStatus('ready');
    }
  };

  // 2. Open Clean Printable Resume in New Browser Tab (Bypasses iframe sandbox)
  const handleOpenInNewTab = () => {
    const html = generateFullResumeHTML(true);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    
    // Create an anchor tag with target="_blank"
    const link = document.createElement('a');
    link.href = blobUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 60000);
  };

  // 3. Download Standalone Resume File (Opens in any browser/Word and prints cleanly)
  const handleDownloadFile = () => {
    const html = generateFullResumeHTML(false);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rajneesh_Kumar_Kol_Resume_Bhopal.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="resume-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="resume-modal-card relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex flex-col gap-3 px-5 py-3.5 border-b border-slate-800 bg-slate-950">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <div>
                <span className="font-display font-semibold text-sm sm:text-base text-white block">
                  Official Printable Resume — Rajneesh Kumar Kol
                </span>
                <span className="text-xs text-slate-400">
                  Civil Engineer · Bhopal, M.P. · Ready for A4 Print & PDF Download
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Button 1: Direct Print */}
              <button
                onClick={handlePrint}
                type="button"
                id="resume-print-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-md transition-all active:scale-95"
                title="Print directly using browser dialog"
              >
                <Printer className="w-4 h-4" />
                <span>{printStatus === 'printing' ? 'Opening...' : 'Print / Save PDF'}</span>
              </button>

              {/* Button 2: Open in New Tab (Guaranteed print outside iframe) */}
              <button
                onClick={handleOpenInNewTab}
                type="button"
                id="resume-newtab-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-sm transition-all hover:text-white"
                title="Open resume in full new browser tab where print always works"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open in New Tab</span>
              </button>

              {/* Button 3: Download Offline Resume File */}
              <button
                onClick={handleDownloadFile}
                type="button"
                id="resume-download-btn"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-sm transition-all hover:text-white"
                title="Download self-contained offline resume file"
              >
                {downloaded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Saved!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download File</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                aria-label="Close resume preview"
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Helpful Tip in Hindi & English for users experiencing iframe print blocks */}
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Help:</strong> Agar aapke browser ya preview screen par direct print dialog na khule, toh 
              <button onClick={handleOpenInNewTab} className="text-cyan-300 underline font-semibold mx-1 hover:text-cyan-200">Open in New Tab</button> 
              ya 
              <button onClick={handleDownloadFile} className="text-emerald-300 underline font-semibold mx-1 hover:text-emerald-200">Download File</button> 
              par click karein — wahan se 1-click me clean PDF print aur save ho jata hai.
            </span>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="overflow-y-auto p-3 sm:p-6 md:p-8 bg-slate-900/60 print:p-0 print:bg-white">
          <div
            id="printable-resume"
            className="w-full max-w-3xl mx-auto bg-white text-slate-900 shadow-2xl rounded-xl p-6 sm:p-9 border border-slate-200/90 space-y-5 print:shadow-none print:border-none print:p-0 print:rounded-none print:space-y-4"
          >
            {/* Header */}
            <div className="border-b-2 border-slate-800 pb-3.5 space-y-1.5 print-page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-slate-950 uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-xs sm:text-sm font-display font-bold text-sky-800 uppercase tracking-wide">
                  CIVIL ENGINEER (B.Tech RGPV 2025 · 8.03 CGPA)
                </span>
              </div>

              {/* Contacts Bar */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-700 font-medium pt-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </span>
                <span className="text-slate-400">•</span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phones[0].replace(/[^0-9+]/g, '')}`} className="font-semibold text-slate-900 hover:underline">
                    {PERSONAL_INFO.phones[0]}
                  </a>
                </span>
                <span className="text-slate-400">•</span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </span>
                <span className="text-slate-400">•</span>
                <span className="inline-flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">
                    {PERSONAL_INFO.linkedinDisplay}
                  </a>
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-1 print-page-break-avoid">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-0.5">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Core Technical Skills */}
            <div className="space-y-1.5 print-page-break-avoid">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-0.5">
                CORE TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-800">
                <div className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Structural Analysis & Design:</strong> STAAD.Pro (Beams, Columns, Foundations, Load Distribution, Deflection)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Technical Drafting & Detailing:</strong> AutoCAD 2D (Architectural Plans, Elevations, Sections, Schedules)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Codes & Standards:</strong> IS 456 (Plain/Reinforced Concrete), IS 875 (Design Loads), IS 1893</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Site Execution & Estimation:</strong> Drawing Interpretation, Material Takeoff, Site Coordination, BBS Basics</span>
                </div>
                <div className="flex items-start gap-1.5 sm:col-span-2">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Computational & Office Tools:</strong> Basic Excel (Site Measurement Sheets, Data Entry, Progress Logs, Basic Formulas), Microsoft Power BI</span>
                </div>
              </div>
            </div>

            {/* Practical Training / Internships */}
            <div className="space-y-2.5 print-page-break-avoid">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-0.5">
                PRACTICAL TRAINING & INTERNSHIPS
              </h2>

              <div className="space-y-2 text-xs text-slate-800">
                {/* STAAD Pro Training */}
                <div className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                    <span>STAAD.Pro Structural Design Trainee — ACADD Centre</span>
                    <span className="text-[11px] font-mono text-sky-800">Aug 2023 – Sep 2023</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                    <li>Modeled and analyzed multi-storey reinforced concrete structural frames using STAAD.Pro.</li>
                    <li>Executed dead and live load assignments, evaluated bending moment envelopes, and verified deflection limits per IS design codes.</li>
                  </ul>
                </div>

                {/* AutoCAD 2D Training */}
                <div className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                    <span>AutoCAD 2D Drafting & Detailing Trainee — ACADD Centre</span>
                    <span className="text-[11px] font-mono text-sky-800">Apr 2024 – May 2024</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                    <li>Drafted construction-ready 2D architectural plans, building elevations, and structural cross-sections.</li>
                    <li>Utilized layer management protocols, dimensioning standards, coordinate grids, and opening schedules for site supervisors.</li>
                  </ul>
                </div>

                {/* Innovate Intern */}
                <div className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                    <span>Data Science & Analytics Intern — Innovate Intern</span>
                    <span className="text-[11px] font-mono text-sky-800">May 2024 – Jul 2024 (12 Weeks)</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                    <li>Research Project: <em>"Predictive Modeling for Road Traffic Management"</em>.</li>
                    <li>Organized and processed multi-point roadway volume datasets in Excel, analyzing peak congestion windows and signaling suggestions.</li>
                  </ul>
                </div>

                {/* Edunet Foundation */}
                <div className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                    <span>Emerging Tech & Data Intern — Edunet & Connecting Dreams Foundation</span>
                    <span className="text-[11px] font-mono text-sky-800">Jun 2024 – Jul 2024</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                    <li>National initiative supported by AICTE and Vodafone Idea Foundation (_VOIS for Tech Program).</li>
                    <li>Trained in cloud technologies, data analytics, and digital workflows for operational problem solving.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-1.5 print-page-break-avoid">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-0.5">
                EDUCATION
              </h2>

              <div className="space-y-1.5 text-xs text-slate-800">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5">
                    <div>
                      <div className="font-semibold text-slate-900">{edu.degree}</div>
                      <div className="text-[11px] text-slate-700">{edu.institution} ({edu.universityOrBoard})</div>
                      <div className="text-[11px] font-bold text-sky-800 mt-0.5">
                        Score: {edu.grade} {edu.gradeType}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-600 shrink-0">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Honors */}
            <div className="space-y-1.5 print-page-break-avoid">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 border-b border-slate-300 pb-0.5">
                CERTIFICATIONS & AWARDS
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-800">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Best Research Paper Award:</strong> PIMR Bhopal, 2024</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>AutoCAD 2D & STAAD.Pro:</strong> Certified by ACADD Centre</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>Power BI for Business Applications:</strong> Microsoft Elevate & AICTE</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span><strong>30-Days Excel Course:</strong> CoursePe / Learn More Pro</span>
                </li>
              </ul>
            </div>

            {/* Declaration & Location (Bhopal M.P.) */}
            <div className="pt-2.5 border-t border-slate-300 space-y-1.5 print-page-break-avoid">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                <div>
                  <span className="text-slate-600 font-medium">Languages: </span>
                  <span className="font-semibold text-slate-900">Hindi (Native), English (Proficient)</span>
                </div>
                <div>
                  <span className="text-slate-600 font-medium">Availability: </span>
                  <span className="font-semibold text-emerald-800">Immediate Joining (Willing to relocate)</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 italic pt-0.5">
                "I hereby declare that the information furnished above is true to the best of my knowledge and belief."
              </p>

              <div className="flex justify-between items-end pt-1.5 text-xs font-semibold text-slate-800">
                <div>
                  <div>Place: <span className="text-slate-950 font-bold">Bhopal (M.P.)</span></div>
                  <div className="text-[10px] text-slate-500 font-normal">Date: Available on Request</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-950">(Rajneesh Kumar Kol)</div>
                  <div className="text-[10px] text-slate-500 font-normal">Candidate Signature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

