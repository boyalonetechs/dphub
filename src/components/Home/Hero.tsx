"use client";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { img } from "../Images/server";
import { AvatarCircle } from "./Avatars";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <section className=" max-w-[1640px] mx-auto px-4 md:px-20 py-10 md:py-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative overflow-hidden bg-white">
        {/* Background soft gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -z-10"></div>

        {/* Left Column: Content */}
        <div className="flex-1 space-y-8 md:space-y-10 max-w-2xl w-full">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl font-[Space Grotesk] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.15] text-[#18047C]">
              Build{" "}
              <span className="text-[#0EB862] relative inline-block">
                Skills.
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#00D05A]/20 rounded-full"></span>
              </span>{" "}
              Grow <br />
              <span className="text-[#A3E635] relative inline-block">
                Businesses.
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#A3E635]/20 rounded-full"></span>
              </span>{" "}
              Create <br />
              <span className="text-[#3B82F6] relative inline-block">
                Opportunities.
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#3B82F6]/20 rounded-full"></span>
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              DP Hub is a digital productivity ecosystem training tech talent,
              helping businesses grow, and building innovative solutions that
              connect people to real opportunities.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mt-6 md:mt-0">
            <button
              onClick={() => router.push("/signup")}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-[#00D05A] text-white rounded-full font-semibold hover:bg-[#00b34d] hover:shadow-lg hover:shadow-green-100 transition-all duration-300 flex justify-center items-center gap-2"
            >
              Signup Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white border border-gray-200 text-[#1E1B4B] rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex justify-center items-center gap-2 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#1E1B4B]">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Column: High-fidelity Vector Illustration */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Neon green blob background */}

            {/* Interactive high-end inline SVG vector representing the premium drawing from the image */}
            <div className="relative w-full  h-full flex items-center justify-center lg:scale-180">
              <Image
                src={`${img}/group1.png`}
                alt="Hero Image"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <AvatarCircle />
    </>
  );
}
