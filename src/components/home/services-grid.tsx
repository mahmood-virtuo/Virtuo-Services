"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    icon: "/images/cards-icons/pro-services.svg",
    title: "PRO SERVICES",
    body: "PRO services are mandatory for all businesses to handle government procedures and ensure legal compliance.",
  },
  {
    icon: "/images/cards-icons/visa-services.svg",
    title: "VISA SERVICES",
    body: "Comprehensive support for obtaining and renewing residency visas, golden visas, employment permits, and family visas.",
  },
  {
    icon: "/images/cards-icons/business-setup.svg",
    title: "BUSINESS SET-UP",
    body: "End-to-end guidance on starting a company in the UAE, including legal structure advice and jurisdiction selection.",
  },
  {
    icon: "/images/cards-icons/bank-account-opening.svg",
    title: "BANK ACCOUNT OPENING",
    body: "Strategic assistance in navigating corporate banking and preparing the necessary documentation to secure accounts.",
  },
  {
    icon: "/images/cards-icons/it-services.svg",
    title: "IT SERVICES",
    body: "Scalable technology solutions designed to build your digital infrastructure, including custom software and support.",
  },
  {
    icon: "/images/cards-icons/virtual-receptionist.svg",
    title: "VIRTUAL RECEPTIONIST",
    body: "Professional remote administrative services that manage calls, handle scheduling, and provide a polished front-office experience.",
  },
];

export function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="pb-24 pt-12 sm:pb-36 sm:pt-20">
      <div className="container-page">
        <h2 className="type-h2 heading-gradient mx-auto max-w-3xl text-center">
          Expert Solutions for
          <br />
          Accelerated Business Growth
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
            <article
              key={service.title}
              tabIndex={0}
              className={`group/card min-h-[300px] rounded-[20px] px-8 py-10 transition-colors duration-300 hover:bg-orange hover:text-ink focus:bg-orange focus:text-ink focus:outline-none active:bg-orange active:text-ink sm:px-11 sm:py-12 ${
                isActive ? "bg-orange text-ink" : "bg-card text-white"
              }`}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <Image
                src={service.icon}
                alt=""
                width={42}
                height={42}
                className={`h-[42px] w-[42px] transition duration-300 group-hover/card:brightness-0 group-focus/card:brightness-0 group-active/card:brightness-0 ${
                  isActive ? "brightness-0" : ""
                }`}
              />
              <h3 className="type-h3 mt-9">
                {service.title}
              </h3>
              <p
                className={`type-body mt-4 transition-colors duration-300 group-hover/card:text-ink group-focus/card:text-ink group-active/card:text-ink ${
                  isActive ? "text-ink" : "text-white"
                }`}
              >
                {service.body}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
