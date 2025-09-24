import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { redirect } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "lHog",
  description: "Files",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased leading-5 text-black bg-white flex items-center justify-center flex-col w-full h-full`}
      >
        <div className="max-w-lg py-30">{children}</div>
        <div className="fixed top-0 left-0 z-1000 p-20 flex pointer-events-none items-center justify-center w-screen h-screen">
          <Image
            src="/ad.jpeg"
            width={5000}
            height={5000}
            alt="Advert"
            className="h-screen w-auto object-fit p-10"
          />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
