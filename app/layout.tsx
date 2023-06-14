import "../styles/globals.css";
import { Inter } from "next/font/google";
import { classMerge } from "../lib/utils";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "personal website",
    "mikeliuu",
    "Mike Liu",
    "Next.js",
    "TypeScript",
    "React",
    "Reactjs",
    "Tailwind CSS",
    "Responsive Web",
    "neumorphism design",
    "Google Maps",
    "Real-time Weather",
    "Dark Mode",
    "Github",
    "Linkedin",
    "Web Developer",
    "Frontend Developer",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#31456A" },
    { media: "(prefers-color-scheme: dark)", color: "#272B30" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body
        className={classMerge(
          inter.className,
          "bg-secondary dark:bg-dark-light",
        )}
      >
        {children}
      </body>
    </html>
  );
}
