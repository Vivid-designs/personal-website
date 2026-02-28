import { ProjectsList } from "@/components/content/projects-list";
import { SkillsList } from "@/components/content/skills-list";
import { ContactForm } from "@/components/content/contact-form";

export async function MdxContent({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: JSX.Element[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed === "<ProjectsList />") {
      blocks.push(<ProjectsList key={`projects-${blocks.length}`} />);
      continue;
    }
    if (trimmed === "<SkillsList />") {
      blocks.push(<SkillsList key={`skills-${blocks.length}`} />);
      continue;
    }
    if (trimmed === "<ContactForm />") {
      blocks.push(<ContactForm key={`contact-${blocks.length}`} />);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${blocks.length}`}>{trimmed.replace("## ", "")}</h2>);
    } else if (trimmed.startsWith("# ")) {
      blocks.push(<h1 key={`h1-${blocks.length}`}>{trimmed.replace("# ", "")}</h1>);
    } else if (trimmed.startsWith("- ")) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          <li>{trimmed.replace("- ", "")}</li>
        </ul>
      );
    } else {
      blocks.push(<p key={`p-${blocks.length}`}>{trimmed}</p>);
    }
  }

  return <>{blocks}</>;
}
