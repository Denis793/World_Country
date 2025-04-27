# List of Countries

This project displays a list of countries in the form of cards. Each card shows:

- The country's flag
- Country name
- Population
- Region
- Capital

Users can:

- Search for a country by its name
- Filter countries by region

The project features a dark theme for a modern and user-friendly appearance.

## How It Works

- When the page loads, all countries are fetched (either from an API like REST Countries API or from a local JSON file).
- As the user types into the search input, the list of country cards dynamically updates based on the search term.
- When the user selects a region from the dropdown menu, only countries from that region are shown.
- Search and region filtering can be used together for more precise results.

## Technologies Used

### HTML

- Defines the basic structure of the page.
- Includes search input, region filter dropdown, and a container for country cards.

### CSS

- Provides the styling for the page.
- Implements a dark theme (dark background, light text).
- Uses CSS Grid or Flexbox to arrange country cards.
- Ensures flags, text, and containers are styled consistently.

### JavaScript

- Handles data fetching from an API or local JSON.
- Dynamically creates and renders country cards.
- Adds functionality for live search filtering.
- Implements region-based filtering.
- Listens to user events (input typing and dropdown selection) and updates the UI accordingly.

## Summary

This project demonstrates how to build an interactive, user-friendly country listing page with real-time search and filtering functionality using core web technologies: HTML, CSS, and JavaScript.
