import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import { listings } from "../data/listing";

export default function Home() {
  const featuredListings = listings.slice(0, 4);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <section>
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
