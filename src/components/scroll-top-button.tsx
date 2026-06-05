"use client";

import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 560);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`group fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center transition duration-300 sm:bottom-8 sm:right-8 sm:h-20 sm:w-20 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="scroll-top-shape absolute inset-0 bg-orange transition-colors duration-300 group-hover:bg-card" />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="relative h-9 w-9 text-white sm:h-11 sm:w-11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 20V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
