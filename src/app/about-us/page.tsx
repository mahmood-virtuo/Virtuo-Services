import type { Metadata } from "next";
import { StatsBand } from "@/components/about/stats-band";
import {
  CompanyIntro,
  Faq,
  GrowthCta,
  PageHero,
  ServiceTicker,
  ServicesGrid,
  Testimonials,
  WhyVirtuo,
} from "@/components/sections";
import type { FaqItem } from "@/components/sections";

const introParagraphs = [
  "Virtuo Services is the premier strategic partner for entrepreneurs and corporations navigating the dynamic landscape of the UAE. Specializing in Business Setup in Dubai and comprehensive PRO Services, we bridge the gap between your commercial ambitions and the city's complex regulatory requirements. Our mission is centered on absolute transparency, ensuring that your company formation and Emirati market entry are not just successful, but entirely seamless.",
  "The journey to establishing a presence in Dubai involves a sophisticated web of government interactions. Virtuo Services serves as your expert advocate within this ecosystem. Our elite team of Public Relations Officers and administrative specialists handles the time-consuming and challenging task of clearing paperwork with all major authorities, including the DED, immigration, MOHRE, Dubai Municipality, RTA, banks, and the Notary Public. By managing these vital backend formalities with precision and speed, we free you from the burden of bureaucracy, allowing you to focus exclusively on running and growing your business.",
];

const aboutFaqs: FaqItem[] = [
  {
    question: "What services does Virtuo provide for businesses in Dubai?",
    answer:
      "Virtuo supports company formation, PRO services, visa processing, corporate banking coordination, attestation, and operational documentation for businesses entering or expanding in Dubai.",
  },
  {
    question: "Can Virtuo assist with securing a Golden Visa in Dubai?",
    answer:
      "Yes. Virtuo guides eligible clients through Golden Visa requirements, documentation, application preparation, and government submission support.",
  },
  {
    question: "Why should a business choose Virtuo?",
    answer:
      "Businesses choose Virtuo for transparent pricing, dedicated relationship management, UAE regulatory expertise, and end-to-end support across the setup lifecycle.",
  },
  {
    question: "Does Virtuo handle corporate banking and visa registration?",
    answer:
      "Yes. Virtuo helps prepare banking documentation and coordinates visa registration workflows so your setup remains smooth, compliant, and well organized.",
  },
];

export const metadata: Metadata = {
  title: "About Us | Virtuo Services",
  description:
    "Learn how Virtuo Services supports entrepreneurs and companies with business setup, PRO, visa, and corporate services in Dubai.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        accent="Us"
        imageSrc="/images/about/hero-image.png"
        imageAlt="Business leaders in a meeting overlooking a city skyline"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About us" },
        ]}
      />
      <ServiceTicker />
      <CompanyIntro
        title="Your Gateway to Seamless Business Success in Dubai"
        paragraphs={introParagraphs}
        imageSrc="/images/about/teams-image.png"
        secondaryLabel="Discover more"
      />
      <StatsBand />
      <ServicesGrid />
      <ServiceTicker crossed />
      <WhyVirtuo />
      <GrowthCta />
      <Testimonials />
      <Faq
        items={aboutFaqs}
        defaultOpenIndex={1}
        description="Discover how Virtuo Services helps companies establish, manage, and grow confidently across the UAE business landscape."
      />
    </main>
  );
}
