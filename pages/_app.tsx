import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.className} antialiased leading-5 text-zinc-600 dark:text-zinc-300 font-medium`}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
