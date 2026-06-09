"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const menuSections = [
  {
    title: "BUSINESS SETUP",
    links: [
      { label: "MAINLAND BUSINESS SETUP", href: "#services" },
      { label: "FREE ZONE BUSINESS SETUP", href: "/business-setup-in-free-zone" },
      { label: "OFFSHORE BUSINESS SETUP", href: "#services" },
    ],
  },
  {
    title: "PRO SERVICES",
    links: [
      { label: "IMMIGRATION SERVICES", href: "/immigration-services" },
      { label: "TRADE LICENSE SERVICES", href: "#services" },
      { label: "NOTARY PUBLIC SERVICES", href: "#services" },
      { label: "CONSULATE SERVICES", href: "#services" },
      { label: "ATTESTATION SERVICES", href: "#services" },
      { label: "MOHRE SERVICES", href: "#services" },
      { label: "LEGAL TRANSLATION SERVICES", href: "#services" },
      { label: "DOCUMENT CLEARANCE SERVICES", href: "#services" },
      { label: "POWER OF ATTORNEY", href: "#services" },
      { label: "VIRTUAL OFFICE", href: "#services" },
      { label: "GDRFA", href: "#services" },
    ],
  },
  {
    title: "VISA SERVICES",
    links: [
      { label: "GOLDEN VISA", href: "#services" },
      { label: "RESIDENCE VISA", href: "#services" },
      { label: "DEPENDENT VISA", href: "#services" },
      { label: "EMPLOYEMENT VISA", href: "#services" },
      { label: "INVESTOR VISA", href: "#services" },
    ],
  },
  {
    title: "BANK ACCOUNT OPENING",
    links: [
      { label: "BUSINESS BANK ACCOUNT OPENING", href: "#services" },
      { label: "CORPORATE BANK OPENING", href: "#services" },
      { label: "OFFSHORE BANK ACCOUNT", href: "#services" },
      { label: "SME/STARTUP ACCOUNT", href: "#services" },
    ],
  },
];

export function MegaMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = menuSections[activeIndex];

  return (
    <div className="group/menu relative flex h-[118px] items-center">
      <button
        type="button"
        className="flex items-center gap-1.5 transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Services <ChevronDownIcon className="h-4 w-4" />
      </button>

      <div
        data-mega-menu-panel
        className="pointer-events-none fixed inset-x-0 top-[148px] z-50 w-screen translate-y-3 opacity-0 transition duration-200 ease-out group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100"
      >
        <div className="grid min-h-[480px] justify-center bg-white px-10 py-16 text-ink shadow-[0_24px_60px_rgba(0,0,0,.14)]">
          <div className="grid h-[345px] w-[min(1260px,calc(100vw-80px))] grid-cols-[minmax(0,420px)_1px_minmax(0,639px)] items-center gap-x-[100px]">
          <div className="flex flex-col items-start justify-center gap-6">
            {menuSections.map((section, index) => (
              <a
                key={section.title}
                href="#services"
                className={`type-h3 transition-colors ${
                  activeIndex === index ? "text-orange" : "text-ink"
                } hover:text-orange`}
                data-mega-category={section.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                {section.title}
              </a>
            ))}
          </div>
          <div className="h-full bg-orange/70" />
          <div className="type-body grid content-center gap-x-[100px] gap-y-8 text-left uppercase md:grid-cols-[minmax(0,270px)_minmax(0,270px)]">
            {active.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
