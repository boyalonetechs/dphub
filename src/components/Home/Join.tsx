"use client"; // Required for hooks in Next.js App Router

import React, { useState, useEffect, useRef } from "react";

export default function Join() {
  const [isPastSection, setIsPastSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // CHANGED HERE: Triggers immediately when the top of the section leaves the viewport
        if (rect.top < 0) {
          setIsPastSection(true);
        } else {
          setIsPastSection(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        isPastSection
          ? "fixed top-6 right-4 md:right-6 z-50 animate-fade-in"
          : "absolute top-10 -bg-conic-120 right-4 md:right-0 translate-x-0 md:translate-x-20 z-10"
      }
    >
      <a
        href="https://chat.whatsapp.com/CLIBwyok2oAF029xR2Hqjb?mode=gi_t"
        className="group flex items-center gap-2 bg-green backdrop-blur-md border border-black px-4 py-2 rounded-full shadow-sm hover:shadow-md   hover:bg-black/80 hover:border-green transition-all duration-200"
      >
        <span className="text-sm font-semibold group-hover:text-green text-gray-900">
          Join our community
        </span>
        <svg
          className="w-4 h-4 hidden text-gray-700 transform group-hover:translate-x-0.5 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
}
