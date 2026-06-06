"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const menuSections = [
  {
    title: "BUSINESS SETUP",
    links: [
      "MAINLAND BUSINESS SETUP",
      "FREE ZONE BUSINESS SETUP",
      "OFFSHORE BUSINESS SETUP",
    ],
  },
  {
    title: "PRO SERVICES",
    links: [
      "IMMIGRATION SERVICES",
      "TRADE LICENSE SERVICES",
      "NOTARY PUBLIC SERVICES",
      "CONSULATE SERVICES",
      "ATTESTATION SERVICES",
      "MOHRE SERVICES",
      "LEGAL TRANSLATION SERVICES",
      "DOCUMENT CLEARANCE SERVICES",
      "POWER OF ATTORNEY",
      "VIRTUAL OFFICE",
      "GDRFA",
    ],
  },
  {
    title: "VISA SERVICES",
    links: [
      "GOLDEN VISA",
      "RESIDENCE VISA",
      "DEPENDENT VISA",
      "EMPLOYEMENT VISA",
      "INVESTOR VISA",
    ],
  },
  {
    title: "BANK ACCOUNT OPENING",
    links: [
      "BUSINESS BANK ACCOUNT OPENING",
      "CORPORATE BANK OPENING",
      "OFFSHORE BANK ACCOUNT",
      "SME/STARTUP ACCOUNT",
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
        <div className="grid min-h-[480px] grid-cols-[.82fr_1px_1.18fr] bg-white px-10 py-16 text-ink shadow-[0_24px_60px_rgba(0,0,0,.14)] xl:px-20">
          <div className="flex flex-col justify-center gap-6 pr-10 xl:pr-16">
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
          <div className="bg-orange/70" />
          <div className="type-body grid content-center gap-x-14 gap-y-8 pl-10 uppercase md:grid-cols-2 xl:gap-x-24 xl:pl-20">
            {active.links.map((link) => (
              <a
                key={link}
                href="#services"
                className="transition-colors hover:text-orange"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
