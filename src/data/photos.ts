export type Photo = {
  /** Path of the file on Wikimedia Commons, consumed by the image loader. */
  src: string;
  alt: string;
  author: string;
  license: string;
};

export const photos = {
  negomboSunset: {
    src: "/9/9a/Negombo_Beach_resort_pool_%28Unsplash%29.jpg",
    alt: "Palm trees reflected in a resort pool at sunset",
    author: "Recal Media",
    license: "CC0",
  },
  suitePool: {
    src: "/6/6d/Thiranagama_Sri_Lanka_Riff_Hotel_5-star_resort_Presidential_Suite_view.jpg",
    alt: "Private plunge pool on a balcony overlooking palms and the ocean",
    author: "Xandrium",
    license: "CC0",
  },
  rooftopSunset: {
    src: "/2/26/Thiranagama_Sri_Lanka_Riff_Hotel_5-star_resort_Rooftop_sunset_dining.jpg",
    alt: "Sunset over a palm-lined beach seen from a rooftop",
    author: "Xandrium",
    license: "CC0",
  },
  suiteLounge: {
    src: "/1/15/Thiranagama_Sri_Lanka_Riff_Hotel_5-star_resort_Suite_bedroom.jpg",
    alt: "Bright suite with a sofa and wide windows facing the sea",
    author: "Xandrium",
    license: "CC0",
  },
  modernRoom: {
    src: "/9/98/Hotel_room_Sri_Lanka_Photo213.jpg",
    alt: "Modern bedroom with timber floors and a large white bed",
    author: "psychoslave",
    license: "CC BY-SA 4.0",
  },
  modernRoomWindow: {
    src: "/c/ca/Hotel_room_Sri_Lanka_Photo212.jpg",
    alt: "Modern twin bedroom with full-height windows",
    author: "psychoslave",
    license: "CC BY-SA 4.0",
  },
  colonialSuite: {
    src: "/9/97/SL_Colombo_asv2020-01_img07_GOH_Chekhov_suite.jpg",
    alt: "Colonial-style suite with a canopy bed and a timber ceiling",
    author: "A.Savin",
    license: "Free Art License",
  },
  canopyRoom: {
    src: "/0/06/Sri_Lanka_Photo106.jpg",
    alt: "Bedroom with a dark timber canopy bed and tall curtains",
    author: "psychoslave",
    license: "CC BY-SA 4.0",
  },
  canopyRoomAlt: {
    src: "/5/5c/Sri_Lanka_Photo107.jpg",
    alt: "Second view of a bedroom with a writing desk and ceiling fan",
    author: "psychoslave",
    license: "CC BY-SA 4.0",
  },
  kandyLake: {
    src: "/3/3a/SL_Kandy_asv2020-01_img11_Arthurs_Seat_view.jpg",
    alt: "View over Kandy Lake and the town with hills behind",
    author: "A.Savin",
    license: "Free Art License",
  },
  fortEntrance: {
    src: "/2/2d/Galle_Fort_Hotel_%28entrance%29.jpg",
    alt: "Colonial veranda entrance framed by potted palms",
    author: "Dan arndt",
    license: "CC BY-SA 4.0",
  },
  fortLobby: {
    src: "/6/6d/GFH_%285%29.jpg",
    alt: "Arched, airy colonial lobby with ceiling fans",
    author: "Dan arndt",
    license: "CC BY-SA 4.0",
  },
  fortStreet: {
    src: "/1/1f/Fort%2C_Galle_80000%2C_Sri_Lanka_-_panoramio_%2813%29.jpg",
    alt: "White shuttered facade on a street inside Galle Fort",
    author: "Daibo Taku",
    license: "CC BY 3.0",
  },
  mirissaShore: {
    src: "/8/8f/Mirissa_Beach.jpg",
    alt: "Long sandy shoreline at Mirissa in soft evening light",
    author: "Dan arndt",
    license: "CC BY-SA 4.0",
  },
  secretBeach: {
    src: "/2/28/Secret_Beach%2C_Mirissa_2023-03-09-4.jpg",
    alt: "Sheltered cove with rocks, palms and turquoise water",
    author: "Alexey Komarov",
    license: "CC BY-SA 4.0",
  },
  mirissaHeadland: {
    src: "/6/6f/Mirissa_beach%2C_Srilanka.jpg",
    alt: "Blue bay with a rocky shore and green headland",
    author: "Abishek Palraj",
    license: "CC BY-SA 4.0",
  },
  teaHills: {
    src: "/a/a5/Sri_Lanka%2C_Tea_plantations%2C_Nuwara_Eliya.jpg",
    alt: "Green tea plantation on the hills around Nuwara Eliya",
    author: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
  },
  mistyHills: {
    src: "/0/0e/Haputale%2C_Sri_Lanka%2C_Tea_plantations_in_fog_3.jpg",
    alt: "Trees fading into morning mist in the hill country",
    author: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
  },
  ellaGap: {
    src: "/e/ed/Ella_Gap_%28Valley%29%2C_Sri_Lanka.jpg",
    alt: "Steep green slopes of the Ella Gap valley",
    author: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
  },
  demodaraBridge: {
    src: "/6/62/SL_Demodara_near_Ella_asv2020-01_img02.jpg",
    alt: "Stone railway viaduct set in forest near Ella",
    author: "A.Savin",
    license: "Free Art License",
  },
  highlandManor: {
    src: "/6/68/Grand_Hotel_Nuwara_Eliya_026.jpg",
    alt: "Tudor-style manor with red roofs and manicured gardens",
    author: "Anuradha Dullewe Wijeyeratne",
    license: "Public domain",
  },
  flowerGarden: {
    src: "/c/c6/Nuwara_Eliya_2013_29.JPG",
    alt: "Colourful flower beds and clipped shrubs in a hill-country garden",
    author: "Cherubino",
    license: "CC BY-SA 3.0",
  },
} satisfies Record<string, Photo>;

/** The Commons page for a photo, which holds its full licence terms. */
export function photoSourceUrl(photo: Photo) {
  return `https://commons.wikimedia.org/wiki/File:${photo.src.split("/").pop()}`;
}
