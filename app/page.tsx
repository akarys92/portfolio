import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <header>
        <title>Alex Karys Portfolio</title>  
      </header>      
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center"> 
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        
        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      
    </div> 
    
  )
}
