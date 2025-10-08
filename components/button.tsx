const colors: Record<string, string> = {
  slate:
    "from-slate-100 dark:from-slate-900 to-slate-200 dark:to-slate-800 border-slate-400 dark:border-slate-600",
  gray: "from-gray-100 dark:from-gray-900 to-gray-200 dark:to-gray-800 border-gray-400 dark:border-gray-600",
  zinc: "from-zinc-100 dark:from-zinc-900 to-zinc-200 dark:to-zinc-800 border-zinc-400 dark:border-zinc-600",
  neutral:
    "from-neutral-100 dark:from-neutral-900 to-neutral-200 dark:to-neutral-800 border-neutral-400 dark:border-neutral-600",
  stone:
    "from-stone-100 dark:from-stone-900 to-stone-200 dark:to-stone-800 border-stone-400 dark:border-stone-600",
  red: "from-red-100 dark:from-red-900 to-red-200 dark:to-red-800 border-red-400 dark:border-red-600",
  orange:
    "from-orange-100 dark:from-orange-900 to-orange-200 dark:to-orange-800 border-orange-400 dark:border-orange-600",
  amber:
    "from-amber-100 dark:from-amber-900 to-amber-200 dark:to-amber-800 border-amber-400 dark:border-amber-600",
  yellow:
    "from-yellow-100 dark:from-yellow-900 to-yellow-200 dark:to-yellow-800 border-yellow-400 dark:border-yellow-600",
  lime: "from-lime-100 dark:from-lime-900 to-lime-200 dark:to-lime-800 border-lime-400 dark:border-lime-600",
  green:
    "from-green-100 dark:from-green-900 to-green-200 dark:to-green-800 border-green-400 dark:border-green-600",
  emerald:
    "from-emerald-100 dark:from-emerald-900 to-emerald-200 dark:to-emerald-800 border-emerald-400 dark:border-emerald-600",
  teal: "from-teal-100 dark:from-teal-900 to-teal-200 dark:to-teal-800 border-teal-400 dark:border-teal-600",
  cyan: "from-cyan-100 dark:from-cyan-900 to-cyan-200 dark:to-cyan-800 border-cyan-400 dark:border-cyan-600",
  sky: "from-sky-100 dark:from-sky-900 to-sky-200 dark:to-sky-800 border-sky-400 dark:border-sky-600",
  blue: "from-blue-100 dark:from-blue-900 to-blue-200 dark:to-blue-800 border-blue-400 dark:border-blue-600",
  indigo:
    "from-indigo-100 dark:from-indigo-900 to-indigo-200 dark:to-indigo-800 border-indigo-400 dark:border-indigo-600",
  violet:
    "from-violet-100 dark:from-violet-900 to-violet-200 dark:to-violet-800 border-violet-400 dark:border-violet-600",
  purple:
    "from-purple-100 dark:from-purple-900 to-purple-200 dark:to-purple-800 border-purple-400 dark:border-purple-600",
  fuchsia:
    "from-fuchsia-100 dark:from-fuchsia-900 to-fuchsia-200 dark:to-fuchsia-800 border-fuchsia-400 dark:border-fuchsia-600",
  pink: "from-pink-100 dark:from-pink-900 to-pink-200 dark:to-pink-800 border-pink-400 dark:border-pink-600",
  rose: "from-rose-100 dark:from-rose-900 to-rose-200 dark:to-rose-800 border-rose-400 dark:border-rose-600",
};

interface ButtonProps {
  color: string;
  children: React.ReactNode;
  click?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.click}
      className={`bg-radial ${colors[props.color]} border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90`}
    >
      {props.children}
    </button>
  );
}

interface LinkProps {
  color: string;
  link: string;
  children: React.ReactNode;
}

export function Hyperlink(props: LinkProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      className={`w-full bg-radial ${colors[props.color]} border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90`}
    >
      {props.children}
    </a>
  );
}
