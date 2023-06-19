import { SiteConfig, SiteContent } from "@/types";

export const siteConfig: SiteConfig = {
  name: "@mikeliuu",
  title: "Mike Liu - Frontend Developer",
  description:
    "👋🏻 Hi there, I'm Mike! This is my personal website @mikeliuu built using Nextjs and Typescript with neumorphism design. You may have my related info at a glance with real-time weather data in London, Google map location in London and my contact methods by email, Linkedin and Github.",
  keywords: [
    "mikeliuu",
    "mikeliuu dev",
    "mikeliudev",
    "mike dev",
    "mike liu",
    "mike",
    "nextjs",
    "next.js",
    "typescript",
    "react",
    "reactjs",
    "react.js",
    "tailwind css",
    "responsive web",
    "neumorphism",
    "neumorphism design",
    "web developer",
    "frontend developer",
    "personal website",
    "personal web",
    "portfolio website",
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
