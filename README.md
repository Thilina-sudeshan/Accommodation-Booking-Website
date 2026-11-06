# Lanka Stayz

A prototype accommodation booking website for Sri Lanka, built for the Xero Lanka web developer practical assessment.

**Live demo:** _add link after deployment_

No login is required to use the site.

## Features

| Page | Route | What it does |
| --- | --- | --- |
| Homepage | `/` | Hero banner, search (destination, dates, guests), six featured stays, destinations, footer |
| Listings | `/stays` | Seven sample properties, filtered by destination, property type and guest count |
| Property details | `/stays/[slug]` | Photos, description, amenities, capacity, price, dates and a Book Now button |
| Booking request | Dialog on the details page | Required-field validation and a confirmation message |
| About Us, Contact | `/about`, `/contact` | Company information and contact details |
| Photo credits | `/credits` | Author, licence and source for every photo |

The layout adapts to phones, tablets and desktops. Filters are stored in the URL, so a filtered list can be shared and survives the back button. Dates and guest numbers carry from the search through to the booking form.

## Technologies

- [Next.js 16](https://nextjs.org) (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Photos from Wikimedia Commons

## Running the project

Requires Node.js 20.9 or later.

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

To check and run a production build:

```bash
npm run lint
```

```bash
npm run build
```

```bash
npm start
```

## Project structure

```text
src/
  app/          Pages and layouts, one folder per route
  components/   Header, footer, search, property card, filters, booking panel and form
  data/         Sample properties, photo credits and contact details
  lib/          Booking validation, date helpers and the image loader
```

## Incomplete and simulated features

As allowed by the brief, this is a front-end prototype:

- **Booking requests are not sent or stored.** The confirmation and reference number are generated in the browser, and the page says so.
- **There is no payment, live availability or user account system.** Search dates are carried to the booking form, but they do not filter properties.
- **Properties and contact details are fictional.** Social media links go to each platform's homepage.
- **Photos are illustrative.** They show real places in Sri Lanka and are used under their licences, but they do not depict the fictional properties. See `/credits`.
- **Photos are loaded from Wikimedia's servers,** so they depend on that service being available.
- **There are no automated tests.** The flows were tested by hand in a browser at desktop, tablet and phone widths.

## AI assistance

This project was developed with the assistance of Claude Code, an AI coding tool, as permitted by the assessment brief.
