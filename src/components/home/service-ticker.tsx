const items = [
  "PRO SERVICES",
  "BUSINESS SETUP",
  "GOLDEN VISA",
  "BANK ACCOUNT OPENING",
  "INVEST IN DUBAI",
];

function TickerRow({ className = "" }: { className?: string }) {
  return (
    <div className={`ticker-row bg-black px-3 py-5 text-white ${className}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-8 font-display text-lg font-semibold sm:text-2xl lg:text-[31px]"
        >
          {item}
          <span className="h-5 w-5 rounded-bl-xl rounded-tr-xl bg-orange" />
        </div>
      ))}
    </div>
  );
}

export function ServiceTicker({ crossed = false }: { crossed?: boolean }) {
  if (crossed) {
    return (
      <section
        aria-label="Featured services"
        className="relative h-[230px] overflow-hidden bg-white py-16 sm:h-[260px]"
      >
        <TickerRow className="ticker-crossed absolute inset-x-0 top-[62px]" />
        <TickerRow className="ticker-crossed-alt absolute inset-x-0 top-[118px]" />
      </section>
    );
  }

  return (
    <section aria-label="Featured services" className="overflow-hidden bg-black">
      <TickerRow />
    </section>
  );
}
