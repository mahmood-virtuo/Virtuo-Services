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
      className={`group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center transition duration-300 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 22 22"
        className="absolute inset-0 h-full w-full text-orange transition-colors duration-300 group-hover:text-card"
        fill="currentColor"
      >
        <path
          d="M21.9905 0V10.9942C21.9905 14.0295 20.7612 16.7796 18.7715 18.7693C16.7818 20.7591 14.0338 21.9905 10.9963 21.9905C7.95882 21.9905 5.21083 20.7591 3.22112 18.7693C1.23142 16.7796 0 14.0316 0 10.9942C0 4.92134 4.9235 0 10.9963 0H21.9905Z"
          className="stroke-transparent transition-colors duration-300 group-hover:stroke-orange"
          strokeWidth="1"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="relative h-7 w-7 text-white sm:h-8 sm:w-8"
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
