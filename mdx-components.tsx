import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import type { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className="text-black dark:text-white pt-20 font-semibold"
        id={children}
      >
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p className=" text-zinc-600 dark:text-zinc-300 py-5">{children}</p>
    ),
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    code: ({ children }) => (
      <span className="text-zinc-600 dark:text-zinc-300 py-5">{children}</span>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6  ">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal ml-6  ">{children}</ol>,
    li: ({ children }) => <li className="py-1 ">{children}</li>,
    hr: ({ children }) => (
      <div className="w-full h-[0.1rem] rounded-full bg-zinc-100">
        {children}
      </div>
    ),
    a: ({ href, children }) => (
      <Link href={href} target="_blank" className="underline">
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        width={1000}
        height={1000}
        {...(props as ImageProps)}
        className="rounded-lg w-full h-auto object-cover "
      />
    ),
    ...components,
  };
}
