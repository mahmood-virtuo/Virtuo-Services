import { ButtonLink } from "../button-link";

export function GrowthCta() {
  return (
    <section className="orange-grid px-4 py-24 text-center text-white sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="type-h2 heading-gradient-light">
          Unlock Business Potential with
          <br />
          Virtuo&apos;s All-in-One Expert Services
        </h2>
        <p className="type-body mx-auto mt-8 max-w-3xl text-white/70">
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
