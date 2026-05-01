# Technical Specification

## Project Summary

This project is a simplified Airbnb clone built with Next.js App Router, functional React components, Tailwind CSS, and mobile-first layouts.

The base implementation must satisfy the bootcamp requirements first. Optional enhancements should only be added after the required routes, state, data, and core pages are working.

## Required Routes

The project must include exactly these routes:

- `/`
- `/catalog`
- `/rooms/[id]`

No additional application routes should be added for the base implementation.

## Framework And Styling Requirements

- Use Next.js App Router.
- Use functional React components.
- Use `useState` for search, filters, and UI state.
- Use `useEffect` for data loading or initialization.
- Use Tailwind CSS only.
- Do not use UI component libraries.
- Build mobile-first layouts, then enhance for larger screens.

## Route Responsibilities

## `/`

Home page.

Responsibilities:

- Present the simplified Airbnb-style landing experience.
- Show a search area.
- Show featured or recommended listings.
- Provide a clear path to `/catalog`.
- Use reusable components such as Header, SearchBar, SectionHeader, ListingCard, BottomNav, and Footer.

## `/catalog`

Catalog page.

Responsibilities:

- Display all available listings.
- Allow the user to search by text.
- Allow the user to filter by simple criteria such as amenities, property type, or price display.
- Show listing results using reusable ListingCard components.
- Link each listing to `/rooms/[id]`.
- Demonstrate client-side state with `useState`.
- Demonstrate initialization or data loading with `useEffect`.

## `/rooms/[id]`

Room details page.

Responsibilities:

- Read the room id from the route.
- Find and display the matching room.
- Show room images, title, location, rating, price, amenities, host information, and description.
- Include simple UI state where appropriate, such as selected image, wishlist toggle, or expanded details.
- Provide a way back to the catalog.

## Component Breakdown

## Header

Responsibilities:

- Show app branding.
- Provide navigation links to `/` and `/catalog`.
- Contain or support the search entry point.
- Stay simple and usable on small screens.

## SearchBar

Responsibilities:

- Display a search input.
- Accept an initial value when needed.
- Notify the parent component when the search value changes or submits.
- Support catalog filtering through state.

## CategoryTabs

Responsibilities:

- Display simple browsing categories.
- Track the active category through parent state.
- Keep category choices limited to the simplified project scope.

## FilterChips

Responsibilities:

- Display amenity or property filter options.
- Allow the user to toggle selected filters.
- Pass selected filters back to the catalog page.

## ListingCard

Responsibilities:

- Show a listing preview.
- Display image, title, location, price, rating, and badges.
- Link to the matching room details route.
- Include optional wishlist or carousel interaction.

## ImageCarousel

Responsibilities:

- Show one image at a time from a list of listing images.
- Use local UI state for the current image index.
- Support simple next and previous controls.

## HeartButton

Responsibilities:

- Display a wishlist-style toggle.
- Use state from the parent component or local state depending on scope.
- Provide visual feedback when selected.

## Badge

Responsibilities:

- Display short labels such as "Guest favorite", "Popular", or "Superhost".
- Keep label styles consistent across cards and detail views.

## SectionHeader

Responsibilities:

- Display section titles and optional supporting text.
- Keep repeated page sections consistent.

## BottomNav

Responsibilities:

- Provide mobile-first navigation.
- Link to the required routes only.
- Stay fixed or easy to access on smaller screens if used.

## Footer

Responsibilities:

- Display simple support, hosting, and company-style links.
- Keep content informational only.
- Avoid adding extra application routes for the base implementation.

## State Management

## `useState`

Use `useState` for interactive UI state, including:

- Search text on the home and catalog pages.
- Selected filters such as amenities or property type.
- Active category tab if category tabs are included.
- Wishlist heart state.
- Current image index in image carousel components.
- Expanded or collapsed detail sections.
- Price display toggle, such as nightly price or total price.
- Mobile UI state, such as whether filters are open.

## `useEffect`

Use `useEffect` for initialization and data behavior, including:

- Loading listing data from a local data file into component state.
- Finding a room by id when the room details page loads.
- Initializing filtered catalog results when search or filters change.
- Reading any optional saved UI preferences from browser storage if implemented later.

For the base implementation, local static data is enough. An API is not required.

## Data Models

## Listing

A Listing represents the preview information shown in the catalog.

Fields:

- `id`: Unique listing id.
- `title`: Listing name.
- `location`: City, region, and optional coordinates.
- `images`: Image paths or URLs.
- `pricePerNight`: Nightly price.
- `totalPrice`: Optional total price for a date range.
- `currency`: Currency label such as USD.
- `rating`: Average rating.
- `reviewCount`: Number of reviews.
- `propertyType`: Type of stay, such as condo, apartment, or cabin.
- `amenities`: List of available amenities.
- `badges`: Labels such as guest favorite, popular, or superhost.
- `hostId`: Id of the related host.

## Room

A Room represents the full details for one listing.

Fields:

- `id`: Unique room id that matches the dynamic route.
- `listingId`: Related listing id if listing and room data are separated.
- `title`: Full room title.
- `description`: Longer description for the details page.
- `location`: City, region, address label, and optional coordinates.
- `images`: Full image gallery.
- `pricePerNight`: Nightly price.
- `currency`: Currency label.
- `rating`: Average rating.
- `reviewCount`: Number of reviews.
- `bedrooms`: Number of bedrooms.
- `beds`: Number of beds.
- `bathrooms`: Number of bathrooms.
- `maxGuests`: Maximum guest count.
- `amenities`: Full amenity list.
- `rules`: Optional house rules.
- `host`: Related host information.

## Host

A Host represents the person or profile connected to a room.

Fields:

- `id`: Unique host id.
- `name`: Host display name.
- `avatar`: Host image path or URL.
- `isSuperhost`: Whether the host has a superhost-style badge.
- `joinedYear`: Year the host joined.
- `responseRate`: Optional response rate text.
- `description`: Short host bio or hosting note.

## Suggested Folder Structure

Use a simple structure that matches the Next.js App Router:

- `app`
- `app/page.tsx`
- `app/catalog/page.tsx`
- `app/rooms/[id]/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components`
- `components/Header.tsx`
- `components/SearchBar.tsx`
- `components/CategoryTabs.tsx`
- `components/FilterChips.tsx`
- `components/ListingCard.tsx`
- `components/ImageCarousel.tsx`
- `components/HeartButton.tsx`
- `components/Badge.tsx`
- `components/SectionHeader.tsx`
- `components/BottomNav.tsx`
- `components/Footer.tsx`
- `types`
- `types/listing.ts`
- `types/room.ts`
- `types/host.ts`
- `data`
- `data/listings.ts`
- `data/rooms.ts`
- `data/hosts.ts`

The exact filenames can be adjusted to match the existing project, but the app should keep the same basic separation between routes, reusable components, types, and local data.

## Step-By-Step Implementation Plan

1. Confirm the project is using the Next.js App Router.
2. Create or verify the required route files for `/`, `/catalog`, and `/rooms/[id]`.
3. Set up the shared app layout and global Tailwind styles.
4. Create local data files for listings, rooms, and hosts.
5. Define TypeScript types for Listing, Room, and Host.
6. Build the core shared components: Header, SearchBar, ListingCard, Badge, SectionHeader, BottomNav, and Footer.
7. Build the home page with search, featured listings, and a link to the catalog.
8. Build the catalog page with listing data, search state, filter state, and filtered results.
9. Build the room details page using the dynamic id route.
10. Add `useState` interactions for search, filters, wishlist toggles, image carousel, and UI display options.
11. Add `useEffect` where needed for loading local data, initializing page state, or updating filtered results.
12. Apply mobile-first Tailwind classes, then improve tablet and desktop layouts.
13. Verify that only the required routes exist in the base implementation.
14. Test navigation from home to catalog to room details and back.
15. Review the UI for readability, spacing, keyboard access, and responsive behavior.

## Professional Enhancements / Future Improvements

These ideas are optional and should only be considered after the base bootcamp requirements are complete.

Optional enhancements:

- Better responsive layout for tablet and desktop screens.
- Accessibility improvements such as stronger focus states, better labels, and improved keyboard navigation.
- Loading states for catalog and room detail data.
- Empty states for searches with no results.
- Wishlist feature with saved favorite listings.
- Reusable button, input, card, and layout components.
- Improved image carousel controls and image indicators.
- Better filter UX with filter drawers or modal panels on mobile.
- Price toggle for showing nightly price or total price.
- More polished bottom navigation for mobile.
- Improved room details layout with sticky booking summary on larger screens.
- Simple local storage for wishlist or search preferences.
- More realistic data with additional listings, amenities, and hosts.
- Stronger visual hierarchy for cards, sections, and detail pages.
- Basic SEO metadata for each route.
- More complete error handling when a room id does not match existing data.
