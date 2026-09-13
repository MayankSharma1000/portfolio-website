import SmoothScroll from "./components/SmoothScroll.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import FloatingDock from "./components/FloatingDock.jsx";
import Loader from "./components/Loader.jsx";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import Stats from "./components/Stats.jsx";
import FileProcessingShowcase from "./components/FileProcessingShowcase.jsx";
import SmartMoneyShowcase from "./components/SmartMoneyShowcase.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import OpenToWork from "./components/OpenToWork.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "./index.css";

function App() {
  return (
    <main className="site-shell">
      <Loader />
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />

      <Navbar />
      <Hero />
      <TechMarquee />
      <Stats />
      <FileProcessingShowcase />
      <SmartMoneyShowcase />
      <Projects />
      <Skills />
      <About />
      <OpenToWork />
      <Contact />
      <Footer />
      <FloatingDock />
    </main>
  );
}

export default App;
