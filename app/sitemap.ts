import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_DOMAIN_URL environment variable is not set.");
}

export const dynamic = "force-dynamic";

async function fetchPages(): Promise<
  Array<{
    url: string;
    lastModified: Date;
    changeFrequency:
      | "yearly"
      | "monthly"
      | "weekly"
      | "daily"
      | "hourly"
      | "always"
      | "never";
    priority: number;
  }>
> {
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetchPages();

  return pages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
