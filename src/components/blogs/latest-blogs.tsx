import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/1.png",
  },
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/2.png",
  },
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/3.png",
  },
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/4.png",
  },
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/5.png",
  },
  {
    title:
      "Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexaAI.",
    imageSrc: "/images/blogs/6.png",
  },
];

export function LatestBlogs() {
  return (
    <section className="bg-white px-4 py-[100px] text-ink">
      <div className="mx-auto max-w-[1450px]">
        <h2 className="type-h2 heading-gradient inline-block">Latest Blogs</h2>
        <p className="type-body mt-3 max-w-[1120px] text-black/80">
          Take a look at our latest insights on PRO services in Dubai, covering
          visa types, legal procedures, and essential tips to help you make
          informed business decisions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-12 xl:gap-y-10">
          {posts.map((post, index) => (
            <Link
              key={`${post.imageSrc}-${index}`}
              href="#"
              className="group relative aspect-[1002/601] overflow-hidden rounded-[12px] bg-transparent no-underline"
              aria-label={post.title}
            >
              <Image
                src={post.imageSrc}
                alt=""
                fill
                sizes="(min-width: 1280px) 31vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <p className="absolute inset-x-6 bottom-6 text-[14px] font-light leading-[18px] text-white sm:inset-x-8 sm:bottom-7">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
