import { ExternalLink } from "lucide-react";
import { projects } from "@/data";
import FadeIn from "./FadeIn";
import GitHubIcon from "./GitHubIcon";

const statusLabel: Record<string, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
  private: "Private",
};

const statusColor: Record<string, string> = {
  live: "bg-green-500",
  "coming-soon": "bg-yellow-500",
  private: "bg-neutral-500",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn
              key={i}
              delay={i * 0.05}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              <div className="group rounded-lg border border-neutral-200 dark:border-neutral-800 p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors h-full">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${statusColor[project.status]}`}
                      />
                      {statusLabel[project.status]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
