"use client";

import React from 'react';

const DATA = [
  { 
    type: "Education", 
    role: "Bachelor of Computer Applications (BCA)", 
    org: "University of Calicut, Kerala, India", 
    period: "2022 — 2025",
    marker: "bg-blue-500" 
  },
  { 
    type: "Education", 
    role: "Advanced Full Stack Development (Python & Django)", 
    org: "Haris and Co Academy, Calicut, Kerala", 
    period: "Jun 2025 — Feb 2026",
    marker: "bg-blue-500" 
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
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
        Experience / Education
      </h2>

      <div className="flex flex-col space-y-16">
        {DATA.map((item) => (
          <div key={item.role} className="flex flex-col space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className={`w-1 h-4 shrink-0 ${item.marker}`} />
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
                {item.period} — {item.type}
              </h3>
            </div>

            {/* Content */}
            <div className="flex flex-col space-y-2 pl-4 border-l border-zinc-100 dark:border-zinc-900">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-default">
                {item.role}
              </span>
              <span className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                {item.org}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}