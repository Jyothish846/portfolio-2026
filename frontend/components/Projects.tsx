"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';


const PROJECTS = [
  { 
    name: "narrato: pdf to audiobook converter", 
    year: "2025", 
    tech: ["Python", "Django", "Gemini API", "ElevenLabs", "Pinecone"],
    image: "/media/narrato.png", 
    details: "An intelligent media pipeline that leverages Retrieval-Augmented Generation (RAG) and Vector Databases to transform unstructured PDF data into high-fidelity, AI-narrated audiobooks via the Gemini and ElevenLabs APIs.",
    github: "https://github.com/Jyothish846/narrato",
    live: "",
  },
  { 
    name: "resonate: full stack web application", 
    year: "2025", 
    tech: ["Python", "Django", "PostgreSQL"],
    image: "/media/resonate.png",
    details: "A robust social media engine built on a sophisticated PostgreSQL relational architecture, featuring optimized Django ORM queries to handle complex user interactions and many-to-many social graphs with high data integrity.",
    github: "https://github.com/Jyothish846/resonate",
    live: "",
  },
  { 
    name: "adspace marketplace: frontend", 
    year: "2025", 
    tech: ["React", "TailwindCSS"],
    image: "/media/adspace.png",
    details: "A streamlined real-time marketplace dashboard engineered with React and Tailwind CSS, utilizing Context API for seamless state management and inline-editing to provide a fluid, modern user experience.",
    github: "https://github.com/Jyothish846/billboard-app",
    live: "",
  },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-36 px-6 md:px-12 lg:px-24 relative overflow-hidden">
<h2 
  className="font-[850] uppercase tracking-tighter mb-16 dark:text-white font-['Red_Hat_Display']"
  style={{ 
    fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
    lineHeight: '0.9'
  }}
>
  Selected Works
</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">
        {PROJECTS.map((proj, index) => {
          const isLast = index === PROJECTS.length - 1;
          const isOddTotal = PROJECTS.length % 2 !== 0;
          
          let spanClass = "md:col-span-3"; 
          if (isLast && isOddTotal) spanClass = "md:col-span-6";
          else if (index % 4 === 2) spanClass = "md:col-span-2";
          else if (index % 4 === 3) spanClass = "md:col-span-4";

          return (
            <motion.div 
              layoutId={`card-${proj.name}`}
              key={proj.name}
              onClick={() => setSelectedProject(proj)}
              className={`group relative overflow-hidden bg-white/5 border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer p-8 transition-all hover:border-black dark:hover:border-white ${spanClass}`}
            >
              <div className="flex flex-col h-full justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.2em]">0{index + 1}</span>
                  <div className="w-2 h-2 rounded-full border border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white transition-colors" />
                </div>
                <div>
                  <h3 
                    className="font-black uppercase tracking-tighter mb-2 leading-[0.85] dark:text-white break-keep"
                    style={{ 
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', 
                      wordBreak: 'keep-all',
                      hyphens: 'none'
                    }}
                  >
                    {proj.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[9px] font-bold opacity-40 uppercase tracking-widest dark:text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Image Hover Reveal */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 scale-110 group-hover:scale-100 grayscale bg-cover bg-center pointer-events-none" 
                style={{backgroundImage: `url(${proj.image})`}} 
              />
            </motion.div>
          );
        })}
      </div>

      {/* ANIMATED BOX-IN-BOX MODAL */}
<AnimatePresence mode="wait">
  {selectedProject && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
    >
<motion.div 
  layoutId={`card-${selectedProject.name}`}
  onClick={(e) => e.stopPropagation()}
  className={`relative w-full max-w-5xl bg-white/10 dark:bg-black/90 backdrop-blur-2xl 
             border border-white/20 dark:border-white/10 p-6 md:p-10 flex shadow-2xl overflow-hidden
             ${selectedProject.isLandscape ? "flex-col" : "flex-col md:flex-row"}`}
  style={{ height: '85vh', maxHeight: '800px' }} // Give the modal a fixed height relative to screen
>
  
  {/* IMAGE SECTION - Capped height on mobile to save space for text */}
  <div className={`shrink-0 overflow-hidden flex items-center justify-center bg-zinc-900/20
    ${selectedProject.isLandscape 
        ? "w-full h-[30%] mb-4" 
        : "w-full md:w-1/2 h-[40%] md:h-full mb-6 md:mb-0"}`}
  >
    <img 
      src={selectedProject.image} 
      className="max-w-full max-h-full object-contain" 
      alt={selectedProject.name}
    />
  </div>

  {/* CONTENT SECTION */}
  <div className={`flex-1 flex flex-col min-h-0 overflow-hidden 
    ${selectedProject.isLandscape ? "mt-2" : "md:pl-10 md:mt-0"}`}
  >
    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
      <div className="max-w-[400px]">
        <h3 
          className="font-[850] uppercase tracking-tighter leading-[0.9] dark:text-white mb-4 font-['Red_Hat_Display']"
          style={{ fontSize: 'clamp(1.25rem, 5vw, 2.5rem)', overflowWrap: 'break-word' }}
        >
          {selectedProject.name}
        </h3>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-3">
          Description
        </p>
        <p className="text-sm opacity-80 leading-relaxed dark:text-zinc-300">
          {selectedProject.details}
        </p>
      </div>
    </div>

{/* ACTION BAR */}
<div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center gap-6 shrink-0">
  
  {/* GITHUB LINK */}
  {selectedProject.github && (
    <a 
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-300"
    >
      <Github size={14} strokeWidth={2.5} />
      <span>Code</span>
    </a>
  )}

  {/* LIVE LINK */}
  {selectedProject.live && (
    <a 
      href={selectedProject.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-300"
    >
      <ExternalLink size={14} strokeWidth={2.5} />
      <span>Live</span>
    </a>
  )}

</div>
  </div>

  {/* Close Button */}
  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-[210] dark:text-white">✕</button>
</motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}