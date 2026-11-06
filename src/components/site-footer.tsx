import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contactDetails } from "@/data/contact";
import { destinations } from "@/data/properties";
import { Logo } from "./logo";

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.tiktok.com", label: "TikTok" },
  { href: "https://www.youtube.com", label: "YouTube" },
];

const headingClass = "text-sm font-semibold uppercase tracking-wider text-white/60";

export function SiteFooter() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Villas, holiday homes, apartments and boutique hotels across Sri Lanka, all in one place.
          </p>
        </div>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 translate-y-0.5" aria-hidden="true" />
              {contactDetails.address}
            </li>
            <li>
              <a href={contactDetails.phoneHref} className="flex gap-3 hover:underline">
                <Phone className="size-4 shrink-0 translate-y-0.5" aria-hidden="true" />
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactDetails.email}`} className="flex gap-3 break-all hover:underline">
                <Mail className="size-4 shrink-0 translate-y-0.5" aria-hidden="true" />
                {contactDetails.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Destinations</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/85">
            {destinations.map((destination) => (
              <li key={destination}>
                <Link
                  href={`/stays?destination=${encodeURIComponent(destination)}`}
                  className="hover:underline"
                >
                  {destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Follow us</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/65 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>Prototype for assessment purposes. Properties and contact details are fictional.</p>
          <Link href="/credits" className="underline hover:text-white">
            Photo credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
