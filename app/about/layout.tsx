import { siteConfig } from "@/config/site";

export const metadata = {
  title: `About - ${siteConfig.title}`,
  authors: [
    {
      name: siteConfig.name,
      url: "/about",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    title: `About - ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `About - ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.name,
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center my-12">{children}</section>;
}
