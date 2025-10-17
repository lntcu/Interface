"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Tab {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
}

export default function List({ tabs }: { tabs: Tab[] }) {
  const router = useRouter();
  const [active, setActive] = useState(tabs[0].title);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const [clip, setClip] = useState("inset(100% 0 0 0 round 12px)");

  useEffect(() => {
    const container = containerRef.current;
    const activeEl = activeRef.current;

    if (container && activeEl) {
      const { offsetTop, offsetHeight } = activeEl;
      const containerHeight = container.offsetHeight;

      const clipTop = offsetTop;
      const clipBottom = offsetTop + offsetHeight;

      const newClip = `inset(${Number(
        (clipTop / containerHeight) * 100,
      ).toFixed()}% 0 ${Number(
        100 - (clipBottom / containerHeight) * 100,
      ).toFixed()}% 0 round 12px)`;

      setClip(newClip);
    }
  }, [active]);

  return (
    <div className="px-2">
      <div className="relative flex flex-col items-start w-full">
        <div className="relative flex flex-col w-full">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              onMouseOver={() => setActive(tab.title)}
              ref={active === tab.title ? activeRef : null}
              className="cursor-pointer px-3 py-1 w-full"
              onClick={() => tab.link && router.push(tab.link)}
            >
              <div className="w-full flex justify-between items-center gap-5">
                <p>{tab.title}</p>
                <p className="text-sm opacity-50">{tab.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          ref={containerRef}
          className="absolute z-10 w-full h-full"
          animate={{ clipPath: clip }}
          transition={{ type: "spring", bounce: 0.3 }}
        >
          <div className="flex flex-col">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                onMouseOver={() => setActive(tab.title)}
                onClick={() => tab.link && router.push(tab.link)}
                className="cursor-pointer px-3 py-1 bg-linear-to-b from-zinc-100/50 dark:from-zinc-900/50 to-zinc-200/50 dark:to-zinc-800/50 w-full"
              >
                <div className="w-full flex justify-between items-center gap-5">
                  <p>{tab.title}</p>
                  <p className="text-sm opacity-50">{tab.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
