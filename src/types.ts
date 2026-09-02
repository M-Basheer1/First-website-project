export interface ProjectMetric {
  label: string;
  value: string;
  trend?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full-Stack' | 'Data & BI' | 'Financial Analysis';
  description: string;
  keyMetric: string;
  metrics: ProjectMetric[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
  accentBg: string;
  highlights: string[];
  thumbnailType: 'fintech' | 'bi-dashboard' | 'valuation-engine';
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Advanced', 'Production-grade', 'Expert'
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'certification';
  summary: string;
  impactMetrics?: string;
  achievements: string[];
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface RecruiterQuickGlance {
  label: string;
  value: string;
  subtext: string;
}
