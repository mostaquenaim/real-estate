import { projects } from "@/lib/constants";
import { notFound } from "next/navigation";
import ExploreProjectsPageComp from "@/components/ExploreProjectsPageComp";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return [{ slug: "nawabganj" }, { slug: "borakoir" }];
}

export default async function Home({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <ExploreProjectsPageComp project={project} />
    </>
  );
}
