import { Project } from './types'

export const projects: Project[] = [
  {
    name: 'Talkive',
    description:
      'Platform for scheduling, paying, and managing English lessons. Microservices architecture with real-time scheduling and payment processing.',
    tech: ['Next.js', 'NestJS', 'Nx', 'Supabase', 'PostgreSQL', 'Stripe'],
    url: 'https://talkive.co',
    featured: true,
    status: 'live',
  },
  {
    name: 'Akivva',
    description:
      'Content monetization platform for illustrators and designers targeting the US market. Built from scratch as Tech Lead.',
    tech: ['PHP', 'Laravel', 'Stripe', 'Blade', 'Livewire', 'jQuery'],
    image: '/img/portfolio/akivva.png',
    icon: '/img/portfolio/akivva-icon.svg',
    featured: true,
    status: 'live',
    url: 'https://akivva.com/',
  },
  {
    name: 'Jobbr',
    description:
      'Job application tracker with OAuth authentication and real-time updates.',
    tech: ['Angular', 'Firebase', 'OAuth', 'Firestore'],
    image: '/img/portfolio/jobbr.png',
    icon: '/img/portfolio/jobbr-icon.png',
    url: 'https://jobbr-81620.web.app',
    github: 'https://github.com/tguzmani/jobbr',
    featured: true,
    status: 'live',
  },
  {
    name: 'Billar',
    description:
      'Invoicing SaaS for SMBs. Automated billing, payment tracking, and event-driven PDF generation.',
    tech: ['Flask', 'Firebase', 'Celery', 'Redis', 'Docker'],
    featured: false,
    status: 'coming-soon',
  },
  {
    name: 'Tom-Finances-Bot',
    description:
      'Personal finance Telegram bot with bank integrations, crypto tracking, OCR receipt scanning, LLM-powered insights, and automated charts.',
    tech: ['Telegram', 'Binance API', 'OCR', 'LLMs', 'Charts', 'Node.js'],
    featured: false,
    status: 'private',
  },
  {
    name: 'Portfolio',
    description:
      'This site. Built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tguzmani/tom-portfolio',
    icon: '/img/portfolio/portfolio-icon.svg',
    featured: false,
    status: 'live',
  },
]
