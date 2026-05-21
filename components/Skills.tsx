import { skills } from "@/data";
import FadeIn from "./FadeIn";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Skills</h2>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.05}>
              <h3 className="text-sm font-mono text-neutral-500 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
