import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className="bg-ocean-deep min-h-screen text-ocean-sand selection:bg-ocean-aqua selection:text-ocean-deep">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      {/* Nanti kita bisa tambahkan section lain seperti:
          <About />
          <Experience />
          <Contact /> 
      */}
    </main>
  );
}