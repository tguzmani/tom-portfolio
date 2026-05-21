import { personal } from "@/data";
import FadeIn from "./FadeIn";

function renderMarkdown(text: string) {
  return text.split("\n\n").map((paragraph, i) => {
    const html = paragraph.replace(
      /\*\*(.+?)\*\*/g,
      "<strong>$1</strong>"
    );
    return (
      <p
        key={i}
        className="text-neutral-700 dark:text-neutral-400 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-8">About</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-4">{renderMarkdown(personal.about)}</div>
        </FadeIn>
      </div>
    </section>
  );
}
