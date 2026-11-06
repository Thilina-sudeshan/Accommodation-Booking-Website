# Development Summary

## Approach

I treated the assessment as a small product rather than a set of separate pages, and built around the journey a traveller follows: search, compare, view a property and request a booking.

**Next.js with TypeScript and Tailwind CSS.** Next.js prerenders pages for fast loading and search visibility, and gives each property its own URL. TypeScript keeps property data consistent, and Tailwind made it quick to build one responsive design system.

**Data separated from the interface.** Properties live in one typed file, and pages are generated from it. Adding a property needs no new page code, and the file could later be replaced by an API or database.

**Shareable state.** Listing filters are stored in the URL instead of component state, so filtered results can be bookmarked or shared and still work with the back button. Search dates and guest numbers carry through to the booking form, so visitors never have to enter them twice.

**Separate validation logic.** Booking rules sit in a single function, separate from the form. They cover required fields, email and phone formats, past dates, date order and guest capacity. Errors appear after the first submit, update as each field is corrected, and move keyboard focus to the first problem.

**Mobile and accessibility.** The layout was checked at phone, tablet and desktop widths. Phones get a menu button and a fixed Book Now bar. The booking form uses the native dialog element, which handles focus and the Escape key, and form errors are linked to their fields for screen readers.

**Honest prototype behaviour.** The confirmation message states that no reservation or payment was made, and every photo is credited with its licence.

## Improvements for the full commercial website

**Core platform**

- A database and API for properties, availability and reservations, with protection against double bookings
- Live availability, so date searches only show properties that are free
- Seasonal pricing, taxes, fees and multi-currency display for international guests
- Payment gateway integration with deposits, refunds and cancellation policies
- Email and SMS confirmations for guests and hosts

**Users and operations**

- Guest accounts with booking history and saved properties
- A host and admin dashboard for managing listings, photos, calendars and reservations
- Verified guest reviews and ratings

**Discovery**

- Map-based search, more filters and sorting
- Real, professionally shot photographs hosted on an image CDN
- Sinhala and Tamil translations, plus SEO work such as structured data and destination guides

**Quality and security**

- Automated unit and end-to-end tests with continuous integration
- Server-side validation, rate limiting and spam protection
- Data protection compliance, analytics, error monitoring and a formal accessibility audit

## AI tool disclosure

I used an AI coding assistant during development, as the brief permits. I reviewed the code and can explain and modify it during the technical interview.
