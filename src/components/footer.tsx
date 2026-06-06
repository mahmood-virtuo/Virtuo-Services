import {
  ArrowUpRightIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Blogs", href: "/#testimonials" },
      { label: "F.A.Q's", href: "/#faq" },
      { label: "Contact Us", href: "#contact" },
      { label: "Cost Calculator", href: "#" },
    ],
  },
  {
    title: "PRO Services",
    links: [
      { label: "GDRFA", href: "#" },
      { label: "Virtual Office", href: "#" },
      { label: "Power Of Attorney", href: "#" },
      { label: "Legal Translation", href: "#" },
      { label: "MOHRE Services", href: "#" },
      { label: "Attestation Services", href: "#" },
    ],
  },
  {
    title: "Visa Services",
    links: [
      { label: "Residence Visa", href: "#" },
      { label: "Golden Visa", href: "#" },
      { label: "Investor Visa", href: "#" },
      { label: "Employment Visa", href: "#" },
      { label: "Dependent Visa", href: "#" },
    ],
  },
];

const socialLinks = [
  ["LinkedIn", "/images/linkedin.svg"],
  ["Instagram", "/images/instagram.svg"],
  ["Facebook", "/images/facebook.svg"],
];

function FooterSocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`type-button items-center gap-5 text-white/70 ${className}`}>
      <span>Follow Us :</span>
      {socialLinks.map(([label, src]) => (
        <a key={label} href="#" aria-label={label}>
          <Image
            src={src}
            alt=""
            width={16}
            height={16}
            className="footer-social-icon"
          />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#361000_0%,#070707_58%)] pb-8 pt-12 text-white lg:pt-32"
    >
      <Image
        aria-hidden="true"
        src="/images/footer-background-wordmark.png"
        alt=""
        width={1604}
        height={424}
        className="pointer-events-none absolute bottom-[-46px] left-[54%] w-[1120px] max-w-none -translate-x-1/2 opacity-[.38] sm:w-[1280px] lg:w-[1450px]"
      />
      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr_1.2fr]">
          <div>
            <Logo />
            <p className="type-body mt-10 max-w-sm text-white/65">
              Virtuo Services provides expert business setup and PRO solutions
              in the UAE. We offer premium, end-to-end support to ensure your
              company remains compliant and stress-free in one of the
              world&apos;s leading business hubs.
            </p>
            <FooterSocialLinks className="mt-9 hidden lg:flex" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="type-button text-orange">
                  {column.title}
                </h2>
                <ul className="type-body mt-9 space-y-6 text-white/65">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link href={link.href} className="inline-flex items-center gap-2 hover:text-orange">
                          {link.label}
                          {column.title === "Quick Links" && (
                            <ArrowUpRightIcon className="h-3 w-3" />
                          )}
                        </Link>
                      ) : (
                        <a href={link.href} className="inline-flex items-center gap-2 hover:text-orange">
                          {link.label}
                          {column.title === "Quick Links" && (
                            <ArrowUpRightIcon className="h-3 w-3" />
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="contact">
            <h2 className="type-button text-orange">Get In Touch</h2>
            <address className="type-body mt-9 space-y-7 not-italic text-white/65">
              <p className="flex gap-3">
                <PinIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Office - BLV - 6F - SF60959 A Building - Ajman Blvd, Ajman
                Freezone Sheikh Rashid Bin Saeed Al Maktoum St. Ajman, United
                Arab Emirates
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

          <FooterSocialLinks className="order-last flex lg:hidden" />
        </div>

        <div className="relative mt-32 flex flex-col gap-8 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="mx-auto sm:mx-0">
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
