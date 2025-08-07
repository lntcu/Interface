import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 my-5 mx-7">
      <div className="rounded-xl backdrop-blur-lg bg-zinc-800/20 flex items-center justify-center shadow-lg shadow-zinc-700/30 border-2 border-zinc-700/30 gap-20 px-3 py-1">
        <p className="font-medium">Daniel</p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="hover:text-white text-zinc-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-white text-zinc-400 transition-all duration-300 cursor-not-allowed"
          >
            Writing
          </Link>
          <Link
            href="#"
            className="hover:text-white text-zinc-400 transition-all duration-300 cursor-not-allowed"
          >
            Log
          </Link>
        </div>
      </div>
    </div>
  );
}
