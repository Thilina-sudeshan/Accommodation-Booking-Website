import {
  ArrowLeft,
  BedDouble,
  Car,
  Coffee,
  CookingPot,
  Home,
  MapPin,
  Mountain,
  Snowflake,
  Trees,
  Users,
  Waves,
  WavesLadder,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BookingPanel } from "@/components/booking-panel";
import { PropertyCard } from "@/components/property-card";
import { getProperty, properties, type Amenity } from "@/data/properties";

const amenityIcons: Record<Amenity, LucideIcon> = {
  "Wi-Fi": Wifi,
  "Swimming pool": WavesLadder,
  "Air conditioning": Snowflake,
  Parking: Car,
  "Breakfast included": Coffee,
  Kitchen: CookingPot,
  Garden: Trees,
  "Beach access": Waves,
  "Mountain views": Mountain,
};

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = getProperty((await params).slug);
  return property ? { title: property.name, description: property.summary } : {};
}

export default async function PropertyPage({ params }: PageProps) {
  const property = getProperty((await params).slug);
  if (!property) notFound();

  const [mainPhoto, ...otherPhotos] = property.photos;
  const moreStays = properties
    .filter((other) => other.slug !== property.slug)
    .sort((a, b) => Number(b.destination === property.destination) - Number(a.destination === property.destination))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-20">
      <Link href="/stays" className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to all stays
      </Link>

      <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{property.name}</h1>
      <p className="mt-2 flex items-center gap-1.5 text-muted">
        <MapPin className="size-4 shrink-0" aria-hidden="true" />
        {property.area}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2 md:gap-3">
        <div className="relative col-span-2 aspect-[3/2] bg-sand md:row-span-2 md:aspect-auto md:min-h-[420px]">
          <Image
            src={mainPhoto.src}
            alt={mainPhoto.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {otherPhotos.map((photo) => (
          <div key={photo.src} className="relative aspect-[3/2] bg-sand md:col-span-2 md:aspect-auto">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 50vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
        <div className="min-w-0">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-6 text-sm font-medium">
            <li className="flex items-center gap-2">
              <Home className="size-4 text-forest" aria-hidden="true" />
              {property.type}
            </li>
            <li className="flex items-center gap-2">
              <Users className="size-4 text-forest" aria-hidden="true" />
              Maximum {property.maxGuests} {property.maxGuests === 1 ? "guest" : "guests"}
            </li>
            <li className="flex items-center gap-2">
              <BedDouble className="size-4 text-forest" aria-hidden="true" />
              {property.bedrooms} {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
            </li>
          </ul>

          <h2 className="mt-8 font-display text-2xl font-semibold">About this stay</h2>
          <div className="mt-3 space-y-4 leading-relaxed text-ink/85">
            {property.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl font-semibold">Amenities</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {property.amenities.map((amenity) => {
              const Icon = amenityIcons[amenity];
              return (
                <li key={amenity} className="flex items-center gap-3">
                  <Icon className="size-5 text-forest" aria-hidden="true" />
                  {amenity}
                </li>
              );
            })}
          </ul>
        </div>

        <Suspense fallback={<div className="h-96 rounded-2xl border border-line bg-sand" />}>
          <BookingPanel property={property} />
        </Suspense>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">More stays to explore</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreStays.map((other) => (
            <PropertyCard key={other.slug} property={other} />
          ))}
        </div>
      </section>
    </div>
  );
}
