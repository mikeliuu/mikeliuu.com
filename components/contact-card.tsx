import Link from "next/link";
import { Card } from "./ui/card";
import { Icons } from "./icon";
import { siteConfig, siteContent } from "@/config/site";

export default function ContactCard() {
  const contacts = [
    {
      label: "Email Address",
      href: `mailto:${siteConfig.links.email}`,
      icon: <Icons.mail />,
    },
    {
      label: "Github",
      href: siteConfig.links.github,
      icon: <Icons.github />,
    },
    {
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: <Icons.linkedin />,
    },
  ];

  return (
    <Card
      id="contact-card"
      className="relative flex justify-center items-center flex-row text-primary dark:text-secondary"
    >
      <div className="grid grid-flow-col gap-6">
        {contacts?.map((item, index) => {
          return (
            <Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item?.label}
              title={item?.label}
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
