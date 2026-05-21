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
    name: 'Jobbr',
    description:
      'Production job-application tracker. OAuth, dashboard, task management per application, keyboard shortcuts, and a salary calculator across hour/month/year.',
    tech: ['Angular', 'Firebase', 'OAuth', 'Firestore'],
    image: '/img/portfolio/jobbr.png',
    icon: '/img/portfolio/jobbr-icon.png',
    url: 'https://jobbr-81620.web.app',
    github: 'https://github.com/tguzmani/jobbr',
    featured: true,
    status: 'live',
  },
  {
    name: 'Zaria AI',
    description:
      'Multi-channel sales agent in Python (LangChain, LangGraph, LangFuse). Tool calling for inventory lookup, lead capture, payment parsing via text and image OCR, and delivery/payment routing. Deployed as a Telegram bot.',
    tech: ['Python', 'LangChain', 'LangGraph', 'LangFuse', 'OCR', 'Telegram'],
    featured: true,
    status: 'private',
  },
  {
    name: 'Flowstate AI',
    description:
      'Scheduling agent in NestJS (LangChain, LangGraph, LangSmith). Captures leads, generates work quotes and estimates, and books jobs through tool calls.',
    tech: ['NestJS', 'LangChain', 'LangGraph', 'LangSmith', 'TypeScript'],
    featured: true,
    status: 'private',
  },
  {
    name: 'Akivva',
    description:
      'Content monetization platform for illustrators and designers targeting the US market. Built from scratch as Tech Lead.',
    tech: ['PHP', 'Laravel', 'Stripe', 'Blade', 'Livewire', 'jQuery'],
    image: '/img/portfolio/akivva.png',
    icon: '/img/portfolio/akivva-icon.svg',
    url: 'https://akivva.com/',
    featured: false,
    status: 'live',
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
