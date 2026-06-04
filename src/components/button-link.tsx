import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

export function ButtonLink({
  children,
  href = "#contact",
  variant = "primary",
  arrow = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost-dark";
  arrow?: boolean;
}) {
  const styles = {
    primary:
      "border-orange bg-orange text-white shadow-[0_0_0_1px_rgba(255,255,255,.35),0_8px_20px_rgba(238,76,1,.2)] hover:bg-orange-bright",
    outline:
      "border-black/50 bg-white text-ink hover:border-orange hover:text-orange",
    "ghost-dark":
      "border-white/50 bg-transparent text-white hover:border-orange hover:text-orange",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange ${styles[variant]}`}
    >
      {children}
      {arrow && <ArrowUpRightIcon className="h-4 w-4" />}
    </a>
  );
}
