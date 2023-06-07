import data from '../genres.json';
import customSelect from 'custom-select';
import 'custom-select/build/custom-select.css';
import movieCardMarkup from '../markup/movieCardMarkup';
import { Notify } from 'notiflix';
import { loadMovies } from '../api/libraryAPI';
import initRatings from '../utils/initRating';

const genresSelectEl = document.getElementById('genres-select');
const moviesListEl = document.getElementById('library-movie-list');
const emptyLibEl = document.getElementById('lib-empty');
const libCatalogEl = document.getElementById('lib-catalog');
const loadMoreBtnEl = document.getElementById('lib-load-more');

const PAGE_SIZE = 9;
let page = 1;

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateGenresOptions(data.genres);
  initLibrary();

  const genreSelect = customSelect(genresSelectEl)[0];

  genreSelect.select.addEventListener('change', filterMoviesByGenre);
  loadMoreBtnEl.addEventListener('click', onLoadMore);
}

function populateGenresOptions(genres) {
  genres.forEach(genre => {
    const optionEl = document.createElement('option');

    optionEl.textContent = genre.name;
    optionEl.value = genre.id;

    genresSelectEl.appendChild(optionEl);
  });
}

function appendMoviesToLibrary(movies) {
  moviesListEl.insertAdjacentHTML(
    'beforeend',
    movies.map(movieCardMarkup).join('')
  );
  initRatings();
}

function filterMoviesByGenre(evt) {
  const movies = moviesListEl.childNodes;
  let filter = evt.target.value;

  if (filter === '-1') {
    movies.forEach(movie => movie.classList.remove('is-hidden'));
  } else {
    movies.forEach(movie => {
      movie.dataset.genres.split(',').includes(filter)
        ? movie.classList.remove('is-hidden')
        : movie.classList.add('is-hidden');
    });
  }
}

async function initLibrary() {
  try {
    const movies = await loadMovies(PAGE_SIZE);

    if (movies.length === 0) {
      emptyLibEl.classList.remove('is-hidden');
      libCatalogEl.classList.add('is-hidden');
      return;
    }

    if (movies.length < PAGE_SIZE) {
      loadMoreBtnEl.classList.add('is-hidden');
    }

    appendMoviesToLibrary(movies);
  } catch (err) {
    onError(err);
  }
}

async function onLoadMore() {
  debugger;
  const movies = await loadMovies(PAGE_SIZE, page);

  if (movies.length < PAGE_SIZE) {
    loadMoreBtnEl.classList.add('is-hidden');
  }

  page += 1;

  appendMoviesToLibrary(movies);
}

function onError(error) {
  console.error(error);
  Notify.failure(error.message);
}
