import React from "react";
import { CheckCircle2, Clock, Wifi, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FaqSection from "@/components/Home/FAQ";
import TestimonialsSection from "@/components/Home/Testimonials";
import ContactAndCallToAction from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

const features = [
  {
    icon: Wifi,
    title: "Super-fast internet",
    text: "Stable, high-speed connectivity to keep you productive all day.",
  },
  {
    icon: Zap,
    title: "Reliable power",
    text: "Fully serviced workspace with consistent power supply.",
  },
  {
    icon: Users,
    title: "Like-minded community",
    text: "Work alongside creators, founders, and professionals growing daily.",
  },
  {
    icon: Clock,
    title: "Flexible access",
    text: "Daily, weekly, and monthly plans built around how you work.",
  },
];

const plans = [
  {
    period: "/ Day",
    price: "₦5,000",
    highlight: false,
  },
  {
    period: "/ Week",
    price: "₦25,000",
    highlight: true,
  },
  {
    period: "/ Month",
    price: "₦100,000",
    highlight: false,
  },
];

export default function CoworkingPage() {
  return (
    <>
      {/* ===================== Page Header ===================== */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:py-24 border-b border-gray-100 overflow-hidden relative">
        <ScrollReveal
          animation="fade-up"
          className="max-w-6xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2.5 rounded-xl shadow-md">
            <p className="text-sm md:text-base font-bold text-black tracking-wide">
              Coworking Space
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#180053] tracking-tight">
            Work where ideas move faster
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            A focused environment for creators, founders, and professionals to
            build, work, and collaborate.
          </p>
        </ScrollReveal>

        {/* Illustration */}
        <ScrollReveal
          animation="fade-up"
          delay={200}
          className="max-w-md mx-auto mt-12"
        >
          <img
            src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/chair.png"
            alt="Coworking space illustration"
            className="w-full h-auto object-contain"
          />
        </ScrollReveal>
      </section>

      {/* ===================== Intro ===================== */}
      <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 md:py-20">
        <ScrollReveal
          animation="fade-up"
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Get a productive workspace with flexible options designed around how
            you work.
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Plug in, focus, and get things done in a space built for
            concentrated work and real collaboration.
          </p>
        </ScrollReveal>
      </section>

      {/* ===================== Feature Cards ===================== */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal
            animation="fade-up"
            className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 md:px-8 py-2 rounded-xl shadow-md mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
              Why work here
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                animation="fade-up"
                delay={index * 100}
                className={`relative rounded-[2.5rem] p-8 md:p-9 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] min-h-[260px] shadow-[0px_6px_1px_#000] ${
                  index % 2 === 0
                    ? "bg-[#0B0A75] text-white"
                    : "bg-[#1A1A24] text-white"
                }`}
              >
                <div className="bg-white/10 rounded-full p-3.5 w-fit mb-8">
                  <feature.icon className="w-6 h-6 text-[#B4FA60]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70">
                    {feature.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Workspace Plans ===================== */}
      <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal
            animation="fade-up"
            className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 md:px-8 py-2 rounded-xl shadow-md mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
              Workspace Plans
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100} className="text-center mb-12">
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Regular Workspace + Data — a comfortable workspace with data
              included, available on flexible plans.
            </p>
          </ScrollReveal>

          {/* Pricing cards */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {plans.map((plan, index) => (
              <ScrollReveal
                key={plan.period}
                animation="fade-up"
                delay={200 + index * 120}
                className={`relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] shadow-[0px_6px_1px_#000] ${
                  plan.highlight
                    ? "bg-[#0B0A75] text-white md:-mt-4 md:mb-4 md:scale-[1.04] z-10"
                    : "bg-white text-gray-900 border border-neutral-100"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-[#B4FA60] text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">
                    Most Popular
                  </span>
                )}
                <div>
                  <p
                    className={`text-5xl md:text-6xl font-bold tracking-tight ${
                      plan.highlight ? "text-white" : "text-[#180053]"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`mt-2 text-base font-semibold ${
                      plan.highlight ? "text-[#B4FA60]" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>

                <a
                  href={`https://wa.me/2349012601449?text=${encodeURIComponent(
                    `Hi DP Hub, I want to book the Regular Workspace plan (${plan.price}${plan.period}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 ${
                    plan.highlight
                      ? "bg-[#B4FA60] text-black hover:bg-white"
                      : "bg-[#00C853] text-white hover:bg-[#00E676]"
                  }`}
                >
                  Book Now
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Includes strip */}
          <ScrollReveal
            animation="fade-up"
            delay={300}
            className="w-full mt-14 bg-white rounded-[2.5rem] p-8 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-100 shadow-xl"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                Every plan includes
              </h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High-speed data",
                  "Stable power supply",
                  "Comfortable seating",
                  "Collaborative community",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm md:text-base font-medium text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00C853] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/2349012601449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00E676] px-8 py-3.5 rounded-full text-base font-bold text-white transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Chat with us
            </a>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection />
      <TestimonialsSection />
      <ContactAndCallToAction />
      <Footer />
    </>
  );
}