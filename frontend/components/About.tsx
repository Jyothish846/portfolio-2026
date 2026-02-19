"use client";

import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative z-20 py-36 bg-transparent border-t border-zinc-100 dark:border-zinc-900"
      style={{ 
        paddingLeft: 'clamp(1.5rem, 5vw, 6rem)', 
        paddingRight: 'clamp(1.5rem, 5vw, 6rem)' 
      }}
    >
      <h2 
        className="font-[850] uppercase tracking-tighter mb-16 font-['Red_Hat_Display'] dark:text-white"
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', lineHeight: '0.9' }}
      >
        About 
      </h2>

<div className="w-full max-w-5xl"> 
  <p className="text-[10px] md:text-[12px] font-[800] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 leading-[2.2]">
    Full Stack Developer with hands-on experience building Django-based backend systems and React frontends. 
    Experienced in developing AI-assisted applications using Retrieval-Augmented Generation (RAG), 
    relational database design, and automated deployments using modern CI/CD platforms.
  </p>
</div>
    </section>
  );
}