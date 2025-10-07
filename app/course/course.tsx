import { ArrowUpRight } from "lucide-react";

interface CourseProps {
  color: string;
  title: string;
  content: string;
  date: string;
  time: string;
  note: string;
  link: string;
}

export default function Course(props: CourseProps) {
  return (
    <div
      className={`snap-center w-80 h-90 shrink-0 bg-linear-to-b from-${props.color}-500/50 dark:from-${props.color}-800/50 to-${props.color}-300/50 dark:to-pink-${props.color}/50 border-1 border-${props.color}-300/50 dark:border-${props.color}-600/50 backdrop-blur-xl rounded-4xl p-5 flex flex-col justify-between items-start"
`}
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-2xl font-medium">{props.title}</p>
          <p className="font-medium opacity-70 text-lg bg-zinc-900/50 border-t-1 border-zinc-700 shadow-sm shadow-zinc-900/50 rounded-lg px-2 my-2 w-max">
            {props.date} ({props.time})
          </p>
        </div>
        <p className="text-lg font-medium opacity-70">{props.content}</p>
        <p
          className={`text-lg font-medium opacity-70 border-l-2 border-${props.color}-500/50 pl-3`}
        >
          {props.note}
        </p>
      </div>
      <a
        href={`${props.link}`}
        target="_blank"
        className={`w-full bg-radial from-${props.color}-100 dark:from-${props.color}-900 to-${props.color}-200 dark:to-${props.color}-800 border-${props.color}-300 dark:border-${props.color}-600 border-t-1 rounded-full font-medium text-lg px-6 cursor-pointer py-2 transition-all active:scale-90`}
      >
        <div className="flex items-center justify-between">
          <p>Register</p>
          <ArrowUpRight />
        </div>
      </a>
    </div>
  );
}
