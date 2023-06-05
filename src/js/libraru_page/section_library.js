import data from '../genres.json';
import customSelect from 'custom-select';
import 'custom-select/build/custom-select.css';

const genresSelectEl = document.getElementById('genres-select');

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateGenresOptions(data.genres);

  customSelect(genresSelectEl);
}

function populateGenresOptions(genres) {
  genres.forEach(genre => {
    const optionEl = document.createElement('option');

    optionEl.textContent = genre.name;
    optionEl.value = genre.id;

    genresSelectEl.appendChild(optionEl);
  });
}
