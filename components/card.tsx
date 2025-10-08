const colors: Record<string, string> = {
  slate:
    "from-slate-100/50 dark:from-slate-900/50 to-slate-300/50 dark:to-slate-700/50 border-slate-300 dark:border-slate-700",
  gray: "from-gray-100/50 dark:from-gray-900/50 to-gray-300/50 dark:to-gray-700/50 border-gray-300 dark:border-gray-700",
  zinc: "from-zinc-100/50 dark:from-zinc-900/50 to-zinc-300/50 dark:to-zinc-700/50 border-zinc-300 dark:border-zinc-700",
  neutral:
    "from-neutral-100/50 dark:from-neutral-900/50 to-neutral-300/50 dark:to-neutral-700/50 border-neutral-300 dark:border-neutral-700",
  stone:
    "from-stone-100/50 dark:from-stone-900/50 to-stone-300/50 dark:to-stone-700/50 border-stone-300 dark:border-stone-700",
  red: "from-red-100/50 dark:from-red-900/50 to-red-300/50 dark:to-red-700/50 border-red-300 dark:border-red-700",
  orange:
    "from-orange-100/50 dark:from-orange-900/50 to-orange-300/50 dark:to-orange-700/50 border-orange-300 dark:border-orange-700",
  amber:
    "from-amber-100/50 dark:from-amber-900/50 to-amber-300/50 dark:to-amber-700/50 border-amber-300 dark:border-amber-700",
  yellow:
    "from-yellow-100/50 dark:from-yellow-900/50 to-yellow-300/50 dark:to-yellow-700/50 border-yellow-300 dark:border-yellow-700",
  lime: "from-lime-100/50 dark:from-lime-900/50 to-lime-300/50 dark:to-lime-700/50 border-lime-300 dark:border-lime-700",
  green:
    "from-green-100/50 dark:from-green-900/50 to-green-300/50 dark:to-green-700/50 border-green-300 dark:border-green-700",
  emerald:
    "from-emerald-100/50 dark:from-emerald-900/50 to-emerald-300/50 dark:to-emerald-700/50 border-emerald-300 dark:border-emerald-700",
  teal: "from-teal-100/50 dark:from-teal-900/50 to-teal-300/50 dark:to-teal-700/50 border-teal-300 dark:border-teal-700",
  cyan: "from-cyan-100/50 dark:from-cyan-900/50 to-cyan-300/50 dark:to-cyan-700/50 border-cyan-300 dark:border-cyan-700",
  sky: "from-sky-100/50 dark:from-sky-900/50 to-sky-300/50 dark:to-sky-700/50 border-sky-300 dark:border-sky-700",
  blue: "from-blue-100/50 dark:from-blue-900/50 to-blue-300/50 dark:to-blue-700/50 border-blue-300 dark:border-blue-700",
  indigo:
    "from-indigo-100/50 dark:from-indigo-900/50 to-indigo-300/50 dark:to-indigo-700/50 border-indigo-300 dark:border-indigo-700",
  violet:
    "from-violet-100/50 dark:from-violet-900/50 to-violet-300/50 dark:to-violet-700/50 border-violet-300 dark:border-violet-700",
  purple:
    "from-purple-100/50 dark:from-purple-900/50 to-purple-300/50 dark:to-purple-700/50 border-purple-300 dark:border-purple-700",
  fuchsia:
    "from-fuchsia-100/50 dark:from-fuchsia-900/50 to-fuchsia-300/50 dark:to-fuchsia-700/50 border-fuchsia-300 dark:border-fuchsia-700",
  pink: "from-pink-100/50 dark:from-pink-900/50 to-pink-300/50 dark:to-pink-700/50 border-pink-300 dark:border-pink-700",
  rose: "from-rose-100/50 dark:from-rose-900/50 to-rose-300/50 dark:to-rose-700/50 border-rose-300 dark:border-rose-700",
};

interface CardProps {
  color: string;
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`snap-center w-80 h-90 shrink-0 bg-linear-to-b ${colors[props.color]} border-t-1 backdrop-blur-xl rounded-3xl p-5 flex flex-col justify-between items-start`}
    >
      {props.children}
    </div>
  );
}
