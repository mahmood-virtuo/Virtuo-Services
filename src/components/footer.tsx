import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  XIcon,
} from "./icons";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FooterPhoneInput } from "./footer-phone-input";
import { Logo } from "./logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "F.A.Q's", href: "/#faq" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Cost Calculator", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "X", icon: XIcon },
];

const proServices = [
  { label: "GDRFA", href: "#" },
  { label: "Virtual Office", href: "#" },
  { label: "Power Of Attorney", href: "#" },
  { label: "Legal Translation", href: "#" },
  { label: "MOHRE Services", href: "#" },
  { label: "Attestation Services", href: "#" },
];

const visaServices = [
  { label: "Residence Visa", href: "#" },
  { label: "Golden Visa", href: "#" },
  { label: "Investor Visa", href: "#" },
  { label: "Employment Visa", href: "#" },
  { label: "Dependent Visa", href: "#" },
];

function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-5 text-[15px] font-light leading-[24px] text-white">
      <span>Follow Us :</span>
      <div className="flex items-center gap-5">
        {socialLinks.map(({ label, icon: Icon }) => (
        <a key={label} href="#" aria-label={label} className="text-orange hover:text-white">
          <Icon className="h-4 w-4" />
        </a>
        ))}
      </div>
    </div>
  );
}

function FooterLink({ href, children, arrow = false }: { href: string; children: ReactNode; arrow?: boolean }) {
  const className = "inline-flex items-center gap-2 text-white transition-colors hover:text-orange";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
        {arrow && <ArrowUpRightIcon className="h-3 w-3" />}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
      {arrow && <ArrowUpRightIcon className="h-3 w-3" />}
    </a>
  );
}

function FooterContactForm() {
  const inputClass =
    "font-display h-[54px] w-full rounded-[5px] border border-white/25 bg-transparent px-5 text-[15px] font-light leading-[22px] text-white outline-none placeholder:text-white/60 transition-colors focus:border-orange focus:ring-0";

  return (
    <form className="w-full" action="#">
      <div className="space-y-3">
        <input className={inputClass} aria-label="Full Name" placeholder="Full Name" />
        <input className={inputClass} aria-label="Company Name" placeholder="Company Name" />
        <input className={inputClass} aria-label="Email" placeholder="Email" type="email" />
        <FooterPhoneInput />
        <textarea
          aria-label="Message"
          placeholder="Message"
          rows={6}
          className="font-display min-h-[244px] w-full resize-none rounded-[5px] border border-white/25 bg-transparent px-5 py-4 text-[15px] font-light leading-[22px] text-white outline-none placeholder:text-white/60 transition-colors focus:border-orange focus:ring-0"
        />
      </div>
      <button
        type="submit"
        className="mt-6 h-[54px] w-full rounded-[5px] bg-[linear-gradient(90deg,#ee4c01_0%,#000000_100%)] px-6 font-[family-name:var(--font-inter)] text-[15px] font-normal leading-[22px] text-white transition-opacity hover:opacity-90"
      >
        Send it to the moon
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#240800_0%,#080302_48%,#030303_100%)] pb-8 pt-[76px] text-white sm:pt-24 lg:pt-[86px]"
    >
      <Image
        aria-hidden="true"
        src="/images/footer-background-wordmark.png"
        alt=""
        width={1604}
        height={424}
        className="pointer-events-none absolute bottom-[30px] left-1/2 w-[980px] max-w-none -translate-x-1/2 opacity-[.8] sm:w-[1280px] lg:w-[1604px]"
      />
      <div className="container-page relative">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,820px)_minmax(420px,650px)] xl:gap-[110px]">
          <div className="grid gap-14 md:grid-cols-[minmax(0,360px)_minmax(0,430px)] md:gap-x-16 md:gap-y-12">
            <div>
              <Logo className="!h-[76px] !w-[202px]" />
              <p className="mt-10 max-w-[360px] text-[16px] font-light leading-[28px] text-white">
                Virtuo Services provides expert business setup and PRO solutions
                in the UAE. We offer premium, end-to-end support to ensure your
                company remains compliant and stress-free in one of the
                world&apos;s leading business hubs.
              </p>
              <div className="mt-10">
                <FooterSocialLinks />
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
              <div>
                <h2 className="text-[15px] font-semibold leading-[24px] text-orange">
                  PRO Services
                </h2>
                <ul className="mt-7 space-y-6 text-[16px] font-light leading-[24px]">
                  {proServices.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold leading-[24px] text-orange">
                  Visa Services
                </h2>
                <ul className="mt-7 space-y-6 text-[16px] font-light leading-[24px]">
                  {visaServices.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-[15px] font-semibold leading-[24px] text-orange">
                Quick Links
              </h2>
              <ul className="mt-7 grid gap-x-12 gap-y-6 text-[16px] font-light leading-[24px] sm:grid-cols-[max-content_max-content]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} arrow>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[15px] font-semibold leading-[24px] text-orange">
                Get In Touch
              </h2>
              <address className="mt-7 space-y-6 text-[16px] font-light leading-[22px] text-white not-italic">
                <p className="flex max-w-[360px] gap-3">
                  <PinIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                  <span>
                    Office - BLV - 6F - SF60959 A Building - Ajman Blvd, Ajman
                    Freezone Sheikh Rashid Bin Saeed Al Maktoum St. Ajman,
                    United Arab Emirates
                  </span>
                </p>
                <a href="mailto:mgmt@virtuo.ae" className="flex items-center gap-3 hover:text-orange">
                  <MailIcon className="h-4 w-4 text-orange" />
                  mgmt@virtuo.ae
                </a>
                <a href="tel:+971500000000" className="flex items-center gap-3 hover:text-orange">
                  <PhoneIcon className="h-4 w-4 text-orange" />
                  +971 50 000 0000
                </a>
              </address>
            </div>
          </div>

          <div className="xl:pt-0">
            <h2 className="type-h2 inline-block bg-[linear-gradient(90deg,#ee4c01_14%,#ffffff_100%)] bg-clip-text text-transparent">
              Get in touch with us
            </h2>
            <p className="mt-4 max-w-[610px] text-[16px] font-light leading-[22px] text-white">
              Let&apos;s align our constellations! Reach out and let the magic
              of collaboration illuminate our skies.
            </p>
            <div className="mt-6">
              <FooterContactForm />
            </div>
          </div>
        </div>

        <div className="relative mt-24 flex flex-col gap-8 text-center text-[14px] font-light leading-[22px] text-white sm:mt-32 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:mt-44">
          <p>
            ©2025 All Rights Reserved by Virtuo Services F.Z.C
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
              (item) => (
                <a key={item} href="#" className="flex items-center gap-2 hover:text-orange">
                  {item}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
