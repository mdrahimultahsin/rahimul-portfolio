import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="font-inter min-h-screen w-full">
      <nav className="fixed right-0 left-0 top-2 z-50">
        <Navbar />
      </nav>
      <section className="bg-gradient-to-b from-[#0f0c2998] to-[#0a0a0a99] mt-16 ">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section className="bg-base-300" id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <Outlet/>
      <section id="education">
        <Education />
      </section>
      <section  id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
          <ToastContainer />
    </div>
  );
}

export default App;
