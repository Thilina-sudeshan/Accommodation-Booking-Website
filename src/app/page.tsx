import { ArrowRight, BadgeCheck, Headset, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";
import { photos } from "@/data/photos";
import { destinations, properties, type Destination } from "@/data/properties";

const destinationPhotos: Record<Destination, { src: string; alt: string }> = {
  Colombo: photos.colonialSuite,
  Kandy: photos.kandyLake,
  Ella: photos.ellaGap,
  Galle: photos.fortEntrance,
  Mirissa: photos.mirissaHeadland,
  "Nuwara Eliya": photos.teaHills,
};

const reasons = [
  {
    icon: BadgeCheck,
    title: "Hand-picked stays",
    text: "From beachfront villas to hill-country bungalows, every listing is chosen for its character and comfort.",
  },
  {
    icon: MapPinned,
    title: "Local knowledge",
    text: "Our team lives in Sri Lanka, so we can help you match the right stay to your route and season.",
  },
  {
    icon: Headset,
    title: "Simple booking requests",
    text: "Send your dates and guest details in a minute, and we will confirm the rest with you directly.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[640px] items-center bg-forest-dark pb-36 pt-28 text-white sm:min-h-[680px] lg:pb-28">
        <Image
          src={photos.negomboSunset.src}
          alt={photos.negomboSunset.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Villas, homes and boutique hotels
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Discover Your Perfect Stay in Sri Lanka
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Golden beaches, misty tea country and historic cities. Find the place that makes your island
              holiday unforgettable.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:-mt-16 lg:px-8">
        <SearchBar />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Featured stays</h2>
            <p className="mt-2 text-muted">A selection of favourites from the coast to the hills.</p>
          </div>
          <Link href="/stays" className="inline-flex items-center gap-2 font-semibold text-forest hover:underline">
            View all stays
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Explore by destination</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-6">
            {destinations.map((destination) => (
              <li key={destination}>
                <Link
                  href={`/stays?destination=${encodeURIComponent(destination)}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-forest"
                >
                  <Image
                    src={destinationPhotos[destination].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 font-display text-lg font-semibold text-white">
                    {destination}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Why stay with us</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="size-7 text-clay" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
