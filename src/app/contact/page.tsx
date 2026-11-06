import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { contactDetails } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Lanka Stayz team.",
};

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Phone", value: contactDetails.phone, href: contactDetails.phoneHref },
    { icon: Mail, label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    { icon: MapPin, label: "Office", value: contactDetails.address },
    { icon: Clock, label: "Opening hours", value: contactDetails.hours },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Contact us</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        Need help choosing a stay or planning a route? Our team is happy to help.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="rounded-2xl border border-line p-6">
            <Icon className="size-6 text-clay" aria-hidden="true" />
            <h2 className="mt-3 font-semibold">{label}</h2>
            {href ? (
              <a href={href} className="mt-1 block break-words text-muted hover:underline">
                {value}
              </a>
            ) : (
              <p className="mt-1 text-muted">{value}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
