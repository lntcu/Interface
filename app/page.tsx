import Introduction from "./introduction.mdx";
import List from "@/components/list";

const tabs = [
  {
    title: "Colophon",
    subtitle: "17 Oct",
    link: "/writing/colophon",
  },
];

export default function Page() {
  return (
    <div className="w-full h-full flex items-start justify-center py-10">
      <div className="w-lg flex flex-col gap-10">
        <div className="px-5">
          <Introduction />
        </div>
        <List tabs={tabs} />
      </div>
    </div>
  );
}
