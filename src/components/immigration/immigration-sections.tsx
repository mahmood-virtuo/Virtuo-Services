import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

const serviceParagraphs = [
  "Visa and immigration procedures in the UAE are complex and require strict adherence to regulatory guidelines, accurate documentation, and timely processing to avoid delays or legal issues. Virtuo Services F.Z.C provides comprehensive visa and immigration solutions for investors, employees, corporate entities, and families, ensuring that every application is handled efficiently and in full compliance with UAE law.",
  "Our expert team manages all aspects of the process, including investor visa, employee work permits, dependent and family visas, residency renewals, Emirates ID registration, and visa stamping. We liaise directly with key government authorities such as GDRFA, ICA, MOHRE, and Emirates ID centers, streamlining approvals and minimizing bureaucratic hurdles.",
  "By leveraging our experience and strong relationships with these authorities, we help clients save time, reduce costs, and avoid common pitfalls. From document preparation and submission to follow-ups and final approvals, our team ensures a smooth, hassle-free experience.",
];

const tradeLicenseParagraphs = [
  "Navigating the UAE visa and immigration processes can be complex, time-consuming, and highly detailed, requiring accuracy, strict compliance with regulations, and timely submission of documents. Virtuo Services F.Z.C offers end-to-end support for all types of visa and related immigration services, ensuring a seamless and stress-free experience for investors, employees, families, and corporate entities.",
  "Our experienced team manages every step of the process, from documentation and application preparation to approvals, renewals, and cancellations. By handling these critical administrative tasks efficiently, we free you to focus on growing your business, relocating your family, or managing your team.",
];

const advantages = [
  "Investor and partner visas",
  "Employment visas",
  "Family and dependent visas",
  "Golden Visa processing",
  "Visa renewals and cancellations",
  "Entry permits and status change applications",
  "Emirates ID typing and biometric scheduling",
  "Medical fitness test coordination",
  "Labour contract preparation and updates",
  "Immigration file and establishment card services",
];

export function ImmigrationOverview() {
  return (
    <section className="bg-white px-4 py-[100px] text-ink">
      <div className="container-page grid w-full items-center justify-center gap-10 2xl:grid-cols-[622px_minmax(0,1fr)] 2xl:justify-start 2xl:gap-[90px]">
        <div className="flex justify-center md:hidden 2xl:flex">
          <Image
            src="/images/immigration-services/image-1.png"
            alt="Visa consultation with immigration expert"
            width={624}
            height={619}
            className="h-auto w-full max-w-[624px]"
          />
        </div>
        <div>
          <h2 className="type-h2 heading-gradient max-w-[760px]">
            Comprehensive UAE Visa and Immigration Services
          </h2>
          <div className="type-body mt-8 max-w-[760px] space-y-6 text-justify text-black/75">
            {serviceParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact-us" arrow>
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImmigrationTradeLicense() {
  return (
    <section className="bg-white px-4 pb-[100px] text-ink">
      <div className="container-page grid w-full items-center justify-center gap-10 2xl:grid-cols-[760px_520px] 2xl:justify-start 2xl:gap-[90px]">
        <div>
          <h2 className="type-h2 heading-gradient max-w-[760px]">
            Why a Trade License Is Essential in the UAE
          </h2>
          <div className="type-body mt-8 max-w-[760px] space-y-6 text-justify text-black/75">
            {tradeLicenseParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-[16px] font-medium leading-[24px] text-ink">
              Advantages
            </h3>
            <ul className="mt-3 space-y-2 text-[14px] font-light leading-[22px] text-black/75">
              {advantages.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <p className="type-body mt-8 max-w-[760px] text-justify text-black/75">
            With Virtuo Services F.Z.C, UAE business setup, visas, and offshore
            services are made seamless, compliant, and stress-free, letting you
            focus on growing your business with confidence.
          </p>
        </div>
        <div className="flex justify-center md:hidden 2xl:flex 2xl:justify-start">
          <Image
            src="/images/immigration-services/image-2.png"
            alt="Residents and families walking in the UAE"
            width={520}
            height={738}
            className="h-auto w-full max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
