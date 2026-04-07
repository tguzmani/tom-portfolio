import { Project } from './types'

export const projects: Project[] = [
  {
    name: 'Talkive',
    description:
      'Platform for scheduling, paying, and managing English lessons. Microservices architecture with real-time scheduling and payment processing.',
    tech: ['Next.js', 'NestJS', 'Nx', 'Supabase', 'PostgreSQL', 'Stripe'],
    image: '/img/projects/talkive.png',
    featured: true,
    status: 'coming-soon',
  },
  {
    name: 'Akivva',
    description:
      'Content monetization platform for illustrators and designers targeting the US market. Built from scratch as Tech Lead.',
    tech: ['PHP', 'Laravel', 'Stripe', 'Blade', 'Livewire', 'jQuery'],
    image: '/img/projects/akivva.png',
    featured: true,
    status: 'live',
    url: 'https://akivva.com/',
  },
  {
    name: 'Billar',
    description:
      'Invoicing SaaS for SMBs. Automated billing, payment tracking, and event-driven PDF generation.',
    tech: ['Flask', 'Firebase', 'Celery', 'Redis', 'Docker'],
    image: '/img/projects/billar.png',
    featured: true,
    status: 'coming-soon',
  },
  {
    name: 'Jobbr',
    description:
      'Job application tracker with OAuth authentication and real-time updates.',
    tech: ['Angular', 'Firebase', 'OAuth', 'Firestore'],
    image: '/img/projects/jobbr.png',
    featured: false,
    status: 'live',
  },
  {
    name: 'Tom-Finances-Bot',
    description:
      'Personal finance Telegram bot with bank integrations, crypto tracking, OCR receipt scanning, LLM-powered insights, and automated charts.',
    tech: ['Telegram', 'Binance API', 'OCR', 'LLMs', 'Charts', 'Node.js'],
    image: '/img/projects/finances-bot.png',
    featured: false,
    status: 'private',
  },
  {
    name: 'Portfolio',
    description:
      'This site. Built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tguzmani/tom-portfolio',
    image: '/img/projects/portfolio.png',
    featured: false,
    status: 'live',
  },
]
