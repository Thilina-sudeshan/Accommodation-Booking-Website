import { photos, type Photo } from "./photos";

export const destinations = ["Colombo", "Kandy", "Ella", "Galle", "Mirissa", "Nuwara Eliya"] as const;
export type Destination = (typeof destinations)[number];

export const propertyTypes = ["Villa", "Holiday Home", "Apartment", "Boutique Hotel"] as const;
export type PropertyType = (typeof propertyTypes)[number];

export type Amenity =
  | "Wi-Fi"
  | "Swimming pool"
  | "Air conditioning"
  | "Parking"
  | "Breakfast included"
  | "Kitchen"
  | "Garden"
  | "Beach access"
  | "Mountain views";

export type Property = {
  slug: string;
  name: string;
  destination: Destination;
  area: string;
  type: PropertyType;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  summary: string;
  description: string[];
  amenities: Amenity[];
  photos: Photo[];
};

export const properties: Property[] = [
  {
    slug: "coral-bay-villa",
    name: "Coral Bay Villa",
    destination: "Mirissa",
    area: "Mirissa, Southern Province",
    type: "Villa",
    pricePerNight: 78500,
    maxGuests: 6,
    bedrooms: 3,
    summary: "An oceanfront villa with a private plunge pool and sunset views.",
    description: [
      "Coral Bay Villa sits just above the shoreline, with every living space opening towards the Indian Ocean. Start the day with a swim in the private plunge pool, then walk down to the beach for whale-watching departures from Mirissa harbour.",
      "Three air-conditioned bedrooms make it an easy choice for families or friends travelling together. A villa host can arrange a private chef, airport transfers and day trips along the southern coast.",
    ],
    amenities: ["Wi-Fi", "Swimming pool", "Air conditioning", "Parking", "Breakfast included", "Beach access"],
    photos: [photos.suitePool, photos.suiteLounge, photos.rooftopSunset],
  },
  {
    slug: "rampart-house-galle",
    name: "Rampart House",
    destination: "Galle",
    area: "Galle Fort, Southern Province",
    type: "Boutique Hotel",
    pricePerNight: 54000,
    maxGuests: 4,
    bedrooms: 2,
    summary: "A restored colonial townhouse a short stroll from the fort walls.",
    description: [
      "Set on a quiet lane inside the UNESCO-listed Galle Fort, Rampart House pairs high ceilings and arched verandas with modern comforts. The cafes, galleries and ramparts of the old town are all within walking distance.",
      "Breakfast is served in the courtyard each morning, and the front desk can organise walking tours and transfers to the nearby beaches.",
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Breakfast included", "Garden"],
    photos: [photos.fortEntrance, photos.fortLobby, photos.fortStreet],
  },
  {
    slug: "lotus-court-residence",
    name: "Lotus Court Residence",
    destination: "Colombo",
    area: "Colombo 07, Western Province",
    type: "Apartment",
    pricePerNight: 38500,
    maxGuests: 3,
    bedrooms: 1,
    summary: "A polished city apartment close to Colombo's parks and galleries.",
    description: [
      "Lotus Court Residence is a calm base in the leafy Cinnamon Gardens district, suited to business trips and city breaks. Timber floors, full-height windows and a dedicated work desk keep the apartment bright and practical.",
      "Viharamahadevi Park and the National Museum are a short tuk-tuk ride away, and secure parking is included with every stay.",
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Parking", "Kitchen"],
    photos: [photos.modernRoom, photos.modernRoomWindow, photos.colonialSuite],
  },
  {
    slug: "lakeview-hill-house",
    name: "Lakeview Hill House",
    destination: "Kandy",
    area: "Kandy, Central Province",
    type: "Holiday Home",
    pricePerNight: 42000,
    maxGuests: 5,
    bedrooms: 2,
    summary: "A hillside home with sweeping views across Kandy Lake.",
    description: [
      "Perched on the hills above the city, Lakeview Hill House looks out over Kandy Lake and the surrounding ranges. The home keeps a traditional character, with handcrafted timber furniture and generous bedrooms.",
      "The Temple of the Sacred Tooth Relic and the Royal Botanical Gardens are both a short drive away, making this an ideal stop on a cultural tour of the island.",
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Parking", "Kitchen", "Mountain views"],
    photos: [photos.kandyLake, photos.canopyRoom, photos.canopyRoomAlt],
  },
  {
    slug: "ella-gap-lodge",
    name: "Ella Gap Lodge",
    destination: "Ella",
    area: "Ella, Uva Province",
    type: "Villa",
    pricePerNight: 36000,
    maxGuests: 4,
    bedrooms: 2,
    summary: "A peaceful mountain retreat overlooking the famous Ella Gap.",
    description: [
      "Ella Gap Lodge is made for slow mornings and long hikes. Watch the mist lift from the valley over a cup of Ceylon tea, then set off for Little Adam's Peak or the Nine Arch Bridge.",
      "The evenings are cool enough for a blanket on the terrace, and the hosts serve home-cooked Sri Lankan rice and curry on request.",
    ],
    amenities: ["Wi-Fi", "Parking", "Breakfast included", "Garden", "Mountain views"],
    photos: [photos.ellaGap, photos.demodaraBridge, photos.mistyHills],
  },
  {
    slug: "tea-planters-bungalow",
    name: "Tea Planter's Bungalow",
    destination: "Nuwara Eliya",
    area: "Nuwara Eliya, Central Province",
    type: "Holiday Home",
    pricePerNight: 58000,
    maxGuests: 8,
    bedrooms: 4,
    summary: "A grand hill-country home with rose gardens and tea estate walks.",
    description: [
      "Tudor-style gables, open fireplaces and wide lawns give this bungalow the charm of Nuwara Eliya's planter era. It comfortably sleeps large families, with four bedrooms and a dining room built for long meals.",
      "Spend the day touring working tea estates, boating on Gregory Lake or exploring Horton Plains, then return for high tea in the garden.",
    ],
    amenities: ["Wi-Fi", "Parking", "Breakfast included", "Kitchen", "Garden", "Mountain views"],
    photos: [photos.highlandManor, photos.flowerGarden, photos.teaHills],
  },
  {
    slug: "secret-beach-cabana",
    name: "Secret Beach Cabana",
    destination: "Mirissa",
    area: "Mirissa, Southern Province",
    type: "Holiday Home",
    pricePerNight: 32000,
    maxGuests: 2,
    bedrooms: 1,
    summary: "A barefoot beach hideaway for couples, steps from a quiet cove.",
    description: [
      "Tucked behind the palms near one of Mirissa's most sheltered coves, this cabana is designed for two. Fall asleep to the sound of the waves and wake up within steps of calm, clear water.",
      "Surf schools, seafood restaurants and the lively main beach are a few minutes away by tuk-tuk whenever you want company.",
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Garden", "Beach access"],
    photos: [photos.secretBeach, photos.mirissaShore, photos.mirissaHeadland],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function isDestination(value: string | null): value is Destination {
  return destinations.includes(value as Destination);
}

export function isPropertyType(value: string | null): value is PropertyType {
  return propertyTypes.includes(value as PropertyType);
}

export function formatPrice(amount: number) {
  return `LKR ${amount.toLocaleString("en-US")}`;
}
