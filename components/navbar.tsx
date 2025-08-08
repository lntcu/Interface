import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 my-5 mx-3 sm:mx-7 z-50">
      <div className="rounded-xl backdrop-blur-xs bg-zinc-800/50 flex items-center justify-center shadow-lg shadow-zinc-700/30 border-2 border-zinc-800/10 gap-10 sm:gap-20 px-3 py-1">
        <Link href="/" className="font-medium active:scale-80 max-sm:text-sm">
          Daniel
        </Link>
        <div className="flex items-center justify-center gap-4 max-sm:text-sm">
          <Link
            href="/"
            className="hover:text-white text-zinc-400 transition-all duration-300 active:scale-80"
          >
            Home
          </Link>
          <Link
            href="/writing"
            className="hover:text-white text-zinc-400 transition-all duration-300 active:scale-80"
          >
            Writing
          </Link>
          <Link
            href="/log"
            className="hover:text-white text-zinc-400 transition-all duration-300 active:scale-80"
          >
            Log
          </Link>
          <Link
            href="/image"
            className="hover:text-white text-zinc-400 transition-all duration-300 active:scale-80"
          >
            Image
          </Link>
        </div>
      </div>
    </div>
  );
}
