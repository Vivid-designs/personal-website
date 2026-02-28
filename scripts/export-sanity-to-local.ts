import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "dsnalg9u";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-29";
const token = process.env.SANITY_API_READ_TOKEN;

async function runQuery<T>(query: string): Promise<T[]> {
  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);

  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed: ${response.status} ${response.statusText}`);
  }

  const payload = (await response.json()) as { result: T[] };
  return payload.result;
}

async function exportSanityData() {
  const [projects, skills] = await Promise.all([
    runQuery(`*[_type=='project']{_id,_createdAt,name,"slug":slug.current,"image":image.asset->url,url,description,is_public,"keywords":keywords[]->name}`),
    runQuery(`*[_type=='skill']{_id,_createdAt,name,category,"logo":image.asset->url}`),
  ]);

  const projectData = projects.map((project: any) => ({
    id: project._id,
    createdAt: project._createdAt,
    name: project.name,
    slug: project.slug,
    image: project.image,
    url: project.url,
    description: project.description,
    isPublic: Boolean(project.is_public),
    keywords: project.keywords || [],
  }));

  const skillData = skills.map((skill: any) => ({
    id: skill._id,
    createdAt: skill._createdAt,
    name: skill.name,
    category: skill.category || "General",
    logo: skill.logo || "",
  }));

  const outputDir = path.join(process.cwd(), "content", "data");
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "projects.json"), `${JSON.stringify(projectData, null, 2)}\n`);
  await writeFile(path.join(outputDir, "skills.json"), `${JSON.stringify(skillData, null, 2)}\n`);

  console.log(`Exported ${projectData.length} projects and ${skillData.length} skills.`);
}

exportSanityData().catch((error) => {
  console.error(error);
  process.exit(1);
});
