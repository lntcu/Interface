import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function FilePage({ params }: Props) {
  try {
    const Page = (await import(`../../../public/files/${params.slug}.mdx`))
      .default;
    return (
      <main className="flex items-center justify-center py-10 max-sm:p-2 leading-5">
        <div className="w-xl">
          <Page />
        </div>
      </main>
    );
  } catch (e) {
    notFound();
  }
}
