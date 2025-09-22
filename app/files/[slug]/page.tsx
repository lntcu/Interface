import { notFound, redirect } from "next/navigation";

export default async function FilePage({ params }: any) {
  const slug = params.slug as string;

  if (slug.endsWith(".pdf")) {
    redirect(`/files/${slug}`);
  }

  try {
    const Page = (await import(`../../../public/files/${slug}.mdx`)).default;
    return (
      <main className="">
        <div className="">
          <Page />
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
