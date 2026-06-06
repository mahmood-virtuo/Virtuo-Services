import {
  CompanyIntro,
  Faq,
  GrowthCta,
  Hero,
  ServiceTicker,
  ServicesGrid,
  Testimonials,
  WhyVirtuo,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceTicker />
      <CompanyIntro />
      <ServicesGrid />
      <ServiceTicker crossed />
      <WhyVirtuo />
      <GrowthCta />
      <Testimonials />
      <Faq />
    </main>
  );
}
