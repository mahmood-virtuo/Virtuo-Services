import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CompanyIntro } from "@/components/home/company-intro";
import { Faq } from "@/components/home/faq";
import { GrowthCta } from "@/components/home/growth-cta";
import { Hero } from "@/components/home/hero";
import { ServiceTicker } from "@/components/home/service-ticker";
import { ServicesGrid } from "@/components/home/services-grid";
import { Testimonials } from "@/components/home/testimonials";
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
    </>
  );
}
