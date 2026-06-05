import Image from "next/image";
import { ButtonLink } from "../button-link";

export function CompanyIntro() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div className="relative order-2 mx-auto aspect-[62/65] w-full max-w-[620px] overflow-hidden rounded-bl-[48%] rounded-br-[48%] lg:order-1">
          <Image
            src="/images/home/leadership-team.jpg"
            alt="Virtuo Services leadership team"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="heading-gradient max-w-[800px] font-display text-[2rem] font-medium leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[58px]">
            Fast, transparent, UAE-aligned{" "}
            corporate services.
          </h2>
          <div className="mt-9 max-w-[880px] space-y-7 text-sm leading-7 text-black/75 sm:text-base">
            <p>
              Virtuo Services F.Z.C is a UAE-based business solutions provider
              offering company formation, compliance, attestation, banking, and
              corporate services. We help entrepreneurs, SMEs, and international
              firms set up and run businesses smoothly with reliable,
              transparent support.
            </p>
            <p>
              Mainland company formation in the UAE allows businesses to operate
              across the Emirates and access local and global markets. Virtuo
              provides end-to-end assistance, ensuring a seamless and compliant
              setup process.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink arrow>Get a Quote</ButtonLink>
            <ButtonLink variant="outline">Speak with an Expert</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
