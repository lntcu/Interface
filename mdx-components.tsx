import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import type { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="pt-20 font-semibold text-lg pb-5" id={children}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h1 className="pt-15 font-medium text-lg pb-5" id={children}>
        {children}
      </h1>
    ),
    p: ({ children }) => <p className="py-1">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-5 relative before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-1 before:bg-zinc-200 dark:before:bg-zinc-700 before:rounded-lg text-zinc-700 dark:text-zinc-200 font-medium bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-0.5">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    code: ({ children }) => <span className="py-5">{children}</span>,
    ul: ({ children }) => <ul className="list-disc ml-6  ">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal ml-6  ">{children}</ol>,
    li: ({ children }) => <li className="py-2">{children}</li>,
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
