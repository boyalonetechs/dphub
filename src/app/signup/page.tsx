"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-12 md:px-20 py-10 bg-white justify-center">
        <ScrollReveal animation="fade-right" duration={800} className="max-w-md w-full mx-auto">
          {/* Logo Placeholder */}
          <div className="mb-10">
            <img src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/dp_logo.webp" alt="DP Hub Logo" className="h-10" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Get Started Now
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Enter your credential to create an account with us
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 bg-[#F9F9F9] hover:bg-gray-100 py-2.5 rounded-lg text-sm font-semibold text-black transition-colors">
              <FcGoogle className="w-5 h-5" />
              Log in with Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 bg-[#F9F9F9] hover:bg-gray-100 py-2.5 rounded-lg text-sm font-semibold text-black transition-colors">
              <FaApple className="w-5 h-5 text-black" />
              Log in with Apple
            </button>
          </div>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-black mb-1.5">Full Name</label>
              <input type="text" placeholder="Write your name" className="w-full bg-[#F5F5F5] border border-transparent rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C853]/30 focus:border-[#00C853] transition-all text-black placeholder-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1.5">Email address</label>
              <input type="email" placeholder="Write your Email" className="w-full bg-[#F5F5F5] border border-transparent rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C853]/30 focus:border-[#00C853] transition-all text-black placeholder-gray-400" />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1.5">Country</label>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F5] border border-transparent appearance-none rounded-lg px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C853]/30 focus:border-[#00C853] transition-all">
                    <option value="">Type in your country</option>
                    <option value="NG">Nigeria</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1.5">City</label>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F5] border border-transparent appearance-none rounded-lg px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C853]/30 focus:border-[#00C853] transition-all">
                    <option value="">City of residence</option>
                    <option value="LOS">Lagos</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1.5">How did you hear about us</label>
              <div className="relative">
                <select className="w-full bg-[#F5F5F5] border border-transparent appearance-none rounded-lg px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C853]/30 focus:border-[#00C853] transition-all">
                  <option value="">Egs facebook</option>
                  <option value="fb">Facebook</option>
                  <option value="tw">Twitter</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#00C853] focus:ring-[#00C853]" />
              <label htmlFor="terms" className="text-sm text-black">
                I agree to the terms and conditions, <a href="#" className="text-[#00C853] hover:underline">Terms & Condition</a>
              </label>
            </div>

            <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#E7F644] to-[#25D366] text-black font-bold py-3.5 rounded-[2rem] shadow-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-[#00C853] font-semibold hover:underline">Sign in</Link>
          </p>
        </ScrollReveal>
      </div>

      {/* Right side: Branding / Illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-[#E7F644] to-[#25D366] p-12 flex-col items-center justify-center relative overflow-hidden">
        <ScrollReveal animation="fade-up" duration={1000} delay={200} className="max-w-[80%] text-center relative z-10 mb-16">
          <p className="text-[2rem] font-normal leading-[1.4] text-black">
            DP Hub is a digital productivity ecosystem training tech talent, helping businesses grow, and building innovative solutions that connect people to real opportunities.
          </p>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" duration={1200} delay={400} className="relative z-10 w-full max-w-[500px] aspect-square flex items-center justify-center">
          <img src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/businessplan.png" alt="Illustration" className="w-full h-full object-contain filter drop-shadow-xl opacity-90" />
        </ScrollReveal>
      </div>
    </div>
  );
}
