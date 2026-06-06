import { MailIcon, PhoneIcon } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { ButtonLink } from "./button-link";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

const socialLinks = [
  { label: "LinkedIn", src: "/images/linkedin.svg" },
  { label: "Instagram", src: "/images/instagram.svg" },
  { label: "Facebook", src: "/images/facebook.svg" },
];

export function Header() {
  return (
    <header id="top" className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="h-[58px] bg-orange text-ink">
        <div className="type-body container-page flex h-full items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-12">
            <a
              href="tel:+971500000000"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden sm:inline">+971 50 000 0000</span>
            </a>
            <a
              href="mailto:mgmt@virtuo.ae"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <MailIcon className="h-4 w-4" />
              <span>mgmt@virtuo.ae</span>
            </a>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span>Follow Us :</span>
            <div className="flex gap-4">
              {socialLinks.map(({ label, src }) => (
                <a key={label} href="#" aria-label={label}>
                  <Image src={src} alt="" width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="container-page flex h-[118px] items-center justify-between"
      >
        <Logo className="!h-[52px] !w-[138px] sm:!h-[61px] sm:!w-[162px]" />
        <div className="type-body hidden items-center gap-16 lg:flex">
          <Link href="/about-us" className="transition-colors hover:text-orange">
            About Us
          </Link>
          <MegaMenu />
          <a href="#testimonials" className="transition-colors hover:text-orange">
            Blogs
          </a>
          <a href="#contact" className="transition-colors hover:text-orange">
            Contact Us
          </a>
        </div>
        <div className="hidden lg:block">
          <ButtonLink arrow>Get a Quote</ButtonLink>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
