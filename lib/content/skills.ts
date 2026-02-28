import skillsData from "@/content/data/skills.json";
import { Skill } from "@/typings";

export function getSkills(): Skill[] {
  return [...(skillsData as Skill[])].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
