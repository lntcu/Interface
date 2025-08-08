"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { AnimatePresence, motion, easeInOut } from "motion/react";
import { useState } from "react";
import Salutation from "./file/Salutation.mdx";

export default function Page() {
  const [expand, setExpand] = useState("");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
      scale: expand != "" ? 0.95 : 1,
      opacity: expand != "" ? 0.7 : 1,
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
        <div>
          <Salutation />
        </div>
        <div className="flex items-center justify-center sm:justify-start max-sm:flex-col gap-5">
          {["Escalator", "Field", "Pole"].map((title) => (
            <motion.div
              variants={child}
              className={`relative ${expand == title ? "z-40" : ""}`}
              layoutId={title}
              onClick={() => setExpand(title)}
              key={title}
            >
              <Image
                src={`/${title}.jpeg`}
                alt={title}
                width={5000}
                height={5000}
                className="w-sm rounded-lg"
              />
              <div className="absolute bottom-0 left-0 m-2 flex items-center justify-start w-full">
                <div className="backdrop-blur-xs bg-zinc-800/50 text-sm px-2 rounded-sm">
                  {title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={`fixed top-0 left-0 min-w-screen min-h-screen flex items-center justify-center z-50 ${expand != "" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
        animate={{
          background: expand != "" ? "#11182799" : "#00000000",
          backdropFilter: expand != "" ? "blur(0.5rem)" : "blur(0rem)",
        }}
        onClick={() => setExpand("")}
      >
        <AnimatePresence>
          {expand != "" && (
            <motion.div
              layoutId={`${expand}`}
              className="flex max-sm:flex-col max-sm:gap-3 items-end justify-center"
            >
              <Image
                src={`/${expand}.jpeg`}
                alt={`${expand}`}
                width={5000}
                height={5000}
                className="h-auto sm:h-screen w-screen sm:w-auto object-contain"
              />
              <div className="sm:p-5 flex items-center justify-center w-full">
                <div className="max-sm:backdrop-blur-xs max-sm:bg-zinc-800/50 px-2 py-0.5 font-medium sm:text-lg rounded-lg">
                  {expand}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
