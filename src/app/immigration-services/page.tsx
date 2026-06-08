import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import {
  ImmigrationOverview,
  ImmigrationTradeLicense,
} from "@/components/immigration/immigration-sections";
import {
  Faq,
  GrowthCta,
  PageHero,
  ServiceTicker,
  Testimonials,
} from "@/components/sections";
import type { FaqItem } from "@/components/sections";

const immigrationFaqs: FaqItem[] = [
  {
    question: "What types of corporate and family visas does Virtuo handle?",
    answer:
      "Virtuo supports investor, partner, employment, dependent, family, residency renewal, cancellation, Emirates ID, and related immigration applications for individuals and companies.",
  },
  {
    question: "Can Virtuo assist with securing a 10-year UAE Golden Visa?",
    answer:
      "Yes. Setting up your business in a Free Zone allows you to retain 100% foreign ownership of your company without requiring a local UAE partner.",
  },
  {
    question:
      "Why must I establish a business or trade license before sponsoring staff?",
    answer:
      "A valid UAE trade license and establishment file are required before a company can sponsor employee visas, issue labour contracts, or complete immigration procedures.",
  },
  {
    question:
      "What documents do I need to prepare for a corporate visa application?",
    answer:
      "Typical requirements include passport copies, photos, existing visa or entry permit details, company license documents, Emirates ID forms, medical fitness documents, and any authority-specific supporting papers.",
  },
];

export const metadata: Metadata = {
  title: "Immigration Services | Virtuo Services",
  description:
    "UAE immigration and visa services from Virtuo Services, including investor, employee, family, Emirates ID, and Golden Visa support.",
};

export default function ImmigrationServicesPage() {
  return (
    <main>
      <PageHero
        title="Immigration Services"
        accent="Services"
        imageSrc="/images/immigration-services/hero-image.png"
        imageAlt="Business professionals in Dubai"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "PRO Services" },
          { label: "Immigration Services" },
        ]}
      />
      <ServiceTicker />
      <ImmigrationOverview />
      <ImmigrationTradeLicense />
      <ServiceTicker crossed />
      <ContactFormSection formTitle="Speak to an Immigration Expert" />
      <GrowthCta />
      <Testimonials />
      <Faq items={immigrationFaqs} defaultOpenIndex={1} />
    </main>
  );
}
