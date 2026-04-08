export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  available: boolean;
  about: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
  icon?: string;
  featured: boolean;
  status: "live" | "coming-soon" | "private";
}

export type Skills = Record<string, string[]>;

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
