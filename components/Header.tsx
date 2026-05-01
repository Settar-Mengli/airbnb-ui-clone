import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 px-4 py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-rose-500"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
              A
            </span>
            <span>Airbnb Clone</span>
          </Link>

          <nav className="flex gap-3 text-sm font-semibold text-gray-700 md:hidden">
            <Link
              href="/"
              className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-gray-950"
            >
              Home
            </Link>
            <Link
              href="/catalog"
              className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-gray-950"
            >
              Catalog
            </Link>
          </nav>
        </div>

        <nav className="hidden gap-6 text-sm font-semibold text-gray-700 md:flex">
          <Link
            href="/"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-gray-950"
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className="rounded-full px-3 py-2 transition hover:bg-gray-100 hover:text-gray-950"
          >
            Catalog
          </Link>
        </nav>

        <div className="grid w-full grid-cols-3 divide-x divide-gray-200 rounded-full border border-gray-200 bg-white text-center text-xs shadow-md shadow-gray-200/70 md:max-w-md md:text-sm">
          <span className="px-3 py-3 font-semibold text-gray-900">
            Search stays
          </span>
          <span className="px-3 py-3 font-medium text-gray-500">
            Add dates
          </span>
          <span className="px-3 py-3 font-medium text-gray-500">Guests</span>
        </div>
      </div>
    </header>
  );
}
