import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">We could not find that page</h1>
      <p className="mt-3 text-muted">The page may have moved, or the link may be incorrect.</p>
      <Link
        href="/stays"
        className="mt-6 inline-block rounded-lg bg-forest px-6 py-3 font-semibold text-white hover:bg-forest-dark"
      >
        Explore stays
      </Link>
    </div>
  );
}
