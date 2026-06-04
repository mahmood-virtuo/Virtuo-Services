import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.1 3.8 9.4 7a1 1 0 0 1-.1 1.3L7.8 9.8a14 14 0 0 0 6.4 6.4l1.5-1.5a1 1 0 0 1 1.3-.1l3.2 2.3a1 1 0 0 1 .4 1.1l-.7 2.6a1 1 0 0 1-1 .7C10 21.3 2.7 14 2.7 5.1a1 1 0 0 1 .7-1l2.6-.7a1 1 0 0 1 1.1.4Z" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 10 4 4 4-4" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.3 7.5H2.1V22h3.2V7.5ZM3.7 2A1.9 1.9 0 1 0 3.7 5.8 1.9 1.9 0 0 0 3.7 2ZM22 13.7c0-4.4-2.3-6.5-5.5-6.5-2.5 0-3.7 1.4-4.3 2.4V7.5H9V22h3.2v-7.2c0-1.9.4-3.8 2.8-3.8 2.3 0 2.4 2.2 2.4 4V22H22v-8.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </IconBase>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.7V2.1L14.5 2C11.1 2 10 4.1 10 6.3v2.2H7v4.1h3V22h4v-9.4h3.4l.5-4.1H14Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 4 20 20M20 4 4 20" />
    </IconBase>
  );
}

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    pro: (
      <>
        <path d="M12 20a8 8 0 1 0-8-8" />
        <path d="M12 16a4 4 0 1 0-4-4M12 12v9M8 18v3M16 17v4" />
      </>
    ),
    visa: (
      <>
        <path d="M6 3h9l4 4v14H6zM15 3v5h5" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
    setup: (
      <>
        <path d="M4 10 12 4l8 6v10H4z" />
        <circle cx="12" cy="13" r="3" />
        <path d="M8 20v-3h8v3" />
      </>
    ),
    bank: (
      <>
        <path d="m3 9 9-5 9 5M5 10h14M5 18h14M3 21h18" />
        <path d="M7 10v8M12 10v8M17 10v8" />
      </>
    ),
    it: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    receptionist: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0M3 10h3M18 10h3M3 10v4M21 10v4" />
      </>
    ),
  };

  return <IconBase {...props}>{paths[name]}</IconBase>;
}
