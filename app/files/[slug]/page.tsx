import { notFound } from "next/navigation";
import PageProp from "next";

export default async function FilePage({ params }: any) {
  const { slug } = await params;

  try {
    const Page = (await import(`../../../public/files/${slug}.mdx`)).default;
    return (
      <main className="flex items-center justify-center py-10 max-sm:p-2 leading-5">
        <div className="w-xl">
          <Page />
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
