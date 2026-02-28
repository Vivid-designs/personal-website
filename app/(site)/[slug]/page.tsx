import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content/posts";
import { MdxContent } from "@/components/content/mdx-content";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  try {
    const post = await getPostBySlug(params.slug);
    return { title: post.frontmatter.title, description: post.frontmatter.description };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  try {
    const post = await getPostBySlug(params.slug);

    return (
      <main className="container max-w-3xl py-28">
        <header className="mb-10">
          <p className="text-sm text-muted-foreground">{post.frontmatter.date}</p>
          <h1 className="text-5xl font-bold mt-2">{post.frontmatter.title}</h1>
          <p className="mt-4 text-muted-foreground">{post.frontmatter.description}</p>
        </header>
        <article className="prose prose-invert max-w-none">
          <MdxContent source={post.content} />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
