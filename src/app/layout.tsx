import type { Metadata } from "next";
import { Alexandria, Anybody } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  display: "swap",
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virtuo Services | Business Setup in the UAE",
  description:
    "Expert business setup, PRO, visa, banking, and corporate services in the UAE.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alexandria.variable} ${anybody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
