export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Virtuo Services home"
      className={`inline-flex flex-col font-display font-bold leading-[0.74] tracking-[-0.08em] ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span className="relative text-[3rem] sm:text-[3.55rem]">
        <span className="absolute -left-0.5 top-1 h-3 w-3 rounded-bl-full rounded-tr-full bg-orange" />
        virtuo
      </span>
      <span className="self-end pr-1 text-[0.78rem] font-semibold tracking-normal">
        SERVICES
      </span>
    </a>
  );
}
