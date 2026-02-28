import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { getLatestPosts, getPinnedPages } from "@/lib/content/posts";

export default async function Home() {
  const pinned = await getPinnedPages();
  const latest = await getLatestPosts(8);

  return (
    <main>
      <HeroParallax />

      <section className="container max-w-5xl py-16">
        <h2 className="text-3xl font-bold">Pinned</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pinned.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className="border border-white/20 rounded-md p-4 hover:bg-white/5 transition">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container max-w-5xl pb-24">
        <h2 className="text-3xl font-bold">Latest posts</h2>
        <div className="mt-6 space-y-4">
          {latest.map((post) => (
            <article key={post.slug} className="border-b border-white/20 pb-4">
              <Link href={`/${post.slug}`} className="text-2xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">{post.date}</p>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
