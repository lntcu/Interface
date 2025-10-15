"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Button, { Hyperlink } from "@/components/button";
import Card from "@/components/card";

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
            <Button color="zinc" click={() => setMore(true)}>
              Find out more
            </Button>
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
              <Card color="orange">
                <p className="font-medium text-3xl">Swift</p>
                <p className="font-medium text-lg">
                  iOS, MacOS and VisionOS app development done using Swift
                  language.
                </p>
              </Card>
              <Card color="purple">
                <p className="font-medium text-3xl">NextJS</p>
                <p className="font-medium text-lg">
                  React and Typescript, styled with Tailwind, animated with
                  Motion, hosted using Vercel with NextJS web framework.
                </p>
              </Card>
              <Card color="yellow">
                <p className="font-medium text-3xl">Python</p>
                <p className="font-medium text-lg">
                  Offensive cybersecurity tool, machine learning language, and
                  as general purpose language.
                </p>
              </Card>
              <Card color="sky">
                <p className="font-medium text-3xl">Golang</p>
                <p className="font-medium text-lg">
                  In the process of learning, not using frequently yet.
                </p>
              </Card>
            </div>
            <Button color="zinc" click={() => setMore(false)}>
              Exit
            </Button>
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
            <Card color="yellow">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Portfolio</p>
                <p className="font-medium text-lg">
                  Portfolio website made with NextJS you are looking at right
                  now.
                </p>
              </div>
              <Hyperlink
                color="yellow"
                link="https://github.com/lntcu/interface"
              >
                <div className="flex items-center justify-between">
                  <p>View Source</p>
                  <ArrowUpRight />
                </div>
              </Hyperlink>
            </Card>
            <Card color="lime">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Pointer</p>
                <p className="font-medium text-lg">
                  VisionOS like interface designed as a Mac app using hand
                  tracking as cursor.
                </p>
              </div>
              <Hyperlink color="lime" link="https://github.com/lntcu/pointer">
                <div className="flex items-center justify-between">
                  <p>View Source</p>
                  <ArrowUpRight />
                </div>
              </Hyperlink>
            </Card>
            <Card color="teal">
              <div className="flex flex-col items-start justify-center gap-10">
                <p className="font-medium text-3xl">Coming Soon</p>
                <p className="font-medium text-lg">
                  Coming Soon (Most likely early 2026)
                </p>
              </div>
              <div className="w-full bg-radial from-teal-100 dark:from-teal-900 to-teal-200 dark:to-teal-800 border-teal-300 dark:border-teal-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-not-allowed opacity-50 py-2 transition-all">
                Coming soon
              </div>
            </Card>
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
            <Hyperlink color="lime" link="mailto:lntcu@duck.com">
              Email
            </Hyperlink>
            <Hyperlink color="teal" link="https://github.com/lntcu">
              Github
            </Hyperlink>
            <Hyperlink color="green" link="https://lhog.vercel.app">
              Web
            </Hyperlink>
          </div>
        </div>
      </div>
    </div>
  );
}
