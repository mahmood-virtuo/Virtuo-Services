import Image from "next/image";
import { ButtonLink } from "../button-link";

export function Hero() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-slate-800 text-white">
      <Image
        src="/images/home/hero-image.png"
        alt="Museum of the Future and Dubai skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,24,.35),rgba(0,0,0,.48))]" />
      <div className="container-page relative flex min-h-[900px] items-center justify-center pb-8 pt-44">
        <div className="max-w-[980px] text-center">
          <div className="mx-auto mb-10 inline-flex items-center rounded-full bg-white p-1 pr-4 text-[11px] font-medium text-orange sm:text-sm">
            <span className="mr-2 rounded-full bg-orange px-3 py-1 text-white">
              New
            </span>
            Check out the new Resources
          </div>
          <h1 className="font-display text-[2.35rem] font-medium leading-[1.04] tracking-[-0.03em] sm:text-7xl lg:text-[88px]">
            Start Your Business
            <br />
            in UAE with Ease
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-sm text-white/80 sm:text-base">
            From blueprint to breakthrough. Launch your legacy in the world&apos;s
            most dynamic economy.
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
