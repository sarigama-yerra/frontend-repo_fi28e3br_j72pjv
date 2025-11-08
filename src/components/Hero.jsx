import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
          <Rocket size={16} className="text-yellow-300" />
          <span className="text-xs font-medium tracking-wide">Data Analytics • Power BI • n8n Automation</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Turning Data into Decisions
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400">and Automation into Impact</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
          I design insightful analytics, interactive dashboards, and workflow automations that reduce manual work and drive measurable outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:shadow-xl">
            View Projects
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
