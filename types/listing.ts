export type ListingHost = {
  name: string;
  isSuperhost: boolean;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  amenities: string[];
  host: ListingHost;
};
