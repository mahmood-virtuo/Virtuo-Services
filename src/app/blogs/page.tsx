import type { Metadata } from "next";
import { LatestBlogs } from "@/components/blogs/latest-blogs";
import {
  Faq,
  GrowthCta,
  PageHero,
  ServiceTicker,
  Testimonials,
} from "@/components/sections";
import type { FaqItem } from "@/components/sections";

const blogFaqs: FaqItem[] = [
  {
    question: "What services does Virtuo provide for businesses in Dubai?",
    answer:
      "Virtuo supports business setup, PRO services, visa processing, corporate banking coordination, and documentation support for companies operating in Dubai.",
  },
  {
    question: "Can Virtuo assist with securing a Golden Visa in Dubai?",
    answer:
      "Yes. Virtuo explicitly provides specialized support for navigating and securing the UAE Golden Visa for eligible individuals and investors.",
  },
  {
    question: "Does Virtuo handle corporate banking and tax registration?",
    answer:
      "Yes. Virtuo helps prepare banking documentation and coordinates the required corporate registration steps so your setup remains compliant.",
  },
  {
    question: "Why should a business choose Virtuo over other providers?",
    answer:
      "Businesses choose Virtuo for transparent support, UAE regulatory expertise, dedicated relationship management, and end-to-end handling across the setup journey.",
  },
];

export const metadata: Metadata = {
  title: "Blogs | Virtuo Services",
  description:
    "Read the latest Virtuo Services insights on PRO services, visas, company formation, and business setup in Dubai.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        title="Blogs"
        accent="s"
        imageSrc="/images/blogs/hero-image.png"
        imageAlt="Dubai skyline at sunset"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs" },
        ]}
      />
      <ServiceTicker />
      <LatestBlogs />
      <GrowthCta />
      <Testimonials />
      <Faq items={blogFaqs} defaultOpenIndex={1} />
    </main>
  );
}
