"use client"
import HomePage from "@/components/Home/HomePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home")
  })
  return (<HomePage />);
}