export function displayCountries(countriesToShow) {
  const countriesList = document.getElementById('countries-list');
  countriesList.innerHTML = '';
  countriesToShow.forEach((country) => {
    const card = document.createElement('div');
    card.classList.add('country-card');
    card.innerHTML = `
          <img src="${country.flag}" alt="${country.name} flag">
          <h2>${country.name}</h2>
          <p><strong>Population:</strong> ${country.population}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
      `;
    countriesList.appendChild(card);
  });
}
