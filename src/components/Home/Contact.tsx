"use client";

import React, { useState } from "react";
import { MoveRight } from "lucide-react";

export default function ContactAndCallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "2349012601449";
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-10 md:py-24 space-y-12 md:space-y-20">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        {/* ===================== Block A: Contact Us Form ===================== */}
        <div className="w-full">
          {/* Header Badge */}
          <div className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-8 py-2 rounded-xl shadow-md mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
              Contact Us
            </h2>
          </div>

          {/* Contact Main Container: Specific light grey, curved, with shadow */}
          <div className="w-full bg-[#F5F5F5] rounded-[2.5rem] lg:p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-neutral-100 shadow-xl overflow-hidden relative">
            {/* Left Column: Input Form Area */}
            <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start gap-8 z-10">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                {/* Name Input */}
                <div className="w-full space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-black rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00C853] focus:border-[#00C853] outline-none transition"
                  />
                </div>

                {/* Email Input */}
                <div className="w-full space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-black rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00C853] focus:border-[#00C853] outline-none transition"
                  />
                </div>

                {/* Message Input */}
                <div className="w-full space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-black rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00C853] focus:border-[#00C853] outline-none transition resize-none"
                  />
                </div>

                {/* Submit Trigger: specific vibrant green button */}
                <button
                  type="submit"
                  className="group flex w-fit items-center justify-center gap-2.5 bg-[#00C853] hover:bg-[#00E676] px-8 py-3.5 rounded-full text-base font-bold text-white transition-all shadow-md active:scale-95"
                >
                  Send Message
                  <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Right Column: Dynamic Rainbow Card Arc Illustration (Exactly mapped position) */}
            <div className="absolute top-0 right-0 h-full w-[40%] md:relative md:top-auto md:right-auto md:h-auto md:w-[48%] flex items-center justify-center -mr-12 md:mr-0 md:pl-8 pointer-events-none opacity-30 md:opacity-100 z-0">
              {/* Replace image src below with your actual asset URL */}
              <img
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/rainbow.png"
                alt="Rainbow decorative arc visual"
                className="w-full lg:scale-120 h-auto max-w-sm md:max-w-md object-contain origin-right scale-[1.1] md:scale-100"
              />
            </div>
          </div>
        </div>

        {/* ===================== Block B: Final CTA "Let's make things happen" ===================== */}
        <div className="w-full bg-[#F5F5F5] rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-neutral-100 shadow-xl relative overflow-hidden">
          {/* Left Column: CTA Pitch */}
          <div className="w-full md:w-[50%] flex flex-col gap-5 items-start z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-snug">
              Let&apos;s make things happen
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-lg leading-relaxed mt-2">
              Contact DP Hub today to discover how our digital solutions can
              help your business grow, attract customers, and increase sales.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#00C853] hover:bg-[#00E676] px-8 py-3.5 rounded-full text-base font-bold text-white transition-all shadow-md active:scale-95 mt-6"
            >
              Contact Us Today
            </a>
          </div>

          {/* Right Column: Ninja Phone Illustration */}
          <div className="absolute bottom-0 right-0 h-[80%] md:relative md:bottom-auto md:right-auto md:h-auto md:w-[40%] flex items-end justify-center md:justify-end pointer-events-none pt-12 md:pt-0 pb-0 md:pb-6 opacity-20 md:opacity-100 z-0">
            {/* Replace image src below with your actual ninja-phone asset URL */}
            <img
              src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/telephone.png"
              alt="DP Hub ninja phone illustration"
              className="h-full md:h-auto w-auto md:w-full object-contain object-bottom-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
