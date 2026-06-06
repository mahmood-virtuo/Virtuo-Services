import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  accent?: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHero({
  title,
  accent,
  imageSrc,
  imageAlt,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: title },
  ],
}: PageHeroProps) {
  const baseTitle =
    accent && title.endsWith(accent)
      ? title.slice(0, -accent.length).trimEnd()
      : title;

  return (
    <section className="relative h-[520px] overflow-hidden bg-ink text-white sm:h-[620px] lg:h-[700px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container-page relative flex h-full flex-col items-center justify-center pt-36 text-center sm:pt-40">
        <h1 className="type-h2 text-white">
          {baseTitle}
          {accent && <span className="text-orange"> {accent}</span>}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="type-body mt-5 flex flex-wrap items-center justify-center gap-2 text-white/75"
        >
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-orange">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
