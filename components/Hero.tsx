import { Mail, Download } from "lucide-react";
import { personal } from "@/data";
import FadeIn from "./FadeIn";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          {personal.available && (
            <div className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400 mb-6 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for work
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-5">
            <img
              src="/tom-pp.png"
              alt={personal.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {personal.name}
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-3 text-lg sm:text-xl text-neutral-700 dark:text-neutral-400">
            {personal.title}
          </p>
          <p className="mt-1 text-lg sm:text-xl text-neutral-500 dark:text-neutral-500">
            {personal.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="/cv.pdf"
              download="Tomas Guzman - CV.pdf"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </FadeIn>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
    </section>
  );
}
