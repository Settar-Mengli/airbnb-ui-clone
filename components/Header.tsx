import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-rose-500">
            Airbnb Clone
          </Link>

          <nav className="flex gap-4 text-sm font-semibold text-gray-700 md:hidden">
            <Link href="/" className="transition hover:text-rose-500">
              Home
            </Link>
            <Link href="/catalog" className="transition hover:text-rose-500">
              Catalog
            </Link>
          </nav>
        </div>

        <nav className="hidden gap-6 text-sm font-semibold text-gray-700 md:flex">
          <Link href="/" className="transition hover:text-rose-500">
            Home
          </Link>
          <Link href="/catalog" className="transition hover:text-rose-500">
            Catalog
          </Link>
        </nav>

        <div className="flex w-full items-center justify-between rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm md:max-w-md">
          <span>Search stays</span>
          <span className="mx-2 h-4 w-px bg-gray-300" />
          <span className="text-gray-500">Add dates</span>
          <span className="mx-2 h-4 w-px bg-gray-300" />
          <span className="text-gray-500">Guests</span>
        </div>
      </div>
    </header>
  );
}
