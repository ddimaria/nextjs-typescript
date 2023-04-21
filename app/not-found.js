"use client";

import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <h1 className="text-3xl font-bold">404</h1>
      <p>
        The page you are looking for cannot be found. Click{" "}
        <Link href="/">here</Link> to go to the home page.
      </p>
    </>
  );
}
