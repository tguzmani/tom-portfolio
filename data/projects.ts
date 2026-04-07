import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Billar",
    description:
      "Invoicing SaaS for SMBs. Automated billing, payment tracking, and financial reports.",
    tech: ["Flask", "Firebase", "Celery", "Redis", "Docker"],
    url: "",
    github: "",
    featured: true,
  },
  {
    name: "Vonage Contact Center",
    description:
      "Enterprise-grade contact center platform with real-time voice, video, and messaging capabilities.",
    tech: ["React", "Redux", "WebRTC", "WebSockets", "Node.js"],
    url: "",
    github: "",
    featured: true,
  },
  {
    name: "Portfolio",
    description:
      "This site. Built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "",
    github: "https://github.com/tomasg/tom-portfolio",
    featured: false,
  },
];
