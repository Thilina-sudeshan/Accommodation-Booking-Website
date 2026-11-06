"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { formatPrice, type Property } from "@/data/properties";
import { bookingFields, validateBooking } from "@/lib/booking";
import { addDays, formatDate, nightsBetween, todayIso, useToday } from "@/lib/dates";
import { GuestOptions, SelectField, TextField } from "./fields";

type BookingFormProps = {
  property: Property;
  checkIn: string;
  checkOut: string;
  guests: number;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
  onClose: () => void;
};

export function BookingForm({
  property,
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onClose,
}: BookingFormProps) {
  const today = useToday();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [reference, setReference] = useState("");

  const values = { name, email, phone, checkIn, checkOut, guests };
  // Errors appear after the first submit and then update as the guest corrects each field.
  const errors = attempted ? validateBooking(values, property.maxGuests, todayIso()) : {};
  const nights = nightsBetween(checkIn, checkOut);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentErrors = validateBooking(values, property.maxGuests, todayIso());
    const firstInvalid = bookingFields.find((field) => currentErrors[field]);

    if (firstInvalid) {
      setAttempted(true);
      const input = event.currentTarget.elements.namedItem(firstInvalid);
      if (input instanceof HTMLElement) input.focus();
      return;
    }

    setReference(`LS-${crypto.randomUUID().slice(0, 8).toUpperCase()}`);
  }

  if (reference) {
    return (
      <div role="status" className="text-center">
        <CheckCircle2 className="mx-auto size-12 text-forest" aria-hidden="true" />
        <h2 className="mt-3 font-display text-2xl font-semibold">Booking request received</h2>
        <p className="mt-2 text-muted">
          Thank you, {name.trim()}. On the full service, our team would contact you at {email.trim()} to confirm
          your stay.
        </p>

        <dl className="mt-6 divide-y divide-line rounded-xl border border-line text-left text-sm">
          {[
            ["Reference", reference],
            ["Property", property.name],
            ["Dates", `${formatDate(checkIn)} to ${formatDate(checkOut)}`],
            ["Guests", String(guests)],
            ["Estimated total", `${formatPrice(nights * property.pricePerNight)} (${nights} ${nights === 1 ? "night" : "nights"})`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-muted">{label}</dt>
              <dd className="text-right font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-sm text-muted">
          This is a demonstration. No reservation was made, no payment was taken and your details were not sent
          anywhere.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 h-11 w-full rounded-lg bg-forest font-semibold text-white hover:bg-forest-dark"
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="pr-8 font-display text-2xl font-semibold">Request to book</h2>
      <p className="mt-1 text-sm text-muted">
        {property.name}, {property.destination}
      </p>

      <div className="mt-5 grid gap-4">
        <TextField
          label="Guest name"
          name="name"
          autoComplete="name"
          required
          value={name}
          error={errors.name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contact number"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+94 77 123 4567"
            required
            value={phone}
            error={errors.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Check-in date"
            name="checkIn"
            type="date"
            required
            min={today}
            value={checkIn}
            error={errors.checkIn}
            onChange={(e) => onCheckInChange(e.target.value)}
          />
          <TextField
            label="Check-out date"
            name="checkOut"
            type="date"
            required
            min={checkIn ? addDays(checkIn, 1) : today}
            value={checkOut}
            error={errors.checkOut}
            onChange={(e) => onCheckOutChange(e.target.value)}
          />
        </div>
        <SelectField
          label="Number of guests"
          name="guests"
          required
          value={guests}
          error={errors.guests}
          onChange={(e) => onGuestsChange(Number(e.target.value))}
        >
          <GuestOptions max={property.maxGuests} />
        </SelectField>
      </div>

      {nights > 0 && (
        <p className="mt-5 flex justify-between gap-4 rounded-lg bg-sand px-4 py-3 text-sm">
          <span>
            {formatPrice(property.pricePerNight)} x {nights} {nights === 1 ? "night" : "nights"}
          </span>
          <span className="font-semibold">{formatPrice(nights * property.pricePerNight)}</span>
        </p>
      )}

      <button
        type="submit"
        className="mt-5 h-12 w-full rounded-lg bg-clay font-semibold text-white transition-colors hover:bg-clay-dark"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
