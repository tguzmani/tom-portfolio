import { Mail, ArrowUpRight } from "lucide-react";
import { personal } from "@/data";
import FadeIn from "./FadeIn";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity text-sm font-medium"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex justify-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
