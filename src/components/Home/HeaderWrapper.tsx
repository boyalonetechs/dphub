"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Hide header on auth pages
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <Header />;
}
