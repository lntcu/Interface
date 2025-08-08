import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { motion, easeInOut } from "motion/react";
import Image from "next/image";
import type { ImageProps } from "next/image";

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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <motion.p
        variants={child}
        className="text-xl font-medium sm:w-sm"
        id={children}
      >
        {children}
      </motion.p>
    ),
    h2: ({ children }) => (
      <motion.p
        variants={child}
        className="text-lg font-medium pt-20 sm:w-sm"
        id={children}
      >
        {children}
      </motion.p>
    ),
    h3: ({ children }) => (
      <motion.p
        variants={child}
        className="font-medium pt-20 sm:w-sm"
        id={children}
      >
        {children}
      </motion.p>
    ),
    p: ({ children }) => (
      <motion.p
        variants={child}
        className="pt-5 text-zinc-300 font-medium sm:w-sm"
      >
        {children}
      </motion.p>
    ),
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    code: ({ children }) => (
      <span className="bg-zinc-700/50 font-medium rounded-md px-2 text-sm font-[jetbrains_mono]">
        {children}
      </span>
    ),
    ul: ({ children }) => (
      <motion.ul variants={child} className="list-disc ml-6 pt-5 sm:w-sm">
        {children}
      </motion.ul>
    ),
    ol: ({ children }) => (
      <motion.ol variants={child} className="list-decimal ml-6 pt-5 sm:w-sm">
        {children}
      </motion.ol>
    ),
    li: ({ children }) => <li className="py-1 sm:w-sm">{children}</li>,
    hr: ({ children }) => (
      <div className="w-full h-[0.1rem] rounded-full bg-zinc-800">
        {children}
      </div>
    ),
    a: ({ href, children }) => (
      <Link
        href={href}
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all duration-300"
      >
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        width={1000}
        height={1000}
        {...(props as ImageProps)}
        className="rounded-lg w-full h-auto object-cover pt-5"
      />
    ),
    ...components,
  };
}
