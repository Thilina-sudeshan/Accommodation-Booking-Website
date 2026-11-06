import { Home, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
  /** Search values to carry through to the details page, such as "checkIn=2026-12-01". */
  query?: string;
};

export function PropertyCard({ property, query }: PropertyCardProps) {
  const href = `/stays/${property.slug}${query ? `?${query}` : ""}`;
  const cover = property.photos[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-ink/10">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold">{property.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          {property.destination}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <li className="flex items-center gap-1.5">
            <Home className="size-4 shrink-0" aria-hidden="true" />
            {property.type}
          </li>
          <li className="flex items-center gap-1.5">
            <Users className="size-4 shrink-0" aria-hidden="true" />
            Up to {property.maxGuests} {property.maxGuests === 1 ? "guest" : "guests"}
          </li>
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p>
            <span className="block font-semibold">{formatPrice(property.pricePerNight)}</span>
            <span className="text-sm text-muted">per night</span>
          </p>
          <Link
            href={href}
            aria-label={`View details for ${property.name}`}
            className="shrink-0 rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
