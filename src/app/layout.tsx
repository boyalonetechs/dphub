import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DP Hub | Digital Productivity Hub",
  description:
    "DP Hub is a digital productivity ecosystem training tech talent, helping businesses grow, and building innovative solutions that connect people to real opportunities.",
  keywords: [
    "Digital Productivity",
    "Creativity",
    "Tech Talent",
    "Business Growth",
    "Innovation",
    "Opportunities",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
