export type BookingValues = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
};

export type BookingField = keyof BookingValues;
export type BookingErrors = Partial<Record<BookingField, string>>;

/** Form order, used to move focus to the first field with an error. */
export const bookingFields: BookingField[] = ["name", "email", "phone", "checkIn", "checkOut", "guests"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]+$/;

export function validateBooking(values: BookingValues, maxGuests: number, today: string): BookingErrors {
  const errors: BookingErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "").length;
  if (!values.phone.trim()) {
    errors.phone = "Please enter your contact number.";
  } else if (!PHONE_PATTERN.test(values.phone.trim()) || phoneDigits < 9 || phoneDigits > 15) {
    errors.phone = "Please enter a valid contact number, for example +94 77 123 4567.";
  }

  if (!values.checkIn) {
    errors.checkIn = "Please choose a check-in date.";
  } else if (values.checkIn < today) {
    errors.checkIn = "Check-in cannot be in the past.";
  }

  if (!values.checkOut) {
    errors.checkOut = "Please choose a check-out date.";
  } else if (values.checkIn && values.checkOut <= values.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  if (values.guests < 1 || values.guests > maxGuests) {
    errors.guests = `This property hosts up to ${maxGuests} guests.`;
  }

  return errors;
}
