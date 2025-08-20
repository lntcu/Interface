import Colophon from "@/public/writings/colophon.mdx";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center p-20">
      <div className="flex flex-col gap-20 w-full max-w-lg px-4">
        <div>
          <Link href="/" className="font-semibold text-black dark:text-white">
            Daniel Goh
          </Link>
        </div>
        <div className="py-1">
          <div className="text-black dark:text-white font-semibold">
            Colophon
          </div>
          <div>August 20, 2025</div>
        </div>
        <div className="-translate-y-20">
          <Colophon />
        </div>
      </div>
    </div>
  );
}
