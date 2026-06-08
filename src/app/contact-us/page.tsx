import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactInfo } from "@/components/contact/contact-info";
import {
  GrowthCta,
  PageHero,
  ServiceTicker,
  Testimonials,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us | Virtuo Services",
  description:
    "Contact Virtuo Services for business setup, PRO, visa, and corporate support in Dubai.",
};

export default function ContactUsPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        accent="Us"
        imageSrc="/images/contact/hero-image.png"
        imageAlt="Business handshake"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <ServiceTicker />
      <ContactInfo />
      <ServiceTicker crossed />
      <ContactFormSection />
      <GrowthCta />
      <Testimonials />
    </main>
  );
}
