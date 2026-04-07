# tom-portfolio

Personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **Framer Motion** for scroll animations
- **Geist** font family
- **Lucide** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app          — Layout, page, and global styles
/components   — UI components (Hero, About, Experience, etc.)
/data         — All content (personal info, experience, projects, skills)
/public       — Static assets (cv.pdf)
```

All content is driven by the `/data` directory — edit there without touching components.

## Deploy

Deploy on [Vercel](https://vercel.com):

```bash
npm run build
```
