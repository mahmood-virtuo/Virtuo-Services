import Image from "next/image";

const contactItems = [
  {
    label: "Phone",
    value: "+971 50 000 0000",
    iconSrc: "/images/contact/icons/phone.svg",
  },
  {
    label: "Email",
    value: "mgmt@virtuo.ae",
    iconSrc: "/images/contact/icons/email.svg",
  },
  {
    label: "Head Office",
    value:
      "Office - BLV - 6F - SF60959 A Building - Ajman Blvd, Ajman Freezone Sheikh Rashid Bin Saeed Al Maktoum St. Ajman, United Arab Emirates",
    iconSrc: "/images/contact/icons/head-office.svg",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-white px-4 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="type-h2 heading-gradient inline-block">
          Get in touch with us
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={item.label}
              tabIndex={0}
              className="group relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-card px-8 py-10 text-center text-white transition-colors duration-300 hover:bg-orange focus:bg-orange focus:outline-none"
            >
              <div className="flex flex-col items-center justify-center transition duration-300 group-hover:-translate-y-4 group-hover:opacity-0 group-focus:-translate-y-4 group-focus:opacity-0">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={62}
                  height={62}
                  className="h-[62px] w-[62px]"
                />
                <h3 className="type-h4 mt-7 font-medium text-white">{item.label}</h3>
              </div>
              <div className="absolute inset-0 flex translate-y-4 items-center justify-center px-8 py-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                <p className="type-button max-w-[340px] text-center text-white">
                  {item.value}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-14 aspect-[1400/396] overflow-hidden rounded-[8px] bg-[#d8d8d8]">
          <Image
            src="/images/contact/map.png"
            alt="Office location map"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
