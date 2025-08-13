"use client";

import Navbar from "@/components/navbar";
import Privacy from "./Privacy.mdx";
import { motion, easeInOut } from "motion/react";

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

  return (
    <div className="py-30 px-6 sm:px-10">
      <Navbar />
      <motion.div
        className="flex flex-col"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Privacy />
      </motion.div>
    </div>
  );
}
