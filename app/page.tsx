import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Page() {
  const filesDir = path.join(process.cwd(), "public/files");
  const files = fs.readdirSync(filesDir);

  return (
    <div className="p-10 max-sm:p-2">
      <div className="flex flex-col gap-0 leading-5">
        {files.map((file) => {
          const md = file.endsWith(".mdx");
          const href = md
            ? `/files/${file.replace(/\.mdx$/, "")}`
            : `/files/${file}`;
          return (
            <Link
              href={href}
              key={file}
              className="text-zinc-700 hover:text-black font-medium"
            >
              {file}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
