import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2"><Mail size={20} /></div>
          <h2 className="text-2xl font-bold md:text-3xl">Let’s work together</h2>
        </div>
        <p className="mt-2 text-white/70">Tell me about your project. I’ll get back within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/20" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/20" />
          </div>
          <input type="text" placeholder="Company / Organization (optional)" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/20" />
          <textarea required rows={5} placeholder="Project details" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/20" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:shadow-xl">
            Send message
            <Send size={16} />
          </button>
          {status && <p className="text-sm text-green-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
