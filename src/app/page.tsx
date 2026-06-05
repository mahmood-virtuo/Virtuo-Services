import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollTopButton } from "@/components/scroll-top-button";
import { CompanyIntro } from "@/components/home/company-intro";
import { Faq, ServiceTicker, Testimonials } from "@/components/sections";
import { GrowthCta } from "@/components/home/growth-cta";
import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyVirtuo } from "@/components/home/why-virtuo";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
      <ScrollTopButton />
    </>
  );
}
