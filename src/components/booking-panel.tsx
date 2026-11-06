"use client";

import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { formatPrice, type Property } from "@/data/properties";
import { addDays, nightsBetween, useToday } from "@/lib/dates";
import { BookingForm } from "./booking-form";
import { GuestOptions, SelectField, TextField } from "./fields";

export function BookingPanel({ property }: { property: Property }) {
  const params = useSearchParams();
  const today = useToday();
  const [checkIn, setCheckIn] = useState(params.get("checkIn") ?? "");
  const [checkOut, setCheckOut] = useState(params.get("checkOut") ?? "");
  const [guests, setGuests] = useState(() => {
    const requested = Number(params.get("guests"));
    return requested >= 1 ? Math.min(Math.floor(requested), property.maxGuests) : 1;
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const nights = nightsBetween(checkIn, checkOut);

  function handleCheckInChange(value: string) {
    setCheckIn(value);
    if (checkOut && value >= checkOut) setCheckOut("");
  }

  const bookButton = (className: string) => (
    <button
      type="button"
      onClick={() => setDialogOpen(true)}
      className={`rounded-lg bg-clay font-semibold text-white transition-colors hover:bg-clay-dark ${className}`}
    >
      Book Now
    </button>
  );

  return (
    <>
      <aside
        aria-label="Booking"
        className="rounded-2xl border border-line bg-white p-6 shadow-lg shadow-ink/5 lg:sticky lg:top-24"
      >
        <p>
          <span className="font-display text-2xl font-semibold">{formatPrice(property.pricePerNight)}</span>
          <span className="text-muted"> per night</span>
        </p>

        <div className="mt-5 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
          </div>
          <SelectField label="Guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
            <GuestOptions max={property.maxGuests} />
          </SelectField>
        </div>

        {nights > 0 && (
          <p className="mt-5 flex justify-between gap-4 border-t border-line pt-4 text-sm">
            <span>
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
            <span className="font-semibold">{formatPrice(nights * property.pricePerNight)}</span>
          </p>
        )}

        {bookButton("mt-5 h-12 w-full")}
        <p className="mt-3 text-center text-xs text-muted">You will not be charged. This is a booking request.</p>
      </aside>

      {/* Keeps booking within reach on phones, where the panel scrolls out of view. */}
      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 border-t border-line bg-white px-4 py-3 lg:hidden">
        <p className="min-w-0 text-sm">
          <span className="block font-semibold">{formatPrice(property.pricePerNight)}</span>
          <span className="text-muted">per night</span>
        </p>
        {bookButton("h-11 shrink-0 px-6")}
      </div>

      {dialogOpen && (
        <BookingDialog onClose={() => setDialogOpen(false)}>
          <BookingForm
            property={property}
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
            onCheckInChange={handleCheckInChange}
            onCheckOutChange={setCheckOut}
            onGuestsChange={setGuests}
            onClose={() => setDialogOpen(false)}
          />
        </BookingDialog>
      )}
    </>
  );
}

function BookingDialog({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label="Booking request"
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-xl rounded-2xl p-0 text-ink backdrop:bg-black/60"
    >
      <div className="relative p-5 sm:p-7">
        <button
          type="button"
          onClick={close}
          aria-label="Close booking form"
          className="absolute right-3 top-3 rounded-lg p-2 text-muted hover:bg-sand hover:text-ink"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
