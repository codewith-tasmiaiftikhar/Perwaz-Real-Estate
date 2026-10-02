import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroSplash } from "@/components/IntroSplash";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Property for sale in Pakistan`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} bg-ink font-body antialiased`}>
        <Script id="intro-lock" strategy="beforeInteractive">
          {`try{if(!sessionStorage.getItem("perwaz-intro"))document.documentElement.classList.add("intro-lock")}catch(e){}`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <IntroSplash />
      </body>
    </html>
  );
}
