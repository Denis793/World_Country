import { fetchCountries } from './api.js';
import { displayCountries } from './display.js';
import { setupFilters } from './filters.js';
import { setupThemeToggle } from './theme.js';
import { showError, hideError } from './error.js';

async function init() {
  const errorMessage = document.getElementById('error-message');
  const closeErrorButton = document.getElementById('close-error');
  const retryButton = document.getElementById('retry');
  const countriesList = document.getElementById('countries-list');
  const searchInput = document.getElementById('search');
  const regionFilter = document.getElementById('region-filter');

  if (!errorMessage || !closeErrorButton || !retryButton || !countriesList || !searchInput || !regionFilter) {
    console.error('Елементи для повідомлення про помилку, списку країн або фільтрів не знайдені');
    return;
  }

  closeErrorButton.addEventListener('click', () => {
    hideError(errorMessage);
    errorMessage.setAttribute('data-type', '');
  });

  retryButton.addEventListener('click', async () => {
    hideError(errorMessage);
    errorMessage.setAttribute('data-type', '');
    const result = await fetchCountries();
    if (result.success) {
      displayCountries(result.data);
      setupFilters(result.data);

      const searchTerm = searchInput.value.toLowerCase();
      const region = regionFilter.value;
      const filteredCountries = result.data.filter((country) => {
        const matchesSearch = country.name.toLowerCase().includes(searchTerm);
        const matchesRegion = region ? country.region === region : true;
        return matchesSearch && matchesRegion;
      });

      if (filteredCountries.length === 0) {
        errorMessage.setAttribute('data-type', 'not-found');
        showError(errorMessage, 'Країну не знайдено. Спробуйте інший запит.');
      }

      displayCountries(filteredCountries);
    } else {
      errorMessage.setAttribute('data-type', 'loading-error');
      showError(errorMessage, `Помилка завантаження даних: ${result.error}. Спробуйте ще раз пізніше.`);
    }
  });

  try {
    const result = await fetchCountries();
    if (result.success) {
      displayCountries(result.data);
      setupFilters(result.data);
      hideError(errorMessage);
      errorMessage.setAttribute('data-type', '');
    } else {
      console.error('Помилка при завантаженні даних:', result.error);
      errorMessage.setAttribute('data-type', 'loading-error');
      showError(errorMessage, `Помилка завантаження даних: ${result.error}. Спробуйте ще раз пізніше.`);
    }
  } catch (error) {
    errorMessage.setAttribute('data-type', 'loading-error');
    showError(errorMessage, 'Помилка завантаження даних. Перевірте підключення до мережі.');
  }

  setupThemeToggle();
}

init();
