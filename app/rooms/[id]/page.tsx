"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import { listings } from "@/data/listing";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const [guestCount, setGuestCount] = useState(1);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const { id } = params;
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/catalog"
            className="text-sm font-semibold text-rose-500 transition hover:text-rose-600"
          >
            Back to catalog
          </Link>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-950">
              Room not found
            </h1>
            <p className="mt-2 text-gray-600">
              The room you are looking for does not exist.
            </p>
          </div>
        </main>
      </>
    );
  }

  const imageUrl = listing.images[currentPhotoIndex] || listing.images[0];
  const hasMultiplePhotos = listing.images.length > 1;

  function showPreviousPhoto() {
    setCurrentPhotoIndex((currentIndex) => {
      if (currentIndex === 0) {
        return listing.images.length - 1;
      }

      return currentIndex - 1;
    });
  }

  function showNextPhoto() {
    setCurrentPhotoIndex((currentIndex) => {
      if (currentIndex === listing.images.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/catalog"
          className="text-sm font-semibold text-rose-500 transition hover:text-rose-600"
        >
          Back to catalog
        </Link>

        <section className="mt-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div
              className="h-72 bg-gray-200 bg-cover bg-center sm:h-96 lg:h-[480px]"
              style={{ backgroundImage: `url(${imageUrl})` }}
              aria-label={`Photo of ${listing.title}`}
            />

            <div className="flex items-center justify-between gap-4 border border-t-0 border-gray-200 px-4 py-3">
              <button
                type="button"
                onClick={showPreviousPhoto}
                disabled={!hasMultiplePhotos}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:border-gray-300 disabled:hover:bg-white"
              >
                Previous
              </button>
              <p className="text-sm font-medium text-gray-600">
                Photo {currentPhotoIndex + 1} of {listing.images.length}
              </p>
              <button
                type="button"
                onClick={showNextPhoto}
                disabled={!hasMultiplePhotos}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:border-gray-300 disabled:hover:bg-white"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="text-sm font-semibold uppercase text-rose-500">
                {listing.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-950 sm:text-4xl">
                {listing.title}
              </h1>
              <p className="mt-3 text-base font-medium text-gray-700">
                {listing.location}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  <span aria-hidden="true">&#9733;</span>{" "}
                  {listing.rating.toFixed(2)} rating
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  {listing.reviewCount} reviews
                </span>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-950">
                  Hosted by {listing.host.name}
                </h2>
                <p className="mt-2 text-gray-600">
                  {listing.host.isSuperhost
                    ? "Superhost with a highly rated stay."
                    : "Friendly host for this stay."}
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-950">
                  Amenities
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {listing.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      <span className="text-sm font-medium text-gray-800">
                        {amenity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-md lg:sticky lg:top-24">
              <p className="text-2xl font-bold text-gray-950">
                ${listing.pricePerNight}
                <span className="text-base font-normal text-gray-600">
                  {" "}
                  night
                </span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Booking details will go here.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl border border-gray-300">
                <div className="border-b border-gray-200 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Dates
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    Add travel dates
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Guests
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestCount((currentCount) =>
                          Math.max(1, currentCount - 1),
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-semibold text-gray-700 transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:text-gray-400"
                      disabled={guestCount === 1}
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold text-gray-900">
                      {guestCount} {guestCount === 1 ? "guest" : "guests"}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setGuestCount((currentCount) => currentCount + 1)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-semibold text-gray-700 transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button className="mt-5 w-full rounded-lg bg-rose-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                Reserve
              </button>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
