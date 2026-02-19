"use client";

import React, { useState } from 'react';
import { navigationLinks, socialLinks } from '@/data/siteConfig';
import ThemeToggle from './ThemeToggle';

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const elem = document.getElementById(targetId);

  if (elem) {
    window.scrollTo({
      top: elem.offsetTop,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', href);
  }
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

{/* THE THEME-AWARE LIQUID BACKGROUND */}
<div className="fixed inset-0 -z-10 transition-colors duration-700 bg-zinc-50 dark:bg-[#000212]">
  
  {/* The "Glow"  */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
    bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
    from-blue-200/30 dark:from-blue-600/20 
    via-transparent to-transparent blur-3xl" 
  />

  {/* The Top Right Streak */}
  <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full 
    bg-blue-100/50 dark:bg-cyan-500/10 
    blur-[120px] transition-colors duration-1000" 
  />

  {/* The Bottom Left Streak */}
  <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full 
    bg-indigo-50/40 dark:bg-blue-800/20 
    blur-[120px] transition-colors duration-1000" 
  />
</div>

      {/* 1. PERSISTENT SIDEBAR DRAWER */}
      <div className={`fixed inset-0 z-[70] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md" 
          onClick={() => setIsOpen(false)} 
        />

        {/* The Drawer */}
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-[400px] bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 p-8 md:p-12 pt-44 pb-12 transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="flex flex-col h-full">
            <div className="flex flex-col gap-10">
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold mb-2 font-['Red_Hat_Display']">Navigation</p>
              {navigationLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-4xl md:text-5xl font-black uppercase tracking-[0.1em] text-black dark:text-white hover:italic hover:translate-x-4 transition-all duration-300 font-['Red_Hat_Display']"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </div>

{/* 1. THE BACKGROUND BLUR */}
<div className="hidden md:block fixed top-0 left-0 w-full h-20 md:h-24 z-[100] 
  bg-white/30 dark:bg-black/30 
  backdrop-blur-xl 
  border-b border-black/5 dark:border-white/5 
  pointer-events-none transition-all duration-300" 
/>
{/* 2. THE INTERACTIVE UI */}
<header className="fixed top-0 left-0 w-full z-[110] p-8 md:p-10 flex justify-between items-start pointer-events-none">
  
  {/* LEFT SIDE: Name & Mobile Toggle */}
<div className="flex flex-col gap-6 pointer-events-auto">
  <div className="hidden md:block text-xl font-black font-['Red_Hat_Display'] text-black dark:text-white leading-none">
    J.
  </div>

<button 
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden fixed top-8 left-8 z-[150] w-12 h-12 flex flex-col items-center justify-center gap-[6px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg pointer-events-auto transition-all duration-300 active:scale-90"
>
  <span className={`h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4px] w-6' : 'w-5'}`} />
  <span className={`h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px] w-6' : 'w-6'}`} />
</button>
  </div>

  {/* RIGHT SIDE: Desktop Nav & Theme Toggle */}
  <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
{navigationLinks.map((link) => (
  <a 
    key={link.name} 
    href={link.href} 
    onClick={(e) => handleScroll(e, link.href)} 
    className="text-[10px] font-bold tracking-[0.4em] uppercase text-black dark:text-white hover:opacity-60 transition-all duration-300 font-['Red_Hat_Display']"
  >
    {link.name}
  </a>
))}
    <div className="pl-6 border-l border-zinc-200 dark:border-zinc-800">
      <ThemeToggle />
    </div>
  </nav>
</header>

{/* --- VERTICAL SOCIALS --- */}
      <div className="absolute left-8 bottom-32 md:bottom-10 md:left-10 z-50 flex flex-col items-center gap-6">
        {socialLinks.map((social) => {
          const Icon = social.Icon;
          return (
            <a 
              key={social.name} 
              href={social.href} 
              target={social.name === "Mail" ? "_self" : "_blank"}
              rel={social.name === "Mail" ? "" : "noopener noreferrer"}
              className="text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>

      {/* --- MAIN CONTENT --- */}
        <main className="flex flex-col items-start justify-start pt-32 md:justify-center md:pt-0 min-h-screen pl-8 md:pl-8 lg:pl-8 bg-transparent relative">        
          <div className="relative z-10">
          <p className="font-bold text-[14px] md:text-[16px] tracking-[0.7em] uppercase mb-4 ml-1 text-black/60 dark:text-white/60 font-['Red_Hat_Display'] origin-left scale-y-[1.1]">
            Jyothish Chandran
          </p>

          <h1 className="flex flex-col leading-[0.82] font-['Red_Hat_Display']">
            <span className="text-[clamp(3rem,12vw,9.5rem)] font-[850] text-black dark:text-white uppercase tracking-[0.01em]">
              Fullstack
            </span>
            <span 
              className="text-[clamp(3rem,12vw,9.5rem)] font-[850] uppercase tracking-[0.01em]"
              style={{ 
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1.5px var(--foreground)'
              }}
            >
              Developer
            </span>
          </h1>

<div className="flex flex-wrap gap-4 mt-10 ml-1"> 
  {/* GET IN TOUCH */}
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-[11px] md:text-[12px] tracking-[0.5em] uppercase font-['Red_Hat_Display'] transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-1 active:scale-95 text-center shadow-xl shadow-black/5"
  >
    Get In Touch
  </button>

  {/* DOWNLOAD RESUME */}
<a 
  href="/Jyothish_resume.pdf" 
  download="Jyothish_Resume.pdf" 
  className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-black/60 dark:text-white/60 font-bold text-[11px] md:text-[12px] tracking-[0.5em] uppercase font-['Red_Hat_Display'] transition-all duration-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:-translate-y-1 active:scale-95 text-center"
>
  Download Resume
</a>
</div>
        </div>
      </main>
    </div>
  );
}