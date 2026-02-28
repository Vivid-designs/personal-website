import projectsData from "@/content/data/projects.json";
import { Project } from "@/typings";

export function getProjects(): Project[] {
  return [...(projectsData as Project[])].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
}
