import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <p className="text-md font-semibold pt-20 pb-5" id={children}>
        {children}
      </p>
    ),
    p: ({ children }) => <p className="py-2">{children}</p>,
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    code: ({ children }) => (
      <span className="bg-radial from-zinc-800 to-zinc-700 border-1 border-zinc-600 rounded-md px-1 font-[iosevka] text-sm">
        {children}
      </span>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6 py-5">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 py-4">{children}</ol>
    ),
    li: ({ children }) => <li className="py-1">{children}</li>,
    hr: ({ children }) => (
      <div className="w-full h-[0.1rem] rounded-full bg-zinc-200 dark:bg-zinc-700">
        {children}
      </div>
    ),
    a: ({ href, children }) => (
      <Link
        href={href}
        target="_blank"
        className="opacity-70 hover:opacity-100 transition-all duration-200"
      >
        {children}
      </Link>
    ),
    img: ({ src }) => (
      <Image
        width={1000}
        height={1000}
        alt="Image"
        src={src}
        className="rounded-lg w-full h-auto object-cover"
      />
    ),
    ...components,
  };
}
