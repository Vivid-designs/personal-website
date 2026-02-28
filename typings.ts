export type Project = {
  id: string;
  createdAt: string;
  name: string;
  slug: string;
  image: string;
  url?: string;
  description: string;
  isPublic: boolean;
  keywords: string[];
};

export type Skill = {
  id: string;
  createdAt: string;
  name: string;
  category: string;
  logo: string;
};

export type PostType = "post" | "page";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  type: PostType;
  pinned?: boolean;
  navLabel?: string;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
};
