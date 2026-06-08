const stats = [
  {
    value: "5+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    value: "23",
    label: "SERVICES",
  },
  {
    value: "1M+",
    label: "HAPPY CUSTOMERS",
    featured: true,
  },
];

export function StatsBand() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto grid max-w-[1594px] gap-8 rounded-[10px] bg-black p-8 text-white sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-14">
        <p className="type-body max-w-2xl text-white">
          <span className="block">Whether you&apos;re an entrepreneur, investor, or established</span>
          <span className="block">company, Virtuo Services provides premium, reliable, and fast</span>
          <span className="block">corporate support tailored to your needs.</span>
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-sm px-6 py-5 ${
                stat.featured
                  ? "bg-orange text-white sm:col-span-2"
                  : "bg-[#272727] text-white"
              }`}
            >
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="type-h3">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-light uppercase leading-[16px] tracking-[0.04em]">
                    {stat.label}
                  </p>
                </div>
                {stat.featured && (
                  <div className="hidden h-px flex-1 bg-white/80 sm:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
