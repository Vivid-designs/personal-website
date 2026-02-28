import fs from "node:fs/promises";
import path from "node:path";
import { PostFrontmatter, PostSummary } from "@/typings";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function parseFrontmatter(raw: string): { frontmatter: PostFrontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");

  const [, frontmatterRaw, content] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatterRaw.split("\n")) {
    const [key, ...rest] = line.split(":");
    if (!key) continue;
    data[key.trim()] = rest.join(":").trim();
  }

  const parseArray = (value = "") =>
    value
      .replace(/^\[/, "")
      .replace(/\]$/, "")
      .split(",")
      .map((v) => v.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);

  const frontmatter: PostFrontmatter = {
    title: data.title?.replace(/^"|"$/g, "") || "Untitled",
    date: data.date?.replace(/^"|"$/g, "") || "1970-01-01",
    description: data.description?.replace(/^"|"$/g, "") || "",
    tags: parseArray(data.tags),
    type: (data.type?.replace(/^"|"$/g, "") as "post" | "page") || "post",
    pinned: data.pinned === "true",
    navLabel: data.navLabel?.replace(/^"|"$/g, ""),
  };

  return { frontmatter, content: content.trim() };
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const files = await fs.readdir(POSTS_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
        const { frontmatter } = parseFrontmatter(source);
        return { slug, ...frontmatter };
      })
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string) {
  const source = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const { frontmatter, content } = parseFrontmatter(source);
  return { slug, frontmatter, content };
}

export async function getPinnedPages() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.type === "page" && post.pinned);
}

export async function getPageNavItems() {
  const posts = await getAllPosts();
  return posts
    .filter((post) => post.type === "page" && post.navLabel)
    .map((post) => ({ label: post.navLabel!, href: `/${post.slug}` }));
}

export async function getLatestPosts(limit = 10) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.type === "post").slice(0, limit);
}
