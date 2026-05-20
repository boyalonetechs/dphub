"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";
import { useRouter } from "next/navigation";

// Define the shape of our course data
type Course = {
  id: number;
  title: string;
  description: string;
  price: number; // Price in NGN
  image: string;
  level: string;
  duration: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Fullstack Web Development",
    description:
      "Learn to build scalable web applications from scratch using modern technologies like React, Next.js, and Node.js.",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    description:
      "Master the art of designing beautiful, user-centric interfaces. Learn Figma, wireframing, and interactive prototyping.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    level: "Beginner",
    duration: "8 Weeks",
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    description:
      "Dive into data. Learn Python, SQL, and Machine Learning to extract actionable insights from complex datasets.",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    level: "Intermediate",
    duration: "10 Weeks",
  },
];

export default function CoursesPage() {
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.back();
  });

  const openPaymentModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handlePaystackPayment = () => {
    if (!email) {
      alert("Please enter your email address to proceed.");
      return;
    }

    if (!selectedCourse) return;

    // Check if Paystack script has loaded
    const win = window as unknown as {
      PaystackPop?: {
        setup: (options: Record<string, unknown>) => { openIframe: () => void };
      };
    };

    if (typeof window !== "undefined" && win.PaystackPop) {
      const paystackHandler = win.PaystackPop.setup({
        // Remember to use your actual test/live public key from Paystack
        key:
          process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ||
          "pk_test_YOUR_TEST_KEY",
        email: email,
        amount: selectedCourse.price * 100, // Amount is in kobo (multiply by 100)
        currency: "NGN",
        callback: function (response: { reference: string }) {
          alert("Payment complete! Reference: " + response.reference);
          setIsModalOpen(false);
          setEmail("");
        },
        onClose: function () {
          alert("Transaction was not completed, window closed.");
        },
      });

      paystackHandler.openIframe();
    } else {
      alert("Payment gateway is still loading. Please try again in a moment.");
    }
  };

  return (
    <>
      {/* Load Paystack Inline JS */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      <main className="min-h-screen bg-gray-50 pb-20">
        {/* Header Section */}
        <section className="w-full bg-white py-16 px-6 sm:px-10 border-b border-gray-100">
          <ScrollReveal
            animation="fade-up"
            className="max-w-6xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2.5 rounded-xl shadow-md">
              <h2 className="text-sm md:text-base font-bold text-black tracking-wide uppercase">
                Level Up Your Skills
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#180053] tracking-tight">
              Our Premium Courses
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Unlock your potential with our industry-leading curriculum. Build
              real-world projects and learn from top experts.
            </p>
          </ScrollReveal>
        </section>

        {/* Courses Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <ScrollReveal
                key={course.id}
                animation="fade-up"
                delay={index * 150}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                {/* Course Image */}
                <div className="h-56 overflow-hidden relative bg-gray-200">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold text-[#180053]">
                    {course.level}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#180053]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-bold text-white">
                    {course.duration}
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#180053] leading-tight">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {course.description}
                  </p>

                  {/* Footer & Action */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-medium">
                        Price
                      </span>
                      <span className="text-lg font-bold text-[#00C853]">
                        ₦{course.price.toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={() => openPaymentModal(course)}
                      className="bg-[#00C853] hover:bg-[#00E676] px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-sm active:scale-95"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Payment Modal */}
        {isModalOpen && selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-[#180053]">
                    Checkout
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-700 transition-colors rounded-full p-1 hover:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100">
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    Course
                  </p>
                  <p className="text-lg font-semibold text-[#180053] mb-3">
                    {selectedCourse.title}
                  </p>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                    <p className="text-sm text-gray-500 font-medium">
                      Total Amount
                    </p>
                    <p className="text-xl font-bold text-[#00C853]">
                      ₦{selectedCourse.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Form Elements */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00C853] focus:border-transparent outline-none transition-all text-gray-800"
                      required
                    />
                  </div>

                  <button
                    onClick={handlePaystackPayment}
                    className="w-full bg-[#180053] hover:bg-[#2B0E7D] text-white font-bold py-3.5 px-4 rounded-xl transition-all active:scale-[0.98] shadow-md flex justify-center items-center gap-2"
                  >
                    Pay with Paystack
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
