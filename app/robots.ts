import { MetadataRoute } from "next";

// Ensure the NEXT_PUBLIC_DOMAIN_URL environment variable is set
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_DOMAIN_URL environment variable is not set.");
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
