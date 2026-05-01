import Header from "../../components/Header";
import ListingCard from "../../components/ListingCard";
import { listings } from "../../data/listing";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-rose-500">
              Browse places
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-950 sm:text-3xl">
              All stays
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
