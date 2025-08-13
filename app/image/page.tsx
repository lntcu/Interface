"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { AnimatePresence, motion, easeInOut } from "motion/react";
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
    text: "An upright pole.",
  },
  {
    title: "Carpet",
    text: "Pattern carpet (on the floor).",
  },
  {
    title: "Plant",
    text: "Plants in a box.",
  },
  {
    title: "Sky",
    text: "A rather blue, clear sky.",
  },
  {
    title: "Water",
    text: "Body of liquid.",
  },
  {
    title: "Sphere",
    text: "A surface analogous to a circle.",
  },
  {
    title: "Cave",
    text: "Just a cave (and a ladder).",
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
        <p className="text-xl font-medium">Image</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
          {image.map((item) => (
            <motion.div
              variants={child}
              className={`relative ${expand[0] == item.title ? "z-40" : ""} cursor-pointer`}
              layoutId={item.title}
              onClick={() => setExpand([item.title, item.text])}
              key={item.title}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <Image
                src={`/${item.title}.jpeg`}
                alt={item.text}
                width={5000}
                height={5000}
                className="w-sm rounded-lg"
              />
              <motion.div
                layoutId={`${item.title}_`}
                className="absolute bottom-0 left-0 m-2 flex items-center justify-start w-full z-30"
              >
                <div className="backdrop-blur-xs shadow-inset[0_0_0.5rem] inset-shadow-zinc-700/30 backdrop-saturate-100 bg-zinc-800/30 shadow-xl shadow-zinc-700/30 text-sm px-2 rounded-sm">
                  <p>{item.title}</p>
                  <p className="hidden">{item.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={`fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center z-50 ${expand[0] != "" ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
        animate={{
          background: expand[0] != "" ? "#11182799" : "#00000000",
          backdropFilter: expand[0] != "" ? "blur(0.5rem)" : "blur(0rem)",
        }}
        onClick={() => setExpand(["", ""])}
      >
        <AnimatePresence>
          {expand[0] != "" && (
            <motion.div
              layoutId={expand[0]}
              className="flex max-sm:flex-col max-sm:gap-3 items-end justify-center"
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <Image
                src={`/${expand[0]}.jpeg`}
                alt={expand[1]}
                width={5000}
                height={5000}
                className="w-auto h-auto sm:h-screen max-sm:w-screen object-contain"
              />
              <motion.div
                layoutId={`${expand[0]}_`}
                className="px-5 sm:p-5 w-full"
                transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              >
                <div className="font-medium">
                  <p className="text-lg">{expand[0]}</p>
                  <p className="text-zinc-300">{expand[1]}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
