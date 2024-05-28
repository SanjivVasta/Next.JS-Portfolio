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
        <div className="container mt-24 md:mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <Skills />
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
        <Footer />
      </main>
    
  );
};