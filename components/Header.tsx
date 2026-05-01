import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-rose-500">
          Airbnb Clone
        </Link>

        <nav className="flex gap-4 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-rose-500">
            Home
          </Link>
          <Link href="/catalog" className="hover:text-rose-500">
            Catalog
          </Link>
        </nav>

        <div className="flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-500 shadow-sm">
          Search stays
          <span className="mx-2 h-4 w-px bg-gray-300" />
          Add dates
          <span className="mx-2 h-4 w-px bg-gray-300" />
          Guests
        </div>
      </div>
    </header>
  );
}
