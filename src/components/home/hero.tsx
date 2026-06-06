import Image from "next/image";
import { ButtonLink } from "../button-link";

type HeroProps = {
  badgeLabel?: string;
  badgeText?: string;
  titleLineOne?: string;
  titleLineTwo?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  badgeLabel = "New",
  badgeText = "Check out the new Resources",
  titleLineOne = "Start Your Business",
  titleLineTwo = "in UAE with Ease",
  description = "From blueprint to breakthrough. Launch your legacy in the world's most dynamic economy.",
  imageSrc = "/images/home/hero-image.png",
  imageAlt = "Museum of the Future and Dubai skyline",
}: HeroProps) {
  return (
    <section className="relative h-[720px] overflow-hidden bg-slate-800 text-white sm:h-[760px] lg:h-[min(900px,46.875vw)] lg:min-h-[620px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-top"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,24,.35),rgba(0,0,0,.48))]" />
      <div className="container-page relative flex h-full items-center justify-center pb-8 pt-44 lg:pt-40">
        <div className="max-w-[980px] text-center">
          <div className="type-button mx-auto mb-8 inline-flex items-center rounded-full bg-white p-1 pr-4 text-orange">
            <span className="mr-2 rounded-full bg-orange px-3 py-1 text-white">
              {badgeLabel}
            </span>
            {badgeText}
          </div>
          <h1 className="type-h1">
            {titleLineOne}
            <br />
            {titleLineTwo}
          </h1>
          <p className="type-body mx-auto mt-8 max-w-3xl text-white/80">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink arrow>Get a Quote</ButtonLink>
            <ButtonLink variant="ghost-dark">Speak with an Expert</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
