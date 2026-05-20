"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "fade-right" | "fade-left";
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number; // 0 to 1
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve once it's visible so it doesn't animate out and in repeatedly
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  // Base transition styles
  const transitionStyle = "transition-all ease-out";
  
  // Hidden styles based on animation type
  let hiddenStyle = "opacity-0";
  if (animation === "fade-up") hiddenStyle += " translate-y-12";
  if (animation === "fade-right" || animation === "slide-right") hiddenStyle += " -translate-x-12";
  if (animation === "fade-left" || animation === "slide-left") hiddenStyle += " translate-x-12";
  if (animation === "fade-in") hiddenStyle += " scale-95";

  // Visible styles
  const visibleStyle = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <Component
      ref={ref}
      className={`${transitionStyle} ${isVisible ? visibleStyle : hiddenStyle} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
