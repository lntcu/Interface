import Link from "next/link";

const Links = [
  {
    title: "Colophon",
    link: "/writing/colophon",
    date: "August 20, 2025",
  },
];

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center p-20 max-sm:px-5">
      <div className="flex flex-col gap-20 w-full max-w-lg">
        <div>
          <Link
            href="/"
            className="font-semibold text-black dark:text-white px-2"
          >
            Daniel Goh
          </Link>
        </div>
        <div>
          {Links.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="w-full px-2 py-1 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between opacity-70 hover:opacity-100"
            >
              <div className="text-black dark:text-white font-semibold">
                {item.title}
              </div>
              <div>{item.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
