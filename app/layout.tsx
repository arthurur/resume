import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

/** Plain, professional sans for headings (avoids decorative serif tone). */
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Arthur Uberti Rolim — Frontend Lead & Fullstack Engineer",
  description:
    "Resume of Arthur Uberti Rolim, a Frontend Lead and Fullstack Engineer based in Florianópolis, Brazil.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
