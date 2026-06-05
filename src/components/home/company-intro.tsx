import Image from "next/image";
import { ButtonLink } from "../button-link";

export function CompanyIntro() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div className="order-2 flex w-full justify-center lg:order-1">
          <Image
            src="/images/home/leadership-team.jpg"
            alt="Virtuo Services leadership team"
            width={760}
            height={797}
            loading="eager"
            sizes="(max-width: 1024px) min(100vw - 2rem, 620px), 40vw"
            className="mx-auto h-auto w-[min(100%,620px)] rounded-bl-[48%] rounded-br-[48%]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="type-h2 heading-gradient max-w-[800px]">
            Fast, transparent, UAE-aligned{" "}
            corporate services.
          </h2>
          <div className="type-body mt-9 max-w-[880px] space-y-7 text-black/75">
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
