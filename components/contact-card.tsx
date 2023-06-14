import Link from "next/link";
import { Card } from "./ui/card";
import { Icons } from "./icon";
import { siteConfig } from "@/config/site";

export default function ContactCard() {
  const contacts = [
    {
      href: `mailto:${siteConfig.links.email}`,
      icon: <Icons.mail />,
    },
    {
      href: siteConfig.links.github,
      icon: <Icons.github />,
    },
    {
      href: siteConfig.links.linkedin,
      icon: <Icons.linkedin />,
    },
  ];

  return (
    <Card className="relative flex justify-center items-center flex-row text-primary dark:text-secondary">
      <div className="grid grid-flow-col gap-6">
        {contacts?.map((item, index) => {
          return (
            <Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={item?.href}
              className="button p-4"
            >
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
