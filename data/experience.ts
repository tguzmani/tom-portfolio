import { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Akivva",
    role: "Tech Lead",
    period: "Jan 2025 – Present",
    description:
      "Architected and built a creator economy platform from scratch using PHP and Laravel. Deployed and managed production servers, establishing CI/CD pipelines and release processes. Integrated Stripe payment processing for creator monetization.",
    tech: ["PHP", "Laravel", "Stripe", "Livewire", "Linux", "Server Administration"],
  },
  {
    company: "OneMeta AI",
    role: "Software Engineer",
    period: "Oct 2023 – Mar 2026",
    description:
      "Developed a real-time communication platform supporting 20-50 concurrent users with live audio/video calls, speech-to-text, and translation. Refactored core UI achieving 30% code reduction and 70% readability increase across 50+ components. Built custom React hooks reducing component complexity by ~50%.",
    tech: ["NestJS", "React", "TypeScript", "Redux", "WebRTC", "Vonage", "SIP/PSTN", "WebSockets", "Redis"],
  },
  {
    company: "Parrade",
    role: "Lead Software Engineer",
    period: "Feb 2023 – Sep 2023",
    description:
      "Architected a retail application from scratch using Next.js with Domain-Driven Design, delivering MVP in under 3 weeks. Engineered the authentication layer with NextAuth.js and OAuth 2.0. Deployed on Vercel with automated CI/CD.",
    tech: ["Next.js", "React", "TypeScript", "React Relay", "NextAuth.js", "Supabase", "Vercel"],
  },
  {
    company: "Getback",
    role: "Software Engineer",
    period: "Dec 2021 – Aug 2022",
    description:
      "Integrated 5+ third-party APIs including Transbank, Shopify, and Magento for e-commerce payment and catalog functionality. Deployed a QR code scanning system for tracking in-store product movements in real time. Resolved 30+ critical bugs improving platform stability.",
    tech: ["PostgreSQL", "Express.js", "React", "Redux", "Shopify", "Magento", "Transbank"],
  },
  {
    company: "KPI Managers",
    role: "Software Engineer",
    period: "Jun 2020 – Oct 2021",
    description:
      "Developed a BI application following SOLID principles, serving 50+ enterprise users for PowerBI report management. Automated data synchronization between PowerBI and internal systems. Implemented Redis session management, cutting page load times by 35%.",
    tech: ["MySQL", "Express.js", "React", "Redux", "Redis", "PowerBI"],
  },
  {
    company: "CoinGroup",
    role: "Software Engineer",
    period: "Sep 2019 – Apr 2020",
    description:
      "Built a live cryptocurrency tracking application with real-time price updates via WebSockets, serving 500+ daily users. Integrated Binance API for wallet monitoring and automated trading operations across 20+ cryptocurrency pairs.",
    tech: ["PostgreSQL", "Express.js", "Vue.js", "Socket.io", "WebSockets", "Binance API"],
  },
  {
    company: "Software del Sur",
    role: "Backend Developer",
    period: "May 2018 – Jun 2019",
    description:
      "Engineered a database synchronization service ensuring data integrity across 3 distributed systems with 99.5% uptime. Integrated WhatsApp Cloud API, automating client communications and reducing response time by 60%.",
    tech: ["Express.js", "MySQL", "REST APIs", "WhatsApp Cloud API"],
  },
];
