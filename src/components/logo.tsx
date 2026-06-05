import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Virtuo Services home"
      className={`relative inline-block h-[61px] w-[162px] ${className}`}
    >
      <Image
        src="/images/virtuo-logo-white.png"
        alt="Virtuo Services"
        fill
        priority
        sizes="162px"
        className="object-contain"
      />
    </a>
  );
}
