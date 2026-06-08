import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import {
  FreeZoneIncludes,
  FreeZoneIntro,
  FreeZoneWhyChoose,
} from "@/components/free-zone/free-zone-sections";
import {
  Faq,
  GrowthCta,
  PageHero,
  ServiceTicker,
  Testimonials,
} from "@/components/sections";
import type { FaqItem } from "@/components/sections";

const freeZoneFaqs: FaqItem[] = [
  {
    question: "What is included in business setup in a Dubai Free Zone?",
    answer:
      "Free zone setup typically includes activity selection, free zone authority coordination, trade name reservation, document preparation, license issuance, visa support, and banking documentation assistance.",
  },
  {
    question: "Do I get 100% ownership of my company in a Dubai Free Zone?",
    answer:
      "Yes. Dubai free zones generally allow 100% foreign ownership, subject to the rules and activity approvals of the chosen free zone authority.",
  },
  {
    question: "Why should I choose Virtuo to set up my Free Zone company?",
    answer:
      "Virtuo helps compare suitable free zones, prepares documentation, coordinates authority approvals, and keeps the process organized from license selection through post-setup support.",
  },
  {
    question: "How can I get started with my Free Zone business setup?",
    answer:
      "You can speak with a Virtuo setup expert to confirm your activity, visa needs, preferred jurisdiction, and required documents before starting the application.",
  },
];

export const metadata: Metadata = {
  title: "Business Setup in Free Zone | Virtuo Services",
  description:
    "Set up a business in a Dubai free zone with Virtuo Services, including licensing, documentation, visa, and banking support.",
};

export default function BusinessSetupInFreeZonePage() {
  return (
    <main>
      <PageHero
        title="Business Setup in Free Zone"
        accent="Free Zone"
        imageSrc="/images/free-zone/hero-image.png"
        imageAlt="Dubai skyline at dusk"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Business Setup in Free Zone" },
        ]}
      />
      <ServiceTicker />
      <FreeZoneIntro />
      <FreeZoneIncludes />
      <ServiceTicker crossed />
      <FreeZoneWhyChoose />
      <GrowthCta />
      <ContactFormSection
        formTitle="Speak to a Business Setup Expert"
        buttonLabel="Submit The Form"
        sectionClassName="pt-[100px] sm:pt-[100px]"
      />
      <ServiceTicker crossed />
      <Testimonials />
      <Faq items={freeZoneFaqs} defaultOpenIndex={1} />
    </main>
  );
}
