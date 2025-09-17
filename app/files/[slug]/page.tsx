import { notFound, redirect } from "next/navigation";

export default async function FilePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (slug.endsWith(".pdf")) {
    redirect(`/files/${slug}`);
  }

  try {
    const Page = (await import(`../../../public/files/${slug}.mdx`)).default;
    return (
      <main className="flex items-center justify-center py-10 max-sm:p-2 leading-5">
        <div className="w-xl">
          <Page />
        </div>
      </main>
    );
  } catch (err) {
    notFound();
  }
}
