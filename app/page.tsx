"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [sure, setSure] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!sure) {
      setSure(true);
    } else {
      router.push("/fancy");
    }
  };

  return (
    <div className="w-full h-screen max-sm:h-full p-10 max-sm:px-3 sm:max-w-sm font-[500] flex flex-col justify-between gap-30">
      <div className="flex flex-col gap-10">
        <div>
          <p>Daniel Goh</p>
          <p className="opacity-70">Student and developer</p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="opacity-70">Development</p>
            <p>
              Web development using React, NextJs, styled with Tailwind and
              hosted with Vercel. App development for iOS and MacOS with Swift.
            </p>
          </div>
          <div>
            <p className="opacity-70">Projects</p>
            <p>Coming soon.</p>
          </div>
          <div>
            <p className="opacity-70">Contact</p>
            <p>
              You may find me either through{" "}
              <Link
                href="https://github.com/lntcu"
                className="opacity-70 hover:opacity-100 transition-all cursor-pointer"
              >
                GitHub
              </Link>{" "}
              or{" "}
              <Link
                href="mailto:lntcu@duck.com"
                className="opacity-70 hover:opacity-100 transition-all cursor-pointer"
              >
                email
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="cursor-pointer" onClick={handleClick}>
        <p className="opacity-70 hover:opacity-100 transition-all">
          {sure ? "Click again to confirm" : "Restore version"}
        </p>
      </div>
    </div>
  );
}
