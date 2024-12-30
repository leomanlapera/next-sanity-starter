import { SanityLive } from "@/sanity/lib/live";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <header role="banner">Header</header>
      <main role="main">{children}</main>
      <footer role="contentinfo">Footer</footer>
      <SanityLive />
    </React.Fragment>
  );
}
