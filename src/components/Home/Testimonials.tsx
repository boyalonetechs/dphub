"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I joined with zero skills. Within months, I learned how to build production-ready digital platforms and work on live projects. The community support here makes training practical and easy to absorb.",
    author: "Sarah O.",
  },
  {
    id: 2,
    text: '"Before DP Hub, our business struggled with online visibility. After they handled our content and ads, we started getting consistent customers and real sales."',
    author: "Chinedu M",
  },
  {
    id: 3,
    text: '"DreamJob9ja helped me find real job opportunities and also guided me on how to present myself professionally. I landed my first job within weeks."',
    author: "Samuel K.",
  },
  {
    id: 4,
    text: "The co-working space provides a pristine work ecosystem. It's stable, fully serviced, with super-fast internet, and full of like-minded innovators helping each other grow day by day.",
    author: "Amara E.",
  },
  {
    id: 5,
    text: "The mentorship provided during the hackathon opened doors for seed investment that transformed our minimum viable product into an active commercial startup.",
    author: "Tunde W.",
  },
  {
    id: 6,
    text: "Dplearn completely demystified UI/UX design for me. The video courses combined with real-world case study assignments gave me a portfolio that caught recruiters' attention instantly.",
    author: "Chioma A.",
  },
  {
    id: 7,
    text: "As a local business owner, the Aba Productivity Program structure gave us the automation tools we needed to optimize our inventory tracking and boost our ad performance by 200%.",
    author: "Chief Kalu",
  },
  {
    id: 8,
    text: "The sound quality and raw strategies inside the Dreamjob Made Easy audio guide changed everything about my application outreach loop. My callback rates grew almost overnight.",
    author: "Emmanuel N.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Set second card active by default

  // Loops back to the end card when clicking 'prev' at the beginning
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Loops back to the first card ("01") when clicking 'next' at the end
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance to the next testimonial every 3 seconds.
  // The interval is re-created whenever activeIndex changes, so manual
  // navigation resets the timer.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2 rounded-xl shadow-md mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide">
            Testimonials
          </h2>
        </div>

        {/* Outer Dark Container Plate */}
        <div className="w-full bg-[#1A1A24] rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col items-center justify-between min-h-[500px] overflow-hidden relative">
          {/* Slider Row Window */}
          <div className="w-full relative flex items-center overflow-hidden min-h-[280px]">
            <div
              className="w-full flex gap-4 md:gap-6 transition-transform duration-500 ease-out py-4"
              style={{
                // Enhanced layout translation math directly applied on the active slider track container
                transform: `translateX(calc(50% - 220px - (${activeIndex} * (440px + 1.5rem))))`,
              }}
            >
              {testimonials.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-[290px] sm:w-[380px] md:w-[440px] flex-shrink-0 flex flex-col justify-between transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-30 scale-[0.95]"
                    }`}
                  >
                    {/* Speech bubble box wrapper */}
                    <div className="relative bg-[#1A1A24] border border-[#25D366] rounded-[1.8rem] p-6 md:p-8 flex-1 flex items-center">
                      <p className="text-sm md:text-base font-normal leading-relaxed text-white tracking-wide">
                        {item.text}
                      </p>

                      {/* Speech Bubble Arrow Tail element */}
                      <div className="absolute -bottom-[9px] left-12 w-4 h-4 bg-[#1A1A24] border-r border-b border-[#25D366] transform rotate-45"></div>
                    </div>

                    {/* Author Tagging Details */}
                    <div className="mt-6 pl-12 text-left">
                      <h4 className="text-sm md:text-base font-medium text-gray-300 tracking-wider">
                        {item.author}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slider Controllers & Pagination Track Footer */}
          <div className="w-full flex items-center justify-center gap-10 mt-10 z-10">
            {/* Left Button Toggle Trigger */}
            <button
              onClick={handlePrev}
              className="text-gray-500 hover:text-white transition-colors p-2 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Custom Interactive Pagination Segment Indicators */}
            <div className="flex items-center gap-2 max-w-[200px] sm:max-w-none overflow-x-auto py-1 scrollbar-none">
              {testimonials.map((_, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="focus:outline-none p-1 group flex-shrink-0"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {isActive ? (
                      /* Active Diamond Cross element matching your visual theme */
                      <div className="w-3.5 h-3.5 bg-[#B4FA60] transform rotate-45 rounded-sm shadow-inner transition-all duration-300" />
                    ) : (
                      /* Rest State Dots */
                      <div className="w-2 h-2 bg-white rounded-full opacity-40 group-hover:opacity-80 transition-opacity" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Button Toggle Trigger */}
            <button
              onClick={handleNext}
              className="text-gray-500 hover:text-white transition-colors p-2 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
