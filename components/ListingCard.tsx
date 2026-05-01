import Link from "next/link";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  const imageUrl = listing.images[0];

  return (
    <Link href={`/rooms/${listing.id}`} className="block">
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div
          className="h-56 bg-gray-200 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={`Photo of ${listing.title}`}
        />

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {listing.title}
              </h2>
              <p className="text-sm text-gray-600">{listing.location}</p>
            </div>

            <p className="text-sm font-medium text-gray-900">
              {listing.rating.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-gray-600">{listing.reviewCount} reviews</p>

          <p className="text-base font-semibold text-gray-900">
            ${listing.pricePerNight}{" "}
            <span className="font-normal text-gray-600">night</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
