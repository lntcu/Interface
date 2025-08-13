"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion, useAnimation, easeInOut } from "framer-motion";
import Link from "next/link";

const writing = [
  {
    title: "Privacy Policy",
    link: "privacy",
    date: "August 11, 2025",
  },
  {
    title: "Colophon",
    link: "colophon",
    date: "August 8, 2025",
  },
  {
    title: "Salautation",
    link: "../",
    date: "August 8, 2025",
  },
];

export default function Page() {
  const container = {
    hidden: {},
    show: {
      transition: {
        duration: 0.5,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(0.5rem)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0rem)",
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };

  const [tab, setTab] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLAnchorElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    const active = focusRef.current;

    if (container && active) {
      const { offsetTop, offsetHeight } = active;
      const containerHeight = container.offsetHeight;

      const topPercent = (offsetTop / containerHeight) * 100;
      const bottomPercent =
        100 - ((offsetTop + offsetHeight) / containerHeight) * 100;

      controls.start({
        clipPath: `inset(${topPercent.toFixed()}% 0 ${bottomPercent.toFixed()}% 0 round 8px)`,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 24,
        },
      });
    }
  }, [tab, controls]);

  return (
    <div className="py-30 px-4 sm:px-8">
      <Navbar />

      <motion.div
        className="flex flex-col gap-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-5 text-zinc-300 font-medium">
          <p className="text-lg text-white px-2">Writing</p>
          <div className="w-full sm:w-sm relative">
            <div className="flex flex-col relative">
              {writing.map((item, index) => (
                <motion.div key={item.title} variants={child}>
                  <Link
                    href={`/writing/${item.link}`}
                    ref={tab === index ? focusRef : null}
                    onMouseEnter={() => setTab(index)}
                    data-tab={index}
                    className="flex items-center justify-between px-2 py-0.5 text-zinc-200 my-0.5"
                  >
                    <div className="sm:text-lg font-medium">{item.title}</div>
                    <div className="max-sm:text-sm">{item.date}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              aria-hidden
              className="absolute inset-0 w-full h-full bg-zinc-700/40"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={controls}
              ref={containerRef}
            >
              <div className="flex flex-col relative z-0">
                {writing.map((item, index) => (
                  <motion.div key={item.title} variants={child}>
                    <Link
                      href={`/writing/${item.link}`}
                      ref={tab === index ? focusRef : null}
                      onMouseEnter={() => setTab(index)}
                      data-tab={index}
                      className="flex items-center justify-between px-2 py-0.5 my-0.5 rounded-lg active:bg-zinc-600/30 transition-all duration-300"
                    >
                      <div className="sm:text-lg font-medium">{item.title}</div>
                      <div className="max-sm:text-sm">{item.date}</div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
