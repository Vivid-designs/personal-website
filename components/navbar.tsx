import Link from "next/link";
import { getPageNavItems } from "@/lib/content/posts";

export const Navbar = async () => {
  const navItems = await getPageNavItems();

  return (
    <div className="h-20 fixed top-0 z-50 w-full flex items-center border-b border-neutral-700 backdrop-blur-sm rounded-md">
      <div className="container max-w-8xl flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Spencesa.co.za
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hidden sm:block font-light text-lg text-white/50 hover:text-white transition duration-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
