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
  const accentPrefix = accent && title.includes(` ${accent}`) ? " " : "";

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
      <div className="container-page relative flex h-full flex-col items-center justify-center pt-36 text-center sm:pt-40">
        <h1 className="type-page-hero heading-gradient-hero">
          {baseTitle}
          {accent && <span>{accentPrefix}{accent}</span>}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="type-body mt-9 flex flex-wrap items-center justify-center gap-2 text-white sm:mt-10"
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
              {index < breadcrumbs.length - 1 && <span aria-hidden="true">&gt;</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
