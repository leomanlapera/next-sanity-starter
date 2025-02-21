import { SanityLive } from "@/sanity/lib/live";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import PageTransition from "../components/page-transition";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Header />
      <PageTransition>
        <main>{children}</main>
        <Footer />
      </PageTransition>
      <SanityLive />
    </React.Fragment>
  );
}
