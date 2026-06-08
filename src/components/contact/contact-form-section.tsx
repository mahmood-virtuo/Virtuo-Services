import Image from "next/image";

const fields = [
  ["Last Name", "First Name"],
  ["Company Name"],
  ["Email"],
  ["Phone Number"],
  ["Message"],
];

type ContactFormSectionProps = {
  title?: string;
  description?: string;
  formTitle?: string;
  formDescription?: string;
  buttonLabel?: string;
};

export function ContactFormSection({
  title = "Get in touch with us",
  description = "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with Virtuo Services.",
  formTitle = "Let's connect constellations",
  formDescription = "Let's align our constellation! Reach out and let the magic of collaboration illuminate our skies.",
  buttonLabel = "Send it to the moon",
}: ContactFormSectionProps) {
  return (
    <section className="bg-white px-4 pb-24 pt-8 text-ink sm:pb-32">
      <div className="mx-auto max-w-[1068px] text-center">
        <h2 className="type-h2 heading-gradient inline-block">
          {title}
        </h2>
        <p className="type-body mx-auto mt-4 max-w-3xl text-black/70">
          {description}
        </p>

        <div className="mt-12 rounded-[12px] border border-black/70 p-6 text-left sm:p-7 lg:grid lg:grid-cols-[1.45fr_.85fr] lg:items-center lg:gap-11">
          <form className="flex flex-col justify-center" action="#">
            <h3 className="font-sans text-[32px] font-medium leading-[38px] text-ink">
              {formTitle}
            </h3>
            <p className="mt-2 text-[13px] font-light leading-[18px] text-black/70">
              {formDescription}
            </p>

            <div className="mt-8 space-y-3">
              {fields.map((row) => (
                <div
                  key={row.join("-")}
                  className={row.length > 1 ? "grid gap-4 sm:grid-cols-2" : ""}
                >
                  {row.map((label) =>
                    label === "Message" ? (
                      <textarea
                        key={label}
                        aria-label={label}
                        placeholder={label}
                        rows={4}
                        className="w-full resize-none rounded-sm border border-black/15 bg-white px-4 py-3 text-[13px] font-light leading-[18px] text-ink outline-none transition-colors placeholder:text-black/45 focus:border-orange"
                      />
                    ) : (
                      <input
                        key={label}
                        aria-label={label}
                        placeholder={label}
                        className="min-h-9 w-full rounded-sm border border-black/15 bg-white px-4 text-[13px] font-light leading-[18px] text-ink outline-none transition-colors placeholder:text-black/45 focus:border-orange"
                      />
                    ),
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-3 min-h-9 rounded-sm bg-[linear-gradient(90deg,#ee4c01_0%,#351000_100%)] px-6 text-[13px] font-medium leading-[18px] text-white transition-opacity hover:opacity-90"
            >
              {buttonLabel}
            </button>
          </form>

          <div className="relative mt-8 aspect-[540/512] overflow-hidden rounded-[10px] lg:mt-0 lg:self-center">
            <Image
              src="/images/contact/form-image.png"
              alt="Business professionals in conversation"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
