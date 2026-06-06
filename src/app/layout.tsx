import type { Metadata } from "next";
import { Alexandria, Anybody, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollTopButton } from "@/components/scroll-top-button";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-alexandria",
  display: "swap",
});

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-anybody",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-inter",
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
    <html
      lang="en"
      className={`${alexandria.variable} ${anybody.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
