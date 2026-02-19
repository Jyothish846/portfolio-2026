"use client";

import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import {socialLinks} from '@/data/siteConfig';


export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative z-20 mt-24 pt-36 pb-12 bg-transparent border-t border-zinc-100 dark:border-zinc-900"
      style={{ 
        paddingLeft: 'clamp(1.5rem, 5vw, 6rem)', 
        paddingRight: 'clamp(1.5rem, 5vw, 6rem)' 
      }}
    >
      <h2 
        className="font-[850] uppercase tracking-tighter mb-16 font-['Red_Hat_Display'] dark:text-white"
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', lineHeight: '0.9' }}
      >
        Contact Details
      </h2>

      <div className="flex flex-col space-y-16">
        
<form 
  action="https://formspree.io/f/xnjbzbvl" 
  method="POST" 
  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
>
  {/* Name */}
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-3">
      <div className="w-1 h-4 bg-blue-500 shrink-0" />
      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white">01. Name</h3>
    </div>
    <div className="pl-4">
      <input 
        type="text" 
        name="name" // Added for Formspree
        required // Ensures you get a name
        placeholder="YOUR NAME" 
        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 pb-2 focus:outline-none focus:border-blue-500 transition-colors font-bold text-[14px] tracking-wider text-black dark:text-white placeholder:uppercase placeholder:text-[11px] placeholder:tracking-[0.3em] placeholder:opacity-30" 
      />
    </div>
  </div>

  {/* Email */}
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-3">
      <div className="w-1 h-4 bg-blue-500 shrink-0" />
      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white">02. Email</h3>
    </div>
    <div className="pl-4">
      <input 
        type="email" 
        name="email" // Added for Formspree
        required // Ensures you can reply back
        placeholder="YOUR@EMAIL.COM" 
        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 pb-2 focus:outline-none focus:border-blue-500 transition-colors font-bold text-[14px] tracking-wider text-black dark:text-white placeholder:uppercase placeholder:text-[11px] placeholder:tracking-[0.3em] placeholder:opacity-30" 
      />
    </div>
  </div>

  {/* Message */}
  <div className="md:col-span-2 flex flex-col space-y-6">
    <div className="flex items-center gap-3">
      <div className="w-1 h-4 bg-blue-500 shrink-0" />
      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white">03. Message</h3>
    </div>
    <div className="pl-4">
      <textarea 
        name="message" // Added for Formspree
        required
        rows={1} 
        placeholder="YOUR PROJECT DETAILS..." 
        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 pb-2 focus:outline-none focus:border-blue-500 transition-colors font-bold text-[14px] tracking-wider text-black dark:text-white resize-none placeholder:uppercase placeholder:text-[11px] placeholder:tracking-[0.3em] placeholder:opacity-30" 
      />
    </div>
  </div>


        {/* SUBMIT BUTTON */}
        <div className="pt-0">
          <button 
            type="submit"
            className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black 
                       font-black text-[11px] md:text-[12px] tracking-[0.6em] uppercase 
                       font-['Red_Hat_Display'] transition-all duration-300 
                       hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white
                       hover:-translate-y-1 active:scale-95 text-center shadow-xl shadow-black/5"
          >
            Send Message
          </button>
        </div>
</form>

    {/* SOCIALS */}
<div className="pt-2 grid grid-cols-3 md:grid-cols-6 gap-8">
  {socialLinks.map((social) => {
    const Icon = social.Icon;
    
    return (
      <a 
        key={social.name} 
        href={social.href} 
        target={social.name === "Mail" ? undefined : "_blank"} 
        rel="noopener noreferrer" 
        className="group flex flex-col items-start gap-3"
      >
        <div className="text-black dark:text-white transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:text-blue-500">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">
          {social.name}
        </span>
      </a>
    );
  })}
</div>
{/* COPYRIGHT FOOTER */}
<div className="pt-8 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 mt-16">
  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">
    © 2026 Jyothish Chandran 
  </p>
</div>
      </div>
    </section>
  );
}