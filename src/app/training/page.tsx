import React from "react";
import { CheckCircle2, GraduationCap, Monitor, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FaqSection from "@/components/Home/FAQ";
import TestimonialsSection from "@/components/Home/Testimonials";
import ContactAndCallToAction from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

type Course = {
  number: string;
  title: string;
  description: string;
  learn: string[];
  fee: number;
  bg: string;
  text: string;
  chip: string;
  button: string;
};

const courses: Course[] = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Learn how to attract, engage, and convert customers using digital platforms.",
    learn: [
      "Digital marketing strategy",
      "Social media marketing",
      "Content marketing",
      "Paid advertising",
      "SEO",
      "Google Business Profile",
      "Email marketing",
      "Analytics & reporting",
    ],
    fee: 150000,
    bg: "bg-[#00E676]",
    text: "text-black",
    chip: "bg-black/10 text-black",
    button: "bg-black text-white hover:bg-black/80",
  },
  {
    number: "02",
    title: "Front-End Web Development",
    description:
      "Learn how to design and build responsive, interactive websites from scratch.",
    learn: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive web design",
      "Website development",
      "Practical projects",
    ],
    fee: 250000,
    bg: "bg-[#0B0A75]",
    text: "text-white",
    chip: "bg-white/10 text-white",
    button: "bg-white text-black hover:bg-white/80",
  },
  {
    number: "03",
    title: "Back-End Web Development",
    description:
      "Learn how to build the systems and functionality that power modern websites and web applications.",
    learn: [
      "Server-side development",
      "Databases",
      "APIs",
      "Backend frameworks",
      "Authentication",
      "Building and deploying web applications",
    ],
    fee: 250000,
    bg: "bg-[#7F26FD]",
    text: "text-white",
    chip: "bg-white/10 text-white",
    button: "bg-white text-black hover:bg-white/80",
  },
  {
    number: "04",
    title: "Data Analysis",
    description:
      "Turn raw data into useful insights that support better business and career decisions.",
    learn: [
      "Data collection and cleaning",
      "Excel",
      "Data analysis",
      "Data visualization",
      "Dashboards",
      "Reporting",
      "Practical data projects",
    ],
    fee: 200000,
    bg: "bg-[#2196F3]",
    text: "text-white",
    chip: "bg-white/10 text-white",
    button: "bg-black text-white hover:bg-black/80",
  },
  {
    number: "05",
    title: "AI Creation & Automation",
    description:
      "Learn how to use AI tools to create content, solve problems, and automate everyday business tasks.",
    learn: [
      "AI content creation",
      "AI-powered tools",
      "Prompt engineering",
      "AI workflows",
      "Business automation",
      "No-code automation",
      "AI-powered productivity",
    ],
    fee: 150000,
    bg: "bg-[#FFEB3B]",
    text: "text-black",
    chip: "bg-black/10 text-black",
    button: "bg-black text-white hover:bg-black/80",
  },
  {
    number: "06",
    title: "Video Editing",
    description:
      "Turn raw footage into engaging, professional videos for social media, businesses, brands, and clients.",
    learn: [
      "Video editing fundamentals",
      "Short-form content",
      "Social media videos",
      "Transitions and effects",
      "Audio and sound",
      "Professional video workflows",
      "Practical projects",
    ],
    fee: 200000,
    bg: "bg-[#1A1A24]",
    text: "text-white",
    chip: "bg-white/10 text-white",
    button: "bg-white text-black hover:bg-white/80",
  },
  {
    number: "07",
    title: "Graphic Design",
    description:
      "Learn how to create professional visual designs for brands, businesses, social media, and marketing.",
    learn: [
      "Design principles",
      "Branding",
      "Social media graphics",
      "Marketing materials",
      "Layout and typography",
      "Practical design projects",
    ],
    fee: 200000,
    bg: "bg-[#F5F5F5]",
    text: "text-black",
    chip: "bg-black/10 text-black",
    button: "bg-black text-white hover:bg-black/80",
  },
];

const whatsappNumber = "2349012601449";

const formatFee = (fee: number) => `₦${fee.toLocaleString()}`;

export default function TrainingPage() {
  return (
    <>
      {/* ===================== Page Header ===================== */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:py-24 border-b border-gray-100">
        <ScrollReveal
          animation="fade-up"
          className="max-w-6xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2.5 rounded-xl shadow-md">
            <p className="text-sm md:text-base font-bold text-black tracking-wide">
              In-Person &amp; Online Training
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#180053] tracking-tight">
            Explore Our Courses
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            Build in-demand digital skills for your career, business, or next
            opportunity.
          </p>
        </ScrollReveal>
      </section>

      {/* ===================== Courses Grid ===================== */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <ScrollReveal
                key={course.number}
                animation="fade-up"
                delay={(index % 2) * 120}
                className={`relative ${course.bg} ${course.text} rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-[1.01] min-h-[520px] shadow-[0px_6px_1px_#000]`}
              >
                {/* Course number marker */}
                <span className="absolute top-6 right-8 text-6xl md:text-7xl font-bold opacity-10 pointer-events-none">
                  {course.number}
                </span>

                <div className="flex flex-col flex-1 z-10">
                  {/* Title + Description */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`inline-block ${course.chip} font-bold text-xl md:text-2xl px-4 py-1 rounded-lg shadow-sm`}
                    >
                      {course.title}
                    </div>
                  </div>
                  <p
                    className={`text-sm md:text-base leading-relaxed opacity-90 max-w-lg`}
                  >
                    {course.description}
                  </p>

                  {/* You'll learn */}
                  <div className="mt-8">
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-70 mb-4">
                      You&apos;ll learn:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.learn.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 flex-shrink-0 opacity-80" />
                          <span className="text-sm font-medium leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fee */}
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-70">
                      Fee:
                    </span>
                    <span className="text-2xl md:text-3xl font-bold tracking-tight">
                      {formatFee(course.fee)}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi DP Hub, I want to learn ${course.title} online.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${course.button} px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95`}
                    >
                      <Monitor className="w-4 h-4" />
                      Learn Online
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi DP Hub, I want to learn ${course.title} in person.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${course.button} px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95`}
                    >
                      <MapPin className="w-4 h-4" />
                      Learn In-Person
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="w-full mt-16 bg-[#F5F5F5] rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-100 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="bg-black p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  Not sure which course fits you?
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  Talk to our team and we&apos;ll help you pick the right
                  learning path.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/2349012601449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00E676] px-8 py-3.5 rounded-full text-base font-bold text-white transition-all shadow-md active:scale-95"
            >
              Chat with us
            </a>
          </div>
        </div>
      </section>

      <FaqSection />
      <TestimonialsSection />
      <ContactAndCallToAction />
      <Footer />
    </>
  );
}