"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    question: "How does Virtuo protect my data?",
    answer:
      "We follow strict confidentiality practices and secure handling procedures throughout every engagement.",
  },
  {
    question: "Can I change my subscription plan at any time?",
    answer:
      "Absolutely - you can upgrade or downgrade directly from your Virtuo dashboard. Prorated billing ensures you only pay for what you use, and changes take effect immediately with no downtime.",
  },
  {
    question: "Are custom integrations available?",
    answer:
      "Yes. Our specialists can scope custom integrations around your operational and compliance requirements.",
  },
  {
    question: "What onboarding support does Virtuo provide?",
    answer:
      "Every client receives guided onboarding and a dedicated relationship manager to coordinate the setup process.",
  },
];

type FaqProps = {
  title?: string;
  description?: string;
  items?: FaqItem[];
  defaultOpenIndex?: number;
};

export function Faq({
  title = "Frequently asked questions",
  description = "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with Virtuo Services.",
  items = defaultFaqs,
  defaultOpenIndex = 1,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <section id="faq" className="orange-grid px-4 py-[100px] text-white">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="type-h2 heading-gradient-light text-center">
          {title}
        </h2>
        <p className="type-body mx-auto mt-8 max-w-3xl text-center text-white">
          {description}
        </p>
        <div className="mt-14 space-y-6">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-xl border border-orange px-6 py-6 transition-colors sm:px-8 ${
                  isOpen ? "bg-orange/20" : "bg-black/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="type-h3 flex w-full cursor-pointer items-center justify-between text-left"
                  onClick={() => setOpenIndex(index)}
                >
                  {faq.question}
                </button>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!isOpen}
                  className="type-body mt-4 max-w-5xl text-white"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
