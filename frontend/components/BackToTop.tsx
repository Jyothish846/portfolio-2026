"use client";

import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
<button
  onClick={scrollToTop}
  className={`fixed z-50 flex flex-col items-center gap-3 transition-all duration-500 ease-in-out group
    bottom-10 right-[2vw] md:right-[3vw] 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
  `}
>

  <div className="w-[1px] h-20 bg-black/20 dark:bg-white/20 relative overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2">
    <div className="absolute top-0 left-0 w-full h-full bg-black dark:bg-white origin-top animate-scroll-line" />
  </div>
  

  <span className="[writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-all duration-500 ease-out group-hover:-translate-y-2 font-['Red_Hat_Display']">
    BACK TO TOP
  </span>
</button>
  );
}