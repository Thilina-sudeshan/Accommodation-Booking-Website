const THUMB_BASE = "https://thumb.wikimedia.org/wikipedia/commons/thumb";

/** Turns a Commons path such as "/9/9a/Photo.jpg" into a thumbnail URL of the requested width. */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const file = src.split("/").pop();
  return `${THUMB_BASE}${src}/${width}px-${file}`;
}
