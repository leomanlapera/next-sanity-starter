import Link from "next/link";
import RootLayout from "./(site)/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Not Found",
};

export default function NotFound() {
  return (
    <RootLayout>
      <div>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/">Go to home</Link>
      </div>
    </RootLayout>
  );
}
