import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/content/projects";

export async function ProjectsList() {
  const projects = getProjects();

  return (
    <div className="grid gap-6 md:grid-cols-2 not-prose">
      {projects.map((project) => (
        <article key={project.id} className="border border-white/20 rounded-md overflow-hidden">
          <div className="relative h-44 w-full">
            <Image src={project.image} alt={project.name} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <span key={keyword} className="text-xs border border-white/20 rounded-full px-2 py-0.5">
                  {keyword}
                </span>
              ))}
            </div>
            {project.url ? (
              <Link href={project.url} target="_blank" className="inline-block mt-4 text-sm underline">
                Visit project
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
