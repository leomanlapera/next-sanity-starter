import React from "react";
import { sanityFetch } from "@/sanity/sanity.config";
import { homeQuery } from "@/sanity/sanity.query";
import { Home } from "@/sanity/sanity.types";
import { notFound } from "next/navigation";

export default async function Index() {
  const page = await sanityFetch<Home>({
    query: homeQuery,
    tags: ["home"],
  });

  if (!page) {
    notFound();
    return null; // Ensure nothing is rendered if the page is not found
  }

  return (
    <React.Fragment>
      {/* Render home content here */}
      Home
    </React.Fragment>
  );
}

export async function generateMetadata() {
  const page = await sanityFetch<Home>({
    query: homeQuery,
    tags: ["home"],
  });

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
