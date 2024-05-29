import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151515]">
      <NavBar />
      <div className="container mt-24 md:mt-24 mx-auto px-4 md:px-12 py-4">
        <HeroSection />
        <Skills />
        <section id="about" className="section">
          <AboutSection />
        </section>
        <section id="projects" className="section">
          <ProjectsSection />
        </section>
        <section id="contact" className="section">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}