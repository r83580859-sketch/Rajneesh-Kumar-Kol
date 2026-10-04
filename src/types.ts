export interface Project {
  id: string;
  title: string;
  category: 'civil' | 'creative' | 'data';
  subtitle: string;
  description: string;
  tools: string[];
  highlights: string[];
  metricsOrOutcome?: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  category: 'structural' | 'analytics' | 'cad';
  description: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  program?: string;
  date: string;
  category: 'civil' | 'data' | 'award';
  description: string;
  badgeText?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  universityOrBoard: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  coursework?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    tag: string;
  }[];
}
