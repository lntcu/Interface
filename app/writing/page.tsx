"use client";

import Navbar from "@/components/navbar";
import { motion, easeInOut } from "motion/react";
import Link from "next/link";

const writing = [
  {
    title: "Colophon",
    link: "colophon",
    date: "August 8, 2025",
  },
  {
    title: "Salutation",
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

  return (
    <div className="py-30 px-6 sm:px-10">
      <Navbar />
      <motion.div
        className="flex flex-col gap-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-5 text-zinc-300 font-medium">
          <p className="text-lg text-white">Writing</p>
          <motion.div
            variants={child}
            className="w-full sm:w-sm flex flex-col gap-1"
          >
            {writing.map((item) => (
              <Link
                key={item.title}
                href={`/writing/${item.link}`}
                className="flex items-center justify-between group hover:bg-zinc-700/50 transition-all duration-300 px-2 py-0.5 rounded-lg -translate-x-2"
              >
                <div className="group-hover:text-white transition-all duration-300">
                  {item.title}
                </div>
                <div className="font-normal text-sm">{item.date}</div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
