import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "mikeliuu",
  title: "@mikeliuu - Frontend Developer",
  description:
    "👋🏻 Hi there, I'm Mike! This is my personal website built using Nextjs and Typescript with neumorphism design",
  url: process.env.NEXT_PUBLIC_WEB_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_WEB_URL}/og.svg`,
  links: {
    email: "mikeliu058@gmail.com",
    linkedin: "https://www.linkedin.com/in/mikeliudev",
    github: "https://github.com/mikeliuu",
  },
};
