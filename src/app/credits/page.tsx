import type { Metadata } from "next";
import { photos, photoSourceUrl, type Photo } from "@/data/photos";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Sources and licences for the photographs used in this prototype.",
};

export default function CreditsPage() {
  const allPhotos: Photo[] = Object.values(photos);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Photo credits</h1>
      <p className="mt-3 leading-relaxed text-muted">
        All photographs come from Wikimedia Commons and are shown unmodified, apart from cropping to fit the layout.
        They illustrate fictional properties, and no connection with the real places photographed is implied.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {allPhotos.map((photo) => (
          <li key={photo.src} className="py-4 text-sm">
            <a href={photoSourceUrl(photo)} target="_blank" rel="noreferrer" className="font-medium text-forest hover:underline">
              {photo.alt}
            </a>
            <p className="mt-1 text-muted">
              {photo.author} &middot; {photo.license}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
