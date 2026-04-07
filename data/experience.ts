import { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Akivva",
    role: "Tech Lead",
    period: "Jan 2025 – Present",
    description:
      "Created the application from scratch using PHP and Laravel. Deployed to production servers, managing infrastructure and release processes. In charge of the development team and all technical decisions.",
    tech: ["PHP", "Laravel", "Linux", "Server Administration"],
  },
  {
    company: "OneMeta AI",
    role: "Software Engineer",
    period: "Oct 2023 – Mar 2026",
    description:
      "Developed a real-time communication platform with live audio/video calls, speech-to-text, and translation. Built dual-channel SIP/PSTN calling via Vonage alongside WebRTC. Refactored core UI achieving 30% code reduction and 70% readability increase.",
    tech: ["NestJS", "React", "TypeScript", "Redux", "WebRTC", "Vonage", "SIP/PSTN"],
  },
  {
    company: "Parrade",
    role: "Lead Fullstack Developer",
    period: "Feb 2023 – Sep 2023",
    description:
      "Architected a retail application from scratch using Next.js with Domain-Driven Design. Engineered the authentication layer with NextAuth.js and deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "React Relay", "NextAuth.js", "Supabase", "Vercel"],
  },
  {
    company: "Getback",
    role: "Fullstack Developer",
    period: "Dec 2021 – Aug 2022",
    description:
      "Integrated third-party APIs including Transbank, Shopify, and Magento for e-commerce functionality. Deployed a QR code scanning system to track in-store product movements in real time.",
    tech: ["PostgreSQL", "Express.js", "React", "Redux", "Shopify", "Magento"],
  },
  {
    company: "KPI Managers",
    role: "Fullstack Developer",
    period: "Jun 2020 – Oct 2021",
    description:
      "Developed a BI application following SOLID principles for PowerBI report management. Automated data synchronization between PowerBI and internal systems. Implemented session management via Redis.",
    tech: ["MySQL", "Express.js", "React", "Redux", "Redis", "PowerBI"],
  },
  {
    company: "CoinGroup",
    role: "Fullstack Developer",
    period: "Sep 2019 – Apr 2020",
    description:
      "Built a live cryptocurrency tracking application with real-time price updates using WebSockets. Integrated Binance API for wallet monitoring and trading operations.",
    tech: ["PostgreSQL", "Express.js", "Vue.js", "Socket.io"],
  },
  {
    company: "Software del Sur",
    role: "Backend Developer",
    period: "May 2018 – Jun 2019",
    description:
      "Engineered a database synchronization service ensuring data integrity across distributed systems. Integrated WhatsApp Cloud API to enhance client communication channels.",
    tech: ["Express.js", "MySQL"],
  },
];
