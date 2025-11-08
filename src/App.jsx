import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-bold tracking-wide">Your Name</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#expertise">Expertise</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow md:text-sm">Hire Me</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Your Name — Data Analytics • Power BI • n8n Automation
      </footer>
    </div>
  );
};

export default App;
