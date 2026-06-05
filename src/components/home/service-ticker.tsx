const items = [
  "PRO SERVICES",
  "BUSINESS SETUP",
  "GOLDEN VISA",
  "BANK ACCOUNT OPENING",
  "INVEST IN DUBAI",
];

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="ticker-group">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-8 font-display text-lg font-semibold text-white sm:text-2xl lg:text-[31px]"
        >
          {item}
          <span className="h-5 w-5 rounded-bl-xl rounded-tr-xl bg-orange" />
        </div>
      ))}
    </div>
  );
}

function TickerTrack({ className = "" }: { className?: string }) {
  return (
    <div className={`ticker-track ${className}`}>
      <TickerGroup />
      <TickerGroup hidden />
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
        <div className="ticker-strip absolute inset-x-[-8%] top-[62px] overflow-hidden bg-black">
          <TickerTrack />
        </div>
        <div className="ticker-strip-alt absolute inset-x-[-8%] top-[118px] overflow-hidden bg-black">
          <TickerTrack className="ticker-track-slow" />
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Featured services" className="overflow-hidden bg-black">
      <TickerTrack />
    </section>
  );
}
