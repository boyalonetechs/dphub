import FaqSection from "@/components/Home/FAQ";
import TeamSection from "@/components/Home/Team";
import TestimonialsSection from "@/components/Home/Testimonials";
import ContactAndCallToAction from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-16 px-4 md:px-6 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <ScrollReveal animation="fade-up" className="text-center mb-10 md:mb-12">
            <span className="uppercase text-xs tracking-[0.15em] text-gray-400 font-semibold mb-3 block">
              Contact us
            </span>
            <h1 className="text-4xl md:text-[2.75rem] font-semibold text-black mb-4 tracking-tight">
              Get in touch
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              We&apos;d love to hear from you. Please fill out this form.
            </p>
          </ScrollReveal>

          {/* Form Section */}
          <ScrollReveal animation="fade-up" delay={200} className="w-full max-w-[500px] flex flex-col gap-6" as="form">
            {/* Name Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jacob Moore"
                className="w-full bg-[#F7F7F7] border border-transparent rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#00C853] focus:ring-4 focus:ring-[#00C853]/10 focus:outline-none transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Dphubbyleadpath@email.com"
                className="w-full bg-[#F7F7F7] border border-transparent rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#00C853] focus:ring-4 focus:ring-[#00C853]/10 focus:outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-600 ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a message..."
                rows={6}
                className="w-full bg-[#F7F7F7] border border-transparent rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#00C853] focus:ring-4 focus:ring-[#00C853]/10 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full bg-[#00C853] hover:bg-[#00E676] text-white font-semibold text-base py-4 rounded-[2rem] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Send message
            </button>
          </ScrollReveal>
        </div>
      </main>
      <FaqSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactAndCallToAction />
      <Footer />
    </>
  );
}
