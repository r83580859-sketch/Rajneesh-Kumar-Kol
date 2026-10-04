import { Project, Experience, Certification, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Rajneesh Kumar Kol',
  title: 'Civil Engineer (B.Tech RGPV 2025)',
  secondaryTitle: 'AutoCAD 2D · STAAD.Pro · Basic Excel & Power BI',
  email: 'rawatrajneesh1289@gmail.com',
  phones: ['+91 95228-08468', '+91 78791-39116'],
  linkedin: 'https://linkedin.com/in/rajneesh-kumar-kol-866727249',
  linkedinDisplay: 'linkedin.com/in/rajneesh-kumar-kol-866727249',
  location: 'Bhopal, Madhya Pradesh, India',
  summary:
    'Civil Engineering graduate (B.Tech, RGPV Bhopal, 2025, 8.03 CGPA) trained in structural analysis fundamentals (STAAD.Pro), technical drafting (AutoCAD 2D), and practical data tools (Basic Excel, Power BI). Ready to contribute as a Site Engineer or Structural Design Trainee with honest dedication, IS code adherence, and disciplined field work.',
  objective:
    'Seeking an entry-level core Civil Engineering role — Site Engineer / Structural Design Trainee — to apply practical fundamentals in structural analysis, drafting, site coordination, and basic spreadsheet records for safe and code-compliant construction projects.',
  availability: 'Available for Immediate Joining',
  mobility: 'Willing to relocate / work at active site locations across India',
  languages: [
    { language: 'Hindi', proficiency: 'Proficient / Native' },
    { language: 'English', proficiency: 'Working / Professional' },
  ],
  stats: [
    { label: 'B.Tech CGPA', value: '8.03', sub: 'RGPV Bhopal (2025)' },
    { label: 'Core Tools', value: 'STAAD + CAD', sub: 'Certified ACADD' },
    { label: 'Research Honor', value: 'Best Paper', sub: 'PIMR Bhopal 2024' },
    { label: 'Data Science', value: '12-Wk Intern', sub: 'Innovate Intern' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Civil & Structural Engineering',
    description: 'Structural modeling, technical detailing, code compliance, and on-site engineering fundamentals.',
    iconName: 'Building2',
    skills: [
      {
        name: 'STAAD.Pro',
        level: 'Trained (Basic Modeling)',
        description: 'Modeling of beams, columns, and foundations; load calculations, stress analysis, and deflection checks.',
        tag: 'Structural Analysis',
      },
      {
        name: 'AutoCAD 2D',
        level: 'Certified Trainee',
        description: 'Architectural and structural drafting, plans, elevations, section views, detailing, and dimensioning.',
        tag: 'CAD Drafting',
      },
      {
        name: 'Load & Stress Calculation',
        level: 'Academic Fundamentals',
        description: 'Dead, live, and environmental load distribution; structural safety compliance with Indian Standard (IS) codes.',
        tag: 'IS Codes',
      },
      {
        name: 'Site Coordination & Execution',
        level: 'Entry / Field Ready',
        description: 'Support for on-site civil execution, material verification, drawing interpretation, and field coordination.',
        tag: 'Site Engineering',
      },
      {
        name: 'Quantity & Estimation',
        level: 'Fundamentals',
        description: 'Material takeoff, basic BBS (bar bending schedule), concrete volume calculations, and site documentation.',
        tag: 'Estimation',
      },
    ],
  },
  {
    title: 'Computational & Data Tools',
    description: 'Basic spreadsheet records, site measurement sheets, and introductory business intelligence.',
    iconName: 'BarChart3',
    skills: [
      {
        name: 'Basic Excel',
        level: 'Basic / Practical',
        description: 'Site measurement sheets, data entry, basic formulas (SUM, AVERAGE, IF), formatting, tables, and daily progress logs.',
        tag: 'Spreadsheets',
      },
      {
        name: 'Microsoft Power BI',
        level: 'Course Completed',
        description: 'Building introductory reports, KPI dashboards, and business application dashboards with Microsoft Elevate.',
        tag: 'Business Intelligence',
      },
    ],
  },
  {
    title: 'Visual Presentation & Creative Layouts',
    description: 'Clean visual presentations, mockups, posters, and digital graphics.',
    iconName: 'Palette',
    skills: [
      {
        name: 'AI Tools & Workflows',
        level: 'Basic Hands-on',
        description: 'Leveraging modern visual tools to assist in concept ideation and presentation layouts.',
        tag: 'Digital Tools',
      },
      {
        name: 'Canva & Graphic Detailing',
        level: 'Practical',
        description: 'Designing posters, presentation collateral, social creatives, and clean layout hierarchies.',
        tag: 'Graphic Design',
      },
      {
        name: 'Product & Apparel Mockups',
        level: 'Basic / Practical',
        description: 'Clean presentation mockups (t-shirts, merchandise) for creative and promotional purposes.',
        tag: 'Mockups',
      },
      {
        name: 'Typography & Layouts',
        level: 'Practical',
        description: 'Clean font pairings, visual alignment, vector marks, and presentation artwork.',
        tag: 'Visual Design',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'staad-structural-analysis',
    title: 'Multi-Story Structural Frame Modeling & Analysis',
    category: 'civil',
    subtitle: 'Beam, column, and foundation structural analysis using STAAD.Pro',
    description:
      'Engineered a complete multi-storey framed structure model in STAAD.Pro. Carried out comprehensive dead and live load assignments, analyzed moment distributions, performed shear and axial stress checks, and evaluated deflection limits to ensure full compliance with Indian Standard building codes.',
    tools: ['STAAD.Pro', 'Structural Analysis', 'IS 456', 'IS 875', 'Load Calculations'],
    highlights: [
      'Modeled 3D skeletal frame containing beams, columns, and foundation nodes.',
      'Calculated bending moment envelopes and axial load distributions across all structural members.',
      'Verified serviceability limit states for maximum permissible deflections.',
      'Ensured safety compliance and structural redundancy under peak design load combinations.',
    ],
    metricsOrOutcome: 'Verified structural integrity under peak dead/live load combinations with zero design violations.',
    badge: 'Core Civil Project',
  },
  {
    id: 'autocad-civil-drafting',
    title: 'Comprehensive Civil Construction Drafting & Detailing',
    category: 'civil',
    subtitle: 'Precision 2D architectural plans, elevations, sections & schedules',
    description:
      'Developed detailed, construction-ready 2D technical drawings at ACADD Centre. Produced complete architectural floor layouts, structural grid alignment plans, wall sections, door-window schedules, and staircase detailing adhering to standard CAD drafting protocols.',
    tools: ['AutoCAD 2D', 'Architectural Detailing', 'Section Drafting', 'Dimensioning'],
    highlights: [
      'Drafted multi-layer CAD layouts with strict adherence to line-weight hierarchies and dimensioning standards.',
      'Created cross-sectional views showing slab reinforcement positions, lintels, and plinth levels.',
      'Generated opening schedules and coordinate grids to facilitate smooth on-site execution.',
      'Implemented layer management systems for seamless handoff to site engineers.',
    ],
    metricsOrOutcome: 'Fully coordinated 2D drawing set prepared for site contractor review and municipal approval.',
    badge: 'ACADD Certified',
  },
  {
    id: 'traffic-predictive-modeling',
    title: 'Predictive Modeling for Road Traffic Management',
    category: 'data',
    subtitle: '12-Week data science internship research project at Innovate Intern',
    description:
      'Conducted an in-depth data-driven investigation into urban roadway traffic patterns during a 12-week internship. Collected, cleaned, and processed multi-point vehicle count datasets, applied statistical forecasting and machine learning regression to identify bottlenecks, and proposed data-backed signaling intervals.',
    tools: ['Basic Excel', 'Data Analysis', 'Statistical Models', 'Traffic Flow Analysis', 'Reporting'],
    highlights: [
      'Extracted, cleaned, and normalized real-world traffic volume time-series datasets.',
      'Applied statistical regression and predictive algorithms to identify recurring peak congestion windows.',
      'Correlated geometric roadway capacity with observed vehicular densities.',
      'Delivered actionable recommendations for signal phasing and congestion abatement.',
    ],
    metricsOrOutcome: 'Identified key peak bottleneck hours and proposed signal adjustments with high predictive consistency.',
    badge: '12-Week Internship',
  },
  {
    id: 'power-bi-business-app',
    title: 'Business Applications & Performance Dashboard',
    category: 'data',
    subtitle: 'Interactive analytics and KPI tracking built under Microsoft Elevate',
    description:
      'Constructed dynamic business intelligence dashboards utilizing Power BI. Configured data relationships, calculated key performance indicators (KPIs), built interactive drill-down slicers, and generated visual summaries for stakeholders.',
    tools: ['Power BI', 'Microsoft Elevate', 'Data Modeling', 'DAX Formulas', 'Data Visualization'],
    highlights: [
      'Modeled multi-table relational datasets with clean primary/foreign key connections.',
      'Authored custom DAX measures for variance analysis, period-over-period trends, and target tracking.',
      'Constructed intuitive visual hierarchies enabling executives to filter across dimensions in one click.',
    ],
    metricsOrOutcome: 'Completed under the Microsoft Elevate 20-hour certified program.',
    badge: 'Microsoft Elevate',
  },
  {
    id: 'creative-designs-logo',
    title: '"Creative Designs" Personal Brand Identity',
    category: 'creative',
    subtitle: 'Monogram logo combining "C/D" mark with precision pen nib',
    description:
      'Crafted a luxurious gold and silver monogram identity that seamlessly unifies the letters "C" and "D" with the silhouette of a precision technical pen nib. Built to represent the fusion of technical drafting precision and artistic craftsmanship.',
    tools: ['Generative AI', 'Canva', 'Vector Styling', 'Monogram Design'],
    highlights: [
      'Integrated typographic curves with geometric pen nib geometry.',
      'Engineered high-contrast metallic gradients suited for digital and foil-stamped print.',
      'Designed a versatile lockup that scales from mobile favicons to large display signboards.',
    ],
    metricsOrOutcome: 'Final vector identity utilized for personal branding and digital showcase.',
    badge: 'Brand Identity',
  },
  {
    id: 'powerzone-fitness-poster',
    title: 'PowerZone Fitness — Commercial Promotion Poster',
    category: 'creative',
    subtitle: 'High-contrast promotional campaign for a modern fitness facility',
    description:
      'Conceived and designed an energetic gym promotional poster featuring the theme "Discipline Today, Strength Tomorrow". Structured with a dynamic typographic hierarchy, highlight benefit cards, membership pricing CTA, and complete contact details.',
    tools: ['Canva', 'AI Image Styling', 'Visual Hierarchy', 'Poster Design'],
    highlights: [
      'Balanced aggressive athletic imagery with clean, scannable offer bullet points.',
      'Crafted high-contrast callouts for maximum legibility from street and digital feeds.',
      'Structured full social handles and contact grid ready for print distribution.',
    ],
    metricsOrOutcome: 'Commercial-ready promotional poster optimized for print and social feeds.',
    badge: 'Marketing Design',
  },
  {
    id: 'bhainsarha-cricket-jersey',
    title: 'Bhainsarha Cricket Club — Custom Sublimation Jersey',
    category: 'creative',
    subtitle: 'Full front & back technical team sportswear apparel design',
    description:
      'Engineered a complete sportswear uniform package for Bhainsarha Cricket Club. Features a vibrant royal blue and gold gradient, bespoke club crest with crossed bats, geometric shoulder motifs, sponsor chest placement, and customized player name and squad number 07 on the reverse.',
    tools: ['Apparel Mockup', 'Sublimation Layout', 'Vector Crest', 'Sportswear'],
    highlights: [
      'Developed custom team crest featuring traditional cricketing heraldry.',
      'Balanced sponsor logotypes with player identifier numbers for high visibility on the field.',
      'Rendered in realistic 3D sportswear mockups illustrating fabric drape and seam contours.',
    ],
    metricsOrOutcome: 'Approved team kit ready for sublimation production.',
    badge: 'Merch & Apparel',
  },
  {
    id: 'news-adda-merch',
    title: 'News Adda — Merchandise & Apparel Branding',
    category: 'creative',
    subtitle: 'Premium media brand t-shirt placement on heavyweight cotton mockup',
    description:
      'Created an understated, high-impact apparel merchandise line for the "News Adda" media entity. Focused on bold logo embroidery placement on matte black premium cotton t-shirts, complemented by subtle sleeve tag branding.',
    tools: ['Product Mockup', 'Canva', 'Brand Application', 'Merchandise'],
    highlights: [
      'Positioned high-contrast red and yellow brand badge against deep black textiles.',
      'Simulated true-to-life fabric textures, shadows, and collar ribbing.',
      'Created retail-grade merchandise visuals for promotional giveaways and staff uniforms.',
    ],
    metricsOrOutcome: 'Selected for brand team merchandise catalog.',
    badge: 'Brand Merch',
  },
  {
    id: 'stay-rare-typography',
    title: '"Stay Rare" — Vintage Hand-Lettering Artwork',
    category: 'creative',
    subtitle: 'Vintage-style typography designed for print-on-demand streetwear',
    description:
      'Designed a distinctive, gothic-inspired hand-lettered typographic composition centered on the mantra "Stay Rare". Features ornate serifs, diamond filigree accents, and balanced symmetrical flourishes built for dark-garment printing.',
    tools: ['Generative AI', 'Vector Art', 'Print-on-Demand', 'Typography'],
    highlights: [
      'Constructed bold, custom ornamental letterforms with sharp geometric terminals.',
      'Optimized for high-density screen printing and direct-to-garment (DTG) execution.',
    ],
    metricsOrOutcome: 'High-resolution print-ready artwork for apparel drops.',
    badge: 'Streetwear Graphic',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'acadd-staad',
    role: 'STAAD.Pro Structural Design Trainee',
    organization: 'ACADD Centre',
    location: 'Training Centre',
    period: 'Aug 2023 – Sep 2023',
    category: 'structural',
    description: [
      'Modeled, configured, and analyzed complex reinforced concrete skeletal structures using STAAD.Pro.',
      'Carried out detailed load distribution calculations including dead loads, imposed live loads, and structural self-weight.',
      'Conducted stress analysis, moment distribution checks, and deflection verifications ensuring safety compliance with Indian Standard (IS) codes.',
      'Generated structural reports detailing member forces, nodal displacements, and reinforcement requirement guidelines.',
    ],
    skills: ['STAAD.Pro', 'Structural Analysis', 'IS Codes', 'Stress Checks', 'Beams & Columns'],
  },
  {
    id: 'acadd-cad',
    role: 'AutoCAD 2D Drafting & Detailing Trainee',
    organization: 'ACADD Centre',
    location: 'Training Centre',
    period: 'Apr 2024 – May 2024',
    category: 'cad',
    description: [
      'Drafted precise 2D architectural working drawings, building elevations, and structural cross-sections.',
      'Utilized standard dimensioning, layer management, and block libraries to produce construction-ready documentation.',
      'Coordinated beam-column layout grids and opening schedules for seamless interpretation by site supervisors.',
      'Developed strong spatial visualization and understanding of practical site construction clearances.',
    ],
    skills: ['AutoCAD 2D', 'Architectural Drafting', 'Structural Detailing', 'Layer Management', 'Section Views'],
  },
  {
    id: 'innovate-intern',
    role: 'Data Science & Analytics Intern',
    organization: 'Innovate Intern',
    location: 'Chennai, Tamil Nadu (Remote)',
    period: 'May 2024 – Jul 2024 (12 Weeks)',
    category: 'analytics',
    description: [
      'Completed a rigorous 12-week internship focusing on statistical analysis, data cleaning, and traffic pattern modeling.',
      'Spearheaded research project: "Predictive Modeling for Road Traffic Management" analyzing multi-point traffic flow data.',
      'Applied predictive regression and trend models to uncover urban traffic bottlenecks and forecast peak congestion windows.',
      'Structured clean datasets in Excel and visual reports communicating technical insights clearly to mentors.',
    ],
    skills: ['Data Analysis', 'Basic Excel', 'Predictive Modeling', 'Traffic Analysis', 'Reporting'],
  },
  {
    id: 'edunet-foundation',
    role: 'AI & Cloud Technology Intern',
    organization: 'Edunet Foundation & Connecting Dreams Foundation',
    location: 'AICTE & _VOIS for Tech Program · Vodafone Idea Foundation',
    period: 'Jun 2024 – Jul 2024',
    category: 'analytics',
    description: [
      'Selected for prestigious national program supported by AICTE and Vodafone Idea Foundation.',
      'Trained in emerging AI, Cloud computing architectures, and digital data processing workflows.',
      'Collaborated on data-driven problem sets, applying modern analytical workflows to solve operational challenges.',
    ],
    skills: ['AI & Cloud', 'Data Analytics', 'Basic Excel', 'Digital Workflows', 'AICTE Program'],
  },
  {
    id: 'skillcourse-excel',
    role: 'Excel Basics Course Trainee',
    organization: 'skillcourse.in / Learn More Pro (CoursePe)',
    location: 'Online Course',
    period: 'Completed Oct 2023',
    category: 'analytics',
    description: [
      'Completed 30-day foundational course covering Microsoft Excel for data entry and calculation.',
      'Practiced working with basic tables, cell formatting, SUM/AVERAGE formulas, and daily reporting sheets.',
      'Applied basic spreadsheets to organize site measurement entries and material lists.',
    ],
    skills: ['MS Excel (Basic)', 'Data Entry', 'Basic Formulas', 'Tables & Formatting', 'Progress Logs'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-award-pimr',
    title: 'Best Research Paper Award',
    issuer: 'PIMR Bhopal (Prestige Institute of Management & Research)',
    date: '2024',
    category: 'award',
    description:
      'Conferred the Best Research Paper Award at PIMR Bhopal for academic research methodology and student conference presentation.',
    badgeText: 'Academic Honor',
  },
  {
    id: 'cert-cad-staad',
    title: 'Certified in AutoCAD 2D & STAAD.Pro',
    issuer: 'ACADD Centre',
    program: 'Structural Analysis & CAD Drafting Training',
    date: '2023 – 2024',
    category: 'civil',
    description:
      'Hands-on practical training certificate covering 2D civil drafting, beam/column modeling, basic load checks, and drafting guidelines.',
    badgeText: 'Course Certificate',
  },
  {
    id: 'cert-power-bi',
    title: 'Power BI for Business Applications',
    issuer: 'Microsoft Elevate & AICTE',
    program: '20-Hour Introductory Course',
    date: 'Completed 2024',
    category: 'data',
    description:
      'Course completion credential from Microsoft Elevate & AICTE covering introductory business intelligence concepts and dashboard creation.',
    badgeText: 'Course Certificate',
  },
  {
    id: 'cert-innovate-intern',
    title: '12-Week Data Science & Analytics Certificate',
    issuer: 'Innovate Intern',
    program: 'Predictive Modeling for Road Traffic Management',
    date: 'May 2024 – Jul 2024',
    category: 'data',
    description:
      'Completed 12-week student internship working on road traffic datasets, basic tabular processing, and project documentation.',
    badgeText: 'Internship Certificate',
  },
  {
    id: 'cert-vodafone-vois',
    title: 'Data Analytics & Emerging Tech Internship',
    issuer: 'Connecting Dreams Foundation & Vodafone Idea Foundation',
    program: 'AICTE & _VOIS for Tech Program',
    date: 'Jun 2024 – Jul 2024',
    category: 'data',
    description:
      'Awarded upon completion of the collaborative tech awareness initiative by Vodafone Idea Foundation and AICTE.',
    badgeText: '_VOIS for Tech',
  },
  {
    id: 'cert-excel',
    title: '30-Days Excel Crash Course Certification',
    issuer: 'CoursePe / Learn More Pro',
    program: 'Basic Spreadsheet & Data Entry Course',
    date: 'Completed Oct 9, 2023',
    category: 'data',
    description:
      'Certificate in basic spreadsheet operations, fundamental arithmetic formulas, data entry, and simple tabular summaries.',
    badgeText: 'Excel Certificate',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'Bachelor of Technology (B.Tech) in Civil Engineering',
    institution: 'Trinity Institute of Technology & Research, Bhopal',
    universityOrBoard: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    period: 'Oct 2021 – May 2025',
    grade: '8.03',
    gradeType: 'CGPA',
    coursework:
      'Structural Analysis, Concrete Technology, Surveying, Geotechnical Engineering, Transportation Engineering, Fluid Mechanics, Quantity Surveying & Costing.',
  },
  {
    id: 'edu-12th',
    degree: 'Higher Secondary School Certificate (Class XII)',
    institution: 'Eklavya Model Residential School, Tausar, Sidhi (M.P.)',
    universityOrBoard: 'Central Board of Secondary Education (CBSE)',
    period: 'Jun 2020 – Jul 2021',
    grade: '78.8%',
    gradeType: 'Percentage',
    coursework: 'Physics, Chemistry, Mathematics (PCM Stream), Computer Science.',
  },
  {
    id: 'edu-10th',
    degree: 'High School Certificate (Class X)',
    institution: 'Eklavya Model Residential School, Tausar, Sidhi (M.P.)',
    universityOrBoard: 'Central Board of Secondary Education (CBSE)',
    period: 'Jun 2018 – Jul 2019',
    grade: '77.4%',
    gradeType: 'Percentage',
    coursework: 'Science, Mathematics, Social Sciences, English, Hindi.',
  },
];
