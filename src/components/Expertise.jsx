import React from 'react';
import { Brain, Workflow, Database, Gauge } from 'lucide-react';

const skills = [
  {
    icon: <Gauge className="h-5 w-5" />, 
    title: 'Power BI Dashboards',
    desc: 'End-to-end BI: modeling, DAX, drill-through, Row-Level Security, and data storytelling.'
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'n8n Automations',
    desc: 'Build resilient workflows: webhooks, retries, error handling, and integrations across your stack.'
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Data Engineering',
    desc: 'SQL, Python, and data pipelines to clean, merge, and deliver analytics-ready datasets.'
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: 'Analytics Strategy',
    desc: 'Translate business questions into metrics, experiments, and actionable insights.'
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold md:text-3xl">What I Do</h2>
        <p className="mt-2 max-w-2xl text-white/70">I help teams understand their data and automate repetitive workflows so they can move faster and make better decisions.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2 text-yellow-300">{s.icon}</div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
