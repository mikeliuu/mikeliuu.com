"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { Icons } from "./icon";
import { siteConfig, siteContent } from "@/config/site";
import { event } from "@/lib/gtm";

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

  const handleGtmEvent = (url: string) => {
    event({
      event: "click_outbound_link",
      value: url,
    });
  };

  return (
    <Card className="relative flex justify-center items-center flex-row text-primary dark:text-secondary">
      <div className="ssr-only">{siteContent.contact}</div>

      <div className="grid grid-flow-col gap-6">
        {contacts?.map((item, index) => {
          return (
            <Link
              passHref
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={item?.href}
              className="button p-4"
              onClick={() => handleGtmEvent(item?.href)}
            >
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
