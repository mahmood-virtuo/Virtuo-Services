import { ServiceIcon } from "../icons";

const services = [
  {
    icon: "pro",
    title: "PRO SERVICES",
    body: "PRO services are mandatory for all businesses to handle government procedures and ensure legal compliance.",
  },
  {
    icon: "visa",
    title: "VISA SERVICES",
    body: "Comprehensive support for obtaining and renewing residency visas, golden visas, employment permits, and family visas.",
  },
  {
    icon: "setup",
    title: "BUSINESS SET-UP",
    body: "End-to-end guidance on starting a company in the UAE, including legal structure advice and jurisdiction selection.",
  },
  {
    icon: "bank",
    title: "BANK ACCOUNT OPENING",
    body: "Strategic assistance in navigating corporate banking and preparing the necessary documentation to secure accounts.",
  },
  {
    icon: "it",
    title: "IT SERVICES",
    body: "Scalable technology solutions designed to build your digital infrastructure, including custom software and support.",
  },
  {
    icon: "receptionist",
    title: "VIRTUAL RECEPTIONIST",
    body: "Professional remote administrative services that manage calls, handle scheduling, and provide a polished front-office experience.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="pb-24 pt-12 sm:pb-36 sm:pt-20">
      <div className="container-page">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          <span className="text-orange">Expert Solutions</span> for
          <br />
          <span className="text-orange">Accelerated Business</span> Growth
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[300px] rounded-[20px] bg-card px-8 py-10 text-white shadow-[0_8px_0_rgba(0,0,0,.12)] sm:px-11 sm:py-12"
            >
              <ServiceIcon
                name={service.icon}
                className="h-12 w-12 text-orange"
              />
              <h3 className="mt-9 font-display text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
