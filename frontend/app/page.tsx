import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import About from '../components/About';
import Education from '../components/Education';
import BackToTop from '../components/BackToTop';


export default function Home() {
  return (
<div className="bg-transparent text-black dark:text-white min-h-screen transition-colors duration-300">
      <Hero />
      <Projects />
      <Stack />
      <Education/>
      <About/>
      <Contact />
      <BackToTop />
    </div>
  );
}