import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel</title>
        <meta name="description" content="A site" />
      </Head>
      <div
        className={`${inter.className} antialiased leading-5 text-zinc-600 selection:bg-black selection:text-white dark:text-zinc-300 dark:selection:bg-white dark:selection:text-black font-medium text-sm`}
      >
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}
