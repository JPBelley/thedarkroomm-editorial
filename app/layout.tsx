import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./mailerlite.css";
import Navbar from "./components/Navbar";
import Messaging from "./components/Messaging";
import Footer from "./components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--newsreader-font",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--work-sans-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Darkroomm — Lightroom Presets",
  description:
    "The Darkroomm. Premium Lightroom presets for photographers. Cinema-grade color grading for desktop and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${workSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://assets.mailerlite.com/css/universal.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Messaging />
        <Footer />
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
