import movieCardMarkup from '../markup/movieCardMarkup';
import populateOptions from '../utils/populateOptions';
import initRatings from '../utils/initRating';
import { loadMovies, loadMovie } from '../api/libraryAPI';
import { onOpenModalFilmById } from '../modals/modal_film';
import refs from '../refs/library-refs';

import customSelect from 'custom-select';

import data from '../genres.json';
import 'custom-select/build/custom-select.css';
import loaderWrapper from '../loader';

const PAGE_SIZE = 9;
let page = 1;

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateOptions(data.genres, refs.genresSelectEl);
  initLibrary();

  const genreSelect = customSelect(refs.genresSelectEl)[0];

  genreSelect.select.addEventListener('change', filterMoviesByGenre);
  refs.loadMoreBtnEl.addEventListener('click', onLoadMore);
}

function appendMoviesToLibrary(movies) {
  refs.moviesListEl.insertAdjacentHTML(
    'beforeend',
    movies.map(movieCardMarkup).join('')
  );
  initRatings();
}

async function initLibrary() {
  const movies = await loaderWrapper(loadMovies(PAGE_SIZE));

  if (movies.length === 0) {
    refs.emptyLibEl.classList.remove('is-hidden');
    refs.libCatalogEl.classList.add('is-hidden');
    return;
  }

  if (movies.length < PAGE_SIZE) {
    refs.loadMoreBtnEl.classList.add('is-hidden');
  }

  appendMoviesToLibrary(movies);

  // START Добавляем слушателя для открытия модалки
  const catalog = document.querySelector('.list-movie-card.js-gallery');
  catalog.addEventListener('click', e => {
    const closestId = e.target.closest('.m-modal');
    const movieId = closestId.dataset.id;
    onOpenModalFilmById(movieId);
  });
  // END
}

export async function removeMovieFromLibrary(id) {
  const movieCardToRemove = refs.moviesListEl.querySelector(
    `li.item-movie-card[data-id="${id}"]`
  );
  movieCardToRemove?.remove();

  const moviesLength = refs.moviesListEl.children.length;

  if (moviesLength < PAGE_SIZE * page) {
    loaderWrapper(loadMovie(moviesLength))
      .then(movie => {
        if (!movie) {
          libRefs.loadMoreBtnEl.classList.add('is-hidden');
          return;
        }

        appendMoviesToLibrary([movie]);
      })
      .catch(console.log);
  }

  if (moviesLength === 0) {
    libRefs.emptyLibEl.classList.remove('is-hidden');
    libRefs.libCatalogEl.classList.add('is-hidden');
  }
}

function filterMoviesByGenre(evt) {
  const movies = refs.moviesListEl.childNodes;
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

async function onLoadMore() {
  resetSelect();
  const movies = await loaderWrapper(loadMovies(PAGE_SIZE, page));

  if (movies.length < PAGE_SIZE) {
    refs.loadMoreBtnEl.classList.add('is-hidden');
  }

  page += 1;

  appendMoviesToLibrary(movies);
}

function resetSelect() {
  refs.genresSelectEl.customSelect.value = '-1';
  const evt = new Event('change');
  refs.genresSelectEl.dispatchEvent(evt);
}
