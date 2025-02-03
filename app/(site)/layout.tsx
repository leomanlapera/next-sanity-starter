import { SanityLive } from "@/sanity/lib/live";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
      <SanityLive />
    </React.Fragment>
  );
}
