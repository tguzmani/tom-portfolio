import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Tomás Guzmán
        </div>
      </footer>
    </>
  );
}
