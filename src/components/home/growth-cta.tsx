import { ButtonLink } from "../button-link";

export function GrowthCta() {
  return (
    <section className="orange-grid px-4 py-24 text-center text-white sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[58px]">
          Unlock Business <span className="text-orange">Potential with</span>
          <br />
          Virtuo&apos;s All-in-One Expert{" "}
          <span className="text-orange">Services</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
          At Virtuo Services, we simplify the entire process with end-to-end
          business setup and PRO solutions, ensuring your journey in the UAE is
          smooth, compliant, and stress-free.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink arrow>Get a Quote</ButtonLink>
          <ButtonLink variant="ghost-dark">Discover more</ButtonLink>
        </div>
      </div>
    </section>
  );
}
