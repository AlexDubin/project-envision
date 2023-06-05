import data from '../genres.json';
import customSelect from 'custom-select';
import 'custom-select/build/custom-select.css';
import movieCardMarkup from '../markup/movieCardMarkup';
import { Notify } from 'notiflix';
import { loadMovies } from '../api/libraryAPI';
import initRatings from '../utils/initRating';
import axios from 'axios';
import { fn } from 'jquery';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE3NzU3ZjU2ZDg1NmM5YzE2MmE1OWEzZWZlMmY5MyIsInN1YiI6IjY0NzhkNWZjOWI2ZTQ3MDBkZThlOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BE22YVTai34Dh5C1jSxEZ2DzzjnxJfKFgEIpWS2JFcI',
    accept: 'application/json',
  },
};

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
    const movies = loadMovies();
    if (movies.length === 0) {
      emptyLibEl.classList.remove('is-hidden');
      libCatalogEl.classList.add('is-hidden');
      return;
    }

    let resultMovies = [];

    if (movies.length <= PAGE_SIZE) {
      loadMoreBtnEl.classList.add('is-hidden');
      resultMovies = await Promise.all(movies.map(fetchMovie));
    } else {
      resultMovies = await Promise.all(
        movies.slice(0, PAGE_SIZE).map(fetchMovie)
      );
    }

    appendMoviesToLibrary(resultMovies);
  } catch (err) {
    onError(err);
  }
}

async function fetchMovie({ id }) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}?language=en-US`,
    options
  );
  const {
    data: { poster_path, title, vote_average, release_date, genres },
  } = responce;
  const genre_ids = genres.map(({ id }) => id);

  return { genre_ids, poster_path, title, vote_average, release_date };
}

async function onLoadMore() {
  try {
    const movies = loadMovies();
    let resultMovies = [];
    const moviesBefore = PAGE_SIZE * page;

    if (movies.length - moviesBefore <= PAGE_SIZE) {
      loadMoreBtnEl.classList.add('is-hidden');
      resultMovies = await Promise.all(
        movies.slice(moviesBefore).map(fetchMovie)
      );
    } else {
      resultMovies = await Promise.all(
        movies.slice(moviesBefore, moviesBefore + PAGE_SIZE).map(fetchMovie)
      );
      page += 1;
    }

    appendMoviesToLibrary(resultMovies);
  } catch (err) {
    onError(err);
  }
}

function onError(error) {
  console.error(error);
  Notify.failure(error.message);
}
