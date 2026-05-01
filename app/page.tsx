"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import { listings } from "../data/listing";
import type { Listing } from "../types/listing";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] =
    useState<Listing[]>(listings);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const nextListings = listings.filter((listing) => {
        const searchText = searchTerm.toLowerCase();
        const title = listing.title.toLowerCase();
        const location = listing.location.toLowerCase();

        return title.includes(searchText) || location.includes(searchText);
      });

      setFilteredListings(nextListings);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [searchTerm]);

  const featuredListings = filteredListings.slice(0, 4);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <input
            type="text"
            placeholder="Search stays"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="mb-8 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
          />

          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-rose-500">
              Start exploring
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-950 sm:text-3xl">
              Featured stays
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
