import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={`${inter.className} antialiased text-black bg-white `}>
        <div className="fixed top-0 left-0 z-100 backdrop-blur-xl w-screen h-screen flex flex-col items-center justify-center">
          <p className="font-medium text-lg">I might have deleted this.</p>
          <p className="text-sm font-medium opacity-20">
            Just delete this banner.
          </p>
        </div>
        <div>{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
