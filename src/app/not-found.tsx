import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-marble px-6 pt-20 text-center">
      <h1 className="font-heading text-7xl font-light text-black/20">404</h1>
      <h2 className="mt-4 font-heading text-2xl font-light text-ink">
        Page not found
      </h2>
      <Link
        href="/properties"
        className="mt-6 font-body text-sm text-gold hover:text-gold-accessible"
      >
        See all listings
      </Link>
    </div>
  );
}
