import { useSyncExternalStore } from "react";

const DAY_MS = 86_400_000;

function toIso(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

/** Today in the visitor's timezone, as the yyyy-mm-dd format used by date inputs. */
export function todayIso() {
  return toIso(new Date());
}

export function addDays(iso: string, days: number) {
  return new Date(Date.parse(`${iso}T00:00:00Z`) + days * DAY_MS).toISOString().slice(0, 10);
}

/** Nights between two dates, or 0 when the range is missing or invalid. */
export function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const nights = (Date.parse(`${checkOut}T00:00:00Z`) - Date.parse(`${checkIn}T00:00:00Z`)) / DAY_MS;
  return nights > 0 ? nights : 0;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const subscribeNever = () => () => {};

/**
 * Today's date on the client and "" during prerendering, so pages built on an
 * earlier day never hydrate with a stale minimum date.
 */
export function useToday() {
  return useSyncExternalStore(subscribeNever, todayIso, () => "");
}
