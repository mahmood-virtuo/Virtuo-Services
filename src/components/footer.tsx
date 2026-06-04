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
import { Logo } from "./logo";

const columns = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Blogs", "F.A.Q's", "Contact Us", "Cost Calculator"],
  },
  {
    title: "PRO Services",
    links: [
      "GDRFA",
      "Virtual Office",
      "Power Of Attorney",
      "Legal Translation",
      "MOHRE Services",
      "Attestation Services",
    ],
  },
  {
    title: "Visa Services",
    links: [
      "Residence Visa",
      "Golden Visa",
      "Investor Visa",
      "Employment Visa",
      "Dependent Visa",
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#361000_0%,#070707_58%)] pb-8 pt-24 text-white sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-120px] text-center font-display text-[23vw] font-bold leading-none tracking-[-0.08em] text-white/[.04]"
      >
        virtuo
      </div>
      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-10 max-w-sm text-sm leading-7 text-white/65">
              Virtuo Services provides expert business setup and PRO solutions
              in the UAE. We offer premium, end-to-end support to ensure your
              company remains compliant and stress-free in one of the
              world&apos;s leading business hubs.
            </p>
            <div className="mt-9 flex items-center gap-5 text-sm text-white/70">
              <span>Follow Us :</span>
              {[LinkedInIcon, InstagramIcon, FacebookIcon, XIcon].map(
                (Icon, index) => (
                  <a key={index} href="#" aria-label="Social media">
                    <Icon className="h-4 w-4 text-orange" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-orange">
                  {column.title}
                </h2>
                <ul className="mt-9 space-y-6 text-sm text-white/65">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="inline-flex items-center gap-2 hover:text-orange">
                        {link}
                        {column.title === "Quick Links" && (
                          <ArrowUpRightIcon className="h-3 w-3" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="contact">
            <h2 className="text-sm font-semibold text-orange">Get In Touch</h2>
            <address className="mt-9 space-y-7 text-sm not-italic leading-6 text-white/65">
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
        </div>

        <div className="relative mt-32 flex flex-col gap-8 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>©2025 All Rights Reserved by Virtuo Services F.Z.C</p>
          <div className="flex flex-wrap gap-8">
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
