const API_URL = 'https://restcountries.com/v3.1/all';

export async function fetchCountries() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Не вдалося завантажити дані');
    }
    const data = await response.json();

    const countries = data.map((country) => ({
      name: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region || 'Unknown',
      capital: country.capital ? country.capital[0] : 'N/A',
      flag: country.flags.png,
    }));

    return { success: true, data: countries };
  } catch (error) {
    console.error('Помилка завантаження даних:', error);
    return { success: false, error: error.message };
  }
}
