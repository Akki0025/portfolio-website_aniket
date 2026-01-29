import { Hero } from "@/sections/Hero";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { TechnicalArsenal } from "@/sections/TechnicalArsenal";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-6 md:px-12 lg:px-24">
      <div id="home" data-section="Home">
        <Hero />
      </div>
      <div id="experience" data-section="Experience">
        <Experience />
      </div>
      <div id="projects" data-section="Projects">
        <Projects />
      </div>
      <div data-section="Skills">
        <TechnicalArsenal />
      </div>
      <div>
        <Education />
      </div>
      <div id="contact" data-section="Contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
