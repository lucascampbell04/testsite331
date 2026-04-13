import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { AdkitProvider } from "adkit-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import "adkit-react/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Glassmorphism UI Demo",
  description: "A minimalist black and white glassmorphism component showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark`}>
      <AdkitProvider siteId="cmnx70f910001l504z8p7hi0r">
        <body className="antialiased">
          <TooltipProvider>{children}</TooltipProvider>
        </body>
      </AdkitProvider>
    </html>
  );
}
