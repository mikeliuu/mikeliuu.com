import { SiteConfig, SiteContent } from "@/types";

export const siteConfig: SiteConfig = {
  name: "@mikeliuu",
  title: "Mike Liu - Frontend Developer",
  description:
    "👋🏻 Hi there, I'm Mike! This is my personal website built using Nextjs and Typescript with neumorphism design",
  url: process.env.NEXT_PUBLIC_WEB_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_WEB_URL}/og.png`,
  links: {
    email: "mikeliu058@gmail.com",
    linkedin: "https://www.linkedin.com/in/mikeliudev",
    github: "https://github.com/mikeliuu",
  },
};

export const siteContent: SiteContent = {
  profile: "Profile picture with my name, Mike",
  map: "Google embed map points to London, United Kingdom",
  weather: "Real-time weather",
  contact: "Contact methods with email, github and linkedin",
};
