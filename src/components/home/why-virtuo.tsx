import Image from "next/image";
import { ButtonLink } from "../button-link";

const defaultParagraphs = [
  "Virtuo serves as your definitive liaison with the UAE's regulatory landscape, including DED/DET, MOHRE, and GDRFA. We don't just process paperwork; we navigate the complexities of UAE administrative law so you don't have to.",
  "By providing every client with a dedicated Senior Relationship Manager, we ensure that your corporate lifecycle is managed with absolute precision and 100% confidentiality. With transparent, upfront pricing and zero hidden costs, we provide the stability your business requires to scale confidently in Dubai.",
];

type WhyVirtuoProps = {
  title?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  showImage?: boolean;
};

export function WhyVirtuo({
  title = "Why Do Businesses Choose Virtuo?",
  paragraphs = defaultParagraphs,
  imageSrc = "/images/home/handshake-image.png",
  imageAlt = "Business partners shaking hands",
  showImage = true,
}: WhyVirtuoProps) {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_minmax(480px,601px)]">
        <div>
          <h2 className="type-h2 heading-gradient">
            {title}
          </h2>
          <div className="type-body mt-9 max-w-[920px] space-y-7 text-black/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink variant="outline">Learn more About Us</ButtonLink>
            <ButtonLink variant="outline">Speak with an Expert</ButtonLink>
          </div>
        </div>
        {showImage && (
          <div className="mx-auto hidden w-full max-w-[520px] lg:block xl:max-w-[601px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={601}
              height={601}
              loading="eager"
              sizes="(max-width: 1024px) 80vw, 34vw"
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
