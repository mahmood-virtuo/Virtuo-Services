import Image from "next/image";

const testimonial =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export type TestimonialItem = {
  id: number;
  name: string;
  company: string;
  body: string;
};

const defaultReviews: TestimonialItem[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: index + 1,
    name: "Alexanderia S",
    company: "Renewed Cellular Trading L.L.C",
    body: testimonial,
  }),
);

function ReviewCards({
  hidden = false,
  reviews,
}: {
  hidden?: boolean;
  reviews: TestimonialItem[];
}) {
  return (
    <div aria-hidden={hidden} className="testimonial-group">
      {reviews.map((review) => (
        <article
          key={`${hidden ? "clone" : "review"}-${review.id}`}
          className="h-[465px] w-[min(415px,calc(100vw-4rem))] rounded-[20px] bg-[#f2f2f2] px-8 py-16 text-ink sm:w-[415px]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/home/testimonial-avatar.png"
                alt="Alexanderia S"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="type-h4 text-ink">
                {review.name}
              </h3>
              <p className="type-body text-black/70">{review.company}</p>
            </div>
          </div>
          <p className="type-body mt-12 text-black/70">
            {review.body}
          </p>
        </article>
      ))}
    </div>
  );
}

type TestimonialsProps = {
  title?: string;
  reviews?: TestimonialItem[];
};

export function Testimonials({
  title = "What Our clients Say",
  reviews = defaultReviews,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="overflow-hidden py-[100px]">
      <h2 className="type-h2 heading-gradient px-4 text-center">
        {title}
      </h2>
      <div className="fade-edges mt-16 overflow-hidden sm:mt-24">
        <div className="testimonial-track">
          <ReviewCards reviews={reviews} />
          <ReviewCards hidden reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
