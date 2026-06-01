export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full-Stack' | 'Frontend' | 'Database' | 'All';
  features: string[];
  techUsed: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  details: string[];
  activities?: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}
