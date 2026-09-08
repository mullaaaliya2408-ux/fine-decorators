import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Team from "./sections/Team";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import useScrollProgress from "./hooks/useScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div
        className="fixed left-0 top-0 z-[100] h-[2px] bg-[#a58b5b]"
        style={{
          width: `${scrollProgress * 100}%`,
        }}

      />

      <LoadingScreen />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Team />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;