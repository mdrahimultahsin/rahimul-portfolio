import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-inter min-h-screen w-full">
   
      <nav className="fixed right-0 left-0 top-2">
        <Navbar />
      </nav>
      <section className="bg-gradient-to-b from-[#0f0c2998] to-[#0a0a0a99] mt-16 ">
        <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
   
  );
}

export default App;
