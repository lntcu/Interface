import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { redirect } from "next/navigation";

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
  redirect(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEvrIzDBUYAM5W4u.jpg&f=1&nofb=1&ipt=275e80217f5e603f1be1edf6025656d6e5c0cd57980870eccf5b07309139d4ff",
  );

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-black bg-white`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
