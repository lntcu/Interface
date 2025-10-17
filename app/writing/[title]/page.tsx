"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function Page() {
  const params = useParams();
  const path = "./../document/" + params.title + ".mdx";
  const Writing = dynamic(() => import(path), {
    ssr: false,
  });

  return (
    <div>
      <div className="h-full fixed top-0 left-0 z-10 pt-30 w-[calc((100%-512px)/2)] px-10 flex items-start justify-end">
        <Link
          href="/"
          className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all"
        >
          <Undo2 size={16} /> Return
        </Link>
      </div>
      <div className="w-full h-full flex items-start justify-center py-28">
        <div className="w-lg flex flex-col gap-10 shrink-0">
          <div className="px-5">
            <Writing />
          </div>
        </div>
      </div>
    </div>
  );
}
