import Image from "next/image";
import { getSkills } from "@/lib/content/skills";

export async function SkillsList() {
  const skills = getSkills();

  return (
    <div className="grid gap-3 sm:grid-cols-2 not-prose">
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-center gap-3 border border-white/20 rounded-md p-3">
          <Image src={skill.logo} alt={skill.name} width={28} height={28} className="object-contain" />
          <div>
            <p className="font-medium">{skill.name}</p>
            <p className="text-xs text-muted-foreground">{skill.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
