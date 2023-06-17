import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { siteConfig, siteContent } from "@/config/site";
import { classMerge } from "@/lib/utils";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/components/google-tag-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.name,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManagerHead />

      <body
        className={classMerge(
          inter.className,
          "bg-secondary dark:bg-dark-light",
        )}
      >
        {children}

        <GoogleTagManagerNoScript />

        <div className="ssr-only">
          {Object.values(siteContent)?.map((content) => content)}
        </div>
      </body>
    </html>
  );
}
