import React, { cache } from "react";
import { sanityFetch } from "@/sanity/sanity.config";
import { homeQuery } from "@/sanity/sanity.query";
import { Home as HomeProps } from "@/sanity/sanity.types";
import { notFound } from "next/navigation";

// Cache the fetchData function to avoid redundant fetches
const fetchData = cache(async () => {
  try {
    const page = await sanityFetch<HomeProps>({
      query: homeQuery,
      tags: ["home"],
    });
    return page;
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return null;
  }
});

export default async function Home() {
  const page = await fetchData();

  if (!page) {
    notFound();
    return null; // Ensure nothing is rendered if the page is not found
  }

  console.log(page);

  return (
    <React.Fragment>
      {/* Render home content here */}
      Home
    </React.Fragment>
  );
}

export async function generateMetadata() {
  const page = await fetchData();

  if (!page) {
    notFound();
    return {};
  }

  return {
    title: page.title ?? "Default Title",
    description: page.description ?? "Default Description",
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_DOMAIN_URL ?? "https://default-url.com",
    },
  };
}
