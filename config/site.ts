import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "mikeliuu",
  title: "mikeliuu@web - Frontend Developer",
  description:
    "My personal website built using Nextjs and Typescript with neumorphism design",
  url: process.env.NEXT_PUBLIC_WEB_URL! ?? "https://mikeliuu.com",
  ogImage: `${process.env.NEXT_PUBLIC_WEB_URL}/og.svg`,
  links: {
    email: "mikeliu058@gmail.com",
    linkedin: "https://www.linkedin.com/in/mikeliudev",
    github: "https://github.com/mikeliuu",
  },
};
