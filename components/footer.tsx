import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="bg-background py-4 px-6 w-full">
      <div className=" flex items-center justify-between">
        <span className="text-xs font-light">
          © Lario spence. All right reserved.
        </span>

        <div className="flex items-center gap-2.5">
          <Link href={"https://github.com/vivid-designs"} target="_blank">
            <Github className="w-4 h-4" />
          </Link>
          <Link href={"https://www.linkedin.com/in/lario-sepnce/"} target="_blank">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
