import axios from 'axios';

const API_KEY = '381b93c9cb735b46bfc762a57bc33888';
const BASE_URL = 'https://api.themoviedb.org/3/';

let trailerContainerEl;
let noMovieContainerEl;
const heroEl = document.querySelector('.hero');
const trailerIframe = document.getElementById('trailerIframe');
const trailerBackdropEl = document.querySelector('.trailer-modal__backdrop');
const trailerCloseBtnEl = document.querySelector(
  '.trailer-modal__button-close'
);

heroEl.addEventListener('click', onTrailerBtnClick);

export async function onTrailerBtnClick(event) {
  try {
    const movieId =
      event.currentTarget.dataset.movieId || event.target.dataset.movieId;

    if (!movieId) return;
    showTrailerModal();

    trailerContainerEl = document.querySelector('.trailer-container');
    noMovieContainerEl = document.querySelector('.no-movie-container');

    trailerContainerEl.classList.remove('trailer-is-hidden');
    noMovieContainerEl.classList.add('trailer-is-hidden');

    await renderTrailer(movieId);
  } catch (error) {
    noMovieContainerEl.classList.remove('trailer-is-hidden');
    trailerContainerEl.classList.add('trailer-is-hidden');
  }
}

function showTrailerModal() {
  document.body.classList.add('show-trailer-modal');
  window.addEventListener('keydown', onEscPress);
  trailerBackdropEl.addEventListener('click', onBackdropClick);
  trailerCloseBtnEl.addEventListener('click', closeModal);
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  const backdrop = e.target;
  if (backdrop.classList.contains('trailer-modal__backdrop')) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.remove('show-trailer-modal');
  trailerIframe.src = '';
  window.removeEventListener('keydown', onEscPress);
  trailerBackdropEl.removeEventListener('click', onBackdropClick);
  trailerCloseBtnEl.removeEventListener('click', closeModal);

  trailerContainerEl.classList.add('trailer-is-hidden');
  noMovieContainerEl.classList.remove('trailer-is-hidden');
}

async function renderTrailer(movieId) {
  let movieTrailerKey = await getRandomTrailerKey(movieId);
  if (movieTrailerKey) {
    trailerIframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${movieTrailerKey}`
    );
  } else {
    trailerIframe.removeAttribute('src');
  }
}

async function getRandomTrailerKey(movieId) {
  try {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const params = {
      api_key: API_KEY,
    };

    const response = await axios.get(BASE_URL, { params });

    const movieTrailer = await response.data;

    if (movieTrailer.results.length === 0) {
      return null;
    }

    const trailers = movieTrailer.results.filter(
      trailer => trailer.type === 'Trailer' && trailer.site === 'YouTube'
    );

    if (trailers.length === 0) {
      return null;
    }

    return trailers[0].key;
  } catch (error) {
    console.error(error);
    return null;
  }
}
