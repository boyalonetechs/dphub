"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  // State tracks which item index is currently open. Default is the first item ("01")
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FaqItem[] = [
    {
      id: "01",
      question: "What is DP Hub?",
      answer:
        "DP Hub (Digital Productivity Hub) is a tech ecosystem that trains talent, builds digital solutions, and helps businesses grow through marketing, content creation, and innovation services.",
    },
    {
      id: "02",
      question: "Who can join DP Hub training programs?",
      answer:
        "Our training programs are open to beginners looking to break into tech, professionals upskilling for better career opportunities, and business owners looking to master digital productivity tools.",
    },
    {
      id: "03",
      question: "Do you offer both online and physical training?",
      answer:
        "Yes, we provide flexible learning tracks including interactive virtual sessions for remote students as well as physical workspace bootcamps for immersive hands-on training.",
    },
    {
      id: "04",
      question: "How does your Aba Productivity Program work for businesses?",
      answer:
        "We support regional commerce by equipping businesses with advanced automation systems, custom marketing frameworks, and specialized skill setups designed to drastically raise production output.",
    },
    {
      id: "05",
      question: "What is DreamJob9ja?",
      answer:
        "DreamJob9ja is our dedicated placement and career-readiness platform connecting certified talent directly to vetted employers across tech and creative industries.",
    },
    {
      id: "06",
      question: "How can I get started with DP Hub?",
      answer:
        "Simply browse our available training paths, select an upcoming module, register your track online, or visit our local physical co-working hub to onboard directly with a career manager.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Badge */}
        <div className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2.5 rounded-xl shadow-md mb-10 md:mb-14">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide">
            Frequently Asked Question
          </h2>
        </div>

        {/* FAQ List Stack */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`w-full rounded-[1.8rem] shadow-[0px_6px_1px_#000]  sm:rounded-[2.2rem] p-5 sm:p-6 md:p-8 border-1 border-black transition-all duration-300 ${
                  isOpen
                    ? "bg-[#B4FA60] text-black"
                    : "bg-[#F5F5F5] text-black hover:bg-[#EAEAEA]"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1">
                    {/* Index Number */}
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight opacity-90">
                      {item.id}
                    </span>
                    {/* Question Title */}
                    <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Dynamic Action Icon Pin */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border border-black/10 shadow-sm flex-shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Smooth Expandable Answer Body Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-black/10"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed text-black/80 max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
