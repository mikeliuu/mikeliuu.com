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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.url} />
        <meta property="twitter:title" content={siteConfig.title} />
        <meta property="twitter:description" content={siteConfig.description} />
        <meta property="twitter:image" content={siteConfig.ogImage} />
      </head>

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
