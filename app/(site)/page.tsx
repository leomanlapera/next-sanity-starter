import React from "react";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { Home } from "@/sanity.types";
import Wrapper from "./components/wrapper";
import Heading from "./components/heading";

export default async function Index() {
  const { data: page } = await sanityFetch<Home>({ query: HOME_QUERY });

  if (!page) {
    notFound();
    return null;
  }

  return (
    <React.Fragment>
      <Wrapper>
        <Heading>{page.title}</Heading>
      </Wrapper>
    </React.Fragment>
  );
}

export async function generateMetadata() {
  const { data: page } = await sanityFetch<Home>({
    query: HOME_QUERY,
    // Metadata should never contain stega
    stega: false,
  });

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
