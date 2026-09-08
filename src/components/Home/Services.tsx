import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-6 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 md:px-8 py-2 rounded-xl shadow-md mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
            Services
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {/* ==================== 1. DPLEARN CARD ==================== */}
          <div className="relative border border-black rounded-[2.5rem] p-8 md:p-10 lg:py-20 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#7F26FD] text-white col-span-1 md:col-span-2 min-h-[200px] md:min-h-[300px] lg:min-h-[400px] shadow-[0px_6px_1px_#000]">
            <div className="max-w-[55%] md:max-w-[60%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-flex flex-col mb-4">
                  <span className="bg-white text-black font-bold text-xl md:text-2xl px-3 py-0.5 rounded-md shadow-sm">
                    Dplearn
                  </span>
                  <div className="w-2 h-4 bg-white ml-1 -mt-1 rounded-sm"></div>{" "}
                  {/* Custom design indicator */}
                </div>
                <p className="text-sm md:text-base font-normal opacity-90 leading-relaxed">
                  Our learning platform for structured digital and tech
                  training.
                </p>
              </div>
              <a
                href="https://www.dplearn.org"
                target="_blank"
                className="group inline-flex items-center gap-2 font-semibold text-sm md:text-base mt-8"
              >
                <div className="bg-white p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-black transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            <div className="absolute right-4 mb-4 lg:right-50 lg:scale-160 lg:bottom-6 w-[42%] h-[85%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/businessplan.png"
                alt="Dplearn illustration"
                className="max-w-full max-h-full object-contain object-right-center"
              />
            </div>
          </div>

          {/* ==================== 2. CO WORKING SPACE CARD ==================== */}
          <div className="relative border border-black rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#0B0A75] text-white min-h-[200px] md:min-h-[250px] lg:min-h-[320px] shadow-[0px_6px_1px_#000] ">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-flex flex-col mb-4 items-start">
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm">
                    Co Working
                  </span>
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm -mt-1">
                    Space
                  </span>
                </div>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                  A focused environment for creators, founders, and
                  professionals to build and collaborate.
                </p>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-2 font-semibold text-sm mt-6"
              >
                <div className="bg-white p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-black transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[75%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/chair.png"
                alt="Chair"
                className="max-w-full max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* ==================== 3. DREAMJOB9JA CARD ==================== */}
          <div className="relative border border-black rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#2196F3] text-white min-h-[320px] shadow-[0px_6px_1px_#000]">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-block bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md mb-4 shadow-sm">
                  Dreamjob9ja
                </div>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                  Your gateway to real job opportunities, career training, and
                  employability.
                </p>
              </div>
              <a
                href="https://dreamjob-web-dp-hub.vercel.app/"
                className="group inline-flex items-center gap-2 font-semibold text-sm mt-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-black p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[75%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/painter.png"
                alt="Painter"
                className="max-w-full scale-120 mb-6 max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* ==================== 4. DREAMJOB MADE EASY CARD ==================== */}
          <div className="relative border border- rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#00E676] text-black min-h-[320px] shadow-[0px_6px_1px_#000]">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-flex flex-col mb-4 items-start">
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm">
                    Dreamjob
                  </span>
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm -mt-1">
                    Made Easy
                  </span>
                </div>
                <p className="text-xs md:text-sm font-medium opacity-90 leading-relaxed">
                  An audio guide that shows you how to land your dream job with
                  practical, proven strategies.
                </p>
              </div>
              <a
                href="/comingsoon"
                className="group inline-flex items-center gap-2 font-bold text-sm mt-6"
              >
                <div className="bg-black p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[85%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/support.png"
                alt="Headset"
                className="max-w-full max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* ==================== 5. HACKATHON & VC CARD ==================== */}
          <div className="relative  rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#1A1A24] text-white min-h-[290px] outline-2 outline-black border-white border-5">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-block bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md mb-4 shadow-sm">
                  Hackathon & VC Investments
                </div>
                <p className="text-xs md:text-sm opacity-70 leading-relaxed">
                  We host innovation challenges that fund and support the next
                  generation of builders.
                </p>
              </div>
              <a
                href="https://dphack.vercel.app"
                className="group inline-flex items-center gap-2 font-semibold text-sm mt-6"
              >
                <div className="bg-white p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-black transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[75%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/stack-of-money.png"
                alt="Cash"
                className="max-w-full max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* ==================== 6. IN-PERSON TRAINING CARD ==================== */}
          <div className="relative border rounded-[2.5rem]  p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#F5F5F5] text-black min-h-[320px] shadow-[0px_6px_1px_#000]">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-block bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md mb-4 shadow-sm border border-gray-200">
                  In-Person Training
                </div>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                  Learn in-demand digital skills through physical and online
                  programs built for real-world.
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 font-bold text-sm mt-6"
              >
                <div className="bg-black p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[75%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/men.png"
                alt="Men"
                className="max-w-full max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* ==================== 7. ABA PRODUCTIVITY PROGRAM CARD ==================== */}
          <div className="relative border rounded-[2.5rem]  p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] bg-[#FFEB3B] text-black min-h-[320px] md:col-span-1 shadow-[0px_6px_1px_#000]">
            <div className="max-w-[55%] z-10 flex flex-col justify-between h-full items-start">
              <div>
                <div className="inline-flex flex-col mb-4 items-start">
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm">
                    Aba Productivity
                  </span>
                  <span className="bg-white text-black font-bold text-lg md:text-xl px-3 py-0.5 rounded-md shadow-sm -mt-1">
                    Program ( App )
                  </span>
                </div>
                <p className="text-xs md:text-sm font-medium opacity-90 leading-relaxed">
                  We help businesses grow through content creation, social media
                  marketing, and paid ads that drive real sales.
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 font-bold text-sm mt-6"
              >
                <div className="bg-black p-2 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
                <span>Learn more</span>
              </a>
            </div>
            {/* Replace image src below */}
            <div className="absolute right-4 bottom-4 w-[42%] h-[75%] flex items-end justify-end pointer-events-none">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/profile.png"
                alt="Profile"
                className="max-w-full max-h-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
