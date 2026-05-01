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
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <section>
          <input
            type="text"
            placeholder="Search stays"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-rose-500"
          />

          <h1 className="mb-6 text-2xl font-bold text-gray-900">
            Featured stays
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
