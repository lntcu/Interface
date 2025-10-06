"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Page() {
  const [more, setMore] = useState(false);

  return (
    <div>
      <div className="w-screen h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
        <div className="fixed sm:top-0 max-sm:bottom-0 right-0 max-sm:left-0 h-full max-sm:h-min max-sm:w-full flex items-center justify-center p-10 max-sm:p-2 z-20 pointer-events-none">
          <div className="pointer-events-auto hover:scale-150 transition-all duration-400 bg-radial from-zinc-100/50 dark:from-zinc-90/500 to-zinc-200/50 dark:to-zinc-800/50 border-zinc-300 dark:border-zinc-600 border-t-1 backdrop-blur-xl rounded-full font-medium text-lg p-2 flex sm:flex-col items-center justify-center gap-2">
            <a
              href="#1"
              className="rounded-full bg-zinc-700/50 dark:bg-zinc-200/50 w-2 h-2 hover:bg-zinc-900/50 dark:hover:bg-zinc-100/80 transition-all"
            />
            <a
              href="#2"
              className="rounded-full bg-zinc-700/50 dark:bg-zinc-200/50 w-2 h-2 hover:bg-zinc-900/50 dark:hover:bg-zinc-100/80 transition-all"
            />
            <a
              href="#3"
              className="rounded-full bg-zinc-700/50 dark:bg-zinc-200/50 w-2 h-2 hover:bg-zinc-900/50 dark:hover:bg-zinc-100/80 transition-all"
            />
            <a
              href="#4"
              className="rounded-full bg-zinc-700/50 dark:bg-zinc-200/50 w-2 h-2 hover:bg-zinc-900/50 dark:hover:bg-zinc-100/80 transition-all"
            />
          </div>
        </div>
        <div
          id="1"
          className="snap-center w-screen h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-40 max-sm:p-10"
        >
          <p className="font-medium text-3xl text-zinc-500 dark:text-zinc-400">
            Hey there, I am
          </p>
          <p className="font-medium tracking-tight text-7xl max-sm:text-5xl text-center bg-gradient-to-r from-zinc-500 dark:from-zinc-400 via-zinc-900 dark:via-zinc-50 to-zinc-500 dark:to-zinc-400 bg-clip-text text-transparent">
            Daniel Goh
          </p>
        </div>
        <div
          id="2"
          className="relative snap-center w-screen h-screen bg-white dark:bg-black px-40 max-sm:p-10"
        >
          <motion.div
            animate={{ opacity: more ? 0.8 : 1, scale: more ? 0.8 : 1 }}
            transition={{ ease: "easeInOut" }}
            className="w-full h-full flex flex-col gap-10 items-center justify-center"
          >
            <p className="font-medium tracking-tight text-5xl max-sm:text-3xl text-center bg-gradient-to-r from-zinc-500 dark:from-zinc-400 via-zinc-900 dark:via-zinc-50 to-zinc-500 dark:to-zinc-400 bg-clip-text text-transparent">
              Student and developer. Does web development and app development.
            </p>
            <button
              className="bg-radial from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-300 dark:border-zinc-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
              onClick={() => setMore(true)}
            >
              Find out more
            </button>
          </motion.div>
          <motion.div
            className={`absolute top-0 left-0 z-30 w-screen h-screen flex flex-col items-center justify-center gap-10 backdrop-blur-xl ${more ? "pointer-events-auto" : "pointer-events-none"}`}
            animate={{
              opacity: more ? 1 : 0,
              scale: more ? 1 : 1.3,
              filter: more ? "blur(0px)" : "blur(24px)",
            }}
            transition={{ ease: "easeInOut" }}
          >
            <div className="w-screen h-90 flex gap-5 items-center justify-start overflow-x-auto snap-x snap-mandatory px-20 max-sm:px-10 scrollbar-hide">
              <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-orange-500/50 dark:from-orange-800/50 to-orange-300/50 dark:to-orange-900/50 border-t-1 border-orange-300/50 dark:border-orange-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
                <p className="font-medium text-3xl">Swift</p>
                <p className="font-medium text-lg">
                  iOS, MacOS and VisionOS app development done using Swift
                  language.
                </p>
              </div>
              <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-violet-500/50 dark:from-violet-800/50 to-violet-300/50 dark:to-violet-900/50 border-t-1 border-violet-300/50 dark:border-violet-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
                <p className="font-medium text-3xl">NextJS</p>
                <p className="font-medium text-lg">
                  React and Typescript, styled with Tailwind, animated with
                  Motion, hosted using Vercel with NextJS web framework.
                </p>
              </div>
              <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-yellow-500/50 dark:from-yellow-800/50 to-yellow-300/50 dark:to-yellow-900/50 border-t-1 border-yellow-300/50 dark:border-yellow-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
                <p className="font-medium text-3xl">Python</p>
                <p className="font-medium text-lg">
                  Offensive cybersecurity tool, machine learning language, and
                  as general purpose language.
                </p>
              </div>
              <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-sky-500/50 dark:from-sky-800/50 to-sky-300/50 dark:to-sky-900/50 border-t-1 border-sky-300/50 dark:border-sky-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
                <p className="font-medium text-3xl">Golang</p>
                <p className="font-medium text-lg">
                  In the process of learning, not using frequently yet.
                </p>
              </div>
            </div>
            <button
              className="bg-radial from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-300 dark:border-zinc-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
              onClick={() => setMore(false)}
            >
              Exit
            </button>
          </motion.div>
        </div>
        <div
          id="3"
          className="snap-center w-screen h-screen bg-white dark:bg-black flex flex-col gap-10 items-center justify-center px-40 max-sm:p-10"
        >
          <p className="font-medium tracking-tight text-4xl max-sm:text-3xl text-center bg-gradient-to-r from-zinc-500 dark:from-zinc-400 via-zinc-900 dark:via-zinc-50 to-zinc-500 dark:to-zinc-400 bg-clip-text text-transparent">
            Selected Projects
          </p>
          <div className="w-screen h-90 z-10 flex gap-5 items-center justify-center max-sm:justify-start overflow-x-auto snap-x snap-mandatory px-20 max-sm:px-10 scrollbar-hide">
            <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-lime-500/50 dark:from-lime-800/50 to-lime-300/50 dark:to-lime-900/50 border-t-1 border-lime-300/50 dark:border-lime-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Portfolio</p>
                <p className="font-medium text-lg">
                  Portfolio website made with NextJS you are looking at right
                  now.
                </p>
              </div>
              <a
                href="https://github.com/lntcu/interface"
                target="_blank"
                className="w-full bg-radial from-lime-100 dark:from-lime-900 to-lime-200 dark:to-lime-800 border-lime-300 dark:border-lime-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
              >
                <div className="flex items-center justify-between">
                  <p>View Source</p>
                  <ArrowUpRight />
                </div>
              </a>
            </div>
            <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-pink-500/50 dark:from-pink-800/50 to-pink-300/50 dark:to-pink-900/50 border-t-1 border-pink-300/50 dark:border-pink-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Pointer</p>
                <p className="font-medium text-lg">
                  VisionOS like interface designed as a Mac app using hand
                  tracking as cursor.
                </p>
              </div>
              <a
                href="https://github.com/lntcu/pointer"
                target="_blank"
                className="w-full bg-radial from-pink-100 dark:from-pink-900 to-pink-200 dark:to-pink-800 border-pink-300 dark:border-pink-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
              >
                <div className="flex items-center justify-between">
                  <p>View Source</p>
                  <ArrowUpRight />
                </div>
              </a>
            </div>
            <div className="snap-center w-80 h-90 shrink-0 bg-linear-to-b from-teal-500/50 dark:from-teal-800/50 to-teal-300/50 dark:to-teal-900/50 border-t-1 border-teal-300/50 dark:border-teal-600/50 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Anniversary</p>
                <p className="font-medium text-lg">
                  Created a anniversary commeration webpage showcasing different
                  milestones and media for a client organisation.
                </p>
              </div>
              <div className="w-full bg-radial from-teal-100 dark:from-teal-900 to-teal-200 dark:to-teal-800 border-teal-300 dark:border-teal-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-not-allowed opacity-50 py-2 transition-all">
                Coming soon
              </div>
            </div>
          </div>
        </div>
        <div
          id="4"
          className="snap-center w-screen h-screen bg-white dark:bg-black flex flex-col gap-5 items-center justify-center px-40 max-sm:p-10"
        >
          <p className="font-medium tracking-tight text-5xl max-sm:text-3xl text-center bg-gradient-to-r from-zinc-500 dark:from-zinc-400 via-zinc-900 dark:via-zinc-50 to-zinc-500 dark:to-zinc-400 bg-clip-text text-transparent">
            Contact and find me via
          </p>
          <div className="flex items-center justify-center gap-5 max-sm:gap-2">
            <a
              href="mailto:lntcu@duck.com"
              target="_blank"
              className="bg-radial from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-300 dark:border-zinc-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
            >
              Email
            </a>
            <a
              href="https://github.com/lntcu"
              target="_blank"
              className="bg-radial from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-300 dark:border-zinc-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
            >
              Github
            </a>
            <a
              href="https://lhog.vercel.app"
              target="_blank"
              className="bg-radial from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-300 dark:border-zinc-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90"
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
