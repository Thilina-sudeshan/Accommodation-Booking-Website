import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Lanka Stayz home">
      <svg viewBox="0 0 32 32" className="size-7 fill-current" aria-hidden="true">
        <path d="M6 28V14a10 10 0 0 1 20 0v14h-6V15a4 4 0 0 0-8 0v13z" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">Lanka Stayz</span>
    </Link>
  );
}
