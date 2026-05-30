import { useObservers } from './hooks/useObservers.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  useObservers();
  return (
    <div className="shell">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}
