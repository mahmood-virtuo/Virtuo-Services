import Image from "next/image";
import { ButtonLink } from "../button-link";

export function WhyVirtuo() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_minmax(480px,601px)]">
        <div>
          <h2 className="heading-gradient font-display text-4xl font-medium tracking-[-0.03em] sm:text-5xl lg:text-[58px]">
            Why Do Businesses Choose Virtuo?
          </h2>
          <div className="mt-9 max-w-[920px] space-y-7 text-sm leading-7 text-black/75 sm:text-base">
            <p>
              Virtuo serves as your definitive liaison with the UAE&apos;s
              regulatory landscape, including DED/DET, MOHRE, and GDRFA. We
              don&apos;t just process paperwork; we navigate the complexities of
              UAE administrative law so you don&apos;t have to.
            </p>
            <p>
              By providing every client with a dedicated Senior Relationship
              Manager, we ensure that your corporate lifecycle is managed with
              absolute precision and 100% confidentiality. With transparent,
              upfront pricing and zero hidden costs, we provide the stability
              your business requires to scale confidently in Dubai.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink variant="outline">Learn more About Us</ButtonLink>
            <ButtonLink variant="outline">Speak with an Expert</ButtonLink>
          </div>
        </div>
        <div className="mx-auto hidden w-full max-w-[520px] lg:block xl:max-w-[601px]">
          <Image
            src="/images/home/handshake-image.png"
            alt="Business partners shaking hands"
            width={601}
            height={601}
            loading="eager"
            sizes="(max-width: 1024px) 80vw, 34vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
