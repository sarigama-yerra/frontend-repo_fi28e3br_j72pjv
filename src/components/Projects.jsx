import React, { useState } from 'react';
import { BarChart2, Link as LinkIcon, Filter, ExternalLink } from 'lucide-react';

const sampleProjects = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    tags: ['Power BI', 'DAX', 'Data Modeling'],
    description: 'A Power BI dashboard tracking revenue, margin and cohort retention across regions with drill-through.',
    link: '#',
  },
  {
    id: 2,
    title: 'Marketing Attribution Model',
    tags: ['Python', 'Analytics', 'SQL'],
    description: 'Multi-touch attribution using a Markov chain approach with automated refresh into BI layer.',
    link: '#',
  },
  {
    id: 3,
    title: 'n8n Automation: Lead Enrichment',
    tags: ['n8n', 'Automation', 'APIs'],
    description: 'Zero-touch workflow that enriches new CRM leads, validates email, and posts to Slack with retry logic.',
    link: '#',
  },
];

const allTags = ['All', 'Power BI', 'n8n', 'Python', 'Analytics'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? sampleProjects
    : sampleProjects.filter(p => p.tags.includes(active));

  return (
    <section id="projects" className="relative w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/10 p-2"><BarChart2 size={20} /></div>
            <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-white/70" />
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActive(tag)}
                  className={`rounded-full px-3 py-1 text-sm transition ${active === tag ? 'bg-white text-gray-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-white/80">{project.description}</p>
              <a href={project.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-yellow-300 hover:underline">
                View case study
                <ExternalLink size={14} />
              </a>
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-yellow-300/20 blur-2xl transition-opacity group-hover:opacity-80" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-white/60">
          <LinkIcon size={16} />
          <span>Want your project featured here? Use the contact section below.</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
