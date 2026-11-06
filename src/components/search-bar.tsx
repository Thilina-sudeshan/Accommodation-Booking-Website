"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { destinations, properties } from "@/data/properties";
import { addDays, useToday } from "@/lib/dates";
import { GuestOptions, SelectField, TextField } from "./fields";

const largestStay = Math.max(...properties.map((property) => property.maxGuests));

export function SearchBar() {
  const router = useRouter();
  const today = useToday();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  function handleCheckInChange(value: string) {
    setCheckIn(value);
    if (checkOut && value >= checkOut) setCheckOut("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const query = new URLSearchParams({ guests: String(guests) });
    if (destination) query.set("destination", destination);
    if (checkIn) query.set("checkIn", checkIn);
    if (checkOut) query.set("checkOut", checkOut);
    router.push(`/stays?${query}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Search accommodation"
      className="grid gap-4 rounded-2xl bg-white p-5 text-ink shadow-xl shadow-ink/15 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] lg:items-end"
    >
      <SelectField label="Destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">All of Sri Lanka</option>
        {destinations.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </SelectField>
      <SelectField label="Number of guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
        <GuestOptions max={largestStay} />
      </SelectField>
      <TextField
        label="Check-in date"
        type="date"
        min={today}
        value={checkIn}
        onChange={(e) => handleCheckInChange(e.target.value)}
      />
      <TextField
        label="Check-out date"
        type="date"
        min={checkIn ? addDays(checkIn, 1) : today}
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-clay px-6 font-semibold text-white transition-colors hover:bg-clay-dark sm:col-span-2 lg:col-span-1"
      >
        <Search className="size-4" aria-hidden="true" />
        Search
      </button>
    </form>
  );
}
