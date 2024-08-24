import { MetadataRoute } from "next";

// Ensure the NEXT_PUBLIC_DOMAIN_URL environment variable is set
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_DOMAIN_URL environment variable is not set.");
}

// Set the dynamic property to force dynamic rendering
export const dynamic = "force-dynamic";

// Function to fetch pages data; replace with actual data fetching logic
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
  // Replace with actual logic to fetch page data
  // Example pages data
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/page1`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/page2`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Add more pages as needed
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetchPages(); // Fetch your pages data

  return pages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
