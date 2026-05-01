import Link from "next/link";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  const imageUrl = listing.images[0];

  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
    >
      <article className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:border-gray-300 group-hover:shadow-lg">
        <div
          className="h-56 bg-gray-200 bg-cover bg-center transition duration-200 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={`Photo of ${listing.title}`}
        />

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="line-clamp-2 text-base font-semibold leading-snug text-gray-950">
                {listing.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-gray-600">
                {listing.location}
              </p>
            </div>

            <p className="shrink-0 rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-900">
              {listing.rating.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-gray-500">{listing.reviewCount} reviews</p>

          <p className="text-base font-bold text-gray-950">
            ${listing.pricePerNight}{" "}
            <span className="font-normal text-gray-600">night</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
