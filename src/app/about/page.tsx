import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "About Us",
  description: "Lanka Stayz connects travellers with holiday accommodation across Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-16">
      <div>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">About Lanka Stayz</h1>
        <div className="mt-5 space-y-4 leading-relaxed text-ink/85">
          <p>
            Lanka Stayz is an online accommodation platform connecting travellers with holiday stays across Sri
            Lanka, from villas and holiday homes to apartments, boutique hotels and other unique places.
          </p>
          <p>
            Our goal is to make it simple to explore the island, compare places to stay and request a booking,
            whether you are planning a beach escape in Mirissa or a slow journey through the hill country.
          </p>
        </div>
        <Link
          href="/stays"
          className="mt-7 inline-block rounded-lg bg-forest px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          Explore stays
        </Link>
      </div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={photos.teaHills.src}
          alt={photos.teaHills.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
