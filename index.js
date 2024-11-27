const countriesContainer = document.querySelector(".countries-container");
const rangeValue = document.getElementById("rangeValue");

let countries = []; //On crée le tableau qui va contenir tous les pays
async function getCountries() {
  await fetch("countries.json")
    .then((response) => response.json())
    .then((data) => (countries = data));
}

function showCountries() {
  countriesContainer.innerHTML = countries.map(
    (country) =>
      `
         <li class="card">
                <img src="${country.flags.png}">
                <h3>${country.name.common}</h3>
                <h3>Capitale: ${country.capital}<h3>
                <h3>Population: ${country.population}<h3>
         </li>
        `
  );
}

getCountries().then(() => showCountries());
