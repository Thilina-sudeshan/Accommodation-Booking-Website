"use client";

import { CalendarDays } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  destinations,
  isDestination,
  isPropertyType,
  properties,
  propertyTypes,
} from "@/data/properties";
import { formatDate, nightsBetween } from "@/lib/dates";
import { GuestOptions, SelectField } from "./fields";
import { PropertyCard } from "./property-card";

const largestStay = Math.max(...properties.map((property) => property.maxGuests));

const chipClass =
  "rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-forest aria-pressed:border-forest aria-pressed:bg-forest aria-pressed:text-white";

export function StaysBrowser() {
  const router = useRouter();
  const params = useSearchParams();

  // Filters live in the URL so results can be shared and survive the back button.
  const rawDestination = params.get("destination");
  const destination = isDestination(rawDestination) ? rawDestination : "";
  const rawType = params.get("type");
  const type = isPropertyType(rawType) ? rawType : "";
  const parsedGuests = Number(params.get("guests"));
  const guests = parsedGuests >= 1 && parsedGuests <= largestStay ? Math.floor(parsedGuests) : 0;
  const checkIn = params.get("checkIn") ?? "";
  const checkOut = params.get("checkOut") ?? "";
  const nights = nightsBetween(checkIn, checkOut);

  const results = properties.filter(
    (property) =>
      (!destination || property.destination === destination) &&
      (!type || property.type === type) &&
      property.maxGuests >= guests,
  );

  const cardQuery = new URLSearchParams();
  if (checkIn) cardQuery.set("checkIn", checkIn);
  if (checkOut) cardQuery.set("checkOut", checkOut);
  if (guests) cardQuery.set("guests", String(guests));

  function setFilter(name: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(name, value);
    else next.delete(name);
    const query = next.toString();
    router.replace(query ? `/stays?${query}` : "/stays", { scroll: false });
  }

  const hasFilters = Boolean(destination || type || guests);

  return (
    <>
      <div role="group" aria-label="Filter by destination" className="flex flex-wrap gap-2">
        <button
          type="button"
          className={chipClass}
          aria-pressed={!destination}
          onClick={() => setFilter("destination", "")}
        >
          All destinations
        </button>
        {destinations.map((name) => (
          <button
            key={name}
            type="button"
            className={chipClass}
            aria-pressed={destination === name}
            onClick={() => setFilter("destination", name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:max-w-md sm:grid-cols-2">
        <SelectField label="Property type" value={type} onChange={(e) => setFilter("type", e.target.value)}>
          <option value="">All types</option>
          {propertyTypes.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </SelectField>
        <SelectField label="Guests" value={guests || ""} onChange={(e) => setFilter("guests", e.target.value)}>
          <option value="">Any number</option>
          <GuestOptions max={largestStay} />
        </SelectField>
      </div>

      {nights > 0 && (
        <p className="mt-6 flex items-start gap-2 rounded-lg bg-sand px-4 py-3 text-sm">
          <CalendarDays className="size-4 shrink-0 translate-y-0.5 text-forest" aria-hidden="true" />
          <span>
            Your dates, {formatDate(checkIn)} to {formatDate(checkOut)} ({nights} {nights === 1 ? "night" : "nights"}),
            will carry through to your booking request. Availability is confirmed after you send it.
          </span>
        </p>
      )}

      <p className="mt-8 text-sm font-medium text-muted" role="status">
        {results.length} {results.length === 1 ? "stay" : "stays"} found
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.slug} property={property} query={cardQuery.toString()} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl bg-sand px-6 py-14 text-center">
          <h2 className="font-display text-xl font-semibold">No stays match those filters</h2>
          <p className="mt-2 text-muted">Try another destination or a smaller group size.</p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => router.replace("/stays", { scroll: false })}
              className="mt-5 rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-dark"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </>
  );
}
