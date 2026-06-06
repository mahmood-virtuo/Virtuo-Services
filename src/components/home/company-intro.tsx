import Image from "next/image";
import { ButtonLink } from "../button-link";

const defaultParagraphs = [
  "Virtuo Services F.Z.C is a UAE-based business solutions provider offering company formation, compliance, attestation, banking, and corporate services. We help entrepreneurs, SMEs, and international firms set up and run businesses smoothly with reliable, transparent support.",
  "Mainland company formation in the UAE allows businesses to operate across the Emirates and access local and global markets. Virtuo provides end-to-end assistance, ensuring a seamless and compliant setup process.",
];

type CompanyIntroProps = {
  title?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryVariant?: "outline" | "ghost-dark";
  className?: string;
};

export function CompanyIntro({
  title = "Fast, transparent, UAE-aligned corporate services.",
  paragraphs = defaultParagraphs,
  imageSrc = "/images/home/teams-image.png",
  imageAlt = "Virtuo Services leadership team",
  primaryLabel = "Get a Quote",
  secondaryLabel = "Speak with an Expert",
  secondaryVariant = "outline",
  className = "",
}: CompanyIntroProps) {
  return (
    <section id="about" className={`py-20 sm:pb-28 sm:pt-14 lg:py-36 ${className}`}>
      <div className="container-page grid min-w-0 items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div className="order-2 flex min-w-0 w-full justify-center lg:order-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={760}
            height={797}
            loading="eager"
            sizes="(max-width: 1024px) min(100vw - 2rem, 620px), 40vw"
            className="mx-auto h-auto w-[min(100%,620px)] rounded-bl-[48%] rounded-br-[48%]"
          />
        </div>
        <div className="order-1 min-w-0 lg:order-2">
          <h2 className="type-h2 heading-gradient max-w-[800px] break-words">
            {title}
          </h2>
          <div className="type-body mt-9 max-w-[880px] space-y-7 text-black/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink arrow>{primaryLabel}</ButtonLink>
            <ButtonLink variant={secondaryVariant}>{secondaryLabel}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
