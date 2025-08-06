"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [load, setLoad] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div className="w-screen h-screen p-5 sm:p-20 py-20">
      <div className="w-full h-full flex items-end justify-start">
        <div>
          <p className="text-lg font-bold leading-6">Daniel</p>
          <p className="text-lg text-zinc-500 leading-6 flex items-center justify-center">
            Coming soon (likely
            <span
              className="pl-1"
              onMouseEnter={() => {
                setExpand(true);
                setClick(false);
              }}
              onMouseLeave={() => {
                setExpand(false);
                setClick(true);
              }}
            >
              2026
            </span>
            )
            <motion.span
              animate={{
                opacity: expand ? 1 : 0,
              }}
              className={`inline-block text-nowrap bg-zinc-200/70 px-2 mx-2 rounded-md cursor-pointer overflow-hidden ${expand ? "pointer-events-auto" : "pointer-events-none"}`}
              onClick={() => setLoad(true)}
            >
              {load
                ? "Wow, you did it. Loading ..."
                : click
                  ? "Nice try."
                  : "Click me to view now."}
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
}
