"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const image = [
  {
    title: "Escalator",
    text: "An inclined power-assisted transport.",
  },
  {
    title: "Field",
    text: "A field of grass.",
  },
  {
    title: "Pole",
    text: "A upright pole.",
  },
  {
    title: "Corridor",
    text: "An indoor corridor.",
  },
  {
    title: "Plant",
    text: "Plants in a box.",
  },
  {
    title: "Support",
    text: "A metal support pole.",
  },
  {
    title: "Water",
    text: "Body of liquid.",
  },
];

export default function Page() {
  const [expand, setExpand] = useState(["", "", ""]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
      scale: expand[0] != "" ? 0.95 : 1,
      opacity: expand[0] != "" ? 0.7 : 1,
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
        ease: "easeInOut",
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
        <p className="text-xl font-medium">Image</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
          {image.map((item) => (
            <motion.div
              variants={child}
              className={`relative ${expand[0] == item.title ? "z-40" : ""}`}
              layoutId={item.title}
              onClick={() => setExpand([item.title, item.text])}
              key={item.title}
            >
              <Image
                src={`/${item.title}.jpeg`}
                alt={item.text}
                width={5000}
                height={5000}
                className="w-sm rounded-lg"
              />
              <div className="absolute bottom-0 left-0 m-2 flex items-center justify-start w-full">
                <div className="backdrop-blur-xs bg-zinc-800/50 text-sm px-2 rounded-sm">
                  {item.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={`fixed top-0 left-0 min-w-screen min-h-screen flex items-center justify-center z-50 ${expand[0] != "" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
        animate={{
          background: expand[0] != "" ? "#11182799" : "#00000000",
          backdropFilter: expand[0] != "" ? "blur(0.5rem)" : "blur(0rem)",
        }}
        onClick={() => setExpand(["", ""])}
      >
        <AnimatePresence>
          {expand[0] != "" && (
            <motion.div
              layoutId={`${expand[0]}`}
              className="flex max-sm:flex-col max-sm:gap-3 items-end justify-center"
            >
              <Image
                src={`/${expand[0]}.jpeg`}
                alt={expand[1]}
                width={5000}
                height={5000}
                className="h-auto sm:h-screen w-screen sm:w-auto object-contain"
              />
              <div className="sm:p-5 flex items-center justify-center w-full">
                <div className="max-sm:backdrop-blur-xs max-sm:bg-zinc-800/50 px-2 py-0.5 rounded-lg font-medium">
                  <p className="text-lg">{expand[0]}</p>
                  <p className="text-zinc-300">{expand[1]}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
