import type { Listing } from "@/types/listing";

export const listings: Listing[] = [
  {
    id: "1",
    title: "Sunny loft near downtown",
    location: "Austin, Texas",
    pricePerNight: 142,
    rating: 4.92,
    reviewCount: 128,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Apartment",
    amenities: ["Wifi", "Kitchen", "Air conditioning"],
    host: {
      name: "Maya",
      isSuperhost: true,
    },
  },
  {
    id: "2",
    title: "Cozy cabin with mountain views",
    location: "Asheville, North Carolina",
    pricePerNight: 188,
    rating: 4.86,
    reviewCount: 94,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Cabin",
    amenities: ["Fireplace", "Wifi", "Free parking"],
    host: {
      name: "Elliot",
      isSuperhost: false,
    },
  },
  {
    id: "3",
    title: "Modern condo by the waterfront",
    location: "Seattle, Washington",
    pricePerNight: 214,
    rating: 4.97,
    reviewCount: 211,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Condo",
    amenities: ["Washer", "Kitchen", "Elevator"],
    host: {
      name: "Jordan",
      isSuperhost: true,
    },
  },
  {
    id: "4",
    title: "Quiet studio close to cafes",
    location: "Portland, Oregon",
    pricePerNight: 119,
    rating: 4.78,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Studio",
    amenities: ["Wifi", "Workspace", "Heating"],
    host: {
      name: "Priya",
      isSuperhost: false,
    },
  },
  {
    id: "5",
    title: "Beach house steps from the sand",
    location: "San Diego, California",
    pricePerNight: 267,
    rating: 4.89,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
    ],
    category: "House",
    amenities: ["Beach access", "Kitchen", "Patio"],
    host: {
      name: "Camila",
      isSuperhost: true,
    },
  },
  {
    id: "6",
    title: "Charming guest suite with garden",
    location: "Charleston, South Carolina",
    pricePerNight: 136,
    rating: 4.81,
    reviewCount: 83,
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=900&q=80",
    ],
    category: "Guest suite",
    amenities: ["Garden", "Wifi", "Private entrance"],
    host: {
      name: "Noah",
      isSuperhost: false,
    },
  },
];
