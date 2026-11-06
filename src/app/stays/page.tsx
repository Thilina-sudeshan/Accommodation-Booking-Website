import type { Metadata } from "next";
import { Suspense } from "react";
import { StaysBrowser } from "@/components/stays-browser";

export const metadata: Metadata = {
  title: "Explore Stays",
  description: "Browse sample accommodation across Sri Lanka and filter by destination.",
};

export default function StaysPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Explore stays in Sri Lanka</h1>
      <p className="mb-8 mt-2 text-muted">Choose a destination to narrow down your perfect place to stay.</p>
      <Suspense fallback={<p className="text-muted">Loading stays...</p>}>
        <StaysBrowser />
      </Suspense>
    </div>
  );
}
