"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

interface prop {
  content: string[];
}

export default function Sidebar({ content }: prop) {
  const [expand, setExpand] = useState(false);

  return (
    <motion.div
      className="fixed bottom-0 sm:top-0 right-0 sm:right-0 my-5 mx-3 sm:mx-7 z-50 rounded-lg backdrop-blur-lg h-max"
      initial={{ opacity: 0, x: 200, filter: "blur(0.5rem)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0rem)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex items-start justify-center max-sm:justify-between rounded-xl bg-zinc-800/50 shadow-lg shadow-zinc-700/30 border-2 border-zinc-800/10 px-3 py-1">
        <motion.div
          className="font-medium text-white text-nowrap cursor-pointer"
          onClick={() => setExpand(!expand)}
          layout
        >
          {expand ? "Close Menu" : "Table of Contents"}
        </motion.div>
        <motion.div
          className="flex flex-col items-start font-medium text-zinc-300 overflow-hidden w-full text-nowrap"
          animate={{
            height: expand ? "auto" : 0,
            width: expand ? "auto" : 0,
            opacity: expand ? 1 : 0,
            filter: expand ? "blur(0rem)" : "blur(0.5rem)",
            x: expand ? 0 : -20,
          }}
        >
          {content.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="pl-20 cursor-pointer hover:text-white transition-all duration-300 w-full text-nowrap"
            >
              <div>{item}</div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
