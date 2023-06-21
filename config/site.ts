import { SiteConfig, SiteContent } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mike Liu @mikeliuu.com",
  title: "Mike Liu | Digital Savvy",
  description:
    "I'm Mike, this is my personal website built using Nextjs and Typescript with neumorphism design.",
  keywords: [
    "mikeliuu",
    "mikeliuu dev",
    "mike liu",
    "mike",
    "nextjs",
    "typescript",
    "reactjs",
    "responsive web",
    "digital marketing",
    "frontend developer",
    "personal website",
    "personal web",
  ],
  url: process.env.NEXT_PUBLIC_WEB_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_WEB_URL}/og.png`,
  links: {
    email: "mikeliu058@gmail.com",
    linkedin: "https://www.linkedin.com/in/mikeliutw",
    github: "https://github.com/mikeliuu",
  },
};

export const siteContent: SiteContent = {
  profile: "Mike Liu with memoji profile picture",
  map: "Embeded Google map points to London, United Kingdom",
  weather: "Real-time weather in London",
  contact: `Contact methods with email by ${siteConfig?.links?.email}, github - ${siteConfig?.name} or ${siteConfig?.links?.github}, and linkedin - ${siteConfig?.links?.linkedin}`,
};
