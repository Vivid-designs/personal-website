import Link from "next/link";
import { getAllPosts } from "@/lib/content/posts";

type Props = { params: { tag: string } };

export default async function TagPage({ params }: Props) {
  const posts = await getAllPosts();
  const tag = decodeURIComponent(params.tag).toLowerCase();
  const filtered = posts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag));

  return (
    <main className="container max-w-4xl py-28">
      <h1 className="text-4xl font-bold">Tag: {params.tag}</h1>
      <div className="mt-8 space-y-4">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`} className="block border border-white/20 rounded-md p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-muted-foreground">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
