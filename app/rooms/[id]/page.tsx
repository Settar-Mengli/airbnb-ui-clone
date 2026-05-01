import Link from "next/link";
import Header from "@/components/Header";
import { listings } from "@/data/listing";

type RoomDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomDetailPage({
  params,
}: RoomDetailPageProps) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">
          <Link href="/catalog" className="text-sm font-medium text-rose-500">
            Back to catalog
          </Link>

          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            Room not found
          </h1>
          <p className="mt-2 text-gray-600">
            The room you are looking for does not exist.
          </p>
        </main>
      </>
    );
  }

  const imageUrl = listing.images[0];

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Link href="/catalog" className="text-sm font-medium text-rose-500">
          Back to catalog
        </Link>

        <section className="mt-6">
          <div
            className="h-72 rounded-lg bg-gray-200 bg-cover bg-center sm:h-96"
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label={`Photo of ${listing.title}`}
          />

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-sm font-medium text-rose-500">
                {listing.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {listing.title}
              </h1>
              <p className="mt-2 text-gray-600">{listing.location}</p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
                <span>{listing.rating.toFixed(2)} rating</span>
                <span>{listing.reviewCount} reviews</span>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Hosted by {listing.host.name}
                </h2>
                <p className="mt-2 text-gray-600">
                  {listing.host.isSuperhost
                    ? "Superhost with a highly rated stay."
                    : "Friendly host for this stay."}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Amenities
                </h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {listing.amenities.map((amenity) => (
                    <li key={amenity} className="text-gray-700">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-gray-900">
                ${listing.pricePerNight}
                <span className="text-base font-normal text-gray-600">
                  {" "}
                  night
                </span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Booking details will go here.
              </p>
              <button className="mt-5 w-full rounded-lg bg-rose-500 px-4 py-3 text-sm font-semibold text-white">
                Reserve
              </button>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
