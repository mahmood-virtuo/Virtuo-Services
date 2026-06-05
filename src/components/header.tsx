import {
  ChevronDownIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
} from "./icons";
import Image from "next/image";
import { Logo } from "./logo";
import { ButtonLink } from "./button-link";

const socialLinks = [
  { label: "LinkedIn", src: "/images/linkedin.svg" },
  { label: "Instagram", src: "/images/instagram.svg" },
  { label: "Facebook", src: "/images/facebook.svg" },
];

export function Header() {
  return (
    <header id="top" className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="h-[58px] bg-orange text-ink">
        <div className="container-page flex h-full items-center justify-between text-xs sm:text-sm">
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
        <Logo />
        <div className="hidden items-center gap-16 text-sm lg:flex">
          <a href="#about" className="transition-colors hover:text-orange">
            About Us
          </a>
          <a
            href="#services"
            className="flex items-center gap-1.5 transition-colors hover:text-orange"
          >
            Services <ChevronDownIcon className="h-4 w-4" />
          </a>
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
        <a
          href="#footer"
          aria-label="Open navigation"
          className="rounded-md border border-white/50 p-2 lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </a>
      </nav>
    </header>
  );
}
