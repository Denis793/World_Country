import { displayCountries } from './display.js';
import { showError, hideError } from './error.js';

export function setupFilters(countries) {
  const searchInput = document.getElementById('search');
  const regionFilter = document.getElementById('region-filter');
  const errorMessage = document.getElementById('error-message');

  if (!searchInput || !regionFilter || !errorMessage) {
    console.error('Filter elements or error message element not found in DOM');
    return;
  }

  if (!countries || !Array.isArray(countries)) {
    console.error('Countries data is invalid or undefined:', countries);
    return;
  }

  function filterCountries() {
    const searchTerm = searchInput.value.toLowerCase();
    const region = regionFilter.value;
    const filteredCountries = countries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm);
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });

    hideError(errorMessage);
    errorMessage.setAttribute('data-type', '');

    if (filteredCountries.length === 0) {
      errorMessage.setAttribute('data-type', 'not-found');
      showError(errorMessage, 'Країну не знайдено. Спробуйте інший запит.');
    }

    displayCountries(filteredCountries);
  }

  searchInput.addEventListener('input', filterCountries);
  regionFilter.addEventListener('change', filterCountries);
}
