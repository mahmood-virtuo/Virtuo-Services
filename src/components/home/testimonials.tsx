import Image from "next/image";

const testimonial =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden py-24 sm:py-32">
      <h2 className="px-4 text-center font-display text-4xl font-medium tracking-[-0.03em] sm:text-5xl lg:text-[58px]">
        <span className="text-orange">What Our clients</span> Say
      </h2>
      <div className="fade-edges mt-16 overflow-hidden sm:mt-24">
        <div className="mx-auto flex w-max -translate-x-[280px] gap-24 px-8 sm:-translate-x-[190px]">
          {[0, 1, 2, 3, 4].map((item) => (
            <article
              key={item}
              className="h-[465px] w-[415px] rounded-[20px] bg-[#f2f2f2] px-8 py-16 text-ink"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/home/testimonial-avatar.jpg"
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Alexanderia S
                  </h3>
                  <p className="text-sm">Renewed Cellular Trading L.L.C</p>
                </div>
              </div>
              <p className="mt-12 text-sm leading-7 text-black/70">
                {testimonial}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
