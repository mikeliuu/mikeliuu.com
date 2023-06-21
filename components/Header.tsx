"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { Icons } from "./icon";
import Link from "next/link";
import { classMerge } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname.endsWith("/");

  return (
    <header className={classMerge("absolute top-0 left-0 w-full py-6 px-8")}>
      <div
        className={classMerge(
          "flex justify-between items-center flex-row flex-nowrap w-full",
          { "justify-end": isHomePage },
        )}
      >
        {!isHomePage && (
          <Link aria-label="Home" title="Home" href="/" className="button p-4">
            <Icons.arrowLeft className="text-primary dark:text-secondary" />
          </Link>
        )}

        <ThemeToggle className="justify-end" />
      </div>
    </header>
  );
}
