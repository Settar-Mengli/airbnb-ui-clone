"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ListingCard from "../../components/ListingCard";
import { listings } from "../../data/listing";

type SortOrder = "asc" | "desc";

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(listings.map((listing) => listing.category))),
  ];

  const filteredListings = listings
    .filter((listing) => {
      const searchText = searchTerm.toLowerCase();
      const matchesSearch =
        listing.title.toLowerCase().includes(searchText) ||
        listing.location.toLowerCase().includes(searchText);
      const matchesCategory =
        activeCategory === "All" || listing.category === activeCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((firstListing, secondListing) => {
      if (sortOrder === "asc") {
        return firstListing.pricePerNight - secondListing.pricePerNight;
      }

      return secondListing.pricePerNight - firstListing.pricePerNight;
    });

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-rose-500">
              Browse places
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-950 sm:text-3xl">
              All stays
            </h1>
          </div>

          <div className="mb-8 grid gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:grid-cols-[1fr_220px] lg:items-end">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">
                Search
              </span>
              <input
                type="text"
                placeholder="Search stays"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">
                Sort by price
              </span>
              <select
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(event.target.value as SortOrder)
                }
                className="mt-2 w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-base text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
              >
                <option value="asc">Low to high</option>
                <option value="desc">High to low</option>
              </select>
            </label>

            <div className="flex flex-wrap gap-2 lg:col-span-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ${
                    activeCategory === category
                      ? "border-rose-500 bg-rose-500 text-white shadow-sm"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-base font-semibold text-gray-900">
                Loading stays...
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Finding places that match your trip.
              </p>
            </div>
          ) : filteredListings.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-xl font-bold text-rose-500">
                !
              </div>
              <p className="mt-5 text-lg font-bold text-gray-950">
                No stays found
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Try changing your search, selecting another category, or
                switching the price sort.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
