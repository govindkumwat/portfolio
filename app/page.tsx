import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] overflow-hidden">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
<footer className="py-8 text-center text-slate-500 text-sm bg-[#030014] border-t border-white/5 relative z-10">
  <p>© {new Date().getFullYear()} Govind Kumawat. Built with Next.js & Tailwind.</p>
</footer>
