# Project Context

## What This Project Is

This project is a simplified Airbnb clone built with Next.js. It gives users a clean, mobile-first way to browse short-term stay listings, search available rooms, and view the details for a selected room.

The project focuses on the core Airbnb-style experience without adding extra features or routes that are outside the bootcamp requirements.

## What The User Can Do

Users can:

- Visit the home page and understand what the app offers.
- Use a search area to start looking for places to stay.
- Browse a catalog of available listings.
- Filter or refine the catalog view using simple UI controls.
- Select a room from the catalog.
- View details about a specific room, including images, location, price, host information, and amenities.
- Navigate between the home page, catalog page, and room details page.

## Pages

## Home Page

Route: `/`

The home page introduces the Airbnb-style experience. It should include a simple header, a search area, a few highlighted listings or categories, and a clear way to continue into the catalog.

This page is meant to feel welcoming and easy to use on a phone first. It should not be a marketing-only page; it should help the user begin browsing places to stay.

## Catalog Page

Route: `/catalog`

The catalog page shows a list or grid of available stays. Users can browse listing cards, use search or filter controls, and choose a listing that interests them.

Each listing card should show the most important information at a glance, such as the image, title, location, rating, price, and a short badge or label when useful.

## Room Details Page

Route: `/rooms/[id]`

The room details page shows more information about one selected room. It should include larger images, room title, location, price, rating, amenities, host details, and basic booking-style information.

This page helps the user decide whether the room is a good fit after selecting it from the catalog.

## Main Components

The app should be built from reusable pieces, including:

- Header: Shows the app identity and main navigation.
- SearchBar: Lets the user enter or update a search.
- CategoryTabs: Lets the user switch between simple browsing categories if included.
- FilterChips: Lets the user select amenities or listing types.
- ListingCard: Shows a preview of one stay in the catalog.
- ImageCarousel: Lets the user view multiple images for a listing.
- HeartButton: Provides a wishlist-style UI interaction.
- Badge: Shows labels such as "Guest favorite" or "Popular".
- SectionHeader: Labels groups of listings or page sections.
- BottomNav: Gives mobile users quick navigation.
- Footer: Shows basic support, hosting, and company links.

## User Flow

A typical user starts on the home page at `/`. They see the search area and featured stay content, then choose to browse all listings by going to `/catalog`.

On the catalog page, the user scrolls through listing cards and may adjust search text, filters, or simple display options. When the user finds a listing they like, they select it.

Selecting a listing opens the details page at `/rooms/[id]`. The user can review the room information, images, price, amenities, and host details. From there, they can go back to the catalog to continue browsing or return to the home page.

The whole experience should feel simple, familiar, and easy to use on a mobile device first.
