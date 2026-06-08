import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

const introParagraphs = [
  "Free zone company formation in the UAE offers entrepreneurs and international investors an efficient way to establish a business in a dynamic, business-friendly environment. With 100% foreign ownership, tax advantages, and simplified regulations, UAE free zones provide an ideal platform for startups, SMEs, and global companies looking to expand their presence in the region.",
  "The UAE hosts a wide range of specialized free zones, each designed to support specific industries and business activities. These zones offer streamlined administrative processes, modern infrastructure, and strong support for international trade and operations.",
  "Virtuo Services F.Z.C provides complete support for businesses looking to set up in the UAE free zones. From selecting the right free zone to handling documentation and approvals, our team ensures a smooth, compliant, and efficient company setup process tailored to your business needs.",
];

const includedItems = [
  {
    title: "Business Activity Selection and Licensing Guidance",
    body: "We help you choose the correct business activity and license type that aligns with your operations and complies with free zone regulations.",
  },
  {
    title: "Free Zone Selection Based on Industry and Requirements",
    body: "Our team recommends the most suitable free zone based on your industry, business goals, and operational needs.",
  },
  {
    title: "Trade Name Reservation and Initial Approval",
    body: "We handle the reservation of your company's trade name and obtain the necessary initial approvals from the relevant free zone authority.",
  },
  {
    title: "Memorandum of Association (MOA) Drafting and Notarization",
    body: "We prepare the Memorandum of Association outlining your company structure and arrange notarization if required by the free zone authority.",
  },
  {
    title: "Office Space, Flexi-Desk, or Virtual Office Arrangements",
    body: "We assist in securing the appropriate workspace solution, including physical offices, flexi-desks, or virtual office options.",
  },
  {
    title: "Trade License Issuance",
    body: "Our team manages the application process to obtain your official trade license, allowing you to legally operate your business.",
  },
  {
    title: "Establishment Card Issuance",
    body: "We process the establishment card required for your company to sponsor visas and manage immigration-related services.",
  },
  {
    title: "Investor and Employee Visa Processing",
    body: "We handle the full visa application process for investors and employees, including documentation, approvals, and stamping.",
  },
  {
    title: "Labour and Immigration File Setup",
    body: "We set up your company's labour and immigration files to ensure compliance with UAE employment and immigration regulations.",
  },
  {
    title: "Corporate Bank Account Assistance",
    body: "We guide you through the bank account opening process and assist with documentation and bank selection.",
  },
];

const includedCardPlacement = [
  "lg:col-start-2 lg:col-span-2",
  "lg:col-span-2",
  "lg:col-start-1 lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-start-1 lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-start-2 lg:col-span-2",
  "lg:col-span-2",
];

const whyBullets = [
  "Expertise across all major UAE free zones (DMCC, IFZA, Meydan, DAFZA, JAFZA, and more)",
  "Fast and transparent processing",
  "Strong relationships with free zone authorities",
  "Tailored solutions for startups, SMEs, and multinational companies",
  "Cost-effective and efficient setup packages",
];

export function FreeZoneIntro() {
  return (
    <section className="bg-white px-4 py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div className="flex justify-center">
          <Image
            src="/images/free-zone/business-setup-dubai-free-zone.png"
            alt="Business setup consultation in Dubai free zone"
            width={622}
            height={558}
            className="h-auto w-[min(100%,520px)]"
          />
        </div>
        <div>
          <h2 className="type-h2 heading-gradient max-w-[760px]">
            Business Setup in Dubai Freezone
          </h2>
          <div className="type-body mt-8 max-w-[850px] space-y-6 text-black/75">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink arrow>Get Started</ButtonLink>
            <ButtonLink variant="outline">Discover more</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FreeZoneIncludes() {
  return (
    <section className="bg-white px-4 pb-24 text-ink sm:pb-32">
      <div className="mx-auto max-w-[1250px]">
        <h2 className="type-h2 heading-gradient text-center">
          What Free Zone Business Setup Includes
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1250px] gap-x-6 gap-y-5 md:grid-cols-2 lg:grid-cols-6">
          {includedItems.map((item, index) => (
            <article
              key={item.title}
              className={`grid min-h-[168px] grid-cols-[86px_1fr] items-center gap-5 rounded-[8px] bg-card px-8 py-7 text-white shadow-[0_7px_9px_rgba(0,0,0,.28)] md:grid-cols-[78px_1fr] ${includedCardPlacement[index]}`}
            >
              <Image
                src={`/images/free-zone/icons/icon${index + 1}.svg`}
                alt=""
                width={95}
                height={96}
                className="h-auto w-[76px] justify-self-center"
              />
              <div>
                <h3 className="text-[16px] font-semibold leading-[20px] text-orange">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-[17px] text-white/90">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FreeZoneWhyChoose() {
  return (
    <section className="bg-white px-4 py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <h2 className="type-h2 heading-gradient max-w-[760px]">
            Why Do Businesses Choose Virtuo?
          </h2>
          <div className="type-body mt-8 max-w-[800px] space-y-6 text-black/75">
            <p>
              Virtuo Services F.Z.C has deep expertise in the company formation
              process and ongoing UAE business support. We simplify every step
              with transparent guidance, fast documentation, and dependable
              coordination with relevant authorities.
            </p>
            <p>
              Our support is built for entrepreneurs, investors, SMEs, and
              international businesses looking to establish their presence in the
              UAE with complete confidence.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-[16px] font-medium leading-[24px] text-ink">
              Our Advantages:
            </h3>
            <ul className="mt-3 space-y-2 text-[14px] font-light leading-[22px] text-black/75">
              {whyBullets.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink arrow>Get a Quote</ButtonLink>
            <ButtonLink variant="outline">Speak with an Expert</ButtonLink>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-[min(100%,430px)] overflow-hidden rounded-full">
            <Image
              src="/images/contact/hero-image.png"
              alt="Business handshake"
              fill
              sizes="(min-width: 1024px) 430px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
