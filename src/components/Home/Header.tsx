"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { img } from "../Images/server";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "About Us",
      href: "/about",
    },
    // {
    //   name: "Courses",
    //   href: "/courses",
    // },
    {
      name: "Services",
      href: "/services",
    },
  ];
  return (
    <header className="relative flex items-center justify-between px-2 lg:px-6 md:px-18 py-2 lg:py-6 bg-white w-full">
      <Link href="/" className="flex items-center gap-2">
        {/* Logo placeholder */}
        <Image
          src={`${img}/dp_logo.webp`}
          alt="Logo"
          width={130}
          height={130}
          className="scale-70 mt-2 lg:scale-100"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.name.toLocaleLowerCase()}
            className={` hover:text-black transition-colors ${pathname === link.href.toLocaleLowerCase() ? "text-black" : "text-gray-500"}`}
          >
            {link.name}
            {pathname === link.href && (
              <span className="block w-full rounded-full h-[2.5px] bg-black -mt-1"></span>
            )}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-10">
        <button
          onClick={() => router.push("/contact")}
          className="px-6 py-2.5 border border-gray-400 rounded-full text-md font-semibold  hover:bg-black hover:text-white transition-colors"
        >
          Contact Us
        </button>
      </div>

      <button
        className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden z-50 flex flex-col py-4 px-6 space-y-4">
          <nav className="flex flex-col gap-4">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.name.toLocaleLowerCase()}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold hover:text-black transition-colors ${
                  pathname === link.href.toLocaleLowerCase()
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-2.5 border border-gray-400 rounded-full text-md font-semibold hover:bg-black hover:text-white   transition-colors w-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
