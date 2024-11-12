import React from "react";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homeQuery } from "@/sanity/lib/queries";

export default async function Index() {
  const { data: page } = await sanityFetch({ query: homeQuery });

  if (!page) {
    notFound();
    return null;
  }

  return <React.Fragment>{page.title}</React.Fragment>;
}

export async function generateMetadata() {
  const { data: page } = await sanityFetch({ query: homeQuery });

  if (!page) {
    notFound();
    return {};
  }

  return {
    title: `${page.title} | Website Name`,
    description: page.description,
    alternates: { canonical: process.env.NEXT_PUBLIC_DOMAIN_URL },
  };
}
