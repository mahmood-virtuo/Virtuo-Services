import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import {
  Faq,
  GrowthCta,
  PageHero,
  ServiceTicker,
  Testimonials,
} from "@/components/sections";
import type { FaqItem } from "@/components/sections";

const quoteFaqs: FaqItem[] = [
  {
    question: "How can I estimate my UAE business setup cost?",
    answer:
      "Share your business activity, preferred jurisdiction, visa needs, and office requirements so our team can prepare an accurate estimate.",
  },
  {
    question: "How do I request a personalized service quote from Virtuo?",
    answer:
      "Submit the quote form and a Virtuo consultant will review your requirements before confirming the most suitable package and next steps.",
  },
  {
    question: "What major corporate services does Virtuo offer?",
    answer:
      "Virtuo supports company formation, PRO services, visa processing, bank account opening, attestation, compliance, and ongoing business support.",
  },
  {
    question: "Can I see feedback from previous clients?",
    answer:
      "Yes. Our testimonials section highlights client experiences from companies that have worked with Virtuo across UAE business services.",
  },
];

export const metadata: Metadata = {
  title: "Get a Quote | Virtuo Services",
  description:
    "Request a UAE business setup quote from Virtuo Services for company formation, PRO, visa, and corporate support.",
};

function QuoteCostSection() {
  return (
    <section className="bg-white px-4 py-[100px] text-ink">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="type-h2 heading-gradient text-center">
          Calculate your UAE Business Setup Cost
        </h2>

        <div className="mx-auto mt-10 max-w-[850px] rounded-[10px] border border-black/40 px-6 py-8 sm:px-10 sm:py-10">
          <h3 className="max-w-[620px] text-[28px] font-medium leading-[34px] text-ink sm:text-[32px] sm:leading-[38px]">
            Choose your business activity to start your business setup cost estimate
          </h3>
          <p className="mt-3 max-w-[720px] text-[13px] font-light leading-[18px] text-black/70">
            Choose the business activity that you would like to carry out in the UAE.
            Also from helping you identify the location and license type that suits your
            company, this will also help you get a better estimate of the cost of your
            company setup.
          </p>
          <label className="mt-8 block">
            <span className="sr-only">Business activity</span>
            <select
              defaultValue=""
              className="h-9 w-full rounded-sm border border-black/15 bg-white px-3 text-[13px] font-light text-black/55 outline-none focus:border-orange"
            >
              <option value="" disabled>Select</option>
              <option>Business Setup</option>
              <option>PRO Services</option>
              <option>Golden Visa</option>
              <option>Bank Account Opening</option>
            </select>
          </label>
          <button
            type="button"
            className="mt-4 h-9 w-full rounded-sm bg-orange text-[13px] font-medium leading-[18px] text-white transition-opacity hover:opacity-90"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default function GetAQuotePage() {
  return (
    <main>
      <PageHero
        title="Get a Quote"
        accent="Quote"
        imageSrc="/images/quote/hero-image.png"
        imageAlt="Dubai skyline at sunset"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get a Quote" },
        ]}
      />
      <ServiceTicker />
      <QuoteCostSection />
      <GrowthCta />
      <ContactFormSection />
      <ServiceTicker crossed />
      <Testimonials />
      <Faq items={quoteFaqs} defaultOpenIndex={1} />
    </main>
  );
}
