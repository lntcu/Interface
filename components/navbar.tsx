import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="fixed top-0 left-0 py-5 px-3 sm:px-7 z-50 max-sm:w-full">
      <div className="rounded-xl backdrop-blur-xs backdrop-saturate-100 inset-shadow-[0_0_1rem] inset-shadow-zinc-400/30 bg-zinc-800/30 flex max-sm:flex-col max-sm:w-full sm:items-center sm:justify-center shadow-xl shadow-zinc-700/30 sm:gap-20 px-3 py-1.5">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="font-medium active:scale-80">
            Daniel
          </Link>
          <motion.div
            layout
            className="sm:hidden text-zinc-300 font-medium"
            onClick={() => setExpand(!expand)}
          >
            {expand ? "Close" : "Menu"}
          </motion.div>
        </div>
        <motion.div
          className="sm:hidden flex justify-center text-zinc-300 flex-col overflow-hidden text-lg font-medium"
          animate={{
            height: expand ? "auto" : 0,
            opacity: expand ? 1 : 0,
            filter: expand ? "blur(0rem)" : "blur(0.5rem)",
          }}
        >
          <Link
            href="/"
            className="hover:text-white transition-all duration-300 active:scale-80 mt-5"
          >
            Home
          </Link>
          <Link
            href="/writing"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Writing
          </Link>
          <Link
            href="/log"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Log
          </Link>
          <Link
            href="/image"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Image
          </Link>
        </motion.div>
        <div className="flex items-center justify-center text-zinc-300 max-sm:hidden gap-5">
          <Link
            href="/"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Home
          </Link>
          <Link
            href="/writing"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Writing
          </Link>
          <Link
            href="/log"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Log
          </Link>
          <Link
            href="/image"
            className="hover:text-white transition-all duration-300 active:scale-80"
          >
            Image
          </Link>
        </div>
      </div>
    </div>
  );
}
