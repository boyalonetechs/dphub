import Image from "next/image";
import Link from "next/link";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <defs>
      <mask id="SVGgMs3O0ng">
        <path
          fill="#fff"
          d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"
        />
        <g
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        >
          <path
            strokeDasharray="36"
            d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5"
          >
            <animate
              fill="freeze"
              attributeName="strokeDashoffset"
              dur="0.6s"
              values="72;36"
            />
          </path>
          <path strokeDasharray="10" strokeDashoffset="20" d="M18 2.5v8">
            <animate
              fill="freeze"
              attributeName="strokeDashoffset"
              begin="0.5s"
              dur="0.1s"
              to="10"
            />
          </path>
        </g>
      </mask>
    </defs>
    <path fill="currentColor" d="M0 0h24v24H0z" mask="url(#SVGgMs3O0ng)" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-[3rem] mt-12 pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-12">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 md:mb-16 border-b border-white/10 pb-12 md:pb-16">
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 mb-16">
              <Image
                src="https://ik.imagekit.io/spitndu0j/Dp%20Hub/dark_logo.png"
                alt=""
                width={100}
                className="scale-120 ml-2 lg:ml-0"
                height={100}
              />
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#00D05A]/20 text-[#00D05A] font-semibold text-xs rounded-full mb-4">
                Get in touch
              </span>
              <h3 className="text-2xl font-bold mb-2">
                Let&apos;s build something great together
              </h3>
              <p className="text-gray-400 text-sm">
                <span className=" block text-white mb-2 font-bold">
                  Email: Dphubbyleadpath@gmail.com
                </span>
                <span className=" block text-white mb-2 font-semibold">
                  Phone:+2349012601449
                </span>
                Address: No 5 Umuola Road Opposite Evergreen Hotel, Ogborhill
                Aba, Abia State
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col md:items-end justify-center">
            <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-300 mb-8 md:mb-12">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <form className="flex items-center w-full max-w-md bg-white/5 rounded-full border border-white/10 p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-sm text-white px-4 py-2 outline-none w-full placeholder:text-gray-500"
              />
              <button className="bg-[#00D05A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#00b34d] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Brand Agency. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
