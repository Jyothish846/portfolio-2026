"use client";

import React from 'react';

const TECH_DATA = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Frameworks & Libraries", items: ["Django", "Django REST Framework (DRF)", "Next.js", "RESTful APIs", "React", "Redux", "Tailwind CSS"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Pinecone (Vector Database)"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Terminal/CLI", "CI/CD (Vercel, Render)", "Vite", "n8n"] },
  { category: "AI & ML Exposure", items: ["RAG Pipelines", "LLM Orchestration", "Neural Text-to-Speech (ElevenLabs)", "LangChain", "OpenAI API", "Gemini API"] }
];

const LOGOS = [
  { name: 'Python', src: '/logos/python.svg' },
  { name: 'JavaScript', src: '/logos/javascript.svg' },
  { name: 'HTML', src: '/logos/html.svg' },
  { name: 'CSS', src: '/logos/css.svg' },
  { name: 'Django', src: '/logos/django.svg' },
  { name: 'next.js', src: '/logos/nextjs_icon_dark.svg' }, 
  { name: 'React', src: '/logos/react.svg' },
  { name: 'Redux', src: '/logos/redux.svg' },
  { name: 'Tailwind CSS', src: '/logos/tailwindcss.svg' },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  { name: 'MySQL', src: '/logos/mysql.svg' },
  { name: 'sqlite', src: '/logos/sqlite.svg' },
  { name: 'pinecone', src: '/logos/pinecone.svg' },
  { name: 'LangChain', src: '/logos/langchain.svg' },
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Gemini', src: '/logos/gemini.svg' },
  { name: 'Git', src: '/logos/git.svg' },
  { name: 'GitHub', src: '/logos/github_dark.svg' },
  { name: 'terminal/CLI', src: '/logos/terminal.svg' },
  { name: 'Vercel', src: '/logos/vercel_dark.svg' },
  { name: 'render', src: '/logos/render.svg' },
  { name: 'Vite', src: '/logos/vite.svg' },
  { name: 'n8n', src: '/logos/n8n.svg' }, 
];

export default function Stack() {
  return (
<section 
  id="stack"
  className="relative py-36"
  style={{ 
    paddingLeft: 'clamp(1.5rem, 5vw, 6rem)', 
    paddingRight: 'clamp(1.5rem, 5vw, 6rem)' 
  }}
>
      {/* 1. LIQUID HEADING */}
<h2 
  className="font-[850] uppercase tracking-tighter mb-16 font-['Red_Hat_Display'] dark:text-white"
  style={{ 
    fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', 
    lineHeight: '0.9' 
  }}
>
  Technical Stack
</h2>

      {/* TOP: LOGO GRID*/}
      <div className="flex flex-wrap gap-10 md:gap-14 mb-20 items-center">
        {LOGOS.map((logo) => (
          <div key={logo.name} className="group relative flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 transition-all duration-500 ease-in-out">
<img 
  src={logo.src} 
  alt={logo.name} 
  className={`
    w-full h-full object-contain transition-all duration-300 ease-out cursor-help
    grayscale opacity-40 contrast-125 
    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:contrast-100
${
  logo.name === 'pinecone'
    ? 'grayscale brightness-0 dark:invert'
    : (logo.name === 'Vercel' || logo.name === 'GitHub')
    ? 'invert dark:invert-0'
    : (logo.name === 'next.js' || logo.name === 'render'|| logo.name === 'terminal/CLI'|| logo.name === 'OpenAI'|| logo.name === 'LangChain')
    ? 'dark:invert'
    : ''
}  `} 
/>
            </div>
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 z-30 pointer-events-none">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* --- BOTTOM: REFINED LIST --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {TECH_DATA.map((group) => (
          <div key={group.category} className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-4 bg-blue-500 shrink-0" /> 
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-col space-y-3 pl-4 border-l border-zinc-100 dark:border-zinc-900">
              {group.items.map((item) => (
                <span 
                  key={item} 
                  className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}