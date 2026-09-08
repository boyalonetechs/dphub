"use client"; // Required for hooks in Next.js App Router

import React, { useState, useEffect, useRef } from "react";

export default function WhoWeAre() {
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
    <section
      ref={sectionRef}
      className="relative w-full max-w-7xl lg:mt-10 mx-auto px-4 md:px-6 py-10 md:py-26"
    >
      {/* Conditionally Styled Community Button Wrapper */}
      <div
        className={
          isPastSection
            ? "fixed top-6 right-4 md:right-6 z-50 animate-fade-in"
            : "absolute top-10 -bg-conic-120 right-4 md:right-0 translate-x-0 md:translate-x-20 z-10"
        }
      >
        <a
          href="https://chat.whatsapp.com/CLIBwyok2oAF029xR2Hqjb?mode=gi_t"
          className=" flex items-center gap-2 bg-green backdrop-blur-md border border-black px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-black/80 hover:text-white hover:border-green transition-all duration-200"
        >
          <span className="text-sm font-semibold group-hover:text-green group-hover:text-white ">
            Join <span className="max-xs:hidden">our community</span>
          </span>
          <svg
            className="w-4 h-4 hidden  transform group-hover:translate-x-0.5 transition-transform duration-200"
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

      {/* Main Layout Block */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-16">
        {/* Left Side: Heading Pill */}
        <div className="flex-shrink-0">
          <div className="inline-block bg-gradient-to-b from-[#70C528] via-[#E7F644] to-[#70C528] px-6 py-3 rounded-xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight whitespace-nowrap">
              Who Are We?
            </h2>
          </div>
        </div>

        {/* Right Side: Content block */}
        <div className="flex-1 max-w-4xl space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            DP Hub is where learning meets execution.
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We train individuals in digital and tech skills, help businesses
            scale through content and marketing, and build platforms that
            connect people to real jobs and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
