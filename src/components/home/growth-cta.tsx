import { ButtonLink } from "../button-link";

type GrowthCtaProps = {
  titleLineOne?: string;
  titleLineTwo?: string;
  description?: string;
};

export function GrowthCta({
  titleLineOne = "Unlock Business Potential with",
  titleLineTwo = "Virtuo's All-in-One Expert Services",
  description = "At Virtuo Services, we simplify the entire process with end-to-end business setup and PRO solutions, ensuring your journey in the UAE is smooth, compliant, and stress-free.",
}: GrowthCtaProps) {
  return (
    <section className="orange-grid px-4 py-[100px] text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="type-h2 heading-gradient-light">
          {titleLineOne}
          <br />
          {titleLineTwo}
        </h2>
        <p className="type-body mx-auto mt-8 max-w-3xl text-white">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/get-a-quote" arrow>Get a Quote</ButtonLink>
          <ButtonLink variant="ghost-dark">Discover more</ButtonLink>
        </div>
      </div>
    </section>
  );
}
