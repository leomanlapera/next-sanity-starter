import { sanityFetch } from "@/sanity/sanity.config";
import { settingsQuery } from "@/sanity/sanity.query";
import { Settings } from "@/sanity/sanity.types";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let settings: Settings | null = null;

  try {
    settings = await sanityFetch<Settings>({
      query: settingsQuery,
      tags: ["settings"],
    });
    console.log("Settings fetched:", settings);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
  }

  return (
    <React.Fragment>
      <header role="banner">Header</header>
      <main role="main">{children}</main>
      <footer role="contentinfo">Footer</footer>
    </React.Fragment>
  );
}
