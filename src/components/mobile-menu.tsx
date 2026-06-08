"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "./icons";
import { ButtonLink } from "./button-link";

const links = [
  ["About Us", "/about-us"],
  ["Services", "/business-setup-in-free-zone"],
  ["Blogs", "/blogs"],
  ["Contact Us", "/contact-us"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="rounded-md border border-white/50 p-2"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute inset-x-4 top-[154px] rounded-2xl bg-white p-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,.18)] sm:top-[164px]">
          <div className="type-button flex flex-col gap-5">
            {links.map(([label, href]) => (
              href.startsWith("/") ? (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors hover:text-orange active:text-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="transition-colors hover:text-orange active:text-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              )
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink arrow>Get a Quote</ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
