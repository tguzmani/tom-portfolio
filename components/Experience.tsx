import { experience } from "@/data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800">
                <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-[5px] rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm text-neutral-500">{exp.company}</p>
                  </div>
                  <span className="text-sm text-neutral-500 font-mono shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
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
