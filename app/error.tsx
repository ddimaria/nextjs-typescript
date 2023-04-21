"use client";

import Link from "next/link";

export const metadata = {
  title: "Error",
};

export default function Error() {
  return (
    <>
      <h1 className="text-3xl font-bold">Error</h1>
      <p>
        Sorry, an error has occurred. Click <Link href="/">here</Link> to go to
        the home page.
      </p>
    </>
  );
}
