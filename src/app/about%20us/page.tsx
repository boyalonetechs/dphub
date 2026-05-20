import ContactAndCallToAction from "@/components/Home/Contact";
import FaqSection from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";
import TeamSection from "@/components/Home/Team";
import TestimonialsSection from "@/components/Home/Testimonials";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function MissionVision() {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 sm:px-10 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-32 md:gap-x-24 items-center">
            {/* Top Left: Vision Illustration */}
            <ScrollReveal animation="fade-right" className="flex justify-center md:justify-end order-1 md:order-1">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/about-our-team.jpg?updatedAt=1779101306872"
                alt="Our Vision Illustration"
                className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain"
              />
            </ScrollReveal>

            {/* Top Right: Our Vision Text */}
            <ScrollReveal animation="fade-left" delay={200} className="flex flex-col items-start max-w-lg order-2 md:order-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-[#180053] mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                To become a leading hub where technology company from Africa for
                the world; driving innovation, productivity, and sustainable
                growth for individuals and institutions.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#00C853] hover:bg-[#00E676] px-8 py-2.5 rounded-xl text-sm font-medium text-white transition-all">
                  Explore
                </button>
                <button className="bg-transparent border border-[#00C853] px-8 py-2.5 rounded-xl text-sm font-medium text-gray-800 hover:bg-green-50 transition-all">
                  Contact us
                </button>
              </div>
            </ScrollReveal>

            {/* Bottom Left: Our Mission Text */}
            <ScrollReveal animation="fade-right" delay={100} className="flex flex-col items-start max-w-lg md:justify-self-end order-4 md:order-3">
              <h3 className="text-4xl md:text-5xl font-semibold text-[#180053] mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                To empower people and organizations with relevant, hands-on
                technology skills that improve business performance, unlock new
                opportunities, and create real economic impact in communities.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#00C853] hover:bg-[#00E676] px-8 py-2.5 rounded-xl text-sm font-medium text-white transition-all">
                  Explore
                </button>
                <button className="bg-transparent border border-[#00C853] px-8 py-2.5 rounded-xl text-sm font-medium text-gray-800 hover:bg-green-50 transition-all">
                  Contact us
                </button>
              </div>
            </ScrollReveal>

            {/* Bottom Right: Mission Illustration */}
            <ScrollReveal animation="fade-left" delay={300} className="flex justify-center md:justify-start order-3 md:order-4 mb-10 md:mb-0">
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/voice.png"
                alt="Our Mission Illustration"
                className="w-full max-w-[500px] lg:max-w-[500px] h-auto object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <FaqSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactAndCallToAction />
      <Footer />
    </>
  );
}
