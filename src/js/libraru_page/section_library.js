import data from '../genres.json';
import customSelect from 'custom-select';
import 'custom-select/build/custom-select.css';

const genresSelectEl = document.getElementById('genres-select');

populateGenresOptions(data.genres);

customSelect(genresSelectEl);

function populateGenresOptions(genres) {
  genres.forEach(genre => {
    const optionEl = document.createElement('option');

    optionEl.textContent = genre.name;
    optionEl.value = genre.id;

    genresSelectEl.appendChild(optionEl);
  });
}

const year = 2003;
const country = undefined;
const yearParam = year ? `&year=${year}` : '';
const countryParam = country ? `&region=${country}` : '';
const params = `lang=en${yearParam}${countryParam}`;
